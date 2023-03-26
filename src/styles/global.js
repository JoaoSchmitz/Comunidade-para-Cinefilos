import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        --mainColor: #092B49;
        --secondColor: #2B3844;
        --thirdColor: #1B2630;
        --textColor: #3FB6CA;
        --textColor2: #CBA238;
    }

    body {
        background-color: var(--mainColor);
        color: var(--textColor);
    }
`