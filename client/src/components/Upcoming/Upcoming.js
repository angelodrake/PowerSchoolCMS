import React from "react";
import { Link } from "react-router-dom";
import "./Upcoming.css";

const Upcoming = props => {
  return (
    <div className="upcomingBuffer">
      <h2 className="upcomingHeader">Upcoming Formals</h2>
      <div className="sessionBorder">
        <div className="innerBuffer">
          <div className="has-text-centered">
            <p className="day">{props.day}</p>
            <p className="month">{props.month}</p>
            <p className="dayNum">{props.dayNum}</p>
            <p className="time">{props.time}</p>
          </div>
          <div className="break" />
          <div className="has-text-centered">
            <p className="testName">{props.testName}</p>
          </div>
          <div className="break" />
          <div className="has-text-centered">
            <p>
              <Link to="/formal-details" className="details">
                <i className="fas fa-sign-in-alt" /> Formal Details
              </Link>
            </p>
            <p>
              <Link to="/support" className="absence">
                <i className="fas fa-calendar-times" /> Request Absence
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
