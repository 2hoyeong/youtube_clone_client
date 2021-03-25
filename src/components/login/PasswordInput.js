import React from 'react';
import StyledInput from '../common/StyledInput';

const PasswordInput = ({ onChange, onPressEnter }) => {
  return (
    <>
      <StyledInput placeholder={'비밀번호'} type={'password'} onChange={onChange} onKeyPress={onPressEnter} />
    </>
  );
};

export default PasswordInput;
