import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
import { createSubmission } from "../../submissionrestcall";
import { Button, AppBar, Toolbar, Divider } from "@mui/material";
import AppBarNav from "../appBarNav";

export default class CreateSubmission extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: "",
      deadline: "",
      file: ""
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDescChange = (event) => {
    this.setState({ desc: event.target.value });
  };

  handleDeadlineChange = (event) => {
    this.setState({ deadline: event.target.value });
  };

  handleFileChange = (event) => {
    this.setState({ file: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const submission = {
      desc: this.state.desc,
      title: this.state.title,
      deadline: this.state.deadline,
      file: this.state.file
    };


    createSubmission(submission);
  };

  render() {
    return (
      <div className="registerForm">
        <AppBarNav></AppBarNav>
        <h2>Create Submission</h2>

        {/* <Link style={{ textDecoration: "none" }} to="/">
          <Button
            size="small"
            variant="contained"
            color="success"
            className="buttonMargin"
          >
            Login
          </Button>
        </Link> */}

        <hr></hr>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input
              required
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <br></br>
          <div>
            <label>Description</label>
            <input
              required
              type="text"
              value={this.state.desc}
              onChange={this.handleDescChange}
            />
          </div>
          <br></br>
          <div>
            <label>Deadline</label>
            <input
              required
              type="date"
              value={this.state.deadline}
              onChange={this.handleDeadlineChange}
            />
          </div>
          <br></br>
          <div>
            <input
              required
              type="file"
              value={this.state.file}
              onChange={this.handleFileChange}
            />
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
