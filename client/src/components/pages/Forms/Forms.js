import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Column from '../../Grid/Column';
import Columns from '../../Grid/Columns';
import './Forms.css';
import forms from './form.json';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

export default class Forms extends React.Component {
  state = {
    redirectTo: "/login",
    model: false,
    remarks: "",
    signature: ""
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.name
    }
    this.props.addItem(newItem);
    this.toggle();
  }


  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <div>
            <Columns>
              <Column size="is-three-fifths formsBuffer">
                {forms.map(forms => (
                  <div className="formsContainer">
                    <div className="innerContainer">
                      <div className="has-text-centered">
                        <span className="boldSpan">{forms.name}</span>
                      </div>
                      <div className="break"></div>
                      <div className="field is-grouped is-grouped-centered formButtons">
                        <div className="control">
                          <button className="button is-link"
                            value={forms.name}
                            onClick={this.toggle}
                          >View and Sign Form</button>
                        </div>
                        <div className="separator"></div>
                        <div className="date1">
                          <span className="boldSpan">Date: {forms.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Column>
            </Columns>

            <Modal isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader toggle={this.toggle}
              >Add to shoppping list
                    </ModalHeader>
              <ModalBody>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Label for="item">Item</Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="add shopping item"
                      onChange={this.onChange}
                    />
                    <Button
                      color="dark"
                      style={{ marginTop: '2rem' }}
                      block
                    >
                      Add Item
                            </Button>
                  </FormGroup>
                </Form>
              </ModalBody>
            </Modal>


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
