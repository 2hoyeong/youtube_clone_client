import React from 'react';
import StyledInput from '../common/StyledInput';

const IdInput = ({ onChange, onPressEnter }) => {
  return (
    <>
      <StyledInput placeholder={'아이디'} onChange={onChange} onKeyPress={onPressEnter} />
    </>
  );
};

export default IdInput;
