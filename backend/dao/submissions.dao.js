import client from'./index.js';
const submissions = client.db('store').collection('submissions')
import * as mongoose from 'mongoose';

export async function save ({title, desc, deadline, file}){
        const result = await submissions.insertOne({title, desc, deadline, file});
        return result.insertedId;
    }

export async function getAll(){
    const cursor = await submissions.find();

return cursor.toArray();
}

export async function removeById(id){
    return await submissions.deleteOne(ctx.params._id);
}



//Export the functions
export default {save, getAll, removeById};