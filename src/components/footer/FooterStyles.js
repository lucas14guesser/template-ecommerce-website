import styled from "styled-components";

export const FooterG = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 4rem;
  background-color: var(--color-bg-section);
  box-shadow: -3px -3px 3px var(--color-somb);

  @media (max-width: 1024px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`
export const FooterC = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`
export const FooterTopic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`
export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;

  @media (max-width: 768px) {
    align-items: center;
    padding: 0;
  }
`
export const FooterCopy = styled.div`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding-top: 1rem;
  }
`