import mysql, { PoolOptions } from "mysql2/promise";

const poolOptions: PoolOptions = {
    user: "root",
    password: "weallmakemoney!",
    host: "mariadb",
    port: 3306,
    database: "brokeredge",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const pool = mysql.createPool(poolOptions);

(async () => {
    try {
        const conn = await pool.getConnection();
        console.log("✅ Database connection established");
        conn.release();
    } catch (err) {
        console.error("❌ Error connecting to the database:", err);
    }
})();

export const db = {
    query: (text: string, params?: any[]) => pool.query(text, params),
};
