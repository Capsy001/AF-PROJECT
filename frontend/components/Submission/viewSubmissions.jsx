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

export default class ViewSubmissions extends Component {
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
    axios.get("http://localhost:3000/submissions").then(response =>
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
        <Card sx={{ width:"34%", height: 200, float:"left", marginLeft:10, marginTop:4, marginRight:10 }} style={{border:'1px solid #2e7d32'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                     Title : {data.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {data.desc}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Deadline : {data.deadline}
                      </Typography>
                      
                      <Link to="/createStudentSubmissions"><Button  variant="contained" margin="normal" id="Submit" type="submit" style={{marginLeft:'100px', marginBottom:'10px', marginTop:'40px'}}>
            UPOLAD ASSIGNMENT
          </Button>
          </Link>
                    </CardContent>
                  </Card>
        )}
      </div>
    );
  }
}
