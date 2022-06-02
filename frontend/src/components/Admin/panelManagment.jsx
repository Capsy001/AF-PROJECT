import React from "react";
import { Component } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import AppBarNav from "../appBarNav";
import {getGroups, getPanelMembers, assignGroup} from '../../ApiCalls/panel.apicalls';
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
      data2:[],
      panelM:[],
      groupM:''
    };
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      panel:(this.state.panelM)
    }
    await assignGroup((this.state.groupM),(this.state.panelM));
  }

  handleGroupChange = async(event, values) => {
    await this.setState({ groupM: values });
    console.log(this.state.groupM)
  };

  handlePanelChange = async(event, values) => {
    await this.setState({ panelM: values });
    console.log(this.state.panelM)
  };

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
            <form onSubmit={this.handleSubmit}>
              <div>
              <Autocomplete
                disablePortal
                onChange={this.handleGroupChange}
                id="combo-box-demo"
                options={(this.state.data).map((option) => option.groupId)}
                renderInput={(params) => <TextField {...params} label="Groups" />}
              />
              </div>
              <br></br>
              <div>
                
              <Autocomplete
                multiple
                disablePortal
                onChange={this.handlePanelChange}
                id="combo-box-demo"
                options={(this.state.data2).map((option) => option.email)}
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
                Assign
              </Button>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
