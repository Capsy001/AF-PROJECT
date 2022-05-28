import axios from "axios";
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
// import { addItem, getAllItems, getAllItemsRaw } from "../restcall";
import axios from "axios";

export default class ViewSubmissions extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      deadline: "",
      desc: "",
      uid: "",
      data: [],
    };
  }



  componentWillMount()
  {


    const logged = sessionStorage.getItem("logged");
    if (logged == "false") {
      alert("User not logged in!");
      window.location.href = "/";
    }

      axios.get("http://localhost:3000/submissions/").then((response) => {
        const data = response.data;
        var submissions = [];

        const keys = Object.keys(data);

        for (var x in keys) {
          submissions.push({
            title: data[x][1].title,
            deadline: data[x][1].deadline,
            desc: data[x][1].desc,
            id: data[x][1].id,
            uid: data[x][1].uid,
          });
        }

        this.setState({ data: submissions });
      });

      setTimeout(() => {
        console.log(this.state.data);
      }, 500);
    
  }






  handleAddToCart = (event) => {
    

    alert(event.target.dataset.key);


  };

  handleAddToWishlist = (event) =>
  {
    
    alert(event.target.dataset.key);


  };




  handleLogout = (event) => {
    sessionStorage.setItem("logged", "false");

    sessionStorage.setItem("loggedName", "NotLogged!");
    sessionStorage.setItem("loggedEmail", "NotLogged!");
    sessionStorage.setItem("loggedRole", "NotLogged!");

    sessionStorage.clear;
    window.location.href = "/";
  };

  render() {
    return (
      <div>
        <div className="loginForm">
          <h2>View Items</h2>
          <Link to="/dashboard">
            <button className="buttonMargin">Dashboard</button>
          </Link>

          <Link to="/viewCart">
            <button className="buttonMargin">View Cart</button>
          </Link>

          <Link to="/">
            <button className="buttonMargin" onClick={this.handleLogout}>
              Logout
            </button>
          </Link>

          <hr></hr>
          {
            <table>
              <tbody>
                {this.state.data.map((submissions) => {
                  return (
                    <tr>
                      <td>{submissions.title}</td>
                      <td>{submissions.deadline}</td>
                      <td>{submissions.desc}</td>
                      <td>
                        <button data-key={submissions.id} onClick={this.handleAddToCart}>
                          ++Cart
                        </button>
                      </td>
                      <td>
                        <button data-key={submissions.id} onClick={this.handleAddToWishlist}>
                          ++Wishlist
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        </div>
      </div>
    );
  }
}
