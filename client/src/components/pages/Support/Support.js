import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  Button,
  Card,
  Label,
  Input,
} from 'reactstrap';
import './Support.css';
import API from '../../../utils/API'
import moment from 'moment'

export default class Support extends React.Component {
  state = {
    redirectTo: "/login",
    person: "",
    email: "",
    category: "",
    message: "",
    allTickets: []
  }

  componentDidMount() {
    this.loadAllSupportTicket()
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  loadAllSupportTicket = () => {
    API.getAllSupportTicket()
      .then(res => {
        this.setState({ allTickets: res.data })
      }).catch(err => console.log(err))
  }

  handleFormSubmit = (name) => {

    let newData = {
      name: this.state.person,
      email: this.state.email,
      date: new Date(),
      category: this.state.category,
      message: this.state.message
    }
    API.postSupportTicket(name, newData)
      .then(res => {
        this.loadAllSupportTicket()
      })
      .catch(err => console.log(err));
  }

  deleteTicket(id) {
    API.deleteSupportTicketById(id)
      .then(res => {
        this.loadAllSupportTicket()
      })
      .catch(err => console.log(err));
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div className="support-page-holder">
        {loggedIn ? (
          <div>
            <div className='row' >
              <div className='col-lg-8'>
                <div className='support-msg'>
                  <h2 className="announcementHeader">
                    Question for us?
                  </h2>

                  <p>
                    <i className="far fa-envelope iconStyle"></i>
                  </p>

                  <p className="announcementText">
                    Teacher parents relationship is important for children.
                    </p>
                </div>
                <Card className='support-card' style={{ padding: 1 + 'rem' }}>
                  <Label className="Label">Name:</Label>
                  <Input className="Input is-fullwidth"
                    placeholder="John Doe"
                    name="person"
                    type="text"
                    onChange={this.handleInputChange} />

                  <Label className="Label">E-Mail:</Label>

                  <Input className="Input is-fullwidth InputStyles"
                    placeholder="example@example.com"
                    name="email"
                    type="email"
                    onChange={this.handleInputChange}
                  />

                  <Label className="Label">Question Category:</Label>

                  <select
                    name="category"
                    style={{ width: 20 + 'rem' }}
                    onChange={this.handleInputChange}
                  >
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
                  <Label className="Label">What do you need help with?</Label>
                  <textarea
                    className="textarea is-fulldith"
                    style={{ height: 20 }}
                    name="message"
                    placeholder="Please enter your message..."
                    onChange={this.handleInputChange}
                  ></textarea>
                  <div>
                    <Button className="button contol"
                      onClick={() => {

                        let name = this.props.username
                        console.log(name)
                        this.handleFormSubmit(name)
                      }}
                    >Submit</Button>
                    <Link to="/" className="button contol">Cancel</Link>
                  </div>
                </Card>
              </div>
              <div className='col-lg-4'>
                <h2>
                  Your tickets:
               </h2>
                <hr />
                <p>Click to update tickets</p>

                {this.state.allTickets.map(ticket => (
                  <Card className="ticket-card"
                    style={{ padding: 1 + 'rem' }}>
                    <p>Name: {ticket.name}</p>
                    <hr />
                    <p>Category:{ticket.category}</p>
                    <p>Message:</p>
                    <p> {ticket.message}</p>
                    <p>Date: {moment(ticket.date).format('YYYY-MM-DD')}</p>
                    <Button
                      color="danger"
                      style={{ width: 8 + 'rem' }}
                      onClick={() => this.deleteTicket(ticket._id)}
                    >Delete Ticket
                    </Button>
                  </Card>

                ))}

                {/* <Card style={{ padding: 1 + 'rem' }}>
                <p>A placeholder</p>
                <p>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                   sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
                </p>
              </Card> */}

              </div>
            </div>
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
