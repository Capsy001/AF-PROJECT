import React from "react";
import { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
import { register } from "../restcall";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      password2: "",
      role: "customer",
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleUserNameChange = (event) => {
    this.setState({ username: event.target.value });
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

  handleRoleChange = async(event) => {
    await this.setState({ role: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('user')
    const user = {
      email: this.state.email,
      name: this.state.name,
      username: this.state.username,
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
            <TextField
              label="Name"
              variant="outlined"
              required
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <br></br>
          <div>
            <TextField
              label="Username"
              variant="outlined"
              required
              type="text"
              value={this.state.username}
              onChange={this.handleUserNameChange}
            />
          </div>
          <br></br>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              required
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <br></br>
          <div>
            <label>Password</label>
            <TextField
              label="Password"
              variant="outlined"
              required
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <br></br>
          <div>
            <TextField
              label="Re-enter Password"
              variant="outlined"
              required
              type="password"
              value={this.state.password2}
              onChange={this.handlePassword2Change}
            />
          </div>
          <br></br>
          <div>
          <InputLabel id="role">Role</InputLabel>
            <Select
              labelId="role"
              value={this.state.role}
              onChange={this.handleRoleChange}
              label="Role"
            >
              <MenuItem value={'admin'}>admin</MenuItem>
              <MenuItem value={'student'}>student</MenuItem>
              <MenuItem value={'staff'}>staff</MenuItem>
            </Select>
          </div>
          <br></br>
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
