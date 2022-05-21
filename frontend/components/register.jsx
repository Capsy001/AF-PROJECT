import React from "react";
import { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
import { register } from "../restcall";
import { Button } from "@mui/material";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      role: "customer",
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handlePassword2Change = (event) => {
    this.setState({ password2: event.target.value });
  };

  handleRoleChange = (event) => {
    this.setState({ role: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
      role: this.state.role,
    };

    if (user.password != user.password2) {
      alert("Passwords do not match!");
      return;
    }

    register(user);
  };

  render() {
    return (
      <div className="registerForm">
        <h2>Register</h2>

        <Link style={{ textDecoration: "none" }} to="/">
          <Button
            size="small"
            variant="contained"
            color="success"
            className="buttonMargin"
          >
            Login
          </Button>
        </Link>

        <hr></hr>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input
              required
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              required
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              required
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>

          <div>
            <label>Re-enter Password</label>
            <input
              required
              type="password"
              value={this.state.password2}
              onChange={this.handlePassword2Change}
            />
          </div>

          <div>
            <label>Role</label>
            <select value={this.state.role} onChange={this.handleRoleChange}>
              <option value="customer">Customer</option>
              <option value="trader">Trader</option>
            </select>
          </div>

          {this.state.submit}

          <Button
            variant="contained"
            color="success"
            id="Submit"
            size="small"
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
