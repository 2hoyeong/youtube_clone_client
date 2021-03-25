import React from 'react';
import StyledInput from '../common/StyledInput';

const PasswordInput = ({ onChange }) => {
  return (
    <>
      <StyledInput placeholder={'비밀번호'} type={'password'} onChange={onChange} />
    </>
  );
};

export default PasswordInput;
