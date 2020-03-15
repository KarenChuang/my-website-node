const Koa = require('koa')
const app = new Koa()

const bodyParser = require('koa-bodyparser')()
const logger = require('koa-logger')();

const applyApiMiddleware = require('./api');

app.use(bodyParser)
   .use(logger)

app.listen(8080, () => {
  console.log('route is starting at port 8080')
})

applyApiMiddleware(app);

