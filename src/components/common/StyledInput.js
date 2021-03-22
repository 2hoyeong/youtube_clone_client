import React from 'react';
import styled from 'styled-components';

const StyledInput = (child) => {
  return <Input {...child} />;
};

const Input = styled.input`
  color: #202124;
  font-size: 17px;
  height: 28px;
  margin: 1px 1px 0 1px;
  padding: 13px 0;
  border-radius: 4px;
  border: 1px solid #dadce0;
  background-color: transparent;
  outline: none;
  width: 100%;
`;

export default StyledInput;
