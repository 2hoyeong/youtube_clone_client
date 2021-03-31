import React from 'react';
import StyledInput from '../common/StyledInput';

const IdInput = ({ onChange }) => {
  return (
    <>
      <StyledInput placeholder={'아이디'} onChange={onChange} />
    </>
  );
};

export default IdInput;
