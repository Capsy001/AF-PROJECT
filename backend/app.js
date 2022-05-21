import Koa from "koa";
import bodyParser from "koa-bodyparser";
import usersRouter from "./router/users.router.js";
import itemsRouter from "./router/items.router.js";
import cors from '@koa/cors'

const app = new Koa();
app.use(bodyParser());
app.use(cors());

app.use(usersRouter.routes()).use(usersRouter.allowedMethods());
app.use(itemsRouter.routes()).use(itemsRouter.allowedMethods());

app.use(ctx =>
{
    ctx.set("Content-Type", "text/html");
    ctx.body = '<h1>No data is available1</h1>'
});

app.listen(3000, () =>
{
    console.log("App running on port 3000!");
})