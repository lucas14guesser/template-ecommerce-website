import{d,L as h,u as c,j as r,S as m,T as t,q as l,l as g}from"./GlobalStyles-BvPZlZNa.js";import{I as j,a as f}from"./UserServices-EEC8YONH.js";import{u as a}from"./AuthContext-TGCbnOV8.js";import{a as u}from"./LoginServices-DM1EjXn7.js";import{B as v}from"./BtnVoltar-C_dQ5Fyn.js";import"./index-CY__AntJ.js";import"./PostMethods-aIuYrT0O.js";const x=d.div`
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
`,p=d(h)`
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
`;function w(){const{user:n,logout:e}=a(),i=c();return r.jsxs(m,{children:[r.jsxs(t,{style:{textTransform:"none"},children:["Boas-vindas, ",n.user.user_nome]}),r.jsx(x,{children:j.map((o,s)=>r.jsxs(p,{to:o.link,onClick:()=>u(o,o.isLogout,e,i),children:[r.jsx(l,{children:o.icone}),r.jsx("p",{children:o.funcao})]},s))})]})}function b(){const{user:n,logout:e}=a(),i=c();return r.jsxs(m,{children:[r.jsxs(t,{style:{textTransform:"none"},children:["Boas-vindas, ",n.user.user_nome]}),r.jsx(x,{children:f.map((o,s)=>r.jsxs(p,{to:o.link,onClick:()=>u(o,o.isLogout,e,i),children:[r.jsx(l,{children:o.icone}),r.jsx("p",{children:o.funcao})]},s))})]})}function U(){const{user:n}=a();return r.jsxs(g,{children:[r.jsx(v,{}),r.jsx("title",{children:"Minha Conta"}),r.jsx(t,{children:"Painel do Usuário"}),n.user.user_role==="admin"?r.jsx(b,{}):r.jsx(w,{}),r.jsx("div",{})]})}export{U as M};
