import{r as l,J as c,n as s,a0 as h,j as a,a1 as e,aP as r,aQ as t,a2 as d,a3 as i}from"./index.09005372.js";const m=()=>{const n=l.exports.useContext(c);return s(h,{children:[a(e,{md:"6",sm:"12",children:a(r,{children:s(t,{children:[a(d,{tag:"h4",children:"Common"}),a(i,{children:"No ability is required to view this card"}),a(i,{className:"text-primary",children:"This card is visible to 'user' and 'admin' both"})]})})}),n.can("read","Analytics")?a(e,{md:"6",sm:"12",children:a(r,{children:s(t,{children:[a(d,{tag:"h4",children:"Analytics"}),a(i,{children:"User with 'Analytics' subject's 'Read' ability can view this card"}),a(i,{className:"text-danger",children:"This card is visible to 'admin' only"})]})})}):null]})};export{m as default};