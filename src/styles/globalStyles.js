import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.mainBg};
    `}
  }
`;
