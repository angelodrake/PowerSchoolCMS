import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "/login"
    };
  }

  render() {
    const imageStyle = {
      width: 400
    };
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <div>
            <p>It's good to be home</p>
            <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
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
export default Home;
