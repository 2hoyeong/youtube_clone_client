import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RegistInputs from '../templates/RegistInputs';
import RegistButton from '../templates/RegistButton';
import useAsync from '../lib/hooks/useAsync';
import instance from '../lib/apis/instance';

const requestRegist = (registInfo) => async () => {
  try {
    const response = await instance.post(`/api/v1/user/signup`, registInfo);
    return response;
  } catch (error) {
    return error.response;
  }
};

const Regist = () => {
  const [registInfo, setRegistInfo] = useState({
    id: '',
    password: '',
    name: '',
  });

  const [regist, doRegist] = useAsync(requestRegist(registInfo), [], true);

  const onChangeIdInput = (event) => {
    const { value } = event.target;
    setRegistInfo({ ...registInfo, id: value });
  };

  const onChangePasswordInput = (event) => {
    const { value } = event.target;
    setRegistInfo({ ...registInfo, password: value });
  };

  const onChangeNameInput = (event) => {
    const { value } = event.target;
    setRegistInfo({ ...registInfo, name: value });
  };

  const isRegistSuccess = (status) => {
    return status === 200;
  };

  useEffect(() => {
    if (regist.data) {
      const { status, data } = regist.data;
      if (!isRegistSuccess(status)) {
        alert(data.message);
      } else {
        alert('회원가입이 완료되었습니다.');
        window.location = '/login';
      }
    }
  }, [regist.data]);

  return (
    <MaxDiv>
      <FlexDiv>
        <TitleDiv>Google 계정 만들기</TitleDiv>
        <DescDiv>Youtube로 이동</DescDiv>
        <RegistInputs
          onChangeIdInput={onChangeIdInput}
          onChangePasswordInput={onChangePasswordInput}
          onChangeNameInput={onChangeNameInput}
        />
        <div>
          <br />
          하나의 계정으로 모든 Google 서비스를 이용할 수 있습니다.
        </div>
        <RegistButton onClick={doRegist} />
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
