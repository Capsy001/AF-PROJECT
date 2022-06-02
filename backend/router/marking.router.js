import Router from "@koa/router"
import { getAllSubmissions } from "../api/submissiontype.api.js";
import { save } from "../dao/marking.dao.js";

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

export default markingRouter;