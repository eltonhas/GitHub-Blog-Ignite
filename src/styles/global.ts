import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        :focus {
            outline: 0;
        }
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 400 1rem 'Nunito', sans-serif;
        line-height: 160%;
        color: ${(props) => props.theme['base-text']};
    }

    a {
        color: inherit;
        text-decoration: none;

        &:visited {
            text-decoration: none;
        }
    }
`
