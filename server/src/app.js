const Koa = require("koa");
const dotenv = require("dotenv");
const bodyParser = require("koa-bodyparser");
const userRouter = require("./router/router");
const Router = require("koa-router");
const cors = require("@koa/cors");

dotenv.config();

const router = new Router();
const app = new Koa();
const PORT = process.env.PORT;

app.use(bodyParser());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

router.use("", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
