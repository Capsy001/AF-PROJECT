import { React,Component } from "react";
import { Button, Chip, Input } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { Button, TextField, Chip, Divider, Input, CircularProgress, Typography, Box } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import CustomHeader from "../../header/customheader";
import axios from "axios";
import AppBarNav from "../../AppBarNav";
export default class CreateSubmissionType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      deadline: "",
    };
    this.handleSubmit.config = this.handleSubmit.bind(this);
  }

  handleTitleChange = async(event) => {
    this.setState({ title: event.target.value });
  };

  handleDescChange = async(event) => {
    this.setState({ desc: event.target.value });
  };

  handleDeadlineChange = async(event) => {
    this.setState({ deadline: event.target.value });
  };

  handleSubmit = async(event) => {
    event.preventDefault();
    
    var completed = 0;

    const submissiontype = {
      title: this.state.title,
      desc: this.state.desc,
      deadline: this.state.deadline,
    };

    axios.post("http://localhost:3000/submissiontypes/new", submissiontype).then(response =>
    {
      const data = response.data;
      if(response.data){
        alert("New Submission Type Successfully Created")
      }
    });

  };

  render() {

    return (
      <div>
        
        
        <AppBarNav></AppBarNav>

        <div  style={{marginTop:'100px',marginLeft:'400px',marginBottom:'100px', alignItems:'center', textAlign:'center', width:'40%', border:'3px solid #73AD21', padding:'10px'}}>
      

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

