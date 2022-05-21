import Router from "@koa/router"
import { addUser, login } from "../api/user.api.js";

const usersRouter = new Router(
    {
        prefix: '/users'
    }
);

usersRouter.post('/', (ctx) =>
{
    const user = ctx.request.body;
    ctx.body = addUser(user);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

usersRouter.get('/:email', (ctx) =>
{
    const email = ctx.params.email;
    
    ctx.body = login(email);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

export default usersRouter;