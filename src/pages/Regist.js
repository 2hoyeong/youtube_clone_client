import React from 'react';
import styled from 'styled-components';
import RegistInputs from '../templates/RegistInputs';

const Regist = () => {
  return (
    <MaxDiv>
      <FlexDiv>
        <TitleDiv>Google 계정 만들기</TitleDiv>
        <DescDiv>Youtube로 이동</DescDiv>
        <RegistInputs />
        <div>
          <br />
          하나의 계정으로 모든 Google 서비스를 이용할 수 있습니다.
        </div>
        {/* <LoginRegistButton onClickLoginButton={doLogin} /> */}
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

export default Regist;
