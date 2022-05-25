import React from "react";
import { Component } from "react";
import { login } from "../restcall";
import "./login.css";
import { Link } from "react-router-dom";
import { Button, Stack, AppBar, Toolbar, Divider, createTheme, colors } from "@mui/material";
import styled from "@emotion/styled";

export default class Dashboard extends Component {
  constructor()
  {

    const theme = createTheme({
      palette: {
        secondary: {
          main: colors.orange[500]
        }
      }
    });
   
    super();
  }

  handleLogout = (event) => {
    sessionStorage.setItem("logged", "false");

    sessionStorage.setItem("loggedName", "NotLogged!");
    sessionStorage.setItem("loggedEmail", "NotLogged!");
    sessionStorage.setItem("loggedRole", "NotLogged!");

    sessionStorage.clear;
    window.location.href = "/";
  };

  // GetNav = () => {
  //   const role = sessionStorage.getItem("loggedRole");

  //   if (role == "trader") {
  //     return (
  //       <div>
  //         <Link to="/addItems">
  //           <Button
  //             size="small"
  //             variant="contained"
  //             color="success" className="buttonMargin">Add Items</Button>
  //         </Link>

  //         <Link to="/editItems">
  //           <Button
  //             size="small"
  //             variant="contained"
  //             color="success"  className="buttonMargin">Edit Items</Button>
  //         </Link>

  //         <Button
  //             size="small"
  //             variant="contained"
  //             color="success" className="buttonMargin" onClick={this.handleLogout}>
  //           Logout
  //         </Button>
  //       </div>
  //     );
  //   } else if (role == "customer") {
  //     return (
  //       <div>
  //         <Link to="/viewItems">
  //           <Button
  //             size="small"
  //             variant="contained"
  //             color="success" className="buttonMargin">View Items</Button>
  //         </Link>

  //         <Link to="/viewCart">
  //           <Button
  //             size="small"
  //             variant="contained"
  //             color="success" className="buttonMargin">View Cart</Button>
  //         </Link>

  //         <Button
  //             size="small"
  //             variant="contained"
  //             color="success" className="buttonMargin" onClick={this.handleLogout}>
  //           Logout
  //         </Button>
  //       </div>
  //     );
  //   }
  // };

  componentWillMount() {
    const logged = sessionStorage.getItem("logged");
    const role = sessionStorage.getItem("loggedRole");

    switch(role){
      case "panel":
        window.location.href = "/paneldashboard";
        break;
    }
    
    if (logged == "false") {
      alert("User not logged in!");
      window.location.href = "/";
    }
  }

  render() {
    return (
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

        <h2>Dashboard</h2>

        <hr></hr>
        <h2>Hi {sessionStorage.getItem("loggedName")}</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{sessionStorage.getItem("loggedName")}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{sessionStorage.getItem("loggedEmail")}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{sessionStorage.getItem("loggedRole")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
