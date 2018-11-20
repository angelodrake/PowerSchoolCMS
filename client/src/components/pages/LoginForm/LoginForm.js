import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import Column from '../../Grid/Column';
import Columns from '../../Grid/Columns';
import './LoginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(this.state.username);
    console.log(this.state.password);

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Columns extras="is-centered backdrop">
          <Column size="is-one-third loginFormBuffer">
          <div className="innerLogin">
            <div className="has-text-centered loginTitle">
              Login to PowerSchool
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
                      Login
                    </button>
                    </p>
                    <p className="control">
                      <Link to="/signup" className="button is-light">
                        Sign-up
                      </Link>
                    </p>
                  </div>
                  </p>
                </div>
                <div className="has-text-centered forgot">
                  <p>
                    Forgot your password? Talk to your network admin ASAP.
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

export default LoginForm;
