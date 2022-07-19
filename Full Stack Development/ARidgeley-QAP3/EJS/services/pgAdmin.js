const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "alex",
  port: 5432,
  password: "password",
  database: "dvdrental",
});

module.exports = pool;
