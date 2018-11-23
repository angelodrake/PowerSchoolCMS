import "./Contacts.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Contacts extends Component {
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
            <h1 className="has-text-centered title is-1 contacts-title">
              Contacts
            </h1>
            <div className="contacts-columns-container">
              <div className="columns">
                <div className="column is-6">
                  <div className="card contact-card">
                    <div className="columns is-vcentered">
                      <div className="column is-4">
                        <div className="card-image">
                          <figure className="image">
                            <img
                              className="is-pulled-left image is-128x128"
                              alt="Tracey Pickard"
                              src={require("./images/principal.jpg")}
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="column is-8">
                        <div className="card-content contacts-card-content">
                          <ul>
                            <li className="contact-card-li">
                              <strong>Name:</strong> Tracey Pickard
                            </li>
                            <li className="contact-card-li">
                              <strong>Position:</strong> Principal
                            </li>
                            <li className="contact-card-li">
                              <strong>Email:</strong>{" "}
                              Tracey.Pickard@cms.k12.nc.us
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="card contact-card">
                    <div className="columns is-vcentered">
                      <div className="column is-4">
                        <div className="card-image">
                          <figure className="image">
                            <img
                              className="is-pulled-left image is-128x128"
                              alt="Ashli Crepsac"
                              src={require("./images/teacher-english.jpg")}
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="column is-8">
                        <div className="card-content contacts-card-content">
                          <ul>
                            <li className="contact-card-li">
                              <strong>Name:</strong> Ashli Crepsac
                            </li>
                            <li className="contact-card-li">
                              <strong>Position:</strong> Teacher,English
                            </li>
                            <li className="contact-card-li">
                              <strong>Email:</strong>{" "}
                              Ashli.Crepsac@cms.k12.nc.us
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-6">
                  <div className="card contact-card">
                    <div className="columns is-vcentered">
                      <div className="column is-4">
                        <div className="card-image">
                          <figure className="image">
                            <img
                              className="is-pulled-left image is-128x128"
                              alt="David Vazquez"
                              src={require("./images/teacher-math.jpg")}
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="column is-8">
                        <div className="card-content contacts-card-content">
                          <ul>
                            <li className="contact-card-li">
                              <strong>Name:</strong> David Vazquez
                            </li>
                            <li className="contact-card-li">
                              <strong>Position:</strong> Teacher, Math
                            </li>
                            <li className="contact-card-li">
                              <strong>Email:</strong>{" "}
                              David.Vazquez@cms.k12.nc.us
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="card contact-card">
                    <div className="columns is-vcentered">
                      <div className="column is-4">
                        <div className="card-image">
                          <figure className="image">
                            <img
                              className="is-pulled-left image is-128x128"
                              alt="Robert Altenhof"
                              src={require("./images/teacher-history.jpg")}
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="column is-8">
                        <div className="card-content contacts-card-content">
                          <ul>
                            <li className="contact-card-li">
                              <strong>Name:</strong> Robert Altenhof
                            </li>
                            <li className="contact-card-li">
                              <strong>Position:</strong> Teacher, History
                            </li>
                            <li className="contact-card-li">
                              <strong>Email:</strong>{" "}
                              Robert.Altenhof@cms.k12.nc.us
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-6">
                  <div className="card contact-card">
                    <div className="columns is-vcentered">
                      <div className="column is-4">
                        <div className="card-image">
                          <figure className="image">
                            <img
                              className="is-pulled-left image is-128x128"
                              alt="Tricia Wood"
                              src={require("./images/teacher-science.jpg")}
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="column is-8">
                        <div className="card-content contacts-card-content">
                          <ul>
                            <li className="contact-card-li">
                              <strong>Name:</strong> Tricia Wood
                            </li>
                            <li className="contact-card-li">
                              <strong>Position:</strong> Teacher, Science
                            </li>
                            <li className="contact-card-li">
                              <strong>Email:</strong> Tricia.Wood@cms.k12.nc.us
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="card contact-card">
                    <div className="columns is-vcentered">
                      <div className="column is-4">
                        <div className="card-image">
                          <figure className="image">
                            <img
                              className="is-pulled-left image is-128x128"
                              alt="Lakeisha Dennis"
                              src={require("./images/bradley.png")}
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="column is-8">
                        <div className="card-content contacts-card-content">
                          <ul>
                            <li className="contact-card-li">
                              <strong>Name:</strong> Lakeisha Dennis
                            </li>
                            <li className="contact-card-li">
                              <strong>Position:</strong> Counselor
                            </li>
                            <li className="contact-card-li">
                              <strong>Email:</strong>{" "}
                              Lakeisha.Dennis@cms.k12.nc.us
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Contacts;
