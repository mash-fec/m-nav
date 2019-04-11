import React from 'react';
import styled from 'styled-components';

const Link = styled.div`
  cursor: pointer;
  display: inline-block;
  height: 48px;
  margin: 0 15px;
  padding-top: 30px;

  :hover {
    border-bottom: 2px solid #484848;
  }
`;

const Links = () => (
  <div>
    <Link>Become a host</Link>
    <Link>Help</Link>
    <Link>Sign up</Link>
    <Link>Log in</Link>
  </div>
);

export default Links;
