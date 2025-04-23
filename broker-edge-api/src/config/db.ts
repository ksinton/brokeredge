// @ts-ignore
import mysql from "mysql2";

const pool = mysql.createPool({
    user: "root",
    password: "weallmakemoney!",
    host: "mariadb",
    port: 3306,
    database: "brokeredge",
    ssl: false, // <-- try explicitly false here
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

(async () => {
    try {
        const conn = await pool.promise().getConnection();
        console.log("✅ Database connection established");
        conn.release();
    } catch (err) {
        console.error("❌ Error connecting to the database:", err);
    }
})();

export const db = {
    query: (text: string, params?: any[]) => pool.promise().query(text, params),
};
