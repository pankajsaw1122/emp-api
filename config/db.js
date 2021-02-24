const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'ec2-3-7-28-96.ap-south-1.compute.amazonaws.com',
  user: 'emp',
  password: 'E1m2@p4#789l@ye',
  database: 'emp_db'
});

module.exports = pool.promise();


