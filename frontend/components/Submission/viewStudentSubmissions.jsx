import { React, Component } from "react";
import { Button} from "@mui/material";
import { Campaign, FileDownload } from "@mui/icons-material";
import { Campaign, CloudUpload } from "@mui/icons-material";
import CustomHeader from "../header/customheader";
import axios from "axios";
import { Link } from "react-router-dom";

import { Button, Chip, Divider, Card, CardContent } from "@mui/material";
import { Campaign, FileDownload } from "@mui/icons-material";

import { Button, TextField, Chip, Divider, Typography, CardActions } from "@mui/material";

export default class ViewStudentSubmissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(subdata){
    this.setState({
      data:subdata
    });
  }

  componentDidMount(){
    axios.get("http://localhost:3000/studentsubmissions").then(response =>
    {
      this.handleData(response.data);
    });
  }

  render() {

    return (
      <div>
        
        <CustomHeader />
<h1 style={{marginLeft:'40%'}}>Submitted Assignment List</h1>
        
        {(this.state.data).map(data => 
        <Card sx={{ width:"27%", height: 250, float:"left", marginLeft:4, marginTop:4, marginRight:4 }} style={{border:'1px solid #2e7d32'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                     Group ID : {data.groupid}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                      Topic : {data.topic}
                      </Typography>
                      <Typography variant="h8" color="text.secondary">
                        Uplaod Date : {data.uploaddate}
                      </Typography>
                      <Typography variant="h10" color="text.secondary">
                      {data.file}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      <a href={"http://localhost:3000/" + data.file} target="_blank">
                        <Button variant="contained" size="small" style={{marginTop:'10px'}}><FileDownload/> Download</Button>
                      </a>
                      </Typography>
                      {/* <Link to="/updateStudentSubmission"><Button>Update</Button></Link>
                      <Button>Delete</Button> */}
                    </CardContent>
                  </Card>
        )}
      </div>
    );
  }
}
