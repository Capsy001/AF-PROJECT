import Router from "@koa/router"
import koaBusboy from "koa-busboy";
import fs from 'fs';
import { save, getAll} from '../dao/publication.dao.js';

const uploader = koaBusboy({
    dest: './uploads/publications/'
})

const publicationRouter = new Router(
    {
        prefix: '/publication'
    }
);


publicationRouter.post('/add',uploader, async(ctx) => {

    const data = ctx.request.body;

    const saveFileName = Math.floor(Math.random() * 1000) 
                        + ctx.request.files[0].filename;

    const publication = {
        title: data.title,
        desc: data.desc,
        file: saveFileName
    };

    console.log(ctx.request.body);

    fs.rename(ctx.request.files[0].path,saveFileName, function (err) {    
        console.log("renamed!");    
    });

    const result = await save(publication);

    ctx.body = result;
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;

});

publicationRouter.post('/getAll', async(ctx) => {

    const result = await getAll();
    ctx.body = result;
    ctx.status = 201;

});

export default publicationRouter;