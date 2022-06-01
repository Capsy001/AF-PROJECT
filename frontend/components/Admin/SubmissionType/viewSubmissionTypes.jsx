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
<h1 style={{marginLeft:'40%'}}>Assignment List</h1>
       
        {(this.state.data).map(data =>
        <Card sx={{ width:"34%", height: 250, float:"left", marginLeft:10, marginTop:4, marginRight:10 }} style={{border:'1px solid #2e7d32'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                     <div style={{textAlign:'center'}}>{data.title}</div>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      <div style={{textAlign:'center'}}>{data.desc}</div>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <div style={{textAlign:'center'}}>Deadline : {data.deadline}</div>
                      </Typography>
                      
                      <Link to="/createStudentSubmission"><Button  variant="contained" margin="normal" id="Submit" type="submit" style={{marginLeft:'100px', marginBottom:'10px', marginTop:'40px',textDecoration:'inherit'}}>
            UPOLAD ASSIGNMENT
          </Button>
          </Link>
          <br></br>
          {/* <div style={{marginLeft:'30%'}}>
          <Link to={'/updateSubmission/'+data._id} style={{textDecoration:'inherit',margin:'0px'}}>
                        <Button variant="contained" size="small" color="warning">Edit</Button>
                      </Link>&nbsp;&nbsp;
                      <Button variant="contained" href="/viewSubmissions" onClick={(e) => this.handleDelete(data._id)} size="small" color="error">Delete</Button>
                      </div> */}
                    </CardContent>
                    <CardActions>
                      
                    </CardActions>
                  </Card>
        )}
      </div>
    );
  }
}
