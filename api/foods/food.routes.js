const { getAll } = require('./food.controller')

module.exports = Router => {
  const router = new Router({
    prefix: '/foods'
  })
  // (path, controller)
  router.get('/', getAll)

  return router
}