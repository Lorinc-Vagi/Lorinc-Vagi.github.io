const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BJds5sR3.js","../chunks/disclose-version.cWSXY2Zm.js","../chunks/runtime.Bxle5EtZ.js","../chunks/legacy.Dv4cU-xH.js","../assets/0.CBLekmjr.css","../nodes/1.D19IZP3t.js","../chunks/render.9Yy4H-0D.js","../chunks/store.C9nsdeUA.js","../chunks/entry.CddMx755.js","../nodes/2.CmwPpOaw.js","../chunks/attributes.BZRjC_kT.js","../nodes/3.D4AWBLRD.js","../chunks/if.CL-5qP-1.js"])))=>i.map(i=>d[i]);
var $=t=>{throw TypeError(t)};var p=(t,e,a)=>e.has(t)||$("Cannot "+a);var P=(t,e,a)=>(p(t,e,"read from private field"),a?a.call(t):e.get(t)),Y=(t,e,a)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),Z=(t,e,a,_)=>(p(t,e,"write to private field"),_?_.call(t,a):e.set(t,a),a);import{ab as N,ac as le,ad as de,M as O,ae as _e,j as w,af as E,ag as F,i as y,A as X,ah as ve,R as me,y as he,h as ee,a as ge,b as ye,E as be,e as Pe,f as Ee,p as we,ai as Re,aj as Se,u as V,ak as Ie,al as Oe,am as Ae,an as xe,ao as Te,ap as Le,aq as ke,a2 as te,ar as De,as as ie,at as Ce,au as Ne,av as fe,Z as q,aw as qe,ax as Be,m as ue,ay as je,a0 as Ue,V as z,U as ce,_ as Fe,T as Ve,w as j,k as Me,$ as Ye,az as Ze,aA as G,l as ze,q as Ge,o as Ke}from"../chunks/runtime.Bxle5EtZ.js";import{h as He,m as We,u as Je,s as Qe}from"../chunks/render.9Yy4H-0D.js";import{a as k,t as oe,c as K,d as Xe}from"../chunks/disclose-version.cWSXY2Zm.js";import{i as H}from"../chunks/if.CL-5qP-1.js";import{c as $e}from"../chunks/store.C9nsdeUA.js";function T(t,e=null,a){if(typeof t!="object"||t===null||N in t)return t;const _=me(t);if(_!==le&&_!==de)return t;var n=new Map,d=he(t),c=O(0);d&&n.set("length",O(t.length));var i;return new Proxy(t,{defineProperty(o,r,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&_e();var l=n.get(r);return l===void 0?(l=O(s.value),n.set(r,l)):w(l,T(s.value,i)),!0},deleteProperty(o,r){var s=n.get(r);if(s===void 0)r in o&&n.set(r,O(E));else{if(d&&typeof r=="string"){var l=n.get("length"),f=Number(r);Number.isInteger(f)&&f<l.v&&w(l,f)}w(s,E),re(c)}return!0},get(o,r,s){var v;if(r===N)return t;var l=n.get(r),f=r in o;if(l===void 0&&(!f||(v=F(o,r))!=null&&v.writable)&&(l=O(T(f?o[r]:E,i)),n.set(r,l)),l!==void 0){var u=y(l);return u===E?void 0:u}return Reflect.get(o,r,s)},getOwnPropertyDescriptor(o,r){var s=Reflect.getOwnPropertyDescriptor(o,r);if(s&&"value"in s){var l=n.get(r);l&&(s.value=y(l))}else if(s===void 0){var f=n.get(r),u=f==null?void 0:f.v;if(f!==void 0&&u!==E)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return s},has(o,r){var u;if(r===N)return!0;var s=n.get(r),l=s!==void 0&&s.v!==E||Reflect.has(o,r);if(s!==void 0||X!==null&&(!l||(u=F(o,r))!=null&&u.writable)){s===void 0&&(s=O(l?T(o[r],i):E),n.set(r,s));var f=y(s);if(f===E)return!1}return l},set(o,r,s,l){var A;var f=n.get(r),u=r in o;if(d&&r==="length")for(var v=s;v<f.v;v+=1){var h=n.get(v+"");h!==void 0?w(h,E):v in o&&(h=O(E),n.set(v+"",h))}f===void 0?(!u||(A=F(o,r))!=null&&A.writable)&&(f=O(void 0),w(f,T(s,i)),n.set(r,f)):(u=f.v!==E,w(f,T(s,i)));var g=Reflect.getOwnPropertyDescriptor(o,r);if(g!=null&&g.set&&g.set.call(l,s),!u){if(d&&typeof r=="string"){var S=n.get("length"),b=Number(r);Number.isInteger(b)&&b>=S.v&&w(S,b+1)}re(c)}return!0},ownKeys(o){y(c);var r=Reflect.ownKeys(o).filter(f=>{var u=n.get(f);return u===void 0||u.v!==E});for(var[s,l]of n)l.v!==E&&!(s in o)&&r.push(s);return r},setPrototypeOf(){ve()}})}function re(t,e=1){w(t,t.v+e)}function pe(t){throw new Error("lifecycle_outside_component")}function W(t,e,a){ee&&ge();var _=t,n,d;ye(()=>{n!==(n=e())&&(d&&(we(d),d=null),n&&(d=Pe(()=>a(_,n))))},be),ee&&(_=Ee)}function ne(t,e){return t===e||(t==null?void 0:t[N])===e}function J(t={},e,a,_){return Re(()=>{var n,d;return Se(()=>{n=d,d=[],V(()=>{t!==a(...d)&&(e(t,...d),n&&ne(a(...n),t)&&e(null,...n))})}),()=>{Ie(()=>{d&&ne(a(...d),t)&&e(null,...d)})}}),t}function ae(t){for(var e=X,a=X;e!==null&&!(e.f&(Le|ke));)e=e.parent;try{return te(e),t()}finally{te(a)}}function Q(t,e,a,_){var B;var n=(a&De)!==0,d=!ie||(a&Ce)!==0,c=(a&Ne)!==0,i=(a&Be)!==0,o=!1,r;c?[r,o]=$e(()=>t[e]):r=t[e];var s=N in t||fe in t,l=((B=F(t,e))==null?void 0:B.set)??(s&&c&&e in t?m=>t[e]=m:void 0),f=_,u=!0,v=!1,h=()=>(v=!0,u&&(u=!1,i?f=V(_):f=_),f);r===void 0&&_!==void 0&&(l&&d&&Oe(),r=h(),l&&l(r));var g;if(d)g=()=>{var m=t[e];return m===void 0?h():(u=!0,v=!1,m)};else{var S=ae(()=>(n?q:qe)(()=>t[e]));S.f|=Ae,g=()=>{var m=y(S);return m!==void 0&&(f=void 0),m===void 0?f:m}}if(!(a&xe))return g;if(l){var b=t.$$legacy;return function(m,L){return arguments.length>0?((!d||!L||b||o)&&l(L?g():m),m):g()}}var A=!1,D=!1,C=ue(r),x=ae(()=>q(()=>{var m=g(),L=y(C);return A?(A=!1,D=!0,L):(D=!1,C.v=m)}));return n||(x.equals=Te),function(m,L){if(arguments.length>0){const M=L?y(x):d&&c?T(m):m;return x.equals(M)||(A=!0,w(C,M),v&&f!==void 0&&(f=M),V(()=>y(x))),m}return y(x)}}function et(t){return class extends tt{constructor(e){super({component:t,...e})}}}var I,R;class tt{constructor(e){Y(this,I);Y(this,R);var d;var a=new Map,_=(c,i)=>{var o=ue(i);return a.set(c,o),o};const n=new Proxy({...e.props||{},$$events:{}},{get(c,i){return y(a.get(i)??_(i,Reflect.get(c,i)))},has(c,i){return i===fe?!0:(y(a.get(i)??_(i,Reflect.get(c,i))),Reflect.has(c,i))},set(c,i,o){return w(a.get(i)??_(i,o),o),Reflect.set(c,i,o)}});Z(this,R,(e.hydrate?He:We)(e.component,{target:e.target,anchor:e.anchor,props:n,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((d=e==null?void 0:e.props)!=null&&d.$$host)||e.sync===!1)&&je(),Z(this,I,n.$$events);for(const c of Object.keys(P(this,R)))c==="$set"||c==="$destroy"||c==="$on"||Ue(this,c,{get(){return P(this,R)[c]},set(i){P(this,R)[c]=i},enumerable:!0});P(this,R).$set=c=>{Object.assign(n,c)},P(this,R).$destroy=()=>{Je(P(this,R))}}$set(e){P(this,R).$set(e)}$on(e,a){P(this,I)[e]=P(this,I)[e]||[];const _=(...n)=>a.call(this,...n);return P(this,I)[e].push(_),()=>{P(this,I)[e]=P(this,I)[e].filter(n=>n!==_)}}$destroy(){P(this,R).$destroy()}}I=new WeakMap,R=new WeakMap;function rt(t){z===null&&pe(),ie&&z.l!==null?nt(z).m.push(t):ce(()=>{const e=V(t);if(typeof e=="function")return e})}function nt(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const at="modulepreload",st=function(t,e){return new URL(t,e).href},se={},U=function(e,a,_){let n=Promise.resolve();if(a&&a.length>0){const c=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(a.map(r=>{if(r=st(r,_),r in se)return;se[r]=!0;const s=r.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!_)for(let v=c.length-1;v>=0;v--){const h=c[v];if(h.href===r&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":at,s||(u.as="script"),u.crossOrigin="",u.href=r,o&&u.setAttribute("nonce",o),document.head.appendChild(u),s)return new Promise((v,h)=>{u.addEventListener("load",v),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}function d(c){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=c,window.dispatchEvent(i),!i.defaultPrevented)throw c}return n.then(c=>{for(const i of c||[])i.status==="rejected"&&d(i.reason);return e().catch(d)})},mt={};var it=oe('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ft=oe("<!> <!>",1);function ut(t,e){Fe(e,!0);let a=Q(e,"components",23,()=>[]),_=Q(e,"data_0",3,null),n=Q(e,"data_1",3,null);Ve(()=>e.stores.page.set(e.page)),ce(()=>{e.stores,e.page,e.constructors,a(),e.form,_(),n(),e.stores.page.notify()});let d=G(!1),c=G(!1),i=G(null);rt(()=>{const f=e.stores.page.subscribe(()=>{y(d)&&(w(c,!0),Ze().then(()=>{w(i,T(document.title||"untitled page"))}))});return w(d,!0),f});const o=q(()=>e.constructors[1]);var r=ft(),s=j(r);H(s,()=>e.constructors[1],f=>{var u=K();const v=q(()=>e.constructors[0]);var h=j(u);W(h,()=>y(v),(g,S)=>{J(S(g,{get data(){return _()},get form(){return e.form},children:(b,A)=>{var D=K(),C=j(D);W(C,()=>y(o),(x,B)=>{J(B(x,{get data(){return n()},get form(){return e.form}}),m=>a()[1]=m,()=>{var m;return(m=a())==null?void 0:m[1]})}),k(b,D)},$$slots:{default:!0}}),b=>a()[0]=b,()=>{var b;return(b=a())==null?void 0:b[0]})}),k(f,u)},f=>{var u=K();const v=q(()=>e.constructors[0]);var h=j(u);W(h,()=>y(v),(g,S)=>{J(S(g,{get data(){return _()},get form(){return e.form}}),b=>a()[0]=b,()=>{var b;return(b=a())==null?void 0:b[0]})}),k(f,u)});var l=Me(s,2);H(l,()=>y(d),f=>{var u=it(),v=ze(u);H(v,()=>y(c),h=>{var g=Xe();Ge(()=>Qe(g,y(i))),k(h,g)}),Ke(u),k(f,u)}),k(t,r),Ye()}const ht=et(ut),gt=[()=>U(()=>import("../nodes/0.BJds5sR3.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),()=>U(()=>import("../nodes/1.D19IZP3t.js"),__vite__mapDeps([5,1,2,3,6,7,8]),import.meta.url),()=>U(()=>import("../nodes/2.CmwPpOaw.js"),__vite__mapDeps([9,1,2,3,6,10]),import.meta.url),()=>U(()=>import("../nodes/3.D4AWBLRD.js"),__vite__mapDeps([11,1,2,3,6,12,10]),import.meta.url)],yt=[],bt={"/":[2],"/munkaim":[3]},Pt={handleError:({error:t})=>{console.error(t)},reroute:()=>{}};export{bt as dictionary,Pt as hooks,mt as matchers,gt as nodes,ht as root,yt as server_loads};