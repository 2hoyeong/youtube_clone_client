import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import LoginButton from '../components/common/LoginButton';
import Searchbar from '../components/common/Searchbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <FlexDiv>
      <Left>
        <Logo height="24px" width="80px" fill="#fff" />
      </Left>
      <Center>
        <Searchbar />
      </Center>
      <Right>
        <LoginButton />
      </Right>
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
