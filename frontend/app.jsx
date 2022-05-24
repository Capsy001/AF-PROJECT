import React from "react";
import { Component } from "react";
import Login from "./components/login";
import Register from "./components/register";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// Start dashboards
import Dashboard from "./components/dashboard";
import PanelDash from "./components/Panel/paneldashbord";
// End dashboards
import AddItem from "./components/addItems";
import EditItem from "./components/editItem";
import ViewItem from "./components/viewItems";
import ViewCart from "./components/viewCart";
import CreateGroup from "./components/createGroup";
import ViewUsers from "./components/viewUsers";
import CreateSubmission from "./components/Submission/createSubmission";

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
          <Route path="/paneldashboard" element={<PanelDash />} />
          <Route path="/addItems" element={<AddItem />} />
          <Route path="/editItems" element={<EditItem />} />
          <Route path="/viewItems" element={<ViewItem />} />
          <Route path="/viewCart" element={<ViewCart />} />
          <Route path="/createGroup" element={<CreateGroup />} />
          <Route exact path="/" element={<Login />} />
          <Route path="/viewUsers" element={<ViewUsers />} />
          <Route path="/createSubmissions" element={<CreateSubmission />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
