const { getList, newFood, updateFood, deleteFood, getDetail } = require('../controller/food')
const { SuccessModel, ErrorModel } = require('../model/resModel')

function foodHandle (req, res) {
  const method = req.method
  const id = req.query.id

  if(method === 'GET' && req.path === '/api/foods') {
    const name = req.query.name
    const location = req.query.location
    const resData = getList(name, location)
    return resData.then(listData => {
      const res = JSON.stringify(listData)
      console.log('foodHandle', JSON.stringify(listData))
      return new SuccessModel(listData)
    })
  }

  if(method === 'GET' && req.path === '/api/foods/detail') {
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  if(method === 'POST' && req.path === '/api/foods/new') {
    const res = newFood(req.body)
    return res.then(id => {
      return new SuccessModel(id)
    })
  }

  if(method === 'POST' && req.path === '/api/foods/update') {
    const result = updateFood(id, req.body)
    return result.then(res => {
      if(res) {
        return new SuccessModel()
      } else {
        return new ErrorModel('update error')
      }
    })
  }

  if(method === 'POST' && req.path === '/api/foods/delete') {
    const result = deleteFood(id)
    return result.then(res => {
      if(res) {
        return new SuccessModel()
      } else {
        return new ErrorModel('delete error')
      }
    })
  }
}

module.exports = foodHandle