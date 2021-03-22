import React from 'react';
import styled from 'styled-components';
import IdInput from '../components/login/IdInput';
import PasswordInput from '../components/login/PasswordInput';

const IdPasswordInput = () => {
  return (
    <InputDiv>
      <IdInput />
      <PasswordInput />
    </InputDiv>
  );
};

const InputDiv = styled.div`
  & > input {
    margin-top: 8px;
  }
`;

export default IdPasswordInput;
