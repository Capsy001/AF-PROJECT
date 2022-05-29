import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, AppBar, Toolbar, Divider, createTheme, colors } from "@mui/material";

class AppBarNav extends Component {
  constructor()
  {
    super();
    this.isAdmin = false;
  }

  handleLogout = (event) => {
    sessionStorage.setItem("logged", "false");

    sessionStorage.setItem("loggedName", "NotLogged!");
    sessionStorage.setItem("loggedEmail", "NotLogged!");
    sessionStorage.setItem("loggedRole", "NotLogged!");

    sessionStorage.clear;
    window.location.href = "/";
  };

  componentWillMount() {
    const logged = sessionStorage.getItem("logged");
    const role = sessionStorage.getItem("loggedRole");

    if(sessionStorage.getItem("loggedRole") == 'admin'){
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
  }

  render() {
    return (
      <AppBar position="static" color="success">
        <Toolbar variant="dense">
          <Link style={{ textDecoration: "none" }} to="/dashboard">
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
          <Link style={{ textDecoration: "none" }} to="/createStudentSubmissions">
            <Button sx={{ color: "white" }} size="small" color="inherit">
              Create Student Submissions
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
          <Link style={{ textDecoration: "none" }} to="/viewStudentSubmissions">
            <Button sx={{ color: "white" }} size="small" color="inherit">
              View Student Submission
            </Button>
          </Link>
          <Divider orientation="vertical" variant="middle" flexItem />

          { this.isAdmin ? 
            
            <Link style={{ textDecoration: "none" }} to="/managePublications">
              <Button sx={{ color: "white" }} size="small" color="inherit">
                Publication
              </Button>
            </Link>

            : 

            <Link style={{ textDecoration: "none" }} to="/viewPublications">
              <Button sx={{ color: "white" }} size="small" color="inherit">
                Publication(s)
              </Button>
            </Link>
            
          }

          <Divider orientation="vertical" variant="middle" flexItem />

          <Link style={{ textDecoration: "none" }} to="/">
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
    );
  }
}

export default AppBarNav;
