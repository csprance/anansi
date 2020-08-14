import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: 10% auto 80%;
`;

const Home: React.FC = ({}) => {
  return <Wrapper>Anansi</Wrapper>;
};

export default Home;
