const data = require('../data/food')
const fs = require('fs')
const path = require('path')
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
  console.log('foodData', foodData);
  console.log('foodData-end');

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
    return
  }
}

const updateFood = (id, food = {}) => {
  console.log('update-food- id', food);
  return true
}

const deleteFood = (id) => {
  console.log('delete-food- id', id);
  return true
}

module.exports = {
  getList,
  newFood,
  updateFood,
  deleteFood,
  getDetail
}