import React from 'react';
import styled from 'styled-components';
import { Search } from 'styled-icons/octicons/Search';

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 87px;
`;

const SearchIcon = () => (
  <Wrapper>
    <Search size={19} />
  </Wrapper>
);

export default SearchIcon;
