import axios from "axios";


//function to get groupID
export async function getGroupId()
{
  var id=null;

  await axios.get("http://localhost:3000/groups/counter").then(response =>
  {
      const groupId = response.data;
      console.log(groupId);
      id=groupId.currentCount;
      
      
    
  }).then(x=>{
    console.log(id);
    return id;
  });

}


//function to add group
export async function createGroup(group)
{

  await axios.post("http://localhost:3000/groups", group).then(response =>
    {
    const data = response.data;
    
      
    });
}