import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";


import { Button } from "@mui/material";
import { getGroupId, createGroup } from "../../ApiCalls/group.apicall";
import { addItem } from "../../restcall";

import AppBarNav from "../appBarNav";
import {
  Button,
  Stack,
  AppBar,
  Toolbar,
  Divider,
  createTheme,
  colors,
  Paper,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default class CreateGroup extends Component {
  constructor() {
    super();

    this.state = {
      member1: "",
      member2: "",
      member3: "",
      member4: "",
      groupid: "",
    };
  }

  handleMember1 = (event) => {
    this.setState({ member1: event.target.value });
  };
  handleMember2 = (event) => {
    this.setState({ member2: event.target.value });
  };
  handleMember3 = (event) => {
    this.setState({ member3: event.target.value });
  };
  handleMember4 = (event) => {
    this.setState({ member4: event.target.value });
  };

  async handleSubmit(event){
    event.preventDefault();

    
    try{
      const groupId= await getGroupId();
      await console.log('ry' + groupId);
    }catch(e){
      console.log(e);
    }
    
  

    const group={
      member1: this.state.member1,
      member2: this.state.member2,
      member3: this.state.member3,
      member4: this.state.member4,
      groupId: groupId
    }
    createGroup(group);

   // console.log(groupId);
   // alert("Group created!");

  }

  handleLogout = (event) => {
    sessionStorage.setItem("logged", "false");

    sessionStorage.setItem("loggedName", "NotLogged!");
    sessionStorage.setItem("loggedEmail", "NotLogged!");
    sessionStorage.setItem("loggedRole", "NotLogged!");

    sessionStorage.clear;
    window.location.href = "/";
  };

  render() {
    return (
      <div>
        <div className="loginForm">
          <AppBarNav></AppBarNav>

          <h2>Create Group</h2>

          <hr></hr>
          <Paper
            sx={{
              padding: "32px",
              width: "40%",
              textAlign: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <form onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  label="Member 1"
                  variant="outlined"
                  required
                  type="text"
                  value={this.state.member1}
                  onChange={this.handleMember1}
                />
              </div>
              <br></br>
              <div>
                <TextField
                  label="Member 2"
                  variant="outlined"
                  required
                  type="text"
                  value={this.state.member2}
                  onChange={this.handleMember2}
                />
              </div>
              <br></br>
              <div>
                <TextField
                  label="Member 3"
                  variant="outlined"
                  required
                  type="text"
                  value={this.state.member3}
                  onChange={this.handleMember3}
                />
              </div>
              <br></br>
              <div>
                <TextField
                  label="Member 4"
                  variant="outlined"
                  required
                  type="text"
                  value={this.state.member4}
                  onChange={this.handleMember4}
                />
              </div>

              <br></br>
              
              <Button
                sx={{ width: "50%", margin: "5px" }}
                variant="contained"
                color="success"
                id="Submit"
                size="small"
                className="buttonMargin"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
