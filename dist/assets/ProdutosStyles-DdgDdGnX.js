import{d as e}from"./GlobalStyles-CWBnrcME.js";const t=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5.5rem;
  background-color: var(--color-bg-section);
  padding: 3rem;
  flex-wrap: wrap;
  justify-content: center;

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
    flex-direction: column;
  }
`,r=e.img`
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
`,d=e.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: var(--color-bg-section);

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,a=e.div`
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

  @media (max-width: 768px) {
    width: 1.8rem;
    height: 1.8rem;
  }

  @media (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;export{p as B,n as F,a as I,t as P,o as a,r as b,d as c,m as d};
