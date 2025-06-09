import {listsInterface, industry, sellerFinancingDataInterface} from "../types/listsInterface";

export const addBusiness = async (db: any, businessData: any, userId: number | null): Promise< number | null > => {

    let newBusinessId :number|null = null;

    try {
        const unixTimeStampForNow = Math.floor(Date.now() / 1000);
        // @ts-ignore
        const query = "INSERT INTO business (name, phone, user_id, created_timestamp, last_updated_timestamp) VALUES (?, ?, ?, ?, ?)";
        const [result] = await db.query(query, [
            businessData.businessName,
            businessData.phone,
            userId,
            unixTimeStampForNow,
            unixTimeStampForNow,
        ]);
        newBusinessId = result.insertId; // Use insertId to get the last inserted ID in MariaDB
        return newBusinessId;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const getBusinessListings  = async (db: any, siteId: number): Promise< any[] | null > => {

    try {
        let query;
        let result;

        if (siteId == 3) {
            query = 'SELECT business.route, business.desired_price, business.name, SUBSTRING(business.sellers_description, 1, 330) AS sellers_description FROM business';
        } else {
            query = `SELECT business.route, business.desired_price, business.name, SUBSTRING(business.sellers_description, 1, 330) AS sellers_description FROM business INNER JOIN sites_businesses ON business.id = sites_businesses.business_id WHERE sites_businesses.site_id = ${siteId}`;
        }

        [result] = await db.query(query);

        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const getBusiness  = async (db: any, route: string, lists: listsInterface): Promise< any[] | null > => {

    try {
        const query = `CALL GetBusinessAndImages('${route}')`;
        const [result] = await db.query(query);

        const rawBusinessData = await result;
        const businessData = rawBusinessData[0][0];

        // console.log("businessData ****** ########",rawBusinessData);
        const industryName : string = lists.industries[businessData.industry_id].name;
        const subIndustryName : string = lists.subIndustries[businessData.sub_industry_id];
        const reasonForSelling = lists.reasonsForSelling[businessData.reason_for_selling_id];
        const successorOnboarding = lists.successorOnboarding[businessData.successor_onboarding_id];
        const sellerFinancing = lists.sellerFinancing[businessData.seller_financing_id];
        const images =  rawBusinessData[1];

        businessData.industry_name = industryName;
        businessData.sub_industry_name = subIndustryName;
        businessData.reason_for_selling = reasonForSelling;
        businessData.successor_onboarding = successorOnboarding;
        businessData.seller_financing = sellerFinancing;
        businessData.images = images;

        console.log("businessData ready ^^^^^",businessData);

        return businessData;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


export const updateBusiness = async (db: any, data: any, userId: number | null): Promise< number | null > => {

    try {
        const unixTimeStampForNow = Math.floor(Date.now() / 1000);
        // @ts-ignore
        const query = "UPDATE business SET name = ?, phone = ?, user_id = ?, last_updated_timestamp = ? WHERE id = ?";
        const [result] = await db.query(query, [
            data.businessName,
            data.phone,
            userId,
            unixTimeStampForNow,
            data.id,
        ]);
        return result.affectedRows;
    } catch (err) {
        console.error(err);
        throw err;
    }
}