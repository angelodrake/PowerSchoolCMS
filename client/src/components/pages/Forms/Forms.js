import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Column from '../../Grid/Column';
import Columns from '../../Grid/Columns';
import './Forms.css';
import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import API from '../../../utils/API'



export default class Forms extends React.Component {
  state = {
    redirectTo: "/login",
    forms: [],
    modal: false,
    _id:"",
    imgUrl: "",
    imgName: "",
    isRead: false
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal,
      imgUrl: e.target.value,
      imgName: e.target.name
    })
  }

  componentDidMount() {
    this.loadAllForms()
  };

  loadAllForms = () => {
    API.getAllForms()
      .then(res => {
        this.setState({ forms: res.data })
        console.log(this.state.forms)
      }
      )
      .catch(err => console.log(err));
  }

  handleAsRead = (id) => {

    const readForm = {
      isRead: true
    }

    API.markAsSaved(id, readForm)
      .then(res => {
        this.loadAllForms()
      })
      .catch(err => console.log(err));
    console.log(this.state)
  }


  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <div>
            <Columns>
              <Column size="is-three-fifths formsBuffer">
                {this.state.forms.map(forms => (
                  <div className="formsContainer">
                    <div className="innerContainer">
                      <div className="has-text-centered">
                        <span className="boldSpan">{forms.name}</span><br />
                        <span className="boldSpan">Date: {forms.dateExpire}</span>
                      </div>
                      <div className="break"></div>
                      <div className="field is-grouped is-grouped-centered formButtons">
                        <div className="control">
                          <button className="button is-link"
                            value={forms.imgUrl}
                            name={forms.name}
                            onClick={this.toggle}
                          >View Form</button>
                        </div>
                        <div className="separator"></div>
                        {!forms.isRead ? (
                          <div className="control">
                            <button className="button danger"
                              name={forms.name}
                              onClick={() => this.handleAsRead(forms._id)}
                            >Click to mark as Read</button>
                          </div>
                        ) : (
                            <span className="boldSpan">Marked As Read</span>
                          )}

                      </div>
                    </div>
                  </div>
                ))}

                <Modal isOpen={this.state.modal}
                  toggle={this.toggle}
                >
                  <ModalHeader toggle={this.toggle}
                  >{this.state.imgName}
                  </ModalHeader>
                  <ModalBody>
                    <a href={this.state.imgUrl} target='_blank'>
                      <img src={this.state.imgUrl} alt={this.state.imgName} /></a>
                  </ModalBody>
                </Modal>
              </Column>
            </Columns>
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
