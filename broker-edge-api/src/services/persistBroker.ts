export const addBroker = async (db: any, businessData: any, userId: number | null): Promise< number | null > => {

    let newBrokerId :number|null = null;

    try {
        const unixTimeStampForNow = Math.floor(Date.now() / 1000);
        // @ts-ignore
        const query = "INSERT INTO broker (brokerage_name, phone, alternative_phone, user_id, created_timestamp, last_updated_timestamp) VALUES (?, ?, ?, ?, ?)";
        const [result] = await db.query(query, [
            businessData.businessName,
            businessData.phone,
            userId,
            unixTimeStampForNow,
            unixTimeStampForNow,
        ]);
        newBrokerId = result.insertId; // Use insertId to get the last inserted ID in MariaDB
        return newBrokerId;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const updateBroker = async (db: any, data: any, userId: number | null): Promise< number | null > => {

    try {
        const unixTimeStampForNow = Math.floor(Date.now() / 1000);
        // @ts-ignore
        const query = "UPDATE business SET brokerage_name = ?, phone = ?, alternative_phone = ?, user_id = ?, last_updated_timestamp = ? WHERE id = ?";
        const [result] = await db.query(query, [
            data.brokerageName,
            data.phone,
            data.alternativePhone,
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