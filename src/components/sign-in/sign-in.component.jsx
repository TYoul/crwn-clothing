import React, { PureComponent } from 'react';
import { SignInContainer } from './sign-in.style.js';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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
      <SignInContainer>
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
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </SignInContainer>
    );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }

    this.setState({
      email: '',
      password: '',
    });
  }
}
