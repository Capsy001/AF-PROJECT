import client from './index.js';

const groups = client.db('store').collection('groups')


//register user
export async function save ({name, username, email, password, role}){
    const isavailableemail = await users.findOne({email:email});
    const isavailableusername = await users.findOne({username:username});
    if(isavailableemail || isavailableusername){
        return 'userexist'
    }else{
        const result = await users.insertOne({name, username, email, password, role});
        return result.insertedId;
    }
    
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