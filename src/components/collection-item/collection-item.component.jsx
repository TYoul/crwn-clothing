import React, { memo } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.style.js';

const CollectionItem = memo(function ({ item, addItem }) {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} className="image" />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        ADD to cart
      </AddButton>
    </CollectionItemContainer>
  );
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
