import React, { Component } from "react";
import "./Grades.css";
import { Redirect } from "react-router-dom";
import grade from "./grade.json";
import GradesTopInfo from "../../GradesTopInfo/GradesTopInfo";

class Grades extends Component {
  state = {
    redirectTo: "/login",
    english: [],
    math: [],
    biology: [],
    geography: []
  };

  componentDidMount() {
    this.gradeFilter();
    console.log(grade);
  }

  gradeFilter = () => {
    this.setState({
      english: grade.filter(course => course.courseName === "English 3")
    });
    this.setState({
      math: grade.filter(course => course.courseName === "Math 3")
    });

    this.setState({
      geography: grade.filter(course => course.courseName === "Geography")
    });
    this.setState({
      biology: grade.filter(course => course.courseName === "Biology")
    });
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
            <div className="card grades-cards">
              <div className="card-content">
                <div className="holder score-holder">
                  <div className="columns">
                    <div className="column is-4">
                      <p className="class-title">
                        {this.state.english.length &&
                          this.state.english[0].courseName}
                      </p>
                    </div>
                    <div className="column is-4">
                      <p className="class-score">
                        {this.state.english.length &&
                          this.state.english[0].score}{" "}
                        -{" "}
                        {this.state.english.length &&
                          this.calculateLetterGrade(
                            this.state.english[0].score
                          )}
                      </p>
                    </div>
                    <div className="column is-4">
                      <p className="view-assignments">
                        <a className="button view-assignments-button">
                          View Assignments
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card grades-cards">
              <div className="card-content">
                <div className="columns">
                  <div className="column is-4">
                    <p className="class-title">
                      {this.state.math.length && this.state.math[0].courseName}
                    </p>
                  </div>
                  <div className="column is-4">
                    <p className="class-score">
                      {this.state.math.length && this.state.math[0].score} -{" "}
                      {this.state.math.length &&
                        this.calculateLetterGrade(this.state.math[0].score)}
                    </p>
                  </div>
                  <div className="column is-4">
                    <p className="view-assignments">
                      <a className="button view-assignments-button">
                        View Assignments
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card grades-cards">
              <div className="card-content">
                <div className="columns">
                  <div className="column is-4">
                    <p className="class-title">
                      {this.state.biology.length &&
                        this.state.biology[0].courseName}
                    </p>
                  </div>

                  <div className="column is-4">
                    <p className="class-score">
                      {this.state.biology.length && this.state.biology[0].score}{" "}
                      -{" "}
                      {this.state.biology.length &&
                        this.calculateLetterGrade(this.state.biology[0].score)}
                    </p>
                  </div>
                  <div className="column is-4">
                    <p className="view-assignments">
                      <a className="button view-assignments-button">
                        View Assignments
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card grades-cards">
              <div className="card-content">
                <div className="columns">
                  <div className="column is-4">
                    <p className="class-title">
                      {this.state.geography.length &&
                        this.state.geography[0].courseName}
                    </p>
                  </div>

                  <div className="column is-4">
                    <p className="class-score">
                      {this.state.geography.length &&
                        this.state.geography[0].score}{" "}
                      -{" "}
                      {this.state.geography.length &&
                        this.calculateLetterGrade(
                          this.state.geography[0].score
                        )}
                    </p>
                  </div>
                  <div className="column is-4">
                    <p className="view-assignments">
                      <a className="button view-assignments-button">
                        View Assignments
                      </a>
                    </p>
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
export default Grades;
