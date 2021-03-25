import React, { useState } from 'react';
import styled from 'styled-components';
import IdInput from '../components/login/IdInput';
import PasswordInput from '../components/login/PasswordInput';

const IdPasswordInput = () => {
  const [user, setUser] = useState({
    id: '',
    password: '',
  });

  const onChangeIdInput = (event) => {
    setUser({ ...user, id: event.target.value });
  };

  const onChangePasswordInput = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  return (
    <InputDiv>
      <IdInput onChange={onChangeIdInput} />
      <PasswordInput onChange={onChangePasswordInput} />
    </InputDiv>
  );
};

const InputDiv = styled.div`
  & > input {
    margin-top: 8px;
  }
`;

export default IdPasswordInput;
