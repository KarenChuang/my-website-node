const { getAll, create, remove, update } = require('./vlog.controller')

module.exports = Router => {
  const router = new Router({
    prefix: '/vlogs'
  })

  // (path, controller)
  router.get('/', getAll)
        .post('/create', create)
        .post('/update', update)
        .post('/delete/:id', remove)

  return router
}