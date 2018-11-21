import React, { Component } from "react";
import "./Grades.css";
import { Redirect } from "react-router-dom";
import grade from "./grade.json";

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
            <div className="columns grades-main-columns">
              <div className="column is-6">
                <div className="card grades-cards">
                  <header className="card-header">
                    <div className="holder course-name-holder">
                      <h1 className="title is-1" id="class-title">
                        {this.state.english.length &&
                          this.state.english[0].courseName}
                      </h1>
                    </div>
                  </header>
                  <div className="card-content">
                    <div className="holder score-holder">
                      <div className="level is-mobile">
                        <div className="level-item">
                          <h1 className="title is-1" id="class-title">
                            {this.state.english.length &&
                              this.state.english[0].score}
                            /
                            {this.state.english.length &&
                              this.calculateLetterGrade(
                                this.state.english[0].score
                              )}
                          </h1>
                        </div>
                        <div className="level-item">
                          <h1 className="title is-1" id="class-title">
                            <a className="button view-assignments-button">
                              View Assignments
                            </a>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="card grades-cards">
                  <header className="card-header">
                    <div className="holder course-name-holder">
                      <h1 className="title is-1" id="class-title">
                        {this.state.math.length &&
                          this.state.math[0].courseName}
                      </h1>
                    </div>
                  </header>
                  <div className="card-content">
                    <div className="holder score-holder">
                      <div className="level is-mobile">
                        <div className="level-item">
                          <h1 className="title is-1" id="class-title">
                            {this.state.math.length && this.state.math[0].score}
                            /A
                          </h1>
                        </div>
                        <div className="level-item">
                          <h1 className="title is-1" id="class-title">
                            <a className="button view-assignments-button">
                              View Assignments
                            </a>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <div className="card grades-cards">
                  <header className="card-header">
                    <div className="holder course-name-holder">
                      <h1 className="title is-1" id="class-title">
                        {this.state.biology.length &&
                          this.state.biology[0].courseName}
                      </h1>
                    </div>
                  </header>
                  <div className="card-content">
                    <div className="holder score-holder">
                      <div className="level is-mobile">
                        <div className="level-item">
                          <h1 className="title is-1" id="class-title">
                            {this.state.biology.length &&
                              this.state.biology[0].score}
                            /A
                          </h1>
                        </div>
                        <div className="level-item">
                          <h1 className="title is-1" id="class-title">
                            <a className="button view-assignments-button">
                              View Assignments
                            </a>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="card grades-cards">
                  <header className="card-header">
                    <div className="holder course-name-holder">
                      <h1 className="title is-1" id="class-title">
                        {this.state.geography.length &&
                          this.state.geography[0].courseName}
                      </h1>
                    </div>
                  </header>
                  <div className="card-content">
                    <div className="holder score-holder">
                      <div className="level is-mobile">
                        <div className="level-item">
                          <h1 className="title is-1" id="class-title">
                            {this.state.geography.length &&
                              this.state.geography[0].score}
                            /A
                          </h1>
                        </div>
                        <div className="level-item">
                          <h1 className="title is-1" id="class-title">
                            <a className="button view-assignments-button">
                              View Assignments
                            </a>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal">
              <div className="modal-background" />
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Modal title</p>
                  <button className="delete" aria-label="close" />
                </header>
                <section className="modal-card-body">
                  {this.state.math.map(assignment => (
                    <h1 className="title">{assignment.assignmentName}</h1>
                  ))}
                </section>
                <footer className="modal-card-foot">
                  <button className="button is-success">Save changes</button>
                  <button className="button">Cancel</button>
                </footer>
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
