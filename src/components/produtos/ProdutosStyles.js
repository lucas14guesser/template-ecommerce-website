import styled from "styled-components";

export const ProdutosC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5.5rem;
  background-color: var(--color-bg-sec);
  padding: 3rem;
  flex-wrap: wrap;
  justify-content: flex-start;

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
export const ProdutoImg = styled.img`
  width: 26.5rem;
  height: 26.5rem;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 768px) {
    width: 15rem;
    height: 15rem;
  }

  @media (max-width: 480px) {
    width: 10rem;
    height: 10rem;
  }
`
export const ProdutoC = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: var(--color-bg-sec);

    @media (max-width: 768) {
    padding: 1.5rem;
  }

    @media (max-width: 480px) {
    padding: 1rem;
  }
`
export const InfosProd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`
export const ProdutoS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`
export const ImgPC = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 34.4rem;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border: 1px solid var(--color-txt);

  @media (max-width: 1024px) {
    width: 28rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 1rem;
  }
`
export const FilterList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: .5rem;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: center;
`
export const ItemFilter = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BtnFilter = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: var(--trans-time);

  &:focus {
    border: 1px solid var(--color-txt);
  }

  @media (max-width: 768px) {
    width: 1.8rem;
    height: 1.8rem;
  }

  @media (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`
export const BtnFilterTam = styled.button`
  height: 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--trans-time);

  &:focus {
    border: 1px solid var(--color-txt);
  }

  @media (max-width: 768px) {
    height: 1.8rem;
  }

  @media (max-width: 480px) {
    height: 1.5rem;
  }
`
export const ProdutoSpecC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 90%;
    align-items: center;
    text-align: center;
  }
`