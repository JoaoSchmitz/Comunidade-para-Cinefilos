import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        scroll-behavior: smooth;

        font-family: 'Inter', sans-serif;
    }
    
    html {
        --mainColor: #092B49;
        --secondColor: #2B3844;
        --thirdColor: #1B2630;
        --textColor: #3FB6CA;
        --textColor2: #CBA238;
        --linearColor: linear-gradient(
          rgba(44, 94, 140, 1),
          rgba(9, 43, 73, 1)
        );
    }

    body {
        background-color: var(--mainColor);
        color: var(--textColor);
    }
`