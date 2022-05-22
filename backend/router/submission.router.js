import Router from "@koa/router"
import { addSubmission, getAllSubmissions, deleteSubmission } from "../api/submission.api.js";

const submissionsRouter = new Router(
    {
        prefix: '/submissions'
    }
);

submissionsRouter.post('/new', async(ctx) =>
{
    const submission = await ctx.request.body;
    
    const newsubmission = await addSubmission(submission);
    if(newsubmission){
        ctx.body = newsubmission;
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }else if(newsubmission.includes('userexist')){
        ctx.body = 'userexist';
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }else{
        ctx.body = 'db err';
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }
    
});

submissionsRouter.get('/', async ctx=>{
    ctx.body= await getAllSubmissions();
})

submissionsRouter.delete('/:_id', async ctx=>{
    const id = ctx.params.id;
    await deleteSubmission(id);
})

export default submissionsRouter;