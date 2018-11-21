import React, { Component } from "react";
import SideBar from "./SideBar";
import "../chat.css";
import "./chatbox.css";
import { COMMUNITY_CHAT, MESSAGE_SENT, MESSAGE_RECIEVED, TYPING } from "../Events";
import openSocket from "socket.io-client";
import axios from "axios";
const socket = openSocket("/");

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      activeChat: null
    };
  }
  componentDidMount() {
    socket.on("sendMessage", data => {
      console.log(data);
    });
  }

  render() {
    const { user, logout } = this.props;
    return (
      <div className="h1Styles">
        <h3>Chat Room</h3>
        <div style={{ height: 300, width: "90%", backgroundColor: "grey" }}>
          {this.state.messages.map(a => {
            return <h3 style={{ color: "white" }}>{a}</h3>;
          })}
        </div>
        <input type="text" placeholder="message ..." style={{ height: 60, width: "90%" }} />
        <button onClick={this.send.bind(this)}>Send</button>
      </div>
    );
  }
}

export default ChatContainer;
