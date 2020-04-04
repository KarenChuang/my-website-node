const { getAll } = require('./movie.controller')

module.exports = Router => {
  const router = new Router({
    prefix: '/movies'
  })
  router.get('/', getAll)

  return router
}