import{x as G,b as J,h as y,s as R,a as P,y as Q,z as K,H as U,r as k,c as H,f as N,I as w,d as V,e as Y,p as X,A as D,B as q,C as W,D as Z,F as $,G as j,J as ee,K as re,L as ae,m as ne,M as L,N as se,O as fe,P as ie,Q as te,R as S,S as le}from"./runtime.Bxle5EtZ.js";function ce(a,e){return e}function ue(a,e,r,f){for(var l=[],u=e.length,v=0;v<u;v++)W(e[v].e,l,!0);var h=u>0&&l.length===0&&r!==null;if(h){var c=r.parentNode;Z(c),c.append(r),f.clear(),A(a,e[0].prev,e[u-1].next)}$(l,()=>{for(var _=0;_<u;_++){var n=e[_];h||(f.delete(n.k),A(a,n.prev,n.next)),j(n.e,!h)}})}function he(a,e,r,f,l,u=null){var v=a,h={flags:e,items:new Map,first:null};{var c=a;v=y?R(ee(c)):c.appendChild(G())}y&&P();var _=null,n=!1;J(()=>{var o=r(),i=Q(o)?o:o==null?[]:K(o),s=i.length;if(n&&s===0)return;n=s===0;let p=!1;if(y){var I=v.data===U;I!==(s===0)&&(v=k(),R(v),H(!1),p=!0)}if(y){for(var E=null,t,d=0;d<s;d++){if(N.nodeType===8&&N.data===re){v=N,p=!0,H(!1);break}var T=i[d],x=f(T,d);t=m(N,h,E,null,T,x,d,l,e),h.items.set(x,t),E=t}s>0&&R(k())}if(!y){var g=ae;ve(i,h,v,l,e,(g.f&w)!==0,f)}u!==null&&(s===0?_?V(_):_=Y(()=>u(v)):_!==null&&X(_,()=>{_=null})),p&&H(!0),r()}),y&&(v=N)}function ve(a,e,r,f,l,u,v){var h=a.length,c=e.items,_=e.first,n=_,o,i=null,s=[],p=[],I,E,t,d;for(d=0;d<h;d+=1){if(I=a[d],E=v(I,d),t=c.get(E),t===void 0){var T=n?n.e.nodes_start:r;i=m(T,e,i,i===null?e.first:i.next,I,E,d,f,l),c.set(E,i),s=[],p=[],n=i.next;continue}if(oe(t,I,d),t.e.f&w&&V(t.e),t!==n){if(o!==void 0&&o.has(t)){if(s.length<p.length){var x=p[0],g;i=x.prev;var b=s[0],C=s[s.length-1];for(g=0;g<s.length;g+=1)O(s[g],x,r);for(g=0;g<p.length;g+=1)o.delete(p[g]);A(e,b.prev,C.next),A(e,i,b),A(e,C,x),n=x,i=C,d-=1,s=[],p=[]}else o.delete(t),O(t,n,r),A(e,t.prev,t.next),A(e,t,i===null?e.first:i.next),A(e,i,t),i=t;continue}for(s=[],p=[];n!==null&&n.k!==E;)(u||!(n.e.f&w))&&(o??(o=new Set)).add(n),p.push(n),n=n.next;if(n===null)continue;t=n}s.push(t),i=t,n=t.next}if(n!==null||o!==void 0){for(var M=o===void 0?[]:K(o);n!==null;)(u||!(n.e.f&w))&&M.push(n),n=n.next;var z=M.length;if(z>0){var F=h===0?r:null;ue(e,M,F,c)}}D.first=e.first&&e.first.e,D.last=i&&i.e}function oe(a,e,r,f){q(a.v,e),a.i=r}function m(a,e,r,f,l,u,v,h,c){var _=(c&fe)!==0,n=(c&ie)===0,o=_?n?ne(l):L(l):l,i=c&se?L(v):v,s={i,v:o,k:u,a:null,e:null,prev:r,next:f};try{return s.e=Y(()=>h(a,o,i),y),s.e.prev=r&&r.e,s.e.next=f&&f.e,r===null?e.first=s:(r.next=s,r.e.next=s.e),f!==null&&(f.prev=s,f.e.prev=s.e),s}finally{}}function O(a,e,r){for(var f=a.next?a.next.e.nodes_start:r,l=e?e.e.nodes_start:r,u=a.e.nodes_start;u!==f;){var v=te(u);l.before(u),u=v}}function A(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function pe(a,e,r,f){var l=a.__attributes??(a.__attributes={});y&&(l[e]=a.getAttribute(e),a.nodeName==="LINK")||l[e]!==(l[e]=r)&&(r==null?a.removeAttribute(e):typeof r!="string"&&_e(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var B=new Map;function _e(a){var e=B.get(a.nodeName);if(e)return e;B.set(a.nodeName,e=[]);for(var r,f=S(a),l=Element.prototype;l!==f;){r=le(f);for(var u in r)r[u].set&&e.push(u);f=S(f)}return e}export{he as e,ce as i,pe as s};