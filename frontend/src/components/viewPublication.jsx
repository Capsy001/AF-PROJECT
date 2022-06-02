import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@mui/material";
import { FileDownload } from "@mui/icons-material";

import { Button, TextField, Chip, Divider, Typography, CardActions } from "@mui/material";
import { Campaign, CloudUpload } from "@mui/icons-material";

import AppBarNav from "./AppBarNav";
import axios from "axios";

export default class ViewPublication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(pdata){
    this.setState({
      data:pdata
    });
  }

  componentDidMount(){
    axios.post("http://localhost:3000/publication/getAll").then(response =>
    {
      this.handleData(response.data);
    });
  }

  render() {

    return (
      <div className="registerForm">
        
        <AppBarNav />

        <div  style={{marginTop:'40px'}}>

            <Divider>
                <Chip 
                label="Publications" 
                icon={<Campaign />}
                style={{padding:'20px',paddingLeft:'50px',paddingRight:'50px',fontSize:'15px'}}
                />
            </Divider>

            <div style={{justifyContent:'center',display:'flex',marginTop:'20px'}}>
              
              {
                (this.state.data).map(data => 
                  <Card sx={{ width: 645 }} style={{borderLeft:'3px solid #2e7d32'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a href={"http://localhost:3000/" + data.file} target="_blank">
                        <Button variant="outlined" size="small"><FileDownload/> Download</Button>
                      </a>
                    </CardActions>
                  </Card>
                )
              }
              
            </div>
        </div>
      </div>
    );
  }
}