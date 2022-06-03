import React from "react";
import { Component } from "react";
import Login from "./components/login";
import Register from "./components/register";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Start dashboards
import Dashboard from "./components/dashboard";
import PanelDashboard from "./components/Panel/paneldashbord";
// End dashboards

import EvTopics from "./components/Panel/evTopics";
import EvPresentation from "./components/Panel/evPresentation";
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
          <Route path="/panel/evPresentation" element={<EvPresentation />} />
          <Route path="/panelManagement" element={<PanelManagment />} />
          <Route path='/createGroup' element={<CreateGroup />} />
          <Route exact path="/" element={<Login />} />

        </Routes>
      </BrowserRouter>
    );
  }
}