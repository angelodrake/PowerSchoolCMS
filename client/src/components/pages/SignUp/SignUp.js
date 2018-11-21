import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import './SignUp.css';
import Column from '../../Grid/Column';
import Columns from '../../Grid/Columns';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    console.log(this.state.password);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            redirectTo: "/login"
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Columns extras="is-centered backdrop">
          <Column size="is-one-third signUpFormBuffer">
            <div className="innerLogin">
              <div className="has-text-centered signupTitle">
                Sign up for PowerSchool
              </div>
              <div>
                <div className="field">
                  <p className="control">
                    <label>Username:</label>
                    <input className="input inputMargins" type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <label>Password:</label>
                    <input className="input" placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                  <div className="field is-grouped">
                    <p className="control">
                      <button onClick={this.handleSubmit} className="button">
                        Sign-up
                      </button>
                    </p>
                  </div>
                  </p>
                </div>
              </div>
            </div>
          </Column>
        </Columns>
      );
    }
  }
}

export default Signup;
