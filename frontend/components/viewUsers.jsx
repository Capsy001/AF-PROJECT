import axios from "axios";
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { addItem, getAllItems, getAllItemsRaw } from "../restcall";
import "./login.module.css";
import axios from "axios";
import { AppBar } from "@mui/material";
import AppBarNav from "./appBarNav";
import {
  Button,
  Stack,
  AppBar,
  Toolbar,
  Divider,
  createTheme,
  colors,
} from "@mui/material";

export default class ViewUsers extends Component {
  constructor() {
    super();

    this.state = {
        name: "",
        email: "",
        username:"",
        password: "",
        role: "",
        data: [],
    };
  }



  componentWillMount()
  {


    const logged = sessionStorage.getItem("logged");
    if (logged == "false") {
      alert("User not logged in!");
      window.location.href = "/";
    }

      axios.get("http://localhost:3000/users/").then((response) => {
        const data = response.data;
        var users = [];

        const keys = Object.keys(data);

        for (var x in keys) {
            users.push({
            name: data[x][1].name,
            email: data[x][1].email,
            username: data[x][1].username,
            password: data[x][1].password,
            role: data[x][1].role,
            id: data[x][1].id,
            uid: data[x][1].uid,
          });
        }

        this.setState({ data: users });
      });

      setTimeout(() => {
        console.log(this.state.data);
      }, 500);
    
  }






  handleAddToCart = (event) => {
    

    alert(event.target.dataset.key);


  };

  handleAddToWishlist = (event) =>
  {
    
    alert(event.target.dataset.key);


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
        <AppBarNav></AppBarNav>

        <div className="loginForm">
          <h2>View Items</h2>
          <Link to="/dashboard">
            <button className="buttonMargin">Dashboard</button>
          </Link>

          <Link to="/viewCart">
            <button className="buttonMargin">View Cart</button>
          </Link>

          <Link to="/">
            <button className="buttonMargin" onClick={this.handleLogout}>
              Logout
            </button>
          </Link>

          <hr></hr>
          {
            <table>
              <tbody>
                {this.state.data.map((user) => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
                      <td>{user.password}</td>
                      <td>{user.role}</td>
                      <td>
                        <button
                          data-key={user.id}
                          onClick={this.handleAddToCart}
                        >
                          ++Cart
                        </button>
                      </td>
                      <td>
                        <button
                          data-key={user.id}
                          onClick={this.handleAddToWishlist}
                        >
                          ++Wishlist
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        </div>
      </div>
    );
  }
}
