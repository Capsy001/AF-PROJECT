import Router from "@koa/router"
import { createGroup } from "../api/groups.api.js";
import { groupCount } from "../dao/groups.dao.js";

const groupsRouter = new Router(
    {
        prefix: '/groups'
    }
);

groupsRouter.post('/', async(ctx) =>
{
    console.log("here");
    const group = await ctx.request.body;
    
    const addedGroup = await createGroup(group);

    if(addedGroup){
        ctx.body = addedGroup;
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }else{
        ctx.body = 'db err';
        ctx.set('Content-Type', 'application/json');
       
    }
    
});

groupsRouter.get('/counter', async(ctx) =>
{
    console.log("counter");
    
    
    const counter = await groupCount();

    if(counter){
        ctx.body = counter;
        ctx.set('Content-Type', 'application/json');
        ctx.status = 200;
    }else{
        ctx.body = 'db err';
        ctx.set('Content-Type', 'application/json');
       
    }
    
});

export default groupsRouter;