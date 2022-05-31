import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Chip, Divider, Card, CardContent } from "@mui/material";
import { Button, TextField, Chip, Divider, Typography, CardActions } from "@mui/material";
import AppBarNav from "../components/AppBarNav";
import axios from "axios";
import { getTopics } from "../ApiCalls/topic.apicall";

export default class SupervisorAccept extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        data : []
      };
  }




  async componentDidMount(){
      const data=await getTopics()
    this.setState({data: data});

    setTimeout(()=>{
            console.log(data);
    }, 1000)

    
  }

  render() {

    return (
      <div >
        
        <AppBarNav />

        <div  style={{marginTop:'40px'}}>

            <Divider>
                <Chip 
                label="Supervisors" 
                
                style={{padding:'20px',paddingLeft:'50px',paddingRight:'50px',fontSize:'15px'}}
                />
            </Divider>

            <div style={{justifyContent:'center',display:'flex',marginTop:'20px'}}>
              
              {
                this.state.data.map(data => 
                  <Card sx={{ width: '40%', margin: "5px", display: "block" }} style={{borderLeft:'3px solid #2e7d32', display: "block"}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.topic}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Group: {data.groupid}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{margin: '0 auto', justifyContent:'center'}}>
                        <Button variant="outlined" size="small" topicid={data._id}>Accept As Supervisor</Button>
                        <Button variant="outlined" size="small" topicid={data._id}>Accept As Co-Supervisor</Button>
                      
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