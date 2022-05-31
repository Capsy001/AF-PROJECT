import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Chip, Divider, Card, CardContent } from "@mui/material";
import { Button, TextField, Chip, Divider, Typography, CardActions } from "@mui/material";
import AppBarNav from "../components/AppBarNav";
import axios from "axios";

export default class SupervisorAccept extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        data : []
      };
  }




  componentDidMount(){
    
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
                ([this.state.data]).map(data => 
                  <Card sx={{ width: 645 }} style={{borderLeft:'3px solid #2e7d32'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        
                      </Typography>
                    </CardContent>
                    <CardActions sx={{margin: '0 auto', justifyContent:'center'}}>
                        <Button variant="outlined" size="small">Accept As Supervisor</Button>
                        <Button variant="outlined" size="small">Accept As Co-Supervisor</Button>
                      
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