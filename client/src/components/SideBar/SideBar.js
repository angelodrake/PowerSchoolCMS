import { Link } from "react-router-dom";
import "./SideBar.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "/login"
    };
  }
  getUsernameWithoutHost() {
    let userArray = this.props.currentUser.split("@");
    let currentUser = userArray[0];
    return currentUser;
  }

  toggleIsDisplayNone() {
    var sideBar = document.getElementById("sidebar");
    sideBar.classList.toggle("is-display-none");
    sideBar.classList.toggle("margin-for-sidebar");
    document
      .getElementById("navbar-burger-link")
      .classList.toggle("move-burger-out");
    document.getElementById("background-overlay").classList.toggle("unseen");
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <div>
            <a id="navbar-burger-link" onClick={this.toggleIsDisplayNone}>
              <i className="fas fa-bars fa-2x sidebar-burger" />
            </a>
            <aside className="menu is-display-none" id="sidebar">
              <img
                className="school-logo"
                src={require("./images/hopewell.png")}
              />
              <h2 className="student-name-tag has-text-centered">
                {this.getUsernameWithoutHost()}
              </h2>
              <h4 className="student-id has-text-centered">7508719</h4>
              <div className="aside-body">
                <ul className="menu-list">
                  <li>
                    <Link
                      to="/"
                      className={
                        window.location.pathname === "/" ? " is-current" : ""
                      }
                    >
                      <div className="has-text-left">
                        <i
                          className="sidebar-icons fa fa-home"
                          aria-hidden="true"
                        />{" "}
                        <div className="side-link-text"> Home</div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/attendance"
                      className={
                        window.location.pathname === "/attendance"
                          ? " is-current"
                          : ""
                      }
                    >
                      <div className="has-text-left">
                        <i
                          className="sidebar-icons fa fa-calendar-check"
                          aria-hidden="true"
                        />{" "}
                        <div className="side-link-text"> Attendance</div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/grades"
                      className={
                        window.location.pathname === "/grades"
                          ? " is-current"
                          : ""
                      }
                    >
                      <div className="has-text-left">
                        <i
                          className="sidebar-icons fa fa-graduation-cap m"
                          aria-hidden="true"
                        />
                        <div className="side-link-text"> Grades</div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/calendar"
                      className={
                        window.location.pathname === "/calendar"
                          ? " is-current"
                          : ""
                      }
                    >
                      <div className="has-text-left">
                        <i
                          className="sidebar-icons fa fa-calendar"
                          aria-hidden="true"
                        />{" "}
                        <div className="side-link-text"> Events Calendar</div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contacts"
                      className={
                        window.location.pathname === "/contacts"
                          ? " is-current"
                          : ""
                      }
                    >
                      <div className="has-text-left">
                        <i
                          className="sidebar-icons fa fa-users"
                          aria-hidden="true"
                        />{" "}
                        <div className="side-link-text"> Contacts</div>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/forms"
                      className={
                        window.location.pathname === "/forms"
                          ? " is-current"
                          : ""
                      }
                    >
                      <div className="has-text-left">
                        <i
                          className="sidebar-icons fa fa-file"
                          aria-hidden="true"
                        />
                        <div className="side-link-text"> Forms</div>
                      </div>
                    </Link>
                  </li>
                </ul>
                <div id="navbar-sidebar-holder">
                  <hr className="nav-bars-separator" />
                  <div className="navbar-sidebar-divs">
                    <button className="button ">
                      <i
                        className=" fa fa-bell nav-bar-side-bar-icon"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="navbar-sidebar-divs">
                    <Link to="/support" className="">
                      Support
                    </Link>
                  </div>
                  <div className="navbar-sidebar-divs">
                    <Link to="/logout" onClick={this.logout} className="">
                      Logout
                    </Link>
                  </div>
                  <div className="navbar-sidebar-divs">
                    <button className="button ">
                      <i className="fas fa-user-alt nav-bar-side-bar-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            <div
              className="unseen"
              id="background-overlay"
              onClick={this.toggleIsDisplayNone}
            />
          </div>
        ) : (
          <div>
            {console.log(loggedIn)}
            <Redirect to={{ pathname: this.state.redirectTo }} />
          </div>
        )}
      </div>
    );
  }
}

export default SideBar;
