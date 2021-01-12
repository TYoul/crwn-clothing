import React, { memo } from 'react';
import { CollectionPreviewContainer } from './collection-preview.style.js';

import CollectionItem from '../collection-item/collection-item.component';

export default memo(function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </CollectionPreviewContainer>
  );
});
