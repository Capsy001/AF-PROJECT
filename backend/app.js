import Koa from "koa";
import bodyParser from "koa-bodyparser";
import usersRouter from "./router/users.router.js";
import cors from '@koa/cors'
import serve from "koa-static";
import publicationRouter from "./router/publication.router.js";
import groupsRouter from "./router/groups.router.js";
import topicRouter from "./router/topics.router.js";
import studentsubmissionsRouter from "./router/studentsubmission.router.js";
import panelRouter from "./router/panel.router.js";
import markingRouter from "./router/marking.router.js";
import submissionsRouter from "./router/submissiontype.router.js";

const app = new Koa();
app.use(bodyParser());
app.use(serve('./uploads/publications'));
app.use(cors());
app.use(serve('./uploads/studentsubmissions'));

app.use(usersRouter.routes()).use(usersRouter.allowedMethods());
app.use(topicRouter.routes()).use(topicRouter.allowedMethods());
app.use(publicationRouter.routes()).use(publicationRouter.allowedMethods());
app.use(groupsRouter.routes()).use(groupsRouter.allowedMethods());
app.use(studentsubmissionsRouter.routes()).use(studentsubmissionsRouter.allowedMethods());
app.use(panelRouter.routes()).use(panelRouter.allowedMethods());
app.use(markingRouter.routes()).use(markingRouter.allowedMethods());
app.use(submissionsRouter.routes()).use(submissionsRouter.allowedMethods());

app.use(ctx =>
{
    ctx.set("Content-Type", "text/html");
    ctx.body = '<h1>No data is available1</h1>'
});

app.listen(3000, () =>
{
    console.log("App running on port 3000!");
})