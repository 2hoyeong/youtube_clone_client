import React from 'react';
import styled from 'styled-components';
import IdInput from '../components/login/IdInput';
import PasswordInput from '../components/login/PasswordInput';

const IdPasswordInput = ({ onChangeIdInput, onChangePasswordInput, onPressEnter }) => {
  const enterKeyPressEvent = (event) => {
    if (event.key === 'Enter') onPressEnter();
  };
  return (
    <InputDiv>
      <IdInput onChange={onChangeIdInput} onPressEnter={enterKeyPressEvent} />
      <PasswordInput onChange={onChangePasswordInput} onPressEnter={enterKeyPressEvent} />
    </InputDiv>
  );
};

const InputDiv = styled.div`
  & > input {
    margin-top: 8px;
  }
`;

export default IdPasswordInput;
