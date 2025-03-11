// @ts-ignore
import { Pool } from "pg";

const pool = new Pool({
    user: "kimsinton",
    password: "",
    host: "localhost",
    port: 5432, // default Postgres port
    database: "brokeredge",
});

export const db = {
    query: (text: string, params?: any[]) => pool.query(text, params),
};