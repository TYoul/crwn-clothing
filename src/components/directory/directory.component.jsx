import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectory } from '../../redux/directory/directory.selector';
import { DirectoryMenuContainer } from './directory.style.js';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectory,
});

export default connect(mapStateToProps, null)(Directory);
