import Koa from "koa";
import bodyParser from "koa-bodyparser";
import usersRouter from "./router/users.router.js";
import cors from '@koa/cors'
import submissionsRouter from "./router/submission.router.js";
import publicationRouter from "./router/publication.router.js";
import groupsRouter from "./router/groups.router.js";
import topicRouter from "./router/topics.router.js";
import studentsubmissionsRouter from "./router/studentsubmission.router.js";

const app = new Koa();
app.use(bodyParser());
app.use(cors());

app.use(usersRouter.routes()).use(usersRouter.allowedMethods());
app.use(topicRouter.routes()).use(topicRouter.allowedMethods());
app.use(submissionsRouter.routes()).use(submissionsRouter.allowedMethods());
app.use(publicationRouter.routes()).use(publicationRouter.allowedMethods());
app.use(groupsRouter.routes()).use(groupsRouter.allowedMethods());
app.use(studentsubmissionsRouter.routes()).use(studentsubmissionsRouter.allowedMethods());

app.use(ctx =>
{
    ctx.set("Content-Type", "text/html");
    ctx.body = '<h1>No data is available1</h1>'
});

app.listen(3000, () =>
{
    console.log("App running on port 3000!");
})