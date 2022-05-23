import { randomUUID } from 'crypto';
import { save, login} from '../dao/users.dao.js';




//function for registering
export const addUser = async(user) =>
{

    const newUser = {
        name: user.name,
        email: user.email,
        username:user.username,
        password: user.password,
        role: user.role
    };
    const result = await save(newUser);
    console.log(result)
    return result;
};



//function for login
export const loginuser = async (user) =>
{

    const userlogin = {
        email:user.email,
        password:user.password
    };
    const result = await login(userlogin);
    return result;

    
}

export default {addUser, loginuser};