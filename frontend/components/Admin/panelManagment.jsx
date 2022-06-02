import React from "react";
import { Component } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AppBarNav from "../appBarNav";
import {getGroups, getPanelMembers} from '../../ApiCalls/panel.apicalls';
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
      data : [],
      data2:[]
    };
  }


  async componentWillMount(){
    const items = await getGroups();
    this.setState({data : items});

    const items2 = await getPanelMembers();
    this.setState({data2 : items2});
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
                options={(this.state.data).map((option) => option.groupId)}
                renderInput={(params) => <TextField {...params} label="Groups" />}
              />
              </div>
              <br></br>
              <div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={(this.state.data2).map((option) => option.name)}
                renderInput={(params) => <TextField {...params} label="PanleMembers" />}
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
              >
                Submit
              </Button>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
