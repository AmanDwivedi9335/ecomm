const { Pool } = require('pg');
require('dotenv').config();//process.env


const pool = new Pool({
    user: process.env.MYSQL_USER,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    port: MYSQL_PORT
})

module.exports = pool;