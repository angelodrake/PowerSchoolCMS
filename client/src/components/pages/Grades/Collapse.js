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
        this.setState({
            assignment: assignmentArray
        }
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

        )
    }

}

export default example
