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
    --color-somb: #888;

    --trans-time: .5s;

    --font-txt-sz: 1rem;
    --font-destq-sz: 1.3rem;
    --font-icon-sz: 1.5rem;
    --font-title-sz: 2rem;
  }

  @media (max-width: 1024px) {
    :root {
      --font-txt-sz: 0.95rem;
      --font-destq-sz: 1.2rem;
      --font-icon-sz: 1.4rem;
      --font-title-sz: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    :root {
      --font-txt-sz: 0.9rem;
      --font-destq-sz: 1.1rem;
      --font-icon-sz: 1.3rem;
      --font-title-sz: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    :root {
      --font-txt-sz: 0.85rem;
      --font-destq-sz: .9rem;
      --font-icon-sz: 1.2rem;
      --font-title-sz: 1.4rem;
    }
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

    @media (max-width: 768px) {
      overflow-x: hidden;
    }

    @media (max-width: 480px) {
      overflow-x: hidden;
    }
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

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
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

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 4rem 10rem;

  @media (max-width: 1024px) {
    margin: 4rem 6rem;
  }

  @media (max-width: 768px) {
    margin: 3rem 3rem;
  }

  @media (max-width: 480px) {
    margin: 2rem 1.5rem;
    gap: 3rem;
  }
`
export const Title = styled.h1`
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`
export const ContainerImgsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--color-bg-section);
  border: 1px solid var(--color-txt);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`
export const ImgsCarousel = styled.img`
  width: 15rem;
  height: 15rem;

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 480px) {
    width: 5rem;
    height: 5rem;
  }
`
export const BtnDefault = styled.button`
  width: 13rem;
  padding: 1rem;
  border: 1px solid var(--color-txt);
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-txt);
  background-color: var(--color-bg);
  transition: var(--trans-time);
  font-size: var(--font-text-sz);

  &:hover {
    background-color: var(--color-hover);
  }

  @media (max-width: 768px) {
    width: 11rem;
    padding: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 10rem;
    padding: 0.8rem;
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

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`
export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-txt);
  padding: 2rem;
  align-items: center;
  background-color: var(--color-bg-section);
  gap: 1rem;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`
export const FormInput = styled.input`
  width: 40rem;
  padding: 1rem;
  border: 1px solid var(--color-txt);
  font-family: var(--font-txt);
  color: var(--color-txt);
  border-radius: 8px;
  font-size: var(--font-txt-sz);
  outline: none;

  @media (max-width: 1024px) {
    width: 30rem;
  }

  @media (max-width: 768px) {
    width: 25rem;
  }

  @media (max-width: 480px) {
    width: 20rem;
  }
`
export const LinkDefault = styled(Link)`
  text-decoration: underline;
  color: var(--color-txt);
  font-size: var(--font-txt-sz);
  transition: var(--trans-time);

  &:hover {
    color: var(--color-hover);
  }
`
export const Subcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.5rem;
  background-color: var(--color-bg-section);
  padding: 3rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 4rem;
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    gap: 3rem;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }
`
export const IconesP = styled.p`
  font-size: var(--font-destq-sz);
`
export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`