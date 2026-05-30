import{n as er,P as ur,s as Ye,d as y,i as A,f as ve,X as Ve,l as qe,R as be,S as xe,v as pt,w as St,x as ht,y as Et,aa as $e,K as kt,e as B,r as me,k as P,M as ct,q as ge,J as _r,D as tr,ab as rr,ac as fr,b as N,c as H,j as I,p as nr,m as Nt,a as ae,H as lt,t as et,u as tt,g as Ue,h as yr,o as dr}from"../chunks/scheduler.DYsEJJnm.js";import{S as Je,i as ze,t as v,a as E,g as Ee,c as Ae,h as or,d as Y,m as J,b as z,e as G}from"../chunks/index.DaDwQE1z.js";import{a7 as mr,aa as pr,ab as Sr,a4 as yt,ac as hr,a8 as Dt,ad as At,ae as bt,af as wt,ag as Ht,ah as Er,ai as Ar,a3 as Rt,aj as Te,ak as gt,a1 as br,al as Rr,am as dt,an as gr,ao as vr,ap as Or,J as ut,aq as Cr,V as It,K as ar,n as Lt,ar as Tr,N as Nr,y as vt,x as kr,U as Mr,W as Dr,A as Ze,as as wr,H as Hr,Q as He,L as Ir,D as Lr,e as Fr,s as Wr,p as Ur,C as Xe,a as Ft,r as Wt,b as Vr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C_ezGKFc.js";import{w as it,d as Br}from"../chunks/entry.BAp6vOa_.js";import{h as Re,p as Pr}from"../chunks/button.D6nixP0u.js";import{H as Xr,D as qr,Q as Ge}from"../chunks/Value.odEfF2Fl.js";import{p as Yr}from"../chunks/stores.Br8zC9p-.js";import{c as Jr}from"../chunks/checkRequiredProps.o_C_V3S5.js";import{G as zr}from"../chunks/Grid.1SUOIOrv.js";import{B as Ot}from"../chunks/BigValue.B_vkCUME.js";import{L as Ct}from"../chunks/LineChart.-ZdynWx_.js";function Tt(o,e,r,t){const n=(o-(isNaN(e)?0:e))%t;let s=Math.abs(n)*2>=t?o+Math.sign(n)*(t-Math.abs(n)):o-n;isNaN(e)?!isNaN(r)&&s>r&&(s=Math.floor(r/t)*t):s<e?s=e:!isNaN(r)&&s>r&&(s=e+Math.floor((r-e)/t)*t);const a=t.toString(),l=a.indexOf("."),c=l>=0?a.length-l:0;if(c>0){const i=Math.pow(10,c);s=Math.round(s*i)/i}return s}const Gr={defaultValue:[],min:0,max:100,step:1,orientation:"horizontal",dir:"ltr",disabled:!1},{name:mt}=Er("slider"),jr=o=>{const e={...Gr,...o},r=mr(pr(e,"value","onValueChange","defaultValue")),{min:t,max:n,step:s,orientation:a,dir:l,disabled:c}=r,i=e.value??it(e.defaultValue),f=Sr(i,e==null?void 0:e.onValueChange),p=yt(it(!1)),S=yt(it(0)),F=yt(it(null)),U=hr(["root"]),_=(d,g)=>{f.update(b=>{if(!b)return[d];if(b[g]===d)return b;const D=[...b],W=D[g]>d?-1:1;function O(){D[g]=D[g+W],D[g+W]=d;const x=k();x&&(x[g+W].focus(),F.set({thumb:x[g+W],index:g+W}))}if(W===-1&&d<D[g-1])return O(),D;if(W===1&&d>D[g+1])return O(),D;const h=t.get(),w=n.get(),q=s.get();return D[g]=Tt(d,h,w,q),D})},k=()=>{const d=gt(U.root);return d?Array.from(d.querySelectorAll('[data-melt-part="thumb"]')).filter(g=>Rt(g)):null},j=Br([t,n],([d,g])=>b=>(b-d)/(g-d)*100),C=yt.derived([a,l],([d,g])=>d==="horizontal"?g==="rtl"?"rl":"lr":g==="rtl"?"tb":"bt"),re=Dt(mt(),{stores:[c,a,l],returned:([d,g,b])=>({dir:b,disabled:At(d),"data-disabled":At(d),"data-orientation":g,style:d?void 0:`touch-action: ${g==="horizontal"?"pan-y":"pan-x"}`,"data-melt-id":U.root})}),te=Dt(mt("range"),{stores:[f,C,j],returned:([d,g,b])=>{const D=d.length>1?b(Math.min(...d)??0):0,W=100-b(Math.max(...d)??0),O={position:"absolute"};switch(g){case"lr":{O.left=`${D}%`,O.right=`${W}%`;break}case"rl":{O.right=`${D}%`,O.left=`${W}%`;break}case"bt":{O.bottom=`${D}%`,O.top=`${W}%`;break}case"tb":{O.top=`${D}%`,O.bottom=`${W}%`;break}}return{style:bt(O)}}}),K=wt(mt("thumb"),{stores:[f,j,t,n,c,a,C],returned:([d,g,b,D,W,O,h])=>Array.from({length:d.length||1},(q,x)=>{S.get()<d.length&&S.update(X=>X+1);const V=d[x],L=`${g(V)}%`,T={position:"absolute"};switch(h){case"lr":{T.left=L,T.translate="-50% 0";break}case"rl":{T.right=L,T.translate="50% 0";break}case"bt":{T.bottom=L,T.translate="0 50%";break}case"tb":{T.top=L,T.translate="0 -50%";break}}return{role:"slider","aria-valuemin":b,"aria-valuemax":D,"aria-valuenow":V,"aria-disabled":At(W),"aria-orientation":O,"data-melt-part":"thumb","data-value":V,style:bt(T),tabindex:W?-1:0}}),action:d=>({destroy:Ar(d,"keydown",b=>{if(c.get())return;const D=b.currentTarget;if(!Rt(D))return;const W=k();if(!(W!=null&&W.length))return;const O=W.indexOf(D);if(S.set(O),![Te.ARROW_LEFT,Te.ARROW_RIGHT,Te.ARROW_UP,Te.ARROW_DOWN,Te.HOME,Te.END].includes(b.key))return;b.preventDefault();const h=t.get(),w=n.get(),q=s.get(),x=f.get(),ie=a.get(),V=C.get(),L=x[O];switch(b.key){case Te.HOME:{_(h,O);break}case Te.END:{_(w,O);break}case Te.ARROW_LEFT:{if(ie!=="horizontal")break;b.metaKey?_(V==="rl"?w:h,O):V==="rl"&&L<w?_(L+q,O):V==="lr"&&L>h&&_(L-q,O);break}case Te.ARROW_RIGHT:{if(ie!=="horizontal")break;b.metaKey?_(V==="rl"?h:w,O):V==="rl"&&L>h?_(L-q,O):V==="lr"&&L<w&&_(L+q,O);break}case Te.ARROW_UP:{b.metaKey?_(V==="tb"?h:w,O):V==="tb"&&L>h?_(L-q,O):V!=="tb"&&L<w&&_(L+q,O);break}case Te.ARROW_DOWN:{b.metaKey?_(V==="tb"?w:h,O):V==="tb"&&L<w?_(L+q,O):V!=="tb"&&L>h&&_(L-q,O);break}}})})}),M=wt(mt("tick"),{stores:[f,t,n,s,C],returned:([d,g,b,D,W])=>{const O=b-g;let h=Math.ceil(O/D);return O%D==0&&h++,Array.from({length:h},(w,q)=>{const x=`${q*(D/(b-g))*100}%`,ie=q===0,V=q===h-1,L=ie?0:V?-100:-50,T={position:"absolute"};switch(W){case"lr":{T.left=x,T.translate=`${L}% 0`;break}case"rl":{T.right=x,T.translate=`${-L}% 0`;break}case"bt":{T.bottom=x,T.translate=`0 ${-L}%`;break}case"tb":{T.top=x,T.translate=`0 ${L}%`;break}}const X=g+q*D;return{"data-bounded":(d.length===1?X<=d[0]:d[0]<=X&&X<=d[d.length-1])?!0:void 0,"data-value":X,style:bt(T)}})}});return Ht([re,t,n,c,a,C,s],([d,g,b,D,W,O,h])=>{if(!br||D)return;const w=(T,X,$,oe)=>{const Z=(T-$)/(oe-$)*(b-g)+g;if(Z<g)_(g,X);else if(Z>b)_(b,X);else{const Q=h,m=g,ne=Math.floor((Z-m)/Q),Oe=m+ne*Q+Q/2,pe=m+(ne+1)*Q+Q/2,Ne=Z>=Oe&&Z<pe?(ne+1)*Q+m:ne*Q+m;Ne<=b&&_(Ne,X)}},q=T=>{const X=k();if(!X)return;X.forEach(Z=>Z.blur());const $=X.map(Z=>{if(W==="horizontal"){const{left:Q,right:m}=Z.getBoundingClientRect();return Math.abs(T.clientX-(Q+m)/2)}else{const{top:Q,bottom:m}=Z.getBoundingClientRect();return Math.abs(T.clientY-(Q+m)/2)}}),oe=X[$.indexOf(Math.min(...$))],he=X.indexOf(oe);return{thumb:oe,index:he}},x=T=>{if(!p.get())return;T.preventDefault(),T.stopPropagation();const X=gt(d["data-melt-id"]),$=F.get();if(!X||!$)return;$.thumb.focus();const{left:oe,right:he,top:Z,bottom:Q}=X.getBoundingClientRect();switch(O){case"lr":{w(T.clientX,$.index,oe,he);break}case"rl":{w(T.clientX,$.index,he,oe);break}case"bt":{w(T.clientY,$.index,Q,Z);break}case"tb":{w(T.clientY,$.index,Z,Q);break}}},ie=T=>{if(T.button!==0)return;const X=gt(d["data-melt-id"]),$=q(T);if(!$||!X)return;const oe=T.target;!Rt(oe)||!X.contains(oe)||(T.preventDefault(),F.set($),$.thumb.focus(),p.set(!0),x(T))},V=()=>{p.set(!1)},L=Rr(dt(document,"pointerdown",ie),dt(document,"pointerup",V),dt(document,"pointerleave",V),dt(document,"pointermove",x));return()=>{L()}}),Ht([s,t,n,f],function([g,b,D,W]){const O=w=>Tt(w,b,D,g)===w,h=w=>Tt(w,b,D,g);W.some(w=>!O(w))&&f.update(w=>w.map(h))}),{elements:{root:re,thumbs:K,range:te,ticks:M},states:{value:f},options:r}};function sr(){return{NAME:"slider",PARTS:["root","input","range","thumb","tick"]}}function Qr(o){const{NAME:e,PARTS:r}=sr(),t=gr(e,r),n={...jr(vr(o)),getAttrs:t};return er(e,n),{...n,updateOption:Or(n.options)}}function ir(){const{NAME:o}=sr();return ur(o)}const Kr=o=>({builder:o&4,ticks:o&8,thumbs:o&16}),Ut=o=>({builder:o[2],ticks:o[3],thumbs:o[4]}),Zr=o=>({builder:o&4,ticks:o&8,thumbs:o&16}),Vt=o=>({builder:o[2],ticks:o[3],thumbs:o[4]});function xr(o){let e,r,t,n;const s=o[19].default,a=pt(s,o,o[18],Ut);let l=[o[2],o[8]],c={};for(let i=0;i<l.length;i+=1)c=be(c,l[i]);return{c(){e=P("span"),a&&a.c(),this.h()},l(i){e=B(i,"SPAN",{});var f=me(e);a&&a.l(f),f.forEach(y),this.h()},h(){$e(e,c)},m(i,f){A(i,e,f),a&&a.m(e,null),o[20](e),r=!0,t||(n=kt(o[2].action(e)),t=!0)},p(i,f){a&&a.p&&(!r||f&262172)&&St(a,s,i,i[18],r?Et(s,i[18],f,Kr):ht(i[18]),Ut),$e(e,c=ut(l,[f&4&&i[2],f&256&&i[8]]))},i(i){r||(E(a,i),r=!0)},o(i){v(a,i),r=!1},d(i){i&&y(e),a&&a.d(i),o[20](null),t=!1,n()}}}function $r(o){let e;const r=o[19].default,t=pt(r,o,o[18],Vt);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&262172)&&St(t,r,n,n[18],e?Et(r,n[18],s,Zr):ht(n[18]),Vt)},i(n){e||(E(t,n),e=!0)},o(n){v(t,n),e=!1},d(n){t&&t.d(n)}}}function en(o){let e,r,t,n;const s=[$r,xr],a=[];function l(c,i){return c[1]?0:1}return e=l(o),r=a[e]=s[e](o),{c(){r.c(),t=ve()},l(c){r.l(c),t=ve()},m(c,i){a[e].m(c,i),A(c,t,i),n=!0},p(c,[i]){let f=e;e=l(c),e===f?a[e].p(c,i):(Ee(),v(a[f],1,1,()=>{a[f]=null}),Ae(),r=a[e],r?r.p(c,i):(r=a[e]=s[e](c),r.c()),E(r,1),r.m(t.parentNode,t))},i(c){n||(E(r),n=!0)},o(c){v(r),n=!1},d(c){c&&y(t),a[e].d(c)}}}function tn(o,e,r){let t;const n=["disabled","min","max","step","orientation","dir","value","onValueChange","asChild","el"];let s=Ve(e,n),a,l,c,{$$slots:i={},$$scope:f}=e,{disabled:p=void 0}=e,{min:S=void 0}=e,{max:F=void 0}=e,{step:U=void 0}=e,{orientation:_=void 0}=e,{dir:k=void 0}=e,{value:j=void 0}=e,{onValueChange:C=void 0}=e,{asChild:re=!1}=e,{el:te=void 0}=e;const{elements:{root:K,ticks:M,thumbs:d},states:{value:g},updateOption:b,getAttrs:D}=Qr({disabled:p,dir:k,min:S,max:F,step:U,orientation:_,defaultValue:j,onValueChange:({next:h})=>(j!==h&&(C==null||C(h),r(9,j=h)),h)});qe(o,K,h=>r(17,a=h)),qe(o,M,h=>r(3,l=h)),qe(o,d,h=>r(4,c=h));const W=D("root");function O(h){ct[h?"unshift":"push"](()=>{te=h,r(0,te)})}return o.$$set=h=>{e=be(be({},e),xe(h)),r(8,s=Ve(e,n)),"disabled"in h&&r(10,p=h.disabled),"min"in h&&r(11,S=h.min),"max"in h&&r(12,F=h.max),"step"in h&&r(13,U=h.step),"orientation"in h&&r(14,_=h.orientation),"dir"in h&&r(15,k=h.dir),"value"in h&&r(9,j=h.value),"onValueChange"in h&&r(16,C=h.onValueChange),"asChild"in h&&r(1,re=h.asChild),"el"in h&&r(0,te=h.el),"$$scope"in h&&r(18,f=h.$$scope)},o.$$.update=()=>{o.$$.dirty&512&&j!==void 0&&g.set(j),o.$$.dirty&1024&&b("disabled",p),o.$$.dirty&2048&&b("min",S),o.$$.dirty&4096&&b("max",F),o.$$.dirty&8192&&b("step",U),o.$$.dirty&16384&&b("orientation",_),o.$$.dirty&32768&&b("dir",k),o.$$.dirty&131072&&r(2,t=a),o.$$.dirty&4&&Object.assign(t,W)},[te,re,t,l,c,K,M,d,s,j,p,S,F,U,_,k,C,a,f,i,O]}let rn=class extends Je{constructor(e){super(),ze(this,e,tn,en,Ye,{disabled:10,min:11,max:12,step:13,orientation:14,dir:15,value:9,onValueChange:16,asChild:1,el:0})}};const nn=o=>({builder:o&4}),Bt=o=>({builder:o[2]});function on(o){let e,r,t,n=[o[2],o[4]],s={};for(let a=0;a<n.length;a+=1)s=be(s,n[a]);return{c(){e=P("span"),this.h()},l(a){e=B(a,"SPAN",{}),me(e).forEach(y),this.h()},h(){$e(e,s)},m(a,l){A(a,e,l),o[8](e),r||(t=kt(o[2].action(e)),r=!0)},p(a,l){$e(e,s=ut(n,[l&4&&a[2],l&16&&a[4]]))},i:ge,o:ge,d(a){a&&y(e),o[8](null),r=!1,t()}}}function an(o){let e;const r=o[7].default,t=pt(r,o,o[6],Bt);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&68)&&St(t,r,n,n[6],e?Et(r,n[6],s,nn):ht(n[6]),Bt)},i(n){e||(E(t,n),e=!0)},o(n){v(t,n),e=!1},d(n){t&&t.d(n)}}}function sn(o){let e,r,t,n;const s=[an,on],a=[];function l(c,i){return c[1]?0:1}return e=l(o),r=a[e]=s[e](o),{c(){r.c(),t=ve()},l(c){r.l(c),t=ve()},m(c,i){a[e].m(c,i),A(c,t,i),n=!0},p(c,[i]){let f=e;e=l(c),e===f?a[e].p(c,i):(Ee(),v(a[f],1,1,()=>{a[f]=null}),Ae(),r=a[e],r?r.p(c,i):(r=a[e]=s[e](c),r.c()),E(r,1),r.m(t.parentNode,t))},i(c){n||(E(r),n=!0)},o(c){v(r),n=!1},d(c){c&&y(t),a[e].d(c)}}}function ln(o,e,r){let t;const n=["asChild","el"];let s=Ve(e,n),a,{$$slots:l={},$$scope:c}=e,{asChild:i=!1}=e,{el:f=void 0}=e;const{elements:{range:p},getAttrs:S}=ir();qe(o,p,_=>r(5,a=_));const F=S("range");function U(_){ct[_?"unshift":"push"](()=>{f=_,r(0,f)})}return o.$$set=_=>{e=be(be({},e),xe(_)),r(4,s=Ve(e,n)),"asChild"in _&&r(1,i=_.asChild),"el"in _&&r(0,f=_.el),"$$scope"in _&&r(6,c=_.$$scope)},o.$$.update=()=>{o.$$.dirty&32&&r(2,t=a),o.$$.dirty&4&&Object.assign(t,F)},[f,i,t,p,s,a,c,l,U]}class cn extends Je{constructor(e){super(),ze(this,e,ln,sn,Ye,{asChild:1,el:0})}}const un=o=>({builder:o&4}),Pt=o=>({builder:o[2]});function _n(o){let e,r,t,n=[o[2],o[4]],s={};for(let a=0;a<n.length;a+=1)s=be(s,n[a]);return{c(){e=P("span"),this.h()},l(a){e=B(a,"SPAN",{}),me(e).forEach(y),this.h()},h(){$e(e,s)},m(a,l){A(a,e,l),o[8](e),r||(t=[kt(o[2].action(e)),tr(e,"m-keydown",o[3])],r=!0)},p(a,l){$e(e,s=ut(n,[l&4&&a[2],l&16&&a[4]]))},i:ge,o:ge,d(a){a&&y(e),o[8](null),r=!1,_r(t)}}}function fn(o){let e;const r=o[7].default,t=pt(r,o,o[6],Pt);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&68)&&St(t,r,n,n[6],e?Et(r,n[6],s,un):ht(n[6]),Pt)},i(n){e||(E(t,n),e=!0)},o(n){v(t,n),e=!1},d(n){t&&t.d(n)}}}function yn(o){let e,r,t,n;const s=[fn,_n],a=[];function l(c,i){return c[1]?0:1}return e=l(o),r=a[e]=s[e](o),{c(){r.c(),t=ve()},l(c){r.l(c),t=ve()},m(c,i){a[e].m(c,i),A(c,t,i),n=!0},p(c,[i]){let f=e;e=l(c),e===f?a[e].p(c,i):(Ee(),v(a[f],1,1,()=>{a[f]=null}),Ae(),r=a[e],r?r.p(c,i):(r=a[e]=s[e](c),r.c()),E(r,1),r.m(t.parentNode,t))},i(c){n||(E(r),n=!0)},o(c){v(r),n=!1},d(c){c&&y(t),a[e].d(c)}}}function dn(o,e,r){let t;const n=["asChild","el","thumb"];let s=Ve(e,n),{$$slots:a={},$$scope:l}=e,{asChild:c=!1}=e,{el:i=void 0}=e,{thumb:f}=e;const{getAttrs:p}=ir(),S=Cr(),F=p("thumb");function U(_){ct[_?"unshift":"push"](()=>{i=_,r(0,i)})}return o.$$set=_=>{e=be(be({},e),xe(_)),r(4,s=Ve(e,n)),"asChild"in _&&r(1,c=_.asChild),"el"in _&&r(0,i=_.el),"thumb"in _&&r(5,f=_.thumb),"$$scope"in _&&r(6,l=_.$$scope)},o.$$.update=()=>{o.$$.dirty&32&&r(2,t=f),o.$$.dirty&4&&Object.assign(t,F)},[i,c,t,S,s,f,l,a,U]}class lr extends Je{constructor(e){super(),ze(this,e,dn,yn,Ye,{asChild:1,el:0,thumb:5})}}function Xt(o,e,r){const t=o.slice();return t[5]=e[r],t}function qt(o){let e,r;return e=new lr({props:{class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p:ge,i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Yt(o){let e,r;return e=new lr({props:{thumb:o[5],class:"block h-3 w-3 rounded-full border border-base-content bg-base-content shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n&16&&(s.thumb=t[5]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function mn(o){let e,r,t,n,s;r=new cn({props:{class:"absolute h-full bg-base-content before:block before:absolute before:top-0 before:-left-1.5 before:w-2 before:h-1 before:bg-base-content after:block after:absolute after:top-0 after:-right-1 after:w-1 after:h-1 after:bg-base-content/20 after:-z-10 after:rounded-r-full"}});let a=Lt(o[4]??[]),l=[];for(let f=0;f<a.length;f+=1)l[f]=Yt(Xt(o,a,f));const c=f=>v(l[f],1,1,()=>{l[f]=null});let i=null;return a.length||(i=qt()),{c(){e=P("span"),G(r.$$.fragment),t=I();for(let f=0;f<l.length;f+=1)l[f].c();n=ve(),i&&i.c(),this.h()},l(f){e=B(f,"SPAN",{class:!0});var p=me(e);z(r.$$.fragment,p),p.forEach(y),t=H(f);for(let S=0;S<l.length;S+=1)l[S].l(f);n=ve(),i&&i.l(f),this.h()},h(){N(e,"class","relative h-1 w-full grow rounded-l-full bg-base-300 cursor-pointer before:block before:absolute before:-top-4 before:-left-1.5 before:h-9 before:transparent before:z-0 before:w-[calc(100%+0.6rem)]")},m(f,p){A(f,e,p),J(r,e,null),A(f,t,p);for(let S=0;S<l.length;S+=1)l[S]&&l[S].m(f,p);A(f,n,p),i&&i.m(f,p),s=!0},p(f,p){if(p&16){a=Lt(f[4]??[]);let S;for(S=0;S<a.length;S+=1){const F=Xt(f,a,S);l[S]?(l[S].p(F,p),E(l[S],1)):(l[S]=Yt(F),l[S].c(),E(l[S],1),l[S].m(n.parentNode,n))}for(Ee(),S=a.length;S<l.length;S+=1)c(S);Ae(),!a.length&&i?i.p(f,p):a.length?i&&(Ee(),v(i,1,1,()=>{i=null}),Ae()):(i=qt(),i.c(),E(i,1),i.m(n.parentNode,n))}},i(f){if(!s){E(r.$$.fragment,f);for(let p=0;p<a.length;p+=1)E(l[p]);s=!0}},o(f){v(r.$$.fragment,f),l=l.filter(Boolean);for(let p=0;p<l.length;p+=1)v(l[p]);s=!1},d(f){f&&(y(e),y(t),y(n)),Y(r),fr(l,f),i&&i.d(f)}}}function pn(o){let e,r,t;const n=[{class:It("relative left-1.5 flex w-full touch-none select-none items-center",o[1])},o[2]];function s(l){o[3](l)}let a={$$slots:{default:[mn,({thumbs:l})=>({4:l}),({thumbs:l})=>l?16:0]},$$scope:{ctx:o}};for(let l=0;l<n.length;l+=1)a=be(a,n[l]);return o[0]!==void 0&&(a.value=o[0]),e=new rn({props:a}),ct.push(()=>or(e,"value",s)),{c(){G(e.$$.fragment)},l(l){z(e.$$.fragment,l)},m(l,c){J(e,l,c),t=!0},p(l,[c]){const i=c&6?ut(n,[c&2&&{class:It("relative left-1.5 flex w-full touch-none select-none items-center",l[1])},c&4&&ar(l[2])]):{};c&272&&(i.$$scope={dirty:c,ctx:l}),!r&&c&1&&(r=!0,i.value=l[0],rr(()=>r=!1)),e.$set(i)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Sn(o,e,r){const t=["class","value"];let n=Ve(e,t),{class:s=void 0}=e,{value:a=[0]}=e;function l(c){a=c,r(0,a)}return o.$$set=c=>{e=be(be({},e),xe(c)),r(2,n=Ve(e,t)),"class"in c&&r(1,s=c.class),"value"in c&&r(0,a=c.value)},[a,s,n,l]}class hn extends Je{constructor(e){super(),ze(this,e,Sn,pn,Ye,{class:1,value:0})}}function En(o){let e,r,t,n,s,a,l,c,i,f,p,S;const F=[Rn,bn],U=[];function _(M,d){return M[9]?0:1}n=_(o),s=U[n]=F[n](o);function k(M,d){return M[4]?vn:gn}let j=k(o),C=j(o);function re(M){o[29](M)}let te={min:o[0],max:o[1],step:o[5],sizeClass:o[14]};o[10]!==void 0&&(te.value=o[10]),c=new hn({props:te}),ct.push(()=>or(c,"value",re));let K=o[2]&&Jt(o);return{c(){e=P("div"),r=P("p"),t=P("span"),s.c(),a=I(),C.c(),l=I(),G(c.$$.fragment),f=I(),K&&K.c(),this.h()},l(M){e=B(M,"DIV",{class:!0});var d=me(e);r=B(d,"P",{class:!0});var g=me(r);t=B(g,"SPAN",{class:!0});var b=me(t);s.l(b),b.forEach(y),a=H(g),C.l(g),g.forEach(y),l=H(d),z(c.$$.fragment,d),f=H(d),K&&K.l(d),d.forEach(y),this.h()},h(){N(t,"class","font-medium"),N(r,"class","pb-2 pt-0.5 truncate text-xs"),N(e,"class",p=`relative ${o[14]} mt-2 mb-10 select-none`)},m(M,d){A(M,e,d),ae(e,r),ae(r,t),U[n].m(t,null),ae(r,a),C.m(r,null),ae(e,l),J(c,e,null),ae(e,f),K&&K.m(e,null),S=!0},p(M,d){let g=n;n=_(M),n===g?U[n].p(M,d):(Ee(),v(U[g],1,1,()=>{U[g]=null}),Ae(),s=U[n],s?s.p(M,d):(s=U[n]=F[n](M),s.c()),E(s,1),s.m(t,null)),j===(j=k(M))&&C?C.p(M,d):(C.d(1),C=j(M),C&&(C.c(),C.m(r,null)));const b={};d[0]&1&&(b.min=M[0]),d[0]&2&&(b.max=M[1]),d[0]&32&&(b.step=M[5]),d[0]&16384&&(b.sizeClass=M[14]),!i&&d[0]&1024&&(i=!0,b.value=M[10],rr(()=>i=!1)),c.$set(b),M[2]?K?K.p(M,d):(K=Jt(M),K.c(),K.m(e,null)):K&&(K.d(1),K=null),(!S||d[0]&16384&&p!==(p=`relative ${M[14]} mt-2 mb-10 select-none`))&&N(e,"class",p)},i(M){S||(E(s),E(c.$$.fragment,M),S=!0)},o(M){v(s),v(c.$$.fragment,M),S=!1},d(M){M&&y(e),U[n].d(),C.d(),Y(c),K&&K.d()}}}function An(o){let e,r;return e=new Mr({props:{inputType:"Slider",error:o[11],width:"170",height:"36"}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n[0]&2048&&(s.error=t[11]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function bn(o){let e,r;return{c(){e=tt(o[6]),r=tt(":")},l(t){e=et(t,o[6]),r=et(t,":")},m(t,n){A(t,e,n),A(t,r,n)},p(t,n){n[0]&64&&lt(e,t[6])},i:ge,o:ge,d(t){t&&(y(e),y(r))}}}function Rn(o){let e,r,t;return r=new Dr({props:{description:o[9],className:"mr-2"}}),{c(){e=tt(o[6]),G(r.$$.fragment)},l(n){e=et(n,o[6]),z(r.$$.fragment,n)},m(n,s){A(n,e,s),J(r,n,s),t=!0},p(n,s){(!t||s[0]&64)&&lt(e,n[6]);const a={};s[0]&512&&(a.description=n[9]),r.$set(a)},i(n){t||(E(r.$$.fragment,n),t=!0)},o(n){v(r.$$.fragment,n),t=!1},d(n){n&&y(e),Y(r,n)}}}function gn(o){let e,r=(o[8]?Ze(o[15][o[7]],o[12]):o[15][o[7]])+"",t;return{c(){e=P("span"),t=tt(r),this.h()},l(n){e=B(n,"SPAN",{class:!0});var s=me(e);t=et(s,r),s.forEach(y),this.h()},h(){N(e,"class","text-xs")},m(n,s){A(n,e,s),ae(e,t)},p(n,s){s[0]&37248&&r!==(r=(n[8]?Ze(n[15][n[7]],n[12]):n[15][n[7]])+"")&&lt(t,r)},d(n){n&&y(e)}}}function vn(o){let e,r,t;return{c(){e=P("input"),this.h()},l(n){e=B(n,"INPUT",{type:!0,min:!0,max:!0,class:!0}),this.h()},h(){N(e,"type","number"),N(e,"min",o[0]),N(e,"max",o[1]),e.value=o[13],N(e,"class","w-auto h-8 px-2 mb-2 text-sm border border-base-300 rounded bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary/50")},m(n,s){A(n,e,s),r||(t=tr(e,"input",o[28]),r=!0)},p(n,s){s[0]&1&&N(e,"min",n[0]),s[0]&2&&N(e,"max",n[1]),s[0]&8192&&e.value!==n[13]&&(e.value=n[13])},d(n){n&&y(e),r=!1,t()}}}function Jt(o){let e,r=(o[8]?Ze(o[0],o[12]):o[0])+"",t,n,s,a=(o[8]?Ze(o[1],o[12]):o[1])+"",l;return{c(){e=P("span"),t=tt(r),n=I(),s=P("span"),l=tt(a),this.h()},l(c){e=B(c,"SPAN",{class:!0});var i=me(e);t=et(i,r),i.forEach(y),n=H(c),s=B(c,"SPAN",{class:!0});var f=me(s);l=et(f,a),f.forEach(y),this.h()},h(){N(e,"class","absolute left-0 text-xs pt-1 -z-10"),N(s,"class","absolute -right-2.5 text-xs pt-1 -z-10")},m(c,i){A(c,e,i),ae(e,t),A(c,n,i),A(c,s,i),ae(s,l)},p(c,i){i[0]&4353&&r!==(r=(c[8]?Ze(c[0],c[12]):c[0])+"")&&lt(t,r),i[0]&4354&&a!==(a=(c[8]?Ze(c[1],c[12]):c[1])+"")&&lt(l,a)},d(c){c&&(y(e),y(n),y(s))}}}function On(o){let e,r,t,n;const s=[An,En],a=[];function l(c,i){return c[11].length>0?0:1}return e=l(o),r=a[e]=s[e](o),{c(){r.c(),t=ve()},l(c){r.l(c),t=ve()},m(c,i){a[e].m(c,i),A(c,t,i),n=!0},p(c,i){let f=e;e=l(c),e===f?a[e].p(c,i):(Ee(),v(a[f],1,1,()=>{a[f]=null}),Ae(),r=a[e],r?r.p(c,i):(r=a[e]=s[e](c),r.c()),E(r,1),r.m(t.parentNode,t))},i(c){n||(E(r),n=!0)},o(c){v(r),n=!1},d(c){c&&y(t),a[e].d(c)}}}function Cn(o){let e,r;return e=new Xr({props:{enabled:o[3],$$slots:{default:[On]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n[0]&8&&(s.enabled=t[3]),n[0]&65527|n[1]&64&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Tn(o,e,r){var he,Z,Q;let t,n,s,a,l;const c=Tr();qe(o,c,m=>r(15,l=m));let{title:i}=e,{name:f}=e,{min:p=0}=e,{max:S=100}=e,{step:F=1}=e,{showMaxMin:U=!0}=e,{hideDuringPrint:_=!0}=e,{defaultValue:k}=e,{range:j=void 0}=e,C=[0],{fmt:re="num0"}=e,{size:te=""}=e,K,{description:M=void 0}=e,{data:d}=e,{maxColumn:g=void 0}=e,{minColumn:b=void 0}=e,{debounceDelay:D=0}=e,{showInput:W=!1}=e,O=[],h,w=!0;function q(m){clearTimeout(h),h=setTimeout(()=>{Nt(c,l[f]=m,l)},D)}nr(()=>()=>{h&&clearTimeout(h)});function x(m,ne){if(m=wr(m),isNaN(m)){O.push(`${ne} must be a number`);return}return m}function ie(m,ne){m>ne&&O.push("min cannot be greater than max")}let V=!1;const L=m=>({small:"w-40",medium:"w-64",large:"w-96",full:"w-[calc(100%-0.6rem)]"})[m.toLowerCase()]||"w-40";if(d){try{Nr(d,[],[j,k,b,g])}catch(m){O=[...O,m.message]}typeof k=="string"&&((he=d[0])!=null&&he[k])&&(C=[d[0][k]]),j&&(p=d.map(m=>m[j]).reduce((m,ne)=>Math.min(m,ne)),S=d.map(m=>m[j]).reduce((m,ne)=>Math.max(m,ne))),g&&((Z=d[0])!=null&&Z[g])&&(S=d[0][g]),b&&((Q=d[0])!=null&&Q[b])&&(p=d[0][b])}try{Jr({name:f})}catch(m){O.push(m.message)}const T=()=>{n>1e3&&F<s&&r(5,F=s)};function X(m,ne=null){const Oe=Math.round(m),pe=Math.max(p,Math.min(S,isNaN(Oe)?p:Oe));ne&&(ne.value=pe),r(10,C=[pe]),q(C)}const $=m=>X(m.target.value,m.target);function oe(m){C=m,r(10,C),r(18,k),r(21,d),r(26,V),r(0,p),r(11,O),r(1,S)}return o.$$set=m=>{"title"in m&&r(6,i=m.title),"name"in m&&r(7,f=m.name),"min"in m&&r(0,p=m.min),"max"in m&&r(1,S=m.max),"step"in m&&r(5,F=m.step),"showMaxMin"in m&&r(2,U=m.showMaxMin),"hideDuringPrint"in m&&r(3,_=m.hideDuringPrint),"defaultValue"in m&&r(18,k=m.defaultValue),"range"in m&&r(19,j=m.range),"fmt"in m&&r(8,re=m.fmt),"size"in m&&r(20,te=m.size),"description"in m&&r(9,M=m.description),"data"in m&&r(21,d=m.data),"maxColumn"in m&&r(22,g=m.maxColumn),"minColumn"in m&&r(23,b=m.minColumn),"debounceDelay"in m&&r(24,D=m.debounceDelay),"showInput"in m&&r(4,W=m.showInput)},o.$$.update=()=>{o.$$.dirty[0]&4&&r(2,U=vt(U)),o.$$.dirty[0]&8&&r(3,_=vt(_)),o.$$.dirty[0]&16&&r(4,W=vt(W)),o.$$.dirty[0]&1&&p!==void 0&&r(0,p=x(p,"min")),o.$$.dirty[0]&2&&S!==void 0&&r(1,S=x(S,"max")),o.$$.dirty[0]&3&&S!==void 0&&p!==void 0&&ie(p,S),o.$$.dirty[0]&69470211&&k!==void 0&&!d&&!V&&(r(18,k=x(k,"defaultValue")),k<p?O.push("defaultValue cannot be less than min"):k>S&&O.push("defaultValue cannot be greater than max"),r(10,C=[k]),r(26,V=!0)),o.$$.dirty[0]&33555584&&C&&C.length>0&&(w?(Nt(c,l[f]=C,l),r(25,w=!1)):q(C)),o.$$.dirty[0]&1048576&&r(14,t=L(te)),o.$$.dirty[0]&256&&(re?r(12,K=kr(re,"number")):r(12,K=void 0)),o.$$.dirty[0]&3&&r(27,n=S-p),o.$$.dirty[0]&134217728&&(s=n/1e3),o.$$.dirty[0]&134217728&&n>1e3&&T(),o.$$.dirty[0]&1025&&r(13,a=C&&C.length>0?Math.round(C[0]):p)},[p,S,U,_,W,F,i,f,re,M,C,O,K,a,t,l,c,X,k,j,te,d,g,b,D,w,V,n,$,oe]}class Nn extends Je{constructor(e){super(),ze(this,e,Tn,Cn,Ye,{title:6,name:7,min:0,max:1,step:5,showMaxMin:2,hideDuringPrint:3,defaultValue:18,range:19,fmt:8,size:20,description:9,data:21,maxColumn:22,minColumn:23,debounceDelay:24,showInput:4},null,[-1,-1])}}function kn(o){let e,r;const t=[o[4],{data:He.isQuery(o[7])?Array.from(o[7]):o[7]}];let n={};for(let s=0;s<t.length;s+=1)n=be(n,t[s]);return e=new Nn({props:n}),{c(){G(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,a){J(e,s,a),r=!0},p(s,a){const l=a&144?ut(t,[a&16&&ar(s[4]),a&128&&{data:He.isQuery(s[7])?Array.from(s[7]):s[7]}]):{};e.$set(l)},i(s){r||(E(e.$$.fragment,s),r=!0)},o(s){v(e.$$.fragment,s),r=!1},d(s){Y(e,s)}}}function zt(o){let e,r;return e=new Ir({props:{emptyMessage:o[2],emptySet:o[1],chartType:Hn,isInitial:o[3]}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n&4&&(s.emptyMessage=t[2]),n&2&&(s.emptySet=t[1]),n&8&&(s.isInitial=t[3]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Mn(o){let e,r,t=!o[4].placeholder&&zt(o);return{c(){e=P("span"),t&&t.c(),this.h()},l(n){e=B(n,"SPAN",{slot:!0});var s=me(e);t&&t.l(s),s.forEach(y),this.h()},h(){N(e,"slot","empty")},m(n,s){A(n,e,s),t&&t.m(e,null),r=!0},p(n,s){n[4].placeholder?t&&(Ee(),v(t,1,1,()=>{t=null}),Ae()):t?(t.p(n,s),s&16&&E(t,1)):(t=zt(n),t.c(),E(t,1),t.m(e,null))},i(n){r||(E(t),r=!0)},o(n){v(t),r=!1},d(n){n&&y(e),t&&t.d()}}}function Dn(o){let e,r="Loading...";return{c(){e=P("span"),e.textContent=r,this.h()},l(t){e=B(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),Ue(e)!=="svelte-exu0be"&&(e.textContent=r),this.h()},h(){N(e,"slot","skeleton"),N(e,"class","text-gray-500")},m(t,n){A(t,e,n)},p:ge,d(t){t&&y(e)}}}function wn(o){let e,r;return e=new Hr({props:{data:o[0],$$slots:{skeleton:[Dn],empty:[Mn],default:[kn,({loaded:t})=>({7:t}),({loaded:t})=>t?128:0]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,[n]){const s={};n&1&&(s.data=t[0]),n&414&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}let Hn="Slider";function In(o,e,r){let t,{data:n}=e;const s=He.isQuery(n)?n.hash:void 0;let a=(n==null?void 0:n.hash)===s,{emptySet:l=void 0}=e,{emptyMessage:c=void 0}=e;return o.$$set=i=>{r(6,e=be(be({},e),xe(i))),"data"in i&&r(0,n=i.data),"emptySet"in i&&r(1,l=i.emptySet),"emptyMessage"in i&&r(2,c=i.emptyMessage)},o.$$.update=()=>{o.$$.dirty&1&&r(3,a=(n==null?void 0:n.hash)===s),r(4,t=Object.fromEntries(Object.entries(e).filter(([,i])=>i!==void 0)))},e=xe(e),[n,l,c,a,t]}class Ln extends Je{constructor(e){super(),ze(this,e,In,wn,Ye,{data:0,emptySet:1,emptyMessage:2})}}function Fn(o){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:ge,p:ge,d:ge}}function Wn(o){let e,r,t,n,s;return document.title=e=se.title,{c(){r=I(),t=P("meta"),n=I(),s=P("meta"),this.h()},l(a){r=H(a),t=B(a,"META",{property:!0,content:!0}),n=H(a),s=B(a,"META",{name:!0,content:!0}),this.h()},h(){var a,l;N(t,"property","og:title"),N(t,"content",((a=se.og)==null?void 0:a.title)??se.title),N(s,"name","twitter:title"),N(s,"content",((l=se.og)==null?void 0:l.title)??se.title)},m(a,l){A(a,r,l),A(a,t,l),A(a,n,l),A(a,s,l)},p(a,l){l&0&&e!==(e=se.title)&&(document.title=e)},d(a){a&&(y(r),y(t),y(n),y(s))}}}function Un(o){var s,a;let e,r,t=(se.description||((s=se.og)==null?void 0:s.description))&&Vn(),n=((a=se.og)==null?void 0:a.image)&&Bn();return{c(){t&&t.c(),e=I(),n&&n.c(),r=ve()},l(l){t&&t.l(l),e=H(l),n&&n.l(l),r=ve()},m(l,c){t&&t.m(l,c),A(l,e,c),n&&n.m(l,c),A(l,r,c)},p(l,c){var i,f;(se.description||(i=se.og)!=null&&i.description)&&t.p(l,c),(f=se.og)!=null&&f.image&&n.p(l,c)},d(l){l&&(y(e),y(r)),t&&t.d(l),n&&n.d(l)}}}function Vn(o){let e,r,t,n,s;return{c(){e=P("meta"),r=I(),t=P("meta"),n=I(),s=P("meta"),this.h()},l(a){e=B(a,"META",{name:!0,content:!0}),r=H(a),t=B(a,"META",{property:!0,content:!0}),n=H(a),s=B(a,"META",{name:!0,content:!0}),this.h()},h(){var a,l,c;N(e,"name","description"),N(e,"content",se.description??((a=se.og)==null?void 0:a.description)),N(t,"property","og:description"),N(t,"content",((l=se.og)==null?void 0:l.description)??se.description),N(s,"name","twitter:description"),N(s,"content",((c=se.og)==null?void 0:c.description)??se.description)},m(a,l){A(a,e,l),A(a,r,l),A(a,t,l),A(a,n,l),A(a,s,l)},p:ge,d(a){a&&(y(e),y(r),y(t),y(n),y(s))}}}function Bn(o){let e,r,t;return{c(){e=P("meta"),r=I(),t=P("meta"),this.h()},l(n){e=B(n,"META",{property:!0,content:!0}),r=H(n),t=B(n,"META",{name:!0,content:!0}),this.h()},h(){var n,s;N(e,"property","og:image"),N(e,"content",Ft((n=se.og)==null?void 0:n.image)),N(t,"name","twitter:image"),N(t,"content",Ft((s=se.og)==null?void 0:s.image))},m(n,s){A(n,e,s),A(n,r,s),A(n,t,s)},p:ge,d(n){n&&(y(e),y(r),y(t))}}}function Gt(o){let e,r;return e=new Ge({props:{queryID:"country_filter",queryResult:o[0]}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n[0]&1&&(s.queryResult=t[0]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function jt(o){let e,r;return e=new Ge({props:{queryID:"year_window_options",queryResult:o[1]}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n[0]&2&&(s.queryResult=t[1]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Qt(o){let e,r;return e=new Ge({props:{queryID:"country_kpis",queryResult:o[2]}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n[0]&4&&(s.queryResult=t[2]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Pn(o){let e,r,t,n,s,a;return e=new Ot({props:{data:o[2],value:"avg_pressure_score_display",title:"Avg Pressure Score",fmt:"pct"}}),t=new Ot({props:{data:o[2],value:"max_undernourishment_display",title:"Max Undernourishment"}}),s=new Ot({props:{data:o[2],value:"undernourishment_change_display",title:"Change in Selected Period"}}),{c(){G(e.$$.fragment),r=I(),G(t.$$.fragment),n=I(),G(s.$$.fragment)},l(l){z(e.$$.fragment,l),r=H(l),z(t.$$.fragment,l),n=H(l),z(s.$$.fragment,l)},m(l,c){J(e,l,c),A(l,r,c),J(t,l,c),A(l,n,c),J(s,l,c),a=!0},p(l,c){const i={};c[0]&4&&(i.data=l[2]),e.$set(i);const f={};c[0]&4&&(f.data=l[2]),t.$set(f);const p={};c[0]&4&&(p.data=l[2]),s.$set(p)},i(l){a||(E(e.$$.fragment,l),E(t.$$.fragment,l),E(s.$$.fragment,l),a=!0)},o(l){v(e.$$.fragment,l),v(t.$$.fragment,l),v(s.$$.fragment,l),a=!1},d(l){l&&(y(r),y(n)),Y(e,l),Y(t,l),Y(s,l)}}}function Kt(o){let e,r;return e=new Ge({props:{queryID:"undernourishment_trend",queryResult:o[3]}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n[0]&8&&(s.queryResult=t[3]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Zt(o){let e,r;return e=new Ge({props:{queryID:"pressure_trend",queryResult:o[4]}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n[0]&16&&(s.queryResult=t[4]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function xt(o){let e,r;return e=new Ge({props:{queryID:"driver_scores",queryResult:o[5]}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n[0]&32&&(s.queryResult=t[5]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function $t(o){let e,r;return e=new Ge({props:{queryID:"country_detail",queryResult:o[6]}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){J(e,t,n),r=!0},p(t,n){const s={};n[0]&64&&(s.queryResult=t[6]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Xn(o){let e,r,t,n,s,a,l,c,i,f,p,S,F,U;return e=new Xe({props:{id:"year"}}),t=new Xe({props:{id:"undernourishment_percent",title:"Undernourishment"}}),s=new Xe({props:{id:"food_inflation_percent",title:"Food Inflation"}}),l=new Xe({props:{id:"gdp_per_capita_usd",title:"GDP / Capita (USD)"}}),i=new Xe({props:{id:"supply_variability_kcal",title:"Supply Variability"}}),p=new Xe({props:{id:"pressure_score",title:"Pressure Score",fmt:"pct"}}),F=new Xe({props:{id:"main_pressure_driver",title:"Main Driver"}}),{c(){G(e.$$.fragment),r=I(),G(t.$$.fragment),n=I(),G(s.$$.fragment),a=I(),G(l.$$.fragment),c=I(),G(i.$$.fragment),f=I(),G(p.$$.fragment),S=I(),G(F.$$.fragment)},l(_){z(e.$$.fragment,_),r=H(_),z(t.$$.fragment,_),n=H(_),z(s.$$.fragment,_),a=H(_),z(l.$$.fragment,_),c=H(_),z(i.$$.fragment,_),f=H(_),z(p.$$.fragment,_),S=H(_),z(F.$$.fragment,_)},m(_,k){J(e,_,k),A(_,r,k),J(t,_,k),A(_,n,k),J(s,_,k),A(_,a,k),J(l,_,k),A(_,c,k),J(i,_,k),A(_,f,k),J(p,_,k),A(_,S,k),J(F,_,k),U=!0},p:ge,i(_){U||(E(e.$$.fragment,_),E(t.$$.fragment,_),E(s.$$.fragment,_),E(l.$$.fragment,_),E(i.$$.fragment,_),E(p.$$.fragment,_),E(F.$$.fragment,_),U=!0)},o(_){v(e.$$.fragment,_),v(t.$$.fragment,_),v(s.$$.fragment,_),v(l.$$.fragment,_),v(i.$$.fragment,_),v(p.$$.fragment,_),v(F.$$.fragment,_),U=!1},d(_){_&&(y(r),y(n),y(a),y(c),y(f),y(S)),Y(e,_),Y(t,_),Y(s,_),Y(l,_),Y(i,_),Y(p,_),Y(F,_)}}}function qn(o){let e,r,t,n,s,a,l='<a href="#country-details">Country Details</a>',c,i,f="Explore how food security pressure has changed over time for a selected country.",p,S,F='<a href="/food-security-pipeline/" class="markdown">Back to Overview</a>',U,_,k,j,C,re,te,K,M,d,g,b,D,W,O,h,w,q,x,ie,V,L,T='<a href="#undernourishment-over-time">Undernourishment Over Time</a>',X,$,oe,he,Z,Q,m='<a href="#pressure-score-over-time">Pressure Score Over Time</a>',ne,Oe,pe,Ne,Se,ke='<a href="#driver-scores-over-time">Driver Scores Over Time</a>',Me,De,Ce,Fe,ee,je,Ie,Mt='<a href="#country-year-details">Country-Year Details</a>',_t,Qe,We,ft;function cr(u,R){return typeof se<"u"&&se.title?Wn:Fn}let rt=cr()(o),Le=typeof se=="object"&&Un(),le=o[0]&&Gt(o),ce=o[1]&&jt(o);te=new qr({props:{data:o[0],name:"selected_country",value:"country_code",label:"country_name",defaultValue:"HTI",title:"Country"}}),d=new Ln({props:{data:o[1],name:"years_to_show",title:"Years to Show",minColumn:"min_years",maxColumn:"max_years",defaultValue:"default_years",step:"1"}});let ue=o[2]&&Qt(o);h=new zr({props:{cols:"3",$$slots:{default:[Pn]},$$scope:{ctx:o}}});let _e=o[3]&&Kt(o);oe=new Ct({props:{data:o[3],x:"year",y:"undernourishment_percent",xType:"category",yFmt:"0'%'",title:"Undernourishment (% of population)",colorPalette:["#B85C38"],echartsOptions:{color:["#B85C38"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{splitLine:{show:!0,lineStyle:{color:"#F5F5F5",width:1,type:"solid"}}},xAxis:{splitLine:{show:!1}}}}});let fe=o[4]&&Zt(o);pe=new Ct({props:{data:o[4],x:"year",y:"pressure_score_pct",xType:"category",yFmt:"0'%'",title:"Overall Pressure Score",colorPalette:["#B85C38"],echartsOptions:{color:["#B85C38"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{splitLine:{show:!0,lineStyle:{color:"#F5F5F5",width:1,type:"solid"}}},xAxis:{splitLine:{show:!1}}}}});let ye=o[5]&&xt(o);Ce=new Ct({props:{data:o[5],x:"year",y:"score_pct",series:"driver",xType:"category",yFmt:"0'%'",title:"Driver Scores Over Time",colorPalette:["#B85C38","#D99A74","#7A5C45"],echartsOptions:{color:["#B85C38","#D99A74","#7A5C45"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{splitLine:{show:!0,lineStyle:{color:"#F5F5F5",width:1,type:"solid"}}},xAxis:{splitLine:{show:!1}}}}});let de=o[6]&&$t(o);return We=new Lr({props:{data:o[6],rowShading:"true",$$slots:{default:[Xn]},$$scope:{ctx:o}}}),{c(){e=I(),rt.c(),r=P("meta"),t=P("meta"),Le&&Le.c(),n=ve(),s=I(),a=P("h1"),a.innerHTML=l,c=I(),i=P("p"),i.textContent=f,p=I(),S=P("p"),S.innerHTML=F,U=I(),le&&le.c(),_=I(),ce&&ce.c(),k=I(),j=P("div"),C=P("div"),re=P("div"),G(te.$$.fragment),K=I(),M=P("div"),G(d.$$.fragment),g=I(),ue&&ue.c(),b=I(),D=P("hr"),W=I(),O=P("div"),G(h.$$.fragment),w=I(),q=P("hr"),x=I(),ie=P("div"),V=P("div"),L=P("h2"),L.innerHTML=T,X=I(),_e&&_e.c(),$=I(),G(oe.$$.fragment),he=I(),Z=P("div"),Q=P("h2"),Q.innerHTML=m,ne=I(),fe&&fe.c(),Oe=I(),G(pe.$$.fragment),Ne=I(),Se=P("h2"),Se.innerHTML=ke,Me=I(),ye&&ye.c(),De=I(),G(Ce.$$.fragment),Fe=I(),ee=P("hr"),je=I(),Ie=P("h2"),Ie.innerHTML=Mt,_t=I(),de&&de.c(),Qe=I(),G(We.$$.fragment),this.h()},l(u){e=H(u);const R=yr("svelte-2igo1p",document.head);rt.l(R),r=B(R,"META",{name:!0,content:!0}),t=B(R,"META",{name:!0,content:!0}),Le&&Le.l(R),n=ve(),R.forEach(y),s=H(u),a=B(u,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Ue(a)!=="svelte-1fgdspk"&&(a.innerHTML=l),c=H(u),i=B(u,"P",{class:!0,"data-svelte-h":!0}),Ue(i)!=="svelte-fcrxme"&&(i.textContent=f),p=H(u),S=B(u,"P",{class:!0,"data-svelte-h":!0}),Ue(S)!=="svelte-rsd8gs"&&(S.innerHTML=F),U=H(u),le&&le.l(u),_=H(u),ce&&ce.l(u),k=H(u),j=B(u,"DIV",{class:!0});var nt=me(j);C=B(nt,"DIV",{class:!0});var Be=me(C);re=B(Be,"DIV",{});var ot=me(re);z(te.$$.fragment,ot),ot.forEach(y),K=H(Be),M=B(Be,"DIV",{});var at=me(M);z(d.$$.fragment,at),at.forEach(y),Be.forEach(y),nt.forEach(y),g=H(u),ue&&ue.l(u),b=H(u),D=B(u,"HR",{class:!0}),W=H(u),O=B(u,"DIV",{class:!0});var st=me(O);z(h.$$.fragment,st),st.forEach(y),w=H(u),q=B(u,"HR",{class:!0}),x=H(u),ie=B(u,"DIV",{class:!0});var Pe=me(ie);V=B(Pe,"DIV",{});var we=me(V);L=B(we,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ue(L)!=="svelte-s31tr7"&&(L.innerHTML=T),X=H(we),_e&&_e.l(we),$=H(we),z(oe.$$.fragment,we),we.forEach(y),he=H(Pe),Z=B(Pe,"DIV",{});var Ke=me(Z);Q=B(Ke,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ue(Q)!=="svelte-1p2b8va"&&(Q.innerHTML=m),ne=H(Ke),fe&&fe.l(Ke),Oe=H(Ke),z(pe.$$.fragment,Ke),Ke.forEach(y),Pe.forEach(y),Ne=H(u),Se=B(u,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ue(Se)!=="svelte-1wo74kg"&&(Se.innerHTML=ke),Me=H(u),ye&&ye.l(u),De=H(u),z(Ce.$$.fragment,u),Fe=H(u),ee=B(u,"HR",{class:!0}),je=H(u),Ie=B(u,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ue(Ie)!=="svelte-5fls36"&&(Ie.innerHTML=Mt),_t=H(u),de&&de.l(u),Qe=H(u),z(We.$$.fragment,u),this.h()},h(){N(r,"name","twitter:card"),N(r,"content","summary_large_image"),N(t,"name","twitter:site"),N(t,"content","@evidence_dev"),N(a,"class","markdown"),N(a,"id","country-details"),N(i,"class","markdown"),N(S,"class","markdown"),N(C,"class","grid grid-cols-2 gap-4"),N(j,"class","max-w-xl"),N(D,"class","markdown"),N(O,"class","max-w-4xl mx-auto"),N(q,"class","markdown"),N(L,"class","markdown"),N(L,"id","undernourishment-over-time"),N(Q,"class","markdown"),N(Q,"id","pressure-score-over-time"),N(ie,"class","grid grid-cols-2 gap-6"),N(Se,"class","markdown"),N(Se,"id","driver-scores-over-time"),N(ee,"class","markdown"),N(Ie,"class","markdown"),N(Ie,"id","country-year-details")},m(u,R){A(u,e,R),rt.m(document.head,null),ae(document.head,r),ae(document.head,t),Le&&Le.m(document.head,null),ae(document.head,n),A(u,s,R),A(u,a,R),A(u,c,R),A(u,i,R),A(u,p,R),A(u,S,R),A(u,U,R),le&&le.m(u,R),A(u,_,R),ce&&ce.m(u,R),A(u,k,R),A(u,j,R),ae(j,C),ae(C,re),J(te,re,null),ae(C,K),ae(C,M),J(d,M,null),A(u,g,R),ue&&ue.m(u,R),A(u,b,R),A(u,D,R),A(u,W,R),A(u,O,R),J(h,O,null),A(u,w,R),A(u,q,R),A(u,x,R),A(u,ie,R),ae(ie,V),ae(V,L),ae(V,X),_e&&_e.m(V,null),ae(V,$),J(oe,V,null),ae(ie,he),ae(ie,Z),ae(Z,Q),ae(Z,ne),fe&&fe.m(Z,null),ae(Z,Oe),J(pe,Z,null),A(u,Ne,R),A(u,Se,R),A(u,Me,R),ye&&ye.m(u,R),A(u,De,R),J(Ce,u,R),A(u,Fe,R),A(u,ee,R),A(u,je,R),A(u,Ie,R),A(u,_t,R),de&&de.m(u,R),A(u,Qe,R),J(We,u,R),ft=!0},p(u,R){rt.p(u,R),typeof se=="object"&&Le.p(u,R),u[0]?le?(le.p(u,R),R[0]&1&&E(le,1)):(le=Gt(u),le.c(),E(le,1),le.m(_.parentNode,_)):le&&(Ee(),v(le,1,1,()=>{le=null}),Ae()),u[1]?ce?(ce.p(u,R),R[0]&2&&E(ce,1)):(ce=jt(u),ce.c(),E(ce,1),ce.m(k.parentNode,k)):ce&&(Ee(),v(ce,1,1,()=>{ce=null}),Ae());const nt={};R[0]&1&&(nt.data=u[0]),te.$set(nt);const Be={};R[0]&2&&(Be.data=u[1]),d.$set(Be),u[2]?ue?(ue.p(u,R),R[0]&4&&E(ue,1)):(ue=Qt(u),ue.c(),E(ue,1),ue.m(b.parentNode,b)):ue&&(Ee(),v(ue,1,1,()=>{ue=null}),Ae());const ot={};R[0]&4|R[1]&8388608&&(ot.$$scope={dirty:R,ctx:u}),h.$set(ot),u[3]?_e?(_e.p(u,R),R[0]&8&&E(_e,1)):(_e=Kt(u),_e.c(),E(_e,1),_e.m(V,$)):_e&&(Ee(),v(_e,1,1,()=>{_e=null}),Ae());const at={};R[0]&8&&(at.data=u[3]),oe.$set(at),u[4]?fe?(fe.p(u,R),R[0]&16&&E(fe,1)):(fe=Zt(u),fe.c(),E(fe,1),fe.m(Z,Oe)):fe&&(Ee(),v(fe,1,1,()=>{fe=null}),Ae());const st={};R[0]&16&&(st.data=u[4]),pe.$set(st),u[5]?ye?(ye.p(u,R),R[0]&32&&E(ye,1)):(ye=xt(u),ye.c(),E(ye,1),ye.m(De.parentNode,De)):ye&&(Ee(),v(ye,1,1,()=>{ye=null}),Ae());const Pe={};R[0]&32&&(Pe.data=u[5]),Ce.$set(Pe),u[6]?de?(de.p(u,R),R[0]&64&&E(de,1)):(de=$t(u),de.c(),E(de,1),de.m(Qe.parentNode,Qe)):de&&(Ee(),v(de,1,1,()=>{de=null}),Ae());const we={};R[0]&64&&(we.data=u[6]),R[1]&8388608&&(we.$$scope={dirty:R,ctx:u}),We.$set(we)},i(u){ft||(E(le),E(ce),E(te.$$.fragment,u),E(d.$$.fragment,u),E(ue),E(h.$$.fragment,u),E(_e),E(oe.$$.fragment,u),E(fe),E(pe.$$.fragment,u),E(ye),E(Ce.$$.fragment,u),E(de),E(We.$$.fragment,u),ft=!0)},o(u){v(le),v(ce),v(te.$$.fragment,u),v(d.$$.fragment,u),v(ue),v(h.$$.fragment,u),v(_e),v(oe.$$.fragment,u),v(fe),v(pe.$$.fragment,u),v(ye),v(Ce.$$.fragment,u),v(de),v(We.$$.fragment,u),ft=!1},d(u){u&&(y(e),y(s),y(a),y(c),y(i),y(p),y(S),y(U),y(_),y(k),y(j),y(g),y(b),y(D),y(W),y(O),y(w),y(q),y(x),y(ie),y(Ne),y(Se),y(Me),y(De),y(Fe),y(ee),y(je),y(Ie),y(_t),y(Qe)),rt.d(u),y(r),y(t),Le&&Le.d(u),y(n),le&&le.d(u),ce&&ce.d(u),Y(te),Y(d),ue&&ue.d(u),Y(h),_e&&_e.d(),Y(oe),fe&&fe.d(),Y(pe),ye&&ye.d(u),Y(Ce,u),de&&de.d(u),Y(We,u)}}}const se={title:"Country Detail"};function Yn(o,e,r){let t,n;qe(o,Yr,ee=>r(38,t=ee)),qe(o,Wt,ee=>r(43,n=ee));let{data:s}=e,{data:a={},customFormattingSettings:l,__db:c,inputs:i}=s;Nt(Wt,n="d5261a40f47cad30260201e929e1ca04",n);let f=Fr(it(i));dr(f.subscribe(ee=>r(9,i=ee))),er(Vr,{getCustomFormats:()=>l.customFormats||[]});const p=(ee,je)=>Pr(c.query,ee,{query_name:je});Wr(p),t.params,nr(()=>!0);let S={initialData:void 0,initialError:void 0},F=Re`SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name`,U=`SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name`;a.country_filter_data&&(a.country_filter_data instanceof Error?S.initialError=a.country_filter_data:S.initialData=a.country_filter_data,a.country_filter_columns&&(S.knownColumns=a.country_filter_columns));let _,k=!1;const j=He.createReactive({callback:ee=>{r(0,_=ee)},execFn:p},{id:"country_filter",...S});j(U,{noResolve:F,...S}),globalThis[Symbol.for("country_filter")]={get value(){return _}};let C={initialData:void 0,initialError:void 0},re=Re`SELECT
    5 AS min_years,
    COUNT(DISTINCT year) AS max_years,
    LEAST(5, COUNT(DISTINCT year)) AS default_years
FROM food_security.country_food_security_yearly
WHERE country_code = '${i.selected_country.value}'`,te=`SELECT
    5 AS min_years,
    COUNT(DISTINCT year) AS max_years,
    LEAST(5, COUNT(DISTINCT year)) AS default_years
FROM food_security.country_food_security_yearly
WHERE country_code = '${i.selected_country.value}'`;a.year_window_options_data&&(a.year_window_options_data instanceof Error?C.initialError=a.year_window_options_data:C.initialData=a.year_window_options_data,a.year_window_options_columns&&(C.knownColumns=a.year_window_options_columns));let K,M=!1;const d=He.createReactive({callback:ee=>{r(1,K=ee)},execFn:p},{id:"year_window_options",...C});d(te,{noResolve:re,...C}),globalThis[Symbol.for("year_window_options")]={get value(){return K}};let g={initialData:void 0,initialError:void 0},b=Re`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
),

country_data AS (
    SELECT
        c.country_name,
        c.year,
        c.overall_pressure_score,
        c.undernourishment_prevalence_pct
    FROM food_security.country_food_security_yearly AS c
    CROSS JOIN country_years AS cy
    WHERE c.country_code = '${i.selected_country.value}'
      AND c.year >= cy.max_year - ${i.years_to_show} + 1
),

ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (ORDER BY year ASC) AS first_year_rank,
        ROW_NUMBER() OVER (ORDER BY year DESC) AS last_year_rank
    FROM country_data
)

SELECT
    country_name,
    MIN(year) AS first_year,
    MAX(year) AS last_year,

    ROUND(AVG(overall_pressure_score), 2) AS avg_pressure_score,
    ROUND(MAX(undernourishment_prevalence_pct), 1) AS max_undernourishment_percent,

    ROUND(
        MAX(CASE WHEN last_year_rank = 1 THEN undernourishment_prevalence_pct END)
        -
        MAX(CASE WHEN first_year_rank = 1 THEN undernourishment_prevalence_pct END),
        1
    ) AS undernourishment_change_pp,

    CAST(ROUND(AVG(overall_pressure_score), 2) AS VARCHAR) AS avg_pressure_score_display,
    CAST(ROUND(MAX(undernourishment_prevalence_pct), 1) AS VARCHAR) || '%' AS max_undernourishment_display,
    CAST(ROUND(
        MAX(CASE WHEN last_year_rank = 1 THEN undernourishment_prevalence_pct END)
        -
        MAX(CASE WHEN first_year_rank = 1 THEN undernourishment_prevalence_pct END),
        1
    ) AS VARCHAR) || ' pp' AS undernourishment_change_display

FROM ranked
GROUP BY country_name`,D=`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
),

country_data AS (
    SELECT
        c.country_name,
        c.year,
        c.overall_pressure_score,
        c.undernourishment_prevalence_pct
    FROM food_security.country_food_security_yearly AS c
    CROSS JOIN country_years AS cy
    WHERE c.country_code = '${i.selected_country.value}'
      AND c.year >= cy.max_year - ${i.years_to_show} + 1
),

ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (ORDER BY year ASC) AS first_year_rank,
        ROW_NUMBER() OVER (ORDER BY year DESC) AS last_year_rank
    FROM country_data
)

SELECT
    country_name,
    MIN(year) AS first_year,
    MAX(year) AS last_year,

    ROUND(AVG(overall_pressure_score), 2) AS avg_pressure_score,
    ROUND(MAX(undernourishment_prevalence_pct), 1) AS max_undernourishment_percent,

    ROUND(
        MAX(CASE WHEN last_year_rank = 1 THEN undernourishment_prevalence_pct END)
        -
        MAX(CASE WHEN first_year_rank = 1 THEN undernourishment_prevalence_pct END),
        1
    ) AS undernourishment_change_pp,

    CAST(ROUND(AVG(overall_pressure_score), 2) AS VARCHAR) AS avg_pressure_score_display,
    CAST(ROUND(MAX(undernourishment_prevalence_pct), 1) AS VARCHAR) || '%' AS max_undernourishment_display,
    CAST(ROUND(
        MAX(CASE WHEN last_year_rank = 1 THEN undernourishment_prevalence_pct END)
        -
        MAX(CASE WHEN first_year_rank = 1 THEN undernourishment_prevalence_pct END),
        1
    ) AS VARCHAR) || ' pp' AS undernourishment_change_display

FROM ranked
GROUP BY country_name`;a.country_kpis_data&&(a.country_kpis_data instanceof Error?g.initialError=a.country_kpis_data:g.initialData=a.country_kpis_data,a.country_kpis_columns&&(g.knownColumns=a.country_kpis_columns));let W,O=!1;const h=He.createReactive({callback:ee=>{r(2,W=ee)},execFn:p},{id:"country_kpis",...g});h(D,{noResolve:b,...g}),globalThis[Symbol.for("country_kpis")]={get value(){return W}};let w={initialData:void 0,initialError:void 0},q=Re`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    c.undernourishment_prevalence_pct AS undernourishment_percent
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`,x=`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    c.undernourishment_prevalence_pct AS undernourishment_percent
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`;a.undernourishment_trend_data&&(a.undernourishment_trend_data instanceof Error?w.initialError=a.undernourishment_trend_data:w.initialData=a.undernourishment_trend_data,a.undernourishment_trend_columns&&(w.knownColumns=a.undernourishment_trend_columns));let ie,V=!1;const L=He.createReactive({callback:ee=>{r(3,ie=ee)},execFn:p},{id:"undernourishment_trend",...w});L(x,{noResolve:q,...w}),globalThis[Symbol.for("undernourishment_trend")]={get value(){return ie}};let T={initialData:void 0,initialError:void 0},X=Re`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    c.overall_pressure_score * 100 AS pressure_score_pct
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`,$=`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    c.overall_pressure_score * 100 AS pressure_score_pct
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`;a.pressure_trend_data&&(a.pressure_trend_data instanceof Error?T.initialError=a.pressure_trend_data:T.initialData=a.pressure_trend_data,a.pressure_trend_columns&&(T.knownColumns=a.pressure_trend_columns));let oe,he=!1;const Z=He.createReactive({callback:ee=>{r(4,oe=ee)},execFn:p},{id:"pressure_trend",...T});Z($,{noResolve:X,...T}),globalThis[Symbol.for("pressure_trend")]={get value(){return oe}};let Q={initialData:void 0,initialError:void 0},m=Re`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
),

filtered_country AS (
    SELECT
        c.*
    FROM food_security.country_food_security_yearly AS c
    CROSS JOIN country_years AS cy
    WHERE c.country_code = '${i.selected_country.value}'
      AND c.year >= cy.max_year - ${i.years_to_show} + 1
)

SELECT
    year,
    'Price pressure' AS driver,
    price_pressure_score * 100 AS score_pct
FROM filtered_country

UNION ALL

SELECT
    year,
    'Economic vulnerability' AS driver,
    economic_vulnerability_score * 100 AS score_pct
FROM filtered_country

UNION ALL

SELECT
    year,
    'Food availability' AS driver,
    food_availability_pressure_score * 100 AS score_pct
FROM filtered_country

ORDER BY year, driver`,ne=`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
),

filtered_country AS (
    SELECT
        c.*
    FROM food_security.country_food_security_yearly AS c
    CROSS JOIN country_years AS cy
    WHERE c.country_code = '${i.selected_country.value}'
      AND c.year >= cy.max_year - ${i.years_to_show} + 1
)

SELECT
    year,
    'Price pressure' AS driver,
    price_pressure_score * 100 AS score_pct
FROM filtered_country

UNION ALL

SELECT
    year,
    'Economic vulnerability' AS driver,
    economic_vulnerability_score * 100 AS score_pct
FROM filtered_country

UNION ALL

SELECT
    year,
    'Food availability' AS driver,
    food_availability_pressure_score * 100 AS score_pct
FROM filtered_country

ORDER BY year, driver`;a.driver_scores_data&&(a.driver_scores_data instanceof Error?Q.initialError=a.driver_scores_data:Q.initialData=a.driver_scores_data,a.driver_scores_columns&&(Q.knownColumns=a.driver_scores_columns));let Oe,pe=!1;const Ne=He.createReactive({callback:ee=>{r(5,Oe=ee)},execFn:p},{id:"driver_scores",...Q});Ne(ne,{noResolve:m,...Q}),globalThis[Symbol.for("driver_scores")]={get value(){return Oe}};let Se={initialData:void 0,initialError:void 0},ke=Re`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    ROUND(c.undernourishment_prevalence_pct, 1) AS undernourishment_percent,
    ROUND(c.food_price_inflation_pct, 1) AS food_inflation_percent,
    ROUND(c.gdp_per_capita_current_usd, 0) AS gdp_per_capita_usd,
    ROUND(TRY_CAST(c.food_supply_variability_kcal AS DOUBLE), 1) AS supply_variability_kcal,
    ROUND(c.overall_pressure_score, 2) AS pressure_score,
    c.main_pressure_driver
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`,Me=`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    ROUND(c.undernourishment_prevalence_pct, 1) AS undernourishment_percent,
    ROUND(c.food_price_inflation_pct, 1) AS food_inflation_percent,
    ROUND(c.gdp_per_capita_current_usd, 0) AS gdp_per_capita_usd,
    ROUND(TRY_CAST(c.food_supply_variability_kcal AS DOUBLE), 1) AS supply_variability_kcal,
    ROUND(c.overall_pressure_score, 2) AS pressure_score,
    c.main_pressure_driver
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`;a.country_detail_data&&(a.country_detail_data instanceof Error?Se.initialError=a.country_detail_data:Se.initialData=a.country_detail_data,a.country_detail_columns&&(Se.knownColumns=a.country_detail_columns));let De,Ce=!1;const Fe=He.createReactive({callback:ee=>{r(6,De=ee)},execFn:p},{id:"country_detail",...Se});return Fe(Me,{noResolve:ke,...Se}),globalThis[Symbol.for("country_detail")]={get value(){return De}},o.$$set=ee=>{"data"in ee&&r(7,s=ee.data)},o.$$.update=()=>{o.$$.dirty[0]&128&&r(8,{data:a={},customFormattingSettings:l,__db:c}=s,a),o.$$.dirty[0]&256&&Ur.set(Object.keys(a).length>0),o.$$.dirty[1]&128&&t.params,o.$$.dirty[0]&15360&&(F||!k?F||(j(U,{noResolve:F,...S}),r(13,k=!0)):j(U,{noResolve:F})),o.$$.dirty[0]&512&&r(15,re=Re`SELECT
    5 AS min_years,
    COUNT(DISTINCT year) AS max_years,
    LEAST(5, COUNT(DISTINCT year)) AS default_years
FROM food_security.country_food_security_yearly
WHERE country_code = '${i.selected_country.value}'`),o.$$.dirty[0]&512&&r(16,te=`SELECT
    5 AS min_years,
    COUNT(DISTINCT year) AS max_years,
    LEAST(5, COUNT(DISTINCT year)) AS default_years
FROM food_security.country_food_security_yearly
WHERE country_code = '${i.selected_country.value}'`),o.$$.dirty[0]&245760&&(re||!M?re||(d(te,{noResolve:re,...C}),r(17,M=!0)):d(te,{noResolve:re})),o.$$.dirty[0]&512&&r(19,b=Re`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
),

country_data AS (
    SELECT
        c.country_name,
        c.year,
        c.overall_pressure_score,
        c.undernourishment_prevalence_pct
    FROM food_security.country_food_security_yearly AS c
    CROSS JOIN country_years AS cy
    WHERE c.country_code = '${i.selected_country.value}'
      AND c.year >= cy.max_year - ${i.years_to_show} + 1
),

ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (ORDER BY year ASC) AS first_year_rank,
        ROW_NUMBER() OVER (ORDER BY year DESC) AS last_year_rank
    FROM country_data
)

SELECT
    country_name,
    MIN(year) AS first_year,
    MAX(year) AS last_year,

    ROUND(AVG(overall_pressure_score), 2) AS avg_pressure_score,
    ROUND(MAX(undernourishment_prevalence_pct), 1) AS max_undernourishment_percent,

    ROUND(
        MAX(CASE WHEN last_year_rank = 1 THEN undernourishment_prevalence_pct END)
        -
        MAX(CASE WHEN first_year_rank = 1 THEN undernourishment_prevalence_pct END),
        1
    ) AS undernourishment_change_pp,

    CAST(ROUND(AVG(overall_pressure_score), 2) AS VARCHAR) AS avg_pressure_score_display,
    CAST(ROUND(MAX(undernourishment_prevalence_pct), 1) AS VARCHAR) || '%' AS max_undernourishment_display,
    CAST(ROUND(
        MAX(CASE WHEN last_year_rank = 1 THEN undernourishment_prevalence_pct END)
        -
        MAX(CASE WHEN first_year_rank = 1 THEN undernourishment_prevalence_pct END),
        1
    ) AS VARCHAR) || ' pp' AS undernourishment_change_display

FROM ranked
GROUP BY country_name`),o.$$.dirty[0]&512&&r(20,D=`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
),

country_data AS (
    SELECT
        c.country_name,
        c.year,
        c.overall_pressure_score,
        c.undernourishment_prevalence_pct
    FROM food_security.country_food_security_yearly AS c
    CROSS JOIN country_years AS cy
    WHERE c.country_code = '${i.selected_country.value}'
      AND c.year >= cy.max_year - ${i.years_to_show} + 1
),

ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (ORDER BY year ASC) AS first_year_rank,
        ROW_NUMBER() OVER (ORDER BY year DESC) AS last_year_rank
    FROM country_data
)

SELECT
    country_name,
    MIN(year) AS first_year,
    MAX(year) AS last_year,

    ROUND(AVG(overall_pressure_score), 2) AS avg_pressure_score,
    ROUND(MAX(undernourishment_prevalence_pct), 1) AS max_undernourishment_percent,

    ROUND(
        MAX(CASE WHEN last_year_rank = 1 THEN undernourishment_prevalence_pct END)
        -
        MAX(CASE WHEN first_year_rank = 1 THEN undernourishment_prevalence_pct END),
        1
    ) AS undernourishment_change_pp,

    CAST(ROUND(AVG(overall_pressure_score), 2) AS VARCHAR) AS avg_pressure_score_display,
    CAST(ROUND(MAX(undernourishment_prevalence_pct), 1) AS VARCHAR) || '%' AS max_undernourishment_display,
    CAST(ROUND(
        MAX(CASE WHEN last_year_rank = 1 THEN undernourishment_prevalence_pct END)
        -
        MAX(CASE WHEN first_year_rank = 1 THEN undernourishment_prevalence_pct END),
        1
    ) AS VARCHAR) || ' pp' AS undernourishment_change_display

FROM ranked
GROUP BY country_name`),o.$$.dirty[0]&3932160&&(b||!O?b||(h(D,{noResolve:b,...g}),r(21,O=!0)):h(D,{noResolve:b})),o.$$.dirty[0]&512&&r(23,q=Re`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    c.undernourishment_prevalence_pct AS undernourishment_percent
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`),o.$$.dirty[0]&512&&r(24,x=`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    c.undernourishment_prevalence_pct AS undernourishment_percent
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`),o.$$.dirty[0]&62914560&&(q||!V?q||(L(x,{noResolve:q,...w}),r(25,V=!0)):L(x,{noResolve:q})),o.$$.dirty[0]&512&&r(27,X=Re`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    c.overall_pressure_score * 100 AS pressure_score_pct
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`),o.$$.dirty[0]&512&&r(28,$=`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    c.overall_pressure_score * 100 AS pressure_score_pct
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`),o.$$.dirty[0]&1006632960&&(X||!he?X||(Z($,{noResolve:X,...T}),r(29,he=!0)):Z($,{noResolve:X})),o.$$.dirty[0]&512&&r(31,m=Re`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
),

filtered_country AS (
    SELECT
        c.*
    FROM food_security.country_food_security_yearly AS c
    CROSS JOIN country_years AS cy
    WHERE c.country_code = '${i.selected_country.value}'
      AND c.year >= cy.max_year - ${i.years_to_show} + 1
)

SELECT
    year,
    'Price pressure' AS driver,
    price_pressure_score * 100 AS score_pct
FROM filtered_country

UNION ALL

SELECT
    year,
    'Economic vulnerability' AS driver,
    economic_vulnerability_score * 100 AS score_pct
FROM filtered_country

UNION ALL

SELECT
    year,
    'Food availability' AS driver,
    food_availability_pressure_score * 100 AS score_pct
FROM filtered_country

ORDER BY year, driver`),o.$$.dirty[0]&512&&r(32,ne=`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
),

filtered_country AS (
    SELECT
        c.*
    FROM food_security.country_food_security_yearly AS c
    CROSS JOIN country_years AS cy
    WHERE c.country_code = '${i.selected_country.value}'
      AND c.year >= cy.max_year - ${i.years_to_show} + 1
)

SELECT
    year,
    'Price pressure' AS driver,
    price_pressure_score * 100 AS score_pct
FROM filtered_country

UNION ALL

SELECT
    year,
    'Economic vulnerability' AS driver,
    economic_vulnerability_score * 100 AS score_pct
FROM filtered_country

UNION ALL

SELECT
    year,
    'Food availability' AS driver,
    food_availability_pressure_score * 100 AS score_pct
FROM filtered_country

ORDER BY year, driver`),o.$$.dirty[0]&1073741824|o.$$.dirty[1]&7&&(m||!pe?m||(Ne(ne,{noResolve:m,...Q}),r(33,pe=!0)):Ne(ne,{noResolve:m})),o.$$.dirty[0]&512&&r(35,ke=Re`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    ROUND(c.undernourishment_prevalence_pct, 1) AS undernourishment_percent,
    ROUND(c.food_price_inflation_pct, 1) AS food_inflation_percent,
    ROUND(c.gdp_per_capita_current_usd, 0) AS gdp_per_capita_usd,
    ROUND(TRY_CAST(c.food_supply_variability_kcal AS DOUBLE), 1) AS supply_variability_kcal,
    ROUND(c.overall_pressure_score, 2) AS pressure_score,
    c.main_pressure_driver
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`),o.$$.dirty[0]&512&&r(36,Me=`WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${i.selected_country.value}'
)

SELECT
    c.year,
    ROUND(c.undernourishment_prevalence_pct, 1) AS undernourishment_percent,
    ROUND(c.food_price_inflation_pct, 1) AS food_inflation_percent,
    ROUND(c.gdp_per_capita_current_usd, 0) AS gdp_per_capita_usd,
    ROUND(TRY_CAST(c.food_supply_variability_kcal AS DOUBLE), 1) AS supply_variability_kcal,
    ROUND(c.overall_pressure_score, 2) AS pressure_score,
    c.main_pressure_driver
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${i.selected_country.value}'
  AND c.year >= cy.max_year - ${i.years_to_show} + 1
ORDER BY c.year`),o.$$.dirty[1]&120&&(ke||!Ce?ke||(Fe(Me,{noResolve:ke,...Se}),r(37,Ce=!0)):Fe(Me,{noResolve:ke}))},r(11,F=Re`SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name`),r(12,U=`SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name`),[_,K,W,ie,oe,Oe,De,s,a,i,S,F,U,k,C,re,te,M,g,b,D,O,w,q,x,V,T,X,$,he,Q,m,ne,pe,Se,ke,Me,Ce,t]}class oo extends Je{constructor(e){super(),ze(this,e,Yn,qn,Ye,{data:7},null,[-1,-1])}}export{oo as component};
