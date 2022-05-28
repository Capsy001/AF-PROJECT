import client from'./index.js';
const users = client.db('store').collection('users')
import * as mongoose from 'mongoose';


//register user
export async function save ({id, name, username, email, password, role, reg}){
    const isavailableemail = await users.findOne({email:email});
    const isavailableusername = await users.findOne({username:username});
    if(isavailableemail || isavailableusername){
        return 'userexist'
    }else{
        const result = await users.insertOne({id, name, username, email, password, role, reg});
        return result.insertedId;
    }
    
}

export async function getAll(){
    const cursor = await users.find();

return cursor.toArray();
}

export async function removeById(id){
    return await users.deleteOne({id});
}

export const getById = async (id) =>{
    return await users.findOne({id});
}

export async function update(id, {name, email, username, password, role}){
    const result = await users.replaceOne({id}, {id, name, email, username, password, role});
    return result.ops[0];
   };

//login user
export async function login (user) {
    const email = user.email;
    const password = user.password;
    const userdata = await users.findOne({email:email,password:password});
    return userdata;
}



//Export the functions
export default {save, login, getAll, getById, removeById, update};