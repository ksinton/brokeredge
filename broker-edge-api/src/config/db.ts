// @ts-ignore
import mysql from "mysql2";

const pool = mysql.createPool({
    user: "node",
    password: "weallgetwealthy",
    host: "localhost",
    port: 3306, // default Postgres port
    database: "brokeredge",
});

export const db = {
    query: (text: string, params?: any[]) => pool.promise().query(text, params), // Use promise-based query for async/await
};