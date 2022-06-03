import Router from "@koa/router"
import { getAllSubmissions,getAllSubmission } from "../api/submissiontype.api.js";
import { save,getAll } from "../api/marking.api.js";
import { getById } from "../dao/studentsubmissions.dao.js";

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

markingRouter.post('/getCustom', async(ctx) => {

    const marking = await getAll();
    const assignment = await getAllSubmission(marking.assignmentType);
    const submissions = await getById(marking.assignmentType);

    const result = {
        marking: marking,
        assignment: assignment,
        submissions: submissions,
    }

    ctx.body = result;
    ctx.status = 201;

});

export default markingRouter;