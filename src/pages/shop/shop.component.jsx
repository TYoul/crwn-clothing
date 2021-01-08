import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectShopItems} from '../../redux/shop/shop.selector'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({collections}) => {
  return (
    <div className="shop-page">
      {collections.map(({id, ...otherCollectionsProps}) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems
})

export default connect(mapStateToProps, null)(ShopPage)
