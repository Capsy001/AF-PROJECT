import { React, Component } from "react";
import { Button} from "@mui/material";
import { Campaign, FileDownload } from "@mui/icons-material";
import { Campaign, CloudUpload } from "@mui/icons-material";
import CustomHeader from "./header/customheader";
import axios from "axios";
import { Link } from "react-router-dom";

import { Button, Chip, Divider, Card, CardContent } from "@mui/material";
import { Campaign, FileDownload } from "@mui/icons-material";

import { Button, TextField, Chip, Divider, Typography, CardActions } from "@mui/material";

export default class ViewUsers extends Component {
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
                     {data.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {data.email}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.username}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                     {data.role}
                      </Typography>
                      
                    
          <br></br>
          <Link to={'/updateUser/'+data._id} style={{textDecoration:'inherit',margin:'0px'}}>
                        <Button variant="outlined" size="small" color="warning">Edit</Button>
                      </Link>&nbsp;&nbsp;
                      <Button variant="outlined" href="/viewUsers" onClick={(e) => this.handleDelete(data._id)} size="small" color="error">Delete</Button>
                    </CardContent>
                    <CardActions>
                      
                    </CardActions>
                  </Card>
        )}
      </div>
    );
  }
}
