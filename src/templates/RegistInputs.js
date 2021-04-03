import React from 'react';
import styled from 'styled-components';
import IdInput from '../components/regist/IdInput';
import PasswordInput from '../components/regist/PasswordInput';
import NameInput from '../components/regist/NameInput';

const RegistInputs = () => {
  return (
    <InputDiv>
      <IdInput />
      <PasswordInput />
      <NameInput />
    </InputDiv>
  );
};

const InputDiv = styled.div`
  & > input {
    margin-top: 8px;
  }
`;

export default RegistInputs;
