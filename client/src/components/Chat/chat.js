import React, { Component } from "react";
import io from "socket.io-client";
import "./chat.css";
import { USER_CONNECTED, LOGOUT } from "./Events";
import ChatLogin from "./ChatLogin";
import ChatContainer from "./chats/ChatContainer";

const socketUrl = "http://localhost:3001";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "/login",
      socket: null,
      user: null
    };
  }

  componentWillMount() {
    this.startSocket();
  }

  startSocket = () => {
    const socket = io(socketUrl);
    this.setState({ socket });
  };

  //user logs in
  setUser = user => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({ user });
    console.log(this.state.user);
  };

  //user logs out
  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
    const { title } = this.props;
    const { socket, user } = this.state;

    return (
      <div>
        <h1 className="h1Styles">{title}</h1>
        {!user ? <ChatLogin socket={socket} setUser={this.setUser} /> : <ChatContainer socket={socket} user={user} logout={this.logout} />}
      </div>
    );
  }
}

export default Chat;
