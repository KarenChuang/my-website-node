const { getList } = require('../controller/vlog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

function vlogHandle (req, res) {
  const method = req.method

  if(method === 'GET' && req.path === '/api/vlogs') {
    const resData = getList()
    return new SuccessModel(resData)
  }
}

module.exports = vlogHandle
