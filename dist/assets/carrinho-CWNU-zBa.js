import{d as t,j as o,k as a,T as n}from"./GlobalStyles-TciS0uQl.js";import{B as i}from"./BtnVoltar-v5ncymXV.js";const d=t.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,c=t.div`
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
`,m=t.div`
  margin-top: 2rem;
  text-align: right;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,u=t.button`
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
`,e=[{id:1,user:1,quantidade:1,produtos:[{id:12,nome:"Shorts Teste 1",fotos:[{foto:"/assets/roupas/shorts-teste-1.png"},{foto:"/assets/roupas/shorts-teste-2.png"},{foto:"/assets/roupas/shorts-teste-2.png"},{foto:"/assets/roupas/shorts-teste-2.png"},{foto:"/assets/roupas/shorts-teste-2.png"},{foto:"/assets/roupas/shorts-teste-2.png"}],preco:49.9,cores:[{cor:"#000000",tamanhos:[{tamanho:"P"}]}],lancamento:!0}]},{id:2,user:1,quantidade:1,produtos:[{id:10,nome:"Sapato Teste 1",fotos:[{foto:"/assets/roupas/sapato-teste-1.png"}],preco:109.9,cores:[{cor:"branco",tamanhos:[{tamanho:"36"}]}],lancamento:!0,favorito:!0}]}],p=e.reduce((r,s)=>r+s.produtos[0].preco*s.quantidade,0).toFixed(2);function h(){return o.jsx(d,{children:e.map(r=>o.jsxs(c,{children:[o.jsx("img",{src:r.produtos[0].fotos[0].foto,alt:r.produtos[0].nome}),o.jsxs("div",{children:[o.jsx("h2",{children:r.produtos[0].nome}),o.jsxs("p",{children:["Quantidade: ",r.quantidade]}),o.jsxs("p",{children:["Preço: R$ ",(r.produtos[0].preco*r.quantidade).toFixed(2)]})]})]},r.produtos[0].id))})}function l(){return o.jsxs(m,{children:[o.jsxs("h3",{children:["Subtotal: R$ ",p]}),o.jsx(u,{children:"Finalizar Compra"})]})}function f(){return o.jsxs(a,{children:[o.jsx(i,{}),o.jsx("title",{children:"Meu Carrinho"}),o.jsx(n,{children:"Meu Carrinho"}),o.jsx(h,{}),o.jsx(l,{})]})}export{f as C};
