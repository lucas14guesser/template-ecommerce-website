import{j as o,T as x,v as j,D as g,E as f,i as m,n as h,d as l,b as u,m as C,H as k,J as B,K as D,M as z,O as b,P as M,Q as A,U as S,V as E,W as L,p as P,k as O,S as T}from"./GlobalStyles-CvaMPm1h.js";import{u as N,y as I,a as V}from"./index-sOSDVVu7.js";import{l as G,M as R}from"./ModalOverlay-CW4yWWPW.js";import{b as q,c as W,d as H}from"./PostMethods-BGCF69o9.js";import{B as U}from"./BtnVoltar-D9e0ujaY.js";import{p as Q}from"./HomeServices-DvKYzplb.js";import{f as K}from"./index-CVrgv8Bg.js";function X({cores:r,setCores:e}){return o.jsxs(o.Fragment,{children:[o.jsx(x,{children:"Cores e Tamanhos"}),(r||[]).map((t,a)=>o.jsxs(j,{style:{padding:"0",gap:"0"},children:[o.jsxs(g,{style:{padding:"1rem 0"},children:[o.jsxs(f,{value:t.cor?.valor||"",onChange:n=>uo(r,e,a,n.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Cor"}),w.map((n,i)=>o.jsx("option",{value:n.valor,children:n.nome},i))]}),o.jsx(m,{type:"button",onClick:()=>ho(r,e,a),style:{width:"3rem"},children:"-"})]}),t.tamanhos.map((n,i)=>o.jsxs(j,{style:{padding:"0",gap:"0",alignItems:"flex-start"},children:[o.jsxs(f,{name:"list_tamanho",value:n.tamanho,onChange:s=>F(r,e,a,i,"tamanho",s.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Tamanho"}),to.map((s,d)=>o.jsx("option",{value:s.valor,children:s.nome},d))]}),o.jsxs(g,{style:{padding:"1rem 0"},children:[o.jsx(h,{type:"number",placeholder:"Quantidade",value:n.quantidade,onChange:s=>F(r,e,a,i,"quantidade",s.target.value)}),o.jsx(m,{type:"button",onClick:()=>xo(r,e,a,i),style:{width:"3rem"},children:"–"})]})]},i)),o.jsx(m,{type:"button",onClick:()=>po(r,e,a),children:"+ Tamanho"})]},a)),o.jsx(m,{type:"button",onClick:()=>mo(r,e),children:"+ Cor"})]})}const $=l.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
`;function Y(){const{user:r}=N(),[e,t]=u.useState({produto_nome:"",produto_preco:"",produto_categoria:"",produto_lancamento:!1,produto_foto:[],produto_cor:[]});return o.jsxs(C,{onSubmit:a=>vo(e.produto_nome,e.produto_preco,e.produto_categoria,e.produto_lancamento,e.produto_foto,e.produto_cor,a,t,r.token),children:[o.jsx(x,{children:"Cadastrar Produto"}),o.jsxs(f,{value:e.produto_categoria,onChange:a=>t(n=>({...n,produto_categoria:a.target.value})),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Categorias"}),G.map((a,n)=>o.jsx("option",{value:a.nome,children:a.nome},n))]}),eo.map((a,n)=>a.tipo==="checkbox"?o.jsxs($,{children:[a.placeholder,o.jsx(h,{type:a.tipo,name:a.nome,onChange:i=>y(i,t),style:{width:"24rem",cursor:"pointer"}})]},n):o.jsx(h,{type:a.tipo,placeholder:a.placeholder,name:a.nome,onChange:i=>y(i,t),multiple:a.tipo==="file"},n)),o.jsx(X,{cores:e.produto_cor,setCores:a=>co(a,t)}),o.jsx(m,{type:"submit",children:"Cadastrar"})]})}function Z(){return o.jsxs(C,{children:[o.jsx(x,{children:"Editar Produto"}),ro.map((r,e)=>o.jsx(h,{type:r.tipo,placeholder:r.placeholder,id:r.nome,name:r.nome},e)),o.jsx(m,{type:"submit",children:"Editar"})]})}function J(){return o.jsxs(C,{children:[o.jsx(x,{children:"Excluir Produto"}),ao.map((r,e)=>o.jsx(h,{type:r.tipo,placeholder:r.placeholder,id:r.nome,name:r.nome},e)),o.jsx(m,{type:"submit",children:"Excluir"})]})}function oo(){return o.jsx("div",{children:"FormOfertarProduto"})}const eo=[{nome:"produto_nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"produto_preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"produto_lancamento",placeholder:"O produto cadastrado é lançamento?",tipo:"checkbox"},{nome:"produto_foto",placeholder:"Foto do Produto",tipo:"file"}],ro=[{nome:"id",placeholder:"ID do Produto",tipo:"text"},{nome:"categoria",placeholder:"Categoria do Produto",tipo:"text"},{nome:"nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"foto",placeholder:"Foto do Produto",tipo:"file"},{nome:"preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"cor",placeholder:"Cor do Produto",tipo:"text"},{nome:"tamanho",placeholder:"Tamanho do Produto",tipo:"text"},{nome:"quantidade",placeholder:"Quantidade do Produto",tipo:"text"},{nome:"lancamento",placeholder:"É Lançamento?",tipo:"checkbox"},{nome:"oferta",placeholder:"É Oferta?",tipo:"checkbox"}],ao=[{nome:"id",placeholder:"ID do Produto",tipo:"text"}],w=[{nome:"Branco",valor:"#FFFFFF"},{nome:"Preto",valor:"#000000"},{nome:"Cinza Claro",valor:"#D3D3D3"},{nome:"Cinza Escuro",valor:"#4B4B4B"},{nome:"Bege",valor:"#F5F5DC"},{nome:"Marrom",valor:"#8B4513"},{nome:"Azul Marinho",valor:"#000080"},{nome:"Azul Claro",valor:"#ADD8E6"},{nome:"Azul Jeans",valor:"#3B5998"},{nome:"Verde Militar",valor:"#4B5320"},{nome:"Verde Oliva",valor:"#808000"},{nome:"Verde Menta",valor:"#98FF98"},{nome:"Vermelho",valor:"#FF0000"},{nome:"Vermelho Vinho",valor:"#800000"},{nome:"Rosa Claro",valor:"#FFC0CB"},{nome:"Rosa Choque",valor:"#FF69B4"},{nome:"Roxo",valor:"#9370DB"},{nome:"Amarelo",valor:"#FFFF00"},{nome:"Amarelo Mostarda",valor:"#FFDB58"},{nome:"Laranja",valor:"#FFA500"},{nome:"Off White",valor:"#FAF9F6"},{nome:"Caramelo",valor:"#A0522D"},{nome:"Camelo",valor:"#C19A6B"},{nome:"Bronze",valor:"#CD7F32"},{nome:"Prata",valor:"#C0C0C0"},{nome:"Ouro",valor:"#FFD700"}],to=[{nome:"PP",valor:"pp"},{nome:"P",valor:"P"},{nome:"M",valor:"M"},{nome:"G",valor:"G"},{nome:"GG",valor:"GG"},{nome:"XG",valor:"XG"},{nome:"ÚNICO",valor:"UNICO"},{nome:"33",valor:"33"},{nome:"34",valor:"34"},{nome:"35",valor:"35"},{nome:"36",valor:"36"},{nome:"37",valor:"37"},{nome:"38",valor:"38"},{nome:"39",valor:"39"},{nome:"40",valor:"40"},{nome:"41",valor:"41"},{nome:"42",valor:"42"},{nome:"43",valor:"43"},{nome:"44",valor:"44"}],no=(r,e,t)=>{t(e),r(!0)},io=(r,e)=>{r(!1),e(null)},so={cadastrar:o.jsx(Y,{}),editar:o.jsx(Z,{}),excluir:o.jsx(J,{}),ofertar:o.jsx(oo,{})},lo=[{tipo:"cadastrar",txt:"Cadastrar Produto"},{tipo:"editar",txt:"Editar Produto"},{tipo:"excluir",txt:"Excluir Produto"},{tipo:"ofertar",txt:"Ofertar Produto"}],co=(r,e)=>{e(t=>({...t,produto_cor:r}))},mo=(r,e)=>{const t={cor:{nome:"",valor:""},tamanhos:[]};e([...r,t])},po=(r,e,t)=>{const a=[...r];a[t].tamanhos.push({tamanho:"",quantidade:""}),e(a)},uo=(r,e,t,a)=>{const n=[...r],i=a.trim().toUpperCase(),s=w.find(d=>d.valor.toUpperCase()===i);s?n[t].cor=s:n[t].cor={nome:"",valor:""},e(n)},F=(r,e,t,a,n,i)=>{const s=[...r];s[t].tamanhos[a][n]=i,e(s)},ho=(r,e,t)=>{const a=[...r];a.splice(t,1),e(a)},xo=(r,e,t,a)=>{const n=[...r];n[t].tamanhos.splice(a,1),e(n)},y=async(r,e)=>{const{name:t,type:a,checked:n,value:i,files:s}=r.target;if(a==="file"){const d=[],c=await W();if(!c)return;for(const v of s){const p=new FormData;p.append("file",v),p.append("api_key",c.apiKey),p.append("timestamp",c.timestamp),p.append("signature",c.signature),p.append("folder",c.folder),p.append("upload_preset","ecommerce_signed");try{await H(p,d)}catch(_){console.error("Erro ao enviar imagem ao Cloudinary",_)}}e(v=>({...v,[t]:d}))}else e(d=>({...d,[t]:a==="checkbox"?n:i}))},vo=async(r,e,t,a,n,i,s,d,c)=>{if(s.preventDefault(),!r||!e||!t){I.error("Nome, preço e categoria são obrigatórios.");return}await q(r,e,a,t,n,i,d,c)},go=(r,e)=>r.filter(t=>t.produto_nome.toLowerCase().includes(e.toLowerCase()));function fo(){const[r,e]=u.useState(!1),[t,a]=u.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx(g,{children:lo.map((n,i)=>o.jsx(m,{onClick:()=>no(e,n.tipo,a),children:n.txt},i))}),r&&o.jsx(R,{onClose:()=>io(e,a),children:so[t]})]})}const Co=async r=>{const e=await V.get("https://2712dbcabcd1.ngrok-free.app/ecommerce/produtos");e.data.error?console.error(e.data.error):r(e.data.result)};function jo({busca:r}){const[e,t]=u.useState([]);u.useEffect(()=>{Co(t)},[]);const a=go(e,r);return o.jsx(k,{children:a.map(n=>o.jsxs(B,{children:[o.jsx(D,{src:n.fotos[0]?.foto_url,alt:n.produto_nome}),o.jsx(z,{children:n.produto_nome}),o.jsxs(b,{children:["Categoria: ",n.categoria_nome]}),o.jsxs(b,{children:["Lançamento: ",n.produto_lancamento?"Sim":"Não"]}),o.jsxs(M,{children:["R$ ",Q(n.produto_preco)]}),o.jsxs(A,{children:[o.jsx("strong",{children:"Cores:"}),n.cores.map((i,s)=>o.jsxs("div",{children:[o.jsxs(S,{children:[o.jsx(E,{$cor:i.cor_hex}),o.jsx("span",{children:i.cor_nome})]}),o.jsx(L,{children:i.tamanhos.map((d,c)=>o.jsxs("li",{children:[d.tamanho,": ",d.quantidade," un."]},c))})]},s))]})]},n.produto_id))})}const Ao=l.nav`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;
  background-color: var(--color-bg-sec);
  gap: 2rem;
  box-shadow: 3px 3px 3px var(--color-somb);

  @media (max-width: 1024px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1.5rem;
  }
`,So=l.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`,Eo=l.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  list-style-type: none;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: center;
    gap: 1rem;
  }
`,Lo=l.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`,Oo=l.button`
    display: none;

    @media (max-width: 768px) {
        display: block;
        font-size: 24px;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 1001;
        position: relative;
    }
`,To=l.ul`
    position: fixed;
    top: 0;
    right: 0;
    width: 12rem;
    height: 100vh;
    background-color: #fff;
    list-style: none;
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0,0,0,0.2);
    z-index: 1000;

    li {
        margin: 15px 0;
    }
`,No=l.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 999;
`,Io=l(P)`
  text-decoration: none;
  color: var(--color-txt);
  font-size: var(--font-icon-sz);
  transition: var(--trans-time);

  &:hover {
    color: var(--color-hover);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,Vo=l(P)`
  font-style: italic;
  font-size: 3rem;
  text-decoration: none;
  color: var(--color-txt);
  transition: var(--trans-time);

  &:hover {
    color: var(--color-hover);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`,bo=l.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.5rem;
`,Fo=l.input`
  width: 20rem;
  height: 100%;
  padding: 0 1rem;
  color: var(--color-txt);
  outline: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid var(--color-txt);
  border-right: none;
  font-size: var(--font-txt-sz);
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 15rem;
  }
`,yo=l.button`
  width: 3rem;
  height: 100%;
  color: var(--color-bg);
  background-color: var(--color-txt);
  border: 1px solid var(--color-txt);
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  transition: var(--trans-time);
  box-sizing: border-box;

  &:hover {
    background-color: var(--color-hover);
  }
`,Go=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;function Po({busca:r,setBusca:e}){return o.jsxs(bo,{children:[o.jsx(Fo,{type:"text",placeholder:"Buscar",value:r,onChange:t=>e(t.target.value),style:{borderColor:"#A63F2C"}}),o.jsx(yo,{type:"submit",style:{backgroundColor:"#A63F2C",borderColor:"#A63F2C"},children:o.jsx(K,{})})]})}function Ro(){const[r,e]=u.useState("");return o.jsxs(O,{children:[o.jsx(U,{}),o.jsx("title",{children:"Produtos"}),o.jsx(x,{children:"Produtos"}),o.jsxs(T,{style:{alignItems:"center"},children:[o.jsx(fo,{}),o.jsx(Po,{busca:r,setBusca:e}),o.jsx(jo,{busca:r})]})]})}export{Ro as A,yo as B,Go as C,Oo as H,Eo as L,To as M,Ao as N,No as O,bo as S,Io as a,Vo as b,Fo as c,Lo as d,So as e};
