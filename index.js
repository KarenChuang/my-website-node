const mongoose = require('mongoose');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();
const logger = require('koa-logger')();
const cors = require('@koa/cors')();
const applyApiMiddleware = require('./api');
const mongoUrl = require('./config');
const app = new Koa();

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app
  .use(bodyParser)
  .use(cors)
  .use(logger);

app.listen(8080, () => {
  console.log('route is starting at port 8080');
});

applyApiMiddleware(app);
