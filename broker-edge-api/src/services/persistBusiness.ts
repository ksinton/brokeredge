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