import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Column from "../Grid/Column";
import Columns from "../Grid/Columns";
import "./Navbar.css";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      redirectTo: "/login"
    };
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <section>
        {loggedIn ? (
          <nav
            className="navbar navStyles"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand leftBuffer">
              <Link to="/" className="navbar-item navTextFormat">
                PowerSchoolCMS
              </Link>
              <a
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                id="navbar-burger"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <div className="rightBuffer navbar-item">
                  <button className="navbar-item button iconFormat navItemSpacing">
                    <i className="fas fa-bell" />
                  </button>
                  <div className="navbar-brand">
                    <Link
                      to="/support"
                      className="navbar-item navTextFormat navItemSpacing"
                    >
                      Support
                    </Link>
                  </div>
                  <div className="navbar-brand">
                    <Link
                      to="/logout"
                      onClick={this.logout}
                      className="navbar-item navTextFormat navItemSpacing"
                    >
                      Logout
                    </Link>
                  </div>
                  <button className="navbar-item button iconFormat navItemSpacing">
                    <i className="fas fa-user-alt" />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        ) : (
          <div>
            {console.log(loggedIn)}
            <Redirect to={{ pathname: this.state.redirectTo }} />
          </div>
        )}
      </section>
      // <div>
      //   <header className="navbar App-header" id="nav-container">
      //     <div className="col-4">
      //       {loggedIn ? (
      //         <section className="navbar-section">
      //           <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
      //             <span className="text-secondary">logout</span>
      //           </Link>
      //         </section>
      //       ) : (
      //         <section className="navbar-section">
      //           <Link to="/" className="btn btn-link text-secondary">
      //             <span className="text-secondary">home</span>
      //           </Link>
      //           <Link to="/login" className="btn btn-link text-secondary">
      //             <span className="text-secondary">login</span>
      //           </Link>
      //           <Link to="/signup" className="btn btn-link">
      //             <span className="text-secondary">sign up</span>
      //           </Link>
      //         </section>
      //       )}
      //     </div>
      //     <div className="col-4 col-mr-auto">
      //       <div id="top-filler" />
      //       <h1 className="App-title">MERN Passport</h1>
      //     </div>
      //   </header>
      // </div>
    );
  }
}

export default Navbar;
