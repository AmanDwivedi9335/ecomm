// testConnection.js
const pool = require('../src/config/database');

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Connected to PostgreSQL:', result.rows[0].now);
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
  } finally {
    pool.end(); // Close the pool to end the connection
  }
}

testConnection();