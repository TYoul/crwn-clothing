import React, { memo } from 'react';
import { CustomButtonContainer } from './custom-button.style.js';

const CustomButton = memo(({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
});

export default CustomButton;
