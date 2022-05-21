import axios from "axios";


//function to login with rest api
export async function login(email, password)
{
  const user = { email: email, password: password };

  await axios.post("http://localhost:3000/users/login", user).then(response =>
    {
    const data = response.data;
      console.log(data)
      if (data.includes("usernotvalid"))
      {
        alert("Invalid credentials!");
        window.location.href = "/";
        return;
      }else{
        sessionStorage.setItem('logged', 'true');
        sessionStorage.setItem('loggedName', data.name);
        sessionStorage.setItem('loggedEmail', data.email);
        sessionStorage.setItem('loggedRole', data.role);
        sessionStorage.setItem('loggedUID', data.uid);
    
        const name = sessionStorage.getItem('loggedName');
        console.log(name + " logged in!");
        
        window.location.href='/dashboard';
      }
    });
}


//function to register with rest api
export async function register(user)
{
  await axios.post("http://localhost:3000/users/new", user).then(response =>
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


//function to add item with rest api
export async function addItem(item)
{
  await axios.post("http://localhost:3000/items/", item).then(response =>
  {
    
    alert("Item added: "+response.data.name);
    
    });
}


export async function getAllItems()
{
  await axios.get("http://localhost:3000/items/").then(response =>
  {
    const data = response.data;
    itemArray=[]

    const uid=sessionStorage.getItem("loggedUID");
    const array = Object.keys(data);


    for (key in array)
    
      if (data[key].uid == uid)
      {
        itemArray.push(data[key])
      }
    
  });
  
  console.log(itemArray);

  return itemArray;
}



export async function getAllItemsRaw()
{

  var data = null;

  await fetch("http://localhost:3000/items", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(this.state),
  })
    .then((response) =>
    {
      response.json().then(data => ({
        data: data,
        status: response.status
      })).then(res =>
      {
        console.log(res.data)
        data=res.data
      })
        
    });
  
  
  return data;
        
} 
  
