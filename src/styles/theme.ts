import * as styledComponents from 'styled-components';

export interface ThemeInterface {
  colors: {
    primary: string;
    secundary: string;
    background: string;
    sidebar: string;
    header: string;
    border: string;
  };
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export const theme = {
  colors: {
    primary: '#2a2d33',
    secundary: '#a5a5a5',
    background: '#f4f5f8',
    sidebar: '#273143',
    header: '#2da1f8',
    border: '#e1e2e4'
  }
};

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };
