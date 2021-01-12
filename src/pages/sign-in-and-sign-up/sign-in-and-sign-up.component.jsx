import React, { memo } from 'react';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.style.js';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

export default memo(function SignInAndSignUp() {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
});
