import{r as s,bp as v,n as r,j as e,a0 as h,a1 as t,aP as n,cl as x,aQ as d,a2 as y,aq as C,a3 as c,U as k,D as w,v as D,w as l,a5 as B,a7 as m,a6 as F,A as z,B as T,i as S}from"./index.6fe50bb5.js";import{A as p,w as L}from"./App.cb24265c.js";import{B as H}from"./BlogSidebar.cb2d9f8f.js";import{B as W}from"./index.95590a07.js";/* empty css                  */import{M as A}from"./message-square.8972f5ee.js";import{B as G}from"./bookmark.5469538e.js";import{S as I}from"./share-2.4c2cf992.js";import{G as $}from"./github.facf1e81.js";import{G as j}from"./globe.5c95ae82.js";import{F as M}from"./facebook.96e14983.js";import{T as U}from"./twitter.a09fa4f7.js";import{L as q}from"./linkedin.fb47b4f2.js";import{C as P}from"./maximize-2.4405a54d.js";import"./index.3cb86da8.js";import"./truck.c0636886.js";import"./square.30a367b3.js";import"./rss.5bbc3927.js";import"./archive.0274e76e.js";import"./save.c3608473.js";import"./arrow-down.976be679.js";import"./arrow-left.5c22faea.js";import"./arrow-right.9ed1d42e.js";import"./award.a47f7ee2.js";import"./gift.99a9131b.js";import"./wifi.cb90202d.js";import"./book.6cab846a.js";import"./box.9e46a010.js";import"./briefcase.bbe9eddf.js";import"./calendar.5243851c.js";import"./inbox.5e03950f.js";import"./check-circle.3e5e100f.js";import"./video.bd398d5b.js";import"./chevron-down.37024f47.js";import"./chevron-left.f5ba6e0f.js";import"./chevron-right.c5170c44.js";import"./clipboard.7c5375b6.js";import"./clock.08cd3582.js";import"./sun.2e137f18.js";import"./code.3c126f3c.js";import"./copy.11172a28.js";import"./credit-card.e6f142a2.js";import"./database.bf359c7d.js";import"./dollar-sign.ae230f05.js";import"./download-cloud.845aa5ca.js";import"./download.154bbd45.js";import"./edit-2.7011fc7e.js";import"./edit.fe14798b.js";import"./external-link.22639879.js";import"./eye-off.f9bf3fae.js";import"./eye.49f78dde.js";import"./file.f6ccadc0.js";import"./grid.2e38ff79.js";import"./hash.6b82d28a.js";import"./help-circle.4bfacc23.js";import"./image.18305c9b.js";import"./info.519efce9.js";import"./instagram.5b4d6506.js";import"./link.9bf14d9d.js";import"./list.5f684113.js";import"./lock.80c7f84c.js";import"./mail.7ba576df.js";import"./map-pin.8f2480f3.js";import"./minus.6b747311.js";import"./monitor.9b7ae26e.js";import"./more-vertical.32103cda.js";import"./package.60475d97.js";import"./paperclip.e9c797b4.js";import"./pen-tool.856eaa54.js";import"./phone-call.10d4f72c.js";import"./play.94937c9d.js";import"./plus-circle.92799cdd.js";import"./plus.fb3ecba7.js";import"./pocket.88639a90.js";import"./printer.76806e48.js";import"./rotate-cw.ad341bc1.js";import"./search.2a5f6fd3.js";import"./shopping-bag.9f9faa40.js";import"./share.badf138f.js";import"./shield.359fe44c.js";import"./shopping-cart.a65e7766.js";import"./slack.16a0d944.js";import"./smartphone.12bed868.js";import"./star.773b3286.js";import"./tablet.16b38db6.js";import"./tag.c0952bac.js";import"./thumbs-up.ccd801bd.js";import"./trash-2.f0c68bed.js";import"./trash.913a82c1.js";import"./watch.ad266b9c.js";import"./trending-up.815e0c1e.js";import"./user-check.aa2a781c.js";import"./user-plus.5c58e50e.js";import"./user-x.bbf99488.js";import"./x-circle.20df9e8f.js";import"./youtube.eabd843a.js";const Li=()=>{const[a,g]=s.exports.useState(null);s.exports.useEffect(()=>{v.get("/blog/list/data/detail").then(i=>g(i.data))},[]);const b={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},N=()=>a.blog.tags.map((i,o)=>e("a",{href:"/",onClick:u=>u.preventDefault(),children:e(T,{className:S({"me-50":o!==a.blog.tags.length-1}),color:b[i],pill:!0,children:i})},o)),f=()=>a.comments.map(i=>e(n,{className:"mb-3",children:e(d,{children:r("div",{className:"d-flex",children:[e("div",{children:e(p,{className:"me-75",img:i.avatar,imgHeight:"38",imgWidth:"38"})}),r("div",{children:[e("h6",{className:"fw-bolder mb-25",children:i.userFullName}),e(c,{children:i.commentedAt}),e(c,{children:i.commentText}),e("a",{href:"/",onClick:o=>o.preventDefault(),children:r("div",{className:"d-inline-flex align-items-center",children:[e(P,{size:18,className:"me-50"}),e("span",{children:"Reply"})]})})]})]})})},i.userFullName));return r(s.exports.Fragment,{children:[e(W,{title:"Blog Details",data:[{title:"Pages"},{title:"Blog"},{title:"Details"}]}),r("div",{className:"blog-wrapper",children:[e("div",{className:"content-detached content-left",children:e("div",{className:"content-body",children:a!==null?r(h,{children:[e(t,{sm:"12",children:r(n,{className:"mb-3",children:[e(x,{src:a.blog.img,className:"img-fluid",top:!0}),r(d,{children:[e(y,{tag:"h4",children:a.blog.title}),r("div",{className:"d-flex",children:[e(p,{className:"me-50",img:a.blog.avatar,imgHeight:"24",imgWidth:"24"}),r("div",{children:[e("small",{className:"text-muted me-25",children:"by"}),e("small",{children:e("a",{className:"text-body",href:"/",onClick:i=>i.preventDefault(),children:a.blog.userFullName})}),e("span",{className:"text-muted ms-50 me-25",children:"|"}),e("small",{className:"text-muted",children:a.blog.createdTime})]})]}),e("div",{className:"my-1 py-25",children:N()}),e("div",{dangerouslySetInnerHTML:{__html:a.blog.content}}),r("div",{className:"d-flex",children:[e("div",{children:e(p,{img:C,className:"me-2",imgHeight:"60",imgWidth:"60"})}),r("div",{children:[e("h6",{className:"fw-bolder",children:"Willie Clark"}),e(c,{className:"mb-0",children:"Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world."})]})]}),e("hr",{className:"my-2"}),r("div",{className:"d-flex align-items-center justify-content-between",children:[r("div",{className:"d-flex align-items-center",children:[r("div",{className:"d-flex align-items-center me-1",children:[e("a",{className:"me-50",href:"/",onClick:i=>i.preventDefault(),children:e(A,{size:21,className:"text-body align-middle"})}),e("a",{href:"/",onClick:i=>i.preventDefault(),children:e("div",{className:"text-body align-middle",children:L(a.blog.comments)})})]}),r("div",{className:"d-flex align-items-cente",children:[e("a",{className:"me-50",href:"/",onClick:i=>i.preventDefault(),children:e(G,{size:21,className:"text-body align-middle"})}),e("a",{href:"/",onClick:i=>i.preventDefault(),children:e("div",{className:"text-body align-middle",children:a.blog.bookmarked})})]})]}),r(k,{className:"dropdown-icon-wrapper",children:[e(w,{tag:"span",children:e(I,{size:21,className:"text-body cursor-pointer"})}),r(D,{end:!0,children:[e(l,{className:"py-50 px-1",children:e($,{size:18})}),e(l,{className:"py-50 px-1",children:e(j,{size:18})}),e(l,{className:"py-50 px-1",children:e(M,{size:18})}),e(l,{className:"py-50 px-1",children:e(U,{size:18})}),e(l,{className:"py-50 px-1",children:e(q,{size:18})})]})]})]})]})]})}),r(t,{sm:"12",id:"blogComment",children:[e("h6",{className:"section-label",children:"Comment"}),f()]}),r(t,{sm:"12",children:[e("h6",{className:"section-label",children:"Leave a Comment"}),e(n,{children:e(d,{children:e(B,{className:"form",onSubmit:i=>i.preventDefault(),children:r(h,{children:[e(t,{sm:"6",children:e("div",{className:"mb-2",children:e(m,{placeholder:"Name"})})}),e(t,{sm:"6",children:e("div",{className:"mb-2",children:e(m,{type:"email",placeholder:"Email"})})}),e(t,{sm:"6",children:e("div",{className:"mb-2",children:e(m,{type:"url",placeholder:"Website"})})}),e(t,{sm:"12",children:e("div",{className:"mb-2",children:e(m,{className:"mb-2",type:"textarea",rows:"4",placeholder:"Comment"})})}),e(t,{sm:"12",children:r("div",{className:"form-check mb-2",children:[e(m,{type:"checkbox",id:"save-data-checkbox"}),e(F,{className:"form-check-label",for:"save-data-checkbox",children:"Save my name, email, and website in this browser for the next time I comment."})]})}),e(t,{sm:"12",children:e(z,{color:"primary",children:"Post Comment"})})]})})})})]})]}):null})}),e(H,{})]})]})};export{Li as default};
