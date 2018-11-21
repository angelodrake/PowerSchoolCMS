import React from 'react';
import './Alerts.css';

const Alerts = (props) => {

  return (
    <div className="alertsBox has-text-centered">
      <p className="alertText">
        {props.alertText}
      </p>
      <div className="alertBreak"></div>
    </div>
  )
}

export default Alerts;
