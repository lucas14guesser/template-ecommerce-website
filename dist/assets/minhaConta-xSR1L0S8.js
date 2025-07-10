import{j as r,r as c}from"./index-BEcKhezz.js";import{d as e,m,S as a,g as o,l as s,C as l}from"./GlobalStyles-MdkXd6BX.js";import{u as x,I as p,a as u,b as h}from"./UserServices-ezwICZXm.js";import"./index-DA7pVkDv.js";const t=e.div`
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
`,d=e(m)`
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
`;function j(){return r.jsxs(a,{children:[x.map((n,i)=>r.jsxs(o,{children:["Boas-vindas ",n.nome]},i)),r.jsx(t,{children:p.map((n,i)=>r.jsxs(d,{to:n.link,children:[r.jsx(s,{children:n.icone}),r.jsx("p",{children:n.funcao})]},i))})]})}function g(){return r.jsxs(a,{children:[u.map((n,i)=>r.jsxs(o,{children:["Boas-vindas ",n.nome]},i)),r.jsx(t,{children:h.map((n,i)=>r.jsxs(d,{to:n.link,children:[r.jsx(s,{children:n.icone}),r.jsx("p",{children:n.funcao})]},i))})]})}function k(){const[n,i]=c.useState("admin");return r.jsxs(l,{children:[r.jsx("title",{children:"Minha Conta"}),r.jsx(o,{children:"Painel do Usuário"}),n==="admin"?r.jsx(g,{}):r.jsx(j,{}),r.jsx("div",{})]})}export{k as M};
