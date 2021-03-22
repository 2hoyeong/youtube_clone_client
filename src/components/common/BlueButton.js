import React from 'react';
import styled from 'styled-components';

const BlueButton = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

const StyledButton = styled.button`
  color: #fff;
  background-color: #1a73e8;
  height: 100%;
  outline: none;
  border: none;
  padding: 0 24px;
  border-radius: 4px;
  font-size: 14px;
`;

export default BlueButton;
