import axios from "axios";


//function to login with rest api
export async function login(email, password)
{
  const user = { email: email, password: password };

  await axios.get("http://localhost:3000/users/"+email).then(response =>
    {
    const data = response.data;

    try
    {
      if (data.result == "noUser")
      {
        alert("Invalid credentials!");
        window.location.href = "/";
        return;
      }
    } catch (error){
        alert("Authorized!");
    }

    sessionStorage.setItem('logged', 'true');
    sessionStorage.setItem('loggedName', data.name);
    sessionStorage.setItem('loggedEmail', data.email);
    sessionStorage.setItem('loggedRole', data.role);
    sessionStorage.setItem('loggedUID', data.uid);

    const name = sessionStorage.getItem('loggedName');
    console.log(name + " logged in!");
    
    window.location.href='/dashboard';
    });
}


//function to register with rest api
export async function register(user)
{
  await axios.post("http://localhost:3000/users/", user).then(response =>
  {
    
    const data = response.data;

    if (data.result == "exist")
    {
      alert("This email already exist!");
      return;
    }

    if (data.result == "registered")
    {
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
  
