import client from'./index.js';
const studentTopics = client.db('store').collection('studentTopics');
const banTopics = client.db('banlist').collection('studentTopics');
import {ObjectId} from 'mongodb';
import * as mongoose from 'mongoose';

export async function save ({groupid, topic, description, status}){
        const banlistchk = await banTopics.findOne({topic:topic});
        if({banlistchk}){
            status = 'rejected';
        }
        const result = await studentTopics.insertOne({groupid, topic, description, status});
        return result.insertedId;
    }

export async function ban ({topic}){
    const banlistchk = await banTopics.findOne({topic:topic});
    if(!banlistchk){
        const result = await banTopics.insertOne({topic});
        return result.insertedId;
    }else{
        return 'alreadyinlist'
    }
    
    
}

export async function updatestatus(id, topicupdate){
    const result = await studentTopics.replaceOne({"_id":ObjectId(id)}, {status:topicupdate.status});
    console.log(result)
    return result;
};

export async function getAll(){
    const cursor = await studentTopics.find();

return cursor.toArray();
}

export async function removeById(id){
    return await studentTopics.deleteOne({id});
}

export const getById = async (id) =>{
    try{
        const userdata = await studentTopics.findOne({_id:ObjectId(id)});
        return userdata;
    }catch(e){
        console.log(e)
    }
    
}

export async function update(id, submission){
    const result = await studentTopics.replaceOne({"_id":ObjectId(id)}, {title:submission.title, desc:submission.desc, deadline:submission.deadline, file:submission.file});
    console.log(result)
    return result;
   };



//Export the functions
export default {save, ban, updatestatus, getAll, removeById, getById, update};