const { Pool } = require('pg');



const pool = new Pool({
    user: 'amandwdi',
    host: 'dpg-cne8duuv3ddc73ceul50-a',
    database: 'ecommerce_db_me11',
    password: 'L5F2x6csNyuE1zcUeQEWnz59A9sqohLm',
    port: 5432
})

module.exports = pool;