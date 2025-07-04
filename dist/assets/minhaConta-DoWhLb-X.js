import{d as n,L as t,j as r,S as a,T as e,p as d,k as s}from"./GlobalStyles-Fc1MBz0A.js";import{u as c,I as m}from"./UserServices-D71HVinE.js";import"./index-vtQ15SaZ.js";const l=n.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
`,x=n(t)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--color-btn);
  border: 1px solid var(--color-bg-section);
  border-radius: 8px;
  cursor: pointer;
  transition: var(--trans-time);
  margin: 0 1rem;
  width: 10rem;
  color: var(--color-txt);
  text-decoration: none;
  color: var(--color-bg-section);

  &:hover {
    background-color: var(--color-hover);
  }

  @media (max-width: 1024px) {
    width: 9rem;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.2rem;
    margin: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;function p(){return r.jsxs(a,{children:[c.map((i,o)=>r.jsxs(e,{children:["Boas-vindas ",i.nome]},o)),r.jsx(l,{children:m.map((i,o)=>r.jsxs(x,{to:i.link,children:[r.jsx(d,{children:i.icone}),r.jsx("p",{children:i.funcao})]},o))})]})}function j(){return r.jsxs(s,{children:[r.jsx("title",{children:"Minha Conta"}),r.jsx(e,{children:"Painel do Usuário"}),r.jsx(p,{}),r.jsx("div",{})]})}export{j as M};
