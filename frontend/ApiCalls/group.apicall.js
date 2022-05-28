import axios from "axios";


//function to get groupID
export async function getGroupId()
{
  const groupId=null;

  await axios.get("http://localhost:3000/items/").then(response =>
  {
      groupId = response.data.currentCount;
      console.log(groupId);
      
      
    
  });

  return groupId;
}


// //function to login with rest api
// export async function login(email, password)
// {
//   const user = { email: email, password: password };

//   await axios.post("http://localhost:3000/users/login", user).then(response =>
//     {
//     const data = response.data;
//       console.log(data)
//       if (!data.name)
//       {
//         alert("Invalid credentials!");
//         window.location.href = "/";
//         return;
//       }else{
//         sessionStorage.setItem('logged', 'true');
//         sessionStorage.setItem('loggedName', data.name);
//         sessionStorage.setItem('loggedEmail', data.email);
//         sessionStorage.setItem('loggedRole', data.role);
//         sessionStorage.setItem('loggedUID', data.uid);
    
//         const name = sessionStorage.getItem('loggedName');
//         console.log(name + " logged in!");
        
//         window.location.href='/dashboard';
//       }
//     });
// }