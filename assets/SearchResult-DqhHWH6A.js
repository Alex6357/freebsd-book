import{u as j,f as $,g as ee,h as B,i as se,j as ae,t as le,k as te,l as D,m as q,n as re,p as M,q as a,s as F,v as I,R as U,x as ue,y as ne,z as ie,A as oe,O as ce,P as ve,B as he,C as pe,D as de,E as L,F as ye,G as me,H as fe,I as ge}from"./app-CO7lxarn.js";const He=["/","/begin/","/begin/freebsd-basic.html","/begin/handbook-and-man.html","/begin/what-is-freebsd.html","/installation/","/installation/install-as-virtualmachine.html","/installation/installation-13.html","/installation/installation-14.html","/installation/which-file-should-i-choose.html","/preface/","/preface/to-beginners.html","/404.html"],Re="SEARCH_PRO_QUERY_HISTORY",p=j(Re,[]),ke=()=>{const{queryHistoryCount:l}=L,t=l>0;return{enabled:t,queryHistory:p,addQueryHistory:r=>{t&&(p.value.length<l?p.value=Array.from(new Set([r,...p.value])):p.value=Array.from(new Set([r,...p.value.slice(0,l-1)])))},removeQueryHistory:r=>{p.value=[...p.value.slice(0,r),...p.value.slice(r+1)]}}},E=l=>He[l.id]+("anchor"in l?`#${l.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:A}=L,d=j(Qe,[]),be=()=>{const l=A>0;return{enabled:l,resultHistory:d,addResultHistory:t=>{if(l){const r={link:E(t),display:t.display};"header"in t&&(r.header=t.header),d.value.length<A?d.value=[r,...d.value]:d.value=[r,...d.value.slice(0,A-1)]}},removeResultHistory:t=>{d.value=[...d.value.slice(0,t),...d.value.slice(t+1)]}}},xe=l=>{const t=ce(),r=B(),{search:Q,terminate:v}=ve(),m=D(!1),f=he([]);return pe(()=>{const y=()=>{f.value=[],m.value=!1},b=de(g=>{m.value=!0,g?Q({type:"search",query:g,locale:r.value,options:t.value}).then(h=>{f.value=h,m.value=!1}).catch(h=>{console.error(h),y()}):y()},L.searchDelay);M([l,r],()=>b(l.value),{immediate:!0}),ye(()=>{v()})}),{searching:m,results:f}};var Se=$({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:t}){const r=ee(),Q=B(),v=se(ae),{enabled:m,addQueryHistory:f,queryHistory:y,removeQueryHistory:b}=ke(),{enabled:g,resultHistory:h,addResultHistory:P,removeResultHistory:Y}=be(),T=m||g,x=le(l,"query"),{results:H,searching:z}=xe(x),u=te({isQuery:!0,index:0}),o=D(0),c=D(0),O=q(()=>T&&(y.value.length>0||h.value.length>0)),w=q(()=>H.value.length>0),S=q(()=>H.value[o.value]||null),G=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?h.value.length-1:y.value.length-1):u.index=s-1},V=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:h.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{o.value=o.value>0?o.value-1:H.value.length-1,c.value=S.value.contents.length-1},K=()=>{o.value=o.value<H.value.length-1?o.value+1:0,c.value=0},N=()=>{c.value<S.value.contents.length-1?c.value+=1:K()},W=()=>{c.value>0?c.value-=1:J()},C=e=>e.map(s=>me(s)?s:a(s[0],s[1])),X=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[n,k=""]=ge(s)?s[Q.value].split("$content"):s.split("$content");return e.display.map(i=>a("div",C([n,...i,k])))}return e.display.map(s=>a("div",C(s)))},R=()=>{o.value=0,c.value=0,t("updateQuery",""),t("close")};return re("keydown",e=>{if(l.isFocusing){if(w.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=S.value.contents[c.value];f(l.query),P(s),r.push(E(s)),R()}}else if(g){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(t("updateQuery",y.value[s]),e.preventDefault()):(r.push(h.value[s].link),R())}}}}),M([o,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:x.value?!w.value:!O.value}],id:"search-pro-results"},x.value===""?T?O.value?[m?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},v.value.queryHistory),y.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{t("updateQuery",e)}},[a(F,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),b(s)}})]))])):null,g?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},v.value.resultHistory),h.value.map((e,s)=>a(U,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{R()}},()=>[a(F,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(n=>C(n)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),Y(s)}})]))])):null]:v.value.emptyHistory:v.value.emptyResult:z.value?a(ue,{hint:v.value.searching}):w.value?a("ul",{class:"search-pro-result-list"},H.value.map(({title:e,contents:s},n)=>{const k=o.value===n;return a("li",{class:["search-pro-result-list-item",{active:k}]},[a("div",{class:"search-pro-result-title"},e||v.value.defaultTitle),s.map((i,Z)=>{const _=k&&c.value===Z;return a(U,{to:E(i),class:["search-pro-result-item",{active:_,"aria-selected":_}],onClick:()=>{f(l.query),P(i),R()}},()=>[i.type==="text"?null:a(i.type==="title"?ne:i.type==="heading"?ie:oe,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[i.type==="text"&&i.header?a("div",{class:"content-header"},i.header):null,a("div",X(i))])])})])})):v.value.emptyResult)}});export{Se as default};