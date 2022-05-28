import client from'./index.js';
const submissions = client.db('store').collection('submissions');
import {ObjectId} from 'mongodb';
import * as mongoose from 'mongoose';
// var ObjectId = mongoose.Types.ObjectId();

export async function save ({title, desc, deadline, file}){
        const result = await submissions.insertOne({title, desc, deadline, file});
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

export async function update(id, {title, desc, deadline, file}){
    const result = await submissions.replaceOne({id}, {id, title, desc, deadline, file});
    return result.ops[0];
   };



//Export the functions
export default {save, getAll, removeById, getById, update};