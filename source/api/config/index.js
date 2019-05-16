module.exports = {
  name: 'rest-api',
  hostname: 'http://localhost',
  version: '0.0.1',
  env: process.env.NODE_ENV || 'development',
  port: 4000,
  database: {
    host: 'db',
    port: 3306,
    user: 'user',
    password: 'pass',
    database: 'db'
  }
}
