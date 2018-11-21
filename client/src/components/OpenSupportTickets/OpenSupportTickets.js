import React from 'react';
import './OpenSupportTickets.css'

const OpenSupportTickets = (props) => {

  return (
        <div className="openTicketsBuffer has-text-centered">
          <div className="innerTicketsBuffer">
            <h2 className="openTicketsTitle">
              {props.questionCategory}
              </h2>
              <div className="break"></div>
              <p className="openTicketsText">
              {props.questionText}
              </p>
            </div>
          </div>
  )
}

export default OpenSupportTickets;
