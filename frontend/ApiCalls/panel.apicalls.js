import axios from "axios";


//function to get groups
export async function getGroups()
{
  var data = [];

  await axios.get("http://localhost:3000/panel/Groups").then(response =>
  {
    data = response.data;
  }).then(x=>{
    
  });
  return data;
}

//function to get panelmembers
export async function getPanelMembers()
{
  var data = [];

  await axios.get("http://localhost:3000/panel/").then(response =>
  {
    data = response.data;
  }).then(x=>{
    
  });
  return data;
}

//function to get group Id by student registation number
export async function getGroupByReg(regId){
  var data = [];
  await axios.get('http://localhost:3000/groups/getById/' + regId).then(response => {
    data = response.data;
  })
  return data;
}

//function to add group
export async function createGroup(group)
{

  await axios.post("http://localhost:3000/groups/", group).then(response =>
    {
    const data = response.data;
    console.log(data)
      
    });
}