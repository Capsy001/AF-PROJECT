import React from "react";
import { Component } from "react";

import { Button, TextField, Chip, Divider, Stack, Input } from "@mui/material";
import { Campaign, CloudUpload } from "@mui/icons-material";

import { Button, TextField, Chip, Divider, Input, CircularProgress, Typography, Box, Alert } from "@mui/material";
import { Campaign, CloudUpload } from "@mui/icons-material";

import AppBarNav from "../AppBarNav";
import axios from "axios";

export default class UpdateSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      deadline: "",
      data:[],
      edata:[],
    };
    
    this.currentLink = (window.location.href).split("/");
    this.id = this.currentLink[this.currentLink.length-1];
    this.handleSubmit.config = this.handleSubmit.bind(this);
  }

  handleData(subdata){
    this.setState({
      data:{
            title: <TextField id="outlined-required" label="Title" defaultValue={subdata.title} fullWidth onChange={this.handleTitleChange}/>,
            desc: <TextField id="outlined-required" label="Title" defaultValue={subdata.desc} fullWidth onChange={this.handleDescChange}/>,
            deadline: <TextField id="outlined-required" label="Title" defaultValue={subdata.deadline} fullWidth onChange={this.handleDeadlineChange}/>,
           
            publishBtn:
                    
                <Button
                variant="contained"
                color="warning"
                id="Submit"
                type="submit"
                value={subdata._id}
                fullWidth
                style={{margin:'0px', marginTop:'20px'}}
                >
                Update
                </Button>
            ,
      }
    });

    this.setState({
        title: subdata.title,
        desc: subdata.desc,
        deadline: subdata.deadline,
        edata: subdata,
    });
     
    console.log(this.state.data);
  }

  componentDidMount(){
    console.log(this.id);

    axios.get(`http://localhost:3000/submissions/get/${id}`+this.id).then(response =>
    {
      this.handleData(response.data[0]);
    });
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDescChange = (event) => {
    this.setState({ desc: event.target.value });
  };

  handleDeadlineChange = (event) => {
    this.setState({ desc: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    var completed = 0;

    const submissions = {
      title: this.state.title,
      desc: this.state.desc,
      deadline: this.state.deadline,
      id: event.target.Submit.value
    };

    

    

    

    axios.put(`http://localhost:3000/submissions/update/${id}`, submissions).then(response =>
    {
      const data = response.data;
      //alert("Published!");
      document.getElementById("progress").style.display = "none";
      document.getElementById("alert").style.display = "flex";
    });

  };

  render() {

    return (
      <div className="">
        <AppBarNav />

        <div  style={{marginTop:'40px'}}>

        </div>


        <form onSubmit={this.handleSubmit} encType="multipart/form-data" method="post">
          <div>
            {this.state.data.title}
          </div>
          <br></br>
          <div>
            {this.state.data.desc}
          </div>
          <br></br>
          <div>
            {this.state.data.deadline}
          </div>
          <br></br>    

            

          

            <Alert onClose={() => {}} variant="filled" id="alert" style={{marginTop:'10px',display:'none'}}>
            Updated Succefully!
            </Alert><br/>

           

            <button className="btn btn-success" type="submit" style={{marginTop:'15px', marginLeft:"100px", width:"200px"}} onClick={this.handleSubmit}>
    <i className="far fa-check-square"></i>
&nbsp; UPDATE
</button>

        </form>
      </div>
    );
  }
}
