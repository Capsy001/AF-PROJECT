import React from "react";
import { Component } from "react";

import { Stack } from "@mui/material";

import { Button, TextField, Chip, Divider, Input, CircularProgress, Typography, Box, Alert } from "@mui/material";
import { Campaign, CloudUpload } from "@mui/icons-material";

import AppBarNav from "./appBarNav";
import axios from "axios";

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      role: "",
      data:[],
      edata:[],
    };
    try{
      this.id = sessionStorage.getItem('EditId');
      this.handleSubmit.config = this.handleSubmit.bind(this);
    }catch(e){
      console.log(e)
    }
    
    
  }

  handleData(userdata){
    try{
      this.setState({
        data:{
          name: <TextField id="outlined-required" label="name" defaultValue={userdata.name} fullWidth onChange={this.handleNameChange}/>,
          email: <TextField id="outlined-required" label="email" defaultValue={userdata.email} fullWidth onChange={this.handleEmailChange}/>,
          username: <TextField id="outlined-required" label="username" defaultValue={userdata.username} fullWidth onChange={this.handleUserNameChange}/>,
          role: <TextField id="outlined-required" label="role" defaultValue={userdata.role} fullWidth onChange={this.handleRoleChange}/>,
  
              fileDownload:
               <a target="_blank" href={"http://localhost:5000/"+userdata.file}>Download Existing File</a>,
              publishBtn:
                      
                  <Button
                  variant="contained"
                  color="warning"
                  id="Submit"
                  type="submit"
                  value={userdata._id}
                  fullWidth
                  style={{margin:'0px', marginTop:'20px'}}
                  >
                  Update
                  </Button>
              ,
        }
      });
  
      this.setState({
          name: userdata.name,
          email: userdata.email,
          username: userdata.username,
          role: userdata.role,
          edata: userdata,
      });
    }catch(e){
      console.log(e);
    }
    
     
    console.log(this.state.data);
  }

  async componentDidMount(){
    try{
      console.log(this.id);

      await axios.get(`http://localhost:5000/users/get/` + this.id).then(response =>
      {
        console.log(response.data)
        this.handleData(response.data);
      });
    }catch(e){
      console.log(e)
    }
    
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleUserNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleRoleChange = (event) => {
    this.setState({ role: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try{
      var completed = 0;

      const submissions = {
          name: this.state.name,
          email: this.state.email,
          username: this.state.username,
          role: this.state.role
      };
  
  
  
  
      await axios.put(`http://localhost:5000/users/update/` + this.id, submissions).then(response =>
      {
        const data = response.data;
        console.log(data)
        document.getElementById("alert").style.display = "flex";
      });
    }catch(e){
      console.log(e)
    }
    

  };

  render() {

    return (
      <div className="">
        <AppBarNav />

        <div  style={{marginTop:'100px',marginLeft:'400px',marginBottom:'100px', alignItems:'center', textAlign:'center', width:'40%', border:'3px solid #73AD21', padding:'10px'}}>

        <h1>Update User</h1>


        <form onSubmit={this.handleSubmit} encType="multipart/form-data" method="post">
          <div>
            {this.state.data.name}
          </div>
          <br></br>
          <div>
            {this.state.data.email}
          </div>
          <br></br>
          <div>
            {this.state.data.username}
          </div>
          <br></br>
          <div>
            {this.state.data.role}
          </div>
          <br></br>

            <Alert onClose={() => {}} variant="filled" id="alert" style={{marginTop:'10px',display:'none'}}>
            Updated Succefully!
            </Alert><br/>

            <div style={{display:'flex',justifyContent:'center'}}>
            
          </div>
          <Button className="btn btn-success" type="submit" variant="contained" style={{textAlign:"center", width:"200px", background:"green"}} onClick={this.handleSubmit}>
    <i className="far fa-check-square"></i>
&nbsp; UPDATE
</Button>

        </form>
        </div>
      </div>
    );
  }
}