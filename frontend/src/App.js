import React from "react";
import { Component } from "react";
import Login from "./components/login";
import Register from "./components/register";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Start dashboards
import Dashboard from "./components/dashboard";
import PanelDashboard from "./components/Panel/paneldashbord";
// End dashboards

//Start Panel routes
import EvTopics from "./components/Panel/evTopics";
import CreateGroup from "./components/Groups/CreateGroup";

import PanelManagment from "./components/Admin/panelManagment";


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
          <Route path="/panel" element={<PanelDashboard />} />
          <Route path="/panel/evTopics" element={<EvTopics />} />
          <Route path="/panelManagement" element={<PanelManagment />} />
          <Route path='/createGroup' element={<CreateGroup />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
}