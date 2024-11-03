// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Arial', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-image: url('https://as1.ftcdn.net/v2/jpg/05/07/66/60/1000_F_507666066_J8zsoPcCnW0uGcEYzoT0RElpHACKxd6e.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: #333;
    }
`;

export default GlobalStyle;
