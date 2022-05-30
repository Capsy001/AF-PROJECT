import React from "react";
import { Component } from "react";
import { login } from "../restcall";
import "./login.module.css";
import { Link } from "react-router-dom";
import {
  Button,
  Stack,
  AppBar,
  Toolbar,
  Divider,
  createTheme,
  colors,
} from "@mui/material";
import styled from "@emotion/styled";
import AppBarNav from "./AppBarNav";

export default class Dashboard extends Component {
  constructor() {
    const theme = createTheme({
      palette: {
        secondary: {
          main: colors.orange[500],
        },
      },
    });

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

    if (sessionStorage.getItem("loggedRole") == "admin") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    switch (role) {
      case "panel":
        window.location.href = "/panel";
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

        <AppBarNav></AppBarNav>


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
