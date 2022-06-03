import { React,Component } from "react";
import { Button, Chip, Input } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { Button, TextField, Chip, Divider, Input, CircularProgress, Typography, Box, IconButton } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import CustomHeader from "../../header/customheader";
import axios from "axios";
import { InputLabel, Select,MenuItem } from "@mui/material";
import { CheckRounded, Add } from "@mui/icons-material";

import { Button, TextField, Chip, Divider, Alert, FormControl } from "@mui/material";
export default class CreateStudentSubmissionType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupid: "",
      topic: "",
      uploaddate: new Date(),
      file: "",
      progressPrecentage: 0,
      assignmentTypes:[],
    };
    this.handleSubmit.config = this.handleSubmit.bind(this);
    // this.id = sessionStorage.getItem(assignmentID);
  }

  handleGroupIdChange = (event) => {
    this.setState({ groupid: event.target.value });
  };

  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleUploadDateChange = (event) => {
    this.setState({ uploaddate: event.target.value });
  };

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleFileRemove = (event) =>{
    this.setState({ file:'' });
  };

  componentWillMount(){
    axios.get("http://localhost:3000/submissiontypes/").then(response =>
    {
      const data = response.data;
      this.handleData(data);
    });
  }

  handleSelect(id){
    this.setState({
        selectedType: id
    });
  }

  handleData(data){
    this.setState({
        assignmentTypes : data
    })
    console.log(data);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    var completed = 0;

    const studentsubmission = {
      groupid: this.state.groupid,
      topic: this.state.topic,
      uploaddate: this.state.uploaddate,
      file: this.state.file,
      assignmentType: this.state.selectedType,
    };

    document.getElementById("progress").style.display = "inline-flex";

    const config = {
      headers: {'content-type' : 'multipart/form-data'},
      onUploadProgress: function(progressEvent){
          completed = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          this.setState({ progressPrecentage: completed });
        }
    }

    config.onUploadProgress = config.onUploadProgress.bind(this);

    axios.post("http://localhost:3000/studentsubmissions/new", studentsubmission, config).then(response =>
    {
      const data = response.data;
      if(response.data){
        alert("Assignment Successfully Submitted")
      }

      this.setState({
        assignmentType:[],
        selectedType : "",
    });
      
    });

  };

  render() {

    return (
      <div>
        
        <CustomHeader />

        <div  style={{marginTop:'100px',marginLeft:'400px',marginBottom:'100px', alignItems:'center', textAlign:'center', width:'40%', border:'3px solid #73AD21', padding:'10px'}}>


        <form onSubmit={this.handleSubmit} encType="multipart/form-data" method="post">
          <h1>Student Submission</h1>
          <div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Assignment Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Assignment Type"
                fullWidth
                defaultValue="1"
            >
                {
                    this.state.assignmentTypes.map(data =>
                        <MenuItem value={data._id} key={data._id} onClick={(e) => this.handleSelect(data.title)}>{data.title}</MenuItem>
                    )
                }
            </Select>
            </FormControl>
        </div>
          <div>
            <TextField variant="outlined" margin="normal" id="groupid" label="Group ID" onChange={this.handleGroupIdChange}/>
          </div>
          <br></br>
          <div>
            <TextField variant="outlined" margin="normal" id="topic" label="Title" onChange={this.handleTopicChange}
            />
          </div>
          <br></br>

            <label htmlFor="contained-button-file">
  <Input accept="image/*" name="file" id="contained-button-file" margin="normal" multiple type="file" onChange={this.handleFileChange} />
</label>

            {
              this.state.file?
              <Chip label={this.state.file.name} style={{marginTop:'5px'}} onDelete={this.handleFileRemove} />
              :
              null
            }

            <Box sx={{ position: 'relative', display: 'inline-flex' }} id="progress" margin="normal" style={{marginTop:'10px',display:'none'}}>
            <CircularProgress variant="determinate" size={70} value={this.state.progressPrecentage}/>
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="caption"
                component="div"
                color="text.secondary"
                fontSize={17}
                fontWeight="bold"
                margin="normal"
              >{`${this.state.progressPrecentage}%`}</Typography>
            </Box>
          </Box>
<br></br>
          <Button variant="contained" id="Submit" margin="normal" type="submit">
            SUBMIT
          </Button>

        </form>
        </div>
      </div>
    );
  }
}


