import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import LoginButton from '../components/common/LoginButton';
import SearchBar from '../components/common/SearchBar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/common/LogoutButton';
import instance from '../lib/apis/instance';
import useAsync from '../lib/hooks/useAsync';

const validateToken = async () => {
  try {
    const response = await instance.get(`/api/v1/user`);
    return response;
  } catch (error) {
    return error.response;
  }
};

const Header = () => {
  const [isLogin, checkToken] = useAsync(validateToken, [], true);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <FlexDiv>
      <Left>
        <Link to="/">
          <Logo height="24px" width="80px" fill="#fff" />
        </Link>
      </Left>
      <Center>
        <SearchBar />
      </Center>
      <Right>{isLogin.data?.status === 200 ? <LogoutButton /> : <LoginButton />}</Right>
    </FlexDiv>
  );
};

const FlexDiv = styled.div`
  display: flex;
  background-color: #252525;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 56px;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

export default Header;
