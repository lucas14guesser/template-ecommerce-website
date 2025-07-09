import styled from "styled-components"

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const CartItem = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background-color: var(--color-bg-sec);
  border-radius: 1rem;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0.3rem 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;

    img {
      width: 80px;
      height: 80px;
    }
  }
`
export const Summary = styled.div`
  margin-top: 2rem;
  text-align: right;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`
export const CheckoutButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: var(--color-btn);
  color: var(--color-bg-section);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-somb);
  }
`