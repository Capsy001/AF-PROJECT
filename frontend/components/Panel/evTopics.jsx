import React from "react";
import { Component } from "react";
import { login } from "../login";
import "../login.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {getTopics} from '../../ApiCalls/topic.apicall';

export default class EvTopics extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  handleLogout = (event) => {
    sessionStorage.setItem("logged", "false");

    sessionStorage.setItem("loggedName", "NotLogged!");
    sessionStorage.setItem("loggedEmail", "NotLogged!");
    sessionStorage.setItem("loggedRole", "NotLogged!");

    sessionStorage.clear;
    window.location.href = "/";
  };

  GetNav = () => {
      return (
        <div>
          <Link to="/panel">
            <button className="buttonMargin">Panel dashboard</button>
          </Link>

          <Link to="/panel/evPresentation">
            <button className="buttonMargin">Evaluate presentation</button>
          </Link>

          <button className="buttonMargin" onClick={this.handleLogout}>
            Logout
          </button>
        </div>
    );
    
  };

  async componentWillMount() {
    const logged = sessionStorage.getItem("logged");
    const role = sessionStorage.getItem("loggedRole");
    if(!role.includes("panel")){
        window.location.href = "/";
    }
    if (logged == "false") {
      alert("User not logged in!");
      window.location.href = "/";
    }
    const topics = await getTopics();
    this.setState({ data: topics });
    console.log(topics);
  }

  render() {
    return (
      <div className="loginForm">
        <h2>Dashboard</h2>

        <this.GetNav />

        <hr></hr>
        {
            <table>
              <tbody>
              <tr>
                <th>Topic</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
                {this.state.data.map((item) => {
                  return (
                    <tr>
                      <td>{item.topic}</td>
                      <td>{item.description}</td>
                      <td>{item.status}</td>
                      <td>
                      <input type="submit" data-key={item._id} style={{display:'inline'}} value='approve'/>&nbsp;
                      <input type="submit" data-key={item._id} style={{display:'inline'}} value='reject'/>&nbsp;
                      <input type="submit" data-key={item._id} style={{display:'inline'}} value='ban'/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
      </div>
    );
  }
}
