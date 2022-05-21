import { randomUUID } from 'crypto';

//map to store userdata
const users = new Map();


//passwords are not encrypted for simplicity
//email is a unique field but user id is also added
const defaultUser =
{
    name: "John Doe",
    email: "john@abc.com",
    password: "123",
    uid: "john",
    role: "trader"
};

const defaultUser2 =
{
    name: "Kate Winslet",
    email: "kate@abc.com",
    password: "123",
    uid: "kate",
    role: "customer"
};

users.set(defaultUser.email, defaultUser);
users.set(defaultUser2.email, defaultUser);

//function for registering
export const addUser = (user) =>
{
    console.log("add user running");
    const matchedUser = users.get(user.email);

    if (matchedUser)
    {
        console.log("user exist");
        return { result: "exist"};
    }

    const newUser = {
        name: user.name,
        email: user.email,
        password: user.password,
        uid: randomUUID(),
        role: user.role
    };

    users.set(newUser.email, newUser);
    console.log(users);

    return {result: "registered"};
};



//function for login
export const login = (email) =>
{

    console.log(email);

    const user = users.get(email);

    if (typeof user==='undefined')
    {
        return {result: "noUser"}
    }
    else
    {
        return user;
    }

    
}

