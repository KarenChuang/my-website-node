const { getAll } = require('./movie.controller')

module.exports = Router => {
  const router = new Router({
    prefix: '/movies'
  })
  // (path, controller)
  router.get('/', getAll)

  return router
}