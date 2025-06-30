import{d as c,j as e,T as d,C as l,L as x,u as o,I as m,N as g,F as i,p as n,i as h,n as j,q as p,k as f}from"./ProdutosServices-CJEXsw3X.js";const u=c.div`
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
  }
`;function C({categoria:r,produtos:s}){return e.jsxs("div",{children:[e.jsx(d,{children:r}),e.jsx(u,{children:s.map((a,t)=>e.jsx("div",{children:e.jsxs(l,{children:[e.jsx(x,{to:o(a.nome),children:e.jsx(m,{src:a.fotos[0].foto,alt:a.nome})}),e.jsx("p",{children:a.nome}),a.ofertas&&a.ofertas[0]?.oferta?e.jsxs(g,{children:[e.jsxs(i,{style:{textDecoration:"line-through",color:"gray"},children:["R$",n(a.preco)]}),e.jsxs(i,{children:["R$",n(a.ofertas[0].novoPreco)]})]}):e.jsxs(i,{children:["R$",n(a.preco)]}),e.jsx(h,{children:"Adicionar ao carrinho"})]})},t))})]})}function w(){const{categoria:r}=j(),s=o(r),a=p(s);return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:a.categoria}),e.jsxs(f,{children:[a?e.jsx(C,{categoria:a.categoria,produtos:a.produtos}):e.jsx("p",{children:"Categoria não encontrada"}),e.jsx("div",{})]})]})}export{w as P};
