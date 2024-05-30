const Router = require("koa-router");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const {} = require("../controller/controller");

const app = new Koa();
app.use(bodyParser());
const router = new Router();

module.exports = router.routes();
