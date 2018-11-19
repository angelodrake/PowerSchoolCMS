import React, { Component } from "react";
import './StudentWall.css';
import Column from '../../Grid/Column';
import Columns from '../../Grid/Columns';
import Announcements from '../../Announcements/Announcements';
import Notifications from '../../Notifications/Notifications';
import Upcoming from '../../Upcoming/Upcoming';
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "/login"
    };
  }

  render() {
    const imageStyle = {
      width: 400
    };
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <Columns extras="is-centered">
            <Column size="is-three-fifths">
              <h1 className="h1Styles">
                Student Wall
              </h1>
              <Announcements />
              <Notifications />
            </Column>
            <Column>
              <Upcoming day="Friday" month="November" dayNum="16" time="10:00AM - 2:30PM Local" testName="Algebra II Final" checkin="You're checked in as Early" />
            </Column>
          </Columns>
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
