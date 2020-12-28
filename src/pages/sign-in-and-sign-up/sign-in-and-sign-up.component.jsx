import React, { memo } from 'react';
import './sign-in-and-sign-up.style.scss';

import SignIn from '../../components/sign-in/sign-in.component';

export default memo(function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
});