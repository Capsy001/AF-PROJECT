import client from'./index.js';
const users = client.db('store').collection('users')
const groups = client.db('store').collection('groups')
import {ObjectId} from 'mongodb';
import * as mongoose from 'mongoose';

export async function assign ({groupid,panelmember}){
    const result = await groups.updateOne({"_id":ObjectId(groupid)}, {$set: {panel:panelmember.panel}});
    console.log(result)
    return result;
}

export async function checkStatusOfGroup (groupId){
    const cursor = await groups.findOne({groupId:parseInt(groupId)});
    if(cursor.panel){
        var panelmembers = cursor.panel;
    }else{
        panelmembers = "NotExist";
    }
    return {data:panelmembers};
}

export async function getPanelMembers (){
    const cursor = await users.find({role:'panel'});
    return cursor.toArray();
}


//Export the functions
export default {getPanelMembers, checkStatusOfGroup, assign};