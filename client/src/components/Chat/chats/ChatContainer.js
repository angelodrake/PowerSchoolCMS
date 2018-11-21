import React, { Component } from "react";
import SideBar from "./SideBar";
import "../chat.css";
import { COMMUNITY_CHAT, MESSAGE_SENT, MESSAGE_RECIEVED, TYPING } from "../Events";
import ChatHeading from "./ChatHeading";
import Messages from "../messages/Messages";
import MessageInput from "../messages/MessageInput";

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      activeChat: null
    };
  }

  render() {
    const { user, logout } = this.props;
    return (
      <div className="h1Styles">{/* <SideBar logout={logout} chats={chats} user={user} activeChat={activeChat} setActiveChat={this.setActiveChat} /> */}</div>
    );
  }
}

export default ChatContainer;
