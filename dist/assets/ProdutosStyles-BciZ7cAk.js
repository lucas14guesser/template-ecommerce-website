import{d as e}from"./GlobalStyles-DSdOrOET.js";const r=e.div`
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
`,t=e.img`
  width: 10rem;
  height: 10rem;
  transition: var(--trans-time);
  border: 1px solid var(--color-txt);

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
  }

  @media (max-width: 480px) {
    width: 6rem;
    height: 6rem;
  }
`,a=e.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: var(--color-bg-sec);

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,d=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`,m=e.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`,o=e.div`
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
`,n=e.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,p=e.button`
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: var(--trans-time);

  &:hover {
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
`;export{p as B,n as F,d as I,t as P,o as a,a as b,m as c,r as d};
