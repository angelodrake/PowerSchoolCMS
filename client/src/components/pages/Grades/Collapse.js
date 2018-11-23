import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import "./Grades.css";

class example extends Component {
    state = {
        isCollapse: false,
        assignment: []
    }

    toggle = () => {
        this.setState({
            isCollapse: !this.state.isCollapse
        });
        let assignmentArray = this.props.info.subject.filter(item => Object.keys(item).includes('score'))
        // console.log('this is' + JSON.stringify(assignmentArray))
        this.setState({
            assignment: assignmentArray
        }
        // , () => console.log(this.state.assignment)
        )
    }

    render() {
        return (

            <div>
                <p className="view-assignments">
                    <span
                        className="button view-assignments-button"
                        onClick={this.toggle}
                    >View Assignments
                     </span>
                </p>

                <div className="card grades-cards" style={{ width: '100vw' }}>

                    <Collapse
                        name={this.props.info.courseName}
                        isOpen={this.state.isCollapse}>
                        <Card>
                            <CardBody>
                                {this.props.info.courseName}

                                {this.state.assignment.map(assignment => (
                                    <div>
                                        <div>
                                            {assignment.assignmentName}
                                        </div>
                                        <div>
                                            {assignment.date}
                                        </div>
                                        <div>
                                            {assignment.score}
                                        </div>
                                    </div>
                                ))}

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>
        )
    }

}

export default example
