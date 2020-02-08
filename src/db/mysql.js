const mysql = require('mysql')
const { MY_SQL_CONF } = require('../conf/db')

const con = mysql.createConnection(MY_SQL_CONF)

con.connect()

function exec(sql) {
  console.log(sql)
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  exec
}