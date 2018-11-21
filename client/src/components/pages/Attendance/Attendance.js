import React from 'react';
import { Redirect } from 'react-router-dom';
import './Attendance.css';
import AttendanceCard from '../../AttendanceCard/AttendanceCard';

class Attendance extends React.Component {
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
          <div className="mt">
            <AttendanceCard classTitle="Math III" excusedAbsences={3} unexcusedAbsences={1} excusedTardies={2} unexcusedTardies={0} />
            <AttendanceCard classTitle="English III" excusedAbsences={1} unexcusedAbsences={1} excusedTardies={2} unexcusedTardies={0} />
            <AttendanceCard classTitle="Biology" excusedAbsences={0} unexcusedAbsences={1} excusedTardies={0} unexcusedTardies={2} />
            <AttendanceCard classTitle="Geography" excusedAbsences={0} unexcusedAbsences={0} excusedTardies={4} unexcusedTardies={1} />
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

export default Attendance;
