import{s as Mr,d as u,i as y,a as w,b as f,c as E,h as wr,e as A,f as dr,g as Ke,r as ee,t as ur,j as v,k as $,u as yr,l as Ar,m as kr,o as Ur,n as Wr,p as qr,q as ir}from"../chunks/scheduler.DYsEJJnm.js";import{S as Pr,i as Vr,d as R,t as p,a as d,c as Me,m as T,b as N,e as b,g as we}from"../chunks/index.DaDwQE1z.js";import{e as Br,s as Xr,Q as ke,p as Yr,a as $r,r as Rr,b as Gr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.g7EbO4ob.js";import{w as jr}from"../chunks/entry.BDWoJMlz.js";import{h as P,p as Qr}from"../chunks/button.CINbfvFT.js";import{D as mr,V as Tr,Q as Ue}from"../chunks/Value.CcRBK5G0.js";import{p as Kr}from"../chunks/stores.Cha3SC68.js";import{G as Nr}from"../chunks/Grid.1SUOIOrv.js";import{B as xr}from"../chunks/BarChart.BPB-cUoI.js";import{B as xe}from"../chunks/BigValue.BYzmFFfH.js";import{L as br}from"../chunks/LineChart.CfxDwx_C.js";function zr(c){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:ir,p:ir,d:ir}}function Jr(c){let t,o,r,s,l;return document.title=t=L.title,{c(){o=v(),r=$("meta"),s=v(),l=$("meta"),this.h()},l(a){o=E(a),r=A(a,"META",{property:!0,content:!0}),s=E(a),l=A(a,"META",{name:!0,content:!0}),this.h()},h(){var a,i;f(r,"property","og:title"),f(r,"content",((a=L.og)==null?void 0:a.title)??L.title),f(l,"name","twitter:title"),f(l,"content",((i=L.og)==null?void 0:i.title)??L.title)},m(a,i){y(a,o,i),y(a,r,i),y(a,s,i),y(a,l,i)},p(a,i){i&0&&t!==(t=L.title)&&(document.title=t)},d(a){a&&(u(o),u(r),u(s),u(l))}}}function Zr(c){var l,a;let t,o,r=(L.description||((l=L.og)==null?void 0:l.description))&&et(),s=((a=L.og)==null?void 0:a.image)&&rt();return{c(){r&&r.c(),t=v(),s&&s.c(),o=dr()},l(i){r&&r.l(i),t=E(i),s&&s.l(i),o=dr()},m(i,m){r&&r.m(i,m),y(i,t,m),s&&s.m(i,m),y(i,o,m)},p(i,m){var n,z;(L.description||(n=L.og)!=null&&n.description)&&r.p(i,m),(z=L.og)!=null&&z.image&&s.p(i,m)},d(i){i&&(u(t),u(o)),r&&r.d(i),s&&s.d(i)}}}function et(c){let t,o,r,s,l;return{c(){t=$("meta"),o=v(),r=$("meta"),s=v(),l=$("meta"),this.h()},l(a){t=A(a,"META",{name:!0,content:!0}),o=E(a),r=A(a,"META",{property:!0,content:!0}),s=E(a),l=A(a,"META",{name:!0,content:!0}),this.h()},h(){var a,i,m;f(t,"name","description"),f(t,"content",L.description??((a=L.og)==null?void 0:a.description)),f(r,"property","og:description"),f(r,"content",((i=L.og)==null?void 0:i.description)??L.description),f(l,"name","twitter:description"),f(l,"content",((m=L.og)==null?void 0:m.description)??L.description)},m(a,i){y(a,t,i),y(a,o,i),y(a,r,i),y(a,s,i),y(a,l,i)},p:ir,d(a){a&&(u(t),u(o),u(r),u(s),u(l))}}}function rt(c){let t,o,r;return{c(){t=$("meta"),o=v(),r=$("meta"),this.h()},l(s){t=A(s,"META",{property:!0,content:!0}),o=E(s),r=A(s,"META",{name:!0,content:!0}),this.h()},h(){var s,l;f(t,"property","og:image"),f(t,"content",$r((s=L.og)==null?void 0:s.image)),f(r,"name","twitter:image"),f(r,"content",$r((l=L.og)==null?void 0:l.image))},m(s,l){y(s,t,l),y(s,o,l),y(s,r,l)},p:ir,d(s){s&&(u(t),u(o),u(r))}}}function Lr(c){let t,o;return t=new Ue({props:{queryID:"country_filter",queryResult:c[0]}}),{c(){b(t.$$.fragment)},l(r){N(t.$$.fragment,r)},m(r,s){T(t,r,s),o=!0},p(r,s){const l={};s[0]&1&&(l.queryResult=r[0]),t.$set(l)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){R(t,r)}}}function Cr(c){let t,o;return t=new Ue({props:{queryID:"latest_year",queryResult:c[1]}}),{c(){b(t.$$.fragment)},l(r){N(t.$$.fragment,r)},m(r,s){T(t,r,s),o=!0},p(r,s){const l={};s[0]&2&&(l.queryResult=r[1]),t.$set(l)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){R(t,r)}}}function gr(c){let t,o;return t=new Ue({props:{queryID:"country_a_snapshot",queryResult:c[2]}}),{c(){b(t.$$.fragment)},l(r){N(t.$$.fragment,r)},m(r,s){T(t,r,s),o=!0},p(r,s){const l={};s[0]&4&&(l.queryResult=r[2]),t.$set(l)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){R(t,r)}}}function hr(c){let t,o;return t=new Ue({props:{queryID:"country_b_snapshot",queryResult:c[3]}}),{c(){b(t.$$.fragment)},l(r){N(t.$$.fragment,r)},m(r,s){T(t,r,s),o=!0},p(r,s){const l={};s[0]&8&&(l.queryResult=r[3]),t.$set(l)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){R(t,r)}}}function tt(c){let t,o,r,s,l,a;return t=new xe({props:{data:c[2],value:"pressure_score_display",title:"Pressure Score"}}),r=new xe({props:{data:c[2],value:"undernourishment_display",title:"Undernourishment"}}),l=new xe({props:{data:c[2],value:"main_pressure_driver",title:"Main Driver"}}),{c(){b(t.$$.fragment),o=v(),b(r.$$.fragment),s=v(),b(l.$$.fragment)},l(i){N(t.$$.fragment,i),o=E(i),N(r.$$.fragment,i),s=E(i),N(l.$$.fragment,i)},m(i,m){T(t,i,m),y(i,o,m),T(r,i,m),y(i,s,m),T(l,i,m),a=!0},p(i,m){const n={};m[0]&4&&(n.data=i[2]),t.$set(n);const z={};m[0]&4&&(z.data=i[2]),r.$set(z);const C={};m[0]&4&&(C.data=i[2]),l.$set(C)},i(i){a||(d(t.$$.fragment,i),d(r.$$.fragment,i),d(l.$$.fragment,i),a=!0)},o(i){p(t.$$.fragment,i),p(r.$$.fragment,i),p(l.$$.fragment,i),a=!1},d(i){i&&(u(o),u(s)),R(t,i),R(r,i),R(l,i)}}}function ot(c){let t,o,r,s,l,a;return t=new xe({props:{data:c[3],value:"pressure_score_display",title:"Pressure Score"}}),r=new xe({props:{data:c[3],value:"undernourishment_display",title:"Undernourishment"}}),l=new xe({props:{data:c[3],value:"main_pressure_driver",title:"Main Driver"}}),{c(){b(t.$$.fragment),o=v(),b(r.$$.fragment),s=v(),b(l.$$.fragment)},l(i){N(t.$$.fragment,i),o=E(i),N(r.$$.fragment,i),s=E(i),N(l.$$.fragment,i)},m(i,m){T(t,i,m),y(i,o,m),T(r,i,m),y(i,s,m),T(l,i,m),a=!0},p(i,m){const n={};m[0]&8&&(n.data=i[3]),t.$set(n);const z={};m[0]&8&&(z.data=i[3]),r.$set(z);const C={};m[0]&8&&(C.data=i[3]),l.$set(C)},i(i){a||(d(t.$$.fragment,i),d(r.$$.fragment,i),d(l.$$.fragment,i),a=!0)},o(i){p(t.$$.fragment,i),p(r.$$.fragment,i),p(l.$$.fragment,i),a=!1},d(i){i&&(u(o),u(s)),R(t,i),R(r,i),R(l,i)}}}function Or(c){let t,o;return t=new Ue({props:{queryID:"pressure_comparison",queryResult:c[4]}}),{c(){b(t.$$.fragment)},l(r){N(t.$$.fragment,r)},m(r,s){T(t,r,s),o=!0},p(r,s){const l={};s[0]&16&&(l.queryResult=r[4]),t.$set(l)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){R(t,r)}}}function Hr(c){let t,o;return t=new Ue({props:{queryID:"indicator_filter",queryResult:c[5]}}),{c(){b(t.$$.fragment)},l(r){N(t.$$.fragment,r)},m(r,s){T(t,r,s),o=!0},p(r,s){const l={};s[0]&32&&(l.queryResult=r[5]),t.$set(l)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){R(t,r)}}}function Dr(c){let t,o;return t=new Ue({props:{queryID:"selected_indicator_trend",queryResult:c[6]}}),{c(){b(t.$$.fragment)},l(r){N(t.$$.fragment,r)},m(r,s){T(t,r,s),o=!0},p(r,s){const l={};s[0]&64&&(l.queryResult=r[6]),t.$set(l)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){R(t,r)}}}function Ir(c){let t,o;return t=new Ue({props:{queryID:"driver_score_comparison",queryResult:c[7]}}),{c(){b(t.$$.fragment)},l(r){N(t.$$.fragment,r)},m(r,s){T(t,r,s),o=!0},p(r,s){const l={};s[0]&128&&(l.queryResult=r[7]),t.$set(l)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){R(t,r)}}}function at(c){let t,o,r,s,l,a,i='<a href="#compare-countries">Compare Countries</a>',m,n,z="Compare food security pressure, undernourishment, selected indicators, and pressure drivers between two countries.",C,q,de='<a href="/food-security-pipeline/" class="markdown">Back to Overview</a>',fe,pe,me,Ee,B,k,X,ve,Se,re,ue,Y,te,oe,We,ae,G,j,Q,qe,ie,Ce,U,ye,K,Pe,ge,Te,ne,W,he='<a href="#overall-pressure-score-over-time">Overall Pressure Score Over Time</a>',Oe,Ae,_e,ce,J,$e,Z,Ge='<a href="#selected-indicator-over-time">Selected Indicator Over Time</a>',He,x,V,se,le,De,Re,S,je,ze,nr,Ne,Er='<a href="#driver-score-comparison">Driver Score Comparison</a>',_r,be,fr,Ie,pr,cr,Qe,Fe,sr;function Fr(e,_){return typeof L<"u"&&L.title?Jr:zr}let Je=Fr()(c),Le=typeof L=="object"&&Zr(),g=c[0]&&Lr(c),h=c[1]&&Cr(c),O=c[2]&&gr(c),H=c[3]&&hr(c);re=new mr({props:{data:c[0],name:"country_a",value:"country_code",label:"country_name",defaultValue:"HTI",title:"Country A"}}),oe=new Nr({props:{cols:"1",$$slots:{default:[tt]},$$scope:{ctx:c}}}),Q=new mr({props:{data:c[0],name:"country_b",value:"country_code",label:"country_name",defaultValue:"DOM",title:"Country B"}}),ie=new Nr({props:{cols:"1",$$slots:{default:[ot]},$$scope:{ctx:c}}}),K=new Tr({props:{data:c[1],column:"year",fmt:"0"}});let D=c[4]&&Or(c);_e=new br({props:{data:c[4],x:"year",y:"pressure_score",series:"country_name",xType:"category",yFmt:"pct",colorPalette:["#B85C38","#D99A74"],echartsOptions:{color:["#B85C38","#D99A74"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{splitLine:{show:!0,lineStyle:{color:"#F5F5F5",width:1,type:"solid"}}},xAxis:{splitLine:{show:!1}}}}});let I=c[5]&&Hr(c);le=new mr({props:{data:c[5],name:"selected_indicator",value:"indicator",label:"indicator_label",defaultValue:"undernourishment_prevalence_pct",title:"Indicator"}});let F=c[6]&&Dr(c);S=new br({props:{data:c[6],x:"year",y:"indicator_value",series:"country_name",xType:"category",colorPalette:["#B85C38","#D99A74"],echartsOptions:{color:["#B85C38","#D99A74"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{splitLine:{show:!0,lineStyle:{color:"#F5F5F5",width:1,type:"solid"}}},xAxis:{splitLine:{show:!1}}}}}),Ie=new Tr({props:{data:c[1],column:"year",fmt:"0"}});let M=c[7]&&Ir(c);return Fe=new xr({props:{data:c[7],x:"driver",y:"score",series:"country_name",type:"grouped",yFmt:"pct",echartsOptions:{color:["#B85C38","#D99A74"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{max:1,splitLine:{show:!0,lineStyle:{color:"#F5F5F5",width:1,type:"solid"}}},xAxis:{splitLine:{show:!1}}}}}),{c(){t=v(),Je.c(),o=$("meta"),r=$("meta"),Le&&Le.c(),s=dr(),l=v(),a=$("h1"),a.innerHTML=i,m=v(),n=$("p"),n.textContent=z,C=v(),q=$("p"),q.innerHTML=de,fe=v(),g&&g.c(),pe=v(),h&&h.c(),me=v(),O&&O.c(),Ee=v(),H&&H.c(),B=v(),k=$("div"),X=$("div"),ve=$("div"),Se=$("div"),b(re.$$.fragment),ue=v(),Y=$("div"),te=$("div"),b(oe.$$.fragment),We=v(),ae=$("div"),G=$("div"),j=$("div"),b(Q.$$.fragment),qe=v(),b(ie.$$.fragment),Ce=v(),U=$("div"),ye=yr("Showing latest available year: "),b(K.$$.fragment),Pe=yr("."),ge=v(),Te=$("hr"),ne=v(),W=$("h2"),W.innerHTML=he,Oe=v(),D&&D.c(),Ae=v(),b(_e.$$.fragment),ce=v(),J=$("hr"),$e=v(),Z=$("h2"),Z.innerHTML=Ge,He=v(),I&&I.c(),x=v(),V=$("div"),se=$("div"),b(le.$$.fragment),De=v(),F&&F.c(),Re=v(),b(S.$$.fragment),je=v(),ze=$("hr"),nr=v(),Ne=$("h2"),Ne.innerHTML=Er,_r=v(),be=$("div"),fr=yr("Driver scores shown for "),b(Ie.$$.fragment),pr=yr("."),cr=v(),M&&M.c(),Qe=v(),b(Fe.$$.fragment),this.h()},l(e){t=E(e);const _=wr("svelte-2igo1p",document.head);Je.l(_),o=A(_,"META",{name:!0,content:!0}),r=A(_,"META",{name:!0,content:!0}),Le&&Le.l(_),s=dr(),_.forEach(u),l=E(e),a=A(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Ke(a)!=="svelte-1de2hir"&&(a.innerHTML=i),m=E(e),n=A(e,"P",{class:!0,"data-svelte-h":!0}),Ke(n)!=="svelte-15351pq"&&(n.textContent=z),C=E(e),q=A(e,"P",{class:!0,"data-svelte-h":!0}),Ke(q)!=="svelte-rsd8gs"&&(q.innerHTML=de),fe=E(e),g&&g.l(e),pe=E(e),h&&h.l(e),me=E(e),O&&O.l(e),Ee=E(e),H&&H.l(e),B=E(e),k=A(e,"DIV",{class:!0});var Ve=ee(k);X=A(Ve,"DIV",{class:!0});var Be=ee(X);ve=A(Be,"DIV",{class:!0});var Ze=ee(ve);Se=A(Ze,"DIV",{class:!0});var er=ee(Se);N(re.$$.fragment,er),er.forEach(u),Ze.forEach(u),ue=E(Be),Y=A(Be,"DIV",{class:!0});var rr=ee(Y);te=A(rr,"DIV",{class:!0});var tr=ee(te);N(oe.$$.fragment,tr),tr.forEach(u),rr.forEach(u),Be.forEach(u),We=E(Ve),ae=A(Ve,"DIV",{class:!0});var Xe=ee(ae);G=A(Xe,"DIV",{class:!0});var or=ee(G);j=A(or,"DIV",{class:!0});var ar=ee(j);N(Q.$$.fragment,ar),ar.forEach(u),or.forEach(u),qe=E(Xe),N(ie.$$.fragment,Xe),Xe.forEach(u),Ve.forEach(u),Ce=E(e),U=A(e,"DIV",{class:!0});var Ye=ee(U);ye=ur(Ye,"Showing latest available year: "),N(K.$$.fragment,Ye),Pe=ur(Ye,"."),Ye.forEach(u),ge=E(e),Te=A(e,"HR",{class:!0}),ne=E(e),W=A(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ke(W)!=="svelte-dt9rfb"&&(W.innerHTML=he),Oe=E(e),D&&D.l(e),Ae=E(e),N(_e.$$.fragment,e),ce=E(e),J=A(e,"HR",{class:!0}),$e=E(e),Z=A(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ke(Z)!=="svelte-p77gu9"&&(Z.innerHTML=Ge),He=E(e),I&&I.l(e),x=E(e),V=A(e,"DIV",{class:!0});var vr=ee(V);se=A(vr,"DIV",{class:!0});var Sr=ee(se);N(le.$$.fragment,Sr),Sr.forEach(u),vr.forEach(u),De=E(e),F&&F.l(e),Re=E(e),N(S.$$.fragment,e),je=E(e),ze=A(e,"HR",{class:!0}),nr=E(e),Ne=A(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ke(Ne)!=="svelte-1lnd8eb"&&(Ne.innerHTML=Er),_r=E(e),be=A(e,"DIV",{class:!0});var lr=ee(be);fr=ur(lr,"Driver scores shown for "),N(Ie.$$.fragment,lr),pr=ur(lr,"."),lr.forEach(u),cr=E(e),M&&M.l(e),Qe=E(e),N(Fe.$$.fragment,e),this.h()},h(){f(o,"name","twitter:card"),f(o,"content","summary_large_image"),f(r,"name","twitter:site"),f(r,"content","@evidence_dev"),f(a,"class","markdown"),f(a,"id","compare-countries"),f(n,"class","markdown"),f(q,"class","markdown"),f(Se,"class","w-72 text-right"),f(ve,"class","flex justify-end text-right"),f(te,"class","w-72 text-right"),f(Y,"class","flex justify-end text-right"),f(X,"class","pr-8 border-r border-gray-200"),f(j,"class","w-72"),f(G,"class","flex justify-start"),f(ae,"class","pl-4"),f(k,"class","grid grid-cols-2 gap-8"),f(U,"class","text-sm text-gray-500 mt-2 text-center"),f(Te,"class","markdown"),f(W,"class","markdown"),f(W,"id","overall-pressure-score-over-time"),f(J,"class","markdown"),f(Z,"class","markdown"),f(Z,"id","selected-indicator-over-time"),f(se,"class","w-72"),f(V,"class","flex justify-end"),f(ze,"class","markdown"),f(Ne,"class","markdown"),f(Ne,"id","driver-score-comparison"),f(be,"class","text-sm text-gray-500")},m(e,_){y(e,t,_),Je.m(document.head,null),w(document.head,o),w(document.head,r),Le&&Le.m(document.head,null),w(document.head,s),y(e,l,_),y(e,a,_),y(e,m,_),y(e,n,_),y(e,C,_),y(e,q,_),y(e,fe,_),g&&g.m(e,_),y(e,pe,_),h&&h.m(e,_),y(e,me,_),O&&O.m(e,_),y(e,Ee,_),H&&H.m(e,_),y(e,B,_),y(e,k,_),w(k,X),w(X,ve),w(ve,Se),T(re,Se,null),w(X,ue),w(X,Y),w(Y,te),T(oe,te,null),w(k,We),w(k,ae),w(ae,G),w(G,j),T(Q,j,null),w(ae,qe),T(ie,ae,null),y(e,Ce,_),y(e,U,_),w(U,ye),T(K,U,null),w(U,Pe),y(e,ge,_),y(e,Te,_),y(e,ne,_),y(e,W,_),y(e,Oe,_),D&&D.m(e,_),y(e,Ae,_),T(_e,e,_),y(e,ce,_),y(e,J,_),y(e,$e,_),y(e,Z,_),y(e,He,_),I&&I.m(e,_),y(e,x,_),y(e,V,_),w(V,se),T(le,se,null),y(e,De,_),F&&F.m(e,_),y(e,Re,_),T(S,e,_),y(e,je,_),y(e,ze,_),y(e,nr,_),y(e,Ne,_),y(e,_r,_),y(e,be,_),w(be,fr),T(Ie,be,null),w(be,pr),y(e,cr,_),M&&M.m(e,_),y(e,Qe,_),T(Fe,e,_),sr=!0},p(e,_){Je.p(e,_),typeof L=="object"&&Le.p(e,_),e[0]?g?(g.p(e,_),_[0]&1&&d(g,1)):(g=Lr(e),g.c(),d(g,1),g.m(pe.parentNode,pe)):g&&(we(),p(g,1,1,()=>{g=null}),Me()),e[1]?h?(h.p(e,_),_[0]&2&&d(h,1)):(h=Cr(e),h.c(),d(h,1),h.m(me.parentNode,me)):h&&(we(),p(h,1,1,()=>{h=null}),Me()),e[2]?O?(O.p(e,_),_[0]&4&&d(O,1)):(O=gr(e),O.c(),d(O,1),O.m(Ee.parentNode,Ee)):O&&(we(),p(O,1,1,()=>{O=null}),Me()),e[3]?H?(H.p(e,_),_[0]&8&&d(H,1)):(H=hr(e),H.c(),d(H,1),H.m(B.parentNode,B)):H&&(we(),p(H,1,1,()=>{H=null}),Me());const Ve={};_[0]&1&&(Ve.data=e[0]),re.$set(Ve);const Be={};_[0]&4|_[1]&536870912&&(Be.$$scope={dirty:_,ctx:e}),oe.$set(Be);const Ze={};_[0]&1&&(Ze.data=e[0]),Q.$set(Ze);const er={};_[0]&8|_[1]&536870912&&(er.$$scope={dirty:_,ctx:e}),ie.$set(er);const rr={};_[0]&2&&(rr.data=e[1]),K.$set(rr),e[4]?D?(D.p(e,_),_[0]&16&&d(D,1)):(D=Or(e),D.c(),d(D,1),D.m(Ae.parentNode,Ae)):D&&(we(),p(D,1,1,()=>{D=null}),Me());const tr={};_[0]&16&&(tr.data=e[4]),_e.$set(tr),e[5]?I?(I.p(e,_),_[0]&32&&d(I,1)):(I=Hr(e),I.c(),d(I,1),I.m(x.parentNode,x)):I&&(we(),p(I,1,1,()=>{I=null}),Me());const Xe={};_[0]&32&&(Xe.data=e[5]),le.$set(Xe),e[6]?F?(F.p(e,_),_[0]&64&&d(F,1)):(F=Dr(e),F.c(),d(F,1),F.m(Re.parentNode,Re)):F&&(we(),p(F,1,1,()=>{F=null}),Me());const or={};_[0]&64&&(or.data=e[6]),S.$set(or);const ar={};_[0]&2&&(ar.data=e[1]),Ie.$set(ar),e[7]?M?(M.p(e,_),_[0]&128&&d(M,1)):(M=Ir(e),M.c(),d(M,1),M.m(Qe.parentNode,Qe)):M&&(we(),p(M,1,1,()=>{M=null}),Me());const Ye={};_[0]&128&&(Ye.data=e[7]),Fe.$set(Ye)},i(e){sr||(d(g),d(h),d(O),d(H),d(re.$$.fragment,e),d(oe.$$.fragment,e),d(Q.$$.fragment,e),d(ie.$$.fragment,e),d(K.$$.fragment,e),d(D),d(_e.$$.fragment,e),d(I),d(le.$$.fragment,e),d(F),d(S.$$.fragment,e),d(Ie.$$.fragment,e),d(M),d(Fe.$$.fragment,e),sr=!0)},o(e){p(g),p(h),p(O),p(H),p(re.$$.fragment,e),p(oe.$$.fragment,e),p(Q.$$.fragment,e),p(ie.$$.fragment,e),p(K.$$.fragment,e),p(D),p(_e.$$.fragment,e),p(I),p(le.$$.fragment,e),p(F),p(S.$$.fragment,e),p(Ie.$$.fragment,e),p(M),p(Fe.$$.fragment,e),sr=!1},d(e){e&&(u(t),u(l),u(a),u(m),u(n),u(C),u(q),u(fe),u(pe),u(me),u(Ee),u(B),u(k),u(Ce),u(U),u(ge),u(Te),u(ne),u(W),u(Oe),u(Ae),u(ce),u(J),u($e),u(Z),u(He),u(x),u(V),u(De),u(Re),u(je),u(ze),u(nr),u(Ne),u(_r),u(be),u(cr),u(Qe)),Je.d(e),u(o),u(r),Le&&Le.d(e),u(s),g&&g.d(e),h&&h.d(e),O&&O.d(e),H&&H.d(e),R(re),R(oe),R(Q),R(ie),R(K),D&&D.d(e),R(_e,e),I&&I.d(e),R(le),F&&F.d(e),R(S,e),R(Ie),M&&M.d(e),R(Fe,e)}}}const L={title:"Compare"};function it(c,t,o){let r,s;Ar(c,Kr,S=>o(43,r=S)),Ar(c,Rr,S=>o(48,s=S));let{data:l}=t,{data:a={},customFormattingSettings:i,__db:m,inputs:n}=l;kr(Rr,s="03489fe524e1c5a3f40cc22e461cb93d",s);let z=Br(jr(n));Ur(z.subscribe(S=>o(10,n=S))),Wr(Gr,{getCustomFormats:()=>i.customFormats||[]});const C=(S,je)=>Qr(m.query,S,{query_name:je});Xr(C),r.params,qr(()=>!0);let q={initialData:void 0,initialError:void 0},de=P`SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name`,fe=`SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name`;a.country_filter_data&&(a.country_filter_data instanceof Error?q.initialError=a.country_filter_data:q.initialData=a.country_filter_data,a.country_filter_columns&&(q.knownColumns=a.country_filter_columns));let pe,me=!1;const Ee=ke.createReactive({callback:S=>{o(0,pe=S)},execFn:C},{id:"country_filter",...q});Ee(fe,{noResolve:de,...q}),globalThis[Symbol.for("country_filter")]={get value(){return pe}};let B={initialData:void 0,initialError:void 0},k=P`SELECT
    MAX(year) AS year
FROM food_security.country_food_security_yearly`,X=`SELECT
    MAX(year) AS year
FROM food_security.country_food_security_yearly`;a.latest_year_data&&(a.latest_year_data instanceof Error?B.initialError=a.latest_year_data:B.initialData=a.latest_year_data,a.latest_year_columns&&(B.knownColumns=a.latest_year_columns));let ve,Se=!1;const re=ke.createReactive({callback:S=>{o(1,ve=S)},execFn:C},{id:"latest_year",...B});re(X,{noResolve:k,...B}),globalThis[Symbol.for("latest_year")]={get value(){return ve}};let ue={initialData:void 0,initialError:void 0},Y=P`SELECT
    country_name,
    CAST(ROUND(overall_pressure_score * 100, 0) AS INTEGER) || '%' AS pressure_score_display,
    CAST(ROUND(undernourishment_prevalence_pct, 1) AS VARCHAR) || '%' AS undernourishment_display,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code = '${n.country_a.value}'`,te=`SELECT
    country_name,
    CAST(ROUND(overall_pressure_score * 100, 0) AS INTEGER) || '%' AS pressure_score_display,
    CAST(ROUND(undernourishment_prevalence_pct, 1) AS VARCHAR) || '%' AS undernourishment_display,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code = '${n.country_a.value}'`;a.country_a_snapshot_data&&(a.country_a_snapshot_data instanceof Error?ue.initialError=a.country_a_snapshot_data:ue.initialData=a.country_a_snapshot_data,a.country_a_snapshot_columns&&(ue.knownColumns=a.country_a_snapshot_columns));let oe,We=!1;const ae=ke.createReactive({callback:S=>{o(2,oe=S)},execFn:C},{id:"country_a_snapshot",...ue});ae(te,{noResolve:Y,...ue}),globalThis[Symbol.for("country_a_snapshot")]={get value(){return oe}};let G={initialData:void 0,initialError:void 0},j=P`SELECT
    country_name,
    CAST(ROUND(overall_pressure_score * 100, 0) AS INTEGER) || '%' AS pressure_score_display,
    CAST(ROUND(undernourishment_prevalence_pct, 1) AS VARCHAR) || '%' AS undernourishment_display,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code = '${n.country_b.value}'`,Q=`SELECT
    country_name,
    CAST(ROUND(overall_pressure_score * 100, 0) AS INTEGER) || '%' AS pressure_score_display,
    CAST(ROUND(undernourishment_prevalence_pct, 1) AS VARCHAR) || '%' AS undernourishment_display,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code = '${n.country_b.value}'`;a.country_b_snapshot_data&&(a.country_b_snapshot_data instanceof Error?G.initialError=a.country_b_snapshot_data:G.initialData=a.country_b_snapshot_data,a.country_b_snapshot_columns&&(G.knownColumns=a.country_b_snapshot_columns));let qe,ie=!1;const Ce=ke.createReactive({callback:S=>{o(3,qe=S)},execFn:C},{id:"country_b_snapshot",...G});Ce(Q,{noResolve:j,...G}),globalThis[Symbol.for("country_b_snapshot")]={get value(){return qe}};let U={initialData:void 0,initialError:void 0},ye=P`SELECT
    year,
    country_name,
    overall_pressure_score AS pressure_score
FROM food_security.country_food_security_yearly
WHERE country_code IN (
    '${n.country_a.value}',
    '${n.country_b.value}'
)
ORDER BY year, country_name`,K=`SELECT
    year,
    country_name,
    overall_pressure_score AS pressure_score
FROM food_security.country_food_security_yearly
WHERE country_code IN (
    '${n.country_a.value}',
    '${n.country_b.value}'
)
ORDER BY year, country_name`;a.pressure_comparison_data&&(a.pressure_comparison_data instanceof Error?U.initialError=a.pressure_comparison_data:U.initialData=a.pressure_comparison_data,a.pressure_comparison_columns&&(U.knownColumns=a.pressure_comparison_columns));let Pe,ge=!1;const Te=ke.createReactive({callback:S=>{o(4,Pe=S)},execFn:C},{id:"pressure_comparison",...U});Te(K,{noResolve:ye,...U}),globalThis[Symbol.for("pressure_comparison")]={get value(){return Pe}};let ne={initialData:void 0,initialError:void 0},W=P`SELECT 'undernourishment_prevalence_pct' AS indicator, 'Undernourishment (%)' AS indicator_label

UNION ALL

SELECT 'food_price_inflation_pct' AS indicator, 'Food Price Inflation (%)' AS indicator_label

UNION ALL

SELECT 'gdp_per_capita_current_usd' AS indicator, 'GDP per Capita (Current USD)' AS indicator_label

UNION ALL

SELECT 'poverty_headcount_215_pct' AS indicator, 'Poverty Headcount (%)' AS indicator_label

UNION ALL

SELECT 'food_supply_variability_kcal' AS indicator, 'Food Supply Variability' AS indicator_label

UNION ALL

SELECT 'avg_temp_mean' AS indicator, 'Average Temperature (°C)' AS indicator_label

UNION ALL

SELECT 'total_precipitation' AS indicator, 'Total Precipitation' AS indicator_label`,he=`SELECT 'undernourishment_prevalence_pct' AS indicator, 'Undernourishment (%)' AS indicator_label

UNION ALL

SELECT 'food_price_inflation_pct' AS indicator, 'Food Price Inflation (%)' AS indicator_label

UNION ALL

SELECT 'gdp_per_capita_current_usd' AS indicator, 'GDP per Capita (Current USD)' AS indicator_label

UNION ALL

SELECT 'poverty_headcount_215_pct' AS indicator, 'Poverty Headcount (%)' AS indicator_label

UNION ALL

SELECT 'food_supply_variability_kcal' AS indicator, 'Food Supply Variability' AS indicator_label

UNION ALL

SELECT 'avg_temp_mean' AS indicator, 'Average Temperature (°C)' AS indicator_label

UNION ALL

SELECT 'total_precipitation' AS indicator, 'Total Precipitation' AS indicator_label`;a.indicator_filter_data&&(a.indicator_filter_data instanceof Error?ne.initialError=a.indicator_filter_data:ne.initialData=a.indicator_filter_data,a.indicator_filter_columns&&(ne.knownColumns=a.indicator_filter_columns));let Oe,Ae=!1;const _e=ke.createReactive({callback:S=>{o(5,Oe=S)},execFn:C},{id:"indicator_filter",...ne});_e(he,{noResolve:W,...ne}),globalThis[Symbol.for("indicator_filter")]={get value(){return Oe}};let ce={initialData:void 0,initialError:void 0},J=P`SELECT
    year,
    country_name,
    CASE
        WHEN '${n.selected_indicator.value}' = 'undernourishment_prevalence_pct'
            THEN undernourishment_prevalence_pct
        WHEN '${n.selected_indicator.value}' = 'food_price_inflation_pct'
            THEN food_price_inflation_pct
        WHEN '${n.selected_indicator.value}' = 'gdp_per_capita_current_usd'
            THEN gdp_per_capita_current_usd
        WHEN '${n.selected_indicator.value}' = 'poverty_headcount_215_pct'
            THEN poverty_headcount_215_pct
        WHEN '${n.selected_indicator.value}' = 'food_supply_variability_kcal'
            THEN TRY_CAST(food_supply_variability_kcal AS DOUBLE)
        WHEN '${n.selected_indicator.value}' = 'avg_temp_mean'
            THEN avg_temp_mean
        WHEN '${n.selected_indicator.value}' = 'total_precipitation'
            THEN total_precipitation
    END AS indicator_value
FROM food_security.country_food_security_yearly
WHERE country_code IN (
    '${n.country_a.value}',
    '${n.country_b.value}'
)
ORDER BY year, country_name`,$e=`SELECT
    year,
    country_name,
    CASE
        WHEN '${n.selected_indicator.value}' = 'undernourishment_prevalence_pct'
            THEN undernourishment_prevalence_pct
        WHEN '${n.selected_indicator.value}' = 'food_price_inflation_pct'
            THEN food_price_inflation_pct
        WHEN '${n.selected_indicator.value}' = 'gdp_per_capita_current_usd'
            THEN gdp_per_capita_current_usd
        WHEN '${n.selected_indicator.value}' = 'poverty_headcount_215_pct'
            THEN poverty_headcount_215_pct
        WHEN '${n.selected_indicator.value}' = 'food_supply_variability_kcal'
            THEN TRY_CAST(food_supply_variability_kcal AS DOUBLE)
        WHEN '${n.selected_indicator.value}' = 'avg_temp_mean'
            THEN avg_temp_mean
        WHEN '${n.selected_indicator.value}' = 'total_precipitation'
            THEN total_precipitation
    END AS indicator_value
FROM food_security.country_food_security_yearly
WHERE country_code IN (
    '${n.country_a.value}',
    '${n.country_b.value}'
)
ORDER BY year, country_name`;a.selected_indicator_trend_data&&(a.selected_indicator_trend_data instanceof Error?ce.initialError=a.selected_indicator_trend_data:ce.initialData=a.selected_indicator_trend_data,a.selected_indicator_trend_columns&&(ce.knownColumns=a.selected_indicator_trend_columns));let Z,Ge=!1;const He=ke.createReactive({callback:S=>{o(6,Z=S)},execFn:C},{id:"selected_indicator_trend",...ce});He($e,{noResolve:J,...ce}),globalThis[Symbol.for("selected_indicator_trend")]={get value(){return Z}};let x={initialData:void 0,initialError:void 0},V=P`SELECT
    country_name,
    'Price Pressure' AS driver,
    price_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

UNION ALL

SELECT
    country_name,
    'Economic Vulnerability' AS driver,
    economic_vulnerability_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

UNION ALL

SELECT
    country_name,
    'Availability Pressure' AS driver,
    food_availability_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

ORDER BY driver, country_name`,se=`SELECT
    country_name,
    'Price Pressure' AS driver,
    price_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

UNION ALL

SELECT
    country_name,
    'Economic Vulnerability' AS driver,
    economic_vulnerability_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

UNION ALL

SELECT
    country_name,
    'Availability Pressure' AS driver,
    food_availability_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

ORDER BY driver, country_name`;a.driver_score_comparison_data&&(a.driver_score_comparison_data instanceof Error?x.initialError=a.driver_score_comparison_data:x.initialData=a.driver_score_comparison_data,a.driver_score_comparison_columns&&(x.knownColumns=a.driver_score_comparison_columns));let le,De=!1;const Re=ke.createReactive({callback:S=>{o(7,le=S)},execFn:C},{id:"driver_score_comparison",...x});return Re(se,{noResolve:V,...x}),globalThis[Symbol.for("driver_score_comparison")]={get value(){return le}},c.$$set=S=>{"data"in S&&o(8,l=S.data)},c.$$.update=()=>{c.$$.dirty[0]&256&&o(9,{data:a={},customFormattingSettings:i,__db:m}=l,a),c.$$.dirty[0]&512&&Yr.set(Object.keys(a).length>0),c.$$.dirty[1]&4096&&r.params,c.$$.dirty[0]&30720&&(de||!me?de||(Ee(fe,{noResolve:de,...q}),o(14,me=!0)):Ee(fe,{noResolve:de})),c.$$.dirty[0]&491520&&(k||!Se?k||(re(X,{noResolve:k,...B}),o(18,Se=!0)):re(X,{noResolve:k})),c.$$.dirty[0]&1024&&o(20,Y=P`SELECT
    country_name,
    CAST(ROUND(overall_pressure_score * 100, 0) AS INTEGER) || '%' AS pressure_score_display,
    CAST(ROUND(undernourishment_prevalence_pct, 1) AS VARCHAR) || '%' AS undernourishment_display,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code = '${n.country_a.value}'`),c.$$.dirty[0]&1024&&o(21,te=`SELECT
    country_name,
    CAST(ROUND(overall_pressure_score * 100, 0) AS INTEGER) || '%' AS pressure_score_display,
    CAST(ROUND(undernourishment_prevalence_pct, 1) AS VARCHAR) || '%' AS undernourishment_display,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code = '${n.country_a.value}'`),c.$$.dirty[0]&7864320&&(Y||!We?Y||(ae(te,{noResolve:Y,...ue}),o(22,We=!0)):ae(te,{noResolve:Y})),c.$$.dirty[0]&1024&&o(24,j=P`SELECT
    country_name,
    CAST(ROUND(overall_pressure_score * 100, 0) AS INTEGER) || '%' AS pressure_score_display,
    CAST(ROUND(undernourishment_prevalence_pct, 1) AS VARCHAR) || '%' AS undernourishment_display,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code = '${n.country_b.value}'`),c.$$.dirty[0]&1024&&o(25,Q=`SELECT
    country_name,
    CAST(ROUND(overall_pressure_score * 100, 0) AS INTEGER) || '%' AS pressure_score_display,
    CAST(ROUND(undernourishment_prevalence_pct, 1) AS VARCHAR) || '%' AS undernourishment_display,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code = '${n.country_b.value}'`),c.$$.dirty[0]&125829120&&(j||!ie?j||(Ce(Q,{noResolve:j,...G}),o(26,ie=!0)):Ce(Q,{noResolve:j})),c.$$.dirty[0]&1024&&o(28,ye=P`SELECT
    year,
    country_name,
    overall_pressure_score AS pressure_score
FROM food_security.country_food_security_yearly
WHERE country_code IN (
    '${n.country_a.value}',
    '${n.country_b.value}'
)
ORDER BY year, country_name`),c.$$.dirty[0]&1024&&o(29,K=`SELECT
    year,
    country_name,
    overall_pressure_score AS pressure_score
FROM food_security.country_food_security_yearly
WHERE country_code IN (
    '${n.country_a.value}',
    '${n.country_b.value}'
)
ORDER BY year, country_name`),c.$$.dirty[0]&2013265920&&(ye||!ge?ye||(Te(K,{noResolve:ye,...U}),o(30,ge=!0)):Te(K,{noResolve:ye})),c.$$.dirty[1]&15&&(W||!Ae?W||(_e(he,{noResolve:W,...ne}),o(34,Ae=!0)):_e(he,{noResolve:W})),c.$$.dirty[0]&1024&&o(36,J=P`SELECT
    year,
    country_name,
    CASE
        WHEN '${n.selected_indicator.value}' = 'undernourishment_prevalence_pct'
            THEN undernourishment_prevalence_pct
        WHEN '${n.selected_indicator.value}' = 'food_price_inflation_pct'
            THEN food_price_inflation_pct
        WHEN '${n.selected_indicator.value}' = 'gdp_per_capita_current_usd'
            THEN gdp_per_capita_current_usd
        WHEN '${n.selected_indicator.value}' = 'poverty_headcount_215_pct'
            THEN poverty_headcount_215_pct
        WHEN '${n.selected_indicator.value}' = 'food_supply_variability_kcal'
            THEN TRY_CAST(food_supply_variability_kcal AS DOUBLE)
        WHEN '${n.selected_indicator.value}' = 'avg_temp_mean'
            THEN avg_temp_mean
        WHEN '${n.selected_indicator.value}' = 'total_precipitation'
            THEN total_precipitation
    END AS indicator_value
FROM food_security.country_food_security_yearly
WHERE country_code IN (
    '${n.country_a.value}',
    '${n.country_b.value}'
)
ORDER BY year, country_name`),c.$$.dirty[0]&1024&&o(37,$e=`SELECT
    year,
    country_name,
    CASE
        WHEN '${n.selected_indicator.value}' = 'undernourishment_prevalence_pct'
            THEN undernourishment_prevalence_pct
        WHEN '${n.selected_indicator.value}' = 'food_price_inflation_pct'
            THEN food_price_inflation_pct
        WHEN '${n.selected_indicator.value}' = 'gdp_per_capita_current_usd'
            THEN gdp_per_capita_current_usd
        WHEN '${n.selected_indicator.value}' = 'poverty_headcount_215_pct'
            THEN poverty_headcount_215_pct
        WHEN '${n.selected_indicator.value}' = 'food_supply_variability_kcal'
            THEN TRY_CAST(food_supply_variability_kcal AS DOUBLE)
        WHEN '${n.selected_indicator.value}' = 'avg_temp_mean'
            THEN avg_temp_mean
        WHEN '${n.selected_indicator.value}' = 'total_precipitation'
            THEN total_precipitation
    END AS indicator_value
FROM food_security.country_food_security_yearly
WHERE country_code IN (
    '${n.country_a.value}',
    '${n.country_b.value}'
)
ORDER BY year, country_name`),c.$$.dirty[1]&240&&(J||!Ge?J||(He($e,{noResolve:J,...ce}),o(38,Ge=!0)):He($e,{noResolve:J})),c.$$.dirty[0]&1024&&o(40,V=P`SELECT
    country_name,
    'Price Pressure' AS driver,
    price_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

UNION ALL

SELECT
    country_name,
    'Economic Vulnerability' AS driver,
    economic_vulnerability_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

UNION ALL

SELECT
    country_name,
    'Availability Pressure' AS driver,
    food_availability_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

ORDER BY driver, country_name`),c.$$.dirty[0]&1024&&o(41,se=`SELECT
    country_name,
    'Price Pressure' AS driver,
    price_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

UNION ALL

SELECT
    country_name,
    'Economic Vulnerability' AS driver,
    economic_vulnerability_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

UNION ALL

SELECT
    country_name,
    'Availability Pressure' AS driver,
    food_availability_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${n.country_a.value}',
      '${n.country_b.value}'
  )

ORDER BY driver, country_name`),c.$$.dirty[1]&3840&&(V||!De?V||(Re(se,{noResolve:V,...x}),o(42,De=!0)):Re(se,{noResolve:V}))},o(12,de=P`SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name`),o(13,fe=`SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name`),o(16,k=P`SELECT
    MAX(year) AS year
FROM food_security.country_food_security_yearly`),o(17,X=`SELECT
    MAX(year) AS year
FROM food_security.country_food_security_yearly`),o(32,W=P`SELECT 'undernourishment_prevalence_pct' AS indicator, 'Undernourishment (%)' AS indicator_label

UNION ALL

SELECT 'food_price_inflation_pct' AS indicator, 'Food Price Inflation (%)' AS indicator_label

UNION ALL

SELECT 'gdp_per_capita_current_usd' AS indicator, 'GDP per Capita (Current USD)' AS indicator_label

UNION ALL

SELECT 'poverty_headcount_215_pct' AS indicator, 'Poverty Headcount (%)' AS indicator_label

UNION ALL

SELECT 'food_supply_variability_kcal' AS indicator, 'Food Supply Variability' AS indicator_label

UNION ALL

SELECT 'avg_temp_mean' AS indicator, 'Average Temperature (°C)' AS indicator_label

UNION ALL

SELECT 'total_precipitation' AS indicator, 'Total Precipitation' AS indicator_label`),o(33,he=`SELECT 'undernourishment_prevalence_pct' AS indicator, 'Undernourishment (%)' AS indicator_label

UNION ALL

SELECT 'food_price_inflation_pct' AS indicator, 'Food Price Inflation (%)' AS indicator_label

UNION ALL

SELECT 'gdp_per_capita_current_usd' AS indicator, 'GDP per Capita (Current USD)' AS indicator_label

UNION ALL

SELECT 'poverty_headcount_215_pct' AS indicator, 'Poverty Headcount (%)' AS indicator_label

UNION ALL

SELECT 'food_supply_variability_kcal' AS indicator, 'Food Supply Variability' AS indicator_label

UNION ALL

SELECT 'avg_temp_mean' AS indicator, 'Average Temperature (°C)' AS indicator_label

UNION ALL

SELECT 'total_precipitation' AS indicator, 'Total Precipitation' AS indicator_label`),[pe,ve,oe,qe,Pe,Oe,Z,le,l,a,n,q,de,fe,me,B,k,X,Se,ue,Y,te,We,G,j,Q,ie,U,ye,K,ge,ne,W,he,Ae,ce,J,$e,Ge,x,V,se,De,r]}class vt extends Pr{constructor(t){super(),Vr(this,t,it,at,Mr,{data:8},null,[-1,-1])}}export{vt as component};
