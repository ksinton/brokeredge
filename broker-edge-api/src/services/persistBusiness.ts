export const addBusiness = async (db: any, businessData: object, userId: number | null): Promise< number | null > => {

    let newBusinessId :number|null = null;

    try {
        const unixTimeStampForNow = Math.floor(Date.now() / 1000);
        // @ts-ignore
        const query = "INSERT INTO business (name, phone, user_id, created_timestamp, last_updated_timestamp) VALUES ('"+ businessData.businessName +"', '"+ businessData.phone +"', " + userId + ", " + unixTimeStampForNow + ", " + unixTimeStampForNow + ") RETURNING id";
        const result = await db.query(query);

        newBusinessId = result.rows[0].id;
        return newBusinessId;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const updateBusiness = async (db: any, data: any, userId: number | null): Promise< number | null > => {

    try {
        const unixTimeStampForNow = Math.floor(Date.now() / 1000);
        // @ts-ignore
        const query = "UPDATE business SET name = '"+ data.businessName +"', phone = '"+ data.phone +"', user_id = " + userId + ", last_updated_timestamp = " + unixTimeStampForNow + " WHERE id = " + data.id;
        const result = await db.query(query);
        return result.rowCount;
    } catch (err) {
        console.error(err);
        throw err;
    }
}