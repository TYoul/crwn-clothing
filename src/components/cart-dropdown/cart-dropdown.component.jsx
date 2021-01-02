import React, { memo } from 'react';
import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custom-button.component';

export default memo(function CartDropDown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
});
