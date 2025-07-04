import{d as o,L as t,j as r,S as a,T as n,p as d,k as s}from"./GlobalStyles-DIxeZAo1.js";import{I as c}from"./UserServices-A6czU_s6.js";const m=o.div`
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
`,l=o(t)`
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
`;function x(){return r.jsxs(a,{children:[r.jsx(n,{children:'Boas-vindas "User"'}),r.jsx(m,{children:c.map((i,e)=>r.jsxs(l,{to:i.link,children:[r.jsx(d,{children:i.icone}),r.jsx("p",{children:i.funcao})]},e))})]})}function h(){return r.jsxs(s,{children:[r.jsx("title",{children:"Minha Conta"}),r.jsx(n,{children:"Painel do Usuário"}),r.jsx(x,{}),r.jsx("div",{})]})}export{h as M};
