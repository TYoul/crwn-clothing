import React, { memo } from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './cart-item.style.js';

export default memo(function CartItem({
  item: { imageUrl, price, name, quantity },
}) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
});
