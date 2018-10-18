const Router = require('koa-router');
const router = new Router();
const controller = require('../controllers/users');

router.get('/users', controller.hello);

module.exports = router;