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

export default class ViewSubmissionTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
    this.handleData = this.handleData.bind(this);
  }

  async handleData(ssubdata){
    this.setState({
      data:ssubdata
    });
  }

  async loadData(){
    axios.get("http://localhost:3000/submissiontypes").then(response =>
    {
      this.handleData(response.data);
    });
  }

  async handleDelete(id){
    axios.delete(`http://localhost:3000/submissiontypes/${id}`).then(response =>
    {
      this.loadData();
    });
  }

  async componentDidMount(){
    axios.get("http://localhost:3000/submissiontypes").then(response =>
    {
      this.handleData(response.data);
    });
  }

  // async handleSubmit(data){
  //   Console.log(data.topic);
  //   sessionStorage.setItem('assignmentID', data.id);
  //   window.location.href='/createStudentSubmission';
  // }

  render() {

    return (
      <div>
        
        <CustomHeader />
<h1 style={{marginLeft:'40%'}}>Assignment List</h1>
       
        {(this.state.data).map(data =>
        <Card sx={{ width:"34%", height: 200, float:"left", marginLeft:10, marginTop:4, marginRight:10, marginBottom:4 }} style={{border:'1px solid #2e7d32'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                     <div style={{textAlign:'center', color:'blue'}}><b>{data.title}</b></div>
                      </Typography>
                      <Typography variant="h7" color="text.secondary">
                      <div style={{textAlign:'center'}}>{data.desc}</div>
                      </Typography>
                      <Typography variant="h7" color="text.secondary">
                        <div style={{textAlign:'center', color:'red'}}>Deadline : {data.deadline}</div>
                      </Typography>
                      {/* <Button onClick={handleSubmit(data)}></Button> */}
                      <Link to="/createStudentSubmission"><Button  variant="contained" margin="normal" id="Submit" type="submit" style={{marginLeft:'100px', marginBottom:'10px', marginTop:'10px',textDecoration:'none'}}>
            UPOLAD ASSIGNMENT
          </Button>
          </Link>
          <br></br>

                    </CardContent>
                    <CardActions>
                      
                    </CardActions>
                  </Card>
        )}
      </div>
    );
  }
}
