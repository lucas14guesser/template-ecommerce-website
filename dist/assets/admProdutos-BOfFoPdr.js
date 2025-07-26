import{j as o,T as g,D as w,x as F,K as b,i as m,n as v,d as c,b as u,m as f,W as T,M as k,O as L,P as $,Q as P,U as V,V as G,X as D,h as W,Y as q,Z as U,_ as H,$ as X,p as B,k as K,S as Q}from"./GlobalStyles-DQ6u4sTK.js";import{u as j,y as p}from"./index-BKEgOQDp.js";import{l as E,M as Y}from"./ModalOverlay-Cy9whuyh.js";import{b as Z,c as J,d as oo,e as eo}from"./PostMethods-Dlj5QvIc.js";import{h as O}from"./GlobalMethod-CF9y8IGC.js";import{p as ro}from"./PutMethods-E5h9bK74.js";import{B as to}from"./BtnVoltar-CDqr3WFE.js";import{g as ao}from"./GetMethods-BYPfghwf.js";import{p as _}from"./HomeServices-B90rqgiG.js";import{f as no}from"./ProdutosServices-CMOVCwW9.js";function z({cores:a,setCores:e}){return o.jsxs(o.Fragment,{children:[o.jsx(g,{children:"Cores e Tamanhos"}),(a||[]).map((t,r)=>o.jsxs(w,{style:{padding:"0",gap:"0"},children:[o.jsxs(F,{style:{padding:"1rem 0"},children:[o.jsxs(b,{value:t.cor?.valor||"",onChange:n=>_o(a,e,r,n.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Cor"}),A.map((n,s)=>o.jsx("option",{value:n.valor,children:n.nome},s))]}),o.jsx(m,{type:"button",onClick:()=>Fo(a,e,r),style:{width:"3rem"},children:"-"})]}),t.tamanhos.map((n,s)=>o.jsxs(w,{style:{padding:"0",gap:"0",alignItems:"flex-start"},children:[o.jsxs(b,{name:"list_tamanho",value:n.tamanho,onChange:i=>S(a,e,r,s,"tamanho",i.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Tamanho"}),go.map((i,l)=>o.jsx("option",{value:i.valor,children:i.nome},l))]}),o.jsxs(F,{style:{padding:"1rem 0"},children:[o.jsx(v,{type:"number",placeholder:"Quantidade",value:n.quantidade,onChange:i=>S(a,e,r,s,"quantidade",i.target.value)}),o.jsx(m,{type:"button",onClick:()=>wo(a,e,r,s),style:{width:"3rem"},children:"–"})]})]},s)),o.jsx(m,{type:"button",onClick:()=>yo(a,e,r),children:"+ Tamanho"})]},r)),o.jsx(m,{type:"button",onClick:()=>bo(a,e),children:"+ Cor"})]})}const I=c.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
`;function so(){const{user:a}=j(),[e,t]=u.useState({produto_nome:"",produto_preco:"",produto_categoria:"",produto_lancamento:!1,produto_foto:[],produto_cor:[]});return o.jsxs(f,{onSubmit:r=>ko(e.produto_nome,e.produto_preco,e.produto_categoria,e.produto_lancamento,e.produto_foto,e.produto_cor,r,t,a.token),children:[o.jsx(g,{children:"Cadastrar Produto"}),o.jsxs(b,{value:e.produto_categoria,onChange:r=>t(n=>({...n,produto_categoria:r.target.value})),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Categorias"}),E.map((r,n)=>o.jsx("option",{value:r.nome,children:r.nome},n))]}),ho.map((r,n)=>r.tipo==="checkbox"?o.jsxs(I,{children:[r.placeholder,o.jsx(v,{type:r.tipo,name:r.nome,onChange:s=>y(s,t),style:{width:"24rem",cursor:"pointer"}})]},n):o.jsx(v,{type:r.tipo,placeholder:r.placeholder,name:r.nome,onChange:s=>y(s,t),multiple:r.tipo==="file"},n)),o.jsx(z,{cores:e.produto_cor,setCores:r=>N(r,t)}),o.jsx(m,{type:"submit",children:"Cadastrar"})]})}function io(){const{user:a}=j(),[e,t]=u.useState({produto_id:"",produto_nome:"",produto_preco:"",produto_lancamento:!1,produto_categoria:"",produto_foto:[],produto_cor:[]});return o.jsxs(f,{onSubmit:r=>Oo(e.produto_id,e.produto_nome,e.produto_preco,e.produto_lancamento,e.produto_categoria,e.produto_foto,e.produto_cor,r,t,a.token),children:[o.jsx(g,{children:"Editar Produto"}),o.jsxs(b,{value:e.produto_categoria,onChange:r=>t(n=>({...n,produto_categoria:r.target.value})),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Categorias"}),E.map((r,n)=>o.jsx("option",{value:r.nome,children:r.nome},n))]}),xo.map((r,n)=>r.tipo==="checkbox"?o.jsxs(I,{children:[r.placeholder,o.jsx(v,{type:r.tipo,name:r.nome,checked:!!e[r.nome],onChange:s=>y(s,t),style:{width:"24rem",cursor:"pointer"}})]},n):o.jsx(v,{type:r.tipo,placeholder:r.placeholder,name:r.nome,value:r.tipo!=="file"?e[r.nome]??"":void 0,onChange:s=>y(s,t),multiple:r.tipo==="file"},n)),o.jsx(z,{cores:e.produto_cor,setCores:r=>N(r,t)}),o.jsx(m,{type:"submit",children:"Editar Produto"})]})}function lo(){const{user:a}=j(),[e,t]=u.useState("");return o.jsxs(f,{onSubmit:r=>So(r,e,a.token),children:[o.jsx(g,{children:"Excluir Produto"}),M.map((r,n)=>o.jsx(v,{type:r.tipo,placeholder:r.placeholder,value:e,onChange:s=>t(s.target.value)},n)),o.jsx(m,{type:"submit",children:"Excluir"})]})}function co(){const{user:a}=j(),[e,t]=u.useState(""),[r,n]=u.useState(""),s=vo(e,t,r,n);return o.jsxs(f,{onSubmit:i=>Bo(i,e,r,a.token),children:[o.jsx(g,{children:"Ofertar Produto"}),s.map((i,l)=>o.jsx(v,{type:i.tipo,placeholder:i.placeholder,value:i.valor,onChange:d=>i.change(d.target.value)},l)),o.jsx(m,{type:"submit",children:"Ofertar"})]})}const uo=async(a,e)=>{try{const t=await O.delete(`/del-produto/${a}`,{headers:{Authorization:`Bearer ${e}`}});t.data.error?p.error(t.data.error):p.success(`Produto ${a} excluído com sucesso!`)}catch(t){throw p.error("Erro na exclusão do produto: "+t.message),new Error("Erro na exclusão do produto: "+t.message)}},po=async(a,e)=>{try{const t=await O.delete(`/ret-oferta/${a}`,{headers:{Authorization:`Bearer ${e}`}});t.data.error?p.error(t.data.error):p.success(`Oferta do produto ${a} retirada com sucesso!`)}catch(t){throw p.error("Erro ao retirar a oferta do produto: "+t.message),new Error("Erro ao retirar a oferta do produto: "+t.message)}};function mo(){const{user:a}=j(),[e,t]=u.useState("");return o.jsxs(f,{onSubmit:r=>Eo(r,e,a.token),children:[o.jsx(g,{children:"Excluir Produto"}),M.map((r,n)=>o.jsx(v,{type:r.tipo,placeholder:r.placeholder,value:e,onChange:s=>t(s.target.value)},n)),o.jsx(m,{type:"submit",children:"Retirar"})]})}const ho=[{nome:"produto_nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"produto_preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"produto_lancamento",placeholder:"O produto cadastrado é lançamento?",tipo:"checkbox"},{nome:"produto_foto",placeholder:"Foto do Produto",tipo:"file"}],xo=[{nome:"produto_id",placeholder:"ID do Produto",tipo:"text"},{nome:"produto_nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"produto_preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"produto_lancamento",placeholder:"O produto cadastrado é lançamento?",tipo:"checkbox"},{nome:"produto_foto",placeholder:"Foto do Produto",tipo:"file"}],M=[{nome:"id",placeholder:"ID do Produto",tipo:"text"}],vo=(a,e,t,r)=>[{nome:"produto_id",placeholder:"ID do Produto",tipo:"text",valor:a,change:e},{nome:"oferta_novo_preco",placeholder:"Novo Preço do Produto",tipo:"text",valor:t,change:r}],A=[{nome:"Branco",valor:"#FFFFFF"},{nome:"Preto",valor:"#000000"},{nome:"Cinza Claro",valor:"#D3D3D3"},{nome:"Cinza Escuro",valor:"#4B4B4B"},{nome:"Bege",valor:"#F5F5DC"},{nome:"Marrom",valor:"#8B4513"},{nome:"Azul Marinho",valor:"#000080"},{nome:"Azul Claro",valor:"#ADD8E6"},{nome:"Azul Jeans",valor:"#3B5998"},{nome:"Verde Militar",valor:"#4B5320"},{nome:"Verde Oliva",valor:"#808000"},{nome:"Verde Menta",valor:"#98FF98"},{nome:"Vermelho",valor:"#FF0000"},{nome:"Vermelho Vinho",valor:"#800000"},{nome:"Rosa Claro",valor:"#FFC0CB"},{nome:"Rosa Choque",valor:"#FF69B4"},{nome:"Roxo",valor:"#9370DB"},{nome:"Amarelo",valor:"#FFFF00"},{nome:"Amarelo Mostarda",valor:"#FFDB58"},{nome:"Laranja",valor:"#FFA500"},{nome:"Off White",valor:"#FAF9F6"},{nome:"Caramelo",valor:"#A0522D"},{nome:"Camelo",valor:"#C19A6B"},{nome:"Bronze",valor:"#CD7F32"},{nome:"Prata",valor:"#C0C0C0"},{nome:"Ouro",valor:"#FFD700"}],go=[{nome:"PP",valor:"pp"},{nome:"P",valor:"P"},{nome:"M",valor:"M"},{nome:"G",valor:"G"},{nome:"GG",valor:"GG"},{nome:"XG",valor:"XG"},{nome:"ÚNICO",valor:"UNICO"},{nome:"33",valor:"33"},{nome:"34",valor:"34"},{nome:"35",valor:"35"},{nome:"36",valor:"36"},{nome:"37",valor:"37"},{nome:"38",valor:"38"},{nome:"39",valor:"39"},{nome:"40",valor:"40"},{nome:"41",valor:"41"},{nome:"42",valor:"42"},{nome:"43",valor:"43"},{nome:"44",valor:"44"}],fo=(a,e,t)=>{t(e),a(!0)},jo=(a,e)=>{a(!1),e(null)},Co={cadastrar:o.jsx(so,{}),editar:o.jsx(io,{}),excluir:o.jsx(lo,{}),ofertar:o.jsx(co,{}),retirar_oferta:o.jsx(mo,{})},Po=[{tipo:"cadastrar",txt:"Cadastrar Produto"},{tipo:"editar",txt:"Editar Produto"},{tipo:"excluir",txt:"Excluir Produto"},{tipo:"ofertar",txt:"Ofertar Produto"},{tipo:"retirar_oferta",txt:"Retirar Oferta"}],N=(a,e)=>{e(t=>({...t,produto_cor:a}))},bo=(a,e)=>{const t={cor:{nome:"",valor:""},tamanhos:[]};e([...a,t])},yo=(a,e,t)=>{const r=[...a];r[t].tamanhos.push({tamanho:"",quantidade:""}),e(r)},_o=(a,e,t,r)=>{const n=[...a],s=r.trim().toUpperCase(),i=A.find(l=>l.valor.toUpperCase()===s);i?n[t].cor=i:n[t].cor={nome:"",valor:""},e(n)},S=(a,e,t,r,n,s)=>{const i=[...a];i[t].tamanhos[r][n]=s,e(i)},Fo=(a,e,t)=>{const r=[...a];r.splice(t,1),e(r)},wo=(a,e,t,r)=>{const n=[...a];n[t].tamanhos.splice(r,1),e(n)},y=async(a,e)=>{const{name:t,type:r,checked:n,value:s,files:i}=a.target;if(r==="file"){const l=[],d=await J();if(!d)return;for(const h of i){const x=new FormData;x.append("file",h),x.append("api_key",d.apiKey),x.append("timestamp",d.timestamp),x.append("signature",d.signature),x.append("folder",d.folder),x.append("upload_preset","ecommerce_signed");try{await oo(x,l)}catch(C){console.error("Erro ao enviar imagem ao Cloudinary",C)}}e(h=>({...h,[t]:l}))}else e(l=>({...l,[t]:r==="checkbox"?n:s}))},ko=async(a,e,t,r,n,s,i,l,d)=>{if(i.preventDefault(),!a||!e||!t){p.error("Nome, preço e categoria são obrigatórios.");return}await eo(a,e,r,t,n,s,l,d)},Do=(a,e)=>{const r=(a-1)*4,n=r+4,s=e.slice(r,n),i=Math.ceil(e.length/4);return{produtosPaginados:s,totalPaginas:i}},So=async(a,e,t)=>{if(a.preventDefault(),!e){p.error("ID do produto precisa ser preenchido");return}await uo(e,t)},Bo=async(a,e,t,r)=>{if(a.preventDefault(),!e||!t){p.error("Todos os campos precisam ser preenchidos");return}await Z(e,t,r)},Eo=async(a,e,t)=>{if(a.preventDefault(),!e){p.error("ID do produto precisa ser preenchido");return}await po(e,t)},Oo=async(a,e,t,r,n,s,i,l,d,h)=>{if(l.preventDefault(),!a||!e||!t||!n){p.error("ID, nome, preço e categoria são obrigatórios.");return}await ro(a,e,t,r,n,s,i,d,h)};function zo(){const[a,e]=u.useState(!1),[t,r]=u.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx(F,{children:Po.map((n,s)=>o.jsx(m,{onClick:()=>fo(e,n.tipo,r),children:n.txt},s))}),a&&o.jsx(Y,{onClose:()=>jo(e,r),children:Co[t]})]})}function Io({paginaAtual:a,totalPaginas:e,onAnterior:t,onProxima:r}){return o.jsxs(T,{children:[o.jsx(k,{onClick:t,disabled:a===1,children:"Anterior"}),o.jsxs("span",{children:["Página ",a," de ",e]}),o.jsx(k,{onClick:r,disabled:a===e,children:"Próxima"})]})}function Mo({busca:a}){const[e,t]=u.useState([]),[r,n]=u.useState(1);u.useEffect(()=>{ao(t)},[]);const s=no(e||[],a),{produtosPaginados:i,totalPaginas:l}=Do(r,s);return o.jsxs(o.Fragment,{children:[o.jsx(L,{children:i.map(d=>o.jsxs($,{children:[o.jsxs(P,{children:["Identificador: ",d.produto_id]}),o.jsx(V,{src:d.fotos[0]?.foto_produto_url,alt:d.produto_nome}),o.jsx(G,{children:d.produto_nome}),o.jsxs(D,{children:["Categoria: ",d.categoria_nome]}),o.jsxs(D,{children:["Lançamento: ",d.produto_lancamento?"Sim":"Não"]}),d.oferta.oferta_ativo?o.jsxs(W,{children:[o.jsxs(P,{style:{textDecoration:"line-through",color:"gray"},children:["R$ ",_(d.produto_preco)]}),o.jsxs(P,{children:["R$ ",_(d.oferta.oferta_novo_preco)]})]}):o.jsxs(P,{children:["R$ ",_(d.produto_preco)]}),o.jsxs(q,{children:[o.jsx("strong",{children:"Cores:"}),d.cores.map((h,x)=>o.jsxs("div",{children:[o.jsxs(U,{children:[o.jsx(H,{$cor:h.cor_hex}),o.jsx("span",{children:h.cor_nome})]}),o.jsx(X,{children:h.tamanhos.map((C,R)=>o.jsxs("li",{children:[C.tamanho,": ",C.quantidade," un."]},R))})]},x))]})]},d.produto_id))}),o.jsx(Io,{paginaAtual:r,totalPaginas:l,onAnterior:()=>n(d=>Math.max(1,d-1)),onProxima:()=>n(d=>Math.min(l,d+1))})]})}const Ko=c.nav`
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
`,re=c(B)`
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
`,te=c(B)`
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
`,Ao=c.form`
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
`;function Ro({busca:a,setBusca:e}){return o.jsx(Ao,{children:o.jsx(No,{type:"text",placeholder:"ID, Nome ou Categoria do Produto",value:a,onChange:t=>e(t.target.value),style:{border:"1px solid #A63F2C",borderRadius:"8px"}})})}function se(){const[a,e]=u.useState("");return o.jsxs(K,{children:[o.jsx(to,{}),o.jsx("title",{children:"Produtos"}),o.jsx(g,{children:"Produtos"}),o.jsxs(Q,{style:{alignItems:"center"},children:[o.jsx(zo,{}),o.jsx(Ro,{busca:a,setBusca:e}),o.jsx(Mo,{busca:a})]})]})}export{se as A,ae as B,ne as C,Jo as H,Yo as L,oe as M,Ko as N,ee as O,Ao as S,re as a,te as b,No as c,Zo as d,Qo as e};
