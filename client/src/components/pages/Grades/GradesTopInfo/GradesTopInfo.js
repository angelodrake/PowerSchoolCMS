import React from "react";
import "./GradesTopInfo.css";


const GradesTopInfo = props => {
  console.log(props.totalScore)
console.log(props.numClass)


let avg = Math.round(props.totalScore/props.numClass/2.5)/10
console.log(avg)
  return (
    <div className="level">
      <div className="level-item">
        <div className="card grades-top-info-card">
          <div className="grades-top-info-card-content card-content">
            <p className="subtitle has-text-centered ">GPA</p>
            <p className="title is-1 has-text-centered grades-top-info-title">
              {avg}
            </p>
          </div>
        </div>
      </div>
      <div className="level-item">
        <div className="card grades-top-info-card ">
          <div className="grades-top-info-card-content card-content">
            <p className="subtitle has-text-centered">Missing Assignments</p>
            <p className="title is-1 has-text-centered grades-top-info-title">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradesTopInfo;
