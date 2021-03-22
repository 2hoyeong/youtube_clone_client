import React from 'react';
import styled from 'styled-components';
import IdPasswordInput from '../templates/IdPasswordInput';
import LoginRegistButton from '../templates/LoginRegistButton';

const Login = () => {
  return (
    <MaxDiv>
      <FlexDiv>
        <TitleDiv>로그인</TitleDiv>
        <DescDiv>Youtube로 이동</DescDiv>
        <IdPasswordInput />
        <div>
          <BlueSpan>아이디를 잊으셨나요?</BlueSpan>
          <br />내 컴퓨터가 아닌가요? 게스트 모드를 사용하여 비공개로 로그인하세요. <BlueSpan>자세히 알아보기</BlueSpan>
        </div>
        <LoginRegistButton />
      </FlexDiv>
    </MaxDiv>
  );
};

const MaxDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 450px;
  min-height: 500px;
  padding: 48px 40px 36px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  & > * {
    margin: 10px 0;
  }
`;

const TitleDiv = styled.div`
  color: #202124;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3333;
  padding-top: 16px;
`;

const DescDiv = styled.div`
  color: #202124;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.5;
  padding-top: 8px;
`;

const BlueSpan = styled.span`
  color: #1a73e8;
`;

export default Login;
