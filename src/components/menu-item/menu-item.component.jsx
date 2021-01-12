import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
} from './menu-item.style.js';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <MenuItemContainer
    size={size}
    onClick={e => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      imageUrl={imageUrl}
      className="background-image"
    />
    <ContentContainer>
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
