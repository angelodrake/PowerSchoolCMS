import React, { Component } from "react";
import "./Calendar.css";
import { Redirect } from "react-router-dom";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "/login"
    };
    // this.monthToggler = this.monthToggler.bind(this)
  }
  monthToggler = () => {
    document.getElementById("calendar-nov").classList.toggle("not-viewing");
    document.getElementById("calendar-dec").classList.toggle("not-viewing");
    document.getElementById("calendar-nov").classList.toggle("viewing");
    document.getElementById("calendar-dec").classList.toggle("viewing");
  };

  componentDidMount() {
    const underlinedDays = document.getElementsByClassName("underlined");
    for (let i = 0; i < underlinedDays.length; i++) {
      let underlinedDay = underlinedDays[i];
      underlinedDay.onclick = this.showEvents;
    }
  }
  showEvents = e => {
    let singleDayArray = document.getElementsByClassName("events-showing");
    let singleDay = singleDayArray[0];
    singleDay.classList.remove("events-showing");
    e.target.classList.add("events-showing");
    let daysEvents = e.target.getAttribute("data-events");
    let daysEventsArray = daysEvents.split(",");
    document.getElementById("events-list").innerHTML = "";
    for (let i = 0; i < daysEventsArray.length; i++) {
      let node = document.createElement("LI");
      let textnode = document.createTextNode(daysEventsArray[i]);
      node.appendChild(textnode);
      document.getElementById("events-list").appendChild(node);
    }
    let eventsDay = e.target.innerHTML;

    let eventsDaySpan = document.getElementById("events-day-span");
    while (eventsDaySpan.firstChild) {
      eventsDaySpan.removeChild(eventsDaySpan.firstChild);
    }
    eventsDaySpan.appendChild(document.createTextNode(eventsDay));

    const novCalendar = document.getElementById("calendar-nov");
    const decCalendar = document.getElementById("calendar-dec");

    if (novCalendar.contains(e.target)) {
      console.log("hi");
      var eventsMonth = "11";
    } else if (decCalendar.contains(e.target)) {
      var eventsMonth = "12";
      console.log("lol");
    }
    var eventsMonthSpan = document.getElementById("events-month-span");
    while (eventsMonthSpan.firstChild) {
      eventsMonthSpan.removeChild(eventsMonthSpan.firstChild);
    }
    eventsMonthSpan.appendChild(document.createTextNode(eventsMonth));
  };

  render() {
    const loggedIn = this.props.loggedIn;

    return (
      <div>
        {loggedIn ? (
          <div className="calendar-page-holder">
            <div className="title-holder has-text-centered">
              <h1 className="event-title has-text-white">
                Events Calendar Fall 2018
              </h1>
            </div>
            <div className="columns calendar-columns">
              <div className="column is-8">
                <div className="calendar viewing" id="calendar-nov">
                  <div className="month">
                    <ul className="month-nav">
                      <li
                        className="prev month-toggler"
                        onClick={this.monthToggler}
                      >
                        &#10094;
                      </li>
                      <li
                        className="next month-toggler"
                        onClick={this.monthToggler}
                      >
                        &#10095;
                      </li>
                      <li>
                        November
                        <br />
                        <span style={{ fontSize: "18px" }}>2018</span>
                      </li>
                    </ul>
                  </div>

                  <ul className="weekdays">
                    <li>Su</li>
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                  </ul>

                  <ul className="days">
                    <li>
                      <span className="non-month-days">28</span>
                    </li>
                    <li>
                      <span className="non-month-days">29</span>
                    </li>
                    <li>
                      <span className="non-month-days">30</span>
                    </li>
                    <li>
                      <span className="non-month-days">31</span>
                    </li>
                    <li>1</li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Football vs East Meck"
                      >
                        2
                      </span>
                    </li>
                    <li>3</li>
                    <li>4</li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Biology Test Genetics, Girls Basketball vs West Charlotte"
                      >
                        5
                      </span>
                    </li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Math 3 Polynomials Test, Boys Basketball vs Hough"
                      >
                        6
                      </span>
                    </li>
                    <li>7</li>
                    <li>8</li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Geography Project Due, Boys Basketball vs West Mecklenburg, Football vs West Charlotte"
                      >
                        9
                      </span>
                    </li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>
                      <span
                        className="underlined"
                        data-events="English 3 Test on 1984"
                      >
                        13
                      </span>
                    </li>
                    <li>14</li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Geography of Africa Test"
                      >
                        15
                      </span>
                    </li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Football Away vs Ardrey Kell"
                      >
                        16
                      </span>
                    </li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>
                      <span
                        className="underlined Math"
                        data-events="Math 3 Logarithms Test"
                      >
                        22
                      </span>
                    </li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Football vs Butler, Biology Evolution Exam"
                      >
                        23
                      </span>
                    </li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>
                      <span
                        className="active underlined events-showing"
                        data-events="English Project Due, Girls Basketball vs South Mecklenburg"
                      >
                        27
                      </span>
                    </li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Thanksgiving Break"
                      >
                        28
                      </span>
                    </li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Thanksgiving Break"
                      >
                        29
                      </span>
                    </li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Thanksgiving Break"
                      >
                        30
                      </span>
                    </li>
                    <li>
                      <span className="non-month-days">1</span>
                    </li>
                  </ul>
                </div>
                <div className="calendar not-viewing" id="calendar-dec">
                  <div className="month">
                    <ul className="month-nav">
                      <li
                        className="prev month-toggler"
                        onClick={this.monthToggler}
                      >
                        &#10094;
                      </li>
                      <li
                        className="next month-toggler"
                        onClick={this.monthToggler}
                      >
                        &#10095;
                      </li>
                      <li>
                        December
                        <br />
                        <span style={{ fontSize: "18px" }}>2018</span>
                      </li>
                    </ul>
                  </div>

                  <ul className="weekdays">
                    <li>Su</li>
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                  </ul>

                  <ul className="days">
                    <li>
                      <span className="non-month-days">25</span>
                    </li>
                    <li>
                      <span className="non-month-days">26</span>
                    </li>
                    <li>
                      <span className="non-month-days">27</span>
                    </li>
                    <li>
                      <span className="non-month-days">28</span>
                    </li>
                    <li>
                      <span className="non-month-days">29</span>
                    </li>
                    <li>
                      <span className="non-month-days">30</span>
                    </li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Math 3 Trigonometry Test"
                      >
                        6
                      </span>
                    </li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Biology Cells Test"
                      >
                        7
                      </span>
                    </li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>
                      <span
                        className="underlined"
                        data-events="English 3 Research Paper Due"
                      >
                        11
                      </span>
                    </li>
                    <li>12</li>
                    <li>13</li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Geography of Europe Test, Girls Baskebtball vs Providence"
                      >
                        14
                      </span>
                    </li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Winter Break, Boys Basketball Tournament"
                      >
                        19
                      </span>
                    </li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Winter Break, Boys Basketball Tournament"
                      >
                        20
                      </span>
                    </li>
                    <li>
                      <span
                        className="underlined"
                        data-events="Winter Break, Boys Basketball Tournament"
                      >
                        21
                      </span>
                    </li>
                    <li>22</li>
                    <li>23</li>
                    <li>
                      <span className="underlined" data-events="Winter Break">
                        24
                      </span>
                    </li>
                    <li>
                      <span className="underlined" data-events="Winter Break">
                        25
                      </span>
                    </li>
                    <li>
                      <span className="underlined" data-events="Winter Break">
                        26
                      </span>
                    </li>
                    <li>
                      <span className="underlined" data-events="Winter Break">
                        27
                      </span>
                    </li>
                    <li>
                      <span className="underlined" data-events="Winter Break">
                        28
                      </span>
                    </li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                    <li>
                      <span className="non-month-days">1</span>
                    </li>
                    <li>
                      <span className="non-month-days">2</span>
                    </li>
                    <li>
                      <span className="non-month-days">3</span>
                    </li>
                    <li>
                      <span className="non-month-days">4</span>
                    </li>
                    <li>
                      <span className="non-month-days">5</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="card days-events-card">
                  <header className="card-header days-events-card-header">
                    <p className="days-events-date card-header-title">
                      Events for &nbsp; <span id="events-month-span"> 11</span>/
                      <span id="events-day-span">27</span>/18
                    </p>
                  </header>
                  <hr className="days-events-card-hr" />
                  <div className="card-content">
                    <div className="days-events-holder">
                      <ul id="events-list">
                        <li>Project 3 Presentation (10:00-14:30)</li>
                        <li>Last day of class before Thanksgiving break.</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
    );
  }
}
export default Calendar;
