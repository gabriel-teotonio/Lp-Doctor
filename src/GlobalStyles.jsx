import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'open sans', sans-serif;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: currentColor;
    }
`
