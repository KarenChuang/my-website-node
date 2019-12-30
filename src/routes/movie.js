const { getList } = require('../controller/movie')
const { SuccessModel, ErrorModel } = require('../model/resModel')

function foodHandle (req, res) {
  const method = req.method
  const resData = getList()

  if(method === 'GET' && req.path === '/api/movies') {
    return new SuccessModel(resData)
  }
}

module.exports = foodHandle
