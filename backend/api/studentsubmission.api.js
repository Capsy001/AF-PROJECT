import { save, getAll, removeById, getById, update} from '../dao/studentsubmissions.dao.js';


const studentsubmissions = new Map();


const defaultStudentSubmission =
{
    groupid: "G01",
    topic: "Topic1",
    uploaddate:"2022-05-11",
    file:"",
    assignmentTitle:"",
};

const defaultStudentSubmission2 =
{
    groupid: "G02",
    topic: "Topic2",
    uploaddate:"2022-05-16",
    file:"",
    assignmentTitle:"",
};

studentsubmissions.set(defaultStudentSubmission.topic, defaultStudentSubmission);
studentsubmissions.set(defaultStudentSubmission2.topic, defaultStudentSubmission);


export const addStudentSubmission = async(studentsubmission) =>
{

    const newStudentSubmission = {
        groupid: studentsubmission.groupid,
        topic: studentsubmission.topic,
        uploaddate:studentsubmission.uploaddate,
        file:studentsubmission.file,
        assignmentTitle:studentsubmission.assignmentTitle,
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