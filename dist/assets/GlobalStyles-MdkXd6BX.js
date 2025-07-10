import{r as c,R as G}from"./index-BEcKhezz.js";var me={},Ot;function qr(){if(Ot)return me;Ot=1,Object.defineProperty(me,"__esModule",{value:!0}),me.parse=i,me.serialize=l;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,n=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const f=function(){};return f.prototype=Object.create(null),f})();function i(f,g){const p=new o,y=f.length;if(y<2)return p;const v=g?.decode||h;let d=0;do{const x=f.indexOf("=",d);if(x===-1)break;const w=f.indexOf(";",d),C=w===-1?y:w;if(x>C){d=f.lastIndexOf(";",x-1)+1;continue}const E=u(f,d,x),R=s(f,x,E),b=f.slice(E,R);if(p[b]===void 0){let O=u(f,x+1,C),L=s(f,C,O);const _=v(f.slice(O,L));p[b]=_}d=C+1}while(d<y);return p}function u(f,g,p){do{const y=f.charCodeAt(g);if(y!==32&&y!==9)return g}while(++g<p);return p}function s(f,g,p){for(;g>p;){const y=f.charCodeAt(--g);if(y!==32&&y!==9)return g+1}return p}function l(f,g,p){const y=p?.encode||encodeURIComponent;if(!e.test(f))throw new TypeError(`argument name is invalid: ${f}`);const v=y(g);if(!t.test(v))throw new TypeError(`argument val is invalid: ${g}`);let d=f+"="+v;if(!p)return d;if(p.maxAge!==void 0){if(!Number.isInteger(p.maxAge))throw new TypeError(`option maxAge is invalid: ${p.maxAge}`);d+="; Max-Age="+p.maxAge}if(p.domain){if(!r.test(p.domain))throw new TypeError(`option domain is invalid: ${p.domain}`);d+="; Domain="+p.domain}if(p.path){if(!n.test(p.path))throw new TypeError(`option path is invalid: ${p.path}`);d+="; Path="+p.path}if(p.expires){if(!m(p.expires)||!Number.isFinite(p.expires.valueOf()))throw new TypeError(`option expires is invalid: ${p.expires}`);d+="; Expires="+p.expires.toUTCString()}if(p.httpOnly&&(d+="; HttpOnly"),p.secure&&(d+="; Secure"),p.partitioned&&(d+="; Partitioned"),p.priority)switch(typeof p.priority=="string"?p.priority.toLowerCase():void 0){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${p.priority}`)}if(p.sameSite)switch(typeof p.sameSite=="string"?p.sameSite.toLowerCase():p.sameSite){case!0:case"strict":d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"none":d+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${p.sameSite}`)}return d}function h(f){if(f.indexOf("%")===-1)return f;try{return decodeURIComponent(f)}catch{return f}}function m(f){return a.call(f)==="[object Date]"}return me}qr();var Tt="popstate";function Yr(e={}){function t(n,a){let{pathname:o,search:i,hash:u}=n.location;return ct("",{pathname:o,search:i,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:xe(a)}return Kr(t,r,null,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function M(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vr(){return Math.random().toString(36).substring(2,10)}function Ft(e,t){return{usr:e.state,key:e.key,idx:t}}function ct(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ue(t):t,state:r,key:t&&t.key||n||Vr()}}function xe({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ue(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function Kr(e,t,r,n={}){let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,u="POP",s=null,l=h();l==null&&(l=0,i.replaceState({...i.state,idx:l},""));function h(){return(i.state||{idx:null}).idx}function m(){u="POP";let v=h(),d=v==null?null:v-l;l=v,s&&s({action:u,location:y.location,delta:d})}function f(v,d){u="PUSH";let x=ct(y.location,v,d);l=h()+1;let w=Ft(x,l),C=y.createHref(x);try{i.pushState(w,"",C)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;a.location.assign(C)}o&&s&&s({action:u,location:y.location,delta:1})}function g(v,d){u="REPLACE";let x=ct(y.location,v,d);l=h();let w=Ft(x,l),C=y.createHref(x);i.replaceState(w,"",C),o&&s&&s({action:u,location:y.location,delta:0})}function p(v){return Jr(v)}let y={get action(){return u},get location(){return e(a,i)},listen(v){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Tt,m),s=v,()=>{a.removeEventListener(Tt,m),s=null}},createHref(v){return t(a,v)},createURL:p,encodeLocation(v){let d=p(v);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:f,replace:g,go(v){return i.go(v)}};return y}function Jr(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),$(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:xe(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function Qt(e,t,r="/"){return Xr(e,t,r,!1)}function Xr(e,t,r,n){let a=typeof t=="string"?ue(t):t,o=Y(a.pathname||"/",r);if(o==null)return null;let i=er(e);Zr(i);let u=null;for(let s=0;u==null&&s<i.length;++s){let l=cn(o);u=ln(i[s],l,n)}return u}function er(e,t=[],r=[],n=""){let a=(o,i,u)=>{let s={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};s.relativePath.startsWith("/")&&($(s.relativePath.startsWith(n),`Absolute route path "${s.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(n.length));let l=q([n,s.relativePath]),h=r.concat(s);o.children&&o.children.length>0&&($(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),er(o.children,t,h,l)),!(o.path==null&&!o.index)&&t.push({path:l,score:on(l,o.index),routesMeta:h})};return e.forEach((o,i)=>{if(o.path===""||!o.path?.includes("?"))a(o,i);else for(let u of tr(o.path))a(o,i,u)}),t}function tr(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let i=tr(n.join("/")),u=[];return u.push(...i.map(s=>s===""?o:[o,s].join("/"))),a&&u.push(...i),u.map(s=>e.startsWith("/")&&s===""?"/":s)}function Zr(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:sn(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Qr=/^:[\w-]+$/,en=3,tn=2,rn=1,nn=10,an=-2,Dt=e=>e==="*";function on(e,t){let r=e.split("/"),n=r.length;return r.some(Dt)&&(n+=an),t&&(n+=tn),r.filter(a=>!Dt(a)).reduce((a,o)=>a+(Qr.test(o)?en:o===""?rn:nn),n)}function sn(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function ln(e,t,r=!1){let{routesMeta:n}=e,a={},o="/",i=[];for(let u=0;u<n.length;++u){let s=n[u],l=u===n.length-1,h=o==="/"?t:t.slice(o.length)||"/",m=We({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},h),f=s.route;if(!m&&l&&r&&!n[n.length-1].route.index&&(m=We({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},h)),!m)return null;Object.assign(a,m.params),i.push({params:a,pathname:q([o,m.pathname]),pathnameBase:hn(q([o,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(o=q([o,m.pathnameBase]))}return i}function We(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=un(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:n.reduce((l,{paramName:h,isOptional:m},f)=>{if(h==="*"){let p=u[f]||"";i=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}const g=u[f];return m&&!g?l[h]=void 0:l[h]=(g||"").replace(/%2F/g,"/"),l},{}),pathname:o,pathnameBase:i,pattern:e}}function un(e,t=!1,r=!0){M(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,u,s)=>(n.push({paramName:u,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function cn(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return M(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Y(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function dn(e,t="/"){let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?ue(e):e;return{pathname:r?r.startsWith("/")?r:fn(r,t):t,search:mn(n),hash:gn(a)}}function fn(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function at(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pn(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function rr(e){let t=pn(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function nr(e,t,r,n=!1){let a;typeof e=="string"?a=ue(e):(a={...e},$(!a.pathname||!a.pathname.includes("?"),at("?","pathname","search",a)),$(!a.pathname||!a.pathname.includes("#"),at("#","pathname","hash",a)),$(!a.search||!a.search.includes("#"),at("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,u;if(i==null)u=r;else{let m=t.length-1;if(!n&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),m-=1;a.pathname=f.join("/")}u=m>=0?t[m]:"/"}let s=dn(a,u),l=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&r.endsWith("/");return!s.pathname.endsWith("/")&&(l||h)&&(s.pathname+="/"),s}var q=e=>e.join("/").replace(/\/\/+/g,"/"),hn=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mn=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gn=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yn(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var ar=["POST","PUT","PATCH","DELETE"];new Set(ar);var vn=["GET",...ar];new Set(vn);var ce=c.createContext(null);ce.displayName="DataRouter";var Ye=c.createContext(null);Ye.displayName="DataRouterState";var or=c.createContext({isTransitioning:!1});or.displayName="ViewTransition";var xn=c.createContext(new Map);xn.displayName="Fetchers";var wn=c.createContext(null);wn.displayName="Await";var j=c.createContext(null);j.displayName="Navigation";var Se=c.createContext(null);Se.displayName="Location";var W=c.createContext({outlet:null,matches:[],isDataRoute:!1});W.displayName="Route";var bt=c.createContext(null);bt.displayName="RouteError";function bn(e,{relative:t}={}){$(Ce(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=c.useContext(j),{hash:a,pathname:o,search:i}=Ee(e,{relative:t}),u=o;return r!=="/"&&(u=o==="/"?r:q([r,o])),n.createHref({pathname:u,search:i,hash:a})}function Ce(){return c.useContext(Se)!=null}function te(){return $(Ce(),"useLocation() may be used only in the context of a <Router> component."),c.useContext(Se).location}var ir="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sr(e){c.useContext(j).static||c.useLayoutEffect(e)}function Sn(){let{isDataRoute:e}=c.useContext(W);return e?Tn():Cn()}function Cn(){$(Ce(),"useNavigate() may be used only in the context of a <Router> component.");let e=c.useContext(ce),{basename:t,navigator:r}=c.useContext(j),{matches:n}=c.useContext(W),{pathname:a}=te(),o=JSON.stringify(rr(n)),i=c.useRef(!1);return sr(()=>{i.current=!0}),c.useCallback((s,l={})=>{if(M(i.current,ir),!i.current)return;if(typeof s=="number"){r.go(s);return}let h=nr(s,JSON.parse(o),a,l.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:q([t,h.pathname])),(l.replace?r.replace:r.push)(h,l.state,l)},[t,r,o,a,e])}c.createContext(null);function wo(){let{matches:e}=c.useContext(W),t=e[e.length-1];return t?t.params:{}}function Ee(e,{relative:t}={}){let{matches:r}=c.useContext(W),{pathname:n}=te(),a=JSON.stringify(rr(r));return c.useMemo(()=>nr(e,JSON.parse(a),n,t==="path"),[e,a,n,t])}function En(e,t){return lr(e,t)}function lr(e,t,r,n){$(Ce(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=c.useContext(j),{matches:o}=c.useContext(W),i=o[o.length-1],u=i?i.params:{},s=i?i.pathname:"/",l=i?i.pathnameBase:"/",h=i&&i.route;{let d=h&&h.path||"";ur(s,!h||d.endsWith("*")||d.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d==="/"?"*":`${d}/*`}">.`)}let m=te(),f;if(t){let d=typeof t=="string"?ue(t):t;$(l==="/"||d.pathname?.startsWith(l),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${d.pathname}" was given in the \`location\` prop.`),f=d}else f=m;let g=f.pathname||"/",p=g;if(l!=="/"){let d=l.replace(/^\//,"").split("/");p="/"+g.replace(/^\//,"").split("/").slice(d.length).join("/")}let y=Qt(e,{pathname:p});M(h||y!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),M(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=$n(y&&y.map(d=>Object.assign({},d,{params:Object.assign({},u,d.params),pathname:q([l,a.encodeLocation?a.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?l:q([l,a.encodeLocation?a.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),o,r,n);return t&&v?c.createElement(Se.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},v):v}function Rn(){let e=On(),t=yn(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=c.createElement(c.Fragment,null,c.createElement("p",null,"💿 Hey developer 👋"),c.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",c.createElement("code",{style:o},"ErrorBoundary")," or"," ",c.createElement("code",{style:o},"errorElement")," prop on your route.")),c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),r?c.createElement("pre",{style:a},r):null,i)}var kn=c.createElement(Rn,null),Pn=class extends c.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?c.createElement(W.Provider,{value:this.props.routeContext},c.createElement(bt.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function In({routeContext:e,match:t,children:r}){let n=c.useContext(ce);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),c.createElement(W.Provider,{value:e},r)}function $n(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,o=r?.errors;if(o!=null){let s=a.findIndex(l=>l.route.id&&o?.[l.route.id]!==void 0);$(s>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,s+1))}let i=!1,u=-1;if(r)for(let s=0;s<a.length;s++){let l=a[s];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(u=s),l.route.id){let{loaderData:h,errors:m}=r,f=l.route.loader&&!h.hasOwnProperty(l.route.id)&&(!m||m[l.route.id]===void 0);if(l.route.lazy||f){i=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((s,l,h)=>{let m,f=!1,g=null,p=null;r&&(m=o&&l.route.id?o[l.route.id]:void 0,g=l.route.errorElement||kn,i&&(u<0&&h===0?(ur("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,p=null):u===h&&(f=!0,p=l.route.hydrateFallbackElement||null)));let y=t.concat(a.slice(0,h+1)),v=()=>{let d;return m?d=g:f?d=p:l.route.Component?d=c.createElement(l.route.Component,null):l.route.element?d=l.route.element:d=s,c.createElement(In,{match:l,routeContext:{outlet:s,matches:y,isDataRoute:r!=null},children:d})};return r&&(l.route.ErrorBoundary||l.route.errorElement||h===0)?c.createElement(Pn,{location:r.location,revalidation:r.revalidation,component:g,error:m,children:v(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):v()},null)}function St(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function An(e){let t=c.useContext(ce);return $(t,St(e)),t}function Ln(e){let t=c.useContext(Ye);return $(t,St(e)),t}function zn(e){let t=c.useContext(W);return $(t,St(e)),t}function Ct(e){let t=zn(e),r=t.matches[t.matches.length-1];return $(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Nn(){return Ct("useRouteId")}function On(){let e=c.useContext(bt),t=Ln("useRouteError"),r=Ct("useRouteError");return e!==void 0?e:t.errors?.[r]}function Tn(){let{router:e}=An("useNavigate"),t=Ct("useNavigate"),r=c.useRef(!1);return sr(()=>{r.current=!0}),c.useCallback(async(a,o={})=>{M(r.current,ir),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...o}))},[e,t])}var _t={};function ur(e,t,r){!t&&!_t[e]&&(_t[e]=!0,M(!1,r))}c.memo(Fn);function Fn({routes:e,future:t,state:r}){return lr(e,void 0,r,t)}function Dn(e){$(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _n({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:a,static:o=!1}){$(!Ce(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),u=c.useMemo(()=>({basename:i,navigator:a,static:o,future:{}}),[i,a,o]);typeof r=="string"&&(r=ue(r));let{pathname:s="/",search:l="",hash:h="",state:m=null,key:f="default"}=r,g=c.useMemo(()=>{let p=Y(s,i);return p==null?null:{location:{pathname:p,search:l,hash:h,state:m,key:f},navigationType:n}},[i,s,l,h,m,f,n]);return M(g!=null,`<Router basename="${i}"> is not able to match the URL "${s}${l}${h}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:c.createElement(j.Provider,{value:u},c.createElement(Se.Provider,{children:t,value:g}))}function bo({children:e,location:t}){return En(dt(e),t)}function dt(e,t=[]){let r=[];return c.Children.forEach(e,(n,a)=>{if(!c.isValidElement(n))return;let o=[...t,a];if(n.type===c.Fragment){r.push.apply(r,dt(n.props.children,o));return}$(n.type===Dn,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$(!n.props.index||!n.props.children,"An index route cannot have child routes.");let i={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=dt(n.props.children,o)),r.push(i)}),r}var Te="get",Fe="application/x-www-form-urlencoded";function Ve(e){return e!=null&&typeof e.tagName=="string"}function Bn(e){return Ve(e)&&e.tagName.toLowerCase()==="button"}function Mn(e){return Ve(e)&&e.tagName.toLowerCase()==="form"}function jn(e){return Ve(e)&&e.tagName.toLowerCase()==="input"}function Wn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Un(e,t){return e.button===0&&(!t||t==="_self")&&!Wn(e)}var ze=null;function Hn(){if(ze===null)try{new FormData(document.createElement("form"),0),ze=!1}catch{ze=!0}return ze}var Gn=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ot(e){return e!=null&&!Gn.has(e)?(M(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fe}"`),null):e}function qn(e,t){let r,n,a,o,i;if(Mn(e)){let u=e.getAttribute("action");n=u?Y(u,t):null,r=e.getAttribute("method")||Te,a=ot(e.getAttribute("enctype"))||Fe,o=new FormData(e)}else if(Bn(e)||jn(e)&&(e.type==="submit"||e.type==="image")){let u=e.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||u.getAttribute("action");if(n=s?Y(s,t):null,r=e.getAttribute("formmethod")||u.getAttribute("method")||Te,a=ot(e.getAttribute("formenctype"))||ot(u.getAttribute("enctype"))||Fe,o=new FormData(u,e),!Hn()){let{name:l,type:h,value:m}=e;if(h==="image"){let f=l?`${l}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else l&&o.append(l,m)}}else{if(Ve(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Te,n=null,a=Fe,i=e}return o&&a==="text/plain"&&(i=o,o=void 0),{action:n,method:r.toLowerCase(),encType:a,formData:o,body:i}}function Et(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Yn(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vn(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Kn(e,t,r){let n=await Promise.all(e.map(async a=>{let o=t.routes[a.route.id];if(o){let i=await Yn(o,r);return i.links?i.links():[]}return[]}));return Qn(n.flat(1).filter(Vn).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Bt(e,t,r,n,a,o){let i=(s,l)=>r[l]?s.route.id!==r[l].route.id:!0,u=(s,l)=>r[l].pathname!==s.pathname||r[l].route.path?.endsWith("*")&&r[l].params["*"]!==s.params["*"];return o==="assets"?t.filter((s,l)=>i(s,l)||u(s,l)):o==="data"?t.filter((s,l)=>{let h=n.routes[s.route.id];if(!h||!h.hasLoader)return!1;if(i(s,l)||u(s,l))return!0;if(s.route.shouldRevalidate){let m=s.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Jn(e,t,{includeHydrateFallback:r}={}){return Xn(e.map(n=>{let a=t.routes[n.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function Xn(e){return[...new Set(e)]}function Zn(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Qn(e,t){let r=new Set;return new Set(t),e.reduce((n,a)=>{let o=JSON.stringify(Zn(a));return r.has(o)||(r.add(o),n.push({key:o,link:a})),n},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ea=new Set([100,101,204,205]);function ta(e,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":t&&Y(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function cr(){let e=c.useContext(ce);return Et(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ra(){let e=c.useContext(Ye);return Et(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Rt=c.createContext(void 0);Rt.displayName="FrameworkContext";function dr(){let e=c.useContext(Rt);return Et(e,"You must render this element inside a <HydratedRouter> element"),e}function na(e,t){let r=c.useContext(Rt),[n,a]=c.useState(!1),[o,i]=c.useState(!1),{onFocus:u,onBlur:s,onMouseEnter:l,onMouseLeave:h,onTouchStart:m}=t,f=c.useRef(null);c.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let y=d=>{d.forEach(x=>{i(x.isIntersecting)})},v=new IntersectionObserver(y,{threshold:.5});return f.current&&v.observe(f.current),()=>{v.disconnect()}}},[e]),c.useEffect(()=>{if(n){let y=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(y)}}},[n]);let g=()=>{a(!0)},p=()=>{a(!1),i(!1)};return r?e!=="intent"?[o,f,{}]:[o,f,{onFocus:ge(u,g),onBlur:ge(s,p),onMouseEnter:ge(l,g),onMouseLeave:ge(h,p),onTouchStart:ge(m,g)}]:[!1,f,{}]}function ge(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function aa({page:e,...t}){let{router:r}=cr(),n=c.useMemo(()=>Qt(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?c.createElement(ia,{page:e,matches:n,...t}):null}function oa(e){let{manifest:t,routeModules:r}=dr(),[n,a]=c.useState([]);return c.useEffect(()=>{let o=!1;return Kn(e,t,r).then(i=>{o||a(i)}),()=>{o=!0}},[e,t,r]),n}function ia({page:e,matches:t,...r}){let n=te(),{manifest:a,routeModules:o}=dr(),{basename:i}=cr(),{loaderData:u,matches:s}=ra(),l=c.useMemo(()=>Bt(e,t,s,a,n,"data"),[e,t,s,a,n]),h=c.useMemo(()=>Bt(e,t,s,a,n,"assets"),[e,t,s,a,n]),m=c.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let p=new Set,y=!1;if(t.forEach(d=>{let x=a.routes[d.route.id];!x||!x.hasLoader||(!l.some(w=>w.route.id===d.route.id)&&d.route.id in u&&o[d.route.id]?.shouldRevalidate||x.hasClientLoader?y=!0:p.add(d.route.id))}),p.size===0)return[];let v=ta(e,i);return y&&p.size>0&&v.searchParams.set("_routes",t.filter(d=>p.has(d.route.id)).map(d=>d.route.id).join(",")),[v.pathname+v.search]},[i,u,n,a,l,t,e,o]),f=c.useMemo(()=>Jn(h,a),[h,a]),g=oa(h);return c.createElement(c.Fragment,null,m.map(p=>c.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...r})),f.map(p=>c.createElement("link",{key:p,rel:"modulepreload",href:p,...r})),g.map(({key:p,link:y})=>c.createElement("link",{key:p,...y})))}function sa(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var fr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fr&&(window.__reactRouterVersion="7.6.2")}catch{}function So({basename:e,children:t,window:r}){let n=c.useRef();n.current==null&&(n.current=Yr({window:r,v5Compat:!0}));let a=n.current,[o,i]=c.useState({action:a.action,location:a.location}),u=c.useCallback(s=>{c.startTransition(()=>i(s))},[i]);return c.useLayoutEffect(()=>a.listen(u),[a,u]),c.createElement(_n,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a})}var pr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=c.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:a,reloadDocument:o,replace:i,state:u,target:s,to:l,preventScrollReset:h,viewTransition:m,...f},g){let{basename:p}=c.useContext(j),y=typeof l=="string"&&pr.test(l),v,d=!1;if(typeof l=="string"&&y&&(v=l,fr))try{let L=new URL(window.location.href),_=l.startsWith("//")?new URL(L.protocol+l):new URL(l),Pe=Y(_.pathname,p);_.origin===L.origin&&Pe!=null?l=Pe+_.search+_.hash:d=!0}catch{M(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let x=bn(l,{relative:a}),[w,C,E]=na(n,f),R=da(l,{replace:i,state:u,target:s,preventScrollReset:h,relative:a,viewTransition:m});function b(L){t&&t(L),L.defaultPrevented||R(L)}let O=c.createElement("a",{...f,...E,href:v||x,onClick:d||o?t:b,ref:sa(g,C),target:s,"data-discover":!y&&r==="render"?"true":void 0});return w&&!y?c.createElement(c.Fragment,null,O,c.createElement(aa,{page:x})):O});Re.displayName="Link";var la=c.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:a=!1,style:o,to:i,viewTransition:u,children:s,...l},h){let m=Ee(i,{relative:l.relative}),f=te(),g=c.useContext(Ye),{navigator:p,basename:y}=c.useContext(j),v=g!=null&&ga(m)&&u===!0,d=p.encodeLocation?p.encodeLocation(m).pathname:m.pathname,x=f.pathname,w=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(x=x.toLowerCase(),w=w?w.toLowerCase():null,d=d.toLowerCase()),w&&y&&(w=Y(w,y)||w);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let E=x===d||!a&&x.startsWith(d)&&x.charAt(C)==="/",R=w!=null&&(w===d||!a&&w.startsWith(d)&&w.charAt(d.length)==="/"),b={isActive:E,isPending:R,isTransitioning:v},O=E?t:void 0,L;typeof n=="function"?L=n(b):L=[n,E?"active":null,R?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let _=typeof o=="function"?o(b):o;return c.createElement(Re,{...l,"aria-current":O,className:L,ref:h,style:_,to:i,viewTransition:u},typeof s=="function"?s(b):s)});la.displayName="NavLink";var ua=c.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:a,state:o,method:i=Te,action:u,onSubmit:s,relative:l,preventScrollReset:h,viewTransition:m,...f},g)=>{let p=ha(),y=ma(u,{relative:l}),v=i.toLowerCase()==="get"?"get":"post",d=typeof u=="string"&&pr.test(u),x=w=>{if(s&&s(w),w.defaultPrevented)return;w.preventDefault();let C=w.nativeEvent.submitter,E=C?.getAttribute("formmethod")||i;p(C||w.currentTarget,{fetcherKey:t,method:E,navigate:r,replace:a,state:o,relative:l,preventScrollReset:h,viewTransition:m})};return c.createElement("form",{ref:g,method:v,action:y,onSubmit:n?s:x,...f,"data-discover":!d&&e==="render"?"true":void 0})});ua.displayName="Form";function ca(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hr(e){let t=c.useContext(ce);return $(t,ca(e)),t}function da(e,{target:t,replace:r,state:n,preventScrollReset:a,relative:o,viewTransition:i}={}){let u=Sn(),s=te(),l=Ee(e,{relative:o});return c.useCallback(h=>{if(Un(h,t)){h.preventDefault();let m=r!==void 0?r:xe(s)===xe(l);u(e,{replace:m,state:n,preventScrollReset:a,relative:o,viewTransition:i})}},[s,u,l,r,n,t,e,a,o,i])}var fa=0,pa=()=>`__${String(++fa)}__`;function ha(){let{router:e}=hr("useSubmit"),{basename:t}=c.useContext(j),r=Nn();return c.useCallback(async(n,a={})=>{let{action:o,method:i,encType:u,formData:s,body:l}=qn(n,t);if(a.navigate===!1){let h=a.fetcherKey||pa();await e.fetch(h,r,a.action||o,{preventScrollReset:a.preventScrollReset,formData:s,body:l,formMethod:a.method||i,formEncType:a.encType||u,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:s,body:l,formMethod:a.method||i,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function ma(e,{relative:t}={}){let{basename:r}=c.useContext(j),n=c.useContext(W);$(n,"useFormAction must be used inside a RouteContext");let[a]=n.matches.slice(-1),o={...Ee(e||".",{relative:t})},i=te();if(e==null){o.search=i.search;let u=new URLSearchParams(o.search),s=u.getAll("index");if(s.some(h=>h==="")){u.delete("index"),s.filter(m=>m).forEach(m=>u.append("index",m));let h=u.toString();o.search=h?`?${h}`:""}}return(!e||e===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:q([r,o.pathname])),xe(o)}function ga(e,t={}){let r=c.useContext(or);$(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=hr("useViewTransitionState"),a=Ee(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Y(r.currentLocation.pathname,n)||r.currentLocation.pathname,i=Y(r.nextLocation.pathname,n)||r.nextLocation.pathname;return We(a.pathname,i)!=null||We(a.pathname,o)!=null}[...ea];var N=function(){return N=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},N.apply(this,arguments)};function we(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var I="-ms-",ve="-moz-",k="-webkit-",mr="comm",Ke="rule",kt="decl",ya="@import",gr="@keyframes",va="@layer",yr=Math.abs,Pt=String.fromCharCode,ft=Object.assign;function xa(e,t){return z(e,0)^45?(((t<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3):0}function vr(e){return e.trim()}function H(e,t){return(e=t.exec(e))?e[0]:e}function S(e,t,r){return e.replace(t,r)}function De(e,t,r){return e.indexOf(t,r)}function z(e,t){return e.charCodeAt(t)|0}function ae(e,t,r){return e.slice(t,r)}function B(e){return e.length}function xr(e){return e.length}function ye(e,t){return t.push(e),e}function wa(e,t){return e.map(t).join("")}function Mt(e,t){return e.filter(function(r){return!H(r,t)})}var Je=1,oe=1,wr=0,F=0,A=0,de="";function Xe(e,t,r,n,a,o,i,u){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:Je,column:oe,length:i,return:"",siblings:u}}function J(e,t){return ft(Xe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function re(e){for(;e.root;)e=J(e.root,{children:[e]});ye(e,e.siblings)}function ba(){return A}function Sa(){return A=F>0?z(de,--F):0,oe--,A===10&&(oe=1,Je--),A}function D(){return A=F<wr?z(de,F++):0,oe++,A===10&&(oe=1,Je++),A}function ee(){return z(de,F)}function _e(){return F}function Ze(e,t){return ae(de,e,t)}function pt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ca(e){return Je=oe=1,wr=B(de=e),F=0,[]}function Ea(e){return de="",e}function it(e){return vr(Ze(F-1,ht(e===91?e+2:e===40?e+1:e)))}function Ra(e){for(;(A=ee())&&A<33;)D();return pt(e)>2||pt(A)>3?"":" "}function ka(e,t){for(;--t&&D()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return Ze(e,_e()+(t<6&&ee()==32&&D()==32))}function ht(e){for(;D();)switch(A){case e:return F;case 34:case 39:e!==34&&e!==39&&ht(A);break;case 40:e===41&&ht(e);break;case 92:D();break}return F}function Pa(e,t){for(;D()&&e+A!==57;)if(e+A===84&&ee()===47)break;return"/*"+Ze(t,F-1)+"*"+Pt(e===47?e:D())}function Ia(e){for(;!pt(ee());)D();return Ze(e,F)}function $a(e){return Ea(Be("",null,null,null,[""],e=Ca(e),0,[0],e))}function Be(e,t,r,n,a,o,i,u,s){for(var l=0,h=0,m=i,f=0,g=0,p=0,y=1,v=1,d=1,x=0,w="",C=a,E=o,R=n,b=w;v;)switch(p=x,x=D()){case 40:if(p!=108&&z(b,m-1)==58){De(b+=S(it(x),"&","&\f"),"&\f",yr(l?u[l-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:b+=it(x);break;case 9:case 10:case 13:case 32:b+=Ra(p);break;case 92:b+=ka(_e()-1,7);continue;case 47:switch(ee()){case 42:case 47:ye(Aa(Pa(D(),_e()),t,r,s),s);break;default:b+="/"}break;case 123*y:u[l++]=B(b)*d;case 125*y:case 59:case 0:switch(x){case 0:case 125:v=0;case 59+h:d==-1&&(b=S(b,/\f/g,"")),g>0&&B(b)-m&&ye(g>32?Wt(b+";",n,r,m-1,s):Wt(S(b," ","")+";",n,r,m-2,s),s);break;case 59:b+=";";default:if(ye(R=jt(b,t,r,l,h,a,u,w,C=[],E=[],m,o),o),x===123)if(h===0)Be(b,t,R,R,C,o,m,u,E);else switch(f===99&&z(b,3)===110?100:f){case 100:case 108:case 109:case 115:Be(e,R,R,n&&ye(jt(e,R,R,0,0,a,u,w,a,C=[],m,E),E),a,E,m,u,n?C:E);break;default:Be(b,R,R,R,[""],E,0,u,E)}}l=h=g=0,y=d=1,w=b="",m=i;break;case 58:m=1+B(b),g=p;default:if(y<1){if(x==123)--y;else if(x==125&&y++==0&&Sa()==125)continue}switch(b+=Pt(x),x*y){case 38:d=h>0?1:(b+="\f",-1);break;case 44:u[l++]=(B(b)-1)*d,d=1;break;case 64:ee()===45&&(b+=it(D())),f=ee(),h=m=B(w=b+=Ia(_e())),x++;break;case 45:p===45&&B(b)==2&&(y=0)}}return o}function jt(e,t,r,n,a,o,i,u,s,l,h,m){for(var f=a-1,g=a===0?o:[""],p=xr(g),y=0,v=0,d=0;y<n;++y)for(var x=0,w=ae(e,f+1,f=yr(v=i[y])),C=e;x<p;++x)(C=vr(v>0?g[x]+" "+w:S(w,/&\f/g,g[x])))&&(s[d++]=C);return Xe(e,t,r,a===0?Ke:u,s,l,h,m)}function Aa(e,t,r,n){return Xe(e,t,r,mr,Pt(ba()),ae(e,2,-2),0,n)}function Wt(e,t,r,n,a){return Xe(e,t,r,kt,ae(e,0,n),ae(e,n+1,-1),n,a)}function br(e,t,r){switch(xa(e,t)){case 5103:return k+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return k+e+e;case 4789:return ve+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return k+e+ve+e+I+e+e;case 5936:switch(z(e,t+11)){case 114:return k+e+I+S(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return k+e+I+S(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return k+e+I+S(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return k+e+I+e+e;case 6165:return k+e+I+"flex-"+e+e;case 5187:return k+e+S(e,/(\w+).+(:[^]+)/,k+"box-$1$2"+I+"flex-$1$2")+e;case 5443:return k+e+I+"flex-item-"+S(e,/flex-|-self/g,"")+(H(e,/flex-|baseline/)?"":I+"grid-row-"+S(e,/flex-|-self/g,""))+e;case 4675:return k+e+I+"flex-line-pack"+S(e,/align-content|flex-|-self/g,"")+e;case 5548:return k+e+I+S(e,"shrink","negative")+e;case 5292:return k+e+I+S(e,"basis","preferred-size")+e;case 6060:return k+"box-"+S(e,"-grow","")+k+e+I+S(e,"grow","positive")+e;case 4554:return k+S(e,/([^-])(transform)/g,"$1"+k+"$2")+e;case 6187:return S(S(S(e,/(zoom-|grab)/,k+"$1"),/(image-set)/,k+"$1"),e,"")+e;case 5495:case 3959:return S(e,/(image-set\([^]*)/,k+"$1$`$1");case 4968:return S(S(e,/(.+:)(flex-)?(.*)/,k+"box-pack:$3"+I+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+k+e+e;case 4200:if(!H(e,/flex-|baseline/))return I+"grid-column-align"+ae(e,t)+e;break;case 2592:case 3360:return I+S(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,a){return t=a,H(n.props,/grid-\w+-end/)})?~De(e+(r=r[t].value),"span",0)?e:I+S(e,"-start","")+e+I+"grid-row-span:"+(~De(r,"span",0)?H(r,/\d+/):+H(r,/\d+/)-+H(e,/\d+/))+";":I+S(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return H(n.props,/grid-\w+-start/)})?e:I+S(S(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return S(e,/(.+)-inline(.+)/,k+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(B(e)-1-t>6)switch(z(e,t+1)){case 109:if(z(e,t+4)!==45)break;case 102:return S(e,/(.+:)(.+)-([^]+)/,"$1"+k+"$2-$3$1"+ve+(z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~De(e,"stretch",0)?br(S(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return S(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,a,o,i,u,s,l){return I+a+":"+o+l+(i?I+a+"-span:"+(u?s:+s-+o)+l:"")+e});case 4949:if(z(e,t+6)===121)return S(e,":",":"+k)+e;break;case 6444:switch(z(e,z(e,14)===45?18:11)){case 120:return S(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+k+(z(e,14)===45?"inline-":"")+"box$3$1"+k+"$2$3$1"+I+"$2box$3")+e;case 100:return S(e,":",":"+I)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return S(e,"scroll-","scroll-snap-")+e}return e}function Ue(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function La(e,t,r,n){switch(e.type){case va:if(e.children.length)break;case ya:case kt:return e.return=e.return||e.value;case mr:return"";case gr:return e.return=e.value+"{"+Ue(e.children,n)+"}";case Ke:if(!B(e.value=e.props.join(",")))return""}return B(r=Ue(e.children,n))?e.return=e.value+"{"+r+"}":""}function za(e){var t=xr(e);return function(r,n,a,o){for(var i="",u=0;u<t;u++)i+=e[u](r,n,a,o)||"";return i}}function Na(e){return function(t){t.root||(t=t.return)&&e(t)}}function Oa(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case kt:e.return=br(e.value,e.length,r);return;case gr:return Ue([J(e,{value:S(e.value,"@","@"+k)})],n);case Ke:if(e.length)return wa(r=e.props,function(a){switch(H(a,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":re(J(e,{props:[S(a,/:(read-\w+)/,":"+ve+"$1")]})),re(J(e,{props:[a]})),ft(e,{props:Mt(r,n)});break;case"::placeholder":re(J(e,{props:[S(a,/:(plac\w+)/,":"+k+"input-$1")]})),re(J(e,{props:[S(a,/:(plac\w+)/,":"+ve+"$1")]})),re(J(e,{props:[S(a,/:(plac\w+)/,I+"input-$1")]})),re(J(e,{props:[a]})),ft(e,{props:Mt(r,n)});break}return""})}}var Ta={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},T={},ie=typeof process<"u"&&T!==void 0&&(T.REACT_APP_SC_ATTR||T.SC_ATTR)||"data-styled",Sr="active",Cr="data-styled-version",Qe="6.1.19",It=`/*!sc*/
`,He=typeof window<"u"&&typeof document<"u",Fa=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&T!==void 0&&T.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&T.REACT_APP_SC_DISABLE_SPEEDY!==""?T.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&T.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&T!==void 0&&T.SC_DISABLE_SPEEDY!==void 0&&T.SC_DISABLE_SPEEDY!==""&&T.SC_DISABLE_SPEEDY!=="false"&&T.SC_DISABLE_SPEEDY),Da={},et=Object.freeze([]),se=Object.freeze({});function Er(e,t,r){return r===void 0&&(r=se),e.theme!==r.theme&&e.theme||t||r.theme}var Rr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_a=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ba=/(^-|-$)/g;function Ut(e){return e.replace(_a,"-").replace(Ba,"")}var Ma=/(a)(d)/gi,Ne=52,Ht=function(e){return String.fromCharCode(e+(e>25?39:97))};function mt(e){var t,r="";for(t=Math.abs(e);t>Ne;t=t/Ne|0)r=Ht(t%Ne)+r;return(Ht(t%Ne)+r).replace(Ma,"$1-$2")}var st,kr=5381,ne=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Pr=function(e){return ne(kr,e)};function Ir(e){return mt(Pr(e)>>>0)}function ja(e){return e.displayName||e.name||"Component"}function lt(e){return typeof e=="string"&&!0}var $r=typeof Symbol=="function"&&Symbol.for,Ar=$r?Symbol.for("react.memo"):60115,Wa=$r?Symbol.for("react.forward_ref"):60112,Ua={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ha={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ga=((st={})[Wa]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},st[Ar]=Lr,st);function Gt(e){return("type"in(t=e)&&t.type.$$typeof)===Ar?Lr:"$$typeof"in e?Ga[e.$$typeof]:Ua;var t}var qa=Object.defineProperty,Ya=Object.getOwnPropertyNames,qt=Object.getOwnPropertySymbols,Va=Object.getOwnPropertyDescriptor,Ka=Object.getPrototypeOf,Yt=Object.prototype;function zr(e,t,r){if(typeof t!="string"){if(Yt){var n=Ka(t);n&&n!==Yt&&zr(e,n,r)}var a=Ya(t);qt&&(a=a.concat(qt(t)));for(var o=Gt(e),i=Gt(t),u=0;u<a.length;++u){var s=a[u];if(!(s in Ha||r&&r[s]||i&&s in i||o&&s in o)){var l=Va(t,s);try{qa(e,s,l)}catch{}}}}return e}function le(e){return typeof e=="function"}function $t(e){return typeof e=="object"&&"styledComponentId"in e}function Q(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function gt(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function be(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yt(e,t,r){if(r===void 0&&(r=!1),!r&&!be(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=yt(e[n],t[n]);else if(be(t))for(var n in t)e[n]=yt(e[n],t[n]);return e}function At(e,t){Object.defineProperty(e,"toString",{value:t})}function ke(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ja=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,a=n.length,o=a;t>=o;)if((o<<=1)<0)throw ke(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=a;i<o;i++)this.groupSizes[i]=0}for(var u=this.indexOfGroup(t+1),s=(i=0,r.length);i<s;i++)this.tag.insertRule(u,r[i])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),a=n+r;this.groupSizes[t]=0;for(var o=n;o<a;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],a=this.indexOfGroup(t),o=a+n,i=a;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(It);return r},e}(),Me=new Map,Ge=new Map,je=1,Oe=function(e){if(Me.has(e))return Me.get(e);for(;Ge.has(je);)je++;var t=je++;return Me.set(e,t),Ge.set(t,e),t},Xa=function(e,t){je=t+1,Me.set(e,t),Ge.set(t,e)},Za="style[".concat(ie,"][").concat(Cr,'="').concat(Qe,'"]'),Qa=new RegExp("^".concat(ie,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eo=function(e,t,r){for(var n,a=r.split(","),o=0,i=a.length;o<i;o++)(n=a[o])&&e.registerName(t,n)},to=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(It),a=[],o=0,i=n.length;o<i;o++){var u=n[o].trim();if(u){var s=u.match(Qa);if(s){var l=0|parseInt(s[1],10),h=s[2];l!==0&&(Xa(h,l),eo(e,h,s[3]),e.getTag().insertRules(l,a)),a.length=0}else a.push(u)}}},Vt=function(e){for(var t=document.querySelectorAll(Za),r=0,n=t.length;r<n;r++){var a=t[r];a&&a.getAttribute(ie)!==Sr&&(to(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ro(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Nr=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(u){var s=Array.from(u.querySelectorAll("style[".concat(ie,"]")));return s[s.length-1]}(r),o=a!==void 0?a.nextSibling:null;n.setAttribute(ie,Sr),n.setAttribute(Cr,Qe);var i=ro();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},no=function(){function e(t){this.element=Nr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,a=0,o=n.length;a<o;a++){var i=n[a];if(i.ownerNode===r)return i}throw ke(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),ao=function(){function e(t){this.element=Nr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),oo=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Kt=He,io={isServer:!He,useCSSOMInjection:!Fa},qe=function(){function e(t,r,n){t===void 0&&(t=se),r===void 0&&(r={});var a=this;this.options=N(N({},io),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&He&&Kt&&(Kt=!1,Vt(this)),At(this,function(){return function(o){for(var i=o.getTag(),u=i.length,s="",l=function(m){var f=function(d){return Ge.get(d)}(m);if(f===void 0)return"continue";var g=o.names.get(f),p=i.getGroup(m);if(g===void 0||!g.size||p.length===0)return"continue";var y="".concat(ie,".g").concat(m,'[id="').concat(f,'"]'),v="";g!==void 0&&g.forEach(function(d){d.length>0&&(v+="".concat(d,","))}),s+="".concat(p).concat(y,'{content:"').concat(v,'"}').concat(It)},h=0;h<u;h++)l(h);return s}(a)})}return e.registerId=function(t){return Oe(t)},e.prototype.rehydrate=function(){!this.server&&He&&Vt(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(N(N({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,a=r.target;return r.isServer?new oo(a):n?new no(a):new ao(a)}(this.options),new Ja(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Oe(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Oe(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),so=/&/g,lo=/^\s*\/\/.*$/gm;function Or(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Or(r.children,t)),r})}function uo(e){var t,r,n,a=se,o=a.options,i=o===void 0?se:o,u=a.plugins,s=u===void 0?et:u,l=function(f,g,p){return p.startsWith(r)&&p.endsWith(r)&&p.replaceAll(r,"").length>0?".".concat(t):f},h=s.slice();h.push(function(f){f.type===Ke&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(so,r).replace(n,l))}),i.prefix&&h.push(Oa),h.push(La);var m=function(f,g,p,y){g===void 0&&(g=""),p===void 0&&(p=""),y===void 0&&(y="&"),t=y,r=g,n=new RegExp("\\".concat(r,"\\b"),"g");var v=f.replace(lo,""),d=$a(p||g?"".concat(p," ").concat(g," { ").concat(v," }"):v);i.namespace&&(d=Or(d,i.namespace));var x=[];return Ue(d,za(h.concat(Na(function(w){return x.push(w)})))),x};return m.hash=s.length?s.reduce(function(f,g){return g.name||ke(15),ne(f,g.name)},kr).toString():"",m}var co=new qe,vt=uo(),Tr=G.createContext({shouldForwardProp:void 0,styleSheet:co,stylis:vt});Tr.Consumer;G.createContext(void 0);function xt(){return c.useContext(Tr)}var fo=function(){function e(t,r){var n=this;this.inject=function(a,o){o===void 0&&(o=vt);var i=n.name+o.hash;a.hasNameForId(n.id,i)||a.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,At(this,function(){throw ke(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=vt),this.name+t.hash},e}(),po=function(e){return e>="A"&&e<="Z"};function Jt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;po(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Fr=function(e){return e==null||e===!1||e===""},Dr=function(e){var t,r,n=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Fr(o)&&(Array.isArray(o)&&o.isCss||le(o)?n.push("".concat(Jt(a),":"),o,";"):be(o)?n.push.apply(n,we(we(["".concat(a," {")],Dr(o),!1),["}"],!1)):n.push("".concat(Jt(a),": ").concat((t=a,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Ta||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function X(e,t,r,n){if(Fr(e))return[];if($t(e))return[".".concat(e.styledComponentId)];if(le(e)){if(!le(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var a=e(t);return X(a,t,r,n)}var o;return e instanceof fo?r?(e.inject(r,n),[e.getName(n)]):[e]:be(e)?Dr(e):Array.isArray(e)?Array.prototype.concat.apply(et,e.map(function(i){return X(i,t,r,n)})):[e.toString()]}function _r(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(le(r)&&!$t(r))return!1}return!0}var ho=Pr(Qe),mo=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&_r(t),this.componentId=r,this.baseHash=ne(ho,r),this.baseStyle=n,qe.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))a=Q(a,this.staticRulesId);else{var o=gt(X(this.rules,t,r,n)),i=mt(ne(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var u=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,u)}a=Q(a,i),this.staticRulesId=i}else{for(var s=ne(this.baseHash,n.hash),l="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")l+=m;else if(m){var f=gt(X(m,t,r,n));s=ne(s,f+h),l+=f}}if(l){var g=mt(s>>>0);r.hasNameForId(this.componentId,g)||r.insertRules(this.componentId,g,n(l,".".concat(g),void 0,this.componentId)),a=Q(a,g)}}return a},e}(),Lt=G.createContext(void 0);Lt.Consumer;var ut={};function go(e,t,r){var n=$t(e),a=e,o=!lt(e),i=t.attrs,u=i===void 0?et:i,s=t.componentId,l=s===void 0?function(C,E){var R=typeof C!="string"?"sc":Ut(C);ut[R]=(ut[R]||0)+1;var b="".concat(R,"-").concat(Ir(Qe+R+ut[R]));return E?"".concat(E,"-").concat(b):b}(t.displayName,t.parentComponentId):s,h=t.displayName,m=h===void 0?function(C){return lt(C)?"styled.".concat(C):"Styled(".concat(ja(C),")")}(e):h,f=t.displayName&&t.componentId?"".concat(Ut(t.displayName),"-").concat(t.componentId):t.componentId||l,g=n&&a.attrs?a.attrs.concat(u).filter(Boolean):u,p=t.shouldForwardProp;if(n&&a.shouldForwardProp){var y=a.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;p=function(C,E){return y(C,E)&&v(C,E)}}else p=y}var d=new mo(r,f,n?a.componentStyle:void 0);function x(C,E){return function(R,b,O){var L=R.attrs,_=R.componentStyle,Pe=R.defaultProps,jr=R.foldedComponentIds,Wr=R.styledComponentId,Ur=R.target,Hr=G.useContext(Lt),Gr=xt(),tt=R.shouldForwardProp||Gr.shouldForwardProp,zt=Er(b,Hr,Pe)||se,U=function($e,pe,Ae){for(var he,Z=N(N({},pe),{className:void 0,theme:Ae}),nt=0;nt<$e.length;nt+=1){var Le=le(he=$e[nt])?he(Z):he;for(var K in Le)Z[K]=K==="className"?Q(Z[K],Le[K]):K==="style"?N(N({},Z[K]),Le[K]):Le[K]}return pe.className&&(Z.className=Q(Z.className,pe.className)),Z}(L,b,zt),Ie=U.as||Ur,fe={};for(var V in U)U[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&U.theme===zt||(V==="forwardedAs"?fe.as=U.forwardedAs:tt&&!tt(V,Ie)||(fe[V]=U[V]));var Nt=function($e,pe){var Ae=xt(),he=$e.generateAndInjectStyles(pe,Ae.styleSheet,Ae.stylis);return he}(_,U),rt=Q(jr,Wr);return Nt&&(rt+=" "+Nt),U.className&&(rt+=" "+U.className),fe[lt(Ie)&&!Rr.has(Ie)?"class":"className"]=rt,O&&(fe.ref=O),c.createElement(Ie,fe)}(w,C,E)}x.displayName=m;var w=G.forwardRef(x);return w.attrs=g,w.componentStyle=d,w.displayName=m,w.shouldForwardProp=p,w.foldedComponentIds=n?Q(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=f,w.target=n?a.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=n?function(E){for(var R=[],b=1;b<arguments.length;b++)R[b-1]=arguments[b];for(var O=0,L=R;O<L.length;O++)yt(E,L[O],!0);return E}({},a.defaultProps,C):C}}),At(w,function(){return".".concat(w.styledComponentId)}),o&&zr(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Xt(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var Zt=function(e){return Object.assign(e,{isCss:!0})};function Br(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(le(e)||be(e))return Zt(X(Xt(et,we([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?X(n):Zt(X(Xt(n,t)))}function wt(e,t,r){if(r===void 0&&(r=se),!t)throw ke(1,t);var n=function(a){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,Br.apply(void 0,we([a],o,!1)))};return n.attrs=function(a){return wt(e,t,N(N({},r),{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},n.withConfig=function(a){return wt(e,t,N(N({},r),a))},n}var Mr=function(e){return wt(go,e)},P=Mr;Rr.forEach(function(e){P[e]=Mr(e)});var yo=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=_r(t),qe.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,a){var o=a(gt(X(this.rules,r,n,a)),""),i=this.componentId+t;n.insertRules(i,i,o)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,a){t>2&&qe.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,a)},e}();function vo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Br.apply(void 0,we([e],t,!1)),a="sc-global-".concat(Ir(JSON.stringify(n))),o=new yo(n,a),i=function(s){var l=xt(),h=G.useContext(Lt),m=G.useRef(l.styleSheet.allocateGSInstance(a)).current;return l.styleSheet.server&&u(m,s,l.styleSheet,h,l.stylis),G.useLayoutEffect(function(){if(!l.styleSheet.server)return u(m,s,l.styleSheet,h,l.stylis),function(){return o.removeStyles(m,l.styleSheet)}},[m,s,l.styleSheet,h,l.stylis]),null};function u(s,l,h,m,f){if(o.isStatic)o.renderStyles(s,Da,h,f);else{var g=N(N({},l),{theme:Er(l,m,i.defaultProps)});o.renderStyles(s,g,h,f)}}return G.memo(i)}const Co=vo`
  :root {
    --font-txt: "Roboto", sans-serif;
    --font-title: "Oswald", sans-serif;

    --color-bg: #F0ECE7;
    --color-txt: #362004;
    --color-bg-section: #FFFFFF;
    --color-bg-sec: #E0DED9;
    --color-hover: #8A8B6F;
    --color-somb: #8A8B6F;
    --color-btn: #A63F2C;

    --trans-time: .7s;

    --font-txt-sz: 1rem;
    --font-destq-sz: 1.3rem;
    --font-icon-sz: 1.5rem;
    --font-title-sz: 2rem;
  }

  @media (max-width: 1024px) {
    :root {
      --font-txt-sz: 0.95rem;
      --font-destq-sz: 1.2rem;
      --font-icon-sz: 1.4rem;
      --font-title-sz: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    :root {
      --font-txt-sz: 0.9rem;
      --font-destq-sz: 1.1rem;
      --font-icon-sz: 1.3rem;
      --font-title-sz: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    :root {
      --font-txt-sz: 0.85rem;
      --font-destq-sz: .9rem;
      --font-icon-sz: 1.2rem;
      --font-title-sz: 1.4rem;
    }
  }

  #root, html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-family: var(--font-txt);
    background-color: var(--color-bg);
    color: var(--color-txt);
    font-size: var(--font-txt-sz);

    @media (max-width: 768px) {
      overflow-x: hidden;
    }

    @media (max-width: 480px) {
      overflow-x: hidden;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
    font-size: var(--font-title-sz);
    text-transform: uppercase;
  }

  button {
    font-family: var(--font-txt);
  }

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
  a {
    color: var(--color-txt);
  }
`,Eo=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,Ro=P.div`
background-color: var(--color-bg-sec);
padding: 1rem;
border-radius: 8px;
max-width: 75rem;
width: 100%;
`,ko=P(Re)`
  text-decoration: none;
  color: var(--color-txt);
  font-size: var(--font-destq-sz);
  transition: var(--trans-time);

  &:hover {
    color: var(--color-hover);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Po=P.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 4rem 10rem;

  @media (max-width: 1024px) {
    margin: 4rem 6rem;
  }

  @media (max-width: 768px) {
    margin: 3rem 3rem;
  }

  @media (max-width: 480px) {
    margin: 2rem 1.5rem;
    gap: 3rem;
  }
`,Io=P.h1`
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,$o=P(Re)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ao=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--color-bg-sec);
  border: 1px solid var(--color-txt);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,Lo=P.img`
  width: 15rem;
  height: 15rem;

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 480px) {
    width: 5rem;
    height: 5rem;
  }
`,zo=P.button`
  width: 13rem;
  padding: 1rem;
  border: 1px solid var(--color-bg-sec);
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-bg-section);
  background-color: var(--color-btn);
  transition: var(--trans-time);
  font-size: var(--font-text-sz);

  &:hover {
    background-color: var(--color-hover);
  }

  @media (max-width: 768px) {
    width: 11rem;
    padding: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 10rem;
    padding: 0.8rem;
  }
`,No=P.p`
  font-size: var(--font-destq-sz);
  font-weight: 600;
  font-family: var(--font-title);
`,Oo=P.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,To=P.form`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-txt);
  padding: 2rem;
  align-items: center;
  background-color: var(--color-bg-sec);
  gap: 1rem;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,Fo=P.input`
  width: 40rem;
  padding: 1rem;
  border: 1px solid var(--color-txt);
  font-family: var(--font-txt);
  color: var(--color-txt);
  border-radius: 8px;
  font-size: var(--font-txt-sz);
  outline: none;
  background-color: var(--color-bg-section);

  @media (max-width: 1024px) {
    width: 25rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }

  @media (max-width: 480px) {
    width: 15rem;
  }
`,Do=P(Re)`
  text-decoration: underline;
  color: var(--color-txt);
  font-size: var(--font-txt-sz);
  transition: var(--trans-time);

  &:hover {
    color: var(--color-hover);
  }
`,_o=P.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.5rem;
  background-color: var(--color-bg-sec);
  padding: 3rem;
  flex-wrap: wrap;

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
`,Bo=P.p`
  font-size: var(--font-destq-sz);
`,Mo=P.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-bg-sec);
  padding: 2rem;
`,jo=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-bg-sec);
  padding: 2rem;
`,Wo=P.p`
  font-size: var(--font-destq-sz);
`,Uo=P.button`
  width: 3rem;
  color: var(--color-btn);
  background-color: var(--color-bg-sec);
  border: none;
  cursor: pointer;
  transition: var(--trans-time);
  box-sizing: border-box;
  padding: .6rem 0;
  font-size: var(--font-destq-sz);

  &:hover {
    color: var(--color-hover);
  }
`,Ho=P.div`
  width: 100%;
  overflow-x: auto;
  display: block;

  @media (max-width: 1024px) {
    overflow-x: auto;
  }

  @media (max-width: 768px) {
    overflow-x: auto;
    width: 80%;
  }

  @media (max-width: 480px) {
    overflow-x: auto;
    width: 60%;
  }
`,Go=P.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  border: 1px solid var(--color-btn);
  background-color: var(--color-bg-section);

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,qo=P.thead`
  background-color: var(--color-btn);
  color: var(--color-bg-section);
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,Yo=P.th`
  padding: 12px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 13px;
  }
`,Vo=P.td`
  padding: 10px;
  vertical-align: middle;
  border: 1px solid var(--color-btn);
  text-align: center;

  @media (max-width: 1024px) {
    padding: 8px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    font-size: 13px;
  }
`;export{zo as B,Po as C,Mo as D,No as F,Co as G,Lo as I,$o as L,Eo as M,Oo as N,bo as R,_o as S,Ho as T,Go as a,qo as b,Yo as c,P as d,Vo as e,wo as f,Io as g,Ao as h,To as i,Fo as j,Do as k,Bo as l,Re as m,Uo as n,Ro as o,jo as p,Wo as q,Dn as r,Sn as s,ko as t,te as u,So as v};
