import React, { Component } from 'react';
import './NewGraditude.css';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

export default class NewGraditude extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'Success';
    else if (length > 5) return 'This is probably too Short';
    else if (length > 0) return 'Anyone really typing?';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="NewGraditude">
          <h2>Please send out some Gratitude</h2>
          <form>
            <FormGroup
              controlId="formNameText"
              validationState={this.getValidationState()}
            >
              I'm gratful to:
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter a Name, Thing, or Whatever you feel is needed"
                onChange={this.handleChange}
              />
            </FormGroup>
            for
            <FormGroup
              controlId="formGratitudeText"
              validationState={this.getValidationState()}
            >
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="What are you grateful for?"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button bsStyle="success">Send your Gratitude!</Button>
          </form>
      </div>
    );
  }
};
