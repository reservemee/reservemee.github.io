import{r as e,bp as x,as as b,n as p,j as r,a0 as k,a1 as y,aP as L,aQ as q,i as B,aj as F,ak as N,L as v}from"./index.c4f4686b.js";import{I as S}from"./index.53987791.js";import{B as T}from"./index.19179809.js";import{F as j}from"./page-knowledge-base.f66c7d6e.js";import"./truck.fc154363.js";import"./App.6bb83c43.js";import"./square.18221e7a.js";import"./rss.fcfb8b00.js";import"./archive.ad18d131.js";import"./save.cf3b7d9d.js";import"./arrow-down.59035b56.js";import"./arrow-left.68115295.js";import"./arrow-right.19500ab8.js";import"./award.c3b4a2a2.js";import"./gift.28422ec4.js";import"./wifi.00e90197.js";import"./book.7c841a33.js";import"./bookmark.b994047b.js";import"./box.4f82bd52.js";import"./briefcase.4c884860.js";import"./calendar.7d2dd868.js";import"./inbox.e0c05367.js";import"./check-circle.222e9632.js";import"./video.68cb2c98.js";import"./chevron-down.29b2e50d.js";import"./chevron-left.d08e8114.js";import"./chevron-right.c3dcd7e6.js";import"./globe.3e98fac9.js";import"./clipboard.35bce53a.js";import"./clock.28a19bb6.js";import"./sun.0e5391cf.js";import"./code.d1e11a91.js";import"./copy.16047f0a.js";import"./maximize-2.44df1052.js";import"./credit-card.e5e3698f.js";import"./database.9a9b5768.js";import"./dollar-sign.392accbb.js";import"./download-cloud.3c2b43e6.js";import"./download.95729d3a.js";import"./edit-2.5b7fc93f.js";import"./edit.d7d10b9e.js";import"./external-link.83b9e294.js";import"./eye-off.b927ab01.js";import"./eye.6e81f589.js";import"./facebook.b48fdfec.js";import"./file.07e00f71.js";import"./github.6ed8b963.js";import"./grid.79442cec.js";import"./hash.ce49a70a.js";import"./help-circle.f30ba68c.js";import"./image.0ae21566.js";import"./info.1420e78f.js";import"./instagram.b7899c5f.js";import"./link.53d8ee02.js";import"./linkedin.824924d3.js";import"./list.10fe9b52.js";import"./lock.7a20399d.js";import"./mail.5708313c.js";import"./map-pin.bc9880ee.js";import"./message-square.467082fe.js";import"./minus.2a3ff8da.js";import"./monitor.4ac603f1.js";import"./more-vertical.2ad88b30.js";import"./package.d301abfb.js";import"./paperclip.2a1e306e.js";import"./pen-tool.bab3d811.js";import"./phone-call.0e292c8c.js";import"./play.6a1986a2.js";import"./plus-circle.d7184aee.js";import"./plus.4887533c.js";import"./pocket.6b88f7bf.js";import"./printer.96d84aa0.js";import"./rotate-cw.93a17c9a.js";import"./search.821dbdbf.js";import"./shopping-bag.843e46bf.js";import"./share-2.94e67ce7.js";import"./share.6a4ddc61.js";import"./shield.ed0a76bb.js";import"./shopping-cart.25e3e605.js";import"./slack.2075681c.js";import"./smartphone.ff4606de.js";import"./star.d0406447.js";import"./tablet.51628d41.js";import"./tag.04aa84ce.js";import"./thumbs-up.e76dec92.js";import"./trash-2.8f30bb50.js";import"./trash.211a49ee.js";import"./watch.42f13409.js";import"./trending-up.f7fde588.js";import"./twitter.5a7f45ae.js";import"./user-check.6a7aeb97.js";import"./user-plus.6148b3a2.js";import"./user-x.8a50195b.js";import"./x-circle.2241dc82.js";import"./youtube.51429c8c.js";const xr=()=>{const[m,c]=e.exports.useState(null),[d,u]=e.exports.useState([]),[a,s]=e.exports.useState("");e.exports.useEffect(()=>{x.get("/faq/data/category").then(t=>c(t.data))},[]);const g=b(),h=({item:t})=>{const o=S[t.icon];return r(y,{className:"kb-search-content",md:"4",sm:"6",children:r(L,{children:p(q,{children:[p("h6",{className:"kb-title",children:[r(o,{size:20,className:B("me-50",{[t.iconColor]:t.iconColor})}),p("span",{children:[t.title," ",`(${t.questions.length})`]})]}),r(F,{className:"list-group-circle mt-2",children:t.questions.map(i=>r(N,{tag:v,to:`/pages/knowledge-base/${g.category}/${i.slug}`,className:"text-body",children:i.question},i.id))})]})})})},f=()=>(a.length?d:m).map(o=>r(h,{item:o},o.id)),C=t=>{const o=t.target.value,i=t.target.value.toLowerCase();s(t.target.value);let n=[];o.length&&(n=m.filter(l=>l.title.toLowerCase().includes(i)||l.questions.filter(w=>w.question.toLowerCase().includes(i)).length)),u([...n])};return p(e.exports.Fragment,{children:[r(T,{title:"Knowledge Base",data:[{title:"Pages"},{title:"Knowledge Base"},{title:"Category"}]}),r(j,{searchTerm:a,setSearchTerm:s,handleFilter:C}),m!==null?r("div",{id:"knowledge-base-category",children:r(k,{className:"kb-search-content-info match-height",children:f()})}):null]})};export{xr as default};