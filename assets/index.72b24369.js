import{p as s,r as n,M as q,j as e,n as r,aP as D,i as b,aR as E,a2 as P,a0 as N,a1 as d,aQ as i,aS as W,a3 as t}from"./index.6fe50bb5.js";import{B as Y}from"./index.95590a07.js";import{U as $}from"./index.01cf3384.js";import{C as h}from"./chevron-down.37024f47.js";import{X as T}from"./App.cb24265c.js";import{R as p}from"./rotate-cw.ad341bc1.js";const l=o=>{const{title:A,actions:a,children:I,collapseIcon:m,reloadIcon:u,removeIcon:C,endReload:w}=o,[f,x]=n.exports.useState(!1),[g,z]=n.exports.useState(!0),[k,B]=n.exports.useState(!0),R={collapse:m||h,remove:C||T,reload:u||p},y=c=>{switch(c){case"collapse":return z(!g);case"remove":return B(!1);case"reload":return x(!0)}},S=()=>{if(Array.isArray(a))return a.map((c,v)=>{const U=R[c];return e(U,{className:b("cursor-pointer",{"me-50":v<a.length-1}),size:15,onClick:()=>y(c)},v)});{const c=R[a];return e(c,{className:"cursor-pointer",size:15,onClick:()=>y(a)})}},j=()=>{x(!1)};n.exports.useEffect(()=>{f&&w(j)});const F=a==="collapse"||a.includes("collapse")?q:n.exports.Fragment,O=a==="reload"||a.includes("reload")?$:n.exports.Fragment;return e(O,{...a==="reload"||a.includes("reload")?{blocking:f}:{},children:r(D,{className:b("card-action",{"d-none":!k}),children:[r(E,{children:[e(P,{tag:"h4",children:A}),e("div",{className:"action-icons",children:S()})]}),e(F,{...a==="collapse"||a.includes("collapse")?{isOpen:g}:{},children:I})]})})};l.propTypes={removeIcon:s.exports.any,reloadIcon:s.exports.any,collapseIcon:s.exports.any,title:s.exports.string.isRequired,actions:s.exports.oneOfType([s.exports.string,s.exports.arrayOf(s.exports.string)]).isRequired,endReload(o){if(o.actions==="reload"&&o.endReload===void 0||o.actions.includes("reload")&&o.endReload===void 0)return new Error("Please provide a function to end reload!")}};const G=()=>r(n.exports.Fragment,{children:[e(Y,{title:"Card Actions",data:[{title:"Cards"},{title:"Card Actions"}]}),e(N,{children:e(d,{sm:"12",children:e(l,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:o=>{setTimeout(()=>o(),2e3)},children:e(i,{className:"pt-0",children:r(W,{responsive:!0,bordered:!0,children:[e("thead",{children:r("tr",{children:[e("th",{children:"Action"}),e("th",{children:"Icon"}),e("th",{children:"Details"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"Collapse"}),e("td",{className:"text-center",children:e(h,{className:"collapse-icon",size:15})}),e("td",{children:" Collapse card content using collapse action."})]}),r("tr",{children:[e("td",{children:"Refresh Content"}),e("td",{className:"text-center",children:e(p,{size:15})}),e("td",{children:"Refresh your card content using refresh action."})]}),r("tr",{children:[e("td",{children:"Remove Card"}),e("td",{className:"text-center",children:e(T,{size:15})}),e("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),r(N,{children:[e(d,{md:"6",sm:"12",children:e(l,{title:"Collapse",actions:"collapse",children:r(i,{className:"pt-0",children:[r(t,{children:["You can create a collapsible content by using our ",e("code",{children:"CardAction"})," component and by passing prop"," ",e("code",{children:"actions='collapse'"}),"."]}),r(t,{className:"mb-0",children:["Click on ",e(h,{size:15})," to see card collapse in action"]})]})})}),e(d,{md:"6",sm:"12",children:e(l,{title:"Reload",actions:"reload",endReload:o=>{setTimeout(()=>o(),2e3)},children:r(i,{className:"pt-0",children:[r(t,{children:["To create a re-loadable card pass prop ",e("code",{children:"actions='reload'"})," and pass prop"," ",e("code",{children:"endReload"})," to end the loading."]}),r(t,{className:"mb-0",children:["Click on ",e(p,{size:15})," to see card refresh in action"]})]})})}),e(d,{md:"6",sm:"12",children:e(l,{title:"Remove",actions:"remove",children:r(i,{className:"pt-0",children:[r(t,{children:["You can add refresh content action to card by adding class ",e("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),r(t,{className:"mb-0",children:["Click on ",e(p,{size:15})," to see card refresh in action"]})]})})})]})]});export{G as default};