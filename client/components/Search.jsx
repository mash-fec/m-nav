import React from 'react';
import styled from 'styled-components';
import { Airbnb } from 'styled-icons/boxicons-logos';
import SearchIcon from './SearchIcon.jsx';

const Container = styled.input`
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #EBEBEB;
  border-radius: 4px
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  font-size: 17px;
  font-weight: 800;
  height: 48px;
  margin: 15px 10px;
  padding-left: 55px;
  position: relative;
  transition: box-shadow, width 200ms ease-in-out;
  width: 460px;

  :hover {
    box-shadow: 2px 4px 4px rgba(0,0,0,0.1);
  }

  :focus {
    width: 600px;
    outline: none;
  }
`;

const Search = () => (
  <div>
    <Airbnb color="#FF5A5F" size={48} />
    <SearchIcon />
    <Container type="text" placeholder="Search" />
  </div>
);

export default Search;
