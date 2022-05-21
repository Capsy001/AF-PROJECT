import Router from "@koa/router"

import { addItem, getAll, deleteItem, edit } from "../api/item.api.js"

const itemsRouter = new Router(
    {
        prefix: '/items'
    }
);

itemsRouter.post('/', (ctx) =>
{
    const item = ctx.request.body;
    ctx.body = addItem(item);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

itemsRouter.get('/', (ctx) =>
{
    ctx.body = getAll();
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

itemsRouter.put('/:id', (ctx) =>
{
    const id = ctx.params.id;
    ctx.body = edit(id, ctx.request.body);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

itemsRouter.del('/:id', (ctx =>
{
    const id = ctx.params.id;
    ctx.body=deleteItem(id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
}));

export default itemsRouter;