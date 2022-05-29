import Router from "@koa/router"
import { addSubmission, getAllSubmissions, deleteSubmission, getSubmission, updateSubmission } from "../api/submission.api.js";
import koaBusboy from "koa-busboy";
import fs from 'fs';

const uploader = koaBusboy({
    dest: './uploads/submissions/'
})

const submissionsRouter = new Router(
    {
        prefix: '/submissions'
    }
);

submissionsRouter.post('/new',uploader, async(ctx) =>
{
    const data = await ctx.request.body;
    const saveFileName = './uploads/submissions/' + Math.floor(Math.random() * 1000) 
                        + ctx.request.files[0].filename;

                        const submission = {
                            title: data.title,
                            desc: data.desc,
                            deadline: data.deadline,
                            file: saveFileName
                        };
                    
                        console.log(ctx.request.body);
                    
                        fs.rename(ctx.request.files[0].path,saveFileName, function (err) {    
                            console.log("renamed!");    
                        });
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
        ctx.body = {err:'db err'};
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;
    }
    
});

submissionsRouter.get('/', async ctx=>{
    ctx.body= await getAllSubmissions();
})

submissionsRouter.delete('/:id', (ctx) => {
    const id = ctx.params.id;
    ctx.body =  deleteSubmission(id);
    ctx.status = 204;

});

submissionsRouter.get('/get/:id', async ctx=> {
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

submissionsRouter.put('/update/:id', async ctx=> {
    const id = ctx.params.id;
    let submission = ctx.request.body;
    ctx.body = await updateSubmission(id,submission);
    ctx.response.status = 200;
    ctx.body = submission;
})

export default submissionsRouter;