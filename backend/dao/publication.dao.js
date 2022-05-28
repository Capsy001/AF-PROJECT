import client from'./index.js';
const publication = client.db('store').collection('publications')

export async function save ({title, desc, file}){
        const result = await publication.insertOne({title, desc, file});
        return result.insertedId;
}

export async function getAll(){
    const cursor = await publication.find();

return cursor.toArray();
}

export async function removeById(id){
    return await publication.deleteOne({_id:ObjectId(id)});
}



//Export the functions
export default {save, getAll, removeById};