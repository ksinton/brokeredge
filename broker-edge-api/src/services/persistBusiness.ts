exports.addBusiness = async (db: any, businessData: object, userId: number): Promise<{ success: boolean }> => {

    try {
        const unixTimeStampForNow = Math.floor(Date.now() / 1000);
        // @ts-ignore
        const query = "INSERT INTO business (name, phone, user_id, created_timestamp, last_updated_timestamp) VALUES ('"+ businessData.businessName +"', '"+ businessData.phone +"', " + userId + ", " + unixTimeStampForNow + ", " + unixTimeStampForNow + ")";
        const result = await db.query(query);

        if (result.rowCount === 1) {
            return {success: true};
        }
        return {success: false};

    } catch (err) {
        console.error(err);
        throw err;
    }
};