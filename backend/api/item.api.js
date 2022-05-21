import { randomUUID } from 'crypto';

//map to store items
const items = new Map();



//uid is a unique field
const defaultItem =
{
    name: "Iphone5",
    price: 20000,
    desc: "Brand new",
    id: randomUUID(),
    uid: "john"
};

const defaultItem2 =
{
    name: "Samsung",
    price: 25000,
    desc: "Used",
    id: randomUUID(),
    uid: "john"
};

items.set(defaultItem.id, defaultItem);
items.set(defaultItem2.id, defaultItem2);

//function for adding items
export const addItem = (item) =>
{
    console.log("add item running");

    const newItem = {
        name: item.name,
        price: item.price,
        desc: item.desc,
        id: randomUUID(),
        uid: item.uid
    };

    items.set(newItem.id, newItem);
    console.log(items);

    return newItem;

};



//function for login
export const getAll = () =>
{

    return JSON.stringify(Array.from(items.entries()))
    
}

export const edit = (id, item) =>
{
    items.set(id, item);
    return item;
}

export const deleteItem = (id) =>
{
    if (!items.has(id))
    {
        throw new Error(`Post not found for id : ${id}`)
    }

    items.delete(id);

    return { result: "deleted" };
}
