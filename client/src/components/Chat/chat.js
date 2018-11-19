import React, { Component } from "react";
import io from "socket.io-client";
import "./chat.css";

const socketUrl = "http://localhost:3001)";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "/login",
      socket: null
    };
  }

  componentWillMount() {
    this.startSocket();
  }

  startSocket = () => {
    const socket = io(socketUrl);
    this.setState({ socket });
  };
  render() {
    const { title } = this.props;
    return (
      <div>
        <h1 className="h1Styles">{title}</h1>
      </div>
    );
  }
}

export default Chat;
