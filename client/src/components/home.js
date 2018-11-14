import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: props.loggedIn,
      redirectTo: "/login"
    };
  }

  render() {
    const imageStyle = {
      width: 400
    };
    console.log(this.state.loggedIn);
    if (!this.state.auth) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <p>It's good to be home</p>
          <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
        </div>
      );
    }
  }
}
export default Home;
