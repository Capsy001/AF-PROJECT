import { React, Component } from "react";
import { Campaign, FileDownload } from "@mui/icons-material";
import { CloudUpload } from "@mui/icons-material";
import CustomHeader from "./header/customheader";
import axios from "axios";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@mui/material";

import { Button, TextField, Chip, Divider, Typography, CardActions } from "@mui/material";

export default class ViewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(userdata){
    this.setState({
      data:userdata
    });
  }

  loadData(){
    axios.get("http://localhost:3000/users").then(response =>
    {
      this.handleData(response.data);
    });
  }

  handleDelete(id){
    axios.delete(`http://localhost:3000/users/${id}`).then(response =>
    {
      this.loadData();
    });
  }

  async handleEdit(id){
    await sessionStorage.setItem('EditId', id);
    window.location.href='/updateUser';
  }

  componentDidMount(){
    axios.get("http://localhost:3000/users").then(response =>
    {
      this.handleData(response.data);
    });
  }

  render() {

    return (
      <div>
        
        <CustomHeader />
<h1 style={{marginLeft:'40%'}}>Users List</h1>
       
        {(this.state.data).map(data =>
        <Card sx={{ width:"27%", height: 200, float:"left", marginLeft:3, marginTop:4, marginRight:3 }} style={{border:'1px solid #2e7d32'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                     <div style={{textAlign:'center'}}>{data.name}</div>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      <div style={{textAlign:'center'}}>{data.email}</div>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      <div style={{textAlign:'center'}}>{data.username}</div>
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                      <div style={{textAlign:'center'}}>{data.role}</div>
                      </Typography>
                      
                    
          <br></br>
                      <Button variant="contained" style={{width:'47%', float:'left', marginRight:'7px'}} onClick={(e) => this.handleEdit(data._id)} size="small" color="warning">Edit</Button>
                      <Button variant="contained" style={{width:'47%', float:'left'}} href="/viewUsers" onClick={(e) => this.handleDelete(data._id)} size="small" color="error">Delete</Button>
                    </CardContent>
                    <CardActions>
                      
                    </CardActions>
                  </Card>
        )}
      </div>
    );
  }
}
