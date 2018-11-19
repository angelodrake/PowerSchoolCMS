import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
// components
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/navbar";
import Home from "./components/home";
import ContactCards from "./components/ContactCards";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      isLoading: true,
      contacts
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
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
        {/* Routes to different components */}
        <SideBar loggedIn={this.state.loggedIn} />
        <Route
          exact
          path="/"
          render={() => <Home loggedIn={this.state.loggedIn} />}
        />
        <Route
          exact
          path="/contacts"
          render={() => <ContactCards loggedIn={this.state.loggedIn} />}
        />
        <Route
          path="/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route path="/signup" render={() => <Signup />} />
        <Footer loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}

export default App;
