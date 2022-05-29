import { save, getAll, removeById, getById, update} from '../dao/submissions.dao.js';

const submissions = new Map();

const defaultSubmission =
{
    title: "Title1",
    desc: "Description1",
    deadline:"2022-05-27",
};

const defaultSubmission2 =
{
    title: "Title2",
    desc: "Description2",
    deadline:"2022-05-29"
};

submissions.set(defaultSubmission.desc, defaultSubmission);
submissions.set(defaultSubmission2.desc, defaultSubmission);


export const addSubmission = async(submission) =>
{

    const newSubmission = {
        title: submission.title,
        desc: submission.desc,
        deadline:submission.deadline
    };
    const result = await save(newSubmission);
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

export default {addSubmission, getAllSubmissions, deleteSubmission, getSubmission, updateSubmission};