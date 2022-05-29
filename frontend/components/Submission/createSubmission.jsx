import { React,Component } from "react";
import { Button, Chip, Input } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { Button, TextField, Chip, Divider, Input, CircularProgress, Typography, Box } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import CustomHeader from "../header/customheader";
import axios from "axios";
export default class CreateSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      deadline: "",
    };
    this.handleSubmit.config = this.handleSubmit.bind(this);
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

  handleSubmit = (event) => {
    event.preventDefault();
    
    var completed = 0;

    const submission = {
      title: this.state.title,
      desc: this.state.desc,
      deadline: this.state.deadline,
    };

    axios.post("http://localhost:3000/submissions/new", submission).then(response =>
    {
      const data = response.data;
      document.getElementById("progress").style.display = "none";
      document.getElementById("alert").style.display = "flex";
    });

  };

  render() {

    return (
      <div>
        
        <CustomHeader />

        <div  style={{marginTop:'40px', margin:"0px"}}>
      

        <form onSubmit={this.handleSubmit} encType="multipart/form-data" method="post">
        <h1>New Submission Type</h1>
          <div>
            <TextField variant="outlined" margin="normal"  id="title" label="Title" onChange={this.handleTitleChange}/>
          </div>
          <br></br>
          <div>
            <TextField variant="outlined" margin="normal" id="desc" label="Description" onChange={this.handleDescChange}
            />
          </div>
          <br></br>
          <div>
            <TextField variant="outlined" margin="normal" id="deadline" type="date" onChange={this.handleDeadlineChange}
            />
          </div>
          <br></br>  

          <Button  variant="contained" margin="normal" id="Submit" type="submit">
            SUBMIT
          </Button>

        </form>
        </div>
      </div>
    );
  }
}


