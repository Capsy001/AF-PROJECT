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
import AppBarNav from "../AppBarNav";

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

  loadData(){
    axios.get("http://localhost:3000/studentsubmissions").then(response =>
    {
      this.handleData(response.data);
    });
  }

  handleDelete(id){
    axios.delete(`http://localhost:3000/studentsubmissions/${id}`).then(response =>
    {
      this.loadData();
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
        
        <AppBarNav></AppBarNav>
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
                      {/* <Typography variant="h10" color="text.secondary">
                      {data.file}
                      </Typography> */}
                      <CardActions
                      sx={{ margin: "0 auto", justifyContent: "center" }}>
                      <Typography variant="body2" color="text.secondary">
                      <a href={"http://localhost:3000/" + (data.file.split("/"))[3]} target="_blank">
                        <Button variant="contained" size="small" style={{marginTop:'20%'}}><FileDownload/> Download</Button>
                      </a>
                      </Typography>
                      </CardActions>
                      <br></br>
          {/* <Link to={'/updateStudentSubmission/'+data._id} style={{textDecoration:'inherit',margin:'0px'}}>
                        <Button variant="outlined" size="small" color="warning">Edit</Button>
                      </Link>&nbsp;&nbsp;
                      <Button variant="outlined" href="/viewStudentSubmissions" onClick={(e) => this.handleDelete(data._id)} size="small" color="error">Delete</Button> */}
                    </CardContent>
                  </Card>
        )}
      </div>
    );
  }
}
