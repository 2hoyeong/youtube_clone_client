import React from 'react';
import StyledInput from '../common/StyledInput';

const PasswordInput = () => {
  return (
    <>
      <StyledInput placeholder={'비밀번호'} type={'password'} style={{ marginTop: '8px' }} />
    </>
  );
};

export default PasswordInput;
