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

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <aside className="menu">
            <img
              className="school-logo"
              src={require("./images/hopewell.png")}
            />
            <h2 class="student-name-tag">John Smith</h2>
            <h4 class="student-id">7508719</h4>
            <ul className="menu-list">
              <li>
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ? " is-active" : ""
                  }
                >
                  <div className="has-text-left">
                    <i className="mx-3 fa fa-home" aria-hidden="true" />{" "}
                    <div className="side-link-text"> Home</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/attendance"
                  className={
                    window.location.pathname === "/attendance"
                      ? " is-active"
                      : ""
                  }
                >
                  <div className="has-text-left">
                    <i class="mx-3 fa fa-calendar-check" aria-hidden="true" />{" "}
                    <div className="side-link-text"> Attendance</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/grades"
                  className={
                    window.location.pathname === "/grades" ? " is-active" : ""
                  }
                >
                  <div className="has-text-left">
                    <i
                      className="mx-3 fa fa-graduation-cap m"
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
                    window.location.pathname === "/calendar" ? " is-active" : ""
                  }
                >
                  <div className="has-text-left">
                    <i className="mx-3 fa fa-calendar" aria-hidden="true" />{" "}
                    <div className="side-link-text"> Events Calendar</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className={
                    window.location.pathname === "/contacts" ? " is-active" : ""
                  }
                >
                  <div className="has-text-left">
                    <i className="mx-3 fa fa-users" aria-hidden="true" />{" "}
                    <div className="side-link-text"> Contacts</div>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/forms"
                  className={
                    window.location.pathname === "/forms" ? " is-active" : ""
                  }
                >
                  <div className="has-text-left">
                    <i className="mx-3 fa fa-file" aria-hidden="true" />
                    <div className="side-link-text"> Forms</div>
                  </div>
                </Link>
              </li>
            </ul>
          </aside>
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
