import React from 'react';
import { connect } from 'react-redux'
import {createStructuredSelector} from "reselect";
import { selectDirectory } from "../../redux/directory/directory.selector";
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) => {
  return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectory
})

export default connect(mapStateToProps,null)(Directory);
