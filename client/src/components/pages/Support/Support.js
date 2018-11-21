import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Column from '../../Grid/Column';
import Columns from '../../Grid/Columns';
import OpenSupportTickets from '../../OpenSupportTickets/OpenSupportTickets';
import './Support.css';

export default class Support extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectTo: "/login",
      name: "",
      email: "",
      category: "",
      textarea: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();

  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <Columns extras="is-centered">
            <Column size="is-three-fifths supportFormBuffer">
            <form>
              <div className="field inputStyles">
                <label className="label">Name:</label>
                <div className="control">
                  <input className="input is-fullwidth" placeholder="John Doe" name="name" type="text" onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="field inputStyles innerInput">
                <label className="label">E-Mail:</label>
                <div className="control">
                  <input className="input is-fullwidth inputStyles" placeholder="example@example.com" name="email" type="email" onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="field inputStyles innerInput">
              <label className="label">Question Category:</label>
                <div className="control">
                  <div className="select is-fullwidth inputStyles">
                    <select name="category" onChange={this.handleInputChange}>
                      <option disabled="disabled" selected="selected" value={null}>Choose a category</option>
                      <option value="general">General</option>
                      <option value="schedule">Schedule</option>
                      <option value="financial">Financial</option>
                      <option value="attendance">Attendance</option>
                      <option value="tutoring">Tutoring</option>
                      <option value="loginIssues">Login Issues</option>
                      <option value="techSupport">Tech Support</option>
                      <option value="requestAbsence">Request Absence</option>
                      <option value="reschedule">Reschedule</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field inputStyles innerInput">
                <label className="label">What do you need help with?</label>
                <div className="control">
                  <textarea className="textarea is-fulldith" rows={10} name="textarea" onChange={this.handleInputChange}></textarea>
                </div>
              </div>
              <div className="field is-grouped formButtons">
                <div className="control">
                  <button className="button is-link" onClick={this.handleFormSubmit}>Submit</button>
                </div>
                <div className="control">
                  <Link to="/" className="button is-text">Cancel</Link>
                </div>
              </div>
            </form>
            </Column>
            <Column>
              <OpenSupportTickets questionCategory="Request Absence" questionText="I am requesting an absence for the 5th of December, I have a doctors appointment." />
            </Column>
          </Columns>
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
