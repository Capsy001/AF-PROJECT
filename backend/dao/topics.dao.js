import client from'./index.js';
const studentTopics = client.db('store').collection('studentTopics');
const banTopics = client.db('banlist').collection('studentTopics');
import {ObjectId} from 'mongodb';
import * as mongoose from 'mongoose';

export async function save ({groupid, topic, description, status, supervisor, coSuperviser}){
        const banlistchk = await banTopics.findOne({topic:topic});
        const topicduplication = await studentTopics.findOne({groupid:groupid});
        console.log(topicduplication)
        const arr = [];
        arr.push(topicduplication);
        try{
            var obj = arr.find(o => o.status === 'approved');
        }catch(e){
            obj=== undefined;
        }
        

        if(obj===undefined){
            if(banlistchk !== null){
                status = 'rejected';
            }
            const result = await studentTopics.insertOne({groupid, topic, description, status, supervisor, coSuperviser});
            return result.insertedId;
        }else{
            return 'topicexist';
        }
        
    }

export async function ban ({topic}){
    const banlistchk = await banTopics.findOne({topic:topic});
    if(banlistchk !== null){
        const result = await banTopics.insertOne({topic});
        return result.insertedId;
    }else{
        return 'alreadyinlist'
    }
    
    
}

export async function updatestatus(id, topicupdate){
    const result = await studentTopics.updateOne({"_id":ObjectId(id)}, {$set: {status:topicupdate.status}});
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





//Export the functions
export default {save, ban, updatestatus, getAll, removeById, getById};