import React from "react";
import { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { login } from "../restcall";
import { Button } from "@mui/material";


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
      <div className="loginForm">
        <h2>Login</h2>

        <Link style={{textDecoration: 'none'}} to="/register">
          <Button
            size="small"
            variant="contained"
            color="success"
            className="buttonMargin"
          >
            Register
          </Button>
        </Link>

        <hr></hr>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input required type="email" onChange={this.handleEmail} />
          </div>

          <div>
            <label>Password</label>
            <input required type="password" onChange={this.handlePassword} />
          </div>

          <Button
            size="small"
            variant="contained"
            color="success"
            className="buttonMargin"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
