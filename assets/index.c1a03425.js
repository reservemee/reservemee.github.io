import{n as a,aP as l,j as e,aR as n,a2 as s,aQ as i,a3 as o,a7 as d,r as h,i as c,a6 as m,a0 as p,a1 as r}from"./index.6fe50bb5.js";import{B as u}from"./index.95590a07.js";const f=()=>a(l,{children:[e(n,{children:e(s,{tag:"h4",children:"Default"})}),a(i,{children:[a(o,{children:["To create a Textarea use ",e("code",{children:'type="textarea"'})," with reactstrap Input tag."]}),e(d,{type:"textarea",name:"text",id:"exampleText",rows:"3",placeholder:"Textarea"})]})]}),T=()=>{const[t,x]=h.exports.useState("");return a(l,{children:[e(n,{children:e(s,{tag:"h4",children:"Counter"})}),a(i,{children:[a("div",{className:"form-floating mb-0",children:[e(d,{name:"text",value:t,type:"textarea",id:"exampleText",placeholder:"Counter",style:{minHeight:"100px"},onChange:g=>x(g.target.value),className:c({"text-danger":t.length>20})}),e(m,{className:"form-label",for:"textarea-counter",children:"Counter"})]}),e("span",{className:c("textarea-counter-value float-end",{"bg-danger":t.length>20}),children:`${t.length}/20`})]})]})},b=()=>a(l,{children:[e(n,{children:e(s,{tag:"h4",children:"Floating label"})}),a(i,{children:[a(o,{className:"mb-3",children:["Use ",e("code",{children:".form-label-group"})," as a wrapper to add a Floating Label with Textarea"]}),a("div",{className:"form-floating mt-2",children:[e(d,{type:"textarea",name:"text",id:"floating-textarea",placeholder:"Floating Label",style:{minHeight:"100px"}}),e(m,{className:"form-label",for:"floating-textarea",children:"Floating Label"})]})]})]}),F=()=>a(h.exports.Fragment,{children:[e(u,{title:"Textarea",data:[{title:"Form Elements"},{title:"Textarea"}]}),a(p,{children:[e(r,{sm:"12",children:e(f,{})}),e(r,{sm:"12",children:e(b,{})}),e(r,{sm:"12",children:e(T,{})})]})]});export{F as default};
