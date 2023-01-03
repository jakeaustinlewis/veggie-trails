import React from 'react';

import styled from 'styled-components';
import { Navbar } from './Navbar';

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
`;

export function App(): JSX.Element {
  return (
    <Wrapper>
      <Navbar />
      Hello World! Starting a to-do List
    </Wrapper>
  );
}
