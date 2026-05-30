import{s as _r,d as _,i as m,a as Re,b as g,c as d,h as lr,e as O,f as qe,g as he,r as We,t as Pe,j as p,k as $,u as Ve,l as Xe,m as ur,o as cr,n as mr,p as fr,q as Ne}from"../chunks/scheduler.DYsEJJnm.js";import{S as yr,i as gr,d as I,t as v,a as y,c as Te,m as U,b as M,e as F,g as be}from"../chunks/index.DaDwQE1z.js";import{D as dr,e as pr,s as vr,Q as Le,p as Sr,C as De,a as Ke,r as ze,b as Rr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.C_ezGKFc.js";import{w as Er}from"../chunks/entry.BAp6vOa_.js";import{h as ne,p as Ar}from"../chunks/button.D6nixP0u.js";import{D as Je,V as Ze,Q as we}from"../chunks/Value.odEfF2Fl.js";import{p as Or}from"../chunks/stores.Br8zC9p-.js";import{B as er}from"../chunks/BarChart.BDkqgqmP.js";import{L as $r}from"../chunks/LineChart.-ZdynWx_.js";function hr(o){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:Ne,p:Ne,d:Ne}}function Tr(o){let t,i,r,s,l;return document.title=t=R.title,{c(){i=p(),r=$("meta"),s=p(),l=$("meta"),this.h()},l(n){i=d(n),r=O(n,"META",{property:!0,content:!0}),s=d(n),l=O(n,"META",{name:!0,content:!0}),this.h()},h(){var n,f;g(r,"property","og:title"),g(r,"content",((n=R.og)==null?void 0:n.title)??R.title),g(l,"name","twitter:title"),g(l,"content",((f=R.og)==null?void 0:f.title)??R.title)},m(n,f){m(n,i,f),m(n,r,f),m(n,s,f),m(n,l,f)},p(n,f){f&0&&t!==(t=R.title)&&(document.title=t)},d(n){n&&(_(i),_(r),_(s),_(l))}}}function br(o){var l,n;let t,i,r=(R.description||((l=R.og)==null?void 0:l.description))&&Lr(),s=((n=R.og)==null?void 0:n.image)&&Dr();return{c(){r&&r.c(),t=p(),s&&s.c(),i=qe()},l(f){r&&r.l(f),t=d(f),s&&s.l(f),i=qe()},m(f,E){r&&r.m(f,E),m(f,t,E),s&&s.m(f,E),m(f,i,E)},p(f,E){var u,G;(R.description||(u=R.og)!=null&&u.description)&&r.p(f,E),(G=R.og)!=null&&G.image&&s.p(f,E)},d(f){f&&(_(t),_(i)),r&&r.d(f),s&&s.d(f)}}}function Lr(o){let t,i,r,s,l;return{c(){t=$("meta"),i=p(),r=$("meta"),s=p(),l=$("meta"),this.h()},l(n){t=O(n,"META",{name:!0,content:!0}),i=d(n),r=O(n,"META",{property:!0,content:!0}),s=d(n),l=O(n,"META",{name:!0,content:!0}),this.h()},h(){var n,f,E;g(t,"name","description"),g(t,"content",R.description??((n=R.og)==null?void 0:n.description)),g(r,"property","og:description"),g(r,"content",((f=R.og)==null?void 0:f.description)??R.description),g(l,"name","twitter:description"),g(l,"content",((E=R.og)==null?void 0:E.description)??R.description)},m(n,f){m(n,t,f),m(n,i,f),m(n,r,f),m(n,s,f),m(n,l,f)},p:Ne,d(n){n&&(_(t),_(i),_(r),_(s),_(l))}}}function Dr(o){let t,i,r;return{c(){t=$("meta"),i=p(),r=$("meta"),this.h()},l(s){t=O(s,"META",{property:!0,content:!0}),i=d(s),r=O(s,"META",{name:!0,content:!0}),this.h()},h(){var s,l;g(t,"property","og:image"),g(t,"content",Ke((s=R.og)==null?void 0:s.image)),g(r,"name","twitter:image"),g(r,"content",Ke((l=R.og)==null?void 0:l.image))},m(s,l){m(s,t,l),m(s,i,l),m(s,r,l)},p:Ne,d(s){s&&(_(t),_(i),_(r))}}}function rr(o){let t,i;return t=new we({props:{queryID:"region_filter",queryResult:o[0]}}),{c(){F(t.$$.fragment)},l(r){M(t.$$.fragment,r)},m(r,s){U(t,r,s),i=!0},p(r,s){const l={};s[0]&1&&(l.queryResult=r[0]),t.$set(l)},i(r){i||(y(t.$$.fragment,r),i=!0)},o(r){v(t.$$.fragment,r),i=!1},d(r){I(t,r)}}}function tr(o){let t,i;return t=new we({props:{queryID:"metric_filter",queryResult:o[1]}}),{c(){F(t.$$.fragment)},l(r){M(t.$$.fragment,r)},m(r,s){U(t,r,s),i=!0},p(r,s){const l={};s[0]&2&&(l.queryResult=r[1]),t.$set(l)},i(r){i||(y(t.$$.fragment,r),i=!0)},o(r){v(t.$$.fragment,r),i=!1},d(r){I(t,r)}}}function ir(o){let t,i;return t=new we({props:{queryID:"main_trend",queryResult:o[2]}}),{c(){F(t.$$.fragment)},l(r){M(t.$$.fragment,r)},m(r,s){U(t,r,s),i=!0},p(r,s){const l={};s[0]&4&&(l.queryResult=r[2]),t.$set(l)},i(r){i||(y(t.$$.fragment,r),i=!0)},o(r){v(t.$$.fragment,r),i=!1},d(r){I(t,r)}}}function nr(o){let t,i;return t=new we({props:{queryID:"worsening",queryResult:o[3]}}),{c(){F(t.$$.fragment)},l(r){M(t.$$.fragment,r)},m(r,s){U(t,r,s),i=!0},p(r,s){const l={};s[0]&8&&(l.queryResult=r[3]),t.$set(l)},i(r){i||(y(t.$$.fragment,r),i=!0)},o(r){v(t.$$.fragment,r),i=!1},d(r){I(t,r)}}}function ar(o){let t,i;return t=new we({props:{queryID:"worsening_period",queryResult:o[4]}}),{c(){F(t.$$.fragment)},l(r){M(t.$$.fragment,r)},m(r,s){U(t,r,s),i=!0},p(r,s){const l={};s[0]&16&&(l.queryResult=r[4]),t.$set(l)},i(r){i||(y(t.$$.fragment,r),i=!0)},o(r){v(t.$$.fragment,r),i=!1},d(r){I(t,r)}}}function Nr(o){let t,i,r,s,l,n,f,E,u,G,T,h;return t=new De({props:{id:"country_name",title:"Country"}}),r=new De({props:{id:"region"}}),l=new De({props:{id:"income_group",title:"Income Group"}}),f=new De({props:{id:"first_year_pct",title:"Start %",fmt:"0.0"}}),u=new De({props:{id:"last_year_pct",title:"End %",fmt:"0.0"}}),T=new De({props:{id:"change_pp",title:"Change (pp)",fmt:"0.0",contentType:"colorscale",colorScale:"#B85C38"}}),{c(){F(t.$$.fragment),i=p(),F(r.$$.fragment),s=p(),F(l.$$.fragment),n=p(),F(f.$$.fragment),E=p(),F(u.$$.fragment),G=p(),F(T.$$.fragment)},l(c){M(t.$$.fragment,c),i=d(c),M(r.$$.fragment,c),s=d(c),M(l.$$.fragment,c),n=d(c),M(f.$$.fragment,c),E=d(c),M(u.$$.fragment,c),G=d(c),M(T.$$.fragment,c)},m(c,A){U(t,c,A),m(c,i,A),U(r,c,A),m(c,s,A),U(l,c,A),m(c,n,A),U(f,c,A),m(c,E,A),U(u,c,A),m(c,G,A),U(T,c,A),h=!0},p:Ne,i(c){h||(y(t.$$.fragment,c),y(r.$$.fragment,c),y(l.$$.fragment,c),y(f.$$.fragment,c),y(u.$$.fragment,c),y(T.$$.fragment,c),h=!0)},o(c){v(t.$$.fragment,c),v(r.$$.fragment,c),v(l.$$.fragment,c),v(f.$$.fragment,c),v(u.$$.fragment,c),v(T.$$.fragment,c),h=!1},d(c){c&&(_(i),_(s),_(n),_(E),_(G)),I(t,c),I(r,c),I(l,c),I(f,c),I(u,c),I(T,c)}}}function sr(o){let t,i;return t=new we({props:{queryID:"drivers_time",queryResult:o[5]}}),{c(){F(t.$$.fragment)},l(r){M(t.$$.fragment,r)},m(r,s){U(t,r,s),i=!0},p(r,s){const l={};s[0]&32&&(l.queryResult=r[5]),t.$set(l)},i(r){i||(y(t.$$.fragment,r),i=!0)},o(r){v(t.$$.fragment,r),i=!1},d(r){I(t,r)}}}function wr(o){let t,i,r,s,l,n,f='<a href="#food-security-pressure-trends">Food Security Pressure Trends</a>',E,u,G="Explore how food security pressure, undernourishment, and dominant pressure drivers have changed over time.",T,h,c='<a href="/food-security-pipeline/" class="markdown">Back to Overview</a>',A,oe,ae,x,j,Y,_e,P,Ee='<a href="#main-trend-over-time">Main Trend Over Time</a>',ye,W,B,Q,X,ge,le,k,K,se,de,V,Ae='<a href="#largest-increases-in-undernourishment">Largest Increases in Undernourishment</a>',z,q,J,Z,pe,ee,re,H,ue,te,Se,ie,S,Oe,Ce,He,ce,Ge='<a href="#how-has-pressure-shifted-over-time">How Has Pressure Shifted Over Time?</a>',ke,$e,ve,Be;function or(e,a){return typeof R<"u"&&R.title?Tr:hr}let Ie=or()(o),me=typeof R=="object"&&br(),b=o[0]&&rr(o);x=new Je({props:{data:o[0],name:"selected_region",value:"region",label:"region",defaultValue:"All Regions",title:"Region"}});let L=o[1]&&tr(o);X=new Je({props:{data:o[1],name:"selected_metric",value:"metric",label:"metric_label",defaultValue:"avg_pressure_score",title:"Metric"}});let D=o[2]&&ir(o);k=new $r({props:{data:o[2],x:"year",y:"metric_value",xType:"category",title:"Selected Metric Over Time",colorPalette:["#B85C38"],echartsOptions:{color:["#B85C38"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{splitLine:{show:!0,lineStyle:{color:"#F5F5F5",width:1,type:"solid"}}},xAxis:{splitLine:{show:!1}}}}});let N=o[3]&&nr(o),w=o[4]&&ar(o);Z=new er({props:{data:o[3],x:"country_name",y:"change_pp",title:"Largest Increase in Undernourishment",yAxisTitle:"Change (%)",colorPalette:["#B85C38"],echartsOptions:{color:["#B85C38"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{splitLine:{show:!0,lineStyle:{color:"#F5F5F5",width:1,type:"solid"}}},xAxis:{splitLine:{show:!1}}}}}),ee=new dr({props:{data:o[3],rowShading:"true",$$slots:{default:[Nr]},$$scope:{ctx:o}}}),te=new Ze({props:{data:o[4],column:"first_year",fmt:"0"}}),ie=new Ze({props:{data:o[4],column:"last_year",fmt:"0"}});let C=o[5]&&sr(o);return ve=new er({props:{data:o[5],x:"year",y:"country_share",series:"driver",type:"stacked",xType:"category",yFmt:"0",title:"Pressure Driver Distribution Over Time",yAxisTitle:"(%)",colorPalette:["#B85C38","#D99A74","#E8D3B9","#7A5C45"],labels:"true",stackTotalLabel:"false",seriesLabels:"true",labelPosition:"inside",echartsOptions:{color:["#B85C38","#D99A74","#E8D3B9","#7A5C45"],title:{textStyle:{color:"#4B4038",fontWeight:"normal"}},yAxis:{max:100,splitLine:{show:!0,lineStyle:{color:"#F5F5F5",width:1,type:"solid"}}},xAxis:{splitLine:{show:!1}}}}}),{c(){t=p(),Ie.c(),i=$("meta"),r=$("meta"),me&&me.c(),s=qe(),l=p(),n=$("h1"),n.innerHTML=f,E=p(),u=$("p"),u.textContent=G,T=p(),h=$("p"),h.innerHTML=c,A=p(),b&&b.c(),oe=p(),ae=$("div"),F(x.$$.fragment),j=p(),Y=$("hr"),_e=p(),P=$("h2"),P.innerHTML=Ee,ye=p(),L&&L.c(),W=p(),B=$("div"),Q=$("div"),F(X.$$.fragment),ge=p(),D&&D.c(),le=p(),F(k.$$.fragment),K=p(),se=$("hr"),de=p(),V=$("h2"),V.innerHTML=Ae,z=p(),N&&N.c(),q=p(),w&&w.c(),J=p(),F(Z.$$.fragment),pe=p(),F(ee.$$.fragment),re=p(),H=$("div"),ue=Ve("Showing change from "),F(te.$$.fragment),Se=Ve(" to "),F(ie.$$.fragment),S=Ve("."),Oe=p(),Ce=$("hr"),He=p(),ce=$("h2"),ce.innerHTML=Ge,ke=p(),C&&C.c(),$e=p(),F(ve.$$.fragment),this.h()},l(e){t=d(e);const a=lr("svelte-2igo1p",document.head);Ie.l(a),i=O(a,"META",{name:!0,content:!0}),r=O(a,"META",{name:!0,content:!0}),me&&me.l(a),s=qe(),a.forEach(_),l=d(e),n=O(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),he(n)!=="svelte-1e6g4bd"&&(n.innerHTML=f),E=d(e),u=O(e,"P",{class:!0,"data-svelte-h":!0}),he(u)!=="svelte-ohija0"&&(u.textContent=G),T=d(e),h=O(e,"P",{class:!0,"data-svelte-h":!0}),he(h)!=="svelte-rsd8gs"&&(h.innerHTML=c),A=d(e),b&&b.l(e),oe=d(e),ae=O(e,"DIV",{class:!0});var Ue=We(ae);M(x.$$.fragment,Ue),Ue.forEach(_),j=d(e),Y=O(e,"HR",{class:!0}),_e=d(e),P=O(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),he(P)!=="svelte-hl397r"&&(P.innerHTML=Ee),ye=d(e),L&&L.l(e),W=d(e),B=O(e,"DIV",{class:!0});var Me=We(B);Q=O(Me,"DIV",{class:!0});var Fe=We(Q);M(X.$$.fragment,Fe),Fe.forEach(_),Me.forEach(_),ge=d(e),D&&D.l(e),le=d(e),M(k.$$.fragment,e),K=d(e),se=O(e,"HR",{class:!0}),de=d(e),V=O(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),he(V)!=="svelte-uy0tjw"&&(V.innerHTML=Ae),z=d(e),N&&N.l(e),q=d(e),w&&w.l(e),J=d(e),M(Z.$$.fragment,e),pe=d(e),M(ee.$$.fragment,e),re=d(e),H=O(e,"DIV",{class:!0});var fe=We(H);ue=Pe(fe,"Showing change from "),M(te.$$.fragment,fe),Se=Pe(fe," to "),M(ie.$$.fragment,fe),S=Pe(fe,"."),fe.forEach(_),Oe=d(e),Ce=O(e,"HR",{class:!0}),He=d(e),ce=O(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),he(ce)!=="svelte-13wikyo"&&(ce.innerHTML=Ge),ke=d(e),C&&C.l(e),$e=d(e),M(ve.$$.fragment,e),this.h()},h(){g(i,"name","twitter:card"),g(i,"content","summary_large_image"),g(r,"name","twitter:site"),g(r,"content","@evidence_dev"),g(n,"class","markdown"),g(n,"id","food-security-pressure-trends"),g(u,"class","markdown"),g(h,"class","markdown"),g(ae,"class","max-w-md"),g(Y,"class","markdown"),g(P,"class","markdown"),g(P,"id","main-trend-over-time"),g(Q,"class","w-64"),g(B,"class","flex justify-end"),g(se,"class","markdown"),g(V,"class","markdown"),g(V,"id","largest-increases-in-undernourishment"),g(H,"class","text-sm text-gray-500"),g(Ce,"class","markdown"),g(ce,"class","markdown"),g(ce,"id","how-has-pressure-shifted-over-time")},m(e,a){m(e,t,a),Ie.m(document.head,null),Re(document.head,i),Re(document.head,r),me&&me.m(document.head,null),Re(document.head,s),m(e,l,a),m(e,n,a),m(e,E,a),m(e,u,a),m(e,T,a),m(e,h,a),m(e,A,a),b&&b.m(e,a),m(e,oe,a),m(e,ae,a),U(x,ae,null),m(e,j,a),m(e,Y,a),m(e,_e,a),m(e,P,a),m(e,ye,a),L&&L.m(e,a),m(e,W,a),m(e,B,a),Re(B,Q),U(X,Q,null),m(e,ge,a),D&&D.m(e,a),m(e,le,a),U(k,e,a),m(e,K,a),m(e,se,a),m(e,de,a),m(e,V,a),m(e,z,a),N&&N.m(e,a),m(e,q,a),w&&w.m(e,a),m(e,J,a),U(Z,e,a),m(e,pe,a),U(ee,e,a),m(e,re,a),m(e,H,a),Re(H,ue),U(te,H,null),Re(H,Se),U(ie,H,null),Re(H,S),m(e,Oe,a),m(e,Ce,a),m(e,He,a),m(e,ce,a),m(e,ke,a),C&&C.m(e,a),m(e,$e,a),U(ve,e,a),Be=!0},p(e,a){Ie.p(e,a),typeof R=="object"&&me.p(e,a),e[0]?b?(b.p(e,a),a[0]&1&&y(b,1)):(b=rr(e),b.c(),y(b,1),b.m(oe.parentNode,oe)):b&&(be(),v(b,1,1,()=>{b=null}),Te());const Ue={};a[0]&1&&(Ue.data=e[0]),x.$set(Ue),e[1]?L?(L.p(e,a),a[0]&2&&y(L,1)):(L=tr(e),L.c(),y(L,1),L.m(W.parentNode,W)):L&&(be(),v(L,1,1,()=>{L=null}),Te());const Me={};a[0]&2&&(Me.data=e[1]),X.$set(Me),e[2]?D?(D.p(e,a),a[0]&4&&y(D,1)):(D=ir(e),D.c(),y(D,1),D.m(le.parentNode,le)):D&&(be(),v(D,1,1,()=>{D=null}),Te());const Fe={};a[0]&4&&(Fe.data=e[2]),k.$set(Fe),e[3]?N?(N.p(e,a),a[0]&8&&y(N,1)):(N=nr(e),N.c(),y(N,1),N.m(q.parentNode,q)):N&&(be(),v(N,1,1,()=>{N=null}),Te()),e[4]?w?(w.p(e,a),a[0]&16&&y(w,1)):(w=ar(e),w.c(),y(w,1),w.m(J.parentNode,J)):w&&(be(),v(w,1,1,()=>{w=null}),Te());const fe={};a[0]&8&&(fe.data=e[3]),Z.$set(fe);const Ye={};a[0]&8&&(Ye.data=e[3]),a[1]&131072&&(Ye.$$scope={dirty:a,ctx:e}),ee.$set(Ye);const xe={};a[0]&16&&(xe.data=e[4]),te.$set(xe);const je={};a[0]&16&&(je.data=e[4]),ie.$set(je),e[5]?C?(C.p(e,a),a[0]&32&&y(C,1)):(C=sr(e),C.c(),y(C,1),C.m($e.parentNode,$e)):C&&(be(),v(C,1,1,()=>{C=null}),Te());const Qe={};a[0]&32&&(Qe.data=e[5]),ve.$set(Qe)},i(e){Be||(y(b),y(x.$$.fragment,e),y(L),y(X.$$.fragment,e),y(D),y(k.$$.fragment,e),y(N),y(w),y(Z.$$.fragment,e),y(ee.$$.fragment,e),y(te.$$.fragment,e),y(ie.$$.fragment,e),y(C),y(ve.$$.fragment,e),Be=!0)},o(e){v(b),v(x.$$.fragment,e),v(L),v(X.$$.fragment,e),v(D),v(k.$$.fragment,e),v(N),v(w),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(te.$$.fragment,e),v(ie.$$.fragment,e),v(C),v(ve.$$.fragment,e),Be=!1},d(e){e&&(_(t),_(l),_(n),_(E),_(u),_(T),_(h),_(A),_(oe),_(ae),_(j),_(Y),_(_e),_(P),_(ye),_(W),_(B),_(ge),_(le),_(K),_(se),_(de),_(V),_(z),_(q),_(J),_(pe),_(re),_(H),_(Oe),_(Ce),_(He),_(ce),_(ke),_($e)),Ie.d(e),_(i),_(r),me&&me.d(e),_(s),b&&b.d(e),I(x),L&&L.d(e),I(X),D&&D.d(e),I(k,e),N&&N.d(e),w&&w.d(e),I(Z,e),I(ee,e),I(te),I(ie),C&&C.d(e),I(ve,e)}}}const R={title:"Trends"};function Cr(o,t,i){let r,s;Xe(o,Or,S=>i(33,r=S)),Xe(o,ze,S=>i(38,s=S));let{data:l}=t,{data:n={},customFormattingSettings:f,__db:E,inputs:u}=l;ur(ze,s="77babbf1a523791bd08c45361ddd90c7",s);let G=pr(Er(u));cr(G.subscribe(S=>i(8,u=S))),mr(Rr,{getCustomFormats:()=>f.customFormats||[]});const T=(S,Oe)=>Ar(E.query,S,{query_name:Oe});vr(T),r.params,fr(()=>!0);let h={initialData:void 0,initialError:void 0},c=ne`SELECT 'All Regions' AS region

UNION ALL

SELECT DISTINCT
    un_region AS region
FROM food_security.country_food_security_yearly
WHERE un_region IS NOT NULL
ORDER BY region`,A=`SELECT 'All Regions' AS region

UNION ALL

SELECT DISTINCT
    un_region AS region
FROM food_security.country_food_security_yearly
WHERE un_region IS NOT NULL
ORDER BY region`;n.region_filter_data&&(n.region_filter_data instanceof Error?h.initialError=n.region_filter_data:h.initialData=n.region_filter_data,n.region_filter_columns&&(h.knownColumns=n.region_filter_columns));let oe,ae=!1;const x=Le.createReactive({callback:S=>{i(0,oe=S)},execFn:T},{id:"region_filter",...h});x(A,{noResolve:c,...h}),globalThis[Symbol.for("region_filter")]={get value(){return oe}};let j={initialData:void 0,initialError:void 0},Y=ne`SELECT 'avg_pressure_score' AS metric, 'Average Pressure Score' AS metric_label

UNION ALL

SELECT 'avg_undernourishment' AS metric, 'Average Undernourishment' AS metric_label`,_e=`SELECT 'avg_pressure_score' AS metric, 'Average Pressure Score' AS metric_label

UNION ALL

SELECT 'avg_undernourishment' AS metric, 'Average Undernourishment' AS metric_label`;n.metric_filter_data&&(n.metric_filter_data instanceof Error?j.initialError=n.metric_filter_data:j.initialData=n.metric_filter_data,n.metric_filter_columns&&(j.knownColumns=n.metric_filter_columns));let P,Ee=!1;const ye=Le.createReactive({callback:S=>{i(1,P=S)},execFn:T},{id:"metric_filter",...j});ye(_e,{noResolve:Y,...j}),globalThis[Symbol.for("metric_filter")]={get value(){return P}};let W={initialData:void 0,initialError:void 0},B=ne`WITH yearly_metrics AS (
    SELECT
        year,
        ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score,
        ROUND(AVG(undernourishment_prevalence_pct), 1) AS avg_undernourishment
    FROM food_security.country_food_security_yearly
    WHERE (
        '${u.selected_region.value}' = 'All Regions'
        OR un_region = '${u.selected_region.value}'
    )
    GROUP BY year
),

long_metrics AS (
    SELECT
        year,
        'avg_pressure_score' AS metric,
        'Average Pressure Score' AS metric_label,
        avg_pressure_score AS metric_value
    FROM yearly_metrics

    UNION ALL

    SELECT
        year,
        'avg_undernourishment' AS metric,
        'Average Undernourishment' AS metric_label,
        avg_undernourishment AS metric_value
    FROM yearly_metrics
)

SELECT
    year,
    metric_label,
    metric_value
FROM long_metrics
WHERE metric = '${u.selected_metric.value}'
ORDER BY year`,Q=`WITH yearly_metrics AS (
    SELECT
        year,
        ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score,
        ROUND(AVG(undernourishment_prevalence_pct), 1) AS avg_undernourishment
    FROM food_security.country_food_security_yearly
    WHERE (
        '${u.selected_region.value}' = 'All Regions'
        OR un_region = '${u.selected_region.value}'
    )
    GROUP BY year
),

long_metrics AS (
    SELECT
        year,
        'avg_pressure_score' AS metric,
        'Average Pressure Score' AS metric_label,
        avg_pressure_score AS metric_value
    FROM yearly_metrics

    UNION ALL

    SELECT
        year,
        'avg_undernourishment' AS metric,
        'Average Undernourishment' AS metric_label,
        avg_undernourishment AS metric_value
    FROM yearly_metrics
)

SELECT
    year,
    metric_label,
    metric_value
FROM long_metrics
WHERE metric = '${u.selected_metric.value}'
ORDER BY year`;n.main_trend_data&&(n.main_trend_data instanceof Error?W.initialError=n.main_trend_data:W.initialData=n.main_trend_data,n.main_trend_columns&&(W.knownColumns=n.main_trend_columns));let X,ge=!1;const le=Le.createReactive({callback:S=>{i(2,X=S)},execFn:T},{id:"main_trend",...W});le(Q,{noResolve:B,...W}),globalThis[Symbol.for("main_trend")]={get value(){return X}};let k={initialData:void 0,initialError:void 0},K=ne`SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    ROUND(first_year_pct, 1) AS first_year_pct,
    ROUND(last_year_pct, 1) AS last_year_pct,
    ROUND(absolute_change_pct, 1) AS change_pp
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
  AND (
      '${u.selected_region.value}' = 'All Regions'
      OR un_region = '${u.selected_region.value}'
  )
ORDER BY absolute_change_pct DESC
LIMIT 10`,se=`SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    ROUND(first_year_pct, 1) AS first_year_pct,
    ROUND(last_year_pct, 1) AS last_year_pct,
    ROUND(absolute_change_pct, 1) AS change_pp
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
  AND (
      '${u.selected_region.value}' = 'All Regions'
      OR un_region = '${u.selected_region.value}'
  )
ORDER BY absolute_change_pct DESC
LIMIT 10`;n.worsening_data&&(n.worsening_data instanceof Error?k.initialError=n.worsening_data:k.initialData=n.worsening_data,n.worsening_columns&&(k.knownColumns=n.worsening_columns));let de,V=!1;const Ae=Le.createReactive({callback:S=>{i(3,de=S)},execFn:T},{id:"worsening",...k});Ae(se,{noResolve:K,...k}),globalThis[Symbol.for("worsening")]={get value(){return de}};let z={initialData:void 0,initialError:void 0},q=ne`SELECT
    MIN(first_year) AS first_year,
    MAX(last_year) AS last_year
FROM (SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    ROUND(first_year_pct, 1) AS first_year_pct,
    ROUND(last_year_pct, 1) AS last_year_pct,
    ROUND(absolute_change_pct, 1) AS change_pp
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
  AND (
      '${u.selected_region.value}' = 'All Regions'
      OR un_region = '${u.selected_region.value}'
  )
ORDER BY absolute_change_pct DESC
LIMIT 10)`,J=`SELECT
    MIN(first_year) AS first_year,
    MAX(last_year) AS last_year
FROM (SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    ROUND(first_year_pct, 1) AS first_year_pct,
    ROUND(last_year_pct, 1) AS last_year_pct,
    ROUND(absolute_change_pct, 1) AS change_pp
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
  AND (
      '${u.selected_region.value}' = 'All Regions'
      OR un_region = '${u.selected_region.value}'
  )
ORDER BY absolute_change_pct DESC
LIMIT 10)`;n.worsening_period_data&&(n.worsening_period_data instanceof Error?z.initialError=n.worsening_period_data:z.initialData=n.worsening_period_data,n.worsening_period_columns&&(z.knownColumns=n.worsening_period_columns));let Z,pe=!1;const ee=Le.createReactive({callback:S=>{i(4,Z=S)},execFn:T},{id:"worsening_period",...z});ee(J,{noResolve:q,...z}),globalThis[Symbol.for("worsening_period")]={get value(){return Z}};let re={initialData:void 0,initialError:void 0},H=ne`WITH driver_counts AS (
    SELECT
        year,
        main_pressure_driver AS driver,
        COUNT(*) AS country_count
    FROM food_security.country_food_security_yearly
    WHERE main_pressure_driver IS NOT NULL
      AND (
          '${u.selected_region.value}' = 'All Regions'
          OR un_region = '${u.selected_region.value}'
      )
    GROUP BY year, main_pressure_driver
),

driver_shares AS (
    SELECT
        year,
        driver,
        country_count,
        ROUND(
            country_count * 100.0 / SUM(country_count) OVER (PARTITION BY year),
            0
        ) AS country_share
    FROM driver_counts
)

SELECT
    year,
    driver,
    country_count,
    country_share
FROM driver_shares
ORDER BY year, driver`,ue=`WITH driver_counts AS (
    SELECT
        year,
        main_pressure_driver AS driver,
        COUNT(*) AS country_count
    FROM food_security.country_food_security_yearly
    WHERE main_pressure_driver IS NOT NULL
      AND (
          '${u.selected_region.value}' = 'All Regions'
          OR un_region = '${u.selected_region.value}'
      )
    GROUP BY year, main_pressure_driver
),

driver_shares AS (
    SELECT
        year,
        driver,
        country_count,
        ROUND(
            country_count * 100.0 / SUM(country_count) OVER (PARTITION BY year),
            0
        ) AS country_share
    FROM driver_counts
)

SELECT
    year,
    driver,
    country_count,
    country_share
FROM driver_shares
ORDER BY year, driver`;n.drivers_time_data&&(n.drivers_time_data instanceof Error?re.initialError=n.drivers_time_data:re.initialData=n.drivers_time_data,n.drivers_time_columns&&(re.knownColumns=n.drivers_time_columns));let te,Se=!1;const ie=Le.createReactive({callback:S=>{i(5,te=S)},execFn:T},{id:"drivers_time",...re});return ie(ue,{noResolve:H,...re}),globalThis[Symbol.for("drivers_time")]={get value(){return te}},o.$$set=S=>{"data"in S&&i(6,l=S.data)},o.$$.update=()=>{o.$$.dirty[0]&64&&i(7,{data:n={},customFormattingSettings:f,__db:E}=l,n),o.$$.dirty[0]&128&&Sr.set(Object.keys(n).length>0),o.$$.dirty[1]&4&&r.params,o.$$.dirty[0]&7680&&(c||!ae?c||(x(A,{noResolve:c,...h}),i(12,ae=!0)):x(A,{noResolve:c})),o.$$.dirty[0]&122880&&(Y||!Ee?Y||(ye(_e,{noResolve:Y,...j}),i(16,Ee=!0)):ye(_e,{noResolve:Y})),o.$$.dirty[0]&256&&i(18,B=ne`WITH yearly_metrics AS (
    SELECT
        year,
        ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score,
        ROUND(AVG(undernourishment_prevalence_pct), 1) AS avg_undernourishment
    FROM food_security.country_food_security_yearly
    WHERE (
        '${u.selected_region.value}' = 'All Regions'
        OR un_region = '${u.selected_region.value}'
    )
    GROUP BY year
),

long_metrics AS (
    SELECT
        year,
        'avg_pressure_score' AS metric,
        'Average Pressure Score' AS metric_label,
        avg_pressure_score AS metric_value
    FROM yearly_metrics

    UNION ALL

    SELECT
        year,
        'avg_undernourishment' AS metric,
        'Average Undernourishment' AS metric_label,
        avg_undernourishment AS metric_value
    FROM yearly_metrics
)

SELECT
    year,
    metric_label,
    metric_value
FROM long_metrics
WHERE metric = '${u.selected_metric.value}'
ORDER BY year`),o.$$.dirty[0]&256&&i(19,Q=`WITH yearly_metrics AS (
    SELECT
        year,
        ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score,
        ROUND(AVG(undernourishment_prevalence_pct), 1) AS avg_undernourishment
    FROM food_security.country_food_security_yearly
    WHERE (
        '${u.selected_region.value}' = 'All Regions'
        OR un_region = '${u.selected_region.value}'
    )
    GROUP BY year
),

long_metrics AS (
    SELECT
        year,
        'avg_pressure_score' AS metric,
        'Average Pressure Score' AS metric_label,
        avg_pressure_score AS metric_value
    FROM yearly_metrics

    UNION ALL

    SELECT
        year,
        'avg_undernourishment' AS metric,
        'Average Undernourishment' AS metric_label,
        avg_undernourishment AS metric_value
    FROM yearly_metrics
)

SELECT
    year,
    metric_label,
    metric_value
FROM long_metrics
WHERE metric = '${u.selected_metric.value}'
ORDER BY year`),o.$$.dirty[0]&1966080&&(B||!ge?B||(le(Q,{noResolve:B,...W}),i(20,ge=!0)):le(Q,{noResolve:B})),o.$$.dirty[0]&256&&i(22,K=ne`SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    ROUND(first_year_pct, 1) AS first_year_pct,
    ROUND(last_year_pct, 1) AS last_year_pct,
    ROUND(absolute_change_pct, 1) AS change_pp
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
  AND (
      '${u.selected_region.value}' = 'All Regions'
      OR un_region = '${u.selected_region.value}'
  )
ORDER BY absolute_change_pct DESC
LIMIT 10`),o.$$.dirty[0]&256&&i(23,se=`SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    ROUND(first_year_pct, 1) AS first_year_pct,
    ROUND(last_year_pct, 1) AS last_year_pct,
    ROUND(absolute_change_pct, 1) AS change_pp
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
  AND (
      '${u.selected_region.value}' = 'All Regions'
      OR un_region = '${u.selected_region.value}'
  )
ORDER BY absolute_change_pct DESC
LIMIT 10`),o.$$.dirty[0]&31457280&&(K||!V?K||(Ae(se,{noResolve:K,...k}),i(24,V=!0)):Ae(se,{noResolve:K})),o.$$.dirty[0]&256&&i(26,q=ne`SELECT
    MIN(first_year) AS first_year,
    MAX(last_year) AS last_year
FROM (SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    ROUND(first_year_pct, 1) AS first_year_pct,
    ROUND(last_year_pct, 1) AS last_year_pct,
    ROUND(absolute_change_pct, 1) AS change_pp
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
  AND (
      '${u.selected_region.value}' = 'All Regions'
      OR un_region = '${u.selected_region.value}'
  )
ORDER BY absolute_change_pct DESC
LIMIT 10)`),o.$$.dirty[0]&256&&i(27,J=`SELECT
    MIN(first_year) AS first_year,
    MAX(last_year) AS last_year
FROM (SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    ROUND(first_year_pct, 1) AS first_year_pct,
    ROUND(last_year_pct, 1) AS last_year_pct,
    ROUND(absolute_change_pct, 1) AS change_pp
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
  AND (
      '${u.selected_region.value}' = 'All Regions'
      OR un_region = '${u.selected_region.value}'
  )
ORDER BY absolute_change_pct DESC
LIMIT 10)`),o.$$.dirty[0]&503316480&&(q||!pe?q||(ee(J,{noResolve:q,...z}),i(28,pe=!0)):ee(J,{noResolve:q})),o.$$.dirty[0]&256&&i(30,H=ne`WITH driver_counts AS (
    SELECT
        year,
        main_pressure_driver AS driver,
        COUNT(*) AS country_count
    FROM food_security.country_food_security_yearly
    WHERE main_pressure_driver IS NOT NULL
      AND (
          '${u.selected_region.value}' = 'All Regions'
          OR un_region = '${u.selected_region.value}'
      )
    GROUP BY year, main_pressure_driver
),

driver_shares AS (
    SELECT
        year,
        driver,
        country_count,
        ROUND(
            country_count * 100.0 / SUM(country_count) OVER (PARTITION BY year),
            0
        ) AS country_share
    FROM driver_counts
)

SELECT
    year,
    driver,
    country_count,
    country_share
FROM driver_shares
ORDER BY year, driver`),o.$$.dirty[0]&256&&i(31,ue=`WITH driver_counts AS (
    SELECT
        year,
        main_pressure_driver AS driver,
        COUNT(*) AS country_count
    FROM food_security.country_food_security_yearly
    WHERE main_pressure_driver IS NOT NULL
      AND (
          '${u.selected_region.value}' = 'All Regions'
          OR un_region = '${u.selected_region.value}'
      )
    GROUP BY year, main_pressure_driver
),

driver_shares AS (
    SELECT
        year,
        driver,
        country_count,
        ROUND(
            country_count * 100.0 / SUM(country_count) OVER (PARTITION BY year),
            0
        ) AS country_share
    FROM driver_counts
)

SELECT
    year,
    driver,
    country_count,
    country_share
FROM driver_shares
ORDER BY year, driver`),o.$$.dirty[0]&1610612736|o.$$.dirty[1]&3&&(H||!Se?H||(ie(ue,{noResolve:H,...re}),i(32,Se=!0)):ie(ue,{noResolve:H}))},i(10,c=ne`SELECT 'All Regions' AS region

UNION ALL

SELECT DISTINCT
    un_region AS region
FROM food_security.country_food_security_yearly
WHERE un_region IS NOT NULL
ORDER BY region`),i(11,A=`SELECT 'All Regions' AS region

UNION ALL

SELECT DISTINCT
    un_region AS region
FROM food_security.country_food_security_yearly
WHERE un_region IS NOT NULL
ORDER BY region`),i(14,Y=ne`SELECT 'avg_pressure_score' AS metric, 'Average Pressure Score' AS metric_label

UNION ALL

SELECT 'avg_undernourishment' AS metric, 'Average Undernourishment' AS metric_label`),i(15,_e=`SELECT 'avg_pressure_score' AS metric, 'Average Pressure Score' AS metric_label

UNION ALL

SELECT 'avg_undernourishment' AS metric, 'Average Undernourishment' AS metric_label`),[oe,P,X,de,Z,te,l,n,u,h,c,A,ae,j,Y,_e,Ee,W,B,Q,ge,k,K,se,V,z,q,J,pe,re,H,ue,Se,r]}class Pr extends yr{constructor(t){super(),gr(this,t,Cr,wr,_r,{data:6},null,[-1,-1])}}export{Pr as component};
