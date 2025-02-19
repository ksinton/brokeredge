exports.addUser = async function(db: any, data: any) {

    let newUserId;

    try {
        const unixTimeStampForNow = Math.floor(Date.now() / 1000);
        const query = "INSERT INTO business_user (user_type_id, email, password, created_timestamp, last_updated_timestamp) VALUES (0, '"+ data.email +"','"+ data.password +"', " + unixTimeStampForNow + ", " + unixTimeStampForNow + ") RETURNING id";
        console.log('query', query);
        const result = await db.query(query);
        newUserId = result.rows[0].id;
        return newUserId;
    } catch (err) {
        console.error(err);
    }
};