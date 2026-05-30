import{s as hr,d as _,i as u,a as rr,b as S,c as y,h as Ir,e as O,f as tr,g as fe,j as d,k as F,l as gr,m as Or,o as Fr,n as Hr,p as Lr,q as Se,r as qr,t as Nr,u as Br}from"../chunks/scheduler.DYsEJJnm.js";import{S as Yr,i as Pr,d as R,t as v,a as p,c as Ne,m as b,b as w,e as T,g as Be}from"../chunks/index.DaDwQE1z.js";import{D as ar,e as Ur,s as Wr,Q as Ye,p as Gr,C as H,a as Er,r as Sr,b as Vr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.g7EbO4ob.js";import{w as jr}from"../chunks/entry.BDWoJMlz.js";import{h as X,p as Qr}from"../chunks/button.CINbfvFT.js";import{D as Xr,Q as Pe}from"../chunks/Value.CcRBK5G0.js";import{p as Jr}from"../chunks/stores.Cha3SC68.js";import{D as Kr,A as zr}from"../chunks/AreaMap.BDqHXoid.js";import{B as er}from"../chunks/BarChart.BPB-cUoI.js";import{B as or}from"../chunks/BigValue.BYzmFFfH.js";function Zr(f){let t,n=h.title+"",r;return{c(){t=F("h1"),r=Br(n),this.h()},l(o){t=O(o,"H1",{class:!0});var l=qr(t);r=Nr(l,n),l.forEach(_),this.h()},h(){S(t,"class","title")},m(o,l){u(o,t,l),rr(t,r)},p:Se,d(o){o&&_(t)}}}function xr(f){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:Se,p:Se,d:Se}}function et(f){let t,n,r,o,l;return document.title=t=h.title,{c(){n=d(),r=F("meta"),o=d(),l=F("meta"),this.h()},l(s){n=y(s),r=O(s,"META",{property:!0,content:!0}),o=y(s),l=O(s,"META",{name:!0,content:!0}),this.h()},h(){var s,m;S(r,"property","og:title"),S(r,"content",((s=h.og)==null?void 0:s.title)??h.title),S(l,"name","twitter:title"),S(l,"content",((m=h.og)==null?void 0:m.title)??h.title)},m(s,m){u(s,n,m),u(s,r,m),u(s,o,m),u(s,l,m)},p(s,m){m&0&&t!==(t=h.title)&&(document.title=t)},d(s){s&&(_(n),_(r),_(o),_(l))}}}function rt(f){var l,s;let t,n,r=(h.description||((l=h.og)==null?void 0:l.description))&&tt(),o=((s=h.og)==null?void 0:s.image)&&it();return{c(){r&&r.c(),t=d(),o&&o.c(),n=tr()},l(m){r&&r.l(m),t=y(m),o&&o.l(m),n=tr()},m(m,k){r&&r.m(m,k),u(m,t,k),o&&o.m(m,k),u(m,n,k)},p(m,k){var $,M;(h.description||($=h.og)!=null&&$.description)&&r.p(m,k),(M=h.og)!=null&&M.image&&o.p(m,k)},d(m){m&&(_(t),_(n)),r&&r.d(m),o&&o.d(m)}}}function tt(f){let t,n,r,o,l;return{c(){t=F("meta"),n=d(),r=F("meta"),o=d(),l=F("meta"),this.h()},l(s){t=O(s,"META",{name:!0,content:!0}),n=y(s),r=O(s,"META",{property:!0,content:!0}),o=y(s),l=O(s,"META",{name:!0,content:!0}),this.h()},h(){var s,m,k;S(t,"name","description"),S(t,"content",h.description??((s=h.og)==null?void 0:s.description)),S(r,"property","og:description"),S(r,"content",((m=h.og)==null?void 0:m.description)??h.description),S(l,"name","twitter:description"),S(l,"content",((k=h.og)==null?void 0:k.description)??h.description)},m(s,m){u(s,t,m),u(s,n,m),u(s,r,m),u(s,o,m),u(s,l,m)},p:Se,d(s){s&&(_(t),_(n),_(r),_(o),_(l))}}}function it(f){let t,n,r;return{c(){t=F("meta"),n=d(),r=F("meta"),this.h()},l(o){t=O(o,"META",{property:!0,content:!0}),n=y(o),r=O(o,"META",{name:!0,content:!0}),this.h()},h(){var o,l;S(t,"property","og:image"),S(t,"content",Er((o=h.og)==null?void 0:o.image)),S(r,"name","twitter:image"),S(r,"content",Er((l=h.og)==null?void 0:l.image))},m(o,l){u(o,t,l),u(o,n,l),u(o,r,l)},p:Se,d(o){o&&(_(t),_(n),_(r))}}}function nt(f){let t,n='Each country receives an <strong class="markdown">overall pressure score</strong> from 0 to 1, computed as a percentile rank across four dimensions:',r,o,l='<li class="markdown"><strong class="markdown">Food security</strong> — prevalence of undernourishment</li> <li class="markdown"><strong class="markdown">Price pressure</strong> — food price inflation</li> <li class="markdown"><strong class="markdown">Economic vulnerability</strong> — inverse of GDP per capita</li> <li class="markdown"><strong class="markdown">Food availability</strong> — per capita food supply variability</li>',s,m,k='The <strong class="markdown">main pressure driver</strong> identifies which of the three explanatory dimensions — price, economic, or food availability — is highest for each country.',$,M,C="Data sources: Our World in Data · FAOSTAT · World Bank · Open-Meteo";return{c(){t=F("p"),t.innerHTML=n,r=d(),o=F("ul"),o.innerHTML=l,s=d(),m=F("p"),m.innerHTML=k,$=d(),M=F("p"),M.textContent=C,this.h()},l(g){t=O(g,"P",{class:!0,"data-svelte-h":!0}),fe(t)!=="svelte-1ysdq2s"&&(t.innerHTML=n),r=y(g),o=O(g,"UL",{class:!0,"data-svelte-h":!0}),fe(o)!=="svelte-f2jfw4"&&(o.innerHTML=l),s=y(g),m=O(g,"P",{class:!0,"data-svelte-h":!0}),fe(m)!=="svelte-e0tf6t"&&(m.innerHTML=k),$=y(g),M=O(g,"P",{class:!0,"data-svelte-h":!0}),fe(M)!=="svelte-1o689f5"&&(M.textContent=C),this.h()},h(){S(t,"class","markdown"),S(o,"class","markdown"),S(m,"class","markdown"),S(M,"class","markdown")},m(g,c){u(g,t,c),u(g,r,c),u(g,o,c),u(g,s,c),u(g,m,c),u(g,$,c),u(g,M,c)},p:Se,d(g){g&&(_(t),_(r),_(o),_(s),_(m),_($),_(M))}}}function Rr(f){let t,n;return t=new Pe({props:{queryID:"year_filter",queryResult:f[0]}}),{c(){T(t.$$.fragment)},l(r){w(t.$$.fragment,r)},m(r,o){b(t,r,o),n=!0},p(r,o){const l={};o[0]&1&&(l.queryResult=r[0]),t.$set(l)},i(r){n||(p(t.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function br(f){let t,n;return t=new Pe({props:{queryID:"kpis",queryResult:f[1]}}),{c(){T(t.$$.fragment)},l(r){w(t.$$.fragment,r)},m(r,o){b(t,r,o),n=!0},p(r,o){const l={};o[0]&2&&(l.queryResult=r[1]),t.$set(l)},i(r){n||(p(t.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function wr(f){let t,n;return t=new Pe({props:{queryID:"map_data",queryResult:f[2]}}),{c(){T(t.$$.fragment)},l(r){w(t.$$.fragment,r)},m(r,o){b(t,r,o),n=!0},p(r,o){const l={};o[0]&4&&(l.queryResult=r[2]),t.$set(l)},i(r){n||(p(t.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function Tr(f){let t,n;return t=new Pe({props:{queryID:"top_20",queryResult:f[3]}}),{c(){T(t.$$.fragment)},l(r){w(t.$$.fragment,r)},m(r,o){b(t,r,o),n=!0},p(r,o){const l={};o[0]&8&&(l.queryResult=r[3]),t.$set(l)},i(r){n||(p(t.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function st(f){let t,n,r,o,l,s,m,k,$,M,C,g,c,D,I,G;return t=new H({props:{id:"rank"}}),r=new H({props:{id:"country_name",title:"Country"}}),l=new H({props:{id:"region"}}),m=new H({props:{id:"income_group",title:"Income Group"}}),$=new H({props:{id:"undernourishment_pct",title:"Undernourishment (%)"}}),C=new H({props:{id:"food_price_inflation",title:"Food Price Inflation (%)"}}),c=new H({props:{id:"pressure_score",fmt:"pct",contentType:"colorscale",colorPalette:["white","#e34a33"],title:"Pressure Score"}}),I=new H({props:{id:"main_driver",title:"Main Driver"}}),{c(){T(t.$$.fragment),n=d(),T(r.$$.fragment),o=d(),T(l.$$.fragment),s=d(),T(m.$$.fragment),k=d(),T($.$$.fragment),M=d(),T(C.$$.fragment),g=d(),T(c.$$.fragment),D=d(),T(I.$$.fragment)},l(i){w(t.$$.fragment,i),n=y(i),w(r.$$.fragment,i),o=y(i),w(l.$$.fragment,i),s=y(i),w(m.$$.fragment,i),k=y(i),w($.$$.fragment,i),M=y(i),w(C.$$.fragment,i),g=y(i),w(c.$$.fragment,i),D=y(i),w(I.$$.fragment,i)},m(i,E){b(t,i,E),u(i,n,E),b(r,i,E),u(i,o,E),b(l,i,E),u(i,s,E),b(m,i,E),u(i,k,E),b($,i,E),u(i,M,E),b(C,i,E),u(i,g,E),b(c,i,E),u(i,D,E),b(I,i,E),G=!0},p:Se,i(i){G||(p(t.$$.fragment,i),p(r.$$.fragment,i),p(l.$$.fragment,i),p(m.$$.fragment,i),p($.$$.fragment,i),p(C.$$.fragment,i),p(c.$$.fragment,i),p(I.$$.fragment,i),G=!0)},o(i){v(t.$$.fragment,i),v(r.$$.fragment,i),v(l.$$.fragment,i),v(m.$$.fragment,i),v($.$$.fragment,i),v(C.$$.fragment,i),v(c.$$.fragment,i),v(I.$$.fragment,i),G=!1},d(i){i&&(_(n),_(o),_(s),_(k),_(M),_(g),_(D)),R(t,i),R(r,i),R(l,i),R(m,i),R($,i),R(C,i),R(c,i),R(I,i)}}}function Cr(f){let t,n;return t=new Pe({props:{queryID:"drivers",queryResult:f[4]}}),{c(){T(t.$$.fragment)},l(r){w(t.$$.fragment,r)},m(r,o){b(t,r,o),n=!0},p(r,o){const l={};o[0]&16&&(l.queryResult=r[4]),t.$set(l)},i(r){n||(p(t.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function kr(f){let t,n;return t=new Pe({props:{queryID:"drivers_time",queryResult:f[5]}}),{c(){T(t.$$.fragment)},l(r){w(t.$$.fragment,r)},m(r,o){b(t,r,o),n=!0},p(r,o){const l={};o[0]&32&&(l.queryResult=r[5]),t.$set(l)},i(r){n||(p(t.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function Ar(f){let t,n;return t=new Pe({props:{queryID:"regional",queryResult:f[6]}}),{c(){T(t.$$.fragment)},l(r){w(t.$$.fragment,r)},m(r,o){b(t,r,o),n=!0},p(r,o){const l={};o[0]&64&&(l.queryResult=r[6]),t.$set(l)},i(r){n||(p(t.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function at(f){let t,n,r,o,l,s,m,k,$,M,C,g;return t=new H({props:{id:"region"}}),r=new H({props:{id:"country_count",title:"Countries"}}),l=new H({props:{id:"avg_undernourishment_pct",title:"Avg Undernourishment (%)"}}),m=new H({props:{id:"avg_food_price_inflation_pct",title:"Avg Food Price Inflation (%)"}}),$=new H({props:{id:"avg_pressure_score",fmt:"pct",contentType:"colorscale",colorPalette:["white","#e34a33"],title:"Avg Pressure Score"}}),C=new H({props:{id:"dominant_pressure_driver",title:"Dominant Driver"}}),{c(){T(t.$$.fragment),n=d(),T(r.$$.fragment),o=d(),T(l.$$.fragment),s=d(),T(m.$$.fragment),k=d(),T($.$$.fragment),M=d(),T(C.$$.fragment)},l(c){w(t.$$.fragment,c),n=y(c),w(r.$$.fragment,c),o=y(c),w(l.$$.fragment,c),s=y(c),w(m.$$.fragment,c),k=y(c),w($.$$.fragment,c),M=y(c),w(C.$$.fragment,c)},m(c,D){b(t,c,D),u(c,n,D),b(r,c,D),u(c,o,D),b(l,c,D),u(c,s,D),b(m,c,D),u(c,k,D),b($,c,D),u(c,M,D),b(C,c,D),g=!0},p:Se,i(c){g||(p(t.$$.fragment,c),p(r.$$.fragment,c),p(l.$$.fragment,c),p(m.$$.fragment,c),p($.$$.fragment,c),p(C.$$.fragment,c),g=!0)},o(c){v(t.$$.fragment,c),v(r.$$.fragment,c),v(l.$$.fragment,c),v(m.$$.fragment,c),v($.$$.fragment,c),v(C.$$.fragment,c),g=!1},d(c){c&&(_(n),_(o),_(s),_(k),_(M)),R(t,c),R(r,c),R(l,c),R(m,c),R($,c),R(C,c)}}}function Dr(f){let t,n;return t=new Pe({props:{queryID:"worsening",queryResult:f[7]}}),{c(){T(t.$$.fragment)},l(r){w(t.$$.fragment,r)},m(r,o){b(t,r,o),n=!0},p(r,o){const l={};o[0]&128&&(l.queryResult=r[7]),t.$set(l)},i(r){n||(p(t.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),n=!1},d(r){R(t,r)}}}function ot(f){let t,n,r,o,l,s,m,k,$,M,C,g,c,D,I,G;return t=new H({props:{id:"country_name",title:"Country"}}),r=new H({props:{id:"region"}}),l=new H({props:{id:"income_group",title:"Income Group"}}),m=new H({props:{id:"first_year",title:"From Year"}}),$=new H({props:{id:"last_year",title:"To Year"}}),C=new H({props:{id:"first_year_pct",title:"Start %"}}),c=new H({props:{id:"last_year_pct",title:"End %"}}),I=new H({props:{id:"change_pct",contentType:"colorscale",colorPalette:["white","#e34a33"],title:"Change (pp)"}}),{c(){T(t.$$.fragment),n=d(),T(r.$$.fragment),o=d(),T(l.$$.fragment),s=d(),T(m.$$.fragment),k=d(),T($.$$.fragment),M=d(),T(C.$$.fragment),g=d(),T(c.$$.fragment),D=d(),T(I.$$.fragment)},l(i){w(t.$$.fragment,i),n=y(i),w(r.$$.fragment,i),o=y(i),w(l.$$.fragment,i),s=y(i),w(m.$$.fragment,i),k=y(i),w($.$$.fragment,i),M=y(i),w(C.$$.fragment,i),g=y(i),w(c.$$.fragment,i),D=y(i),w(I.$$.fragment,i)},m(i,E){b(t,i,E),u(i,n,E),b(r,i,E),u(i,o,E),b(l,i,E),u(i,s,E),b(m,i,E),u(i,k,E),b($,i,E),u(i,M,E),b(C,i,E),u(i,g,E),b(c,i,E),u(i,D,E),b(I,i,E),G=!0},p:Se,i(i){G||(p(t.$$.fragment,i),p(r.$$.fragment,i),p(l.$$.fragment,i),p(m.$$.fragment,i),p($.$$.fragment,i),p(C.$$.fragment,i),p(c.$$.fragment,i),p(I.$$.fragment,i),G=!0)},o(i){v(t.$$.fragment,i),v(r.$$.fragment,i),v(l.$$.fragment,i),v(m.$$.fragment,i),v($.$$.fragment,i),v(C.$$.fragment,i),v(c.$$.fragment,i),v(I.$$.fragment,i),G=!1},d(i){i&&(_(n),_(o),_(s),_(k),_(M),_(g),_(D)),R(t,i),R(r,i),R(l,i),R(m,i),R($,i),R(C,i),R(c,i),R(I,i)}}}function _t(f){let t,n,r,o,l,s,m='<a href="#global-food-security-pressure-dashboard">Global Food Security Pressure Dashboard</a>',k,$,M="A country-year analysis tracking undernourishment, food prices, economic vulnerability, and food supply stability across 160+ countries.",C,g,c,D,I,G,i,E,ie,z,Ce,ne,ke,ee,se,J,Ue='<a href="#where-is-food-security-pressure-highest">Where is food security pressure highest?</a>',Ae,me,Q,ae,ce,De,re,We='<a href="#top-20-most-pressured-countries">Top 20 Most Pressured Countries</a>',oe,Z,x,Me,Re,he,V,pe='<a href="#what-is-driving-pressure-globally">What is driving pressure globally?</a>',ye,de,_e,Ie,j,$e='<a href="#how-has-pressure-shifted-over-time">How has pressure shifted over time?</a>',ve,ge,le,Oe,te,ue,K,Ge='<a href="#regional-comparison">Regional Comparison</a>',Fe,Ee,A,Ve,He,Je,Qe,Ke,be,_r='<a href="#countries-worsening-fastest">Countries Worsening Fastest</a>',ze,je,Le,Ze,qe,xe,we=typeof h<"u"&&h.title&&h.hide_title!==!0&&Zr();function Mr(e,a){return typeof h<"u"&&h.title?et:xr}let Xe=Mr()(f),Te=typeof h=="object"&&rt();g=new Kr({props:{title:"How to read this dashboard",$$slots:{default:[nt]},$$scope:{ctx:f}}});let L=f[0]&&Rr(f);I=new Xr({props:{data:f[0],name:"selected_year",value:"year",defaultValue:2023,title:"Year"}});let q=f[1]&&br(f);E=new or({props:{data:f[1],value:"countries",title:"Countries Tracked"}}),z=new or({props:{data:f[1],value:"years_covered",title:"Years Covered"}}),ne=new or({props:{data:f[1],value:"avg_pressure_score",title:"Avg Pressure Score",fmt:"pct"}});let N=f[2]&&wr(f);Q=new zr({props:{data:f[2],areaCol:"country_code",geoJsonUrl:"/world.geojson",geoId:"ISO3166-1-Alpha-3",value:"overall_pressure_score",valueFmt:"pct",colorPalette:["#fee8c8","#fdbb84","#e34a33"],height:"450",title:"Overall Food Security Pressure Score"}});let B=f[3]&&Tr(f);x=new ar({props:{data:f[3],rows:"20",rowShading:"true",$$slots:{default:[st]},$$scope:{ctx:f}}});let Y=f[4]&&Cr(f);_e=new er({props:{data:f[4],x:"driver",y:"country_count",yAxisTitle:"Number of countries",title:"Countries by Main Pressure Driver",colorPalette:["#e34a33","#fdbb84","#fee8c8"]}});let P=f[5]&&kr(f);le=new er({props:{data:f[5],x:"year",y:"country_count",series:"driver",type:"stacked",yAxisTitle:"Number of countries",title:"Pressure Driver Distribution Over Time"}});let U=f[6]&&Ar(f);A=new er({props:{data:f[6],x:"region",y:"avg_pressure_score",yAxisTitle:"Avg Pressure Score",title:"Average Pressure Score by Region",colorPalette:["#e34a33","#fdbb84","#fee8c8"]}}),He=new ar({props:{data:f[6],rowShading:"true",$$slots:{default:[at]},$$scope:{ctx:f}}});let W=f[7]&&Dr(f);return Le=new er({props:{data:f[7],x:"country_name",y:"change_pct",title:"Largest Increase in Undernourishment (percentage points)",yAxisTitle:"Change (pp)",colorPalette:["#e34a33"]}}),qe=new ar({props:{data:f[7],rowShading:"true",$$slots:{default:[ot]},$$scope:{ctx:f}}}),{c(){we&&we.c(),t=d(),Xe.c(),n=F("meta"),r=F("meta"),Te&&Te.c(),o=tr(),l=d(),s=F("h1"),s.innerHTML=m,k=d(),$=F("p"),$.textContent=M,C=d(),T(g.$$.fragment),c=d(),L&&L.c(),D=d(),T(I.$$.fragment),G=d(),q&&q.c(),i=d(),T(E.$$.fragment),ie=d(),T(z.$$.fragment),Ce=d(),T(ne.$$.fragment),ke=d(),ee=F("hr"),se=d(),J=F("h2"),J.innerHTML=Ue,Ae=d(),N&&N.c(),me=d(),T(Q.$$.fragment),ae=d(),ce=F("hr"),De=d(),re=F("h2"),re.innerHTML=We,oe=d(),B&&B.c(),Z=d(),T(x.$$.fragment),Me=d(),Re=F("hr"),he=d(),V=F("h2"),V.innerHTML=pe,ye=d(),Y&&Y.c(),de=d(),T(_e.$$.fragment),Ie=d(),j=F("h2"),j.innerHTML=$e,ve=d(),P&&P.c(),ge=d(),T(le.$$.fragment),Oe=d(),te=F("hr"),ue=d(),K=F("h2"),K.innerHTML=Ge,Fe=d(),U&&U.c(),Ee=d(),T(A.$$.fragment),Ve=d(),T(He.$$.fragment),Je=d(),Qe=F("hr"),Ke=d(),be=F("h2"),be.innerHTML=_r,ze=d(),W&&W.c(),je=d(),T(Le.$$.fragment),Ze=d(),T(qe.$$.fragment),this.h()},l(e){we&&we.l(e),t=y(e);const a=Ir("svelte-2igo1p",document.head);Xe.l(a),n=O(a,"META",{name:!0,content:!0}),r=O(a,"META",{name:!0,content:!0}),Te&&Te.l(a),o=tr(),a.forEach(_),l=y(e),s=O(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),fe(s)!=="svelte-1d5avuw"&&(s.innerHTML=m),k=y(e),$=O(e,"P",{class:!0,"data-svelte-h":!0}),fe($)!=="svelte-1v53ykj"&&($.textContent=M),C=y(e),w(g.$$.fragment,e),c=y(e),L&&L.l(e),D=y(e),w(I.$$.fragment,e),G=y(e),q&&q.l(e),i=y(e),w(E.$$.fragment,e),ie=y(e),w(z.$$.fragment,e),Ce=y(e),w(ne.$$.fragment,e),ke=y(e),ee=O(e,"HR",{class:!0}),se=y(e),J=O(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(J)!=="svelte-8brpq9"&&(J.innerHTML=Ue),Ae=y(e),N&&N.l(e),me=y(e),w(Q.$$.fragment,e),ae=y(e),ce=O(e,"HR",{class:!0}),De=y(e),re=O(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(re)!=="svelte-wfe023"&&(re.innerHTML=We),oe=y(e),B&&B.l(e),Z=y(e),w(x.$$.fragment,e),Me=y(e),Re=O(e,"HR",{class:!0}),he=y(e),V=O(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(V)!=="svelte-1pier9b"&&(V.innerHTML=pe),ye=y(e),Y&&Y.l(e),de=y(e),w(_e.$$.fragment,e),Ie=y(e),j=O(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(j)!=="svelte-1iqkxc0"&&(j.innerHTML=$e),ve=y(e),P&&P.l(e),ge=y(e),w(le.$$.fragment,e),Oe=y(e),te=O(e,"HR",{class:!0}),ue=y(e),K=O(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(K)!=="svelte-1hqegd0"&&(K.innerHTML=Ge),Fe=y(e),U&&U.l(e),Ee=y(e),w(A.$$.fragment,e),Ve=y(e),w(He.$$.fragment,e),Je=y(e),Qe=O(e,"HR",{class:!0}),Ke=y(e),be=O(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(be)!=="svelte-1g2mrr2"&&(be.innerHTML=_r),ze=y(e),W&&W.l(e),je=y(e),w(Le.$$.fragment,e),Ze=y(e),w(qe.$$.fragment,e),this.h()},h(){S(n,"name","twitter:card"),S(n,"content","summary_large_image"),S(r,"name","twitter:site"),S(r,"content","@evidence_dev"),S(s,"class","markdown"),S(s,"id","global-food-security-pressure-dashboard"),S($,"class","markdown"),S(ee,"class","markdown"),S(J,"class","markdown"),S(J,"id","where-is-food-security-pressure-highest"),S(ce,"class","markdown"),S(re,"class","markdown"),S(re,"id","top-20-most-pressured-countries"),S(Re,"class","markdown"),S(V,"class","markdown"),S(V,"id","what-is-driving-pressure-globally"),S(j,"class","markdown"),S(j,"id","how-has-pressure-shifted-over-time"),S(te,"class","markdown"),S(K,"class","markdown"),S(K,"id","regional-comparison"),S(Qe,"class","markdown"),S(be,"class","markdown"),S(be,"id","countries-worsening-fastest")},m(e,a){we&&we.m(e,a),u(e,t,a),Xe.m(document.head,null),rr(document.head,n),rr(document.head,r),Te&&Te.m(document.head,null),rr(document.head,o),u(e,l,a),u(e,s,a),u(e,k,a),u(e,$,a),u(e,C,a),b(g,e,a),u(e,c,a),L&&L.m(e,a),u(e,D,a),b(I,e,a),u(e,G,a),q&&q.m(e,a),u(e,i,a),b(E,e,a),u(e,ie,a),b(z,e,a),u(e,Ce,a),b(ne,e,a),u(e,ke,a),u(e,ee,a),u(e,se,a),u(e,J,a),u(e,Ae,a),N&&N.m(e,a),u(e,me,a),b(Q,e,a),u(e,ae,a),u(e,ce,a),u(e,De,a),u(e,re,a),u(e,oe,a),B&&B.m(e,a),u(e,Z,a),b(x,e,a),u(e,Me,a),u(e,Re,a),u(e,he,a),u(e,V,a),u(e,ye,a),Y&&Y.m(e,a),u(e,de,a),b(_e,e,a),u(e,Ie,a),u(e,j,a),u(e,ve,a),P&&P.m(e,a),u(e,ge,a),b(le,e,a),u(e,Oe,a),u(e,te,a),u(e,ue,a),u(e,K,a),u(e,Fe,a),U&&U.m(e,a),u(e,Ee,a),b(A,e,a),u(e,Ve,a),b(He,e,a),u(e,Je,a),u(e,Qe,a),u(e,Ke,a),u(e,be,a),u(e,ze,a),W&&W.m(e,a),u(e,je,a),b(Le,e,a),u(e,Ze,a),b(qe,e,a),xe=!0},p(e,a){typeof h<"u"&&h.title&&h.hide_title!==!0&&we.p(e,a),Xe.p(e,a),typeof h=="object"&&Te.p(e,a);const lr={};a[1]&536870912&&(lr.$$scope={dirty:a,ctx:e}),g.$set(lr),e[0]?L?(L.p(e,a),a[0]&1&&p(L,1)):(L=Rr(e),L.c(),p(L,1),L.m(D.parentNode,D)):L&&(Be(),v(L,1,1,()=>{L=null}),Ne());const ur={};a[0]&1&&(ur.data=e[0]),I.$set(ur),e[1]?q?(q.p(e,a),a[0]&2&&p(q,1)):(q=br(e),q.c(),p(q,1),q.m(i.parentNode,i)):q&&(Be(),v(q,1,1,()=>{q=null}),Ne());const fr={};a[0]&2&&(fr.data=e[1]),E.$set(fr);const cr={};a[0]&2&&(cr.data=e[1]),z.$set(cr);const mr={};a[0]&2&&(mr.data=e[1]),ne.$set(mr),e[2]?N?(N.p(e,a),a[0]&4&&p(N,1)):(N=wr(e),N.c(),p(N,1),N.m(me.parentNode,me)):N&&(Be(),v(N,1,1,()=>{N=null}),Ne());const pr={};a[0]&4&&(pr.data=e[2]),Q.$set(pr),e[3]?B?(B.p(e,a),a[0]&8&&p(B,1)):(B=Tr(e),B.c(),p(B,1),B.m(Z.parentNode,Z)):B&&(Be(),v(B,1,1,()=>{B=null}),Ne());const ir={};a[0]&8&&(ir.data=e[3]),a[1]&536870912&&(ir.$$scope={dirty:a,ctx:e}),x.$set(ir),e[4]?Y?(Y.p(e,a),a[0]&16&&p(Y,1)):(Y=Cr(e),Y.c(),p(Y,1),Y.m(de.parentNode,de)):Y&&(Be(),v(Y,1,1,()=>{Y=null}),Ne());const yr={};a[0]&16&&(yr.data=e[4]),_e.$set(yr),e[5]?P?(P.p(e,a),a[0]&32&&p(P,1)):(P=kr(e),P.c(),p(P,1),P.m(ge.parentNode,ge)):P&&(Be(),v(P,1,1,()=>{P=null}),Ne());const dr={};a[0]&32&&(dr.data=e[5]),le.$set(dr),e[6]?U?(U.p(e,a),a[0]&64&&p(U,1)):(U=Ar(e),U.c(),p(U,1),U.m(Ee.parentNode,Ee)):U&&(Be(),v(U,1,1,()=>{U=null}),Ne());const $r={};a[0]&64&&($r.data=e[6]),A.$set($r);const nr={};a[0]&64&&(nr.data=e[6]),a[1]&536870912&&(nr.$$scope={dirty:a,ctx:e}),He.$set(nr),e[7]?W?(W.p(e,a),a[0]&128&&p(W,1)):(W=Dr(e),W.c(),p(W,1),W.m(je.parentNode,je)):W&&(Be(),v(W,1,1,()=>{W=null}),Ne());const vr={};a[0]&128&&(vr.data=e[7]),Le.$set(vr);const sr={};a[0]&128&&(sr.data=e[7]),a[1]&536870912&&(sr.$$scope={dirty:a,ctx:e}),qe.$set(sr)},i(e){xe||(p(g.$$.fragment,e),p(L),p(I.$$.fragment,e),p(q),p(E.$$.fragment,e),p(z.$$.fragment,e),p(ne.$$.fragment,e),p(N),p(Q.$$.fragment,e),p(B),p(x.$$.fragment,e),p(Y),p(_e.$$.fragment,e),p(P),p(le.$$.fragment,e),p(U),p(A.$$.fragment,e),p(He.$$.fragment,e),p(W),p(Le.$$.fragment,e),p(qe.$$.fragment,e),xe=!0)},o(e){v(g.$$.fragment,e),v(L),v(I.$$.fragment,e),v(q),v(E.$$.fragment,e),v(z.$$.fragment,e),v(ne.$$.fragment,e),v(N),v(Q.$$.fragment,e),v(B),v(x.$$.fragment,e),v(Y),v(_e.$$.fragment,e),v(P),v(le.$$.fragment,e),v(U),v(A.$$.fragment,e),v(He.$$.fragment,e),v(W),v(Le.$$.fragment,e),v(qe.$$.fragment,e),xe=!1},d(e){e&&(_(t),_(l),_(s),_(k),_($),_(C),_(c),_(D),_(G),_(i),_(ie),_(Ce),_(ke),_(ee),_(se),_(J),_(Ae),_(me),_(ae),_(ce),_(De),_(re),_(oe),_(Z),_(Me),_(Re),_(he),_(V),_(ye),_(de),_(Ie),_(j),_(ve),_(ge),_(Oe),_(te),_(ue),_(K),_(Fe),_(Ee),_(Ve),_(Je),_(Qe),_(Ke),_(be),_(ze),_(je),_(Ze)),we&&we.d(e),Xe.d(e),_(n),_(r),Te&&Te.d(e),_(o),R(g,e),L&&L.d(e),R(I,e),q&&q.d(e),R(E,e),R(z,e),R(ne,e),N&&N.d(e),R(Q,e),B&&B.d(e),R(x,e),Y&&Y.d(e),R(_e,e),P&&P.d(e),R(le,e),U&&U.d(e),R(A,e),R(He,e),W&&W.d(e),R(Le,e),R(qe,e)}}}const h={title:"Global Food Security Pressure Dashboard"};function lt(f,t,n){let r,o;gr(f,Jr,A=>n(43,r=A)),gr(f,Sr,A=>n(48,o=A));let{data:l}=t,{data:s={},customFormattingSettings:m,__db:k,inputs:$}=l;Or(Sr,o="8b2111f9c8152001cc8eed28dfa77907",o);let M=Ur(jr($));Fr(M.subscribe(A=>n(10,$=A))),Hr(Vr,{getCustomFormats:()=>m.customFormats||[]});const C=(A,Ve)=>Qr(k.query,A,{query_name:Ve});Wr(C),r.params,Lr(()=>!0);let g={initialData:void 0,initialError:void 0},c=X`SELECT DISTINCT
    year
FROM food_security.country_food_security_yearly
ORDER BY year DESC`,D=`SELECT DISTINCT
    year
FROM food_security.country_food_security_yearly
ORDER BY year DESC`;s.year_filter_data&&(s.year_filter_data instanceof Error?g.initialError=s.year_filter_data:g.initialData=s.year_filter_data,s.year_filter_columns&&(g.knownColumns=s.year_filter_columns));let I,G=!1;const i=Ye.createReactive({callback:A=>{n(0,I=A)},execFn:C},{id:"year_filter",...g});i(D,{noResolve:c,...g}),globalThis[Symbol.for("year_filter")]={get value(){return I}};let E={initialData:void 0,initialError:void 0},ie=X`SELECT
    COUNT(DISTINCT country_code) AS countries,
    COUNT(DISTINCT year) AS years_covered,
    MIN(year) AS first_year,
    MAX(year) AS last_year,
    ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score
FROM food_security.country_food_security_yearly`,z=`SELECT
    COUNT(DISTINCT country_code) AS countries,
    COUNT(DISTINCT year) AS years_covered,
    MIN(year) AS first_year,
    MAX(year) AS last_year,
    ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score
FROM food_security.country_food_security_yearly`;s.kpis_data&&(s.kpis_data instanceof Error?E.initialError=s.kpis_data:E.initialData=s.kpis_data,s.kpis_columns&&(E.knownColumns=s.kpis_columns));let Ce,ne=!1;const ke=Ye.createReactive({callback:A=>{n(1,Ce=A)},execFn:C},{id:"kpis",...E});ke(z,{noResolve:ie,...E}),globalThis[Symbol.for("kpis")]={get value(){return Ce}};let ee={initialData:void 0,initialError:void 0},se=X`SELECT
    country_code,
    country_name,
    overall_pressure_score,
    undernourishment_prevalence_pct,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = ${$.selected_year.value}`,J=`SELECT
    country_code,
    country_name,
    overall_pressure_score,
    undernourishment_prevalence_pct,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = ${$.selected_year.value}`;s.map_data_data&&(s.map_data_data instanceof Error?ee.initialError=s.map_data_data:ee.initialData=s.map_data_data,s.map_data_columns&&(ee.knownColumns=s.map_data_columns));let Ue,Ae=!1;const me=Ye.createReactive({callback:A=>{n(2,Ue=A)},execFn:C},{id:"map_data",...ee});me(J,{noResolve:se,...ee}),globalThis[Symbol.for("map_data")]={get value(){return Ue}};let Q={initialData:void 0,initialError:void 0},ae=X`SELECT
    rank_within_year AS rank,
    country_name,
    un_region AS region,
    income_group,
    undernourishment_prevalence_pct AS undernourishment_pct,
    food_price_inflation_pct AS food_price_inflation,
    overall_pressure_score AS pressure_score,
    main_pressure_driver AS main_driver
FROM food_security.top_pressured_countries
WHERE year = ${$.selected_year.value}
ORDER BY rank_within_year
LIMIT 20`,ce=`SELECT
    rank_within_year AS rank,
    country_name,
    un_region AS region,
    income_group,
    undernourishment_prevalence_pct AS undernourishment_pct,
    food_price_inflation_pct AS food_price_inflation,
    overall_pressure_score AS pressure_score,
    main_pressure_driver AS main_driver
FROM food_security.top_pressured_countries
WHERE year = ${$.selected_year.value}
ORDER BY rank_within_year
LIMIT 20`;s.top_20_data&&(s.top_20_data instanceof Error?Q.initialError=s.top_20_data:Q.initialData=s.top_20_data,s.top_20_columns&&(Q.knownColumns=s.top_20_columns));let De,re=!1;const We=Ye.createReactive({callback:A=>{n(3,De=A)},execFn:C},{id:"top_20",...Q});We(ce,{noResolve:ae,...Q}),globalThis[Symbol.for("top_20")]={get value(){return De}};let oe={initialData:void 0,initialError:void 0},Z=X`SELECT
    main_pressure_driver AS driver,
    country_count,
    share_pct
FROM food_security.driver_distribution_by_year
WHERE year = ${$.selected_year.value}
ORDER BY country_count DESC`,x=`SELECT
    main_pressure_driver AS driver,
    country_count,
    share_pct
FROM food_security.driver_distribution_by_year
WHERE year = ${$.selected_year.value}
ORDER BY country_count DESC`;s.drivers_data&&(s.drivers_data instanceof Error?oe.initialError=s.drivers_data:oe.initialData=s.drivers_data,s.drivers_columns&&(oe.knownColumns=s.drivers_columns));let Me,Re=!1;const he=Ye.createReactive({callback:A=>{n(4,Me=A)},execFn:C},{id:"drivers",...oe});he(x,{noResolve:Z,...oe}),globalThis[Symbol.for("drivers")]={get value(){return Me}};let V={initialData:void 0,initialError:void 0},pe=X`SELECT
    year,
    main_pressure_driver AS driver,
    country_count
FROM food_security.driver_distribution_by_year
ORDER BY year, country_count DESC`,ye=`SELECT
    year,
    main_pressure_driver AS driver,
    country_count
FROM food_security.driver_distribution_by_year
ORDER BY year, country_count DESC`;s.drivers_time_data&&(s.drivers_time_data instanceof Error?V.initialError=s.drivers_time_data:V.initialData=s.drivers_time_data,s.drivers_time_columns&&(V.knownColumns=s.drivers_time_columns));let de,_e=!1;const Ie=Ye.createReactive({callback:A=>{n(5,de=A)},execFn:C},{id:"drivers_time",...V});Ie(ye,{noResolve:pe,...V}),globalThis[Symbol.for("drivers_time")]={get value(){return de}};let j={initialData:void 0,initialError:void 0},$e=X`SELECT
    un_region AS region,
    avg_undernourishment_pct,
    avg_food_price_inflation_pct,
    avg_overall_pressure_score AS avg_pressure_score,
    country_count,
    dominant_pressure_driver
FROM food_security.regional_pressure_summary
WHERE year = ${$.selected_year.value}
ORDER BY avg_pressure_score DESC`,ve=`SELECT
    un_region AS region,
    avg_undernourishment_pct,
    avg_food_price_inflation_pct,
    avg_overall_pressure_score AS avg_pressure_score,
    country_count,
    dominant_pressure_driver
FROM food_security.regional_pressure_summary
WHERE year = ${$.selected_year.value}
ORDER BY avg_pressure_score DESC`;s.regional_data&&(s.regional_data instanceof Error?j.initialError=s.regional_data:j.initialData=s.regional_data,s.regional_columns&&(j.knownColumns=s.regional_columns));let ge,le=!1;const Oe=Ye.createReactive({callback:A=>{n(6,ge=A)},execFn:C},{id:"regional",...j});Oe(ve,{noResolve:$e,...j}),globalThis[Symbol.for("regional")]={get value(){return ge}};let te={initialData:void 0,initialError:void 0},ue=X`SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    first_year_pct,
    last_year_pct,
    absolute_change_pct AS change_pct
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
ORDER BY absolute_change_pct DESC
LIMIT 15`,K=`SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    first_year_pct,
    last_year_pct,
    absolute_change_pct AS change_pct
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
ORDER BY absolute_change_pct DESC
LIMIT 15`;s.worsening_data&&(s.worsening_data instanceof Error?te.initialError=s.worsening_data:te.initialData=s.worsening_data,s.worsening_columns&&(te.knownColumns=s.worsening_columns));let Ge,Fe=!1;const Ee=Ye.createReactive({callback:A=>{n(7,Ge=A)},execFn:C},{id:"worsening",...te});return Ee(K,{noResolve:ue,...te}),globalThis[Symbol.for("worsening")]={get value(){return Ge}},f.$$set=A=>{"data"in A&&n(8,l=A.data)},f.$$.update=()=>{f.$$.dirty[0]&256&&n(9,{data:s={},customFormattingSettings:m,__db:k}=l,s),f.$$.dirty[0]&512&&Gr.set(Object.keys(s).length>0),f.$$.dirty[1]&4096&&r.params,f.$$.dirty[0]&30720&&(c||!G?c||(i(D,{noResolve:c,...g}),n(14,G=!0)):i(D,{noResolve:c})),f.$$.dirty[0]&491520&&(ie||!ne?ie||(ke(z,{noResolve:ie,...E}),n(18,ne=!0)):ke(z,{noResolve:ie})),f.$$.dirty[0]&1024&&n(20,se=X`SELECT
    country_code,
    country_name,
    overall_pressure_score,
    undernourishment_prevalence_pct,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = ${$.selected_year.value}`),f.$$.dirty[0]&1024&&n(21,J=`SELECT
    country_code,
    country_name,
    overall_pressure_score,
    undernourishment_prevalence_pct,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = ${$.selected_year.value}`),f.$$.dirty[0]&7864320&&(se||!Ae?se||(me(J,{noResolve:se,...ee}),n(22,Ae=!0)):me(J,{noResolve:se})),f.$$.dirty[0]&1024&&n(24,ae=X`SELECT
    rank_within_year AS rank,
    country_name,
    un_region AS region,
    income_group,
    undernourishment_prevalence_pct AS undernourishment_pct,
    food_price_inflation_pct AS food_price_inflation,
    overall_pressure_score AS pressure_score,
    main_pressure_driver AS main_driver
FROM food_security.top_pressured_countries
WHERE year = ${$.selected_year.value}
ORDER BY rank_within_year
LIMIT 20`),f.$$.dirty[0]&1024&&n(25,ce=`SELECT
    rank_within_year AS rank,
    country_name,
    un_region AS region,
    income_group,
    undernourishment_prevalence_pct AS undernourishment_pct,
    food_price_inflation_pct AS food_price_inflation,
    overall_pressure_score AS pressure_score,
    main_pressure_driver AS main_driver
FROM food_security.top_pressured_countries
WHERE year = ${$.selected_year.value}
ORDER BY rank_within_year
LIMIT 20`),f.$$.dirty[0]&125829120&&(ae||!re?ae||(We(ce,{noResolve:ae,...Q}),n(26,re=!0)):We(ce,{noResolve:ae})),f.$$.dirty[0]&1024&&n(28,Z=X`SELECT
    main_pressure_driver AS driver,
    country_count,
    share_pct
FROM food_security.driver_distribution_by_year
WHERE year = ${$.selected_year.value}
ORDER BY country_count DESC`),f.$$.dirty[0]&1024&&n(29,x=`SELECT
    main_pressure_driver AS driver,
    country_count,
    share_pct
FROM food_security.driver_distribution_by_year
WHERE year = ${$.selected_year.value}
ORDER BY country_count DESC`),f.$$.dirty[0]&2013265920&&(Z||!Re?Z||(he(x,{noResolve:Z,...oe}),n(30,Re=!0)):he(x,{noResolve:Z})),f.$$.dirty[1]&15&&(pe||!_e?pe||(Ie(ye,{noResolve:pe,...V}),n(34,_e=!0)):Ie(ye,{noResolve:pe})),f.$$.dirty[0]&1024&&n(36,$e=X`SELECT
    un_region AS region,
    avg_undernourishment_pct,
    avg_food_price_inflation_pct,
    avg_overall_pressure_score AS avg_pressure_score,
    country_count,
    dominant_pressure_driver
FROM food_security.regional_pressure_summary
WHERE year = ${$.selected_year.value}
ORDER BY avg_pressure_score DESC`),f.$$.dirty[0]&1024&&n(37,ve=`SELECT
    un_region AS region,
    avg_undernourishment_pct,
    avg_food_price_inflation_pct,
    avg_overall_pressure_score AS avg_pressure_score,
    country_count,
    dominant_pressure_driver
FROM food_security.regional_pressure_summary
WHERE year = ${$.selected_year.value}
ORDER BY avg_pressure_score DESC`),f.$$.dirty[1]&240&&($e||!le?$e||(Oe(ve,{noResolve:$e,...j}),n(38,le=!0)):Oe(ve,{noResolve:$e})),f.$$.dirty[1]&3840&&(ue||!Fe?ue||(Ee(K,{noResolve:ue,...te}),n(42,Fe=!0)):Ee(K,{noResolve:ue}))},n(12,c=X`SELECT DISTINCT
    year
FROM food_security.country_food_security_yearly
ORDER BY year DESC`),n(13,D=`SELECT DISTINCT
    year
FROM food_security.country_food_security_yearly
ORDER BY year DESC`),n(16,ie=X`SELECT
    COUNT(DISTINCT country_code) AS countries,
    COUNT(DISTINCT year) AS years_covered,
    MIN(year) AS first_year,
    MAX(year) AS last_year,
    ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score
FROM food_security.country_food_security_yearly`),n(17,z=`SELECT
    COUNT(DISTINCT country_code) AS countries,
    COUNT(DISTINCT year) AS years_covered,
    MIN(year) AS first_year,
    MAX(year) AS last_year,
    ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score
FROM food_security.country_food_security_yearly`),n(32,pe=X`SELECT
    year,
    main_pressure_driver AS driver,
    country_count
FROM food_security.driver_distribution_by_year
ORDER BY year, country_count DESC`),n(33,ye=`SELECT
    year,
    main_pressure_driver AS driver,
    country_count
FROM food_security.driver_distribution_by_year
ORDER BY year, country_count DESC`),n(40,ue=X`SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    first_year_pct,
    last_year_pct,
    absolute_change_pct AS change_pct
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
ORDER BY absolute_change_pct DESC
LIMIT 15`),n(41,K=`SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    first_year_pct,
    last_year_pct,
    absolute_change_pct AS change_pct
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
ORDER BY absolute_change_pct DESC
LIMIT 15`),[I,Ce,Ue,De,Me,de,ge,Ge,l,s,$,g,c,D,G,E,ie,z,ne,ee,se,J,Ae,Q,ae,ce,re,oe,Z,x,Re,V,pe,ye,_e,j,$e,ve,le,te,ue,K,Fe,r]}class St extends Yr{constructor(t){super(),Pr(this,t,lt,_t,hr,{data:8},null,[-1,-1])}}export{St as component};
