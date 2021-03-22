import React from 'react';
import { ReactComponent as User } from '../../assets/user.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to={`/login`}>
      <FlexDiv>
        <TestDiv>
          <User width="24px" height="24px" fill="#3ea6ff" />
          <LoginLabel>로그인</LoginLabel>
        </TestDiv>
      </FlexDiv>
    </Link>
  );
};

const FlexDiv = styled.div`
  display: flex;
`;

const LoginLabel = styled.span`
  font-weight: 500;
  margin-left: 8px;
`;

const TestDiv = styled.div`
  display: flex;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  padding: 5px 11px;
  margin-left: auto;
  align-items: center;
`;

export default LoginButton;
