import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
// components
import Signup from "./components/pages/SignUp/SignUp";
import LoginForm from "./components/pages/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/home";
import Contacts from "./components/pages/Contacts";
import Support from "./components/pages/Support/Support";
import Forms from "./components/pages/Forms/Forms";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Chat from "./components/Chat/chat";
import Calendar from "./components/pages/Calendar";
import Attendance from "./components/pages/Attendance/Attendance";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      isLoading: true
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
    console.log(this.state.loggedIn);
  }

  updateUser(userObject) {
    this.setState(userObject);
  }
  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          isLoading: false
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
          isLoading: false
        });
      }
    });
  }

  render() {
    return this.state.isLoading ? (
      <div className="has-text-centered">
        <a href="" className="button is-loading is-white is-center is-large" />
      </div>
    ) : (
      <div>
        <div className="App">
          <div className="mainContent">
            <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn} />} />
            <Route exact path="/support" render={() => <Support loggedIn={this.state.loggedIn} />} />
            <Route exact path="/forms" render={() => <Forms loggedIn={this.state.loggedIn} />} />
            <Route exact path="/attendance" render={() => <Attendance loggedIn={this.state.loggedIn} />} />
            <Route exact path="/contacts" render={() => <Contacts loggedIn={this.state.loggedIn} />} />
            <Route exact path="/calendar" render={() => <Calendar loggedIn={this.state.loggedIn} />} />
          </div>
          <div className="sidebar">
            <SideBar loggedIn={this.state.loggedIn} />
          </div>
          <Footer loggedIn={this.state.loggedIn} />
        </div>
        <div>
          <Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/chat" render={() => <Chat title="Chat App Screen" />} />
        </div>
      </div>
    );
  }
}

export default App;
