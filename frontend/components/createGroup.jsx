import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { addItem } from "../restcall";
import "./login.css";
import { Button } from "@mui/material";
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

  handleMember1 = (event) =>
  {
    this.setState({ member1: event.target.value });
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
          <AppBar position="static" color="success">
            <Toolbar variant="dense">
              <Link to="/dashboard">
                <Button sx={{ color: "white" }} size="small" color="inherit">
                  Dashboard
                </Button>
              </Link>

              <Divider orientation="vertical" variant="middle" flexItem />
              <Link style={{ textDecoration: "none" }} to="/createSubmissions">
                <Button sx={{ color: "white" }} size="small" color="inherit">
                  Create Submissions
                </Button>
              </Link>
              <Divider orientation="vertical" variant="middle" flexItem />

              <Link style={{ textDecoration: "none" }} to="/createGroup">
                <Button sx={{ color: "white" }} size="small" color="inherit">
                  Create Group
                </Button>
              </Link>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Link style={{ textDecoration: "none" }} to="/viewUsers">
                <Button sx={{ color: "white" }} size="small" color="inherit">
                  View Users
                </Button>
              </Link>
              <Divider orientation="vertical" variant="middle" flexItem />

              <Link to="/">
                <Button
                  sx={{ color: "yellow" }}
                  size="small"
                  color="inherit"
                  onClick={this.handleLogout}
                >
                  Logout
                </Button>
              </Link>
            </Toolbar>
          </AppBar>

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
                sx={{ width: "50%" }}
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
