import React, { Component } from "react";
import "./Footer.css";
import { Redirect } from "react-router-dom";

class Footer extends Component {
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
          <footer>
            {" "}
            <img
              className="bottom-logo"
              src={require("./images/hopewell.png")}
            />
            Copyright © 2018 Final Group{" "}
            <img
              className="bottom-logo"
              src={require("./images/hopewell.png")}
            />
          </footer>
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
export default Footer;
