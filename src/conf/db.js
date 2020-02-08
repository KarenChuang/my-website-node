const env = process.env.NODE_ENV

let MY_SQL_CONF
if(env === 'dev') {
  MY_SQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'karen_website'
  }
}

if(env === 'prodection') {
  MY_SQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'karen_website'
  }
}

 module.exports = {
  MY_SQL_CONF
 }

