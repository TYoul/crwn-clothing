import React, { PureComponent } from 'react';
import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';

export default class SignIn extends PureComponent {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with with youer email and passworld</span>
        <form onSubmit={event => this.handleSubmit(event)}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={event => this.handleChange(event)}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={event => this.handleChange(event)}
            label="password"
            required
          />
          <CustomButton type="submit">SIGN IN</CustomButton>
        </form>
      </div>
    );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  }
}
