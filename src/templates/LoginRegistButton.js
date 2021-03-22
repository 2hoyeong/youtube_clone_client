import React from 'react';
import styled from 'styled-components';
import BlueButton from '../components/common/BlueButton';
import { Link } from 'react-router-dom';

const LoginRegistButton = () => {
  return (
    <Div>
      <Link to={'/regist'} style={{ color: '#1a73e8' }}>
        계정 만들기
      </Link>
      <BlueButton text={'로그인'} />
    </Div>
  );
};

const Div = styled.div`
  height: 48px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default LoginRegistButton;
