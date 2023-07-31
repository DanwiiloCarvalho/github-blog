import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        -webkit-font-smoothing: antialiased;
        color: ${(props) => props.theme['base-text']};
    }

    body, textarea, input, button {
        font: 400 1rem Nunito, sans-serif;
    }
`
