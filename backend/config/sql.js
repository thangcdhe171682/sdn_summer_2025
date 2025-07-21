const sql = require('mssql');

const sqlPool = new sql.ConnectionPool({
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  server: process.env.SQL_SERVER,
  options: {
    trustServerCertificate: true,
  }
});

sqlPool.connect().then(() => {
  console.log('✅ SQL Server connected');
}).catch(err => console.error('❌ SQL Server error:', err.message));

module.exports = sqlPool;
