import {
    listsInterface,
    industryDataInterface,
    subIndustryDataInterface,
    reasonsForSellingDataInterface,
    sellerFinancingDataInterface,
    successorOnboardingDataInterface,
    sitesDataInterface
} from "../types/listsInterface";

export const getIndustries = async (db: any): Promise< any[] | null > => {

    try {
        const query = "SELECT * FROM industry";
        const [result] = await db.query(query);
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


export const getSubIndustries = async (db: any): Promise< any[] | null > => {

    try {
        const query = "SELECT * FROM sub_industry";
        const [result] = await db.query(query);
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const getReasonsForSelling = async (db: any): Promise< any[] | null > => {

    try {
        const query = "SELECT * FROM reason_for_selling";
        const [result] = await db.query(query);
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const getSellerFinancing = async (db: any): Promise< any[] | null > => {

    try {
        const query = "SELECT * FROM seller_financing";
        const [result] = await db.query(query);

        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const getSuccessorOnboarding = async (db: any): Promise< any[] | null > => {

    try {
        const query = "SELECT * FROM successor_onboarding";
        const [result] = await db.query(query);

        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const getSites = async (db: any): Promise< any[] | null > => {

    try {
        const query = "SELECT * FROM sites";
        const [result] = await db.query(query);

        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


export const getLists = async (db: any): Promise< listsInterface > => {

    let industryData: industryDataInterface[] | null = [];
    let subIndustryData: subIndustryDataInterface[] | null = [];
    let reasonsForSellingData: subIndustryDataInterface[] | null = [];
    let sellerFinancingData: sellerFinancingDataInterface[] | null = [];
    let successorOnboardingData: successorOnboardingDataInterface[] | null = [];
    let sitesData: sitesDataInterface[] | null = [];

    let lists : listsInterface = {
        industries: {},
        subIndustries: {},
        reasonsForSelling: {},
        sellerFinancing: {},
        successorOnboarding: {},
        sites: {},
    };

    industryData = await getIndustries(db);

    if (industryData) {

        industryData.forEach((industryObj: industryDataInterface) => {
            lists.industries[industryObj.id] = { name: industryObj.name, subIndustries: []}
        })
    }

    subIndustryData = await getSubIndustries(db);

    if(subIndustryData) {
        subIndustryData.forEach((subIndustryObj: subIndustryDataInterface) => {
            lists.subIndustries[subIndustryObj.id] = subIndustryObj.name;
            lists.industries[subIndustryObj.industryId].subIndustries.push(subIndustryObj.name);

        })
    }

    reasonsForSellingData = await getReasonsForSelling(db);

    if(reasonsForSellingData) {
        reasonsForSellingData.forEach((reasonsForSellingObj: reasonsForSellingDataInterface) => {
            lists.reasonsForSelling[reasonsForSellingObj.id] = reasonsForSellingObj.name;
        })
    }

    sellerFinancingData = await getSellerFinancing(db);

    if(sellerFinancingData) {
        sellerFinancingData.forEach((sellerFinancingObj: sellerFinancingDataInterface) => {
            lists.sellerFinancing[sellerFinancingObj.id] = sellerFinancingObj.name;
        })
    }

    successorOnboardingData = await getSuccessorOnboarding(db);

    if(successorOnboardingData) {
        successorOnboardingData.forEach((successorOnboardingObj: successorOnboardingDataInterface) => {
            lists.successorOnboarding[successorOnboardingObj.id] = successorOnboardingObj.name;
        })
    }

    sitesData = await getSites(db);

    if(sitesData) {
        sitesData.forEach((siteObj: sitesDataInterface) => {
            lists.sites[siteObj.url] = siteObj.id;
        })
    }

    return lists;

}

