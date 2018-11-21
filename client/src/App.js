import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
// components
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./components/pages/SignUp/SignUp";
import LoginForm from "./components/pages/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/home";
import Contacts from "./components/pages/Contacts";
import Support from "./components/pages/Support/Support";
import Forms from "./components/pages/Forms/Forms";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Calendar from "./components/pages/Calendar";
import Attendance from './components/pages/Attendance/Attendance'
import FormalDetails from './components/pages/FormalDetails/FormalDetails';
import Grades from "./components/pages/Grades";
import Alerts from './components/Alerts/Alerts'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      isLoading: true
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
    console.log(this.state.loggedIn);
  }

  updateUser(userObject) {
    this.setState(userObject);
  }
  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          isLoading: false
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
          isLoading: false
        });
      }
    });
  }

  render() {
    return this.state.isLoading ? (
      <div className="has-text-centered">
        <a href="" className="button is-loading is-white is-center is-large" />
      </div>
    ) : (
      <div>
        <div className="App">
          <div className="mainContent">
            <Navbar
              updateUser={this.updateUser}
              loggedIn={this.state.loggedIn}
            />
            <Route
              exact
              path="/"
              render={() => <Home loggedIn={this.state.loggedIn} />}
            />
            <Route
              exact
              path="/support"
              render={() => <Support loggedIn={this.state.loggedIn} />}
            />
            <Route
              exact
              path="/forms"
              render={() => <Forms loggedIn={this.state.loggedIn} />}
            />
            <Route
              exact
              path="/attendance"
              render={() => <Attendance loggedIn={this.state.loggedIn} />}
            />
            <Route
              exact
              path="/contacts"
              render={() => <Contacts loggedIn={this.state.loggedIn} />}
            />
            <Route
              exact
              path="/calendar"
              render={() => <Calendar loggedIn={this.state.loggedIn} />}
            />
            <Route
              exact
              path="/formal-details"
              render={() => <FormalDetails
                loggedIn={this.state.loggedIn}
                title="Math III Final"
                date="Friday, November 30th, 2018 | 1st Period"
                sideText=" Please arrive 15 minutes early to prepare"
                header="Formal Details"
                infoText="The Math III Final will be conducted in the normal classroom on the date listed above, if you need to rent a calculator please see the front office and they can get that settled for you. If you need to reschedule please talk to your teacher either before, after or during class or submit the appropriate ticket as request absence."
                sideLink={<Link to="/support" className="button">Reschedule</Link>}
              />}
            />
            <Route
              exact
              path="/notifications/details/1"
              render={() => <FormalDetails
                loggedIn={this.state.loggedIn}
                title="Foundations of Cell Biology is Due"
                date="Thursday, December 6th, 2018 | 3rd Period"
                sideText="Homework must be turned in no later than the end of class that day."
                header="Homework #8 Information"
                infoText="This homework will be using information learned in class when we went over the introduction to cell biology. This is meant to help you get a solid understanding of how cells function within our bodies. You may need to go to external resources for help with this as it will require information we have not discussed in class."
              />}
            />
            <Route
              exact
              path="/notifications/details/2"
              render={() => <FormalDetails
                loggedIn={this.state.loggedIn}
                title="Attention: Absences"
                date="this is simply a notice, there are no penalties yet."
                sideText="Note: This is just for English III."
                header="Absences"
                infoText="If you have received this warning it is because you are approaching your limit for absences. If you're worried about going over please contact administration ASAP, otherwise just continue carefully. If you'd like to get in touch with someone to schedule recover please continue to the support page."
                sideLink={<Link to="/support" className="button">Support</Link>}
              />}
            />
            <Route
              exact
              path="/notifications/details/3"
              render={() => <FormalDetails
                loggedIn={this.state.loggedIn}
                title="Release Form Reminder"
                date="Due by: Friday, December 7th, 2018 | End of day"
                sideText="If you still have a release form to turn in please turn it in or you wont be able to benefit from it."
                header="Release Form Info"
                infoText="If you still have a release form to turn in please turn it into the administration before the end of the day on December 7th, this form is for those of you who want to benefit from any early release, or field trip release. If you are a senior applying for early release you WILL NOT be able to get early release without this form turned in on time. For any issues contact administration or submit a support form."
                sideLink={<Link to="/support" className="button">Support</Link>}
              />}
            />
            <Route
              exact
              path="/notifications/details/4"
              render={() => <FormalDetails
                loggedIn={this.state.loggedIn}
                title="Successful Turn In"
                date="Thursday, November 22nd, 2018"
                sideText="We have successfully recieved homework #7"
                header="Properties of Logs Homework"
                infoText="Homework has been turned in successfully, it will be graded shortly. Please allow 1-3 days for homework grades to be posted. If you need help with anything please visit the support page."
                sideLink={<Link to="/support" className="button">Support</Link>}
              />}
            />
            <Route
              exact
              path="/notifications/details/5"
              render={() => <FormalDetails
                loggedIn={this.state.loggedIn}
                title="Properties of Logs is Due"
                date="Friday, November 23rd, 2018 | 1st Period"
                sideText="Homework must be turned in no later than class that day."
                header="Homework #7 Information"
                infoText="This homework is about the properties of logs, which was gone over at the beginning of this week in class. You should not need to use any information outside of what was taught in class this week. Please be sure to show all work and include the answer in the answers section for my own quick reference."
              />}
            />
              <Route
                exact
                path="/grades"
                render={() => <Grades loggedIn={this.state.loggedIn} />}
              />
          </div>
          <div className="sidebar">
            <SideBar loggedIn={this.state.loggedIn} />
          </div>
          <Footer loggedIn={this.state.loggedIn} />
        </div>
        <div>
          <Route
            path="/login"
            render={() => <LoginForm updateUser={this.updateUser} />}
          />
          <Route path="/signup" render={() => <Signup />} />
        </div>
      </div>
    );
  }
}

export default App;

