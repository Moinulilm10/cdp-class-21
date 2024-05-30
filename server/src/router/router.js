const Router = require("koa-router");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { createContact } = require("../controller/controller");

const app = new Koa();
app.use(bodyParser());

const router = new Router();

router.post("/contact", createContact);

module.exports = router.routes();
