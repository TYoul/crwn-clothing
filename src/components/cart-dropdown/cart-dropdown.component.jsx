import React, { memo } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  CartDropdownContainer,
  CartItemContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from './cart-dropdown.style.js';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';

const CartDropDown = memo(function (props) {
  const { cartItems, history, toogleCartHidden } = props;
  return (
    <CartDropdownContainer>
      <CartItemContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemContainer>
      <CartDropdownButton
        onClick={e => {
          toogleCartHidden();
          history.push('/checkout');
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
