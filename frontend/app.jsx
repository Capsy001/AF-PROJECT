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
import EvTopics from "./components/Panel/evTopics";
import EvPresentation from "./components/Panel/evPresentation";
import AddItem from "./components/addItems";
import EditItem from "./components/editItem";
import ViewItem from "./components/viewItems";
import ViewCart from "./components/viewCart";
import CreateGroup from "./components/Groups/createGroup";
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
import SupervisorAccept from "./components/Staff/SupervisorAccept";
import UpdateUser from "./components/updateUser";
import RegisterTopics from "./components/student/RegisterTopics"
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
          <Route path="/addItems" element={<AddItem />} />
          <Route path="/editItems" element={<EditItem />} />
          <Route path="/viewItems" element={<ViewItem />} />
          <Route path="/viewCart" element={<ViewCart />} />
          <Route path='/createGroup' element={<CreateGroup />} />
          <Route exact path="/" element={<Login />} />
          <Route path="/viewUsers" element={<ViewUsers />} />
          <Route path="/createSubmissionType" element={<CreateSubmissionType />} />
          <Route path="/registerTopics" element={<RegisterTopics />} />
          <Route path="/viewSubmissionTypes" element={<ViewSubmissionTypes />} />
          <Route path="/updateSubmissionType" element={<UpdateSubmissionType />} />
          <Route path="/viewPublications" element={<ViewPublication />} />
          <Route path="/addPublications" element={<AddPublications />} />
          <Route path="/managePublications" element={<ManagePublications />} />
          <Route path="/editPublications/:id" element={<EditPublications />} />
          <Route path="/createStudentSubmission" element={<CreateStudentSubmission />} />
          <Route path="/viewStudentSubmissions" element={<ViewStudentSubmissions />} />

          <Route path="supervisor" element={<SupervisorAccept />} />

          <Route path="/updateUser" element={<UpdateUser />} />
          <Route path="/manageSubmissionTypes" element={<ManageSubmissionTypes />} />

          <Route path="/addMarkingSchema" element={<AddMarkingSchema />} />

        </Routes>
      </BrowserRouter>
    );
  }
}
