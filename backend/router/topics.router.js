import Router from "@koa/router"
import { addTopic, banTopic, updateTopic, getAllSubmissions, deleteSubmission, getSubmission, updateSubmission } from "../api/topics.api.js";

const topicRouter = new Router(
    {
        prefix: '/topics'
    }
);

topicRouter.post('/new', async(ctx) =>
{
    const topic = await ctx.request.body;
    
    const newtopic = await addTopic(topic);
    try{
        ctx.body = newtopic;
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }catch(e){
        ctx.body = {err:e};
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }
    
});

topicRouter.post('/ban', async(ctx) =>
{
    const topic = await ctx.request.body;
    
    const bantopic = await banTopic(topic);
    try{
        ctx.body = bantopic;
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }catch(e){
        ctx.body = {err:e};
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }
    
});

topicRouter.put('/update/:id', async(ctx) =>
{
    const id = ctx.params.id;
    const topic = await ctx.request.body;
    
    const updatedstatus = await updateTopic(id,topic);
    try{
        ctx.body = updatedstatus;
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }catch(e){
        ctx.body = {err:e};
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }
    
});

topicRouter.get('/', async ctx=>{
    ctx.body= await getAllSubmissions();
})

topicRouter.delete('/:id', (ctx) => {
    const id = ctx.params.id;
    ctx.body =  deleteSubmission(id);
    ctx.status = 204;

});

topicRouter.get('/get/:id', async ctx=> {
    try{
        const id = ctx.params.id;
        const data = await getSubmission(id);
        if(data!==null){
            ctx.body = data;
            ctx.set('Content-Type', 'application/json');
            ctx.status = 200;
        }else{
            ctx.body = {data:'nodata'};
            ctx.set('Content-Type', 'application/json');
            ctx.status = 200;
        }
        
    }catch(e){
        ctx.body = await e;
        ctx.set('Content-Type', 'application/json');
        ctx.status = 200;
    }
})

topicRouter.put('/update/:id', async ctx=> {
    const id = ctx.params.id;
    let submission = ctx.request.body;
    ctx.body = await updateSubmission(id,submission);
    ctx.response.status = 200;
    ctx.body = submission;
})

export default topicRouter;