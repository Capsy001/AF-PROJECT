import { save, groupCount } from '../dao/groups.dao.js'


//function for creating group
export const createGroup = async(group) =>
{

    const newGroup = {
        member1: group.member1,
        member2: group.member1,
        member3: group.member1,
        member4: group.member1,
        groupid: group.groupid
    };
    const result = await save(newGroup);
    console.log(result)
    return result;
};

//function for getting and updating counter
export const groupCounter = async() =>
{
    const result = await groupCount();
    console.log(result)
    return result;
};