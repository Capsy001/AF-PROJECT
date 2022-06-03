import { React, Component } from "react";
import { CloudUpload } from "@mui/icons-material";
import CustomHeader from "../../header/customheader";
import axios from "axios";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@mui/material";
import { Campaign, FileDownload } from "@mui/icons-material";

import { Button, TextField, Chip, Divider, Typography, CardActions } from "@mui/material";

export default class ViewStudentSubmission extends Component {
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
    axios.get("http://localhost:5000/studentsubmissions").then(response =>
    {
      this.handleData(response.data);
    });
  }

  handleDelete(id){
    axios.delete(`http://localhost:5000/studentsubmissions/${id}`).then(response =>
    {
      this.loadData();
    });
  }

  componentDidMount(){
    axios.get("http://localhost:5000/studentsubmissions").then(response =>
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
                     <div style={{textAlign:'center', color:'blue'}}>{data.groupid}</div>
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                      <div style={{textAlign:'center'}}>Topic : {data.topic}</div>
                      </Typography>
                      <Typography variant="h8" color="text.secondary">
                      <div style={{textAlign:'center'}}>Uplaod Date : {data.uploaddate}</div>
                      </Typography>

                      <Typography variant="h10" color="text.secondary">
                      <div style={{textAlign:'center'}}>{data.file}</div>
                      </Typography>
                      
                      <CardActions
                      sx={{ margin: "0 auto", justifyContent: "center" }}>
                      <Typography variant="body2" color="text.secondary">
                      <a href={"http://localhost:5000/" + (data.file.split("/"))[3]} target="_blank">
                        <Button variant="contained" size="small" style={{marginTop:'20%', textDecoration:'inherit'}}><FileDownload/> Download</Button>

                      </a>
                      </Typography>
                      </CardActions>
                      <br></br>
                    </CardContent>
                  </Card>
        )}
      </div>
    );
  }
}
