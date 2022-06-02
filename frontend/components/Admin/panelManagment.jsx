import React from "react";
import { Component } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AppBarNav from "../appBarNav";
import {getGroups} from '../../ApiCalls/panel.apicalls';
import {
  Button,
  Stack,
  AppBar,
  Toolbar,
  Divider,
  createTheme,
  colors,
  Paper,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from "@mui/material";

export default class PanelManagment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }


  async componentWillMount(){
    const data = await getGroups();
    this.setState({data : data});
  }

  render() {

    return (
      <div>
        <div className="loginForm">
        <AppBarNav></AppBarNav>
        <h2>Panel Managment</h2>

          <hr></hr>
          <Paper
            sx={{
              padding: "32px",
              width: "40%",
              textAlign: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <form>
              <div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films.map((option) => option.title)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
              </div>
              <br></br>
              <div>
              <Button
                sx={{ width: "50%", margin: "5px" }}
                variant="contained"
                color="success"
                id="Submit"
                size="small"
                className="buttonMargin"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
              </div>
            </form>
          </Paper>
        </div>
        <p>hi</p>
      </div>
    );
  }
}
