import "./ContactCards.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ContactCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "/login"
    };
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <div className="contacts-holder">
            <h1>Contacts</h1>
            <div className="card">
              {console.log(this.props.name)}
              {console.log("=====================================")}
              <div className="card-image">
                <figure className="image is-4by3">
                  <img alt={this.props.name} src={this.props.image} />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <ul>
                    <li>
                      <strong>Name:</strong> {this.props.name}
                    </li>
                    <li>
                      <strong>Position:</strong> {this.props.position}
                    </li>
                    <li>
                      <strong>Email:</strong> {this.props.email}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {console.log(loggedIn)}
            <Redirect to={{ pathname: this.state.redirectTo }} />
          </div>
        )}
      </div>
    );
  }
}

export default ContactCards;
