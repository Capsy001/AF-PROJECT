import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { addItem } from "../../restcall";

import { Button } from "@mui/material";

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
                  onChange={this.handleUserNameChange}
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
                  onChange={this.handleEmailChange}
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
                  onChange={this.handlePasswordChange}
                />
              </div>

              <br></br>
              <div>
                <TextField
                  label="Group ID"
                  variant="outlined"
                  required
                  type="text"
                  value={this.state.groupid}
                  onChange={this.handlePasswordChange}
                  disabled
                />
              </div>
              <Button
                sx={{ width: "50%", margin: "5px" }}
                variant="contained"
                color="success"
                id="Submit"
                size="small"
                className="buttonMargin"
                type="submit"
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
