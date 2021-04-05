import React from 'react';
import StyledInput from '../common/StyledInput';

const EmailInput = ({ onChange }) => {
  return (
    <>
      <StyledInput placeholder={'이메일'} onChange={onChange} type={'email'} />
    </>
  );
};

export default EmailInput;
