import React from "react";
import { Component } from "react";
import { login } from "../login";
import "../login.module.css";
import { Link } from "react-router-dom";
import {newTopic} from '../../ApiCalls/topic.apicall';
import {getGroupByReg} from '../../ApiCalls/group.apicall';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AppBarNav from "../appBarNav";
import {
  Button,
  Paper,
  TextField
} from "@mui/material";

export default class RegisterTopics extends Component {
  constructor() {
    super();

    this.state = {
      topic:'',
      description:'',
      status:''
    }
  }

  handleLogout = (event) => {
    sessionStorage.setItem("logged", "false");

    sessionStorage.setItem("loggedName", "NotLogged!");
    sessionStorage.setItem("loggedEmail", "NotLogged!");
    sessionStorage.setItem("loggedRole", "NotLogged!");

    sessionStorage.clear;
    window.location.href = "/";
  };



  handleTopic = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();

    const regid = sessionStorage.getItem("RegId");
    console.log(regid)
    const groupdata = await getGroupByReg(regid);
    console.log(groupdata.length )
    if(groupdata.length !== 0){
      console.log(groupdata[0].groupId)
      const topic = {
        groupid:groupdata[0].groupId,
        topic:this.state.topic,
        description:this.state.description,
        status: this.state.status
      }
  
      const data = await newTopic(topic);
      console.log(data)
    }else{
      alert("You need to register group first!.")
      window.location.href = "/createGroup";
    }
    

  }

  async componentWillMount() {
    const logged = sessionStorage.getItem("logged");
    const role = sessionStorage.getItem("loggedRole");
    
    
    if(!role.includes("student")){
        window.location.href = "/";
    }
    if (logged == "false") {
      alert("User not logged in!");
      window.location.href = "/";
    }
  }

  render() {
    return (
      <div className="loginForm">
        <AppBarNav></AppBarNav>
        <h2>Register Topics</h2>

        <hr></hr>
        
        <Paper sx={{ padding: "32px", width: "40%", textAlign:"center", justifyContent:"center", margin: "0 auto" }}>
            <form onSubmit={this.handleSubmit}>
                <div>
                <TextField
                    required
                    label="Topic"
                    variant="outlined"
                    type="text"
                    onChange={this.handleTopic}
                />
                </div>
                <br></br>
                <div>
                <TextareaAutosize
                  label="Description"
                  aria-label="Description"
                  placeholder="Description"
                  style={{ width: 200 }}
                  onChange={this.handleDescription}
                />
                </div>
                <br></br>
                <div>
                <Button
                    size="small"
                    variant="contained"
                    color="success"
                    className="buttonMargin"
                    type="submit"
                >
                    Submit
                </Button>
                </div>
            </form>
        </Paper>

      </div>
    );
  }
}