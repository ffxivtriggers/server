const Koa = require('koa');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser');
const respond = require('koa-respond');
const usersRoutes = require('./routes/users');

const app = new Koa();

if (process.env.NODE_ENV === 'development') {
  app.use(logger());
}

app.use(cors());
app.use(bodyparser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422);
  }
}));

app.use(respond());

// API routes
app.use(usersRoutes.routes());
app.use(usersRoutes.allowedMethods());

module.exports = app;