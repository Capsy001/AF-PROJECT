import {
  Button,
  Stack,
  AppBar,
  Toolbar,
  Divider,
  createTheme,
  colors,
} from "@mui/material";
import "./login.module.css";
import { Link } from "react-router-dom";
import React from "react";

export default function AppBarNav() {
  return (
    <>
      <AppBar position="static" color="success">
        <Toolbar variant="dense">
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            <Button sx={{ color: "white" }} size="small" color="inherit">
              Dashboard
            </Button>
          </Link>

          <Divider orientation="vertical" variant="middle" flexItem />
          <Link style={{ textDecoration: "none" }} to="/createSubmissions">
            <Button sx={{ color: "white" }} size="small" color="inherit">
              Create Submissions
            </Button>
          </Link>
          <Divider orientation="vertical" variant="middle" flexItem />

          <Link style={{ textDecoration: "none" }} to="/createGroup">
            <Button sx={{ color: "white" }} size="small" color="inherit">
              Create Group
            </Button>
          </Link>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Link style={{ textDecoration: "none" }} to="/viewUsers">
            <Button sx={{ color: "white" }} size="small" color="inherit">
              View Users
            </Button>
          </Link>
          <Divider orientation="vertical" variant="middle" flexItem />

          <Link style={{ textDecoration: "none" }} to="/">
            <Button
              sx={{ color: "yellow" }}
              size="small"
              color="inherit"
              onClick={this.handleLogout}
            >
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

