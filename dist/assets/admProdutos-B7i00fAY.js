import{j as o,T as x,v as b,D as f,H as C,i as m,n as h,d as l,b as u,m as j,J as D,K as z,M as B,O as M,P as y,Q as A,U as L,V as S,W as E,X as N,p as w,k as O,S as T}from"./GlobalStyles-PJ1hvAss.js";import{u as I,y as V,a as G}from"./index-EE68ocLp.js";import{l as R,M as q}from"./ModalOverlay-CdKbJ8Rv.js";import{b as W,c as H,d as U}from"./PostMethods-Xcf6yCOx.js";import{B as Q}from"./BtnVoltar-BX6StUgI.js";import{p as X}from"./HomeServices-CZ60ftAK.js";function K({cores:r,setCores:e}){return o.jsxs(o.Fragment,{children:[o.jsx(x,{children:"Cores e Tamanhos"}),(r||[]).map((n,t)=>o.jsxs(b,{style:{padding:"0",gap:"0"},children:[o.jsxs(f,{style:{padding:"1rem 0"},children:[o.jsxs(C,{value:n.cor?.valor||"",onChange:a=>uo(r,e,t,a.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Cor"}),_.map((a,i)=>o.jsx("option",{value:a.valor,children:a.nome},i))]}),o.jsx(m,{type:"button",onClick:()=>ho(r,e,t),style:{width:"3rem"},children:"-"})]}),n.tamanhos.map((a,i)=>o.jsxs(b,{style:{padding:"0",gap:"0",alignItems:"flex-start"},children:[o.jsxs(C,{name:"list_tamanho",value:a.tamanho,onChange:s=>F(r,e,t,i,"tamanho",s.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Tamanho"}),ao.map((s,d)=>o.jsx("option",{value:s.valor,children:s.nome},d))]}),o.jsxs(f,{style:{padding:"1rem 0"},children:[o.jsx(h,{type:"number",placeholder:"Quantidade",value:a.quantidade,onChange:s=>F(r,e,t,i,"quantidade",s.target.value)}),o.jsx(m,{type:"button",onClick:()=>xo(r,e,t,i),style:{width:"3rem"},children:"–"})]})]},i)),o.jsx(m,{type:"button",onClick:()=>po(r,e,t),children:"+ Tamanho"})]},t)),o.jsx(m,{type:"button",onClick:()=>mo(r,e),children:"+ Cor"})]})}const $=l.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
`;function Y(){const{user:r}=I(),[e,n]=u.useState({produto_nome:"",produto_preco:"",produto_categoria:"",produto_lancamento:!1,produto_foto:[],produto_cor:[]});return o.jsxs(j,{onSubmit:t=>vo(e.produto_nome,e.produto_preco,e.produto_categoria,e.produto_lancamento,e.produto_foto,e.produto_cor,t,n,r.token),children:[o.jsx(x,{children:"Cadastrar Produto"}),o.jsxs(C,{value:e.produto_categoria,onChange:t=>n(a=>({...a,produto_categoria:t.target.value})),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Categorias"}),R.map((t,a)=>o.jsx("option",{value:t.nome,children:t.nome},a))]}),eo.map((t,a)=>t.tipo==="checkbox"?o.jsxs($,{children:[t.placeholder,o.jsx(h,{type:t.tipo,name:t.nome,onChange:i=>P(i,n),style:{width:"24rem",cursor:"pointer"}})]},a):o.jsx(h,{type:t.tipo,placeholder:t.placeholder,name:t.nome,onChange:i=>P(i,n),multiple:t.tipo==="file"},a)),o.jsx(K,{cores:e.produto_cor,setCores:t=>co(t,n)}),o.jsx(m,{type:"submit",children:"Cadastrar"})]})}function Z(){return o.jsxs(j,{children:[o.jsx(x,{children:"Editar Produto"}),ro.map((r,e)=>o.jsx(h,{type:r.tipo,placeholder:r.placeholder,id:r.nome,name:r.nome},e)),o.jsx(m,{type:"submit",children:"Editar"})]})}function J(){return o.jsxs(j,{children:[o.jsx(x,{children:"Excluir Produto"}),to.map((r,e)=>o.jsx(h,{type:r.tipo,placeholder:r.placeholder,id:r.nome,name:r.nome},e)),o.jsx(m,{type:"submit",children:"Excluir"})]})}function oo(){return o.jsx("div",{children:"FormOfertarProduto"})}const eo=[{nome:"produto_nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"produto_preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"produto_lancamento",placeholder:"O produto cadastrado é lançamento?",tipo:"checkbox"},{nome:"produto_foto",placeholder:"Foto do Produto",tipo:"file"}],ro=[{nome:"id",placeholder:"ID do Produto",tipo:"text"},{nome:"categoria",placeholder:"Categoria do Produto",tipo:"text"},{nome:"nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"foto",placeholder:"Foto do Produto",tipo:"file"},{nome:"preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"cor",placeholder:"Cor do Produto",tipo:"text"},{nome:"tamanho",placeholder:"Tamanho do Produto",tipo:"text"},{nome:"quantidade",placeholder:"Quantidade do Produto",tipo:"text"},{nome:"lancamento",placeholder:"É Lançamento?",tipo:"checkbox"},{nome:"oferta",placeholder:"É Oferta?",tipo:"checkbox"}],to=[{nome:"id",placeholder:"ID do Produto",tipo:"text"}],_=[{nome:"Branco",valor:"#FFFFFF"},{nome:"Preto",valor:"#000000"},{nome:"Cinza Claro",valor:"#D3D3D3"},{nome:"Cinza Escuro",valor:"#4B4B4B"},{nome:"Bege",valor:"#F5F5DC"},{nome:"Marrom",valor:"#8B4513"},{nome:"Azul Marinho",valor:"#000080"},{nome:"Azul Claro",valor:"#ADD8E6"},{nome:"Azul Jeans",valor:"#3B5998"},{nome:"Verde Militar",valor:"#4B5320"},{nome:"Verde Oliva",valor:"#808000"},{nome:"Verde Menta",valor:"#98FF98"},{nome:"Vermelho",valor:"#FF0000"},{nome:"Vermelho Vinho",valor:"#800000"},{nome:"Rosa Claro",valor:"#FFC0CB"},{nome:"Rosa Choque",valor:"#FF69B4"},{nome:"Roxo",valor:"#9370DB"},{nome:"Amarelo",valor:"#FFFF00"},{nome:"Amarelo Mostarda",valor:"#FFDB58"},{nome:"Laranja",valor:"#FFA500"},{nome:"Off White",valor:"#FAF9F6"},{nome:"Caramelo",valor:"#A0522D"},{nome:"Camelo",valor:"#C19A6B"},{nome:"Bronze",valor:"#CD7F32"},{nome:"Prata",valor:"#C0C0C0"},{nome:"Ouro",valor:"#FFD700"}],ao=[{nome:"PP",valor:"pp"},{nome:"P",valor:"P"},{nome:"M",valor:"M"},{nome:"G",valor:"G"},{nome:"GG",valor:"GG"},{nome:"XG",valor:"XG"},{nome:"ÚNICO",valor:"UNICO"},{nome:"33",valor:"33"},{nome:"34",valor:"34"},{nome:"35",valor:"35"},{nome:"36",valor:"36"},{nome:"37",valor:"37"},{nome:"38",valor:"38"},{nome:"39",valor:"39"},{nome:"40",valor:"40"},{nome:"41",valor:"41"},{nome:"42",valor:"42"},{nome:"43",valor:"43"},{nome:"44",valor:"44"}],no=(r,e,n)=>{n(e),r(!0)},io=(r,e)=>{r(!1),e(null)},so={cadastrar:o.jsx(Y,{}),editar:o.jsx(Z,{}),excluir:o.jsx(J,{}),ofertar:o.jsx(oo,{})},lo=[{tipo:"cadastrar",txt:"Cadastrar Produto"},{tipo:"editar",txt:"Editar Produto"},{tipo:"excluir",txt:"Excluir Produto"},{tipo:"ofertar",txt:"Ofertar Produto"}],co=(r,e)=>{e(n=>({...n,produto_cor:r}))},mo=(r,e)=>{const n={cor:{nome:"",valor:""},tamanhos:[]};e([...r,n])},po=(r,e,n)=>{const t=[...r];t[n].tamanhos.push({tamanho:"",quantidade:""}),e(t)},uo=(r,e,n,t)=>{const a=[...r],i=t.trim().toUpperCase(),s=_.find(d=>d.valor.toUpperCase()===i);s?a[n].cor=s:a[n].cor={nome:"",valor:""},e(a)},F=(r,e,n,t,a,i)=>{const s=[...r];s[n].tamanhos[t][a]=i,e(s)},ho=(r,e,n)=>{const t=[...r];t.splice(n,1),e(t)},xo=(r,e,n,t)=>{const a=[...r];a[n].tamanhos.splice(t,1),e(a)},P=async(r,e)=>{const{name:n,type:t,checked:a,value:i,files:s}=r.target;if(t==="file"){const d=[],c=await H();if(!c)return;for(const v of s){const p=new FormData;p.append("file",v),p.append("api_key",c.apiKey),p.append("timestamp",c.timestamp),p.append("signature",c.signature),p.append("folder",c.folder),p.append("upload_preset","ecommerce_signed");try{await U(p,d)}catch(k){console.error("Erro ao enviar imagem ao Cloudinary",k)}}e(v=>({...v,[n]:d}))}else e(d=>({...d,[n]:t==="checkbox"?a:i}))},vo=async(r,e,n,t,a,i,s,d,c)=>{if(s.preventDefault(),!r||!e||!n){V.error("Nome, preço e categoria são obrigatórios.");return}await W(r,e,t,n,a,i,d,c)},go=(r,e)=>{if(!Array.isArray(r))return[];if(!e||typeof e!="string")return r;const n=g(e.toLowerCase());return r.filter(t=>{const a=g(t.produto_nome.toLowerCase()),i=g(t.categoria_nome.toLowerCase());return a.includes(n)||i.includes(n)})},g=r=>r.normalize("NFD").replace(/[\u0300-\u036f]/g,"");function fo(){const[r,e]=u.useState(!1),[n,t]=u.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx(f,{children:lo.map((a,i)=>o.jsx(m,{onClick:()=>no(e,a.tipo,t),children:a.txt},i))}),r&&o.jsx(q,{onClose:()=>io(e,t),children:so[n]})]})}const Co=async r=>{const e=await G.get("http://localhost:3000/ecommerce/produtos");e.data.error?console.error(e.data.error):r(e.data.result)};function jo({busca:r}){const[e,n]=u.useState([]);u.useEffect(()=>{Co(n)},[]);const t=go(e||[],r);return o.jsx(D,{children:t.map(a=>o.jsxs(z,{children:[o.jsx(B,{src:a.fotos[0]?.foto_url,alt:a.produto_nome}),o.jsx(M,{children:a.produto_nome}),o.jsxs(y,{children:["Categoria: ",a.categoria_nome]}),o.jsxs(y,{children:["Lançamento: ",a.produto_lancamento?"Sim":"Não"]}),o.jsxs(A,{children:["R$ ",X(a.produto_preco)]}),o.jsxs(L,{children:[o.jsx("strong",{children:"Cores:"}),a.cores.map((i,s)=>o.jsxs("div",{children:[o.jsxs(S,{children:[o.jsx(E,{$cor:i.cor_hex}),o.jsx("span",{children:i.cor_nome})]}),o.jsx(N,{children:i.tamanhos.map((d,c)=>o.jsxs("li",{children:[d.tamanho,": ",d.quantidade," un."]},c))})]},s))]})]},a.produto_id))})}const Bo=l.nav`
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
`,Mo=l.div`
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
`,Ao=l.ul`
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
`,So=l.button`
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
`,Eo=l.ul`
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
`,Oo=l(w)`
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
`,To=l(w)`
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
`,Io=l.button`
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
`,Vo=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;function Fo({busca:r,setBusca:e}){return o.jsx(bo,{children:o.jsx(yo,{type:"text",placeholder:"Nome ou Categoria do Produto",value:r,onChange:n=>e(n.target.value),style:{border:"1px solid #A63F2C",borderRadius:"8px"}})})}function Go(){const[r,e]=u.useState("");return o.jsxs(O,{children:[o.jsx(Q,{}),o.jsx("title",{children:"Produtos"}),o.jsx(x,{children:"Produtos"}),o.jsxs(T,{style:{alignItems:"center"},children:[o.jsx(fo,{}),o.jsx(Fo,{busca:r,setBusca:e}),o.jsx(jo,{busca:r})]})]})}export{Go as A,Io as B,Vo as C,So as H,Ao as L,Eo as M,Bo as N,No as O,bo as S,Oo as a,To as b,yo as c,Lo as d,Mo as e};
