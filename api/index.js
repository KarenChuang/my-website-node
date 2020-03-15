const Router = require('koa-router');
const foodRoutes = require('./foods/food.routes')
const vlogRoutes = require('./vlogs/vlog.routes')
const movieRoutes = require('./movies/movie.routes')

function applyApiMiddleware(app) {

  const router = new Router({
    prefix: `/api`,
  });

  router.use(foodRoutes(Router).routes())
        .use(vlogRoutes(Router).routes())
        .use(movieRoutes(Router).routes())

  app.use(router.routes())
      // 对请求进行一些限制处理
     .use(router.allowedMethods())
}

module.exports = applyApiMiddleware
