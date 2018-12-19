import React, { Component } from "react";
import "./Grades.css";
import { Redirect } from "react-router-dom";
// import grade from "./grade.json";
import GradesTopInfo from "./GradesTopInfo/GradesTopInfo";
import Collapse from "./Collapse";
import API from '../../../utils/API'
import moment from 'moment'

class Grades extends Component {
  state = {
    redirectTo: "/login",
    grade: [],
    newGradebook: [],
    avg: [],
    overdue: [],
    classes: [],
    assignments: [],
    year: 2018
  };

  componentDidMount() {
    //input array from json and group them by 'courseName'
    this.loadAllGradeBook()
  }

  loadAllGradeBook = () => {
    let name = this.props.username
    API.getAllGradesByStd(name)
      .then(res => {
        this.setState({ grade: res.data }, () => this.preCalculate())
      }).catch(err => console.log(err))
  }

  preCalculate() {
    return this.groupCoursebook();
  }

  groupCoursebook = () => {
    // Rearrange gradebook
    let allHomeworkBySubject = this.state.grade
    .filter(assignment=> moment(assignment.date).format('YYYY') == this.state.year)
    .reduce(function (r, a) {
      r[a.courseName] = r[a.courseName] || [];
      r[a.courseName].push(a);
      return r;
    }, Object.create(null));

    let classes = Object.keys(allHomeworkBySubject);
    let assignments = Object.values(allHomeworkBySubject); // An 

    // average calculation
    let avgScoreArray = [];
    for (var i = 0; i < assignments.length; i++) {
      let filtered = assignments[i].filter(item =>
        Object.keys(item).includes("score" || "overdue")
      );
      let sum = filtered.reduce(function (sum, assignment) {
        return sum + assignment.score;
      }, 0);
      const average = Math.round(sum / Object.values(allHomeworkBySubject)[i].length);
      avgScoreArray.push(average);
    }

    // Overdue (0 score) calculation
    let overdue = [];
    for (var i = 0; i < assignments.length; i++) {
      let filtered = assignments[i].filter(item =>
        Object.keys(item).includes("score" || "overdue")
      );
      let undue = filtered.reduce(function (overdueCount, assignment) {
        if (assignment.score == 0) {
          overdueCount += 1;
        }
        return overdueCount;
      }, 0);
      overdue.push(undue);
    }

    // Assemble new gradebook
    // make a copy of processed array
    let refinedGrade = assignments.slice();
    for (var i = 0; i < refinedGrade.length; i++) {
      let key = refinedGrade[i];
      // push the average score as the 0th assignment
      if (!Object.keys(key[0]).includes("average")) {
        refinedGrade[i].unshift({ average: avgScoreArray[i] });
      }
      // push the # of overdue as the last assignment
      if (!Object.keys(key[key.length - 1]).includes("overdue")) {
        refinedGrade[i].push({ overdue: overdue[i] });
      }
    }
 
    //set states
    this.setState({ newGradebook: refinedGrade }, () =>
      console.log('Gradebook: ' +JSON.stringify(this.state.newGradebook)));
    this.setState({ classes: classes }
      , () => console.log('classes: ' + this.state.classes))
    this.setState({ assignments: assignments }
      , () => console.log('assignments: ' + JSON.stringify(this.state.assignments)))
    this.setState({ avg: avgScoreArray }, () => console.log('avg: '+this.state.avg));
    this.setState({ overdue: overdue }, () => console.log('overdue: '+this.state.overdue));
  };

  //Jeremiah's gradeconversion
  calculateLetterGrade = numGrade => {
    let letterGrade = "";
    if (numGrade >= 90) letterGrade = "A";
    else if (numGrade >= 80) letterGrade = "B";
    else if (numGrade >= 70) letterGrade = "C";
    else if (numGrade >= 60) letterGrade = "D";
    else if (numGrade < 50) letterGrade = "F";
    return letterGrade;
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      year: value
    },()=>console.log(this.state.year))
    this.loadAllGradeBook()
   
  }


  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <div className="grades-page-holder">
            <GradesTopInfo
              average={this.state.avg}
              course={this.state.classes}
              totalScore={this.state.avg.reduce((a, b) => (a + b), 0)}
              numClass={this.state.avg.length}
            />

            <div className='select-year'>
            <p>Select an academic year</p>
              <select
                name="year"
                style={{ width: 8 + 'rem' }}
                onChange={this.handleInputChange}
              >
                <option disabled="disabled" value={null}>Select year</option>
                <option value="2018" selected="selected" >2018</option>
                <option value="2017">2017</option>
              </select>
          
            </div>
            
            <div className="card grades-cards" id="grades-title-card">
              <div className="card-content" id="grades-title-card-content">
                <div className="columns is-mobile">
                  <div className="column is-4">
                    <strong>
                      <p className="class-title">Class</p>
                    </strong>
                  </div>
                  <div className="column is-4">
                    <strong>
                      <p className="class-score">Grade</p>
                    </strong>
                  </div>
                  <div className="column is-4">
                    <strong>
                      {" "}
                      <p className="class-score">Overdue</p>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
           
            {Object.values(this.state.newGradebook).map(subject => (
              <div>
                <div className="card grades-cards">
                  <div className="card-content">
                    <div className="holder score-holder">
                      <div className="columns is-mobile">
                        <div className="column is-4">
                          <p
                            className="class-title"
                            key={subject[1].courseName}
                          >
                            {subject[1].courseName}
                          </p>
                        </div>
                        <div className="column is-4">
                          <p
                            className="class-score"
                            key={subject[1].courseName}
                          >
                            {subject[0].average} -{" "}
                            {this.calculateLetterGrade(subject[0].average)}
                          </p>
                        </div>
                        <div className="column is-4">
                          <p
                            className="class-overdue"
                            key={subject[1].courseName}
                          >
                            {subject[subject.length - 1].overdue}
                          </p>
                        </div>
                      </div>
                      <div className="columns is-mobile">
                        <div className="column is-12">
                          <Collapse info={{ subject }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          
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
export default Grades;
