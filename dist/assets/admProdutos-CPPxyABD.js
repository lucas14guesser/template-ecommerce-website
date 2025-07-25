import{j as r,T as g,D as k,x as F,K as y,i as m,n as v,d as c,b as u,m as f,W as T,M as D,O as $,P as V,Q as P,U as G,V as W,X as S,h as q,Y as U,Z as H,_ as X,$ as K,p as z,k as Q,S as Y}from"./GlobalStyles-DQ6u4sTK.js";import{u as j,y as p}from"./index-BKEgOQDp.js";import{l as E,M as Z}from"./ModalOverlay-Cy9whuyh.js";import{b as J,c as oo,d as eo,e as ro}from"./PostMethods-Dlj5QvIc.js";import{h as O}from"./GlobalMethod-CF9y8IGC.js";import{p as to}from"./PutMethods-E5h9bK74.js";import{B as ao}from"./BtnVoltar-CDqr3WFE.js";import{g as no}from"./GetMethods-BYPfghwf.js";import{p as w}from"./HomeServices-B90rqgiG.js";function A({cores:a,setCores:o}){return r.jsxs(r.Fragment,{children:[r.jsx(g,{children:"Cores e Tamanhos"}),(a||[]).map((t,e)=>r.jsxs(k,{style:{padding:"0",gap:"0"},children:[r.jsxs(F,{style:{padding:"1rem 0"},children:[r.jsxs(y,{value:t.cor?.valor||"",onChange:n=>_o(a,o,e,n.target.value),children:[r.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Cor"}),L.map((n,s)=>r.jsx("option",{value:n.valor,children:n.nome},s))]}),r.jsx(m,{type:"button",onClick:()=>wo(a,o,e),style:{width:"3rem"},children:"-"})]}),t.tamanhos.map((n,s)=>r.jsxs(k,{style:{padding:"0",gap:"0",alignItems:"flex-start"},children:[r.jsxs(y,{name:"list_tamanho",value:n.tamanho,onChange:i=>B(a,o,e,s,"tamanho",i.target.value),children:[r.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Tamanho"}),go.map((i,l)=>r.jsx("option",{value:i.valor,children:i.nome},l))]}),r.jsxs(F,{style:{padding:"1rem 0"},children:[r.jsx(v,{type:"number",placeholder:"Quantidade",value:n.quantidade,onChange:i=>B(a,o,e,s,"quantidade",i.target.value)}),r.jsx(m,{type:"button",onClick:()=>Fo(a,o,e,s),style:{width:"3rem"},children:"–"})]})]},s)),r.jsx(m,{type:"button",onClick:()=>yo(a,o,e),children:"+ Tamanho"})]},e)),r.jsx(m,{type:"button",onClick:()=>bo(a,o),children:"+ Cor"})]})}const I=c.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
`;function so(){const{user:a}=j(),[o,t]=u.useState({produto_nome:"",produto_preco:"",produto_categoria:"",produto_lancamento:!1,produto_foto:[],produto_cor:[]});return r.jsxs(f,{onSubmit:e=>ko(o.produto_nome,o.produto_preco,o.produto_categoria,o.produto_lancamento,o.produto_foto,o.produto_cor,e,t,a.token),children:[r.jsx(g,{children:"Cadastrar Produto"}),r.jsxs(y,{value:o.produto_categoria,onChange:e=>t(n=>({...n,produto_categoria:e.target.value})),children:[r.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Categorias"}),E.map((e,n)=>r.jsx("option",{value:e.nome,children:e.nome},n))]}),ho.map((e,n)=>e.tipo==="checkbox"?r.jsxs(I,{children:[e.placeholder,r.jsx(v,{type:e.tipo,name:e.nome,onChange:s=>_(s,t),style:{width:"24rem",cursor:"pointer"}})]},n):r.jsx(v,{type:e.tipo,placeholder:e.placeholder,name:e.nome,onChange:s=>_(s,t),multiple:e.tipo==="file"},n)),r.jsx(A,{cores:o.produto_cor,setCores:e=>N(e,t)}),r.jsx(m,{type:"submit",children:"Cadastrar"})]})}function io(){const{user:a}=j(),[o,t]=u.useState({produto_id:"",produto_nome:"",produto_preco:"",produto_lancamento:!1,produto_categoria:"",produto_foto:[],produto_cor:[]});return r.jsxs(f,{onSubmit:e=>Oo(o.produto_id,o.produto_nome,o.produto_preco,o.produto_lancamento,o.produto_categoria,o.produto_foto,o.produto_cor,e,t,a.token),children:[r.jsx(g,{children:"Editar Produto"}),r.jsxs(y,{value:o.produto_categoria,onChange:e=>t(n=>({...n,produto_categoria:e.target.value})),children:[r.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Categorias"}),E.map((e,n)=>r.jsx("option",{value:e.nome,children:e.nome},n))]}),xo.map((e,n)=>e.tipo==="checkbox"?r.jsxs(I,{children:[e.placeholder,r.jsx(v,{type:e.tipo,name:e.nome,checked:!!o[e.nome],onChange:s=>_(s,t),style:{width:"24rem",cursor:"pointer"}})]},n):r.jsx(v,{type:e.tipo,placeholder:e.placeholder,name:e.nome,value:e.tipo!=="file"?o[e.nome]??"":void 0,onChange:s=>_(s,t),multiple:e.tipo==="file"},n)),r.jsx(A,{cores:o.produto_cor,setCores:e=>N(e,t)}),r.jsx(m,{type:"submit",children:"Editar Produto"})]})}function lo(){const{user:a}=j(),[o,t]=u.useState("");return r.jsxs(f,{onSubmit:e=>Bo(e,o,a.token),children:[r.jsx(g,{children:"Excluir Produto"}),M.map((e,n)=>r.jsx(v,{type:e.tipo,placeholder:e.placeholder,value:o,onChange:s=>t(s.target.value)},n)),r.jsx(m,{type:"submit",children:"Excluir"})]})}function co(){const{user:a}=j(),[o,t]=u.useState(""),[e,n]=u.useState(""),s=vo(o,t,e,n);return r.jsxs(f,{onSubmit:i=>zo(i,o,e,a.token),children:[r.jsx(g,{children:"Ofertar Produto"}),s.map((i,l)=>r.jsx(v,{type:i.tipo,placeholder:i.placeholder,value:i.valor,onChange:d=>i.change(d.target.value)},l)),r.jsx(m,{type:"submit",children:"Ofertar"})]})}const uo=async(a,o)=>{try{const t=await O.delete(`/del-produto/${a}`,{headers:{Authorization:`Bearer ${o}`}});t.data.error?p.error(t.data.error):p.success(`Produto ${a} excluído com sucesso!`)}catch(t){throw p.error("Erro na exclusão do produto: "+t.message),new Error("Erro na exclusão do produto: "+t.message)}},po=async(a,o)=>{try{const t=await O.delete(`/ret-oferta/${a}`,{headers:{Authorization:`Bearer ${o}`}});t.data.error?p.error(t.data.error):p.success(`Oferta do produto ${a} retirada com sucesso!`)}catch(t){throw p.error("Erro ao retirar a oferta do produto: "+t.message),new Error("Erro ao retirar a oferta do produto: "+t.message)}};function mo(){const{user:a}=j(),[o,t]=u.useState("");return r.jsxs(f,{onSubmit:e=>Eo(e,o,a.token),children:[r.jsx(g,{children:"Excluir Produto"}),M.map((e,n)=>r.jsx(v,{type:e.tipo,placeholder:e.placeholder,value:o,onChange:s=>t(s.target.value)},n)),r.jsx(m,{type:"submit",children:"Retirar"})]})}const ho=[{nome:"produto_nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"produto_preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"produto_lancamento",placeholder:"O produto cadastrado é lançamento?",tipo:"checkbox"},{nome:"produto_foto",placeholder:"Foto do Produto",tipo:"file"}],xo=[{nome:"produto_id",placeholder:"ID do Produto",tipo:"text"},{nome:"produto_nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"produto_preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"produto_lancamento",placeholder:"O produto cadastrado é lançamento?",tipo:"checkbox"},{nome:"produto_foto",placeholder:"Foto do Produto",tipo:"file"}],M=[{nome:"id",placeholder:"ID do Produto",tipo:"text"}],vo=(a,o,t,e)=>[{nome:"produto_id",placeholder:"ID do Produto",tipo:"text",valor:a,change:o},{nome:"oferta_novo_preco",placeholder:"Novo Preço do Produto",tipo:"text",valor:t,change:e}],L=[{nome:"Branco",valor:"#FFFFFF"},{nome:"Preto",valor:"#000000"},{nome:"Cinza Claro",valor:"#D3D3D3"},{nome:"Cinza Escuro",valor:"#4B4B4B"},{nome:"Bege",valor:"#F5F5DC"},{nome:"Marrom",valor:"#8B4513"},{nome:"Azul Marinho",valor:"#000080"},{nome:"Azul Claro",valor:"#ADD8E6"},{nome:"Azul Jeans",valor:"#3B5998"},{nome:"Verde Militar",valor:"#4B5320"},{nome:"Verde Oliva",valor:"#808000"},{nome:"Verde Menta",valor:"#98FF98"},{nome:"Vermelho",valor:"#FF0000"},{nome:"Vermelho Vinho",valor:"#800000"},{nome:"Rosa Claro",valor:"#FFC0CB"},{nome:"Rosa Choque",valor:"#FF69B4"},{nome:"Roxo",valor:"#9370DB"},{nome:"Amarelo",valor:"#FFFF00"},{nome:"Amarelo Mostarda",valor:"#FFDB58"},{nome:"Laranja",valor:"#FFA500"},{nome:"Off White",valor:"#FAF9F6"},{nome:"Caramelo",valor:"#A0522D"},{nome:"Camelo",valor:"#C19A6B"},{nome:"Bronze",valor:"#CD7F32"},{nome:"Prata",valor:"#C0C0C0"},{nome:"Ouro",valor:"#FFD700"}],go=[{nome:"PP",valor:"pp"},{nome:"P",valor:"P"},{nome:"M",valor:"M"},{nome:"G",valor:"G"},{nome:"GG",valor:"GG"},{nome:"XG",valor:"XG"},{nome:"ÚNICO",valor:"UNICO"},{nome:"33",valor:"33"},{nome:"34",valor:"34"},{nome:"35",valor:"35"},{nome:"36",valor:"36"},{nome:"37",valor:"37"},{nome:"38",valor:"38"},{nome:"39",valor:"39"},{nome:"40",valor:"40"},{nome:"41",valor:"41"},{nome:"42",valor:"42"},{nome:"43",valor:"43"},{nome:"44",valor:"44"}],fo=(a,o,t)=>{t(o),a(!0)},jo=(a,o)=>{a(!1),o(null)},Co={cadastrar:r.jsx(so,{}),editar:r.jsx(io,{}),excluir:r.jsx(lo,{}),ofertar:r.jsx(co,{}),retirar_oferta:r.jsx(mo,{})},Po=[{tipo:"cadastrar",txt:"Cadastrar Produto"},{tipo:"editar",txt:"Editar Produto"},{tipo:"excluir",txt:"Excluir Produto"},{tipo:"ofertar",txt:"Ofertar Produto"},{tipo:"retirar_oferta",txt:"Retirar Oferta"}],N=(a,o)=>{o(t=>({...t,produto_cor:a}))},bo=(a,o)=>{const t={cor:{nome:"",valor:""},tamanhos:[]};o([...a,t])},yo=(a,o,t)=>{const e=[...a];e[t].tamanhos.push({tamanho:"",quantidade:""}),o(e)},_o=(a,o,t,e)=>{const n=[...a],s=e.trim().toUpperCase(),i=L.find(l=>l.valor.toUpperCase()===s);i?n[t].cor=i:n[t].cor={nome:"",valor:""},o(n)},B=(a,o,t,e,n,s)=>{const i=[...a];i[t].tamanhos[e][n]=s,o(i)},wo=(a,o,t)=>{const e=[...a];e.splice(t,1),o(e)},Fo=(a,o,t,e)=>{const n=[...a];n[t].tamanhos.splice(e,1),o(n)},_=async(a,o)=>{const{name:t,type:e,checked:n,value:s,files:i}=a.target;if(e==="file"){const l=[],d=await oo();if(!d)return;for(const h of i){const x=new FormData;x.append("file",h),x.append("api_key",d.apiKey),x.append("timestamp",d.timestamp),x.append("signature",d.signature),x.append("folder",d.folder),x.append("upload_preset","ecommerce_signed");try{await eo(x,l)}catch(C){console.error("Erro ao enviar imagem ao Cloudinary",C)}}o(h=>({...h,[t]:l}))}else o(l=>({...l,[t]:e==="checkbox"?n:s}))},ko=async(a,o,t,e,n,s,i,l,d)=>{if(i.preventDefault(),!a||!o||!t){p.error("Nome, preço e categoria são obrigatórios.");return}await ro(a,o,e,t,n,s,l,d)},Do=(a,o)=>{if(!Array.isArray(a))return[];if(!o||typeof o!="string")return a;const t=b(o.toLowerCase());return a.filter(e=>{const n=b(String(e.produto_id).toLowerCase()),s=b(e.produto_nome.toLowerCase()),i=b(e.categoria_nome.toLowerCase());return n.includes(t)||s.includes(t)||i.includes(t)})},b=a=>a.normalize("NFD").replace(/[\u0300-\u036f]/g,""),So=(a,o)=>{const e=(a-1)*4,n=e+4,s=o.slice(e,n),i=Math.ceil(o.length/4);return{produtosPaginados:s,totalPaginas:i}},Bo=async(a,o,t)=>{if(a.preventDefault(),!o){p.error("ID do produto precisa ser preenchido");return}await uo(o,t)},zo=async(a,o,t,e)=>{if(a.preventDefault(),!o||!t){p.error("Todos os campos precisam ser preenchidos");return}await J(o,t,e)},Eo=async(a,o,t)=>{if(a.preventDefault(),!o){p.error("ID do produto precisa ser preenchido");return}await po(o,t)},Oo=async(a,o,t,e,n,s,i,l,d,h)=>{if(l.preventDefault(),!a||!o||!t||!n){p.error("ID, nome, preço e categoria são obrigatórios.");return}await to(a,o,t,e,n,s,i,d,h)};function Ao(){const[a,o]=u.useState(!1),[t,e]=u.useState(null);return r.jsxs(r.Fragment,{children:[r.jsx(F,{children:Po.map((n,s)=>r.jsx(m,{onClick:()=>fo(o,n.tipo,e),children:n.txt},s))}),a&&r.jsx(Z,{onClose:()=>jo(o,e),children:Co[t]})]})}function Io({paginaAtual:a,totalPaginas:o,onAnterior:t,onProxima:e}){return r.jsxs(T,{children:[r.jsx(D,{onClick:t,disabled:a===1,children:"Anterior"}),r.jsxs("span",{children:["Página ",a," de ",o]}),r.jsx(D,{onClick:e,disabled:a===o,children:"Próxima"})]})}function Mo({busca:a}){const[o,t]=u.useState([]),[e,n]=u.useState(1);u.useEffect(()=>{no(t)},[]);const s=Do(o||[],a),{produtosPaginados:i,totalPaginas:l}=So(e,s);return r.jsxs(r.Fragment,{children:[r.jsx($,{children:i.map(d=>r.jsxs(V,{children:[r.jsxs(P,{children:["Identificador: ",d.produto_id]}),r.jsx(G,{src:d.fotos[0]?.foto_produto_url,alt:d.produto_nome}),r.jsx(W,{children:d.produto_nome}),r.jsxs(S,{children:["Categoria: ",d.categoria_nome]}),r.jsxs(S,{children:["Lançamento: ",d.produto_lancamento?"Sim":"Não"]}),d.oferta.oferta_ativo?r.jsxs(q,{children:[r.jsxs(P,{style:{textDecoration:"line-through",color:"gray"},children:["R$ ",w(d.produto_preco)]}),r.jsxs(P,{children:["R$ ",w(d.oferta.oferta_novo_preco)]})]}):r.jsxs(P,{children:["R$ ",w(d.produto_preco)]}),r.jsxs(U,{children:[r.jsx("strong",{children:"Cores:"}),d.cores.map((h,x)=>r.jsxs("div",{children:[r.jsxs(H,{children:[r.jsx(X,{$cor:h.cor_hex}),r.jsx("span",{children:h.cor_nome})]}),r.jsx(K,{children:h.tamanhos.map((C,R)=>r.jsxs("li",{children:[C.tamanho,": ",C.quantidade," un."]},R))})]},x))]})]},d.produto_id))}),r.jsx(Io,{paginaAtual:e,totalPaginas:l,onAnterior:()=>n(d=>Math.max(1,d-1)),onProxima:()=>n(d=>Math.min(l,d+1))})]})}const Ko=c.nav`
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
`,Qo=c.div`
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
`,Yo=c.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  list-style-type: none;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: center;
    gap: 1rem;
  }
`,Zo=c.ul`
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
`,Jo=c.button`
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
`,oe=c.ul`
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
`,ee=c.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 999;
`,re=c(z)`
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
`,te=c(z)`
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
`,Lo=c.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.5rem;
`,No=c.input`
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
`,ae=c.button`
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
`,ne=c.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;function Ro({busca:a,setBusca:o}){return r.jsx(Lo,{children:r.jsx(No,{type:"text",placeholder:"ID, Nome ou Categoria do Produto",value:a,onChange:t=>o(t.target.value),style:{border:"1px solid #A63F2C",borderRadius:"8px"}})})}function se(){const[a,o]=u.useState("");return r.jsxs(Q,{children:[r.jsx(ao,{}),r.jsx("title",{children:"Produtos"}),r.jsx(g,{children:"Produtos"}),r.jsxs(Y,{style:{alignItems:"center"},children:[r.jsx(Ao,{}),r.jsx(Ro,{busca:a,setBusca:o}),r.jsx(Mo,{busca:a})]})]})}export{se as A,ae as B,ne as C,Jo as H,Yo as L,oe as M,Ko as N,ee as O,Lo as S,re as a,te as b,No as c,Zo as d,Qo as e};
