import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Chip, Divider, Card, CardContent } from "@mui/material";
import {
  Button,
  Chip,
  Divider,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import AppBarNav from "../AppBarNav";
import axios from "axios";

export default class ViewSubmission extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      keyword: "",
    };

    this.currentLink = (window.location.href).split("/");
    this.id = this.currentLink[this.currentLink.length-1];
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

handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
}

splitFile(dataS){
    console.log(dataS.split("/")[3]);
    return dataS.split("/")[3];
}

  render() {
    return (
      <div>
        <AppBarNav />

        <div style={{ marginTop: "40px" }}>
          <Divider>
            <Chip
              label="Assignment Marking"
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
            {this.state.data.map((data) => {
        
                return(
                    data.submissions.map((dataS) => 
                    

                <Grid item xs={6} key={dataS.groupid}>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                    <Card key={dataS.groupid}
                    sx={{ marginLeft: 4, marginTop: 4, marginRight: 4 }}
                    style={{
                        borderLeft: "3px solid #2e7d32",
                        display: "block",
                    }}
                    >
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        GroupId: {dataS.groupid}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Topic: {dataS.topic}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Submission: <a target="_blank" href={"http://localhost:3000/"+(this.splitFile(dataS.file))}>Download</a>
                        </Typography>
                    </CardContent>
                    {
                        data.marking.markingPoints.map((data) => {
                            return(
                            <TextField
                            id="outlined-number"
                            label="Marks"
                            type="number"
                            helperText={data.point}
                            max={data.marks}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />)
                        })
                    }
                        <Button
                        variant="contained"
                        color="info"
                        id="Submit"
                        value={dataS.groupid}
                        type="submit"
                        fullWidth
                        style={{margin:'0px', marginTop:'0px',borderRadius:'0px'}}
                        >
                        Add
                        </Button>
                    </Card>
                    </form>
                </Grid>
        
                ))
    })}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
