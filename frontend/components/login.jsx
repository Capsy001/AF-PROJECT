import React from "react";
import { Component } from "react";
import "./login.module.css";
import { Link } from "react-router-dom";
import { login } from "../restcall";
import { Button, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const result = login(this.state.email, this.state.password);

    //window.location.href = "/register";
  };

  render() {
    return (
      <div className="loginForm" style={{textAlign: "center"}}>
        
          <h2>Login</h2>

          <Link style={{ textDecoration: "none" }} to="/register">
            <Button sx={{textAlign:"center"}}
              size="small"
              variant="contained"
              color="success"
              className="buttonMargin"
            >
              Register
            </Button>
          </Link>

          <hr></hr>
        <div>
          <Paper sx={{ padding: "32px", width: "40%", textAlign:"center", justifyContent:"center", margin: "0 auto" }}>
            <form onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  required
                  label="Email"
                  variant="outlined"
                  type="email"
                  onChange={this.handleEmail}
                />
              </div>
              <br></br>
              <div>
                <TextField
                  required
                  label="Password"
                  variant="outlined"
                  type="password"
                  onChange={this.handlePassword}
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
      </div>
    );
  }
}
