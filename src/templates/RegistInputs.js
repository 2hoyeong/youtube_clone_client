import React from 'react';
import styled from 'styled-components';
import IdInput from '../components/regist/IdInput';
import PasswordInput from '../components/regist/PasswordInput';
import NameInput from '../components/regist/NameInput';

const RegistInputs = ({ onChangeIdInput, onChangePasswordInput, onChangeNameInput }) => {
  return (
    <InputDiv>
      <IdInput onChange={onChangeIdInput} />
      <PasswordInput onChange={onChangePasswordInput} />
      <NameInput onChange={onChangeNameInput} />
    </InputDiv>
  );
};

const InputDiv = styled.div`
  & > input {
    margin-top: 8px;
  }
`;

export default RegistInputs;
