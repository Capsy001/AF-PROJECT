import { save, getAll, removeById, getById, update} from '../dao/studentsubmissions.dao.js';

//map to store userdata
const studentsubmissions = new Map();


//passwords are not encrypted for simplicity
//topic is a unique field but studentsubmission id is also added
const defaultStudentSubmission =
{
    groupid: "John Doe",
    topic: "john@abc.com",
    uploaddate:"john0",
    file:"",
};

const defaultStudentSubmission2 =
{
    groupid: "Kate Winslet",
    topic: "kate@abc.com",
    uploaddate:"kate0",
    file:"",
};

studentsubmissions.set(defaultStudentSubmission.topic, defaultStudentSubmission);
studentsubmissions.set(defaultStudentSubmission2.topic, defaultStudentSubmission);

//function for registering
export const addStudentSubmission = async(studentsubmission) =>
{

    const newStudentSubmission = {
        groupid: studentsubmission.groupid,
        topic: studentsubmission.topic,
        uploaddate:studentsubmission.uploaddate,
        file:studentsubmission.file
    };
    const result = await save(newStudentSubmission);
    console.log(result)
    return result;
};



export const getAllStudentSubmissions = () =>
{
    return getAll();
}

export const deleteStudentSubmission = async id =>
{
    return await removeById(id);
}

        export const getStudentSubmission = async(id) => {
            return await getById(id);
        }

        export const updateStudentSubmission = async (id, studentsubmission)=>{
            return await update({id}, studentsubmission);
        }

export default {addStudentSubmission, getAllStudentSubmissions, deleteStudentSubmission, getStudentSubmission, updateStudentSubmission};