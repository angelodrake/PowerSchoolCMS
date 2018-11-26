import React, { Component } from "react";
import SideBar from "./SideBar";
import "../chat.css";
import "./chatbox.css";
import {
  COMMUNITY_CHAT,
  MESSAGE_SENT,
  MESSAGE_RECIEVED,
  TYPING
} from "../Events";
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
        {/* <h3>Chat Room</h3> */}
        <div className="columns">
          <div className="column is-one-fifth" />
          <div className="column is-three-fifths">
            <div
              style={{
                height: 300,
                backgroundColor: "rgb(245,245,245)",
                border: "2px solid rgb(3, 33, 91)",
                overflow: "auto",
                borderRadius: " 6px",
                marginBottom: "10px"
              }}
            >
              {this.state.messages.map(a => {
                return (
                  <h3 style={{ marginLeft: "5px", color: "rgb(3, 33, 91)" }}>
                    {a}
                  </h3>
                );
              })}
            </div>
            <textarea
              ref={el => (this.MessageTextElem = el)}
              type="text"
              placeholder="message ..."
              onChange={val => {
                this.setState({ text: val.target.value });
              }}
              style={{
                border: "solid 1px #ccc",
                boxShadow: "1px 1px 4px #ccc",
                borderRadius: " 6px",

                rows: 4,
                cols: 50,
                width: "100%",
                height: 100,
                margin: "auto",
                display: "block"
              }}
            />
            <br />
            <div className="level">
              <div className="level-left">
                <button onClick={this.send.bind(this)} className="btn">
                  Send
                </button>
              </div>
              <div className="level-right">
                <button
                  className="btn"
                  onClick={this.props.logout}
                  id="btn-chat-logout"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-fifth" />
      </div>
    );
  }
}

export default ChatContainer;
