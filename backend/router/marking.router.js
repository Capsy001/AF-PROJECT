import Router from "@koa/router"
import { getAllSubmissions,getSubmission } from "../api/submissiontype.api.js";
import { save,getAll } from "../api/marking.api.js";
import { findRecords } from "../dao/studentsubmissions.dao.js";

const markingRouter = new Router(
    {
        prefix: '/marking'
    }
);

markingRouter.get('/get', async(ctx) => {

    const result = await getAllSubmissions();
    ctx.body = result;
    ctx.status = 201;

});

markingRouter.post('/save', async(ctx) => {
    const data = await ctx.request.body;

    const marking = {
        assignmentType: data.assignmentType,
        markingPoints: data.markingPoints,
    };

    const result = await save(marking);
    ctx.body = result;
    ctx.status = 201;

});

markingRouter.post('/getCustomS', async(ctx) => {

    const marking = await getAll();
    let result = [];

    let assignment;
    let submissions;

    for(let i = 0;i < marking.length;i++){
        assignment = await getSubmission(marking[i].assignmentType);
        submissions = await findRecords({assignmentId:marking[i].assignmentType});
        result.push({
            assignment:assignment,
            submissions:submissions,
            marking:marking[i]
        });
    }

    ctx.body = result;
    ctx.status = 201;

});

export default markingRouter;