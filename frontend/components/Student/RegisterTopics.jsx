import React from "react";
import { Component } from "react";
import { login } from "../login";
import "../login.css";
import { Link } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';

export default class PanelDashboard extends Component {
  constructor() {
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

  GetNav = () => {
      return (
        <div>
          <Link to="/panel/evTopics">
            <button className="buttonMargin">Evaluate topics</button>
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

  componentWillMount() {
    const logged = sessionStorage.getItem("logged");
    const role = sessionStorage.getItem("loggedRole");
    if(!role.includes("student")){
        window.location.href = "/";
    }
    if (logged == "false") {
      alert("User not logged in!");
      window.location.href = "/";
    }
  }

  render() {
    return (
      <div className="loginForm">
        <h2>Register Topics</h2>

        <this.GetNav />

        <hr></hr>
        
        <Paper sx={{ padding: "32px", width: "40%", textAlign:"center", justifyContent:"center", margin: "0 auto" }}>
            <form onSubmit={this.handleSubmit}>
                <div>
                <TextField
                    required
                    label="Topic"
                    variant="outlined"
                    type="text"
                    onChange={this.handleEmail}
                />
                </div>
                <br></br>
                <div>
                <Button
                    size="small"
                    variant="contained"
                    color="success"
                    className="buttonMargin"
                    type="submit"
                >
                    Submit
                </Button>
                </div>
            </form>
        </Paper>

      </div>
    );
  }
}
