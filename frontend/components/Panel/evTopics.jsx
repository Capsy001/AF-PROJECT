import React from "react";
import { Component } from "react";
import { login } from "../login";
import "../login.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {getTopics, updateTopicsts, banTopicsts} from '../../ApiCalls/topic.apicall';

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

  handleapprove = async(event) =>{
    try{
      const id = event.target.dataset.key;
      const data = await updateTopicsts(id,({status:'approved'}));
      console.log(data);
    }catch(e){
      console.log(e)
    }
  }

  handlereject = async(event) =>{
    const id = event.target.dataset.key;
    const data = await updateTopicsts(id,({status:'rejected'}));
    console.log(data);
  }

  handleban = async(event) =>{
    const topic = event.target.dataset.key;
    const object={
      topic:topic
    }
    const data = await banTopicsts(object);
    console.log(data);
  }

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
                      <input type="submit" data-key={item._id} style={{display:'inline'}} value='approve' onClick={this.handleapprove}/>&nbsp;
                      <input type="submit" data-key={item._id} style={{display:'inline'}} value='reject' onClick={this.handlereject}/>&nbsp;
                      <input type="submit" data-key={item.topic} style={{display:'inline'}} value='ban' onClick={this.handleban}/>
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
