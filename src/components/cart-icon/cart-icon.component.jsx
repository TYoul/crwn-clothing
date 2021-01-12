import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from './cart-icon.style.js';

import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = memo(function ({ toogleCartHidden, itemCount }) {
  return (
    <CartIconContainer onClick={toogleCartHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
