import { save, ban, updatestatus, getAll, removeById, getById, update} from '../dao/topics.dao.js';

//function for add topic
export const addTopic = async(topic) =>
{

    const newTopic = {
        groupid: topic.groupid,
        topic: topic.topic,
        description:topic.description,
        status:"pending"
    };
    const result = await save(newTopic);
    console.log(result)
    return result;
};

export const banTopic = async(topic) =>
{

    const banTopic = {
        topic: topic.topic
    };
    const result = await ban(banTopic);
    console.log(result)
    return result;
};

export const updateTopic = async(id,topic) =>
{

    const updatests = {
        topic: topic.status
    };
    const result = await updatestatus(id,updatests);
    console.log(result)
    return result;
};



export const getAllSubmissions = () =>
{
    return getAll();
}

export const deleteSubmission = async id =>
{
    return await removeById(id);
}

        export const getSubmission = async(id) => {
            return await getById(id);
        }

        export const updateSubmission = async (id, submission)=>{
            return await update({id}, submission);
        }

export default {addTopic, banTopic, updateTopic, getAllSubmissions, deleteSubmission, getSubmission, updateSubmission};