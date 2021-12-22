import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 62.5%;
    font-family: 'Barlow Semi Condensed', sans-serif;
}
:root {
    --white: hsl(0, 0%, 100%);
    --violet: hsl(263, 55%, 52%);
    --dark-gray: hsl(217, 19%, 35%);
    --dark-black-blue: hsl(219, 29%, 14%);
    --light-gray: hsl(0, 0%, 81%);
    --light-gray-blue: hsl(210, 46%, 95%);
}

`;

export default GlobalStyle;