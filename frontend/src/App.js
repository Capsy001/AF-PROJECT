import React from "react";
import { Component } from "react";
import Login from "./components/login";
import Register from "./components/register";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Start dashboards
import Dashboard from "./components/dashboard";
import PanelDashboard from "./components/Panel/paneldashbord";
// End dashboards

//Start Panel routes
import Chating from "./components/Groups/SupervisorChat";
import EvTopics from "./components/Panel/evTopics";
import EvPresentation from "./components/Panel/evPresentation";
import CreateGroup from "./components/Groups/CreateGroup";
import ViewUsers from "./components/viewUsers";
import CreateSubmissionType from "./components/Admin/SubmissionType/createSubmissionType";
import ViewSubmissionTypes from "./components/Student/StudentSubmission/viewSubmissionTypes";
import UpdateSubmissionType from "./components/Admin/SubmissionType/updateSubmissionType";

import PanelManagment from "./components/Admin/panelManagment";

import CreateStudentSubmission from "./components/Student/StudentSubmission/createStudentSubmission";
import ViewStudentSubmissions from "./components/Admin/SubmissionType/viewStudentSubmissions";
import ViewPublication from "./components/viewPublication"; 
import ManagePublications from "./components/Admin/managePublications";
import AddPublications from "./components/Admin/addPublication";
import EditPublications from "./components/Admin/editPublications";
import SupervisorAccept from "./Staff/SupervisorAccept";
import UpdateUser from "./components/updateUser";
import RegisterTopics from "./components/Student/RegisterTopics";
import ManageSubmissionTypes from "./components/Admin/SubmissionType/manageSubmissionTypes";
import AddMarkingSchema from './components/Admin/addMarkingSchema';

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