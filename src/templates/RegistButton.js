import React from 'react';
import styled from 'styled-components';
import BlueButton from '../components/common/BlueButton';
import { Link } from 'react-router-dom';

const RegistButton = ({ onClickLoginButton: onClickRegistButton }) => {
  return (
    <Div>
      <Link to={'/login'} style={{ color: '#1a73e8' }}>
        로그인하러 가기
      </Link>
      <BlueButton text={'회원가입'} onClick={onClickRegistButton} />
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

export default RegistButton;
