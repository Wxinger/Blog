import{_ as f,u as m,o as r,c as p,k as s,l as c,t as _,F as g,D as A,H as l,p as w,m as x,d as h,b as P,w as i,a as b,s as u,a1 as C,a2 as L,a3 as S,a4 as D,a5 as E,a6 as I,a7 as R,a8 as V,a9 as B,aa as F,V as T,j as $,y as k,ab as j,ac as N,ad as O,ae as H}from"./chunks/framework.64bc13da.js";import{t as v}from"./chunks/theme.5a6b74d7.js";import{l as G}from"./chunks/list.de1867de.js";const M=e=>(w("data-v-53c180a5"),e=e(),x(),e),U={class:"home"},q={class:"slide-view"},z={class:"user-info"},J=["src"],K={class:"name"},Q={class:"motto"},W=M(()=>s("div",{class:"panel"},[s("div",{class:"panel-item"},"✍️ 312"),s("div",{class:"panel-item"},"🕐 2023-05-12"),s("div",{class:"panel-item"},"👁️ 215")],-1)),X={class:"title"},Y={class:"content"},Z={__name:"home",setup(e){const{frontmatter:t,theme:a}=m();return console.log(a),(n,le)=>(r(),p("div",U,[s("div",q,[s("div",z,[s("img",{class:"avatar",src:c(t).info.avatar,alt:"头像"},null,8,J),s("div",K,_(c(t).info.name),1),s("div",Q,_(c(t).info.motto),1)]),W,s("ul",null,[(r(!0),p(g,null,A(c(t).info.features,d=>(r(),p("li",{key:d.title},[s("div",X,_(d.title),1)]))),128))])]),s("div",Y,[l(G,{type:"vue"})])]))}},ee=f(Z,[["__scopeId","data-v-53c180a5"]]);const te={},ae={class:"footer"};function se(e,t){return r(),p("div",ae," 鑫@2024·Blog ")}const ne=f(te,[["render",se],["__scopeId","data-v-f79ce8c4"]]),oe=h({__name:"myLayout",setup(e){const{Layout:t}=v;return(a,n)=>(r(),P(c(t),null,{"doc-before":i(()=>[b(" title ")]),"doc-after":i(()=>[]),"home-hero-before":i(()=>[l(ee)]),"home-features-after":i(()=>[l(ne)]),_:1}))}});const ce={...v,Layout:oe,enhanceApp({app:e}){}};function y(e){if(e.extends){const t=y(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=y(ce),re=h({name:"VitePressApp",setup(){const{site:e}=m();return $(()=>{k(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),j(),N(),O(),o.setup&&o.setup(),()=>H(o.Layout)}});async function ie(){const e=_e(),t=pe();t.provide(L,e);const a=S(e.route);return t.provide(D,a),t.component("Content",E),t.component("ClientOnly",I),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:R}),{app:t,router:e,data:a}}function pe(){return V(re)}function _e(){let e=u,t;return B(a=>{let n=F(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),u&&(e=!1),T(()=>import(n),[])):null},o.NotFound)}u&&ie().then(({app:e,router:t,data:a})=>{t.go().then(()=>{C(t.route,a.site),e.mount("#app")})});export{ie as createApp};
