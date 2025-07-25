import{d,p as h,u as c,j as r,S as m,T as s,q as l,k as g}from"./GlobalStyles-DQ6u4sTK.js";import{I as j,a as f}from"./UserServices-BsZfhWjj.js";import{u as a}from"./index-BKEgOQDp.js";import{a as u}from"./LoginServices-OYGmjVgz.js";import{B as v}from"./BtnVoltar-CDqr3WFE.js";import"./index-jWcxUGVi.js";import"./PutMethods-E5h9bK74.js";import"./GlobalMethod-CF9y8IGC.js";import"./PostMethods-Dlj5QvIc.js";const x=d.div`
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
`;function w(){const{user:n,logout:e}=a(),i=c();return r.jsxs(m,{children:[r.jsxs(s,{style:{textTransform:"none"},children:["Boas-vindas, ",n.user.user_nome]}),r.jsx(x,{children:j.map((o,t)=>r.jsxs(p,{to:o.link,onClick:()=>u(o,o.isLogout,e,i),children:[r.jsx(l,{children:o.icone}),r.jsx("p",{children:o.funcao})]},t))})]})}function b(){const{user:n,logout:e}=a(),i=c();return r.jsxs(m,{children:[r.jsxs(s,{style:{textTransform:"none"},children:["Boas-vindas, ",n.user.user_nome]}),r.jsx(x,{children:f.map((o,t)=>r.jsxs(p,{to:o.link,onClick:()=>u(o,o.isLogout,e,i),children:[r.jsx(l,{children:o.icone}),r.jsx("p",{children:o.funcao})]},t))})]})}function G(){const{user:n}=a();return r.jsxs(g,{children:[r.jsx(v,{}),r.jsx("title",{children:"Minha Conta"}),r.jsx(s,{children:"Painel do Usuário"}),n.user.user_role==="admin"?r.jsx(b,{}):r.jsx(w,{}),r.jsx("div",{})]})}export{G as M};
