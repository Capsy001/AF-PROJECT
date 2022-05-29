<<<<<<< HEAD
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
      file: "",
      progressPrecentage: 0,
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

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleFileRemove = (event) =>{
    this.setState({ file:'' });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    var completed = 0;

    const submission = {
      title: this.state.title,
      desc: this.state.desc,
      deadline: this.state.deadline,
      file: this.state.file
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

    axios.post("http://localhost:3000/submissions/new", submission, config).then(response =>
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

        <div  style={{marginTop:'40px'}}>
        </div>


        <form onSubmit={this.handleSubmit} encType="multipart/form-data" method="post">
          <div>
            <label>Title</label>
            <input id="title" label="Title" onChange={this.handleTitleChange}/>
          </div>
          <br></br>
          <div>
          <label>Description</label>
            <input id="desc" label="Description" onChange={this.handleDescChange}
            />
          </div>
          <br></br>
          <div>
          <label>Deadline</label>
            <input id="deadline" type="date" onChange={this.handleDeadlineChange}
            />
          </div>
          <br></br>  

            <label htmlFor="file">
                <Input id="file" name="file" type="file" style={{display:'none'}} onChange={this.handleFileChange} />
                <Button variant="contained" component="span">
                    <CloudUpload />&nbsp; Upload
                </Button>
            </label>

            {
              this.state.file?
              <Chip label={this.state.file.name} style={{marginTop:'5px'}} onDelete={this.handleFileRemove} />
              :
              null
            }

            <Box sx={{ position: 'relative', display: 'inline-flex' }} id="progress" style={{marginTop:'10px',display:'none'}}>
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
              >{`${this.state.progressPrecentage}%`}</Typography>
            </Box>
          </Box>

          <button id="Submit" type="submit">
            Publish
          </button>

        </form>
      </div>
    );
  }
}
=======

>>>>>>> 4722346e2c74d78ea9835453ef6174e536b1c6ef
