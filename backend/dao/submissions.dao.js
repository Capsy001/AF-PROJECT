import client from'./index.js';
const submissions = client.db('store').collection('submissions');
import {ObjectId} from 'mongodb';
import * as mongoose from 'mongoose';
// var ObjectId = mongoose.Types.ObjectId();

export async function save ({title, desc, deadline, file}){
        const result = await submissions.insertOne({title, desc, deadline});
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
    try{
        const userdata = await submissions.findOne({_id:ObjectId(id)});
        return userdata;
    }catch(e){
        console.log(e)
    }
    
}

export async function update(id, submission){
    const result = await submissions.replaceOne({"_id":ObjectId(id)}, {title:submission.title, desc:submission.desc, deadline:submission.deadline});
    console.log(result)
    return result;
   };



//Export the functions
export default {save, getAll, removeById, getById, update};