import React, { Component } from "react";
import "./Grades.css";
import { Redirect } from "react-router-dom";
import grade from "./grade.json";
import GradesTopInfo from "./GradesTopInfo/GradesTopInfo";

class Grades extends Component {
  state = {
    redirectTo: "/login",
    english: [],
    math: [],
    biology: [],
    geography: [],
    grade,
    newGradebook: []
  };

  componentDidMount() {
    this.gradeFilter();
    this.initializeGradebook()
  }

  initializeGradebook = () => {
    this.groupCoursebook(grade, 'courseName')
  }

  groupCoursebook = (GradeFromJson, groupProperty) => {
    GradeFromJson.reduce((reconstructedGradebook, assignment) => {
      let key = assignment[groupProperty];
      if (!reconstructedGradebook[key]) {
        reconstructedGradebook[key] = [];
      }
      reconstructedGradebook[key].push(assignment);
      return reconstructedGradebook;
    })
    // if anyone think of a better way to reduce the grade array
    // feel free to make change
    delete GradeFromJson[0].id;
    delete GradeFromJson[0].courseName;
    delete GradeFromJson[0].assignmentName;
    delete GradeFromJson[0].subject;
    delete GradeFromJson[0].date;
    delete GradeFromJson[0].score;
    delete GradeFromJson[0].category;

    // this.setState({ newGradebook: GradeFromJson[0] })

    let allHomework = Object.values(GradeFromJson[0])

    let avgScoreArray = [];
    for (var i = 0; i < allHomework.length; i++) {
      let sum = allHomework[i].reduce(function (sum, assignment) {
        return sum + assignment.score;
      }, 0);
      const average = Math.round(sum / allHomework[i].length);
      avgScoreArray.push(average)

      this.setState({ avg: avgScoreArray })
    }

    console.log('this is :' + JSON.stringify(allHomework))
    console.log(avgScoreArray)

    let refinedGrade = allHomework.slice()

    for (var i = 0; i<refinedGrade.length;i++){
      refinedGrade[i].unshift({average:avgScoreArray[i]})
    }


    console.log('this is the last:' + JSON.stringify(refinedGrade))
    this.setState({ newGradebook: refinedGrade })
  }

  gradeFilter = () => {
    this.setState({
      english: grade.filter(course => course.courseName === "English 3")
    }, () => (console.log(JSON.stringify(this.state.newGradebook))));
    this.setState({
      math: grade.filter(course => course.courseName === "Math 3")
    }, () => (console.log('math: ' + this.state.math)));

    this.setState({
      geography: grade.filter(course => course.courseName === "Geography")
    }, () => (console.log('geo: ' + this.state.geography)));
    this.setState({
      biology: grade.filter(course => course.courseName === "Biology")
    }, () => (console.log('nbio: ' + this.state.biology)));
  };

  calculateLetterGrade = numGrade => {
    let letterGrade = "";
    if (numGrade >= 90) letterGrade = "A";
    else if (numGrade >= 80) letterGrade = "B";
    else if (numGrade >= 70) letterGrade = "C";
    else if (numGrade >= 60) letterGrade = "D";
    else if (numGrade < 50) letterGrade = "F";
    return letterGrade;
  };

  handleOnClick = (e) => {

  }

  render() {
    const loggedIn = this.props.loggedIn;

    return (
      <div>
        {loggedIn ? (
          <div className="grades-page-holder">
            <GradesTopInfo />
            <div className="card grades-cards" id="grades-title-card">
              <div className="card-content" id="grades-title-card-content">
                <div className="columns">
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
                      <p className="class-score">Details</p>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
            {/* grade-card */}

            {Object.values(this.state.newGradebook).map(subject => (
              <div className="card grades-cards">
                <div className="card-content">
                  <div className="holder score-holder">
                    <div className="columns">
                      <div className="column is-4">
                        <p className="class-title">
                          {/* get the subject name */}
                          {subject[1].courseName}

                        </p>
                      </div>
                      <div className="column is-4">
                        <p className="class-score">
                          {subject[0].average}{" "}
                          -{" "}
                          {this.state.english.length &&
                            this.calculateLetterGrade(
                              subject[0].average
                            )}
                        </p>
                      </div>
                      <div className="column is-4">
                        <p className="view-assignments">
                          <span
                            className="button view-assignments-button"
                            name={subject[0].courseName}
                            onClick={this.handleOnClick}
                          >
                            View Assignments
                         </span>
                        </p>
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

