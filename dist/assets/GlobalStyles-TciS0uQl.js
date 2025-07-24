var La=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Na(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var r=function n(){var o=!1;try{o=this instanceof n}catch{}return o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var ht={exports:{}},$e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt;function nn(){if(Gt)return $e;Gt=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,o,a){var i=null;if(a!==void 0&&(i=""+a),o.key!==void 0&&(i=""+o.key),"key"in o){a={};for(var c in o)c!=="key"&&(a[c]=o[c])}else a=o;return o=a.ref,{$$typeof:e,type:n,key:i,ref:o!==void 0?o:null,props:a}}return $e.Fragment=t,$e.jsx=r,$e.jsxs=r,$e}var Jt;function on(){return Jt||(Jt=1,ht.exports=nn()),ht.exports}var za=on(),mt={exports:{}},I={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vt;function an(){if(Vt)return I;Vt=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.consumer"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function p(s){return s===null||typeof s!="object"?null:(s=g&&s[g]||s["@@iterator"],typeof s=="function"?s:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,x={};function w(s,y,R){this.props=s,this.context=y,this.refs=x,this.updater=R||v}w.prototype.isReactComponent={},w.prototype.setState=function(s,y){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,y,"setState")},w.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function d(){}d.prototype=w.prototype;function b(s,y,R){this.props=s,this.context=y,this.refs=x,this.updater=R||v}var S=b.prototype=new d;S.constructor=b,h(S,w.prototype),S.isPureReactComponent=!0;var _=Array.isArray,E={H:null,A:null,T:null,S:null,V:null},A=Object.prototype.hasOwnProperty;function C(s,y,R,P,O,N){return R=N.ref,{$$typeof:e,type:s,key:y,ref:R!==void 0?R:null,props:N}}function H(s,y){return C(s.type,y,void 0,void 0,void 0,s.props)}function F(s){return typeof s=="object"&&s!==null&&s.$$typeof===e}function q(s){var y={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(R){return y[R]})}var ce=/\/+/g;function Pe(s,y){return typeof s=="object"&&s!==null&&s.key!=null?q(""+s.key):y.toString(36)}function Me(){}function dt(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(Me,Me):(s.status="pending",s.then(function(y){s.status==="pending"&&(s.status="fulfilled",s.value=y)},function(y){s.status==="pending"&&(s.status="rejected",s.reason=y)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function ae(s,y,R,P,O){var N=typeof s;(N==="undefined"||N==="boolean")&&(s=null);var $=!1;if(s===null)$=!0;else switch(N){case"bigint":case"string":case"number":$=!0;break;case"object":switch(s.$$typeof){case e:case t:$=!0;break;case m:return $=s._init,ae($(s._payload),y,R,P,O)}}if($)return O=O(s),$=P===""?"."+Pe(s,0):P,_(O)?(R="",$!=null&&(R=$.replace(ce,"$&/")+"/"),ae(O,y,R,"",function(ee){return ee})):O!=null&&(F(O)&&(O=H(O,R+(O.key==null||s&&s.key===O.key?"":(""+O.key).replace(ce,"$&/")+"/")+$)),y.push(O)),1;$=0;var W=P===""?".":P+":";if(_(s))for(var z=0;z<s.length;z++)P=s[z],N=W+Pe(P,z),$+=ae(P,y,R,N,O);else if(z=p(s),typeof z=="function")for(s=z.call(s),z=0;!(P=s.next()).done;)P=P.value,N=W+Pe(P,z++),$+=ae(P,y,R,N,O);else if(N==="object"){if(typeof s.then=="function")return ae(dt(s),y,R,P,O);throw y=String(s),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.")}return $}function pe(s,y,R){if(s==null)return s;var P=[],O=0;return ae(s,P,"","",function(N){return y.call(R,N,O++)}),P}function ke(s){if(s._status===-1){var y=s._result;y=y(),y.then(function(R){(s._status===0||s._status===-1)&&(s._status=1,s._result=R)},function(R){(s._status===0||s._status===-1)&&(s._status=2,s._result=R)}),s._status===-1&&(s._status=0,s._result=y)}if(s._status===1)return s._result.default;throw s._result}var _e=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function J(){}return I.Children={map:pe,forEach:function(s,y,R){pe(s,function(){y.apply(this,arguments)},R)},count:function(s){var y=0;return pe(s,function(){y++}),y},toArray:function(s){return pe(s,function(y){return y})||[]},only:function(s){if(!F(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},I.Component=w,I.Fragment=r,I.Profiler=o,I.PureComponent=b,I.StrictMode=n,I.Suspense=u,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,I.__COMPILER_RUNTIME={__proto__:null,c:function(s){return E.H.useMemoCache(s)}},I.cache=function(s){return function(){return s.apply(null,arguments)}},I.cloneElement=function(s,y,R){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var P=h({},s.props),O=s.key,N=void 0;if(y!=null)for($ in y.ref!==void 0&&(N=void 0),y.key!==void 0&&(O=""+y.key),y)!A.call(y,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&y.ref===void 0||(P[$]=y[$]);var $=arguments.length-2;if($===1)P.children=R;else if(1<$){for(var W=Array($),z=0;z<$;z++)W[z]=arguments[z+2];P.children=W}return C(s.type,O,void 0,void 0,N,P)},I.createContext=function(s){return s={$$typeof:i,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:a,_context:s},s},I.createElement=function(s,y,R){var P,O={},N=null;if(y!=null)for(P in y.key!==void 0&&(N=""+y.key),y)A.call(y,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(O[P]=y[P]);var $=arguments.length-2;if($===1)O.children=R;else if(1<$){for(var W=Array($),z=0;z<$;z++)W[z]=arguments[z+2];O.children=W}if(s&&s.defaultProps)for(P in $=s.defaultProps,$)O[P]===void 0&&(O[P]=$[P]);return C(s,N,void 0,void 0,null,O)},I.createRef=function(){return{current:null}},I.forwardRef=function(s){return{$$typeof:c,render:s}},I.isValidElement=F,I.lazy=function(s){return{$$typeof:m,_payload:{_status:-1,_result:s},_init:ke}},I.memo=function(s,y){return{$$typeof:l,type:s,compare:y===void 0?null:y}},I.startTransition=function(s){var y=E.T,R={};E.T=R;try{var P=s(),O=E.S;O!==null&&O(R,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(J,_e)}catch(N){_e(N)}finally{E.T=y}},I.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},I.use=function(s){return E.H.use(s)},I.useActionState=function(s,y,R){return E.H.useActionState(s,y,R)},I.useCallback=function(s,y){return E.H.useCallback(s,y)},I.useContext=function(s){return E.H.useContext(s)},I.useDebugValue=function(){},I.useDeferredValue=function(s,y){return E.H.useDeferredValue(s,y)},I.useEffect=function(s,y,R){var P=E.H;if(typeof R=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return P.useEffect(s,y)},I.useId=function(){return E.H.useId()},I.useImperativeHandle=function(s,y,R){return E.H.useImperativeHandle(s,y,R)},I.useInsertionEffect=function(s,y){return E.H.useInsertionEffect(s,y)},I.useLayoutEffect=function(s,y){return E.H.useLayoutEffect(s,y)},I.useMemo=function(s,y){return E.H.useMemo(s,y)},I.useOptimistic=function(s,y){return E.H.useOptimistic(s,y)},I.useReducer=function(s,y,R){return E.H.useReducer(s,y,R)},I.useRef=function(s){return E.H.useRef(s)},I.useState=function(s){return E.H.useState(s)},I.useSyncExternalStore=function(s,y,R){return E.H.useSyncExternalStore(s,y,R)},I.useTransition=function(){return E.H.useTransition()},I.version="19.1.0",I}var Kt;function sn(){return Kt||(Kt=1,mt.exports=an()),mt.exports}var f=sn();const re=rn(f);var Ie={},Xt;function un(){if(Xt)return Ie;Xt=1,Object.defineProperty(Ie,"__esModule",{value:!0}),Ie.parse=i,Ie.serialize=l;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,n=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const p=function(){};return p.prototype=Object.create(null),p})();function i(p,v){const h=new a,x=p.length;if(x<2)return h;const w=v?.decode||m;let d=0;do{const b=p.indexOf("=",d);if(b===-1)break;const S=p.indexOf(";",d),_=S===-1?x:S;if(b>_){d=p.lastIndexOf(";",b-1)+1;continue}const E=c(p,d,b),A=u(p,b,E),C=p.slice(E,A);if(h[C]===void 0){let H=c(p,b+1,_),F=u(p,_,H);const q=w(p.slice(H,F));h[C]=q}d=_+1}while(d<x);return h}function c(p,v,h){do{const x=p.charCodeAt(v);if(x!==32&&x!==9)return v}while(++v<h);return h}function u(p,v,h){for(;v>h;){const x=p.charCodeAt(--v);if(x!==32&&x!==9)return v+1}return h}function l(p,v,h){const x=h?.encode||encodeURIComponent;if(!e.test(p))throw new TypeError(`argument name is invalid: ${p}`);const w=x(v);if(!t.test(w))throw new TypeError(`argument val is invalid: ${v}`);let d=p+"="+w;if(!h)return d;if(h.maxAge!==void 0){if(!Number.isInteger(h.maxAge))throw new TypeError(`option maxAge is invalid: ${h.maxAge}`);d+="; Max-Age="+h.maxAge}if(h.domain){if(!r.test(h.domain))throw new TypeError(`option domain is invalid: ${h.domain}`);d+="; Domain="+h.domain}if(h.path){if(!n.test(h.path))throw new TypeError(`option path is invalid: ${h.path}`);d+="; Path="+h.path}if(h.expires){if(!g(h.expires)||!Number.isFinite(h.expires.valueOf()))throw new TypeError(`option expires is invalid: ${h.expires}`);d+="; Expires="+h.expires.toUTCString()}if(h.httpOnly&&(d+="; HttpOnly"),h.secure&&(d+="; Secure"),h.partitioned&&(d+="; Partitioned"),h.priority)switch(typeof h.priority=="string"?h.priority.toLowerCase():void 0){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${h.priority}`)}if(h.sameSite)switch(typeof h.sameSite=="string"?h.sameSite.toLowerCase():h.sameSite){case!0:case"strict":d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"none":d+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${h.sameSite}`)}return d}function m(p){if(p.indexOf("%")===-1)return p;try{return decodeURIComponent(p)}catch{return p}}function g(p){return o.call(p)==="[object Date]"}return Ie}un();var Zt="popstate";function ln(e={}){function t(n,o){let{pathname:a,search:i,hash:c}=n.location;return Et("",{pathname:a,search:i,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Le(o)}return fn(t,r,null,e)}function j(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function K(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cn(){return Math.random().toString(36).substring(2,10)}function Qt(e,t){return{usr:e.state,key:e.key,idx:t}}function Et(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ee(t):t,state:r,key:t&&t.key||n||cn()}}function Le({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ee(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function fn(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:a=!1}=n,i=o.history,c="POP",u=null,l=m();l==null&&(l=0,i.replaceState({...i.state,idx:l},""));function m(){return(i.state||{idx:null}).idx}function g(){c="POP";let w=m(),d=w==null?null:w-l;l=w,u&&u({action:c,location:x.location,delta:d})}function p(w,d){c="PUSH";let b=Et(x.location,w,d);l=m()+1;let S=Qt(b,l),_=x.createHref(b);try{i.pushState(S,"",_)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(_)}a&&u&&u({action:c,location:x.location,delta:1})}function v(w,d){c="REPLACE";let b=Et(x.location,w,d);l=m();let S=Qt(b,l),_=x.createHref(b);i.replaceState(S,"",_),a&&u&&u({action:c,location:x.location,delta:0})}function h(w){return dn(w)}let x={get action(){return c},get location(){return e(o,i)},listen(w){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Zt,g),u=w,()=>{o.removeEventListener(Zt,g),u=null}},createHref(w){return t(o,w)},createURL:h,encodeLocation(w){let d=h(w);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:p,replace:v,go(w){return i.go(w)}};return x}function dn(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),j(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Le(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function gr(e,t,r="/"){return pn(e,t,r,!1)}function pn(e,t,r,n){let o=typeof t=="string"?Ee(t):t,a=oe(o.pathname||"/",r);if(a==null)return null;let i=yr(e);hn(i);let c=null;for(let u=0;c==null&&u<i.length;++u){let l=Cn(a);c=Sn(i[u],l,n)}return c}function yr(e,t=[],r=[],n=""){let o=(a,i,c)=>{let u={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};u.relativePath.startsWith("/")&&(j(u.relativePath.startsWith(n),`Absolute route path "${u.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(n.length));let l=ne([n,u.relativePath]),m=r.concat(u);a.children&&a.children.length>0&&(j(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),yr(a.children,t,m,l)),!(a.path==null&&!a.index)&&t.push({path:l,score:bn(l,a.index),routesMeta:m})};return e.forEach((a,i)=>{if(a.path===""||!a.path?.includes("?"))o(a,i);else for(let c of vr(a.path))o(a,i,c)}),t}function vr(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let i=vr(n.join("/")),c=[];return c.push(...i.map(u=>u===""?a:[a,u].join("/"))),o&&c.push(...i),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function hn(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:En(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var mn=/^:[\w-]+$/,gn=3,yn=2,vn=1,xn=10,wn=-2,er=e=>e==="*";function bn(e,t){let r=e.split("/"),n=r.length;return r.some(er)&&(n+=wn),t&&(n+=yn),r.filter(o=>!er(o)).reduce((o,a)=>o+(mn.test(a)?gn:a===""?vn:xn),n)}function En(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Sn(e,t,r=!1){let{routesMeta:n}=e,o={},a="/",i=[];for(let c=0;c<n.length;++c){let u=n[c],l=c===n.length-1,m=a==="/"?t:t.slice(a.length)||"/",g=Ze({path:u.relativePath,caseSensitive:u.caseSensitive,end:l},m),p=u.route;if(!g&&l&&r&&!n[n.length-1].route.index&&(g=Ze({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!g)return null;Object.assign(o,g.params),i.push({params:o,pathname:ne([a,g.pathname]),pathnameBase:$n(ne([a,g.pathnameBase])),route:p}),g.pathnameBase!=="/"&&(a=ne([a,g.pathnameBase]))}return i}function Ze(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Rn(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:n.reduce((l,{paramName:m,isOptional:g},p)=>{if(m==="*"){let h=c[p]||"";i=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}const v=c[p];return g&&!v?l[m]=void 0:l[m]=(v||"").replace(/%2F/g,"/"),l},{}),pathname:a,pathnameBase:i,pattern:e}}function Rn(e,t=!1,r=!0){K(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,c,u)=>(n.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Cn(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return K(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function oe(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Pn(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Ee(e):e;return{pathname:r?r.startsWith("/")?r:kn(r,t):t,search:In(n),hash:Tn(o)}}function kn(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function gt(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _n(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function At(e){let t=_n(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function Ot(e,t,r,n=!1){let o;typeof e=="string"?o=Ee(e):(o={...e},j(!o.pathname||!o.pathname.includes("?"),gt("?","pathname","search",o)),j(!o.pathname||!o.pathname.includes("#"),gt("#","pathname","hash",o)),j(!o.search||!o.search.includes("#"),gt("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,c;if(i==null)c=r;else{let g=t.length-1;if(!n&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),g-=1;o.pathname=p.join("/")}c=g>=0?t[g]:"/"}let u=Pn(o,c),l=i&&i!=="/"&&i.endsWith("/"),m=(a||i===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(l||m)&&(u.pathname+="/"),u}var ne=e=>e.join("/").replace(/\/\/+/g,"/"),$n=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),In=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Tn=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function An(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var xr=["POST","PUT","PATCH","DELETE"];new Set(xr);var On=["GET",...xr];new Set(On);var Se=f.createContext(null);Se.displayName="DataRouter";var ot=f.createContext(null);ot.displayName="DataRouterState";var wr=f.createContext({isTransitioning:!1});wr.displayName="ViewTransition";var Ln=f.createContext(new Map);Ln.displayName="Fetchers";var Nn=f.createContext(null);Nn.displayName="Await";var X=f.createContext(null);X.displayName="Navigation";var ze=f.createContext(null);ze.displayName="Location";var Z=f.createContext({outlet:null,matches:[],isDataRoute:!1});Z.displayName="Route";var Lt=f.createContext(null);Lt.displayName="RouteError";function zn(e,{relative:t}={}){j(Re(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=f.useContext(X),{hash:o,pathname:a,search:i}=De(e,{relative:t}),c=a;return r!=="/"&&(c=a==="/"?r:ne([r,a])),n.createHref({pathname:c,search:i,hash:o})}function Re(){return f.useContext(ze)!=null}function le(){return j(Re(),"useLocation() may be used only in the context of a <Router> component."),f.useContext(ze).location}var br="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Er(e){f.useContext(X).static||f.useLayoutEffect(e)}function Sr(){let{isDataRoute:e}=f.useContext(Z);return e?Vn():Dn()}function Dn(){j(Re(),"useNavigate() may be used only in the context of a <Router> component.");let e=f.useContext(Se),{basename:t,navigator:r}=f.useContext(X),{matches:n}=f.useContext(Z),{pathname:o}=le(),a=JSON.stringify(At(n)),i=f.useRef(!1);return Er(()=>{i.current=!0}),f.useCallback((u,l={})=>{if(K(i.current,br),!i.current)return;if(typeof u=="number"){r.go(u);return}let m=Ot(u,JSON.parse(a),o,l.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ne([t,m.pathname])),(l.replace?r.replace:r.push)(m,l.state,l)},[t,r,a,o,e])}f.createContext(null);function Da(){let{matches:e}=f.useContext(Z),t=e[e.length-1];return t?t.params:{}}function De(e,{relative:t}={}){let{matches:r}=f.useContext(Z),{pathname:n}=le(),o=JSON.stringify(At(r));return f.useMemo(()=>Ot(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function jn(e,t){return Rr(e,t)}function Rr(e,t,r,n){j(Re(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=f.useContext(X),{matches:a}=f.useContext(Z),i=a[a.length-1],c=i?i.params:{},u=i?i.pathname:"/",l=i?i.pathnameBase:"/",m=i&&i.route;{let d=m&&m.path||"";Cr(u,!m||d.endsWith("*")||d.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d==="/"?"*":`${d}/*`}">.`)}let g=le(),p;if(t){let d=typeof t=="string"?Ee(t):t;j(l==="/"||d.pathname?.startsWith(l),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${d.pathname}" was given in the \`location\` prop.`),p=d}else p=g;let v=p.pathname||"/",h=v;if(l!=="/"){let d=l.replace(/^\//,"").split("/");h="/"+v.replace(/^\//,"").split("/").slice(d.length).join("/")}let x=gr(e,{pathname:h});K(m||x!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),K(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=Un(x&&x.map(d=>Object.assign({},d,{params:Object.assign({},c,d.params),pathname:ne([l,o.encodeLocation?o.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?l:ne([l,o.encodeLocation?o.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),a,r,n);return t&&w?f.createElement(ze.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},w):w}function Fn(){let e=Jn(),t=An(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=f.createElement(f.Fragment,null,f.createElement("p",null,"💿 Hey developer 👋"),f.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",f.createElement("code",{style:a},"ErrorBoundary")," or"," ",f.createElement("code",{style:a},"errorElement")," prop on your route.")),f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},t),r?f.createElement("pre",{style:o},r):null,i)}var Mn=f.createElement(Fn,null),Bn=class extends f.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?f.createElement(Z.Provider,{value:this.props.routeContext},f.createElement(Lt.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hn({routeContext:e,match:t,children:r}){let n=f.useContext(Se);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),f.createElement(Z.Provider,{value:e},r)}function Un(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,a=r?.errors;if(a!=null){let u=o.findIndex(l=>l.route.id&&a?.[l.route.id]!==void 0);j(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,u+1))}let i=!1,c=-1;if(r)for(let u=0;u<o.length;u++){let l=o[u];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(c=u),l.route.id){let{loaderData:m,errors:g}=r,p=l.route.loader&&!m.hasOwnProperty(l.route.id)&&(!g||g[l.route.id]===void 0);if(l.route.lazy||p){i=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,l,m)=>{let g,p=!1,v=null,h=null;r&&(g=a&&l.route.id?a[l.route.id]:void 0,v=l.route.errorElement||Mn,i&&(c<0&&m===0?(Cr("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,h=null):c===m&&(p=!0,h=l.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,m+1)),w=()=>{let d;return g?d=v:p?d=h:l.route.Component?d=f.createElement(l.route.Component,null):l.route.element?d=l.route.element:d=u,f.createElement(Hn,{match:l,routeContext:{outlet:u,matches:x,isDataRoute:r!=null},children:d})};return r&&(l.route.ErrorBoundary||l.route.errorElement||m===0)?f.createElement(Bn,{location:r.location,revalidation:r.revalidation,component:v,error:g,children:w(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):w()},null)}function Nt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wn(e){let t=f.useContext(Se);return j(t,Nt(e)),t}function Yn(e){let t=f.useContext(ot);return j(t,Nt(e)),t}function qn(e){let t=f.useContext(Z);return j(t,Nt(e)),t}function zt(e){let t=qn(e),r=t.matches[t.matches.length-1];return j(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Gn(){return zt("useRouteId")}function Jn(){let e=f.useContext(Lt),t=Yn("useRouteError"),r=zt("useRouteError");return e!==void 0?e:t.errors?.[r]}function Vn(){let{router:e}=Wn("useNavigate"),t=zt("useNavigate"),r=f.useRef(!1);return Er(()=>{r.current=!0}),f.useCallback(async(o,a={})=>{K(r.current,br),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var tr={};function Cr(e,t,r){!t&&!tr[e]&&(tr[e]=!0,K(!1,r))}f.memo(Kn);function Kn({routes:e,future:t,state:r}){return Rr(e,void 0,r,t)}function ja({to:e,replace:t,state:r,relative:n}){j(Re(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=f.useContext(X);K(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=f.useContext(Z),{pathname:i}=le(),c=Sr(),u=Ot(e,At(a),i,n==="path"),l=JSON.stringify(u);return f.useEffect(()=>{c(JSON.parse(l),{replace:t,state:r,relative:n})},[c,l,n,t,r]),null}function Xn(e){j(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Zn({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:a=!1}){j(!Re(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),c=f.useMemo(()=>({basename:i,navigator:o,static:a,future:{}}),[i,o,a]);typeof r=="string"&&(r=Ee(r));let{pathname:u="/",search:l="",hash:m="",state:g=null,key:p="default"}=r,v=f.useMemo(()=>{let h=oe(u,i);return h==null?null:{location:{pathname:h,search:l,hash:m,state:g,key:p},navigationType:n}},[i,u,l,m,g,p,n]);return K(v!=null,`<Router basename="${i}"> is not able to match the URL "${u}${l}${m}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:f.createElement(X.Provider,{value:c},f.createElement(ze.Provider,{children:t,value:v}))}function Fa({children:e,location:t}){return jn(St(e),t)}function St(e,t=[]){let r=[];return f.Children.forEach(e,(n,o)=>{if(!f.isValidElement(n))return;let a=[...t,o];if(n.type===f.Fragment){r.push.apply(r,St(n.props.children,a));return}j(n.type===Xn,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),j(!n.props.index||!n.props.children,"An index route cannot have child routes.");let i={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=St(n.props.children,a)),r.push(i)}),r}var Ye="get",qe="application/x-www-form-urlencoded";function at(e){return e!=null&&typeof e.tagName=="string"}function Qn(e){return at(e)&&e.tagName.toLowerCase()==="button"}function eo(e){return at(e)&&e.tagName.toLowerCase()==="form"}function to(e){return at(e)&&e.tagName.toLowerCase()==="input"}function ro(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function no(e,t){return e.button===0&&(!t||t==="_self")&&!ro(e)}var He=null;function oo(){if(He===null)try{new FormData(document.createElement("form"),0),He=!1}catch{He=!0}return He}var ao=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yt(e){return e!=null&&!ao.has(e)?(K(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qe}"`),null):e}function io(e,t){let r,n,o,a,i;if(eo(e)){let c=e.getAttribute("action");n=c?oe(c,t):null,r=e.getAttribute("method")||Ye,o=yt(e.getAttribute("enctype"))||qe,a=new FormData(e)}else if(Qn(e)||to(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||c.getAttribute("action");if(n=u?oe(u,t):null,r=e.getAttribute("formmethod")||c.getAttribute("method")||Ye,o=yt(e.getAttribute("formenctype"))||yt(c.getAttribute("enctype"))||qe,a=new FormData(c,e),!oo()){let{name:l,type:m,value:g}=e;if(m==="image"){let p=l?`${l}.`:"";a.append(`${p}x`,"0"),a.append(`${p}y`,"0")}else l&&a.append(l,g)}}else{if(at(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ye,n=null,o=qe,i=e}return a&&o==="text/plain"&&(i=a,a=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:a,body:i}}function Dt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function so(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uo(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function lo(e,t,r){let n=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let i=await so(a,r);return i.links?i.links():[]}return[]}));return ho(n.flat(1).filter(uo).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function rr(e,t,r,n,o,a){let i=(u,l)=>r[l]?u.route.id!==r[l].route.id:!0,c=(u,l)=>r[l].pathname!==u.pathname||r[l].route.path?.endsWith("*")&&r[l].params["*"]!==u.params["*"];return a==="assets"?t.filter((u,l)=>i(u,l)||c(u,l)):a==="data"?t.filter((u,l)=>{let m=n.routes[u.route.id];if(!m||!m.hasLoader)return!1;if(i(u,l)||c(u,l))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function co(e,t,{includeHydrateFallback:r}={}){return fo(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function fo(e){return[...new Set(e)]}function po(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function ho(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let a=JSON.stringify(po(o));return r.has(a)||(r.add(a),n.push({key:a,link:o})),n},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var mo=new Set([100,101,204,205]);function go(e,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":t&&oe(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function Pr(){let e=f.useContext(Se);return Dt(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function yo(){let e=f.useContext(ot);return Dt(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var jt=f.createContext(void 0);jt.displayName="FrameworkContext";function kr(){let e=f.useContext(jt);return Dt(e,"You must render this element inside a <HydratedRouter> element"),e}function vo(e,t){let r=f.useContext(jt),[n,o]=f.useState(!1),[a,i]=f.useState(!1),{onFocus:c,onBlur:u,onMouseEnter:l,onMouseLeave:m,onTouchStart:g}=t,p=f.useRef(null);f.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let x=d=>{d.forEach(b=>{i(b.isIntersecting)})},w=new IntersectionObserver(x,{threshold:.5});return p.current&&w.observe(p.current),()=>{w.disconnect()}}},[e]),f.useEffect(()=>{if(n){let x=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(x)}}},[n]);let v=()=>{o(!0)},h=()=>{o(!1),i(!1)};return r?e!=="intent"?[a,p,{}]:[a,p,{onFocus:Te(c,v),onBlur:Te(u,h),onMouseEnter:Te(l,v),onMouseLeave:Te(m,h),onTouchStart:Te(g,v)}]:[!1,p,{}]}function Te(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function xo({page:e,...t}){let{router:r}=Pr(),n=f.useMemo(()=>gr(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?f.createElement(bo,{page:e,matches:n,...t}):null}function wo(e){let{manifest:t,routeModules:r}=kr(),[n,o]=f.useState([]);return f.useEffect(()=>{let a=!1;return lo(e,t,r).then(i=>{a||o(i)}),()=>{a=!0}},[e,t,r]),n}function bo({page:e,matches:t,...r}){let n=le(),{manifest:o,routeModules:a}=kr(),{basename:i}=Pr(),{loaderData:c,matches:u}=yo(),l=f.useMemo(()=>rr(e,t,u,o,n,"data"),[e,t,u,o,n]),m=f.useMemo(()=>rr(e,t,u,o,n,"assets"),[e,t,u,o,n]),g=f.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let h=new Set,x=!1;if(t.forEach(d=>{let b=o.routes[d.route.id];!b||!b.hasLoader||(!l.some(S=>S.route.id===d.route.id)&&d.route.id in c&&a[d.route.id]?.shouldRevalidate||b.hasClientLoader?x=!0:h.add(d.route.id))}),h.size===0)return[];let w=go(e,i);return x&&h.size>0&&w.searchParams.set("_routes",t.filter(d=>h.has(d.route.id)).map(d=>d.route.id).join(",")),[w.pathname+w.search]},[i,c,n,o,l,t,e,a]),p=f.useMemo(()=>co(m,o),[m,o]),v=wo(m);return f.createElement(f.Fragment,null,g.map(h=>f.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...r})),p.map(h=>f.createElement("link",{key:h,rel:"modulepreload",href:h,...r})),v.map(({key:h,link:x})=>f.createElement("link",{key:h,...x})))}function Eo(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var _r=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_r&&(window.__reactRouterVersion="7.6.2")}catch{}function Ma({basename:e,children:t,window:r}){let n=f.useRef();n.current==null&&(n.current=ln({window:r,v5Compat:!0}));let o=n.current,[a,i]=f.useState({action:o.action,location:o.location}),c=f.useCallback(u=>{f.startTransition(()=>i(u))},[i]);return f.useLayoutEffect(()=>o.listen(c),[o,c]),f.createElement(Zn,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var $r=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,je=f.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:a,replace:i,state:c,target:u,to:l,preventScrollReset:m,viewTransition:g,...p},v){let{basename:h}=f.useContext(X),x=typeof l=="string"&&$r.test(l),w,d=!1;if(typeof l=="string"&&x&&(w=l,_r))try{let F=new URL(window.location.href),q=l.startsWith("//")?new URL(F.protocol+l):new URL(l),ce=oe(q.pathname,h);q.origin===F.origin&&ce!=null?l=ce+q.search+q.hash:d=!0}catch{K(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=zn(l,{relative:o}),[S,_,E]=vo(n,p),A=Po(l,{replace:i,state:c,target:u,preventScrollReset:m,relative:o,viewTransition:g});function C(F){t&&t(F),F.defaultPrevented||A(F)}let H=f.createElement("a",{...p,...E,href:w||b,onClick:d||a?t:C,ref:Eo(v,_),target:u,"data-discover":!x&&r==="render"?"true":void 0});return S&&!x?f.createElement(f.Fragment,null,H,f.createElement(xo,{page:b})):H});je.displayName="Link";var So=f.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:a,to:i,viewTransition:c,children:u,...l},m){let g=De(i,{relative:l.relative}),p=le(),v=f.useContext(ot),{navigator:h,basename:x}=f.useContext(X),w=v!=null&&To(g)&&c===!0,d=h.encodeLocation?h.encodeLocation(g).pathname:g.pathname,b=p.pathname,S=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(b=b.toLowerCase(),S=S?S.toLowerCase():null,d=d.toLowerCase()),S&&x&&(S=oe(S,x)||S);const _=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let E=b===d||!o&&b.startsWith(d)&&b.charAt(_)==="/",A=S!=null&&(S===d||!o&&S.startsWith(d)&&S.charAt(d.length)==="/"),C={isActive:E,isPending:A,isTransitioning:w},H=E?t:void 0,F;typeof n=="function"?F=n(C):F=[n,E?"active":null,A?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let q=typeof a=="function"?a(C):a;return f.createElement(je,{...l,"aria-current":H,className:F,ref:m,style:q,to:i,viewTransition:c},typeof u=="function"?u(C):u)});So.displayName="NavLink";var Ro=f.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:a,method:i=Ye,action:c,onSubmit:u,relative:l,preventScrollReset:m,viewTransition:g,...p},v)=>{let h=$o(),x=Io(c,{relative:l}),w=i.toLowerCase()==="get"?"get":"post",d=typeof c=="string"&&$r.test(c),b=S=>{if(u&&u(S),S.defaultPrevented)return;S.preventDefault();let _=S.nativeEvent.submitter,E=_?.getAttribute("formmethod")||i;h(_||S.currentTarget,{fetcherKey:t,method:E,navigate:r,replace:o,state:a,relative:l,preventScrollReset:m,viewTransition:g})};return f.createElement("form",{ref:v,method:w,action:x,onSubmit:n?u:b,...p,"data-discover":!d&&e==="render"?"true":void 0})});Ro.displayName="Form";function Co(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ir(e){let t=f.useContext(Se);return j(t,Co(e)),t}function Po(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:a,viewTransition:i}={}){let c=Sr(),u=le(),l=De(e,{relative:a});return f.useCallback(m=>{if(no(m,t)){m.preventDefault();let g=r!==void 0?r:Le(u)===Le(l);c(e,{replace:g,state:n,preventScrollReset:o,relative:a,viewTransition:i})}},[u,c,l,r,n,t,e,o,a,i])}var ko=0,_o=()=>`__${String(++ko)}__`;function $o(){let{router:e}=Ir("useSubmit"),{basename:t}=f.useContext(X),r=Gn();return f.useCallback(async(n,o={})=>{let{action:a,method:i,encType:c,formData:u,body:l}=io(n,t);if(o.navigate===!1){let m=o.fetcherKey||_o();await e.fetch(m,r,o.action||a,{preventScrollReset:o.preventScrollReset,formData:u,body:l,formMethod:o.method||i,formEncType:o.encType||c,flushSync:o.flushSync})}else await e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:u,body:l,formMethod:o.method||i,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Io(e,{relative:t}={}){let{basename:r}=f.useContext(X),n=f.useContext(Z);j(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),a={...De(e||".",{relative:t})},i=le();if(e==null){a.search=i.search;let c=new URLSearchParams(a.search),u=c.getAll("index");if(u.some(m=>m==="")){c.delete("index"),u.filter(g=>g).forEach(g=>c.append("index",g));let m=c.toString();a.search=m?`?${m}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:ne([r,a.pathname])),Le(a)}function To(e,t={}){let r=f.useContext(wr);j(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Ir("useViewTransitionState"),o=De(e,{relative:t.relative});if(!r.isTransitioning)return!1;let a=oe(r.currentLocation.pathname,n)||r.currentLocation.pathname,i=oe(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Ze(o.pathname,i)!=null||Ze(o.pathname,a)!=null}[...mo];var U=function(){return U=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},U.apply(this,arguments)};function ge(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,a;n<o;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var D="-ms-",Oe="-moz-",L="-webkit-",Tr="comm",it="rule",Ft="decl",Ao="@import",Ar="@keyframes",Oo="@layer",Or=Math.abs,Mt=String.fromCharCode,Rt=Object.assign;function Lo(e,t){return B(e,0)^45?(((t<<2^B(e,0))<<2^B(e,1))<<2^B(e,2))<<2^B(e,3):0}function Lr(e){return e.trim()}function te(e,t){return(e=t.exec(e))?e[0]:e}function T(e,t,r){return e.replace(t,r)}function Ge(e,t,r){return e.indexOf(t,r)}function B(e,t){return e.charCodeAt(t)|0}function ye(e,t,r){return e.slice(t,r)}function Q(e){return e.length}function Nr(e){return e.length}function Ae(e,t){return t.push(e),e}function No(e,t){return e.map(t).join("")}function nr(e,t){return e.filter(function(r){return!te(r,t)})}var st=1,ve=1,zr=0,G=0,M=0,Ce="";function ut(e,t,r,n,o,a,i,c){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:st,column:ve,length:i,return:"",siblings:c}}function se(e,t){return Rt(ut("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function he(e){for(;e.root;)e=se(e.root,{children:[e]});Ae(e,e.siblings)}function zo(){return M}function Do(){return M=G>0?B(Ce,--G):0,ve--,M===10&&(ve=1,st--),M}function V(){return M=G<zr?B(Ce,G++):0,ve++,M===10&&(ve=1,st++),M}function de(){return B(Ce,G)}function Je(){return G}function lt(e,t){return ye(Ce,e,t)}function Ct(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jo(e){return st=ve=1,zr=Q(Ce=e),G=0,[]}function Fo(e){return Ce="",e}function vt(e){return Lr(lt(G-1,Pt(e===91?e+2:e===40?e+1:e)))}function Mo(e){for(;(M=de())&&M<33;)V();return Ct(e)>2||Ct(M)>3?"":" "}function Bo(e,t){for(;--t&&V()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return lt(e,Je()+(t<6&&de()==32&&V()==32))}function Pt(e){for(;V();)switch(M){case e:return G;case 34:case 39:e!==34&&e!==39&&Pt(M);break;case 40:e===41&&Pt(e);break;case 92:V();break}return G}function Ho(e,t){for(;V()&&e+M!==57;)if(e+M===84&&de()===47)break;return"/*"+lt(t,G-1)+"*"+Mt(e===47?e:V())}function Uo(e){for(;!Ct(de());)V();return lt(e,G)}function Wo(e){return Fo(Ve("",null,null,null,[""],e=jo(e),0,[0],e))}function Ve(e,t,r,n,o,a,i,c,u){for(var l=0,m=0,g=i,p=0,v=0,h=0,x=1,w=1,d=1,b=0,S="",_=o,E=a,A=n,C=S;w;)switch(h=b,b=V()){case 40:if(h!=108&&B(C,g-1)==58){Ge(C+=T(vt(b),"&","&\f"),"&\f",Or(l?c[l-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:C+=vt(b);break;case 9:case 10:case 13:case 32:C+=Mo(h);break;case 92:C+=Bo(Je()-1,7);continue;case 47:switch(de()){case 42:case 47:Ae(Yo(Ho(V(),Je()),t,r,u),u);break;default:C+="/"}break;case 123*x:c[l++]=Q(C)*d;case 125*x:case 59:case 0:switch(b){case 0:case 125:w=0;case 59+m:d==-1&&(C=T(C,/\f/g,"")),v>0&&Q(C)-g&&Ae(v>32?ar(C+";",n,r,g-1,u):ar(T(C," ","")+";",n,r,g-2,u),u);break;case 59:C+=";";default:if(Ae(A=or(C,t,r,l,m,o,c,S,_=[],E=[],g,a),a),b===123)if(m===0)Ve(C,t,A,A,_,a,g,c,E);else switch(p===99&&B(C,3)===110?100:p){case 100:case 108:case 109:case 115:Ve(e,A,A,n&&Ae(or(e,A,A,0,0,o,c,S,o,_=[],g,E),E),o,E,g,c,n?_:E);break;default:Ve(C,A,A,A,[""],E,0,c,E)}}l=m=v=0,x=d=1,S=C="",g=i;break;case 58:g=1+Q(C),v=h;default:if(x<1){if(b==123)--x;else if(b==125&&x++==0&&Do()==125)continue}switch(C+=Mt(b),b*x){case 38:d=m>0?1:(C+="\f",-1);break;case 44:c[l++]=(Q(C)-1)*d,d=1;break;case 64:de()===45&&(C+=vt(V())),p=de(),m=g=Q(S=C+=Uo(Je())),b++;break;case 45:h===45&&Q(C)==2&&(x=0)}}return a}function or(e,t,r,n,o,a,i,c,u,l,m,g){for(var p=o-1,v=o===0?a:[""],h=Nr(v),x=0,w=0,d=0;x<n;++x)for(var b=0,S=ye(e,p+1,p=Or(w=i[x])),_=e;b<h;++b)(_=Lr(w>0?v[b]+" "+S:T(S,/&\f/g,v[b])))&&(u[d++]=_);return ut(e,t,r,o===0?it:c,u,l,m,g)}function Yo(e,t,r,n){return ut(e,t,r,Tr,Mt(zo()),ye(e,2,-2),0,n)}function ar(e,t,r,n,o){return ut(e,t,r,Ft,ye(e,0,n),ye(e,n+1,-1),n,o)}function Dr(e,t,r){switch(Lo(e,t)){case 5103:return L+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 4789:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+Oe+e+D+e+e;case 5936:switch(B(e,t+11)){case 114:return L+e+D+T(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+D+T(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+D+T(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return L+e+D+e+e;case 6165:return L+e+D+"flex-"+e+e;case 5187:return L+e+T(e,/(\w+).+(:[^]+)/,L+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return L+e+D+"flex-item-"+T(e,/flex-|-self/g,"")+(te(e,/flex-|baseline/)?"":D+"grid-row-"+T(e,/flex-|-self/g,""))+e;case 4675:return L+e+D+"flex-line-pack"+T(e,/align-content|flex-|-self/g,"")+e;case 5548:return L+e+D+T(e,"shrink","negative")+e;case 5292:return L+e+D+T(e,"basis","preferred-size")+e;case 6060:return L+"box-"+T(e,"-grow","")+L+e+D+T(e,"grow","positive")+e;case 4554:return L+T(e,/([^-])(transform)/g,"$1"+L+"$2")+e;case 6187:return T(T(T(e,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),e,"")+e;case 5495:case 3959:return T(e,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return T(T(e,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4200:if(!te(e,/flex-|baseline/))return D+"grid-column-align"+ye(e,t)+e;break;case 2592:case 3360:return D+T(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,te(n.props,/grid-\w+-end/)})?~Ge(e+(r=r[t].value),"span",0)?e:D+T(e,"-start","")+e+D+"grid-row-span:"+(~Ge(r,"span",0)?te(r,/\d+/):+te(r,/\d+/)-+te(e,/\d+/))+";":D+T(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return te(n.props,/grid-\w+-start/)})?e:D+T(T(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return T(e,/(.+)-inline(.+)/,L+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Q(e)-1-t>6)switch(B(e,t+1)){case 109:if(B(e,t+4)!==45)break;case 102:return T(e,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+Oe+(B(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ge(e,"stretch",0)?Dr(T(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return T(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,a,i,c,u,l){return D+o+":"+a+l+(i?D+o+"-span:"+(c?u:+u-+a)+l:"")+e});case 4949:if(B(e,t+6)===121)return T(e,":",":"+L)+e;break;case 6444:switch(B(e,B(e,14)===45?18:11)){case 120:return T(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+L+(B(e,14)===45?"inline-":"")+"box$3$1"+L+"$2$3$1"+D+"$2box$3")+e;case 100:return T(e,":",":"+D)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(e,"scroll-","scroll-snap-")+e}return e}function Qe(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function qo(e,t,r,n){switch(e.type){case Oo:if(e.children.length)break;case Ao:case Ft:return e.return=e.return||e.value;case Tr:return"";case Ar:return e.return=e.value+"{"+Qe(e.children,n)+"}";case it:if(!Q(e.value=e.props.join(",")))return""}return Q(r=Qe(e.children,n))?e.return=e.value+"{"+r+"}":""}function Go(e){var t=Nr(e);return function(r,n,o,a){for(var i="",c=0;c<t;c++)i+=e[c](r,n,o,a)||"";return i}}function Jo(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vo(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Ft:e.return=Dr(e.value,e.length,r);return;case Ar:return Qe([se(e,{value:T(e.value,"@","@"+L)})],n);case it:if(e.length)return No(r=e.props,function(o){switch(te(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":he(se(e,{props:[T(o,/:(read-\w+)/,":"+Oe+"$1")]})),he(se(e,{props:[o]})),Rt(e,{props:nr(r,n)});break;case"::placeholder":he(se(e,{props:[T(o,/:(plac\w+)/,":"+L+"input-$1")]})),he(se(e,{props:[T(o,/:(plac\w+)/,":"+Oe+"$1")]})),he(se(e,{props:[T(o,/:(plac\w+)/,D+"input-$1")]})),he(se(e,{props:[o]})),Rt(e,{props:nr(r,n)});break}return""})}}var Ko={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Y={},xe=typeof process<"u"&&Y!==void 0&&(Y.REACT_APP_SC_ATTR||Y.SC_ATTR)||"data-styled",jr="active",Fr="data-styled-version",ct="6.1.19",Bt=`/*!sc*/
`,et=typeof window<"u"&&typeof document<"u",Xo=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Y!==void 0&&Y.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Y.REACT_APP_SC_DISABLE_SPEEDY!==""?Y.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Y.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Y!==void 0&&Y.SC_DISABLE_SPEEDY!==void 0&&Y.SC_DISABLE_SPEEDY!==""&&Y.SC_DISABLE_SPEEDY!=="false"&&Y.SC_DISABLE_SPEEDY),Zo={},ft=Object.freeze([]),we=Object.freeze({});function Mr(e,t,r){return r===void 0&&(r=we),e.theme!==r.theme&&e.theme||t||r.theme}var Br=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ea=/(^-|-$)/g;function ir(e){return e.replace(Qo,"-").replace(ea,"")}var ta=/(a)(d)/gi,Ue=52,sr=function(e){return String.fromCharCode(e+(e>25?39:97))};function kt(e){var t,r="";for(t=Math.abs(e);t>Ue;t=t/Ue|0)r=sr(t%Ue)+r;return(sr(t%Ue)+r).replace(ta,"$1-$2")}var xt,Hr=5381,me=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ur=function(e){return me(Hr,e)};function Ht(e){return kt(Ur(e)>>>0)}function ra(e){return e.displayName||e.name||"Component"}function wt(e){return typeof e=="string"&&!0}var Wr=typeof Symbol=="function"&&Symbol.for,Yr=Wr?Symbol.for("react.memo"):60115,na=Wr?Symbol.for("react.forward_ref"):60112,oa={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},aa={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ia=((xt={})[na]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xt[Yr]=qr,xt);function ur(e){return("type"in(t=e)&&t.type.$$typeof)===Yr?qr:"$$typeof"in e?ia[e.$$typeof]:oa;var t}var sa=Object.defineProperty,ua=Object.getOwnPropertyNames,lr=Object.getOwnPropertySymbols,la=Object.getOwnPropertyDescriptor,ca=Object.getPrototypeOf,cr=Object.prototype;function Gr(e,t,r){if(typeof t!="string"){if(cr){var n=ca(t);n&&n!==cr&&Gr(e,n,r)}var o=ua(t);lr&&(o=o.concat(lr(t)));for(var a=ur(e),i=ur(t),c=0;c<o.length;++c){var u=o[c];if(!(u in aa||r&&r[u]||i&&u in i||a&&u in a)){var l=la(t,u);try{sa(e,u,l)}catch{}}}}return e}function be(e){return typeof e=="function"}function Ut(e){return typeof e=="object"&&"styledComponentId"in e}function fe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function tt(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Ne(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _t(e,t,r){if(r===void 0&&(r=!1),!r&&!Ne(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=_t(e[n],t[n]);else if(Ne(t))for(var n in t)e[n]=_t(e[n],t[n]);return e}function Wt(e,t){Object.defineProperty(e,"toString",{value:t})}function Fe(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var fa=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,a=o;t>=a;)if((a<<=1)<0)throw Fe(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=o;i<a;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(t+1),u=(i=0,r.length);i<u;i++)this.tag.insertRule(c,r[i])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var a=n;a<o;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),a=o+n,i=o;i<a;i++)r+="".concat(this.tag.getRule(i)).concat(Bt);return r},e}(),Ke=new Map,rt=new Map,Xe=1,We=function(e){if(Ke.has(e))return Ke.get(e);for(;rt.has(Xe);)Xe++;var t=Xe++;return Ke.set(e,t),rt.set(t,e),t},da=function(e,t){Xe=t+1,Ke.set(e,t),rt.set(t,e)},pa="style[".concat(xe,"][").concat(Fr,'="').concat(ct,'"]'),ha=new RegExp("^".concat(xe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ma=function(e,t,r){for(var n,o=r.split(","),a=0,i=o.length;a<i;a++)(n=o[a])&&e.registerName(t,n)},ga=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Bt),o=[],a=0,i=n.length;a<i;a++){var c=n[a].trim();if(c){var u=c.match(ha);if(u){var l=0|parseInt(u[1],10),m=u[2];l!==0&&(da(m,l),ma(e,m,u[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(c)}}},fr=function(e){for(var t=document.querySelectorAll(pa),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(xe)!==jr&&(ga(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function ya(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Jr=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(c){var u=Array.from(c.querySelectorAll("style[".concat(xe,"]")));return u[u.length-1]}(r),a=o!==void 0?o.nextSibling:null;n.setAttribute(xe,jr),n.setAttribute(Fr,ct);var i=ya();return i&&n.setAttribute("nonce",i),r.insertBefore(n,a),n},va=function(){function e(t){this.element=Jr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,a=n.length;o<a;o++){var i=n[o];if(i.ownerNode===r)return i}throw Fe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),xa=function(){function e(t){this.element=Jr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wa=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),dr=et,ba={isServer:!et,useCSSOMInjection:!Xo},nt=function(){function e(t,r,n){t===void 0&&(t=we),r===void 0&&(r={});var o=this;this.options=U(U({},ba),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&et&&dr&&(dr=!1,fr(this)),Wt(this,function(){return function(a){for(var i=a.getTag(),c=i.length,u="",l=function(g){var p=function(d){return rt.get(d)}(g);if(p===void 0)return"continue";var v=a.names.get(p),h=i.getGroup(g);if(v===void 0||!v.size||h.length===0)return"continue";var x="".concat(xe,".g").concat(g,'[id="').concat(p,'"]'),w="";v!==void 0&&v.forEach(function(d){d.length>0&&(w+="".concat(d,","))}),u+="".concat(h).concat(x,'{content:"').concat(w,'"}').concat(Bt)},m=0;m<c;m++)l(m);return u}(o)})}return e.registerId=function(t){return We(t)},e.prototype.rehydrate=function(){!this.server&&et&&fr(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(U(U({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new wa(o):n?new va(o):new xa(o)}(this.options),new fa(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(We(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(We(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(We(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ea=/&/g,Sa=/^\s*\/\/.*$/gm;function Vr(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Vr(r.children,t)),r})}function Ra(e){var t,r,n,o=we,a=o.options,i=a===void 0?we:a,c=o.plugins,u=c===void 0?ft:c,l=function(p,v,h){return h.startsWith(r)&&h.endsWith(r)&&h.replaceAll(r,"").length>0?".".concat(t):p},m=u.slice();m.push(function(p){p.type===it&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Ea,r).replace(n,l))}),i.prefix&&m.push(Vo),m.push(qo);var g=function(p,v,h,x){v===void 0&&(v=""),h===void 0&&(h=""),x===void 0&&(x="&"),t=x,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var w=p.replace(Sa,""),d=Wo(h||v?"".concat(h," ").concat(v," { ").concat(w," }"):w);i.namespace&&(d=Vr(d,i.namespace));var b=[];return Qe(d,Go(m.concat(Jo(function(S){return b.push(S)})))),b};return g.hash=u.length?u.reduce(function(p,v){return v.name||Fe(15),me(p,v.name)},Hr).toString():"",g}var Ca=new nt,$t=Ra(),Kr=re.createContext({shouldForwardProp:void 0,styleSheet:Ca,stylis:$t});Kr.Consumer;re.createContext(void 0);function It(){return f.useContext(Kr)}var Xr=function(){function e(t,r){var n=this;this.inject=function(o,a){a===void 0&&(a=$t);var i=n.name+a.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,a(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Wt(this,function(){throw Fe(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$t),this.name+t.hash},e}(),Pa=function(e){return e>="A"&&e<="Z"};function pr(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Pa(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Zr=function(e){return e==null||e===!1||e===""},Qr=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!Zr(a)&&(Array.isArray(a)&&a.isCss||be(a)?n.push("".concat(pr(o),":"),a,";"):Ne(a)?n.push.apply(n,ge(ge(["".concat(o," {")],Qr(a),!1),["}"],!1)):n.push("".concat(pr(o),": ").concat((t=o,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Ko||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function ue(e,t,r,n){if(Zr(e))return[];if(Ut(e))return[".".concat(e.styledComponentId)];if(be(e)){if(!be(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return ue(o,t,r,n)}var a;return e instanceof Xr?r?(e.inject(r,n),[e.getName(n)]):[e]:Ne(e)?Qr(e):Array.isArray(e)?Array.prototype.concat.apply(ft,e.map(function(i){return ue(i,t,r,n)})):[e.toString()]}function en(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(be(r)&&!Ut(r))return!1}return!0}var ka=Ur(ct),_a=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&en(t),this.componentId=r,this.baseHash=me(ka,r),this.baseStyle=n,nt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=fe(o,this.staticRulesId);else{var a=tt(ue(this.rules,t,r,n)),i=kt(me(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,i)){var c=n(a,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,c)}o=fe(o,i),this.staticRulesId=i}else{for(var u=me(this.baseHash,n.hash),l="",m=0;m<this.rules.length;m++){var g=this.rules[m];if(typeof g=="string")l+=g;else if(g){var p=tt(ue(g,t,r,n));u=me(u,p+m),l+=p}}if(l){var v=kt(u>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(l,".".concat(v),void 0,this.componentId)),o=fe(o,v)}}return o},e}(),Yt=re.createContext(void 0);Yt.Consumer;var bt={};function $a(e,t,r){var n=Ut(e),o=e,a=!wt(e),i=t.attrs,c=i===void 0?ft:i,u=t.componentId,l=u===void 0?function(_,E){var A=typeof _!="string"?"sc":ir(_);bt[A]=(bt[A]||0)+1;var C="".concat(A,"-").concat(Ht(ct+A+bt[A]));return E?"".concat(E,"-").concat(C):C}(t.displayName,t.parentComponentId):u,m=t.displayName,g=m===void 0?function(_){return wt(_)?"styled.".concat(_):"Styled(".concat(ra(_),")")}(e):m,p=t.displayName&&t.componentId?"".concat(ir(t.displayName),"-").concat(t.componentId):t.componentId||l,v=n&&o.attrs?o.attrs.concat(c).filter(Boolean):c,h=t.shouldForwardProp;if(n&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;h=function(_,E){return x(_,E)&&w(_,E)}}else h=x}var d=new _a(r,p,n?o.componentStyle:void 0);function b(_,E){return function(A,C,H){var F=A.attrs,q=A.componentStyle,ce=A.defaultProps,Pe=A.foldedComponentIds,Me=A.styledComponentId,dt=A.target,ae=re.useContext(Yt),pe=It(),ke=A.shouldForwardProp||pe.shouldForwardProp,_e=Mr(C,ae,ce)||we,J=function(N,$,W){for(var z,ee=U(U({},$),{className:void 0,theme:W}),pt=0;pt<N.length;pt+=1){var Be=be(z=N[pt])?z(ee):z;for(var ie in Be)ee[ie]=ie==="className"?fe(ee[ie],Be[ie]):ie==="style"?U(U({},ee[ie]),Be[ie]):Be[ie]}return $.className&&(ee.className=fe(ee.className,$.className)),ee}(F,C,_e),s=J.as||dt,y={};for(var R in J)J[R]===void 0||R[0]==="$"||R==="as"||R==="theme"&&J.theme===_e||(R==="forwardedAs"?y.as=J.forwardedAs:ke&&!ke(R,s)||(y[R]=J[R]));var P=function(N,$){var W=It(),z=N.generateAndInjectStyles($,W.styleSheet,W.stylis);return z}(q,J),O=fe(Pe,Me);return P&&(O+=" "+P),J.className&&(O+=" "+J.className),y[wt(s)&&!Br.has(s)?"class":"className"]=O,H&&(y.ref=H),f.createElement(s,y)}(S,_,E)}b.displayName=g;var S=re.forwardRef(b);return S.attrs=v,S.componentStyle=d,S.displayName=g,S.shouldForwardProp=h,S.foldedComponentIds=n?fe(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=p,S.target=n?o.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=n?function(E){for(var A=[],C=1;C<arguments.length;C++)A[C-1]=arguments[C];for(var H=0,F=A;H<F.length;H++)_t(E,F[H],!0);return E}({},o.defaultProps,_):_}}),Wt(S,function(){return".".concat(S.styledComponentId)}),a&&Gr(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function hr(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var mr=function(e){return Object.assign(e,{isCss:!0})};function qt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(be(e)||Ne(e))return mr(ue(hr(ft,ge([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?ue(n):mr(ue(hr(n,t)))}function Tt(e,t,r){if(r===void 0&&(r=we),!t)throw Fe(1,t);var n=function(o){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,r,qt.apply(void 0,ge([o],a,!1)))};return n.attrs=function(o){return Tt(e,t,U(U({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Tt(e,t,U(U({},r),o))},n}var tn=function(e){return Tt($a,e)},k=tn;Br.forEach(function(e){k[e]=tn(e)});var Ia=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=en(t),nt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var a=o(tt(ue(this.rules,r,n,o)),""),i=this.componentId+t;n.insertRules(i,i,a)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&nt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Ta(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=qt.apply(void 0,ge([e],t,!1)),o="sc-global-".concat(Ht(JSON.stringify(n))),a=new Ia(n,o),i=function(u){var l=It(),m=re.useContext(Yt),g=re.useRef(l.styleSheet.allocateGSInstance(o)).current;return l.styleSheet.server&&c(g,u,l.styleSheet,m,l.stylis),re.useLayoutEffect(function(){if(!l.styleSheet.server)return c(g,u,l.styleSheet,m,l.stylis),function(){return a.removeStyles(g,l.styleSheet)}},[g,u,l.styleSheet,m,l.stylis]),null};function c(u,l,m,g,p){if(a.isStatic)a.renderStyles(u,Zo,m,p);else{var v=U(U({},l),{theme:Mr(l,g,i.defaultProps)});a.renderStyles(u,v,m,p)}}return re.memo(i)}function Aa(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=tt(qt.apply(void 0,ge([e],t,!1))),o=Ht(n);return new Xr(o,n)}const Ba=Ta`
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
    --color-black: #000000;

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
`,Ha=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn .3s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0
    } to {
      opacity: 1;
    }
  }
`,Ua=k.div`
background-color: var(--color-bg-sec);
padding: 1rem;
border-radius: 8px;
max-width: 75rem;
width: 100%;
animation: scaleUp .3s forwards;
max-height: 80%;
overflow-y: auto;

@keyframes scaleUp {
    from {
      transform: scale(0.8);
    } to {
      transform: scale(1);
    }
}
`,Wa=k.img`
  width: 40rem;
  height: 40rem;
`,Ya=k(je)`
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
`,qa=k.div`
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
`,Ga=k.h1`
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,Ja=k(je)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Va=k.div`
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
`,Ka=k.img`
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
`,Xa=k.button`
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
`,Za=k.p`
  font-size: var(--font-destq-sz);
  font-weight: 600;
  font-family: var(--font-title);
`,Qa=k.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,ei=k.form`
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
`,ti=k.input`
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
`;k.input`
  width: 3rem;
  padding: 1rem;
  border: 1px solid var(--color-txt);
  font-family: var(--font-txt);
  color: var(--color-txt);
  border-radius: 8px;
  font-size: var(--font-txt-sz);
  outline: none;
  background-color: var(--color-bg-section);
`;const ri=k.select`
  width: 42rem;
  padding: 1rem;
  border: 1px solid var(--color-txt);
  font-family: var(--font-txt);
  color: var(--color-txt);
  border-radius: 8px;
  font-size: var(--font-txt-sz);
  outline: none;
  background-color: var(--color-bg-section);

  @media (max-width: 1024px) {
    width: 27rem;
  }

  @media (max-width: 768px) {
    width: 22rem;
  }

  @media (max-width: 480px) {
    width: 17rem;
  }
`,ni=k(je)`
  text-decoration: underline;
  color: var(--color-txt);
  font-size: var(--font-txt-sz);
  transition: var(--trans-time);

  &:hover {
    color: var(--color-hover);
  }
`,oi=k.div`
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
`,ai=k.p`
  font-size: var(--font-destq-sz);
`,ii=k.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-bg-sec);
  padding: 2rem;
`,si=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-bg-sec);
  padding: 2rem;
`,ui=k.p`
  font-size: var(--font-destq-sz);
`;k.button`
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
`;const li=k.div`
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
`,ci=k.table`
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
`,fi=k.thead`
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
`,di=k.th`
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
`,pi=k.td`
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
`,hi=k.div`
  width: 100%;
  min-height: 75vh;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,mi=k.div`
  background-color: var(--color-bg-section);
  border: 0.0625rem solid var(--color-btn);
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.05);
  padding: 1rem;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 480px) {
    width: 90%;
  }
`,gi=k.img`
  width: 100%;
  height: 12.5rem;
  border-radius: 0.5rem;
  object-fit: cover;
  border: 0.0625rem solid var(--color-btn);
`,yi=k.h3`
  font-size: 1.1rem;
  color: var(--color-text);
  margin: 0;
`,vi=k.p`
  font-size: 0.95rem;
  margin: 0;
`,xi=k.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: ${e=>e.$emOferta?"red":"var(--color-text)"};
`,wi=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`,bi=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ei=k.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${e=>e.$cor};
  border: 1px solid var(--color-black);
`,Si=k.ul`
  padding-left: 1.25rem;
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
`,Ri=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`,Ci=k.button`
  width: 13rem;
  padding: 1rem;
  border: 1px solid var(--color-bg-sec);
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-bg-section);
  background-color: var(--color-btn);
  transition: var(--trans-time);
  font-size: var(--font-text-sz);

  &:hover:not(:disabled) {
      background-color: var(--color-hover);
  }

  &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
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
`,Oa=Aa`
  to {
    transform: rotate(360deg);
  }
`,Pi=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`,ki=k.div`
  width: 48px;
  height: 48px;
  border: 5px solid #ccc;
  border-top-color: var(--color-btn);
  border-radius: 50%;
  animation: ${Oa} 1s linear infinite;
`;export{Si as $,fi as A,Ma as B,Va as C,ii as D,di as E,Za as F,Ba as G,pi as H,Ka as I,re as J,ri as K,Ya as L,Ci as M,ja as N,hi as O,mi as P,xi as Q,Fa as R,oi as S,Ga as T,gi as U,yi as V,Ri as W,vi as X,wi as Y,bi as Z,Ei as _,Xn as a,Ha as a0,Ua as a1,Wa as a2,f as b,La as c,k as d,rn as e,Ja as f,Na as g,Qa as h,Xa as i,za as j,qa as k,Da as l,ei as m,ti as n,ni as o,je as p,ai as q,sn as r,Pi as s,ki as t,Sr as u,ui as v,le as w,si as x,li as y,ci as z};
