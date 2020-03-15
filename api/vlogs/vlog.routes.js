const { getAll } = require('./vlog.controller')

module.exports = Router => {
  const router = new Router({
    prefix: '/vlogs'
  })
  // (path, controller)
  router.get('/', getAll)

  return router
}