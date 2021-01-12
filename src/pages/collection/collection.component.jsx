import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from './collection.style.js';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps, null)(CollectionPage);
