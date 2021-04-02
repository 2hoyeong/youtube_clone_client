import React from 'react';
import StyledInput from '../common/StyledInput';

const NameInput = ({ onChange }) => {
  return (
    <>
      <StyledInput placeholder={'이름 또는 별명'} onChange={onChange} />
    </>
  );
};

export default NameInput;
