import client from'./index.js';
const studentsubmissions = client.db('store').collection('studentsubmissions');
import {ObjectId} from 'mongodb';

export async function save ({groupid, topic, uploaddate, file}){
        const result = await studentsubmissions.insertOne({groupid, topic, uploaddate, file});
        return result.insertedId;
    }

export async function getAll(){
    const cursor = await studentsubmissions.find();

return cursor.toArray();
}

export async function removeById(id){
    return await studentsubmissions.deleteOne({id});
}

export const getById = async (id) =>{
    try{
        const userdata = await studentsubmissions.findOne({_id:ObjectId(id)});
        return userdata;
    }catch(e){
        console.log(e)
    }
    
}

export async function update(id, studentsubmission){
    const result = await studentsubmissions.replaceOne({"_id":ObjectId(id)}, {groupid:studentsubmission.groupid, topic:studentsubmission.topic, uploaddate:studentsubmission.uploaddate, file:studentsubmission.file});
    console.log(result)
    return result;
   };



//Export the functions
export default {save, getAll, removeById, getById, update};