import React, { Component } from "react";
import "./Grades.css";
import { Redirect } from "react-router-dom";
import grade from "./grade.json";
import GradesTopInfo from "./GradesTopInfo/GradesTopInfo";
import Collapse from "./Collapse";

class Grades extends Component {
  state = {
    redirectTo: "/login",
    grade,
    newGradebook: [],
    avg: [],
    overdue:[],
    classes:[]
  };

  componentDidMount() {
    //input array from json and group them by 'courseName'
    this.groupCoursebook(grade, "courseName");
  }

  groupCoursebook = (GradeFromJson, groupProperty) => {
    // Grouping logic, refer to W3School .reduce
    GradeFromJson.reduce((reconstructedGradebook, assignment) => {
      let key = assignment[groupProperty];
      if (!reconstructedGradebook[key]) {
        reconstructedGradebook[key] = [];
      }
      if (!reconstructedGradebook[key].includes(assignment)) {
        reconstructedGradebook[key].push(assignment);
      }
      return reconstructedGradebook;
    });
    // remove the unwanted key:values in 0th index
    delete GradeFromJson[0].id;
    delete GradeFromJson[0].courseName;
    delete GradeFromJson[0].assignmentName;
    delete GradeFromJson[0].subject;
    delete GradeFromJson[0].date;
    delete GradeFromJson[0].score;
    delete GradeFromJson[0].category;
    //duplicate the target key:value to an array for later operation
    let allHomework = Object.values(GradeFromJson[0])
    this.setState({classes:Object.keys(GradeFromJson[0])}
    ,()=>console.log(this.state.classes))

    // average calculation
    let avgScoreArray = [];
    for (var i = 0; i < allHomework.length; i++) {
      //react screws things when re-visit the page, avoid re-pushing
      let filtered = allHomework[i].filter(item =>
        Object.keys(item).includes("score" || "overdue")
      );
      console.log(filtered);
      let sum = filtered.reduce(function(sum, assignment) {
        return sum + assignment.score;
      }, 0);
      const average = Math.round(sum / filtered.length);
      avgScoreArray.push(average);
      //set to this.state
      this.setState({ avg: avgScoreArray }, () => console.log(this.state.avg));
    }

    // Overdue (0 score) calculation
    let overdue = [];
    for (var i = 0; i < allHomework.length; i++) {
      let filtered = allHomework[i].filter(item =>
        Object.keys(item).includes("score" || "overdue")
      );
      let undue = filtered.reduce(function(overdueCount, assignment) {
        if (assignment.score == 0) {
          overdueCount += 1;
        }
        return overdueCount;
      }, 0);
      overdue.push(undue);
      this.setState({ overdue: overdue }, () =>
        console.log(this.state.overdue)
      );
    }

    // Making new gradebook
    // make a copy of processed array
    let refinedGrade = allHomework.slice();
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
    this.setState({ newGradebook: refinedGrade }, () =>
      console.log(JSON.stringify(this.state.newGradebook))
    );
  }; //end of groupCoursebook

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

            {/* grade-card */}
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
            {/* end of grade card */}
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
