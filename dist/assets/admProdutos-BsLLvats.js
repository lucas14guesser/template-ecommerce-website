import{j as o,T as g,x as _,D as F,K as w,i as p,n as v,d as c,b as m,m as f,W as I,M as D,O as L,P as N,Q as C,U as R,V as T,X as k,h as $,Y as V,Z as G,_ as W,$ as q,p as z,k as U,S as H}from"./GlobalStyles-TciS0uQl.js";import{u as b,y as u}from"./index-BhptFzzy.js";import{l as X,M as K}from"./ModalOverlay-oHl-aN-V.js";import{b as Q,c as Y,d as Z,e as J}from"./PostMethods-hqUU090Z.js";import{h as O}from"./GlobalMethod-C3y23nLv.js";import{B as oo}from"./BtnVoltar-v5ncymXV.js";import{g as eo}from"./GetMethods-DZBmUThK.js";import{p as y}from"./HomeServices-DqpnKgQ_.js";function ro({cores:r,setCores:e}){return o.jsxs(o.Fragment,{children:[o.jsx(g,{children:"Cores e Tamanhos"}),(r||[]).map((a,t)=>o.jsxs(_,{style:{padding:"0",gap:"0"},children:[o.jsxs(F,{style:{padding:"1rem 0"},children:[o.jsxs(w,{value:a.cor?.valor||"",onChange:n=>yo(r,e,t,n.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Cor"}),E.map((n,s)=>o.jsx("option",{value:n.valor,children:n.nome},s))]}),o.jsx(p,{type:"button",onClick:()=>Fo(r,e,t),style:{width:"3rem"},children:"-"})]}),a.tamanhos.map((n,s)=>o.jsxs(_,{style:{padding:"0",gap:"0",alignItems:"flex-start"},children:[o.jsxs(w,{name:"list_tamanho",value:n.tamanho,onChange:i=>S(r,e,t,s,"tamanho",i.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Tamanho"}),xo.map((i,d)=>o.jsx("option",{value:i.valor,children:i.nome},d))]}),o.jsxs(F,{style:{padding:"1rem 0"},children:[o.jsx(v,{type:"number",placeholder:"Quantidade",value:n.quantidade,onChange:i=>S(r,e,t,s,"quantidade",i.target.value)}),o.jsx(p,{type:"button",onClick:()=>wo(r,e,t,s),style:{width:"3rem"},children:"–"})]})]},s)),o.jsx(p,{type:"button",onClick:()=>bo(r,e,t),children:"+ Tamanho"})]},t)),o.jsx(p,{type:"button",onClick:()=>Po(r,e),children:"+ Cor"})]})}const to=c.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
`;function ao(){const{user:r}=b(),[e,a]=m.useState({produto_nome:"",produto_preco:"",produto_categoria:"",produto_lancamento:!1,produto_foto:[],produto_cor:[]});return o.jsxs(f,{onSubmit:t=>_o(e.produto_nome,e.produto_preco,e.produto_categoria,e.produto_lancamento,e.produto_foto,e.produto_cor,t,a,r.token),children:[o.jsx(g,{children:"Cadastrar Produto"}),o.jsxs(w,{value:e.produto_categoria,onChange:t=>a(n=>({...n,produto_categoria:t.target.value})),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Categorias"}),X.map((t,n)=>o.jsx("option",{value:t.nome,children:t.nome},n))]}),po.map((t,n)=>t.tipo==="checkbox"?o.jsxs(to,{children:[t.placeholder,o.jsx(v,{type:t.tipo,name:t.nome,onChange:s=>B(s,a),style:{width:"24rem",cursor:"pointer"}})]},n):o.jsx(v,{type:t.tipo,placeholder:t.placeholder,name:t.nome,onChange:s=>B(s,a),multiple:t.tipo==="file"},n)),o.jsx(ro,{cores:e.produto_cor,setCores:t=>Co(t,a)}),o.jsx(p,{type:"submit",children:"Cadastrar"})]})}function no(){return o.jsxs(f,{children:[o.jsx(g,{children:"Editar Produto"}),uo.map((r,e)=>o.jsx(v,{type:r.tipo,placeholder:r.placeholder,id:r.nome,name:r.nome},e)),o.jsx(p,{type:"submit",children:"Editar"})]})}function so(){const{user:r}=b(),[e,a]=m.useState("");return o.jsxs(f,{onSubmit:t=>So(t,e,r.token),children:[o.jsx(g,{children:"Excluir Produto"}),A.map((t,n)=>o.jsx(v,{type:t.tipo,placeholder:t.placeholder,value:e,onChange:s=>a(s.target.value)},n)),o.jsx(p,{type:"submit",children:"Excluir"})]})}function io(){const{user:r}=b(),[e,a]=m.useState(""),[t,n]=m.useState(""),s=ho(e,a,t,n);return o.jsxs(f,{onSubmit:i=>Bo(i,e,t,r.token),children:[o.jsx(g,{children:"Ofertar Produto"}),s.map((i,d)=>o.jsx(v,{type:i.tipo,placeholder:i.placeholder,value:i.valor,onChange:l=>i.change(l.target.value)},d)),o.jsx(p,{type:"submit",children:"Ofertar"})]})}const lo=async(r,e)=>{try{const a=await O.delete(`/del-produto/${r}`,{headers:{Authorization:`Bearer ${e}`}});a.data.error?u.error(a.data.error):u.success(`Produto ${r} excluído com sucesso!`)}catch(a){throw u.error("Erro na exclusão do produto: "+a.message),new Error("Erro na exclusão do produto: "+a.message)}},co=async(r,e)=>{try{const a=await O.delete(`/ret-oferta/${r}`,{headers:{Authorization:`Bearer ${e}`}});a.data.error?u.error(a.data.error):u.success(`Oferta do produto ${r} retirada com sucesso!`)}catch(a){throw u.error("Erro ao retirar a oferta do produto: "+a.message),new Error("Erro ao retirar a oferta do produto: "+a.message)}};function mo(){const{user:r}=b(),[e,a]=m.useState("");return o.jsxs(f,{onSubmit:t=>zo(t,e,r.token),children:[o.jsx(g,{children:"Excluir Produto"}),A.map((t,n)=>o.jsx(v,{type:t.tipo,placeholder:t.placeholder,value:e,onChange:s=>a(s.target.value)},n)),o.jsx(p,{type:"submit",children:"Retirar"})]})}const po=[{nome:"produto_nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"produto_preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"produto_lancamento",placeholder:"O produto cadastrado é lançamento?",tipo:"checkbox"},{nome:"produto_foto",placeholder:"Foto do Produto",tipo:"file"}],uo=[{nome:"id",placeholder:"ID do Produto",tipo:"text"},{nome:"produto_nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"produto_preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"produto_lancamento",placeholder:"O produto cadastrado é lançamento?",tipo:"checkbox"},{nome:"produto_foto",placeholder:"Foto do Produto",tipo:"file"}],A=[{nome:"id",placeholder:"ID do Produto",tipo:"text"}],ho=(r,e,a,t)=>[{nome:"produto_id",placeholder:"ID do Produto",tipo:"text",valor:r,change:e},{nome:"oferta_novo_preco",placeholder:"Novo Preço do Produto",tipo:"text",valor:a,change:t}],E=[{nome:"Branco",valor:"#FFFFFF"},{nome:"Preto",valor:"#000000"},{nome:"Cinza Claro",valor:"#D3D3D3"},{nome:"Cinza Escuro",valor:"#4B4B4B"},{nome:"Bege",valor:"#F5F5DC"},{nome:"Marrom",valor:"#8B4513"},{nome:"Azul Marinho",valor:"#000080"},{nome:"Azul Claro",valor:"#ADD8E6"},{nome:"Azul Jeans",valor:"#3B5998"},{nome:"Verde Militar",valor:"#4B5320"},{nome:"Verde Oliva",valor:"#808000"},{nome:"Verde Menta",valor:"#98FF98"},{nome:"Vermelho",valor:"#FF0000"},{nome:"Vermelho Vinho",valor:"#800000"},{nome:"Rosa Claro",valor:"#FFC0CB"},{nome:"Rosa Choque",valor:"#FF69B4"},{nome:"Roxo",valor:"#9370DB"},{nome:"Amarelo",valor:"#FFFF00"},{nome:"Amarelo Mostarda",valor:"#FFDB58"},{nome:"Laranja",valor:"#FFA500"},{nome:"Off White",valor:"#FAF9F6"},{nome:"Caramelo",valor:"#A0522D"},{nome:"Camelo",valor:"#C19A6B"},{nome:"Bronze",valor:"#CD7F32"},{nome:"Prata",valor:"#C0C0C0"},{nome:"Ouro",valor:"#FFD700"}],xo=[{nome:"PP",valor:"pp"},{nome:"P",valor:"P"},{nome:"M",valor:"M"},{nome:"G",valor:"G"},{nome:"GG",valor:"GG"},{nome:"XG",valor:"XG"},{nome:"ÚNICO",valor:"UNICO"},{nome:"33",valor:"33"},{nome:"34",valor:"34"},{nome:"35",valor:"35"},{nome:"36",valor:"36"},{nome:"37",valor:"37"},{nome:"38",valor:"38"},{nome:"39",valor:"39"},{nome:"40",valor:"40"},{nome:"41",valor:"41"},{nome:"42",valor:"42"},{nome:"43",valor:"43"},{nome:"44",valor:"44"}],vo=(r,e,a)=>{a(e),r(!0)},go=(r,e)=>{r(!1),e(null)},fo={cadastrar:o.jsx(ao,{}),editar:o.jsx(no,{}),excluir:o.jsx(so,{}),ofertar:o.jsx(io,{}),retirar_oferta:o.jsx(mo,{})},jo=[{tipo:"cadastrar",txt:"Cadastrar Produto"},{tipo:"editar",txt:"Editar Produto"},{tipo:"excluir",txt:"Excluir Produto"},{tipo:"ofertar",txt:"Ofertar Produto"},{tipo:"retirar_oferta",txt:"Retirar Oferta"}],Co=(r,e)=>{e(a=>({...a,produto_cor:r}))},Po=(r,e)=>{const a={cor:{nome:"",valor:""},tamanhos:[]};e([...r,a])},bo=(r,e,a)=>{const t=[...r];t[a].tamanhos.push({tamanho:"",quantidade:""}),e(t)},yo=(r,e,a,t)=>{const n=[...r],s=t.trim().toUpperCase(),i=E.find(d=>d.valor.toUpperCase()===s);i?n[a].cor=i:n[a].cor={nome:"",valor:""},e(n)},S=(r,e,a,t,n,s)=>{const i=[...r];i[a].tamanhos[t][n]=s,e(i)},Fo=(r,e,a)=>{const t=[...r];t.splice(a,1),e(t)},wo=(r,e,a,t)=>{const n=[...r];n[a].tamanhos.splice(t,1),e(n)},B=async(r,e)=>{const{name:a,type:t,checked:n,value:s,files:i}=r.target;if(t==="file"){const d=[],l=await Z();if(!l)return;for(const x of i){const h=new FormData;h.append("file",x),h.append("api_key",l.apiKey),h.append("timestamp",l.timestamp),h.append("signature",l.signature),h.append("folder",l.folder),h.append("upload_preset","ecommerce_signed");try{await J(h,d)}catch(j){console.error("Erro ao enviar imagem ao Cloudinary",j)}}e(x=>({...x,[a]:d}))}else e(d=>({...d,[a]:t==="checkbox"?n:s}))},_o=async(r,e,a,t,n,s,i,d,l)=>{if(i.preventDefault(),!r||!e||!a){u.error("Nome, preço e categoria são obrigatórios.");return}await Y(r,e,t,a,n,s,d,l)},Do=(r,e)=>{if(!Array.isArray(r))return[];if(!e||typeof e!="string")return r;const a=P(e.toLowerCase());return r.filter(t=>{const n=P(String(t.produto_id).toLowerCase()),s=P(t.produto_nome.toLowerCase()),i=P(t.categoria_nome.toLowerCase());return n.includes(a)||s.includes(a)||i.includes(a)})},P=r=>r.normalize("NFD").replace(/[\u0300-\u036f]/g,""),ko=(r,e)=>{const t=(r-1)*4,n=t+4,s=e.slice(t,n),i=Math.ceil(e.length/4);return{produtosPaginados:s,totalPaginas:i}},So=async(r,e,a)=>{if(r.preventDefault(),!e){u.error("ID do produto precisa ser preenchido");return}await lo(e,a)},Bo=async(r,e,a,t)=>{if(r.preventDefault(),!e||!a){u.error("Todos os campos precisam ser preenchidos");return}await Q(e,a,t)},zo=async(r,e,a)=>{if(r.preventDefault(),!e){u.error("ID do produto precisa ser preenchido");return}await co(e,a)};function Oo(){const[r,e]=m.useState(!1),[a,t]=m.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx(F,{children:jo.map((n,s)=>o.jsx(p,{onClick:()=>vo(e,n.tipo,t),children:n.txt},s))}),r&&o.jsx(K,{onClose:()=>go(e,t),children:fo[a]})]})}function Ao({paginaAtual:r,totalPaginas:e,onAnterior:a,onProxima:t}){return o.jsxs(I,{children:[o.jsx(D,{onClick:a,disabled:r===1,children:"Anterior"}),o.jsxs("span",{children:["Página ",r," de ",e]}),o.jsx(D,{onClick:t,disabled:r===e,children:"Próxima"})]})}function Eo({busca:r}){const[e,a]=m.useState([]),[t,n]=m.useState(1);m.useEffect(()=>{eo(a)},[]);const s=Do(e||[],r),{produtosPaginados:i,totalPaginas:d}=ko(t,s);return o.jsxs(o.Fragment,{children:[o.jsx(L,{children:i.map(l=>o.jsxs(N,{children:[o.jsxs(C,{children:["Identificador: ",l.produto_id]}),o.jsx(R,{src:l.fotos[0]?.foto_produto_url,alt:l.produto_nome}),o.jsx(T,{children:l.produto_nome}),o.jsxs(k,{children:["Categoria: ",l.categoria_nome]}),o.jsxs(k,{children:["Lançamento: ",l.produto_lancamento?"Sim":"Não"]}),l.oferta.oferta_ativo?o.jsxs($,{children:[o.jsxs(C,{style:{textDecoration:"line-through",color:"gray"},children:["R$ ",y(l.produto_preco)]}),o.jsxs(C,{children:["R$ ",y(l.oferta.oferta_novo_preco)]})]}):o.jsxs(C,{children:["R$ ",y(l.produto_preco)]}),o.jsxs(V,{children:[o.jsx("strong",{children:"Cores:"}),l.cores.map((x,h)=>o.jsxs("div",{children:[o.jsxs(G,{children:[o.jsx(W,{$cor:x.cor_hex}),o.jsx("span",{children:x.cor_nome})]}),o.jsx(q,{children:x.tamanhos.map((j,M)=>o.jsxs("li",{children:[j.tamanho,": ",j.quantidade," un."]},M))})]},h))]})]},l.produto_id))}),o.jsx(Ao,{paginaAtual:t,totalPaginas:d,onAnterior:()=>n(l=>Math.max(1,l-1)),onProxima:()=>n(l=>Math.min(d,l+1))})]})}const Uo=c.nav`
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
`,Ho=c.div`
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
`,Xo=c.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  list-style-type: none;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: center;
    gap: 1rem;
  }
`,Ko=c.ul`
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
`,Qo=c.button`
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
`,Yo=c.ul`
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
`,Zo=c.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 999;
`,Jo=c(z)`
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
`,oe=c(z)`
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
`,Mo=c.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.5rem;
`,Io=c.input`
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
`,ee=c.button`
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
`,re=c.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;function Lo({busca:r,setBusca:e}){return o.jsx(Mo,{children:o.jsx(Io,{type:"text",placeholder:"ID, Nome ou Categoria do Produto",value:r,onChange:a=>e(a.target.value),style:{border:"1px solid #A63F2C",borderRadius:"8px"}})})}function te(){const[r,e]=m.useState("");return o.jsxs(U,{children:[o.jsx(oo,{}),o.jsx("title",{children:"Produtos"}),o.jsx(g,{children:"Produtos"}),o.jsxs(H,{style:{alignItems:"center"},children:[o.jsx(Oo,{}),o.jsx(Lo,{busca:r,setBusca:e}),o.jsx(Eo,{busca:r})]})]})}export{te as A,ee as B,re as C,Qo as H,Xo as L,Yo as M,Uo as N,Zo as O,Mo as S,Jo as a,oe as b,Io as c,Ko as d,Ho as e};
