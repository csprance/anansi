import * as React from 'react';
import styled from 'styled-components';
import Home from '../containers/Home';

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
`;

const Layout: React.FC = () => {
  return (
   <Wrapper>
    <Home />
   </Wrapper>
  );
}

export default Layout;
