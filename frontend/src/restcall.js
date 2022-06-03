import axios from "axios";
import {baseURL} from './authapi.js';

//function to login with rest api
export async function login(email, password)
{
  try{
    const user = { email: email, password: password };

    await axios.post("http://localhost:5000/users/login", user).then(response =>
      {
      const data = response.data;
        console.log(data)
        if (!data.name)
        {
          alert("Invalid credentials!");
          window.location.href = "/";
          return;
        }else{
          sessionStorage.setItem('logged', 'true');
          sessionStorage.setItem('loggedName', data.name);
          sessionStorage.setItem('loggedEmail', data.email);
          sessionStorage.setItem('loggedRole', data.role);
          sessionStorage.setItem('loggedUID', data._id);
          sessionStorage.setItem('loggedUsername', data.username);
          sessionStorage.setItem('RegId', data.reg);
  
          try{
            sessionStorage.setItem('loggedStudentID', data.reg);
  
          }catch(e){
            console.log("Not a student!");
          }
      
          const name = sessionStorage.getItem('loggedName');
          console.log(name + " logged in!");
          
          window.location.href='/dashboard';
        }
      });
  }catch(e){
    console.log(e)
  }
  
}


//function to register with rest api
export async function register(user)
{
  await axios.post("http://localhost:5000/users/new", user).then(response =>
  {
    
    const data = response.data;

    if (data.includes("userexist"))
    {
      alert("This email/uesrname already exist!");
      return;
    }else if(data.includes('db err')){
      alert("Error, please try again later!.");
      return;
    }else{
      alert("Registered successfully!");
      window.location.href="/"
    }
    });
}

export default {register, login};