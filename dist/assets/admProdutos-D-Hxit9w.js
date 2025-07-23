import{j as o,T as x,v as j,D as g,E as f,i as m,n as h,d as l,b as u,m as C,H as k,J as B,K as D,M as z,O as b,P as A,Q as M,U as S,V as E,W as L,p as P,k as O,S as T}from"./GlobalStyles-CvaMPm1h.js";import{u as N,y as I,a as V}from"./index-sOSDVVu7.js";import{l as G,M as R}from"./ModalOverlay-CW4yWWPW.js";import{b as q,c as W,d as H}from"./PostMethods-BGCF69o9.js";import{B as U}from"./BtnVoltar-D9e0ujaY.js";import{p as Q}from"./HomeServices-DvKYzplb.js";import{f as K}from"./index-CVrgv8Bg.js";function X({cores:r,setCores:e}){return o.jsxs(o.Fragment,{children:[o.jsx(x,{children:"Cores e Tamanhos"}),(r||[]).map((a,t)=>o.jsxs(j,{style:{padding:"0",gap:"0"},children:[o.jsxs(g,{style:{padding:"1rem 0"},children:[o.jsxs(f,{value:a.cor?.valor||"",onChange:n=>uo(r,e,t,n.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Cor"}),w.map((n,i)=>o.jsx("option",{value:n.valor,children:n.nome},i))]}),o.jsx(m,{type:"button",onClick:()=>ho(r,e,t),style:{width:"3rem"},children:"-"})]}),a.tamanhos.map((n,i)=>o.jsxs(j,{style:{padding:"0",gap:"0",alignItems:"flex-start"},children:[o.jsxs(f,{name:"list_tamanho",value:n.tamanho,onChange:s=>y(r,e,t,i,"tamanho",s.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Tamanho"}),ao.map((s,d)=>o.jsx("option",{value:s.valor,children:s.nome},d))]}),o.jsxs(g,{style:{padding:"1rem 0"},children:[o.jsx(h,{type:"number",placeholder:"Quantidade",value:n.quantidade,onChange:s=>y(r,e,t,i,"quantidade",s.target.value)}),o.jsx(m,{type:"button",onClick:()=>xo(r,e,t,i),style:{width:"3rem"},children:"–"})]})]},i)),o.jsx(m,{type:"button",onClick:()=>po(r,e,t),children:"+ Tamanho"})]},t)),o.jsx(m,{type:"button",onClick:()=>mo(r,e),children:"+ Cor"})]})}const $=l.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
`;function Y(){const{user:r}=N(),[e,a]=u.useState({produto_nome:"",produto_preco:"",produto_categoria:"",produto_lancamento:!1,produto_foto:[],produto_cor:[]});return o.jsxs(C,{onSubmit:t=>vo(e.produto_nome,e.produto_preco,e.produto_categoria,e.produto_lancamento,e.produto_foto,e.produto_cor,t,a,r.token),children:[o.jsx(x,{children:"Cadastrar Produto"}),o.jsxs(f,{value:e.produto_categoria,onChange:t=>a(n=>({...n,produto_categoria:t.target.value})),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Categorias"}),G.map((t,n)=>o.jsx("option",{value:t.nome,children:t.nome},n))]}),eo.map((t,n)=>t.tipo==="checkbox"?o.jsxs($,{children:[t.placeholder,o.jsx(h,{type:t.tipo,name:t.nome,onChange:i=>F(i,a),style:{width:"24rem",cursor:"pointer"}})]},n):o.jsx(h,{type:t.tipo,placeholder:t.placeholder,name:t.nome,onChange:i=>F(i,a),multiple:t.tipo==="file"},n)),o.jsx(X,{cores:e.produto_cor,setCores:t=>co(t,a)}),o.jsx(m,{type:"submit",children:"Cadastrar"})]})}function Z(){return o.jsxs(C,{children:[o.jsx(x,{children:"Editar Produto"}),ro.map((r,e)=>o.jsx(h,{type:r.tipo,placeholder:r.placeholder,id:r.nome,name:r.nome},e)),o.jsx(m,{type:"submit",children:"Editar"})]})}function J(){return o.jsxs(C,{children:[o.jsx(x,{children:"Excluir Produto"}),to.map((r,e)=>o.jsx(h,{type:r.tipo,placeholder:r.placeholder,id:r.nome,name:r.nome},e)),o.jsx(m,{type:"submit",children:"Excluir"})]})}function oo(){return o.jsx("div",{children:"FormOfertarProduto"})}const eo=[{nome:"produto_nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"produto_preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"produto_lancamento",placeholder:"O produto cadastrado é lançamento?",tipo:"checkbox"},{nome:"produto_foto",placeholder:"Foto do Produto",tipo:"file"}],ro=[{nome:"id",placeholder:"ID do Produto",tipo:"text"},{nome:"categoria",placeholder:"Categoria do Produto",tipo:"text"},{nome:"nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"foto",placeholder:"Foto do Produto",tipo:"file"},{nome:"preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"cor",placeholder:"Cor do Produto",tipo:"text"},{nome:"tamanho",placeholder:"Tamanho do Produto",tipo:"text"},{nome:"quantidade",placeholder:"Quantidade do Produto",tipo:"text"},{nome:"lancamento",placeholder:"É Lançamento?",tipo:"checkbox"},{nome:"oferta",placeholder:"É Oferta?",tipo:"checkbox"}],to=[{nome:"id",placeholder:"ID do Produto",tipo:"text"}],w=[{nome:"Branco",valor:"#FFFFFF"},{nome:"Preto",valor:"#000000"},{nome:"Cinza Claro",valor:"#D3D3D3"},{nome:"Cinza Escuro",valor:"#4B4B4B"},{nome:"Bege",valor:"#F5F5DC"},{nome:"Marrom",valor:"#8B4513"},{nome:"Azul Marinho",valor:"#000080"},{nome:"Azul Claro",valor:"#ADD8E6"},{nome:"Azul Jeans",valor:"#3B5998"},{nome:"Verde Militar",valor:"#4B5320"},{nome:"Verde Oliva",valor:"#808000"},{nome:"Verde Menta",valor:"#98FF98"},{nome:"Vermelho",valor:"#FF0000"},{nome:"Vermelho Vinho",valor:"#800000"},{nome:"Rosa Claro",valor:"#FFC0CB"},{nome:"Rosa Choque",valor:"#FF69B4"},{nome:"Roxo",valor:"#9370DB"},{nome:"Amarelo",valor:"#FFFF00"},{nome:"Amarelo Mostarda",valor:"#FFDB58"},{nome:"Laranja",valor:"#FFA500"},{nome:"Off White",valor:"#FAF9F6"},{nome:"Caramelo",valor:"#A0522D"},{nome:"Camelo",valor:"#C19A6B"},{nome:"Bronze",valor:"#CD7F32"},{nome:"Prata",valor:"#C0C0C0"},{nome:"Ouro",valor:"#FFD700"}],ao=[{nome:"PP",valor:"pp"},{nome:"P",valor:"P"},{nome:"M",valor:"M"},{nome:"G",valor:"G"},{nome:"GG",valor:"GG"},{nome:"XG",valor:"XG"},{nome:"ÚNICO",valor:"UNICO"},{nome:"33",valor:"33"},{nome:"34",valor:"34"},{nome:"35",valor:"35"},{nome:"36",valor:"36"},{nome:"37",valor:"37"},{nome:"38",valor:"38"},{nome:"39",valor:"39"},{nome:"40",valor:"40"},{nome:"41",valor:"41"},{nome:"42",valor:"42"},{nome:"43",valor:"43"},{nome:"44",valor:"44"}],no=(r,e,a)=>{a(e),r(!0)},io=(r,e)=>{r(!1),e(null)},so={cadastrar:o.jsx(Y,{}),editar:o.jsx(Z,{}),excluir:o.jsx(J,{}),ofertar:o.jsx(oo,{})},lo=[{tipo:"cadastrar",txt:"Cadastrar Produto"},{tipo:"editar",txt:"Editar Produto"},{tipo:"excluir",txt:"Excluir Produto"},{tipo:"ofertar",txt:"Ofertar Produto"}],co=(r,e)=>{e(a=>({...a,produto_cor:r}))},mo=(r,e)=>{const a={cor:{nome:"",valor:""},tamanhos:[]};e([...r,a])},po=(r,e,a)=>{const t=[...r];t[a].tamanhos.push({tamanho:"",quantidade:""}),e(t)},uo=(r,e,a,t)=>{const n=[...r],i=t.trim().toUpperCase(),s=w.find(d=>d.valor.toUpperCase()===i);s?n[a].cor=s:n[a].cor={nome:"",valor:""},e(n)},y=(r,e,a,t,n,i)=>{const s=[...r];s[a].tamanhos[t][n]=i,e(s)},ho=(r,e,a)=>{const t=[...r];t.splice(a,1),e(t)},xo=(r,e,a,t)=>{const n=[...r];n[a].tamanhos.splice(t,1),e(n)},F=async(r,e)=>{const{name:a,type:t,checked:n,value:i,files:s}=r.target;if(t==="file"){const d=[],c=await W();if(!c)return;for(const v of s){const p=new FormData;p.append("file",v),p.append("api_key",c.apiKey),p.append("timestamp",c.timestamp),p.append("signature",c.signature),p.append("folder",c.folder),p.append("upload_preset","ecommerce_signed");try{await H(p,d)}catch(_){console.error("Erro ao enviar imagem ao Cloudinary",_)}}e(v=>({...v,[a]:d}))}else e(d=>({...d,[a]:t==="checkbox"?n:i}))},vo=async(r,e,a,t,n,i,s,d,c)=>{if(s.preventDefault(),!r||!e||!a){I.error("Nome, preço e categoria são obrigatórios.");return}await q(r,e,t,a,n,i,d,c)},go=(r,e)=>Array.isArray(r)?!e||typeof e!="string"?r:r.filter(a=>a.produto_nome.toLowerCase().includes(e.toLowerCase())):[];function fo(){const[r,e]=u.useState(!1),[a,t]=u.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx(g,{children:lo.map((n,i)=>o.jsx(m,{onClick:()=>no(e,n.tipo,t),children:n.txt},i))}),r&&o.jsx(R,{onClose:()=>io(e,t),children:so[a]})]})}const Co=async r=>{const e=await V.get("https://2712dbcabcd1.ngrok-free.app/ecommerce/produtos");e.data.error?console.error(e.data.error):r(e.data.result)};function jo({busca:r}){const[e,a]=u.useState([]);u.useEffect(()=>{Co(a)},[]);const t=go(e||[],r);return o.jsx(k,{children:t.map(n=>o.jsxs(B,{children:[o.jsx(D,{src:n.fotos[0]?.foto_url,alt:n.produto_nome}),o.jsx(z,{children:n.produto_nome}),o.jsxs(b,{children:["Categoria: ",n.categoria_nome]}),o.jsxs(b,{children:["Lançamento: ",n.produto_lancamento?"Sim":"Não"]}),o.jsxs(A,{children:["R$ ",Q(n.produto_preco)]}),o.jsxs(M,{children:[o.jsx("strong",{children:"Cores:"}),n.cores.map((i,s)=>o.jsxs("div",{children:[o.jsxs(S,{children:[o.jsx(E,{$cor:i.cor_hex}),o.jsx("span",{children:i.cor_nome})]}),o.jsx(L,{children:i.tamanhos.map((d,c)=>o.jsxs("li",{children:[d.tamanho,": ",d.quantidade," un."]},c))})]},s))]})]},n.produto_id))})}const Mo=l.nav`
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
`,yo=l.input`
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
`,Fo=l.button`
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
`;function Po({busca:r,setBusca:e}){return o.jsxs(bo,{children:[o.jsx(yo,{type:"text",placeholder:"Buscar",value:r,onChange:a=>e(a.target.value),style:{borderColor:"#A63F2C"}}),o.jsx(Fo,{type:"submit",style:{backgroundColor:"#A63F2C",borderColor:"#A63F2C"},children:o.jsx(K,{})})]})}function Ro(){const[r,e]=u.useState("");return o.jsxs(O,{children:[o.jsx(U,{}),o.jsx("title",{children:"Produtos"}),o.jsx(x,{children:"Produtos"}),o.jsxs(T,{style:{alignItems:"center"},children:[o.jsx(fo,{}),o.jsx(Po,{busca:r,setBusca:e}),o.jsx(jo,{busca:r})]})]})}export{Ro as A,Fo as B,Go as C,Oo as H,Eo as L,To as M,Mo as N,No as O,bo as S,Io as a,Vo as b,yo as c,Lo as d,So as e};
