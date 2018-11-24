import React from "react";
import Column from "../Grid/Column";
import Columns from "../Grid/Columns";
import "./AttendanceCard.css";

const AttendanceCard = props => {
  return (
    <Columns extras="is-centered">
      <Column size="is-half attendanceCardBuffer">
        <div className="has-text-centered">
          <p className="attendanceClassTitle">{props.classTitle}</p>
        </div>
        <div className="break" />
        <div>
          <div className="field is-grouped is-grouped-centered mb columns">
            <div className="column has-text-centered">
              <p className="atendanceSubtitle">Absences</p>
              <p className="attendanceSubtext">
                Excused: {props.excusedAbsences}
              </p>
              <p className="attendanceSubtext">
                Unexcused: {props.unexcusedAbsences}
              </p>
            </div>
            <div className="attendanceSeparator" />
            <div className="column has-text-centered">
              <p className="atendanceSubtitle">Tardies</p>
              <p className="attendanceSubtext">
                Excused: {props.excusedTardies}
              </p>
              <p className="attendanceSubtext">
                Unexcused: {props.unexcusedTardies}
              </p>
            </div>
          </div>
        </div>
      </Column>
    </Columns>
  );
};

export default AttendanceCard;
