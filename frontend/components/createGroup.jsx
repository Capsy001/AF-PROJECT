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
} from "@mui/material";

export default class CreateGroup extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: "",
      desc: "",
      uid: "",
    };
  }

  

  handleItemName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleDesc = (event) => {
    this.setState({
      desc: event.target.value,
    });
  };

  handleItemPrice = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const uid = sessionStorage.getItem("loggedUID");

    const item = {
      name: this.state.name,
      price: this.state.price,
      desc: this.state.desc,
      uid: uid,
    };

    addItem(item);
  };

  componentWillMount() {
    
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

          <h2>Add Items</h2>

          <hr></hr>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Item Name</label>
              <input type="text" onChange={this.handleItemName}></input>
            </div>
            <div>
              <label>Item Price</label>
              <input type="number" onChange={this.handleItemPrice}></input>
            </div>
            <div>
              <label>Description</label>
              <input type="text" onChange={this.handleDesc}></input>
            </div>

            <button className="buttonMargin" type="submit">
              +Add Item
            </button>
          </form>
        </div>
      </div>
    );
  }
}
