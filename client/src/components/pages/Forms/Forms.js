import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Column from '../../Grid/Column';
import Columns from '../../Grid/Columns';
import './Forms.css';

export default class Forms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectTo: "/login"
    };
    this.fieldTripView = this.fieldTripView.bind(this);
    this.movieView = this.movieView.bind(this);
    this.earlyReleaseView = this.earlyReleaseView.bind(this);
    this.lateArrivalView = this.lateArrivalView.bind(this);
  }

  fieldTripView() {
    document.getElementById("fieldTripView").onclick(document.getElementById("fieldTripImg").classList.toggle("hiddenForm"));
    document.getElementById("fieldTripView").onclick(document.getElementById("fieldTripContainer").classList.toggle("imgBuffer"));
  }

  movieView() {
    document.getElementById("movieView").onclick(document.getElementById("movieImg").classList.toggle("hiddenForm"));
    document.getElementById("movieView").onclick(document.getElementById("movieContainer").classList.toggle("imgBuffer"));
  }

  earlyReleaseView() {
    document.getElementById("earlyReleaseView").onclick(document.getElementById("earlyReleaseImg").classList.toggle("hiddenForm"));
    document.getElementById("earlyReleaseView").onclick(document.getElementById("earlyReleaseContainer").classList.toggle("imgBuffer"));
  }

  lateArrivalView() {
    document.getElementById("lateArrivalView").onclick(document.getElementById("lateArrivalImg").classList.toggle("hiddenForm"));
    document.getElementById("lateArrivalView").onclick(document.getElementById("lateArrivalContainer").classList.toggle("imgBuffer"));
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <Columns>
            <Column size="is-three-fifths formsBuffer">
              <div className="formsContainer">
                <div className="innerContainer">
                  <div className="has-text-centered">
                    <span className="boldSpan">Field Trip Permission Form</span>
                  </div>
                  <div className="break"></div>
                  <div className="field is-grouped is-grouped-centered formButtons">
                    <div className="control">
                      <button className="button is-link">Sign Form</button>
                    </div>
                    <div className="separator"></div>
                    <div className="control">
                      <button id="fieldTripView" onClick={this.fieldTripView} className="button is-text">View Form</button>
                    </div>
                  </div>
                  <div id="fieldTripContainer" className="">
                    <img id="fieldTripImg" className="hiddenForm" src={require("./images/fieldTripPermissionForm.png")} />
                  </div>
                </div>
              </div>
              <div className="formsContainer">
                <div className="innerContainer">
                  <div className="has-text-centered">
                    <span className="boldSpan">Movie Permission Form</span>
                  </div>
                  <div className="break"></div>
                  <div className="field is-grouped is-grouped-centered formButtons">
                    <div className="control">
                      <button className="button is-link">Sign Form</button>
                    </div>
                    <div className="separator"></div>
                    <div className="control">
                      <button id="movieView" onClick={this.movieView} className="button is-text">View Form</button>
                    </div>
                  </div>
                  <div id="movieContainer" className="">
                    <img id="movieImg" className="hiddenForm" src={require("./images/movieForm.png")} />
                  </div>
                </div>
              </div>
              <div className="formsContainer">
                <div className="innerContainer">
                  <div className="has-text-centered">
                    <span className="boldSpan">Early Release Form</span>
                  </div>
                  <div className="break"></div>
                  <div className="field is-grouped is-grouped-centered formButtons">
                    <div className="control">
                      <button className="button is-link">Sign Form</button>
                    </div>
                    <div className="separator"></div>
                    <div className="control">
                      <button id="earlyReleaseView" onClick={this.earlyReleaseView} className="button is-text">View Form</button>
                    </div>
                  </div>
                </div>
                <div id="earlyReleaseContainer" className="">
                  <img id="earlyReleaseImg" className="hiddenForm" src={require("./images/earlyReleaseForm.png")} />
                </div>
              </div>
              <div className="formsContainer">
                <div className="innerContainer">
                  <div className="has-text-centered">
                    <span className="boldSpan">Late Arrival Form</span>
                  </div>
                  <div className="break"></div>
                  <div className="field is-grouped is-grouped-centered formButtons">
                    <div className="control">
                      <button className="button is-link">Sign Form</button>
                    </div>
                    <div className="separator"></div>
                    <div className="control">
                      <button id="lateArrivalView" onClick={this.lateArrivalView} className="button is-text">View Form</button>
                    </div>
                  </div>
                </div>
                <div id="lateArrivalContainer" className="">
                  <img id="lateArrivalImg" className="hiddenForm" src={require("./images/lateArrivalForm.png")} />
                </div>
              </div>
            </Column>
          </Columns>
        ) : (
          <div>
            {console.log(loggedIn)}
            <Redirect to={{ pathname: this.state.redirectTo }} />
          </div>
        )}
      </div>
    )
  }
}
