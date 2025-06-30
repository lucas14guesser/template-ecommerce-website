import styled from "styled-components";

export const FormC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1.8rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }
`