const { Pool } = require('pg');
const os = require('os');

const host = 'localhost';
const user = os.userInfo().username;
const defaultPgPort = 5432;

const connection = {
  host: host,
  user: host,
  database: 'example_database',
  password: '',
  port: defaultPgPort,
};

const pool = new Pool(connection);

module.exports = pool;
