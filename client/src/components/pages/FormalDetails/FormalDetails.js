import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Column from '../../Grid/Column';
import Columns from '../../Grid/Columns';
import "./FormalDetails.css";

class SessionDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectTo: "/login"
    }
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <div>
            <Columns extras="is-centered formalDetailsBuffer">
              <Column size="is-two-fifths bottomBreak">
                <div>
                  <h1 className="formalTitle">
                    {this.props.title}
                  </h1>
                  <p className="formalSubtitle">
                    {this.props.date}
                  </p>
                </div>
              </Column>
              <Column size="is-one-fifth bottomBreak">
                <div>
                  <p className="sideText">
                    {this.props.sideText}
                  </p>
                </div>
              </Column>
            </Columns>
            <Columns extras="is-centered">
              <Column size="is-two-fifths">
                <div>
                  <h2 className="detailsHeader">
                    {this.props.header}
                  </h2>
                  <p className="detailsText">
                    {this.props.infoText}
                  </p>
                </div>
              </Column>
              <Column size="is-one-fifth">
                <div className="has-text-centered reschedule">
                  {this.props.sideLink}
                </div>
              </Column>
            </Columns>
          </div>
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

export default SessionDetails;
