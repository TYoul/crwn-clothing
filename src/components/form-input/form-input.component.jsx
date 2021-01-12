import React, { memo } from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.style.js';

export default memo(function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <GroupContainer className="group">
      <FormInputContainer
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
});
