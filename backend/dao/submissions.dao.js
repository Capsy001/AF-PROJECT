import client from'./index.js';
const submissions = client.db('store').collection('submissions');
// const ObjectId = require('mongodb').ObjectId;
import * as mongoose from 'mongoose';
// var ObjectId = mongoose.Types.ObjectId();

export async function save ({id, title, desc, deadline, file}){
        const result = await submissions.insertOne({id, title, desc, deadline, file});
        return result.insertedId;
    }

export async function getAll(){
    const cursor = await submissions.find();

return cursor.toArray();
}

export async function removeById(id){
    return await submissions.deleteOne({id});
}

export const getById = async (id) =>{
    return await submissions.findOne({id});
}

export async function update(id, {title, desc, deadline, file}){
    const result = await posts.replaceOne({id}, {id, title, desc, deadline, file});
    return result.ops[0];
   };



//Export the functions
export default {save, getAll, removeById, getById, update};