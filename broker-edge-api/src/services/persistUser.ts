export const addUser = async function(db: any, data: any) {

    let newUserId = null;

    try {
        const unixTimeStampForNow = Math.floor(Date.now() / 1000);
        const query = "INSERT INTO business_user (user_type_id, email, password, created_timestamp, last_updated_timestamp) VALUES (?, ?, ?, ?, ?)";
        console.log('query', query);
        const [result] = await db.query(query, [
            0,
            data.email,
            data.password,
            unixTimeStampForNow,
            unixTimeStampForNow,
        ]);
        newUserId = result.insertId; // Get the last inserted ID
        return newUserId;
    } catch (err) {
        console.error(err);
    }
};

export const updateUser = async function(db: any, data: any) {

    try {
        const unixTimeStampForNow = Math.floor(Date.now() / 1000);
        const query = "UPDATE business_user SET email = ?, password = ?, last_updated_timestamp = ? WHERE id = ?";
        console.log('query', query);
        const [result] = await db.query(query, [
            data.email,
            data.password,
            unixTimeStampForNow,
            data.id,
        ]);
        return result.affectedRows; // MariaDB uses affectedRows for the number of updated rows
    } catch (err) {
        console.error(err);
    }

}