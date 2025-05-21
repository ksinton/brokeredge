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


