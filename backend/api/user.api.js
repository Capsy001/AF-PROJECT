import { randomUUID } from 'crypto';
import { save, login, getAll, removeById} from '../dao/users.dao.js';




//function for registering
export const addUser = async(user) =>
{

    const newUser = {
        name: user.name,
        email: user.email,
        username:user.username,
        password: user.password,
        role: user.role,
        reg: user.reg
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

export const getAllUsers = () =>
{
    return  getAll();
}

export const deleteUser = async id =>
{
    return removeById(id);
}

// export const EditItem = (
//     userid,
//     { itemtitle, itemdesc, itemquantity}
//   ) => {itemdesc
//     const items = {
//         userid,
//       itemtitle: itemtitle,
//       itemdesc: itemdesc,
//       itemquantity: itemquantity,
//     }
//     users.set(userid, users)
//     return users
//   }

export default {addUser, loginuser, getAllUsers, deleteUser};