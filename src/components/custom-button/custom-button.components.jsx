import React, { memo } from 'react';
import './custom-button.style.scss';

export default memo(function CustomButton({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
});
