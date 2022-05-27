import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { createSubmission } from "../../submissionrestcall";
import { Button, TextField, Chip, Divider, Stack, Input } from "@mui/material";
import { Campaign, CloudUpload } from "@mui/icons-material";
import CustomHeader from "../header/customheader";

export default class Publication extends Component {
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
        
        <CustomHeader />

        <div  style={{marginTop:'40px'}}>

            <Divider>
                <Chip 
                label="Add Publication" 
                icon={<Campaign />}
                style={{padding:'20px',paddingLeft:'50px',paddingRight:'50px',fontSize:'15px'}}
                />
            </Divider>

        </div>


        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth />
          </div>
          <br></br>
          <div>
            <TextField
                id="outlined-multiline-static"
                label="Publication Description"
                multiline
                rows={4}
                defaultValue=""
                fullWidth
            />
          </div>
          <br></br>
          

            <Chip label="Upload Publication Files" style={{width:'100%'}} /> <br/><br/>      

            <label htmlFor="contained-button-file">
                <Input id="contained-button-file" multiple type="file" style={{display:'none'}} />
                <Button variant="contained" component="span">
                    <CloudUpload />&nbsp; Upload
                </Button>
            </label>

          <Button
            variant="contained"
            color="success"
            id="Submit"
            className="buttonMargin"
            type="submit"
            fullWidth
            style={{marginTop:'20px'}}
          >
            Publish
          </Button>
        </form>
      </div>
    );
  }
}
