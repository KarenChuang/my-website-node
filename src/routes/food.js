const { getList } = require('../controller/food')
const { SuccessModel, ErrorModel } = require('../model/resModel')

function foodHandle (req, res) {
  const method = req.method
  const resData = getList()

  if(method === 'GET' && req.path === '/api/foods') {
    return new SuccessModel(resData)
  }
}

module.exports = foodHandle
