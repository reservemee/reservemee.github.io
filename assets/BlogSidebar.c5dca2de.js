import{r as l,bp as b,j as e,n as s,ad as u,a7 as N,ae as p,i as c,L as n}from"./index.09005372.js";import{I as v}from"./index.9b0273f1.js";import{A as f}from"./App.c0ce4c5e.js";import{S as x}from"./search.b852d141.js";const j=()=>{const[t,d]=l.exports.useState(null);l.exports.useEffect(()=>{b.get("/blog/list/data/sidebar").then(a=>d(a.data))},[]);const o={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},h=()=>t.recentPosts.map((a,r)=>s("div",{className:c("d-flex",{"mb-2":r!==t.recentPosts.length-1}),children:[e(n,{className:"me-2",to:`/pages/blog/detail/${a.id}`,children:e("img",{className:"rounded",src:a.img,alt:a.title,width:"100",height:"70"})}),s("div",{children:[e("h6",{className:"blog-recent-post-title",children:e(n,{className:"text-body-heading",to:`/pages/blog/detail/${a.id}`,children:a.title})}),e("div",{className:"text-muted mb-0",children:a.createdTime})]})]},r)),m=()=>t.categories.map((a,r)=>{const g=v[a.icon];return s("div",{className:c("d-flex justify-content-start align-items-center",{"mb-75":r!==t.categories.length-1}),children:[e("a",{className:"me-75",href:"/",onClick:i=>i.preventDefault(),children:e(f,{className:"rounded",color:o[a.category],icon:e(g,{size:15})})}),e("a",{href:"/",onClick:i=>i.preventDefault(),children:e("div",{className:"blog-category-title text-body",children:a.category})})]},r)});return e("div",{className:"sidebar-detached sidebar-right",children:e("div",{className:"sidebar",children:e("div",{className:"blog-sidebar right-sidebar my-2 my-lg-0",children:s("div",{className:"right-sidebar-content",children:[e("div",{className:"blog-search",children:s(u,{className:"input-group-merge",children:[e(N,{placeholder:"Search here"}),e(p,{children:e(x,{size:14})})]})}),t!==null?s(l.exports.Fragment,{children:[s("div",{className:"blog-recent-posts mt-3",children:[e("h6",{className:"section-label",children:"Recent Posts"}),e("div",{className:"mt-75",children:h()})]}),s("div",{className:"blog-categories mt-3",children:[e("h6",{className:"section-label",children:"Categories"}),e("div",{className:"mt-1",children:m()})]})]}):null]})})})})};export{j as B};