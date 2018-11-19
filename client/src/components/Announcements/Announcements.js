import React from 'react';
import './Announcements.css';

const Announcements = (props) => {

  return (
    <div className="announcementBuffer">
      <h2 className="announcementHeader">
        Announcements
      </h2>
      <div className="has-text-centered">
        <p>
          <i className="far fa-comment-alt iconStyle"></i>
        </p>
        <p className="subtitle">
          No announcements
        </p>
        <p className="announcementText">
          Currently you don't have any announcements, but don't worry as soon as you do they will show up here.
        </p>
      </div>
    </div>
  )
}

export default Announcements;
