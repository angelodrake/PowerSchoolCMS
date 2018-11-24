import React from "react";
import "./GradesTopInfo.css";
import GradeTopbar from './GradeTopBar'

class GradesTopInfo extends React.Component {

  render() {

    let avg = Math.round(this.props.totalScore / this.props.numClass / 2.5) / 10
    return (
      <div className="level">
        <div className="level-item">
          <div className="card gpa-card">
            <p className="subtitle has-text-centered ">GPA</p>
            <p className="title is-1 has-text-centered grades-top-info-title">
              {avg}
            </p>

          </div>
        </div>
        <div className="level-item">
          <div className="card barChart-card">

            <GradeTopbar
              average={Object.values(this.props.average)}
              classes={Object.values(this.props.course)}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default GradesTopInfo;
