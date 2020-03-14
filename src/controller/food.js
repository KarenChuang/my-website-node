const { exec } = require('../db/mysql')

const getList = (name, location) => {
  let sql = `select * from foods where 1=1 `
  if(name) {
    sql += `and name = '${name}' `
  }
  if(location) {
    console.log(location);
    
    sql += `and location = '${location}' `
  }
  sql += `order by date desc;`
  return exec(sql)
}

const getDetail = (id) => {
  let sql = `select * from foods where id='${id}' `
  return exec(sql).then(rows => {
    return rows[0]
  })
}

const newFood = (foodData = {}) => {
  const { name, restaurant, location, date } = foodData
  const sql = `
    insert into foods (name, restaurant, location, date) values ('${name}', '${restaurant}', '${location}', '${date}')
  `
  if(name && restaurant && location && date) {
    return exec(sql).then(insetData => {
      console.log(insetData.insertId);
      
      return {
        id: insetData.insertId
      }
    })
  }
}

const updateFood = (id, foodData = {}) => {
  const { name, restaurant, location, date } = foodData

  const sql = `update foods set name='${name}', restaurant='${restaurant}', location='${location}', date='${date}' where id=${id}`
  if(name && restaurant && location && date) {
    return exec(sql).then(updateData => {
      return updateData.affectedRows > 0
    })
  }
}

const deleteFood = (id) => {
  if(id) {
    const sql = `delete from foods where id=${id}`
    return exec(sql).then(deleteData => {
      return deleteData.affectedRows > 0
    })
  }
}

module.exports = {
  getList,
  newFood,
  updateFood,
  deleteFood,
  getDetail
}