import client from'./index.js';
const users = client.db('store').collection('users')
import * as mongoose from 'mongoose';

//register user
export async function save ({name, username, email, password, role}){
    const result = await users.insertOne({name, username, email, password, role});
    //returns the inserted data
    return result.insertedId;
}

//login user
export async function login (user) {
    const email = user.email;
    const password = user.password;
    const userdata = await users.findOne({email:email,password:password});
    return userdata;
}



//Export the functions
export default {save, login};