import client from'./index.js';
const users = client.db('store').collection('users')
import * as mongoose from 'mongoose';


//register user
export async function save ({name, username, email, password, role, reg}){
    const isavailableemail = await users.findOne({email:email});
    const isavailableusername = await users.findOne({username:username});
    if(isavailableemail || isavailableusername){
        return 'userexist'
    }else{
        const result = await users.insertOne({name, username, email, password, role, reg});
        return result.insertedId;
    }
    
}

export async function getAll(){
    const cursor = await users.find();

return cursor.toArray();
}

// export async function updateUser(id, {name, username, email, password, role}){
//     const result = await users.replaceOne({_id:ObjectId(id)}, {name, username, email, password, role});
//     return result;
// }

export async function removeById(id){
    return await users.deleteOne(ctx.params._id);
}

//login user
export async function login (user) {
    const email = user.email;
    const password = user.password;
    const userdata = await users.findOne({email:email,password:password});
    return userdata;
}



//Export the functions
export default {save, login, getAll, removeById};