import React from "react";
import { Component } from "react";
import Login from "./components/login";
import Register from "./components/register";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />

        </Routes>
      </BrowserRouter>
    );
  }
}
