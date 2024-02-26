const pool = require('../config/database')

const registerUser = async(username, hashedPass) => {
    try{
        const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',[username, hashedPass]);
        return result.rows;
    }catch(error){
        console.error('Error while cerating user in db', error);
        throw error;
    }
}

module.exports = {
    registerUser
}