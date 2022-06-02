import { getPanelMembers, checkStatusOfGroup, assign, getGroups} from '../dao/panel.dao.js';

//function to get all panel members
export const getAllPanelMembers = async() =>
{
    const res = getPanelMembers();
    return res;
}

//function to get all groups
export const getAllGroups = async() =>
{
    const res = getGroups();
    return res;
}

//function to get group
export const getGroup = async(groupId) => {
    const res = await checkStatusOfGroup(groupId);
    return res;
}

//function to assign panel members to the groups
export const assignPanel = async(groupId,panelmembers) =>
{

    const updatests = {
        panel: panelmembers.panel
    };
    const result = await assign(groupId,updatests);
    console.log(result)
    return result;
};

export default {getAllPanelMembers, getGroup, assignPanel, getAllGroups};