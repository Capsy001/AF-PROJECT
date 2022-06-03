import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Chip, Divider, Card, CardContent } from "@mui/material";
import {
  Button,
  TextField,
  Chip,
  Divider,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";
import AppBarNav from "../AppBarNav";
import axios from "axios";

export default class MarkSubmissions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      keyword: "",
    };

    this.handleKeyword=this.handleKeyword.bind(this);
  }

  handleData(sdata){
    this.setState({
       data: sdata,   
    });
  }

  async componentDidMount() {
    axios.post("http://localhost:3000/marking/getCustomS").then(response =>
    {
      const data = response.data;
      this.handleData(data);
      console.log(data);
    });
  }

  handleKeyword=(event)=>{

    this.setState({keyword: event.target.value});

  }

  disable1=(data)=>{
      console.log(data);
      try{
          
        if(data==""){
            
            return false;
        }else if(data!=""){
            return true;
        }
      }catch(e){

      }
      return false;
  }

  disable2=(data)=>{

    console.log(data);
    try{
      if(data=""){
          return false;
      }else if(data!=""){
          return true;
      }
    }catch(e){

    }
    return false;
}


handleSupervisor=(data)=>{
  alert(data.topic)

}

handleCosupervisor=(data)=>{

    
}


getButtons=(data)=>{

  const supervisor=data.data.supervisor==""?false:true
  const cosupervisor=data.data.cosupervisor==""?false:true

  console.log("super: "+supervisor);
  console.log("cosuper: "+cosupervisor);


   return (<><Button
                        variant="outlined"
                        size="small"
                        topicid={data._id}
                        disabled={supervisor}
                        onClick={this.handleSupervisor.bind(this, data)}
                      >
                        Accept As Supervisor
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        topicid={data._id}
                        disabled={cosupervisor}
                        onClick={this.handleCosupervisor.bind(this, data)}
                      >
                        Accept As Co-Supervisor
                      </Button></>);

}

  render() {
    return (
      <div>
        <AppBarNav />

        <div style={{ marginTop: "40px" }}>
          <Divider>
            <Chip
              label="Supervisors"
              style={{
                padding: "20px",
                paddingLeft: "50px",
                paddingRight: "50px",
                fontSize: "15px",
              }}
            />
          </Divider>

          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "20px",
            }}
          >
            <Grid container>
              {this.state.data.map((data) => (
                <Grid item xs={6} key={data.groupid}>
                  <Card key={data.groupid}
                    sx={{ marginLeft: 4, marginTop: 4, marginRight: 4 }}
                    style={{
                      borderLeft: "3px solid #2e7d32",
                      display: "block",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Group: {data.groupid}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ margin: "0 auto", justifyContent: "center" }}
                    >
                      
                        <this.getButtons data={data}></this.getButtons>



                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
