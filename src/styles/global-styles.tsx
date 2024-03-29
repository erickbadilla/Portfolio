import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1;
  text-rendering: optimizeLegibility;
  font-weight: 400;
  color: #555;
}
`;
