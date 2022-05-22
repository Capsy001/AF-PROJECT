import { randomUUID } from 'crypto';
import { save, getAll, removeById} from '../dao/submissions.dao.js';

//map to store userdata
const submissions = new Map();


//passwords are not encrypted for simplicity
//desc is a unique field but submission id is also added
const defaultSubmission =
{
    title: "John Doe",
    desc: "john@abc.com",
    deadline:"john0",
    file:"",
};

const defaultSubmission2 =
{
    title: "Kate Winslet",
    desc: "kate@abc.com",
    deadline:"kate0",
    file:"",
};

submissions.set(defaultSubmission.desc, defaultSubmission);
submissions.set(defaultSubmission2.desc, defaultSubmission);

//function for registering
export const addSubmission = async(submission) =>
{

    const newSubmission = {
        title: submission.title,
        desc: submission.desc,
        deadline:submission.deadline,
        file:submission.file
    };
    const result = await save(newSubmission);
    console.log(result)
    return result;
};



export const getAllSubmissions = () =>
{
    return  getAll();
}

export const deleteSubmission = async id =>
{
    return removeById(id);
}

export default {addSubmission, getAllSubmissions, deleteSubmission};