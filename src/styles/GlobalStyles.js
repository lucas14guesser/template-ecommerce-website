import { Link } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-txt: "Roboto", sans-serif;
    --font-title: "Oswald", sans-serif;

    --color-bg: #F0ECE7;
    --color-txt: #362004;
    --color-bg-section: #FFFFFF;
    --color-bg-sec: #E0DED9;
    --color-hover: #8A8B6F;
    --color-somb: #8A8B6F;
    --color-btn: #A63F2C;
    --color-black: #000000;

    --trans-time: .7s;

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
  }

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
  a {
    color: var(--color-txt);
  }
`
export const ModalC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn .3s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0
    } to {
      opacity: 1;
    }
  }
`
export const ModalContent = styled.div`
background-color: var(--color-bg-sec);
padding: 1rem;
border-radius: 8px;
max-width: 75rem;
width: 100%;
animation: scaleUp .3s forwards;
max-height: 80%;
overflow-y: auto;

@keyframes scaleUp {
    from {
      transform: scale(0.8);
    } to {
      transform: scale(1);
    }
}
`
export const ImageBackground = styled.img`
  width: 40rem;
  height: 40rem;
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
export const LinkProd = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContainerImgsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--color-bg-sec);
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
  border: 1px solid var(--color-bg-sec);
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-bg-section);
  background-color: var(--color-btn);
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
  background-color: var(--color-bg-sec);
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
  background-color: var(--color-bg-section);

  @media (max-width: 1024px) {
    width: 25rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }

  @media (max-width: 480px) {
    width: 15rem;
  }
`
export const InputModalWidht = styled.input`
  width: 3rem;
  padding: 1rem;
  border: 1px solid var(--color-txt);
  font-family: var(--font-txt);
  color: var(--color-txt);
  border-radius: 8px;
  font-size: var(--font-txt-sz);
  outline: none;
  background-color: var(--color-bg-section);
`
export const SelectModalWidht = styled.select`
  width: 42rem;
  padding: 1rem;
  border: 1px solid var(--color-txt);
  font-family: var(--font-txt);
  color: var(--color-txt);
  border-radius: 8px;
  font-size: var(--font-txt-sz);
  outline: none;
  background-color: var(--color-bg-section);

  @media (max-width: 1024px) {
    width: 27rem;
  }

  @media (max-width: 768px) {
    width: 22rem;
  }

  @media (max-width: 480px) {
    width: 17rem;
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
  background-color: var(--color-bg-sec);
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
  background-color: var(--color-bg-sec);
  padding: 2rem;
`
export const DivFlexColm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-bg-sec);
  padding: 2rem;
`
export const TopicFont = styled.p`
  font-size: var(--font-destq-sz);
`
export const BtnIcon = styled.button`
  width: 3rem;
  color: var(--color-btn);
  background-color: var(--color-bg-sec);
  border: none;
  cursor: pointer;
  transition: var(--trans-time);
  box-sizing: border-box;
  padding: .6rem 0;
  font-size: var(--font-destq-sz);

  &:hover {
    color: var(--color-hover);
  }
`
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  display: block;

  @media (max-width: 1024px) {
    overflow-x: auto;
  }

  @media (max-width: 768px) {
    overflow-x: auto;
    width: 80%;
  }

  @media (max-width: 480px) {
    overflow-x: auto;
    width: 60%;
  }
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  border: 1px solid var(--color-btn);
  background-color: var(--color-bg-section);

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`
export const Thead = styled.thead`
  background-color: var(--color-btn);
  color: var(--color-bg-section);
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`
export const Th = styled.th`
  padding: 12px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 13px;
  }
`
export const Td = styled.td`
  padding: 10px;
  vertical-align: middle;
  border: 1px solid var(--color-btn);
  text-align: center;

  @media (max-width: 1024px) {
    padding: 8px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    font-size: 13px;
  }
`
export const ListaWrapper = styled.div`
  width: 100%;
  min-height: 75vh;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`
export const CardProduto = styled.div`
  background-color: var(--color-bg-section);
  border: 0.0625rem solid var(--color-btn);
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.05);
  padding: 1rem;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 480px) {
    width: 90%;
  }
`
export const ImagemProduto = styled.img`
  width: 100%;
  height: 12.5rem;
  border-radius: 0.5rem;
  object-fit: cover;
  border: 0.0625rem solid var(--color-btn);
`
export const NomeProduto = styled.h3`
  font-size: 1.1rem;
  color: var(--color-text);
  margin: 0;
`
export const Categoria = styled.p`
  font-size: 0.95rem;
  margin: 0;
`
export const Preco = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: ${props => (props.$emOferta ? 'red' : 'var(--color-text)')};
`
export const CoresWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`
export const CorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const CirculoCor = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${props => props.$cor};
  border: 1px solid var(--color-black);
`
export const ListaTamanhos = styled.ul`
  padding-left: 1.25rem;
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
`
export const WrapperPaginacao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
export const BotaoPaginacao = styled.button`
  width: 13rem;
  padding: 1rem;
  border: 1px solid var(--color-bg-sec);
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-bg-section);
  background-color: var(--color-btn);
  transition: var(--trans-time);
  font-size: var(--font-text-sz);

  &:hover:not(:disabled) {
      background-color: var(--color-hover);
  }

  &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
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
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #ccc;
  border-top-color: var(--color-btn);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`