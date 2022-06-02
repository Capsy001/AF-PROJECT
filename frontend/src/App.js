import React from "react";
import { Component } from "react";
import Login from "./components/login";
import Register from "./components/register";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Start dashboards
import Dashboard from "./components/dashboard";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Login />} />

        </Routes>
      </BrowserRouter>
    );
  }
}
