import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Scope } from '../../assets/scope.svg';

const SearchBar = () => {
  return (
    <div>
      <SearchForm>
        <SearchInput autoComplete="off" autoCorrect="off" placeholder="검색" />
        <SearchButton>
          <Scope width="20px" height="20px" fill="rgba(255, 255, 255, 0.5)" />
        </SearchButton>
      </SearchForm>
    </div>
  );
};

const SearchForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const SearchInput = styled.input`
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  background-color: #121212;
  border: 1px solid #303030;
  flex: 1;
  color: rgba(255, 255, 255, 0.88);
  padding: 2px 6px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  border: 1px solid #303030;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
  border-radius: 0 2px 2px 0;
  margin: 0;
  width: 65px;
  cursor: pointer;
  letter-spacing: normal;
  word-spacing: normal;
`;

export default SearchBar;
