import{r as s,bp as v,n as r,j as e,a0 as h,a1 as t,aP as n,cl as x,aQ as d,a2 as y,aq as C,a3 as c,U as k,D as w,v as D,w as l,a5 as B,a7 as m,a6 as F,A as z,B as T,i as S}from"./index.09005372.js";import{A as p,w as L}from"./App.c0ce4c5e.js";import{B as H}from"./BlogSidebar.c5dca2de.js";import{B as W}from"./index.56e6378b.js";/* empty css                  */import{M as A}from"./message-square.5366eeca.js";import{B as G}from"./bookmark.bda825b8.js";import{S as I}from"./share-2.bdaa0a6c.js";import{G as $}from"./github.f6334811.js";import{G as j}from"./globe.82c22fee.js";import{F as M}from"./facebook.a9e99f95.js";import{T as U}from"./twitter.386e19ef.js";import{L as q}from"./linkedin.8c56163d.js";import{C as P}from"./maximize-2.52ecde65.js";import"./index.9b0273f1.js";import"./truck.9a14b476.js";import"./square.ee3e3477.js";import"./rss.f3e9951c.js";import"./archive.ba4a0a91.js";import"./save.53274b88.js";import"./arrow-down.76e652b0.js";import"./arrow-left.d148da32.js";import"./arrow-right.cb1a427a.js";import"./award.54d34f1a.js";import"./gift.009c99ce.js";import"./wifi.af578161.js";import"./book.d4f51a20.js";import"./box.2f1dc423.js";import"./briefcase.2b7ea105.js";import"./calendar.2d1fb3a2.js";import"./inbox.2c61f1b2.js";import"./check-circle.c8d94afb.js";import"./video.26494cb8.js";import"./chevron-down.592b0a48.js";import"./chevron-left.5746d388.js";import"./chevron-right.2170b606.js";import"./clipboard.8bb095f8.js";import"./clock.98cd6c69.js";import"./sun.11ce3874.js";import"./code.9f589fa8.js";import"./copy.6415d419.js";import"./credit-card.e6e6e113.js";import"./database.302ce7bf.js";import"./dollar-sign.afc58aa5.js";import"./download-cloud.c6e8a916.js";import"./download.b83b1606.js";import"./edit-2.106578b0.js";import"./edit.8e433e0a.js";import"./external-link.042c70fc.js";import"./eye-off.25b05f53.js";import"./eye.7e673c8d.js";import"./file.86134539.js";import"./grid.d87628e0.js";import"./hash.27cbf9b3.js";import"./help-circle.20ef447d.js";import"./image.206ca69b.js";import"./info.da30c367.js";import"./instagram.bd4d4e60.js";import"./link.48673132.js";import"./list.d35f1577.js";import"./lock.abb1fb82.js";import"./mail.9a827d5d.js";import"./map-pin.9aadddb8.js";import"./minus.760cb496.js";import"./monitor.2e61048b.js";import"./more-vertical.90afcba1.js";import"./package.a57f99bc.js";import"./paperclip.dfa8f20f.js";import"./pen-tool.10c7b0a3.js";import"./phone-call.2368873d.js";import"./play.0ba78350.js";import"./plus-circle.a23d8492.js";import"./plus.042dfce8.js";import"./pocket.3d1807a7.js";import"./printer.3d523260.js";import"./rotate-cw.0f777c94.js";import"./search.b852d141.js";import"./shopping-bag.e381bd39.js";import"./share.9f9e5f02.js";import"./shield.5a8929da.js";import"./shopping-cart.184e4667.js";import"./slack.063ed512.js";import"./smartphone.2eb058a4.js";import"./star.2fb59479.js";import"./tablet.9e1e5bdf.js";import"./tag.904233cd.js";import"./thumbs-up.f9acbf3d.js";import"./trash-2.aec9f5ca.js";import"./trash.0ae6231e.js";import"./watch.0e8b944d.js";import"./trending-up.c4880486.js";import"./user-check.6b1a5b42.js";import"./user-plus.a619509e.js";import"./user-x.f09a3306.js";import"./x-circle.bf712efe.js";import"./youtube.a30e613c.js";const Li=()=>{const[a,g]=s.exports.useState(null);s.exports.useEffect(()=>{v.get("/blog/list/data/detail").then(i=>g(i.data))},[]);const b={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},N=()=>a.blog.tags.map((i,o)=>e("a",{href:"/",onClick:u=>u.preventDefault(),children:e(T,{className:S({"me-50":o!==a.blog.tags.length-1}),color:b[i],pill:!0,children:i})},o)),f=()=>a.comments.map(i=>e(n,{className:"mb-3",children:e(d,{children:r("div",{className:"d-flex",children:[e("div",{children:e(p,{className:"me-75",img:i.avatar,imgHeight:"38",imgWidth:"38"})}),r("div",{children:[e("h6",{className:"fw-bolder mb-25",children:i.userFullName}),e(c,{children:i.commentedAt}),e(c,{children:i.commentText}),e("a",{href:"/",onClick:o=>o.preventDefault(),children:r("div",{className:"d-inline-flex align-items-center",children:[e(P,{size:18,className:"me-50"}),e("span",{children:"Reply"})]})})]})]})})},i.userFullName));return r(s.exports.Fragment,{children:[e(W,{title:"Blog Details",data:[{title:"Pages"},{title:"Blog"},{title:"Details"}]}),r("div",{className:"blog-wrapper",children:[e("div",{className:"content-detached content-left",children:e("div",{className:"content-body",children:a!==null?r(h,{children:[e(t,{sm:"12",children:r(n,{className:"mb-3",children:[e(x,{src:a.blog.img,className:"img-fluid",top:!0}),r(d,{children:[e(y,{tag:"h4",children:a.blog.title}),r("div",{className:"d-flex",children:[e(p,{className:"me-50",img:a.blog.avatar,imgHeight:"24",imgWidth:"24"}),r("div",{children:[e("small",{className:"text-muted me-25",children:"by"}),e("small",{children:e("a",{className:"text-body",href:"/",onClick:i=>i.preventDefault(),children:a.blog.userFullName})}),e("span",{className:"text-muted ms-50 me-25",children:"|"}),e("small",{className:"text-muted",children:a.blog.createdTime})]})]}),e("div",{className:"my-1 py-25",children:N()}),e("div",{dangerouslySetInnerHTML:{__html:a.blog.content}}),r("div",{className:"d-flex",children:[e("div",{children:e(p,{img:C,className:"me-2",imgHeight:"60",imgWidth:"60"})}),r("div",{children:[e("h6",{className:"fw-bolder",children:"Willie Clark"}),e(c,{className:"mb-0",children:"Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world."})]})]}),e("hr",{className:"my-2"}),r("div",{className:"d-flex align-items-center justify-content-between",children:[r("div",{className:"d-flex align-items-center",children:[r("div",{className:"d-flex align-items-center me-1",children:[e("a",{className:"me-50",href:"/",onClick:i=>i.preventDefault(),children:e(A,{size:21,className:"text-body align-middle"})}),e("a",{href:"/",onClick:i=>i.preventDefault(),children:e("div",{className:"text-body align-middle",children:L(a.blog.comments)})})]}),r("div",{className:"d-flex align-items-cente",children:[e("a",{className:"me-50",href:"/",onClick:i=>i.preventDefault(),children:e(G,{size:21,className:"text-body align-middle"})}),e("a",{href:"/",onClick:i=>i.preventDefault(),children:e("div",{className:"text-body align-middle",children:a.blog.bookmarked})})]})]}),r(k,{className:"dropdown-icon-wrapper",children:[e(w,{tag:"span",children:e(I,{size:21,className:"text-body cursor-pointer"})}),r(D,{end:!0,children:[e(l,{className:"py-50 px-1",children:e($,{size:18})}),e(l,{className:"py-50 px-1",children:e(j,{size:18})}),e(l,{className:"py-50 px-1",children:e(M,{size:18})}),e(l,{className:"py-50 px-1",children:e(U,{size:18})}),e(l,{className:"py-50 px-1",children:e(q,{size:18})})]})]})]})]})]})}),r(t,{sm:"12",id:"blogComment",children:[e("h6",{className:"section-label",children:"Comment"}),f()]}),r(t,{sm:"12",children:[e("h6",{className:"section-label",children:"Leave a Comment"}),e(n,{children:e(d,{children:e(B,{className:"form",onSubmit:i=>i.preventDefault(),children:r(h,{children:[e(t,{sm:"6",children:e("div",{className:"mb-2",children:e(m,{placeholder:"Name"})})}),e(t,{sm:"6",children:e("div",{className:"mb-2",children:e(m,{type:"email",placeholder:"Email"})})}),e(t,{sm:"6",children:e("div",{className:"mb-2",children:e(m,{type:"url",placeholder:"Website"})})}),e(t,{sm:"12",children:e("div",{className:"mb-2",children:e(m,{className:"mb-2",type:"textarea",rows:"4",placeholder:"Comment"})})}),e(t,{sm:"12",children:r("div",{className:"form-check mb-2",children:[e(m,{type:"checkbox",id:"save-data-checkbox"}),e(F,{className:"form-check-label",for:"save-data-checkbox",children:"Save my name, email, and website in this browser for the next time I comment."})]})}),e(t,{sm:"12",children:e(z,{color:"primary",children:"Post Comment"})})]})})})})]})]}):null})}),e(H,{})]})]})};export{Li as default};