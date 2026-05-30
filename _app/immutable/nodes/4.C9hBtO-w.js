import{s as tr,v as or,d as p,w as ar,x as _r,y as lr,i as m,e as F,r as ur,k as M,a as We,b as R,I as Ne,c as $,h as cr,f as qe,g as oe,j as g,l as Ye,m as fr,o as pr,n as mr,p as dr,q as De}from"../chunks/scheduler.DYsEJJnm.js";import{S as ir,i as nr,t as v,a as y,d as T,c as Ee,m as w,b,e as C,g as Re}from"../chunks/index.DaDwQE1z.js";import{D as yr,e as vr,s as $r,Q as ge,p as gr,C as Ce,a as Pe,r as Ge,b as Er}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C_ezGKFc.js";import{w as Rr}from"../chunks/entry.BAp6vOa_.js";import{h as U,p as Sr}from"../chunks/button.D6nixP0u.js";import{D as hr,Q as Se}from"../chunks/Value.odEfF2Fl.js";import{p as kr}from"../chunks/stores.Br8zC9p-.js";import{G as Ve}from"../chunks/Grid.1SUOIOrv.js";import{D as Tr,A as wr}from"../chunks/AreaMap.C75S7SDa.js";import{B as sr}from"../chunks/BarChart.BDkqgqmP.js";import{B as Ie}from"../chunks/BigValue.B_vkCUME.js";function br(a){let r,n;const e=a[1].default,o=or(e,a,a[0],null);return{c(){r=M("div"),o&&o.c()},l(s){r=F(s,"DIV",{});var i=ur(r);o&&o.l(i),i.forEach(p)},m(s,i){m(s,r,i),o&&o.m(r,null),n=!0},p(s,[i]){o&&o.p&&(!n||i&1)&&ar(o,e,s,s[0],n?lr(e,s[0],i,null):_r(s[0]),null)},i(s){n||(y(o,s),n=!0)},o(s){v(o,s),n=!1},d(s){s&&p(r),o&&o.d(s)}}}function Cr(a,r,n){let{$$slots:e={},$$scope:o}=r;return a.$$set=s=>{"$$scope"in s&&n(0,o=s.$$scope)},[o,e]}class je extends ir{constructor(r){super(),nr(this,r,Cr,br,tr,{})}}function Dr(a){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:De,p:De,d:De}}function Ar(a){let r,n,e,o,s;return document.title=r=W.title,{c(){n=g(),e=M("meta"),o=g(),s=M("meta"),this.h()},l(i){n=$(i),e=F(i,"META",{property:!0,content:!0}),o=$(i),s=F(i,"META",{name:!0,content:!0}),this.h()},h(){var i,_;R(e,"property","og:title"),R(e,"content",((i=W.og)==null?void 0:i.title)??W.title),R(s,"name","twitter:title"),R(s,"content",((_=W.og)==null?void 0:_.title)??W.title)},m(i,_){m(i,n,_),m(i,e,_),m(i,o,_),m(i,s,_)},p(i,_){_&0&&r!==(r=W.title)&&(document.title=r)},d(i){i&&(p(n),p(e),p(o),p(s))}}}function Or(a){var s,i;let r,n,e=(W.description||((s=W.og)==null?void 0:s.description))&&Lr(),o=((i=W.og)==null?void 0:i.image)&&Ir();return{c(){e&&e.c(),r=g(),o&&o.c(),n=qe()},l(_){e&&e.l(_),r=$(_),o&&o.l(_),n=qe()},m(_,c){e&&e.m(_,c),m(_,r,c),o&&o.m(_,c),m(_,n,c)},p(_,c){var l,k;(W.description||(l=W.og)!=null&&l.description)&&e.p(_,c),(k=W.og)!=null&&k.image&&o.p(_,c)},d(_){_&&(p(r),p(n)),e&&e.d(_),o&&o.d(_)}}}function Lr(a){let r,n,e,o,s;return{c(){r=M("meta"),n=g(),e=M("meta"),o=g(),s=M("meta"),this.h()},l(i){r=F(i,"META",{name:!0,content:!0}),n=$(i),e=F(i,"META",{property:!0,content:!0}),o=$(i),s=F(i,"META",{name:!0,content:!0}),this.h()},h(){var i,_,c;R(r,"name","description"),R(r,"content",W.description??((i=W.og)==null?void 0:i.description)),R(e,"property","og:description"),R(e,"content",((_=W.og)==null?void 0:_.description)??W.description),R(s,"name","twitter:description"),R(s,"content",((c=W.og)==null?void 0:c.description)??W.description)},m(i,_){m(i,r,_),m(i,n,_),m(i,e,_),m(i,o,_),m(i,s,_)},p:De,d(i){i&&(p(r),p(n),p(e),p(o),p(s))}}}function Ir(a){let r,n,e;return{c(){r=M("meta"),n=g(),e=M("meta"),this.h()},l(o){r=F(o,"META",{property:!0,content:!0}),n=$(o),e=F(o,"META",{name:!0,content:!0}),this.h()},h(){var o,s;R(r,"property","og:image"),R(r,"content",Pe((o=W.og)==null?void 0:o.image)),R(e,"name","twitter:image"),R(e,"content",Pe((s=W.og)==null?void 0:s.image))},m(o,s){m(o,r,s),m(o,n,s),m(o,e,s)},p:De,d(o){o&&(p(r),p(n),p(e))}}}function Fr(a){let r,n='Each country receives an <strong class="markdown">overall pressure score</strong> from 0 to 1, computed as a percentile rank across four dimensions:',e,o,s='<li class="markdown"><strong class="markdown">Food security</strong> — prevalence of undernourishment</li> <li class="markdown"><strong class="markdown">Price pressure</strong> — food price inflation</li> <li class="markdown"><strong class="markdown">Economic vulnerability</strong> — inverse of GDP per capita</li> <li class="markdown"><strong class="markdown">Food availability</strong> — per capita food supply variability</li>',i,_,c='The <strong class="markdown">main pressure driver</strong> identifies which of the three explanatory dimensions — price, economic, or food availability — is highest for each country.',l,k,S="Data sources: Our World in Data · FAOSTAT · World Bank · Open-Meteo";return{c(){r=M("p"),r.innerHTML=n,e=g(),o=M("ul"),o.innerHTML=s,i=g(),_=M("p"),_.innerHTML=c,l=g(),k=M("p"),k.textContent=S,this.h()},l(E){r=F(E,"P",{class:!0,"data-svelte-h":!0}),oe(r)!=="svelte-1ysdq2s"&&(r.innerHTML=n),e=$(E),o=F(E,"UL",{class:!0,"data-svelte-h":!0}),oe(o)!=="svelte-f2jfw4"&&(o.innerHTML=s),i=$(E),_=F(E,"P",{class:!0,"data-svelte-h":!0}),oe(_)!=="svelte-e0tf6t"&&(_.innerHTML=c),l=$(E),k=F(E,"P",{class:!0,"data-svelte-h":!0}),oe(k)!=="svelte-1o689f5"&&(k.textContent=S),this.h()},h(){R(r,"class","markdown"),R(o,"class","markdown"),R(_,"class","markdown"),R(k,"class","markdown")},m(E,f){m(E,r,f),m(E,e,f),m(E,o,f),m(E,i,f),m(E,_,f),m(E,l,f),m(E,k,f)},p:De,d(E){E&&(p(r),p(e),p(o),p(i),p(_),p(l),p(k))}}}function Qe(a){let r,n;return r=new Se({props:{queryID:"year_filter",queryResult:a[0]}}),{c(){C(r.$$.fragment)},l(e){b(r.$$.fragment,e)},m(e,o){w(r,e,o),n=!0},p(e,o){const s={};o[0]&1&&(s.queryResult=e[0]),r.$set(s)},i(e){n||(y(r.$$.fragment,e),n=!0)},o(e){v(r.$$.fragment,e),n=!1},d(e){T(r,e)}}}function ze(a){let r,n;return r=new Se({props:{queryID:"kpis",queryResult:a[1]}}),{c(){C(r.$$.fragment)},l(e){b(r.$$.fragment,e)},m(e,o){w(r,e,o),n=!0},p(e,o){const s={};o[0]&2&&(s.queryResult=e[1]),r.$set(s)},i(e){n||(y(r.$$.fragment,e),n=!0)},o(e){v(r.$$.fragment,e),n=!1},d(e){T(r,e)}}}function Ke(a){let r,n;return r=new Se({props:{queryID:"kpi_highest_pressure",queryResult:a[2]}}),{c(){C(r.$$.fragment)},l(e){b(r.$$.fragment,e)},m(e,o){w(r,e,o),n=!0},p(e,o){const s={};o[0]&4&&(s.queryResult=e[2]),r.$set(s)},i(e){n||(y(r.$$.fragment,e),n=!0)},o(e){v(r.$$.fragment,e),n=!1},d(e){T(r,e)}}}function Je(a){let r,n;return r=new Se({props:{queryID:"kpi_common_driver",queryResult:a[3]}}),{c(){C(r.$$.fragment)},l(e){b(r.$$.fragment,e)},m(e,o){w(r,e,o),n=!0},p(e,o){const s={};o[0]&8&&(s.queryResult=e[3]),r.$set(s)},i(e){n||(y(r.$$.fragment,e),n=!0)},o(e){v(r.$$.fragment,e),n=!1},d(e){T(r,e)}}}function Xe(a){let r,n;return r=new Se({props:{queryID:"kpi_fastest_worsening",queryResult:a[4]}}),{c(){C(r.$$.fragment)},l(e){b(r.$$.fragment,e)},m(e,o){w(r,e,o),n=!0},p(e,o){const s={};o[0]&16&&(s.queryResult=e[4]),r.$set(s)},i(e){n||(y(r.$$.fragment,e),n=!0)},o(e){v(r.$$.fragment,e),n=!1},d(e){T(r,e)}}}function Mr(a){let r,n,e,o,s,i,_,c,l,k,S,E;return r=new Ie({props:{data:a[1],value:"countries",title:"Countries Tracked"}}),e=new Ie({props:{data:a[1],value:"avg_undernourishment",title:"Average Undernourishment (%)",fmt:"0.0"}}),s=new Ie({props:{data:a[1],value:"avg_pressure_score",title:"Avg Pressure Score",fmt:"pct"}}),_=new Ie({props:{data:a[3],value:"main_pressure_driver",title:"Most Common Driver"}}),l=new Ie({props:{data:a[2],value:"country",title:"Highest Pressure Country"}}),S=new Ie({props:{data:a[4],value:"country",title:"Fastest Worsening Country"}}),{c(){C(r.$$.fragment),n=g(),C(e.$$.fragment),o=g(),C(s.$$.fragment),i=g(),C(_.$$.fragment),c=g(),C(l.$$.fragment),k=g(),C(S.$$.fragment)},l(f){b(r.$$.fragment,f),n=$(f),b(e.$$.fragment,f),o=$(f),b(s.$$.fragment,f),i=$(f),b(_.$$.fragment,f),c=$(f),b(l.$$.fragment,f),k=$(f),b(S.$$.fragment,f)},m(f,h){w(r,f,h),m(f,n,h),w(e,f,h),m(f,o,h),w(s,f,h),m(f,i,h),w(_,f,h),m(f,c,h),w(l,f,h),m(f,k,h),w(S,f,h),E=!0},p(f,h){const d={};h[0]&2&&(d.data=f[1]),r.$set(d);const H={};h[0]&2&&(H.data=f[1]),e.$set(H);const ee={};h[0]&2&&(ee.data=f[1]),s.$set(ee);const z={};h[0]&8&&(z.data=f[3]),_.$set(z);const Y={};h[0]&4&&(Y.data=f[2]),l.$set(Y);const P={};h[0]&16&&(P.data=f[4]),S.$set(P)},i(f){E||(y(r.$$.fragment,f),y(e.$$.fragment,f),y(s.$$.fragment,f),y(_.$$.fragment,f),y(l.$$.fragment,f),y(S.$$.fragment,f),E=!0)},o(f){v(r.$$.fragment,f),v(e.$$.fragment,f),v(s.$$.fragment,f),v(_.$$.fragment,f),v(l.$$.fragment,f),v(S.$$.fragment,f),E=!1},d(f){f&&(p(n),p(o),p(i),p(c),p(k)),T(r,f),T(e,f),T(s,f),T(_,f),T(l,f),T(S,f)}}}function Ze(a){let r,n;return r=new Se({props:{queryID:"map_data",queryResult:a[5]}}),{c(){C(r.$$.fragment)},l(e){b(r.$$.fragment,e)},m(e,o){w(r,e,o),n=!0},p(e,o){const s={};o[0]&32&&(s.queryResult=e[5]),r.$set(s)},i(e){n||(y(r.$$.fragment,e),n=!0)},o(e){v(r.$$.fragment,e),n=!1},d(e){T(r,e)}}}function xe(a){let r,n;return r=new Se({props:{queryID:"top_10",queryResult:a[6]}}),{c(){C(r.$$.fragment)},l(e){b(r.$$.fragment,e)},m(e,o){w(r,e,o),n=!0},p(e,o){const s={};o[0]&64&&(s.queryResult=e[6]),r.$set(s)},i(e){n||(y(r.$$.fragment,e),n=!0)},o(e){v(r.$$.fragment,e),n=!1},d(e){T(r,e)}}}function Hr(a){let r,n,e,o,s,i,_,c,l,k,S,E,f,h;return r=new Ce({props:{id:"rank"}}),e=new Ce({props:{id:"country_name",title:"Country"}}),s=new Ce({props:{id:"region"}}),_=new Ce({props:{id:"undernourishment",title:"Undernourishment (%)"}}),l=new Ce({props:{id:"food_price_inflation",title:"Food Price Inflation (%)"}}),S=new Ce({props:{id:"pressure_score",fmt:"pct",contentType:"colorscale",colorScale:"#B85C38",title:"Pressure Score"}}),f=new Ce({props:{id:"main_driver",title:"Main Driver"}}),{c(){C(r.$$.fragment),n=g(),C(e.$$.fragment),o=g(),C(s.$$.fragment),i=g(),C(_.$$.fragment),c=g(),C(l.$$.fragment),k=g(),C(S.$$.fragment),E=g(),C(f.$$.fragment)},l(d){b(r.$$.fragment,d),n=$(d),b(e.$$.fragment,d),o=$(d),b(s.$$.fragment,d),i=$(d),b(_.$$.fragment,d),c=$(d),b(l.$$.fragment,d),k=$(d),b(S.$$.fragment,d),E=$(d),b(f.$$.fragment,d)},m(d,H){w(r,d,H),m(d,n,H),w(e,d,H),m(d,o,H),w(s,d,H),m(d,i,H),w(_,d,H),m(d,c,H),w(l,d,H),m(d,k,H),w(S,d,H),m(d,E,H),w(f,d,H),h=!0},p:De,i(d){h||(y(r.$$.fragment,d),y(e.$$.fragment,d),y(s.$$.fragment,d),y(_.$$.fragment,d),y(l.$$.fragment,d),y(S.$$.fragment,d),y(f.$$.fragment,d),h=!0)},o(d){v(r.$$.fragment,d),v(e.$$.fragment,d),v(s.$$.fragment,d),v(_.$$.fragment,d),v(l.$$.fragment,d),v(S.$$.fragment,d),v(f.$$.fragment,d),h=!1},d(d){d&&(p(n),p(o),p(i),p(c),p(k),p(E)),T(r,d),T(e,d),T(s,d),T(_,d),T(l,d),T(S,d),T(f,d)}}}function er(a){let r,n;return r=new Se({props:{queryID:"drivers",queryResult:a[7]}}),{c(){C(r.$$.fragment)},l(e){b(r.$$.fragment,e)},m(e,o){w(r,e,o),n=!0},p(e,o){const s={};o[0]&128&&(s.queryResult=e[7]),r.$set(s)},i(e){n||(y(r.$$.fragment,e),n=!0)},o(e){v(r.$$.fragment,e),n=!1},d(e){T(r,e)}}}function Nr(a){let r,n='<a href="#dominant-pressure-drivers">Dominant Pressure Drivers</a>',e,o,s,i,_=a[7]&&er(a);return s=new sr({props:{data:a[7],x:"driver",y:"country_count",title:"Countries by Main Pressure Driver",colorPalette:["#B85C38","#D99A74","#E8D3B9","#7A5C45"],echartsOptions:{color:["#B85C38","#D99A74","#E8D3B9","#7A5C45"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{splitLine:{show:!1}},xAxis:{splitLine:{show:!1}}}}}),{c(){r=M("h2"),r.innerHTML=n,e=g(),_&&_.c(),o=g(),C(s.$$.fragment),this.h()},l(c){r=F(c,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(r)!=="svelte-n4wdh8"&&(r.innerHTML=n),e=$(c),_&&_.l(c),o=$(c),b(s.$$.fragment,c),this.h()},h(){R(r,"class","markdown"),R(r,"id","dominant-pressure-drivers")},m(c,l){m(c,r,l),m(c,e,l),_&&_.m(c,l),m(c,o,l),w(s,c,l),i=!0},p(c,l){c[7]?_?(_.p(c,l),l[0]&128&&y(_,1)):(_=er(c),_.c(),y(_,1),_.m(o.parentNode,o)):_&&(Re(),v(_,1,1,()=>{_=null}),Ee());const k={};l[0]&128&&(k.data=c[7]),s.$set(k)},i(c){i||(y(_),y(s.$$.fragment,c),i=!0)},o(c){v(_),v(s.$$.fragment,c),i=!1},d(c){c&&(p(r),p(e),p(o)),_&&_.d(c),T(s,c)}}}function rr(a){let r,n;return r=new Se({props:{queryID:"regional",queryResult:a[8]}}),{c(){C(r.$$.fragment)},l(e){b(r.$$.fragment,e)},m(e,o){w(r,e,o),n=!0},p(e,o){const s={};o[0]&256&&(s.queryResult=e[8]),r.$set(s)},i(e){n||(y(r.$$.fragment,e),n=!0)},o(e){v(r.$$.fragment,e),n=!1},d(e){T(r,e)}}}function qr(a){let r,n='<a href="#regional-comparison">Regional Comparison</a>',e,o,s,i,_=a[8]&&rr(a);return s=new sr({props:{data:a[8],x:"region",y:"avg_pressure_score",yFmt:"pct",title:"Average Pressure Score by Region",colorPalette:["#B85C38"],echartsOptions:{color:["#B85C38"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{splitLine:{show:!1},axisLabel:{formatter:Ur}},xAxis:{splitLine:{show:!1}},tooltip:{valueFormatter:Yr}}}}),{c(){r=M("h2"),r.innerHTML=n,e=g(),_&&_.c(),o=g(),C(s.$$.fragment),this.h()},l(c){r=F(c,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(r)!=="svelte-1hqegd0"&&(r.innerHTML=n),e=$(c),_&&_.l(c),o=$(c),b(s.$$.fragment,c),this.h()},h(){R(r,"class","markdown"),R(r,"id","regional-comparison")},m(c,l){m(c,r,l),m(c,e,l),_&&_.m(c,l),m(c,o,l),w(s,c,l),i=!0},p(c,l){c[8]?_?(_.p(c,l),l[0]&256&&y(_,1)):(_=rr(c),_.c(),y(_,1),_.m(o.parentNode,o)):_&&(Re(),v(_,1,1,()=>{_=null}),Ee());const k={};l[0]&256&&(k.data=c[8]),s.$set(k)},i(c){i||(y(_),y(s.$$.fragment,c),i=!0)},o(c){v(_),v(s.$$.fragment,c),i=!1},d(c){c&&(p(r),p(e),p(o)),_&&_.d(c),T(s,c)}}}function Br(a){let r,n,e,o;return r=new je({props:{$$slots:{default:[Nr]},$$scope:{ctx:a}}}),e=new je({props:{$$slots:{default:[qr]},$$scope:{ctx:a}}}),{c(){C(r.$$.fragment),n=g(),C(e.$$.fragment)},l(s){b(r.$$.fragment,s),n=$(s),b(e.$$.fragment,s)},m(s,i){w(r,s,i),m(s,n,i),w(e,s,i),o=!0},p(s,i){const _={};i[0]&128|i[2]&16&&(_.$$scope={dirty:i,ctx:s}),r.$set(_);const c={};i[0]&256|i[2]&16&&(c.$$scope={dirty:i,ctx:s}),e.$set(c)},i(s){o||(y(r.$$.fragment,s),y(e.$$.fragment,s),o=!0)},o(s){v(r.$$.fragment,s),v(e.$$.fragment,s),o=!1},d(s){s&&p(n),T(r,s),T(e,s)}}}function Wr(a){let r,n,e,o,s,i,_='<p class="markdown">This dashboard is an independent portfolio project, not an official food security report. Data comes from public sources and is transformed for analytical and educational purposes. For methodology and source details, see the <a href="https://github.com/roxannardgz/food-security-pipeline" rel="nofollow" class="markdown">project README</a>.</p>',c,l,k='<a href="#global-food-security-pressure">Global Food Security Pressure</a>',S,E,f="A country-year analysis tracking undernourishment, food prices, economic vulnerability, and food supply stability across 160+ countries.",h,d,H,ee,z,Y,P,he,ae,_e,J,X,Z,ke,de,Te,G,le='<a href="#where-is-food-security-pressure-highest">Where is food security pressure highest?</a>',ue,ce,K,Ae="Overall Food Security Pressure Score",re,j,fe,ye,we,x,pe='<a href="#top-10-most-pressured-countries">Top 10 Most Pressured Countries</a>',te,ie,ne,be,ve,se,Q,me;function Fe(t,u){return typeof W<"u"&&W.title?Ar:Dr}let $e=Fe()(a),V=typeof W=="object"&&Or();d=new Tr({props:{title:"How to read this dashboard",$$slots:{default:[Fr]},$$scope:{ctx:a}}});let A=a[0]&&Qe(a);P=new hr({props:{data:a[0],name:"selected_year",value:"year",defaultValue:2023,title:"Year"}});let I=a[1]&&ze(a),N=a[2]&&Ke(a),q=a[3]&&Je(a),B=a[4]&&Xe(a);Z=new Ve({props:{cols:"3",$$slots:{default:[Mr]},$$scope:{ctx:a}}});let O=a[5]&&Ze(a);j=new wr({props:{data:a[5],areaCol:"country_code",geoJsonUrl:"/world.geojson",geoId:"ISO3166-1-Alpha-3",value:"overall_pressure_score",valueFmt:"pct",colorPalette:["#F6EFE7","#E8D3B9","#D99A74","#B85C38","#7A5C45"],height:"550",tooltip:[{id:"country_name",showColumnName:!1,valueClass:"text-xl font-semibold"},{id:"overall_pressure_score",fmt:"pct",fieldClass:"text-[grey]"},{id:"undernourishment_pct",fmt:"num1",fieldClass:"text-[grey]"},{id:"main_pressure_driver",fieldClass:"text-[grey]"}]}});let L=a[6]&&xe(a);return ne=new yr({props:{data:a[6],rows:"10",rowShading:"true",$$slots:{default:[Hr]},$$scope:{ctx:a}}}),Q=new Ve({props:{cols:"2",$$slots:{default:[Br]},$$scope:{ctx:a}}}),{c(){r=g(),$e.c(),n=M("meta"),e=M("meta"),V&&V.c(),o=qe(),s=g(),i=M("blockquote"),i.innerHTML=_,c=g(),l=M("h1"),l.innerHTML=k,S=g(),E=M("p"),E.textContent=f,h=g(),C(d.$$.fragment),H=g(),ee=M("hr"),z=g(),A&&A.c(),Y=g(),C(P.$$.fragment),he=g(),I&&I.c(),ae=g(),N&&N.c(),_e=g(),q&&q.c(),J=g(),B&&B.c(),X=g(),C(Z.$$.fragment),ke=g(),de=M("hr"),Te=g(),G=M("h2"),G.innerHTML=le,ue=g(),O&&O.c(),ce=g(),K=M("div"),K.textContent=Ae,re=g(),C(j.$$.fragment),fe=g(),ye=M("hr"),we=g(),x=M("h2"),x.innerHTML=pe,te=g(),L&&L.c(),ie=g(),C(ne.$$.fragment),be=g(),ve=M("hr"),se=g(),C(Q.$$.fragment),this.h()},l(t){r=$(t);const u=cr("svelte-2igo1p",document.head);$e.l(u),n=F(u,"META",{name:!0,content:!0}),e=F(u,"META",{name:!0,content:!0}),V&&V.l(u),o=qe(),u.forEach(p),s=$(t),i=F(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),oe(i)!=="svelte-1b47owr"&&(i.innerHTML=_),c=$(t),l=F(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),oe(l)!=="svelte-1964wkw"&&(l.innerHTML=k),S=$(t),E=F(t,"P",{class:!0,"data-svelte-h":!0}),oe(E)!=="svelte-1v53ykj"&&(E.textContent=f),h=$(t),b(d.$$.fragment,t),H=$(t),ee=F(t,"HR",{class:!0}),z=$(t),A&&A.l(t),Y=$(t),b(P.$$.fragment,t),he=$(t),I&&I.l(t),ae=$(t),N&&N.l(t),_e=$(t),q&&q.l(t),J=$(t),B&&B.l(t),X=$(t),b(Z.$$.fragment,t),ke=$(t),de=F(t,"HR",{class:!0}),Te=$(t),G=F(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(G)!=="svelte-8brpq9"&&(G.innerHTML=le),ue=$(t),O&&O.l(t),ce=$(t),K=F(t,"DIV",{style:!0,"data-svelte-h":!0}),oe(K)!=="svelte-bb8g90"&&(K.textContent=Ae),re=$(t),b(j.$$.fragment,t),fe=$(t),ye=F(t,"HR",{class:!0}),we=$(t),x=F(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(x)!=="svelte-18b7d54"&&(x.innerHTML=pe),te=$(t),L&&L.l(t),ie=$(t),b(ne.$$.fragment,t),be=$(t),ve=F(t,"HR",{class:!0}),se=$(t),b(Q.$$.fragment,t),this.h()},h(){R(n,"name","twitter:card"),R(n,"content","summary_large_image"),R(e,"name","twitter:site"),R(e,"content","@evidence_dev"),R(i,"class","markdown"),R(l,"class","markdown"),R(l,"id","global-food-security-pressure"),R(E,"class","markdown"),R(ee,"class","markdown"),R(de,"class","markdown"),R(G,"class","markdown"),R(G,"id","where-is-food-security-pressure-highest"),Ne(K,"font-size","1rem"),Ne(K,"font-weight","400"),Ne(K,"color","#4B4038"),Ne(K,"margin-bottom","0.5rem"),R(ye,"class","markdown"),R(x,"class","markdown"),R(x,"id","top-10-most-pressured-countries"),R(ve,"class","markdown")},m(t,u){m(t,r,u),$e.m(document.head,null),We(document.head,n),We(document.head,e),V&&V.m(document.head,null),We(document.head,o),m(t,s,u),m(t,i,u),m(t,c,u),m(t,l,u),m(t,S,u),m(t,E,u),m(t,h,u),w(d,t,u),m(t,H,u),m(t,ee,u),m(t,z,u),A&&A.m(t,u),m(t,Y,u),w(P,t,u),m(t,he,u),I&&I.m(t,u),m(t,ae,u),N&&N.m(t,u),m(t,_e,u),q&&q.m(t,u),m(t,J,u),B&&B.m(t,u),m(t,X,u),w(Z,t,u),m(t,ke,u),m(t,de,u),m(t,Te,u),m(t,G,u),m(t,ue,u),O&&O.m(t,u),m(t,ce,u),m(t,K,u),m(t,re,u),w(j,t,u),m(t,fe,u),m(t,ye,u),m(t,we,u),m(t,x,u),m(t,te,u),L&&L.m(t,u),m(t,ie,u),w(ne,t,u),m(t,be,u),m(t,ve,u),m(t,se,u),w(Q,t,u),me=!0},p(t,u){$e.p(t,u),typeof W=="object"&&V.p(t,u);const Oe={};u[2]&16&&(Oe.$$scope={dirty:u,ctx:t}),d.$set(Oe),t[0]?A?(A.p(t,u),u[0]&1&&y(A,1)):(A=Qe(t),A.c(),y(A,1),A.m(Y.parentNode,Y)):A&&(Re(),v(A,1,1,()=>{A=null}),Ee());const Le={};u[0]&1&&(Le.data=t[0]),P.$set(Le),t[1]?I?(I.p(t,u),u[0]&2&&y(I,1)):(I=ze(t),I.c(),y(I,1),I.m(ae.parentNode,ae)):I&&(Re(),v(I,1,1,()=>{I=null}),Ee()),t[2]?N?(N.p(t,u),u[0]&4&&y(N,1)):(N=Ke(t),N.c(),y(N,1),N.m(_e.parentNode,_e)):N&&(Re(),v(N,1,1,()=>{N=null}),Ee()),t[3]?q?(q.p(t,u),u[0]&8&&y(q,1)):(q=Je(t),q.c(),y(q,1),q.m(J.parentNode,J)):q&&(Re(),v(q,1,1,()=>{q=null}),Ee()),t[4]?B?(B.p(t,u),u[0]&16&&y(B,1)):(B=Xe(t),B.c(),y(B,1),B.m(X.parentNode,X)):B&&(Re(),v(B,1,1,()=>{B=null}),Ee());const D={};u[0]&30|u[2]&16&&(D.$$scope={dirty:u,ctx:t}),Z.$set(D),t[5]?O?(O.p(t,u),u[0]&32&&y(O,1)):(O=Ze(t),O.c(),y(O,1),O.m(ce.parentNode,ce)):O&&(Re(),v(O,1,1,()=>{O=null}),Ee());const He={};u[0]&32&&(He.data=t[5]),j.$set(He),t[6]?L?(L.p(t,u),u[0]&64&&y(L,1)):(L=xe(t),L.c(),y(L,1),L.m(ie.parentNode,ie)):L&&(Re(),v(L,1,1,()=>{L=null}),Ee());const Be={};u[0]&64&&(Be.data=t[6]),u[2]&16&&(Be.$$scope={dirty:u,ctx:t}),ne.$set(Be);const Ue={};u[0]&384|u[2]&16&&(Ue.$$scope={dirty:u,ctx:t}),Q.$set(Ue)},i(t){me||(y(d.$$.fragment,t),y(A),y(P.$$.fragment,t),y(I),y(N),y(q),y(B),y(Z.$$.fragment,t),y(O),y(j.$$.fragment,t),y(L),y(ne.$$.fragment,t),y(Q.$$.fragment,t),me=!0)},o(t){v(d.$$.fragment,t),v(A),v(P.$$.fragment,t),v(I),v(N),v(q),v(B),v(Z.$$.fragment,t),v(O),v(j.$$.fragment,t),v(L),v(ne.$$.fragment,t),v(Q.$$.fragment,t),me=!1},d(t){t&&(p(r),p(s),p(i),p(c),p(l),p(S),p(E),p(h),p(H),p(ee),p(z),p(Y),p(he),p(ae),p(_e),p(J),p(X),p(ke),p(de),p(Te),p(G),p(ue),p(ce),p(K),p(re),p(fe),p(ye),p(we),p(x),p(te),p(ie),p(be),p(ve),p(se)),$e.d(t),p(n),p(e),V&&V.d(t),p(o),T(d,t),A&&A.d(t),T(P,t),I&&I.d(t),N&&N.d(t),q&&q.d(t),B&&B.d(t),T(Z,t),O&&O.d(t),T(j,t),L&&L.d(t),T(ne,t),T(Q,t)}}}const W={title:"Global Food Security Pressure"},Ur=function(a){return(a*100).toFixed(0)+"%"},Yr=function(a){return(a*100).toFixed(1)+"%"};function Pr(a,r,n){let e,o;Ye(a,kr,D=>n(48,e=D)),Ye(a,Ge,D=>n(53,o=D));let{data:s}=r,{data:i={},customFormattingSettings:_,__db:c,inputs:l}=s;fr(Ge,o="6666cd76f96956469e7be39d750cc7d9",o);let k=vr(Rr(l));pr(k.subscribe(D=>n(11,l=D))),mr(Er,{getCustomFormats:()=>_.customFormats||[]});const S=(D,He)=>Sr(c.query,D,{query_name:He});$r(S),e.params,dr(()=>!0);let E={initialData:void 0,initialError:void 0},f=U`SELECT DISTINCT
    year
FROM food_security.country_food_security_yearly
ORDER BY year DESC`,h=`SELECT DISTINCT
    year
FROM food_security.country_food_security_yearly
ORDER BY year DESC`;i.year_filter_data&&(i.year_filter_data instanceof Error?E.initialError=i.year_filter_data:E.initialData=i.year_filter_data,i.year_filter_columns&&(E.knownColumns=i.year_filter_columns));let d,H=!1;const ee=ge.createReactive({callback:D=>{n(0,d=D)},execFn:S},{id:"year_filter",...E});ee(h,{noResolve:f,...E}),globalThis[Symbol.for("year_filter")]={get value(){return d}};let z={initialData:void 0,initialError:void 0},Y=U`SELECT
    COUNT(DISTINCT country_code) AS countries,
    ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score,
    ROUND(AVG(undernourishment_prevalence_pct), 1) AS avg_undernourishment
FROM food_security.country_food_security_yearly
WHERE year = ${l.selected_year.value}`,P=`SELECT
    COUNT(DISTINCT country_code) AS countries,
    ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score,
    ROUND(AVG(undernourishment_prevalence_pct), 1) AS avg_undernourishment
FROM food_security.country_food_security_yearly
WHERE year = ${l.selected_year.value}`;i.kpis_data&&(i.kpis_data instanceof Error?z.initialError=i.kpis_data:z.initialData=i.kpis_data,i.kpis_columns&&(z.knownColumns=i.kpis_columns));let he,ae=!1;const _e=ge.createReactive({callback:D=>{n(1,he=D)},execFn:S},{id:"kpis",...z});_e(P,{noResolve:Y,...z}),globalThis[Symbol.for("kpis")]={get value(){return he}};let J={initialData:void 0,initialError:void 0},X=U`SELECT
    country_name AS country
FROM food_security.top_pressured_countries
WHERE year = ${l.selected_year.value}
  AND rank_within_year = 1`,Z=`SELECT
    country_name AS country
FROM food_security.top_pressured_countries
WHERE year = ${l.selected_year.value}
  AND rank_within_year = 1`;i.kpi_highest_pressure_data&&(i.kpi_highest_pressure_data instanceof Error?J.initialError=i.kpi_highest_pressure_data:J.initialData=i.kpi_highest_pressure_data,i.kpi_highest_pressure_columns&&(J.knownColumns=i.kpi_highest_pressure_columns));let ke,de=!1;const Te=ge.createReactive({callback:D=>{n(2,ke=D)},execFn:S},{id:"kpi_highest_pressure",...J});Te(Z,{noResolve:X,...J}),globalThis[Symbol.for("kpi_highest_pressure")]={get value(){return ke}};let G={initialData:void 0,initialError:void 0},le=U`SELECT
    main_pressure_driver
FROM food_security.driver_distribution_by_year
WHERE year = ${l.selected_year.value}
ORDER BY share_pct DESC
LIMIT 1`,ue=`SELECT
    main_pressure_driver
FROM food_security.driver_distribution_by_year
WHERE year = ${l.selected_year.value}
ORDER BY share_pct DESC
LIMIT 1`;i.kpi_common_driver_data&&(i.kpi_common_driver_data instanceof Error?G.initialError=i.kpi_common_driver_data:G.initialData=i.kpi_common_driver_data,i.kpi_common_driver_columns&&(G.knownColumns=i.kpi_common_driver_columns));let ce,K=!1;const Ae=ge.createReactive({callback:D=>{n(3,ce=D)},execFn:S},{id:"kpi_common_driver",...G});Ae(ue,{noResolve:le,...G}),globalThis[Symbol.for("kpi_common_driver")]={get value(){return ce}};let re={initialData:void 0,initialError:void 0},j=U`WITH yearly_change AS (
    SELECT
        country_code,
        country_name,
        year,
        undernourishment_prevalence_pct,
        LAG(undernourishment_prevalence_pct) OVER (
            PARTITION BY country_code
            ORDER BY year
        ) AS previous_undernourishment_pct
    FROM food_security.country_food_security_yearly
)

SELECT
    country_name AS country,
    ROUND(
        undernourishment_prevalence_pct - previous_undernourishment_pct,
        1
    ) AS change_pp
FROM yearly_change
WHERE year = ${l.selected_year.value}
  AND previous_undernourishment_pct IS NOT NULL
  AND undernourishment_prevalence_pct IS NOT NULL
ORDER BY change_pp DESC
LIMIT 1`,fe=`WITH yearly_change AS (
    SELECT
        country_code,
        country_name,
        year,
        undernourishment_prevalence_pct,
        LAG(undernourishment_prevalence_pct) OVER (
            PARTITION BY country_code
            ORDER BY year
        ) AS previous_undernourishment_pct
    FROM food_security.country_food_security_yearly
)

SELECT
    country_name AS country,
    ROUND(
        undernourishment_prevalence_pct - previous_undernourishment_pct,
        1
    ) AS change_pp
FROM yearly_change
WHERE year = ${l.selected_year.value}
  AND previous_undernourishment_pct IS NOT NULL
  AND undernourishment_prevalence_pct IS NOT NULL
ORDER BY change_pp DESC
LIMIT 1`;i.kpi_fastest_worsening_data&&(i.kpi_fastest_worsening_data instanceof Error?re.initialError=i.kpi_fastest_worsening_data:re.initialData=i.kpi_fastest_worsening_data,i.kpi_fastest_worsening_columns&&(re.knownColumns=i.kpi_fastest_worsening_columns));let ye,we=!1;const x=ge.createReactive({callback:D=>{n(4,ye=D)},execFn:S},{id:"kpi_fastest_worsening",...re});x(fe,{noResolve:j,...re}),globalThis[Symbol.for("kpi_fastest_worsening")]={get value(){return ye}};let pe={initialData:void 0,initialError:void 0},te=U`SELECT
    country_code,
    country_name,
    overall_pressure_score,
    undernourishment_prevalence_pct AS undernourishment_pct,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = ${l.selected_year.value}`,ie=`SELECT
    country_code,
    country_name,
    overall_pressure_score,
    undernourishment_prevalence_pct AS undernourishment_pct,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = ${l.selected_year.value}`;i.map_data_data&&(i.map_data_data instanceof Error?pe.initialError=i.map_data_data:pe.initialData=i.map_data_data,i.map_data_columns&&(pe.knownColumns=i.map_data_columns));let ne,be=!1;const ve=ge.createReactive({callback:D=>{n(5,ne=D)},execFn:S},{id:"map_data",...pe});ve(ie,{noResolve:te,...pe}),globalThis[Symbol.for("map_data")]={get value(){return ne}};let se={initialData:void 0,initialError:void 0},Q=U`SELECT
    rank_within_year AS rank,
    country_name,
    un_region AS region,
    undernourishment_prevalence_pct AS undernourishment,
    food_price_inflation_pct AS food_price_inflation,
    overall_pressure_score AS pressure_score,
    main_pressure_driver AS main_driver
FROM food_security.top_pressured_countries
WHERE year = ${l.selected_year.value}
ORDER BY rank_within_year
LIMIT 10`,me=`SELECT
    rank_within_year AS rank,
    country_name,
    un_region AS region,
    undernourishment_prevalence_pct AS undernourishment,
    food_price_inflation_pct AS food_price_inflation,
    overall_pressure_score AS pressure_score,
    main_pressure_driver AS main_driver
FROM food_security.top_pressured_countries
WHERE year = ${l.selected_year.value}
ORDER BY rank_within_year
LIMIT 10`;i.top_10_data&&(i.top_10_data instanceof Error?se.initialError=i.top_10_data:se.initialData=i.top_10_data,i.top_10_columns&&(se.knownColumns=i.top_10_columns));let Fe,Me=!1;const $e=ge.createReactive({callback:D=>{n(6,Fe=D)},execFn:S},{id:"top_10",...se});$e(me,{noResolve:Q,...se}),globalThis[Symbol.for("top_10")]={get value(){return Fe}};let V={initialData:void 0,initialError:void 0},A=U`SELECT
    main_pressure_driver AS driver,
    country_count,
    share_pct
FROM food_security.driver_distribution_by_year
WHERE year = ${l.selected_year.value}
ORDER BY country_count DESC`,I=`SELECT
    main_pressure_driver AS driver,
    country_count,
    share_pct
FROM food_security.driver_distribution_by_year
WHERE year = ${l.selected_year.value}
ORDER BY country_count DESC`;i.drivers_data&&(i.drivers_data instanceof Error?V.initialError=i.drivers_data:V.initialData=i.drivers_data,i.drivers_columns&&(V.knownColumns=i.drivers_columns));let N,q=!1;const B=ge.createReactive({callback:D=>{n(7,N=D)},execFn:S},{id:"drivers",...V});B(I,{noResolve:A,...V}),globalThis[Symbol.for("drivers")]={get value(){return N}};let O={initialData:void 0,initialError:void 0},L=U`SELECT
    un_region AS region,
    avg_overall_pressure_score AS avg_pressure_score,
    country_count,
    dominant_pressure_driver
FROM food_security.regional_pressure_summary
WHERE year = ${l.selected_year.value}
ORDER BY avg_pressure_score DESC`,t=`SELECT
    un_region AS region,
    avg_overall_pressure_score AS avg_pressure_score,
    country_count,
    dominant_pressure_driver
FROM food_security.regional_pressure_summary
WHERE year = ${l.selected_year.value}
ORDER BY avg_pressure_score DESC`;i.regional_data&&(i.regional_data instanceof Error?O.initialError=i.regional_data:O.initialData=i.regional_data,i.regional_columns&&(O.knownColumns=i.regional_columns));let u,Oe=!1;const Le=ge.createReactive({callback:D=>{n(8,u=D)},execFn:S},{id:"regional",...O});return Le(t,{noResolve:L,...O}),globalThis[Symbol.for("regional")]={get value(){return u}},a.$$set=D=>{"data"in D&&n(9,s=D.data)},a.$$.update=()=>{a.$$.dirty[0]&512&&n(10,{data:i={},customFormattingSettings:_,__db:c}=s,i),a.$$.dirty[0]&1024&&gr.set(Object.keys(i).length>0),a.$$.dirty[1]&131072&&e.params,a.$$.dirty[0]&61440&&(f||!H?f||(ee(h,{noResolve:f,...E}),n(15,H=!0)):ee(h,{noResolve:f})),a.$$.dirty[0]&2048&&n(17,Y=U`SELECT
    COUNT(DISTINCT country_code) AS countries,
    ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score,
    ROUND(AVG(undernourishment_prevalence_pct), 1) AS avg_undernourishment
FROM food_security.country_food_security_yearly
WHERE year = ${l.selected_year.value}`),a.$$.dirty[0]&2048&&n(18,P=`SELECT
    COUNT(DISTINCT country_code) AS countries,
    ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score,
    ROUND(AVG(undernourishment_prevalence_pct), 1) AS avg_undernourishment
FROM food_security.country_food_security_yearly
WHERE year = ${l.selected_year.value}`),a.$$.dirty[0]&983040&&(Y||!ae?Y||(_e(P,{noResolve:Y,...z}),n(19,ae=!0)):_e(P,{noResolve:Y})),a.$$.dirty[0]&2048&&n(21,X=U`SELECT
    country_name AS country
FROM food_security.top_pressured_countries
WHERE year = ${l.selected_year.value}
  AND rank_within_year = 1`),a.$$.dirty[0]&2048&&n(22,Z=`SELECT
    country_name AS country
FROM food_security.top_pressured_countries
WHERE year = ${l.selected_year.value}
  AND rank_within_year = 1`),a.$$.dirty[0]&15728640&&(X||!de?X||(Te(Z,{noResolve:X,...J}),n(23,de=!0)):Te(Z,{noResolve:X})),a.$$.dirty[0]&2048&&n(25,le=U`SELECT
    main_pressure_driver
FROM food_security.driver_distribution_by_year
WHERE year = ${l.selected_year.value}
ORDER BY share_pct DESC
LIMIT 1`),a.$$.dirty[0]&2048&&n(26,ue=`SELECT
    main_pressure_driver
FROM food_security.driver_distribution_by_year
WHERE year = ${l.selected_year.value}
ORDER BY share_pct DESC
LIMIT 1`),a.$$.dirty[0]&251658240&&(le||!K?le||(Ae(ue,{noResolve:le,...G}),n(27,K=!0)):Ae(ue,{noResolve:le})),a.$$.dirty[0]&2048&&n(29,j=U`WITH yearly_change AS (
    SELECT
        country_code,
        country_name,
        year,
        undernourishment_prevalence_pct,
        LAG(undernourishment_prevalence_pct) OVER (
            PARTITION BY country_code
            ORDER BY year
        ) AS previous_undernourishment_pct
    FROM food_security.country_food_security_yearly
)

SELECT
    country_name AS country,
    ROUND(
        undernourishment_prevalence_pct - previous_undernourishment_pct,
        1
    ) AS change_pp
FROM yearly_change
WHERE year = ${l.selected_year.value}
  AND previous_undernourishment_pct IS NOT NULL
  AND undernourishment_prevalence_pct IS NOT NULL
ORDER BY change_pp DESC
LIMIT 1`),a.$$.dirty[0]&2048&&n(30,fe=`WITH yearly_change AS (
    SELECT
        country_code,
        country_name,
        year,
        undernourishment_prevalence_pct,
        LAG(undernourishment_prevalence_pct) OVER (
            PARTITION BY country_code
            ORDER BY year
        ) AS previous_undernourishment_pct
    FROM food_security.country_food_security_yearly
)

SELECT
    country_name AS country,
    ROUND(
        undernourishment_prevalence_pct - previous_undernourishment_pct,
        1
    ) AS change_pp
FROM yearly_change
WHERE year = ${l.selected_year.value}
  AND previous_undernourishment_pct IS NOT NULL
  AND undernourishment_prevalence_pct IS NOT NULL
ORDER BY change_pp DESC
LIMIT 1`),a.$$.dirty[0]&1879048192|a.$$.dirty[1]&1&&(j||!we?j||(x(fe,{noResolve:j,...re}),n(31,we=!0)):x(fe,{noResolve:j})),a.$$.dirty[0]&2048&&n(33,te=U`SELECT
    country_code,
    country_name,
    overall_pressure_score,
    undernourishment_prevalence_pct AS undernourishment_pct,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = ${l.selected_year.value}`),a.$$.dirty[0]&2048&&n(34,ie=`SELECT
    country_code,
    country_name,
    overall_pressure_score,
    undernourishment_prevalence_pct AS undernourishment_pct,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = ${l.selected_year.value}`),a.$$.dirty[1]&30&&(te||!be?te||(ve(ie,{noResolve:te,...pe}),n(35,be=!0)):ve(ie,{noResolve:te})),a.$$.dirty[0]&2048&&n(37,Q=U`SELECT
    rank_within_year AS rank,
    country_name,
    un_region AS region,
    undernourishment_prevalence_pct AS undernourishment,
    food_price_inflation_pct AS food_price_inflation,
    overall_pressure_score AS pressure_score,
    main_pressure_driver AS main_driver
FROM food_security.top_pressured_countries
WHERE year = ${l.selected_year.value}
ORDER BY rank_within_year
LIMIT 10`),a.$$.dirty[0]&2048&&n(38,me=`SELECT
    rank_within_year AS rank,
    country_name,
    un_region AS region,
    undernourishment_prevalence_pct AS undernourishment,
    food_price_inflation_pct AS food_price_inflation,
    overall_pressure_score AS pressure_score,
    main_pressure_driver AS main_driver
FROM food_security.top_pressured_countries
WHERE year = ${l.selected_year.value}
ORDER BY rank_within_year
LIMIT 10`),a.$$.dirty[1]&480&&(Q||!Me?Q||($e(me,{noResolve:Q,...se}),n(39,Me=!0)):$e(me,{noResolve:Q})),a.$$.dirty[0]&2048&&n(41,A=U`SELECT
    main_pressure_driver AS driver,
    country_count,
    share_pct
FROM food_security.driver_distribution_by_year
WHERE year = ${l.selected_year.value}
ORDER BY country_count DESC`),a.$$.dirty[0]&2048&&n(42,I=`SELECT
    main_pressure_driver AS driver,
    country_count,
    share_pct
FROM food_security.driver_distribution_by_year
WHERE year = ${l.selected_year.value}
ORDER BY country_count DESC`),a.$$.dirty[1]&7680&&(A||!q?A||(B(I,{noResolve:A,...V}),n(43,q=!0)):B(I,{noResolve:A})),a.$$.dirty[0]&2048&&n(45,L=U`SELECT
    un_region AS region,
    avg_overall_pressure_score AS avg_pressure_score,
    country_count,
    dominant_pressure_driver
FROM food_security.regional_pressure_summary
WHERE year = ${l.selected_year.value}
ORDER BY avg_pressure_score DESC`),a.$$.dirty[0]&2048&&n(46,t=`SELECT
    un_region AS region,
    avg_overall_pressure_score AS avg_pressure_score,
    country_count,
    dominant_pressure_driver
FROM food_security.regional_pressure_summary
WHERE year = ${l.selected_year.value}
ORDER BY avg_pressure_score DESC`),a.$$.dirty[1]&122880&&(L||!Oe?L||(Le(t,{noResolve:L,...O}),n(47,Oe=!0)):Le(t,{noResolve:L}))},n(13,f=U`SELECT DISTINCT
    year
FROM food_security.country_food_security_yearly
ORDER BY year DESC`),n(14,h=`SELECT DISTINCT
    year
FROM food_security.country_food_security_yearly
ORDER BY year DESC`),[d,he,ke,ce,ye,ne,Fe,N,u,s,i,l,E,f,h,H,z,Y,P,ae,J,X,Z,de,G,le,ue,K,re,j,fe,we,pe,te,ie,be,se,Q,me,Me,V,A,I,q,O,L,t,Oe,e]}class rt extends ir{constructor(r){super(),nr(this,r,Pr,Wr,tr,{data:9},null,[-1,-1,-1])}}export{rt as component};
