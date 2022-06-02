import { React, Component } from "react";
import { Button} from "@mui/material";
import { Campaign, FileDownload } from "@mui/icons-material";
import { Campaign, CloudUpload } from "@mui/icons-material";
import CustomHeader from "../../header/customheader";
import axios from "axios";
import { Link } from "react-router-dom";

import { Button, Chip, Divider, Card, CardContent } from "@mui/material";
import { Campaign, FileDownload } from "@mui/icons-material";

import { Button, TextField, Chip, Divider, Typography, CardActions } from "@mui/material";

export default class ManageSubmissionTypes extends Component {
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
    axios.get("http://localhost:3000/submissiontypes").then(response =>
    {
      this.handleData(response.data);
    });
  }
  async handleEdit(id){
    await sessionStorage.setItem('EditId', id);
    window.location.href='/updateSubmissionType';
  }

  handleDelete(id){
    axios.delete(`http://localhost:3000/submissiontypes/${id}`).then(response =>
    {
      this.loadData();
    });
  }

  componentDidMount(){
    axios.get("http://localhost:3000/submissiontypes").then(response =>
    {
      this.handleData(response.data);
    });
  }

  render() {

    return (
      <div>
        
        <CustomHeader />
<h1 style={{marginLeft:'40%'}}>Manage Assignment List</h1>
       
        {(this.state.data).map(data =>
        <Card sx={{ width:"34%", height: 200, float:"left", marginLeft:10, marginTop:4, marginRight:10 }} style={{border:'1px solid #2e7d32'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                     <div style={{textAlign:'center'}}><b>{data.title}</b></div>
                      </Typography>
                      <Typography variant="h6" color="">
                      <div style={{textAlign:'center', marginBottom:'12px'}}>{data.desc}</div>
                      </Typography>
                      <Typography variant="h7" color="red">
                        <div style={{textAlign:'center'}}>Deadline : {data.deadline}</div>
                      </Typography>
                      
            
          <br></br>
          <div>
                        <Button style={{marginLeft:'10px', width:'40%',float:'left'}} onClick={(e) => this.handleEdit(data._id)} variant="contained" size="small" color="warning">Edit</Button>
                      <Button style={{marginLeft:'10px', width:'40%',float:'left'}} variant="contained" href="/manageSubmissionTypes" onClick={(e) => this.handleDelete(data._id)} size="small" color="error">Delete</Button>
                      </div>
                    </CardContent>
                    <CardActions>
                      
                    </CardActions>
                  </Card>
        )}
      </div>
    );
  }
}
