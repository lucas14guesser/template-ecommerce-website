import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

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
        text-transform: uppercase;
    }

    button {
        font-family: var(--font-txt);
        font-size: var(--font-txt-sz);
    }
`
export const LinksCategorias = styled(Link)`
    text-decoration: none;
    color: var(--color-txt);
    font-size: var(--font-destq-sz);
    transition: var(--trans-time);

    &:hover {
        color: var(--color-hover);
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: 4rem 10rem;
`
export const Title = styled.h1`
    text-align: center;
`
export const ContainerImgsCarousel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background-color: var(--color-bg-section);
    border: 1px solid var(--color-txt);
`
export const ImgsCarousel = styled.img`
    width: 15rem;
    height: 15rem;
`
export const BtnAddCarrinho = styled.button`
    width: 13rem;
    padding: 1rem;
    border: 1px solid var(--color-txt);
    border-radius: 8px;
    cursor: pointer;
    color: var(--color-txt);
    background-color: var(--color-bg);
    transition: var(--trans-time);

    &:hover {
        background-color: var(--color-hover);
    }
`
export const FontPreco = styled.p`
    font-size: var(--font-destq-sz);
    font-weight: 600;
    font-family: var(--font-title);
`
export const NewPrice = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
`