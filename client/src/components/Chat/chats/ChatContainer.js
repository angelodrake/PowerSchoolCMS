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
      activeChat: null,
      text: ""
    };
  }
  componentDidMount() {
    socket.on("sendMessage", data => {
      console.log(data);
      let array = this.state.messages;
      array.push(data.text);
      this.setState({ messages: array });
    });
  }
  send() {
    const { user } = this.props;
    console.log(user);
    axios.post("getMessage", { text: user.name + ": " + this.state.text });
    this.setState({ text: "" });
    this.MessageTextElem.value = "";
  }

  render() {
    return (
      <div className="h1Styles">
        <h3>Chat Room</h3>
        <div style={{ height: 300, width: "90%", backgroundColor: "grey" }}>
          {this.state.messages.map(a => {
            return <h3 style={{ color: "white" }}>{a}</h3>;
          })}
        </div>
        <input
          ref={el => (this.MessageTextElem = el)}
          type="text"
          placeholder="message ..."
          onChange={val => {
            this.setState({ text: val.target.value });
          }}
          style={{ height: 60, width: "90%" }}
        />
        <button onClick={this.send.bind(this)}>Send</button>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default ChatContainer;
