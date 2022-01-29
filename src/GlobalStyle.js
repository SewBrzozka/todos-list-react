import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Lato", sans-serif;
    line-height: 1.2;
    background-color: ${({ theme }) => theme.color.gallery};
  }
`;