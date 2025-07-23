import{j as o,T as g,x as _,D as y,K as F,i as u,o as v,d as c,b as m,n as P,W as E,M as k,O as I,P as O,Q as j,U as L,V as N,X as D,h as T,Y as R,Z as V,_ as G,$,q as M,k as q,s as W}from"./GlobalStyles-DUFr8I5r.js";import{u as w,y as x}from"./index-CjUr_YmU.js";import{l as U,M as H}from"./ModalOverlay-R0KD_jQW.js";import{b as Q,c as X,d as K,e as Y}from"./PostMethods-Cnk8QWh2.js";import{a as Z}from"./index-NIGUFBhG.js";import{B as J}from"./BtnVoltar-BMwM4076.js";import{g as oo}from"./GetMethods-B9tMrBvE.js";import{p as b}from"./HomeServices-eHEbCH76.js";function eo({cores:r,setCores:e}){return o.jsxs(o.Fragment,{children:[o.jsx(g,{children:"Cores e Tamanhos"}),(r||[]).map((a,t)=>o.jsxs(_,{style:{padding:"0",gap:"0"},children:[o.jsxs(y,{style:{padding:"1rem 0"},children:[o.jsxs(F,{value:a.cor?.valor||"",onChange:n=>Po(r,e,t,n.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Cor"}),S.map((n,s)=>o.jsx("option",{value:n.valor,children:n.nome},s))]}),o.jsx(u,{type:"button",onClick:()=>bo(r,e,t),style:{width:"3rem"},children:"-"})]}),a.tamanhos.map((n,s)=>o.jsxs(_,{style:{padding:"0",gap:"0",alignItems:"flex-start"},children:[o.jsxs(F,{name:"list_tamanho",value:n.tamanho,onChange:i=>B(r,e,t,s,"tamanho",i.target.value),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Tamanho"}),uo.map((i,d)=>o.jsx("option",{value:i.valor,children:i.nome},d))]}),o.jsxs(y,{style:{padding:"1rem 0"},children:[o.jsx(v,{type:"number",placeholder:"Quantidade",value:n.quantidade,onChange:i=>B(r,e,t,s,"quantidade",i.target.value)}),o.jsx(u,{type:"button",onClick:()=>yo(r,e,t,s),style:{width:"3rem"},children:"–"})]})]},s)),o.jsx(u,{type:"button",onClick:()=>Co(r,e,t),children:"+ Tamanho"})]},t)),o.jsx(u,{type:"button",onClick:()=>jo(r,e),children:"+ Cor"})]})}const ro=c.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
`;function to(){const{user:r}=w(),[e,a]=m.useState({produto_nome:"",produto_preco:"",produto_categoria:"",produto_lancamento:!1,produto_foto:[],produto_cor:[]});return o.jsxs(P,{onSubmit:t=>Fo(e.produto_nome,e.produto_preco,e.produto_categoria,e.produto_lancamento,e.produto_foto,e.produto_cor,t,a,r.token),children:[o.jsx(g,{children:"Cadastrar Produto"}),o.jsxs(F,{value:e.produto_categoria,onChange:t=>a(n=>({...n,produto_categoria:t.target.value})),children:[o.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Categorias"}),U.map((t,n)=>o.jsx("option",{value:t.nome,children:t.nome},n))]}),lo.map((t,n)=>t.tipo==="checkbox"?o.jsxs(ro,{children:[t.placeholder,o.jsx(v,{type:t.tipo,name:t.nome,onChange:s=>z(s,a),style:{width:"24rem",cursor:"pointer"}})]},n):o.jsx(v,{type:t.tipo,placeholder:t.placeholder,name:t.nome,onChange:s=>z(s,a),multiple:t.tipo==="file"},n)),o.jsx(eo,{cores:e.produto_cor,setCores:t=>fo(t,a)}),o.jsx(u,{type:"submit",children:"Cadastrar"})]})}function ao(){return o.jsxs(P,{children:[o.jsx(g,{children:"Editar Produto"}),co.map((r,e)=>o.jsx(v,{type:r.tipo,placeholder:r.placeholder,id:r.nome,name:r.nome},e)),o.jsx(u,{type:"submit",children:"Editar"})]})}function no(){const{user:r}=w(),[e,a]=m.useState("");return o.jsxs(P,{onSubmit:t=>ko(t,e,r.token),children:[o.jsx(g,{children:"Excluir Produto"}),mo.map((t,n)=>o.jsx(v,{type:t.tipo,placeholder:t.placeholder,value:e,onChange:s=>a(s.target.value)},n)),o.jsx(u,{type:"submit",children:"Excluir"})]})}function so(){const{user:r}=w(),[e,a]=m.useState(""),[t,n]=m.useState(""),s=po(e,a,t,n);return o.jsxs(P,{onSubmit:i=>Do(i,e,t,r.token),children:[o.jsx(g,{children:"Ofertar Produto"}),s.map((i,d)=>o.jsx(v,{type:i.tipo,placeholder:i.placeholder,value:i.valor,onChange:l=>i.change(l.target.value)},d)),o.jsx(u,{type:"submit",children:"Ofertar"})]})}const io=async(r,e)=>{try{const a=await Z.delete(`http://localhost:3000/ecommerce/del-produto/${r}`,{headers:{Authorization:`Bearer ${e}`}});a.data.error?x.error(a.data.error):x.success(`Produto ${r} excluído com sucesso!`)}catch(a){throw x.error("Erro na exclusão do produto: "+a.message),new Error("Erro na exclusão do produto: "+a.message)}},lo=[{nome:"produto_nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"produto_preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"produto_lancamento",placeholder:"O produto cadastrado é lançamento?",tipo:"checkbox"},{nome:"produto_foto",placeholder:"Foto do Produto",tipo:"file"}],co=[{nome:"id",placeholder:"ID do Produto",tipo:"text"},{nome:"categoria",placeholder:"Categoria do Produto",tipo:"text"},{nome:"nome",placeholder:"Nome do Produto",tipo:"text"},{nome:"foto",placeholder:"Foto do Produto",tipo:"file"},{nome:"preco",placeholder:"Preço do Produto",tipo:"text"},{nome:"cor",placeholder:"Cor do Produto",tipo:"text"},{nome:"tamanho",placeholder:"Tamanho do Produto",tipo:"text"},{nome:"quantidade",placeholder:"Quantidade do Produto",tipo:"text"},{nome:"lancamento",placeholder:"É Lançamento?",tipo:"checkbox"},{nome:"oferta",placeholder:"É Oferta?",tipo:"checkbox"}],mo=[{nome:"id",placeholder:"ID do Produto",tipo:"text"}],po=(r,e,a,t)=>[{nome:"produto_id",placeholder:"ID do Produto",tipo:"text",valor:r,change:e},{nome:"oferta_novo_preco",placeholder:"Novo Preço do Produto",tipo:"text",valor:a,change:t}],S=[{nome:"Branco",valor:"#FFFFFF"},{nome:"Preto",valor:"#000000"},{nome:"Cinza Claro",valor:"#D3D3D3"},{nome:"Cinza Escuro",valor:"#4B4B4B"},{nome:"Bege",valor:"#F5F5DC"},{nome:"Marrom",valor:"#8B4513"},{nome:"Azul Marinho",valor:"#000080"},{nome:"Azul Claro",valor:"#ADD8E6"},{nome:"Azul Jeans",valor:"#3B5998"},{nome:"Verde Militar",valor:"#4B5320"},{nome:"Verde Oliva",valor:"#808000"},{nome:"Verde Menta",valor:"#98FF98"},{nome:"Vermelho",valor:"#FF0000"},{nome:"Vermelho Vinho",valor:"#800000"},{nome:"Rosa Claro",valor:"#FFC0CB"},{nome:"Rosa Choque",valor:"#FF69B4"},{nome:"Roxo",valor:"#9370DB"},{nome:"Amarelo",valor:"#FFFF00"},{nome:"Amarelo Mostarda",valor:"#FFDB58"},{nome:"Laranja",valor:"#FFA500"},{nome:"Off White",valor:"#FAF9F6"},{nome:"Caramelo",valor:"#A0522D"},{nome:"Camelo",valor:"#C19A6B"},{nome:"Bronze",valor:"#CD7F32"},{nome:"Prata",valor:"#C0C0C0"},{nome:"Ouro",valor:"#FFD700"}],uo=[{nome:"PP",valor:"pp"},{nome:"P",valor:"P"},{nome:"M",valor:"M"},{nome:"G",valor:"G"},{nome:"GG",valor:"GG"},{nome:"XG",valor:"XG"},{nome:"ÚNICO",valor:"UNICO"},{nome:"33",valor:"33"},{nome:"34",valor:"34"},{nome:"35",valor:"35"},{nome:"36",valor:"36"},{nome:"37",valor:"37"},{nome:"38",valor:"38"},{nome:"39",valor:"39"},{nome:"40",valor:"40"},{nome:"41",valor:"41"},{nome:"42",valor:"42"},{nome:"43",valor:"43"},{nome:"44",valor:"44"}],ho=(r,e,a)=>{a(e),r(!0)},xo=(r,e)=>{r(!1),e(null)},vo={cadastrar:o.jsx(to,{}),editar:o.jsx(ao,{}),excluir:o.jsx(no,{}),ofertar:o.jsx(so,{})},go=[{tipo:"cadastrar",txt:"Cadastrar Produto"},{tipo:"editar",txt:"Editar Produto"},{tipo:"excluir",txt:"Excluir Produto"},{tipo:"ofertar",txt:"Ofertar Produto"}],fo=(r,e)=>{e(a=>({...a,produto_cor:r}))},jo=(r,e)=>{const a={cor:{nome:"",valor:""},tamanhos:[]};e([...r,a])},Co=(r,e,a)=>{const t=[...r];t[a].tamanhos.push({tamanho:"",quantidade:""}),e(t)},Po=(r,e,a,t)=>{const n=[...r],s=t.trim().toUpperCase(),i=S.find(d=>d.valor.toUpperCase()===s);i?n[a].cor=i:n[a].cor={nome:"",valor:""},e(n)},B=(r,e,a,t,n,s)=>{const i=[...r];i[a].tamanhos[t][n]=s,e(i)},bo=(r,e,a)=>{const t=[...r];t.splice(a,1),e(t)},yo=(r,e,a,t)=>{const n=[...r];n[a].tamanhos.splice(t,1),e(n)},z=async(r,e)=>{const{name:a,type:t,checked:n,value:s,files:i}=r.target;if(t==="file"){const d=[],l=await K();if(!l)return;for(const h of i){const p=new FormData;p.append("file",h),p.append("api_key",l.apiKey),p.append("timestamp",l.timestamp),p.append("signature",l.signature),p.append("folder",l.folder),p.append("upload_preset","ecommerce_signed");try{await Y(p,d)}catch(f){console.error("Erro ao enviar imagem ao Cloudinary",f)}}e(h=>({...h,[a]:d}))}else e(d=>({...d,[a]:t==="checkbox"?n:s}))},Fo=async(r,e,a,t,n,s,i,d,l)=>{if(i.preventDefault(),!r||!e||!a){x.error("Nome, preço e categoria são obrigatórios.");return}await X(r,e,t,a,n,s,d,l)},wo=(r,e)=>{if(!Array.isArray(r))return[];if(!e||typeof e!="string")return r;const a=C(e.toLowerCase());return r.filter(t=>{const n=C(String(t.produto_id).toLowerCase()),s=C(t.produto_nome.toLowerCase()),i=C(t.categoria_nome.toLowerCase());return n.includes(a)||s.includes(a)||i.includes(a)})},C=r=>r.normalize("NFD").replace(/[\u0300-\u036f]/g,""),_o=(r,e)=>{const t=(r-1)*4,n=t+4,s=e.slice(t,n),i=Math.ceil(e.length/4);return{produtosPaginados:s,totalPaginas:i}},ko=async(r,e,a)=>{if(r.preventDefault(),!e){x.error("ID do produto precisa ser preenchido");return}await io(e,a)},Do=async(r,e,a,t)=>{if(r.preventDefault(),!e||!a){x.error("Todos os campos precisam ser preenchidos");return}await Q(e,a,t)};function Bo(){const[r,e]=m.useState(!1),[a,t]=m.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx(y,{children:go.map((n,s)=>o.jsx(u,{onClick:()=>ho(e,n.tipo,t),children:n.txt},s))}),r&&o.jsx(H,{onClose:()=>xo(e,t),children:vo[a]})]})}function zo({paginaAtual:r,totalPaginas:e,onAnterior:a,onProxima:t}){return o.jsxs(E,{children:[o.jsx(k,{onClick:a,disabled:r===1,children:"Anterior"}),o.jsxs("span",{children:["Página ",r," de ",e]}),o.jsx(k,{onClick:t,disabled:r===e,children:"Próxima"})]})}function Mo({busca:r}){const[e,a]=m.useState([]),[t,n]=m.useState(1);m.useEffect(()=>{oo(a)},[]);const s=wo(e||[],r),{produtosPaginados:i,totalPaginas:d}=_o(t,s);return o.jsxs(o.Fragment,{children:[o.jsx(I,{children:i.map(l=>o.jsxs(O,{children:[o.jsxs(j,{children:["Identificador: ",l.produto_id]}),o.jsx(L,{src:l.fotos[0]?.foto_produto_url,alt:l.produto_nome}),o.jsx(N,{children:l.produto_nome}),o.jsxs(D,{children:["Categoria: ",l.categoria_nome]}),o.jsxs(D,{children:["Lançamento: ",l.produto_lancamento?"Sim":"Não"]}),l.oferta.oferta_ativo?o.jsxs(T,{children:[o.jsxs(j,{style:{textDecoration:"line-through",color:"gray"},children:["R$ ",b(l.produto_preco)]}),o.jsxs(j,{children:["R$ ",b(l.oferta.oferta_novo_preco)]})]}):o.jsxs(j,{children:["R$ ",b(l.produto_preco)]}),o.jsxs(R,{children:[o.jsx("strong",{children:"Cores:"}),l.cores.map((h,p)=>o.jsxs("div",{children:[o.jsxs(V,{children:[o.jsx(G,{$cor:h.cor_hex}),o.jsx("span",{children:h.cor_nome})]}),o.jsx($,{children:h.tamanhos.map((f,A)=>o.jsxs("li",{children:[f.tamanho,": ",f.quantidade," un."]},A))})]},p))]})]},l.produto_id))}),o.jsx(zo,{paginaAtual:t,totalPaginas:d,onAnterior:()=>n(l=>Math.max(1,l-1)),onProxima:()=>n(l=>Math.min(d,l+1))})]})}const $o=c.nav`
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
`,qo=c.div`
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
`,Wo=c.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  list-style-type: none;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: center;
    gap: 1rem;
  }
`,Uo=c.ul`
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
`,Ho=c.button`
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
`,Qo=c.ul`
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
`,Xo=c.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 999;
`,Ko=c(M)`
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
`,Yo=c(M)`
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
`,So=c.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.5rem;
`,Ao=c.input`
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
`,Zo=c.button`
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
`,Jo=c.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;function Eo({busca:r,setBusca:e}){return o.jsx(So,{children:o.jsx(Ao,{type:"text",placeholder:"ID, Nome ou Categoria do Produto",value:r,onChange:a=>e(a.target.value),style:{border:"1px solid #A63F2C",borderRadius:"8px"}})})}function oe(){const[r,e]=m.useState("");return o.jsxs(q,{children:[o.jsx(J,{}),o.jsx("title",{children:"Produtos"}),o.jsx(g,{children:"Produtos"}),o.jsxs(W,{style:{alignItems:"center"},children:[o.jsx(Bo,{}),o.jsx(Eo,{busca:r,setBusca:e}),o.jsx(Mo,{busca:r})]})]})}export{oe as A,Zo as B,Jo as C,Ho as H,Wo as L,Qo as M,$o as N,Xo as O,So as S,Ko as a,Yo as b,Ao as c,Uo as d,qo as e};
