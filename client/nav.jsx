import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Search from './components/Search.jsx';
import Links from './components/Links.jsx';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700');
  color: #484848;
  font-family: Montserrat, Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin: 0 auto;
  height: 80px;
`;

const Left = styled.div`
  float: left;
`;

const Right = styled.div`
  float: right;
`;

const Rule = styled.section`
  clear: both;
  margin-top: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #d2d2d2
`;

const Nav = () => (
  <Wrapper>
    <Left>
      <Search />
    </Left>
    <Right>
    <Links />
    </Right>
    <Rule />
  </Wrapper>
);

ReactDOM.render(<Nav />, document.getElementById('nav'));
