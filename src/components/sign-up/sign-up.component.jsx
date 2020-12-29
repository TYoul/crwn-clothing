import React, { PureComponent } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

export default class SignUp extends PureComponent {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassworld: '',
    };
  }
  render() {
    const { displayName, email, password, confirmPassworld } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={e => this.handleSubmit(e)}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={e => this.handleChange(e)}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={e => this.handleChange(e)}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={e => this.handleChange(e)}
            label="Password"
            required
          />
          <FormInput
            type="passworld"
            name="confirmPassworld"
            value={confirmPassworld}
            onChange={e => this.handleChange(e)}
            label="Confirm Passworld"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { displayName, email, password, confirmPassworld } = this.state;
    if (password !== confirmPassworld) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassworld: '',
      });
    } catch (error) {
      console.error(error);
    }
  }
}
