import React, { Component } from "react";
import { VERIFY_USER } from "./Events";
import "./chat.css";

class ChatLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "/login",
      nickname: "",
      error: ""
    };
  }
  setUser = ({ user, isUser }) => {
    console.log(user, isUser);
    if (isUser) {
      this.setError("Username Taken");
    } else {
      this.setError("");
      this.props.setUser(user);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { socket } = this.props;
    const { nickname } = this.state;
    console.log(socket);
    console.log(nickname);
    socket.emit(VERIFY_USER, nickname, this.setUser);
  };

  handleChange = event => {
    this.setState({ nickname: event.target.value });
  };

  //setting error for user display
  setError = error => {
    this.setState({ error });
  };

  render() {
    const { nickname, error } = this.state;
    return (
      <div className="h1Styles columns chat-login-holder">
        <div className="column is-one-fifth" />
        <div className="column is-three-fifths">
          <form className="chatlogin">
            <label htmlFor="nickname" style={{ margin: "20px" }}>
              <h2 className="nickname-h2">Enter your name to chat:</h2>
            </label>
            <input
              ref={input => {
                this.textInput = input;
              }}
              type="text"
              id="nickname"
              value={nickname}
              onChange={this.handleChange}
              placeholder={"My Username"}
            />
            <div className="error"> {this.state.error}</div>
            <button
              className="btn col-1 col-mr-auto login-submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="column is-one-fifth" />
      </div>
    );
  }
}

export default ChatLogin;
