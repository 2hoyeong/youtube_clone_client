import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Noto Sans KR', 'Nanum Gothic', sans-serif;
    }
    body {
        width: 100%;
        margin: 0 auto;
        background-color: #f9f9f9;
    }
    a { text-decoration:none }
`;
