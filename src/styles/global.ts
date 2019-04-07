import styled, { createGlobalStyle } from './theme';
import normalize from './normalize';

export default createGlobalStyle`
  ${normalize};

  html, body, #root {
    height: 100%;
  }
`;

export const Content = styled.main`
  height: calc(100% - 60px);
  display: flex;
`;
