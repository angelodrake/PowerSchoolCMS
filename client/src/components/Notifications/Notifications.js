import React from "react";
import { Link } from "react-router-dom";
import Column from "../Grid/Column";
import Columns from "../Grid/Columns";
import "./Notifications.css";

const Notifications = props => {
  return (
    <div className="notificationsBuffer">
      <h2 className="notificationsHeader">Notifications</h2>
      <div>
        <ul>
          <li>
            <Columns>
              <Column size="colBorder">
                <div className="has-text-centered atnText">
                  <span className="boldSpan">Due: Homework #8:</span>{" "}
                  Foundations of Cell Biology is due Thursday, Dec 6th by
                  11:59pm.
                </div>
                <div className="break" />
                <div className="has-text-centered">
                  <p className="notifDetails">
                    <Link to="/notifications/details/1">
                      <i className="fas fa-paste" /> Details
                    </Link>
                  </p>
                </div>
              </Column>
            </Columns>
          </li>
          <li>
            <Columns>
              <Column size="colBorder">
                <div className="has-text-centered atnText">
                  <span className="boldSpan">Attention:</span> You've used 4 of
                  your 5 absences in English III, one more and you'll have to report to
                  administration for recovery.
                </div>
                <div className="break" />
                <div className="has-text-centered">
                  <p className="notifDetails">
                    <Link to="/notifications/details/2">
                      <i className="fas fa-paste" /> Details
                    </Link>
                  </p>
                </div>
              </Column>
            </Columns>
          </li>
          <li>
            <Columns>
              <Column size="colBorder">
                <div className="has-text-centered atnText">
                  <span className="boldSpan">Reminder:</span> You must submit
                  your release form to student services off before school lets
                  out on the 7th of December.
                </div>
                <div className="break" />
                <div className="has-text-centered">
                  <p className="notifDetails">
                    <Link to="/notifications/details/3">
                      <i className="fas fa-paste" /> Details
                    </Link>
                  </p>
                </div>
              </Column>
            </Columns>
          </li>
          <li>
            <Columns>
              <Column size="colBorder">
                <div className="has-text-centered atnText">
                  <span className="boldSpan">Turned in: Homework #7:</span> We
                  have successfully received your homework #7, it will be graded
                  shortly!
                </div>
                <div className="break" />
                <div className="has-text-centered">
                  <p className="notifDetails">
                    <Link to="/notifications/details/4">
                      <i className="fas fa-paste" /> Details
                    </Link>
                  </p>
                </div>
              </Column>
            </Columns>
          </li>
          <li>
            <Columns>
              <Column size="colBorder">
                <div className="has-text-centered atnText">
                  <span className="boldSpan">Due: Homework #7: </span> Property
                  of Logs Practice is due on the Friday, Nov 23rd by 11:59pm.
                </div>
                <div className="break" />
                <div className="has-text-centered">
                  <p className="notifDetails">
                    <Link to="/notifications/details/5">
                      <i className="fas fa-paste" /> Details
                    </Link>
                  </p>
                </div>
              </Column>
            </Columns>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
