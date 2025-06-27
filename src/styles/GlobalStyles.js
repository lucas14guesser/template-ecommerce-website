import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --font-txt: "Roboto", sans-serif;
        --font-title: "Oswald", sans-serif;
        --color-bg: #F6F3EF;
        --color-txt: #362004;
        --color-bg-section: #FFFFFF;
        --color-hover: #757472;
        --trans-time: .5s;
        --font-txt-sz: 1rem;
        --font-destq-sz: 1.3rem;
        --font-icon-sz: 1.5rem;
        --font-title-sz: 2rem;
        --color-somb: #888;
    }

    #root, html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        font-family: var(--font-txt);
        background-color: var(--color-bg);
        color: var(--color-txt);
        font-size: var(--font-txt-sz);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-title);
        font-size: var(--font-title-sz);
    }
`