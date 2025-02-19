const { Pool } = require('pg');

const pool = new Pool({
    user: 'kimsinton',
    password: '',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'brokeredge'
});

module.exports = {
    query: (text: string, params?: any[]) => pool.query(text, params)
};