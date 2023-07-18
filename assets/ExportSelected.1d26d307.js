import{r,n as i,i as R,j as e,a7 as h,a0 as T,a1 as W,aP as A,aQ as B,A as p,a6 as z,aS as H,am as $,bd as K,an as O,cS as P}from"./index.6fe50bb5.js";import{E as X}from"./index.2695b145.js";import{u as w,a as G}from"./xlsx.8087b80f.js";const J=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}],U=()=>{const[l]=r.exports.useState(J),[b,x]=r.exports.useState(""),[C,L]=r.exports.useState(!1),[m,g]=r.exports.useState(""),[v,k]=r.exports.useState([]),[f,N]=r.exports.useState([]),[u,E]=r.exports.useState("xlsx"),[o,S]=r.exports.useState([]),c=()=>L(!C),D=t=>{let s=[];const a=t.target.value;x(a),a.length&&(s=l.filter(n=>{const d=n.name.toLowerCase().startsWith(a.toLowerCase())||n.email.toLowerCase().startsWith(a.toLowerCase())||n.website.toLowerCase().startsWith(a.toLowerCase())||n.id.toString().toLowerCase().startsWith(a.toLowerCase()),y=n.name.toLowerCase().includes(a.toLowerCase())||n.email.toLowerCase().includes(a.toLowerCase())||n.website.toLowerCase().includes(a.toLowerCase())||n.id.toString().toLowerCase().includes(a.toLowerCase());return d||(!d&&y?y:null)}),x(a),k(s))},F=()=>{const t=f;l.map(d=>o.includes(d.id)?t.push(d):null),N([...t]);const s=m.length?`${m}.${u}`:`excel-sheet.${u}`,a=w.json_to_sheet(f),n=w.book_new();w.book_append_sheet(n,a,"test"),G(n,s),c()},M=t=>{const s=o;if(!s.includes(t))s.push(t);else if(s.includes(t))s.splice(s.indexOf(t),1);else return null;S([...s])},_=()=>{let t=o;if(t.length<l.length)t=l.map(a=>a.id);else if(t.length===l.length)t=[];else return null;S(t)},j=(b?v:l).map(t=>i("tr",{className:R({selected:o.includes(t.id)}),children:[e("td",{children:e("div",{className:"form-check",children:e(h,{id:t.id,type:"checkbox",onChange:()=>M(t.id),checked:!!o.includes(t.id)})})}),e("td",{children:t.email}),e("td",{children:t.name}),e("td",{children:t.website}),e("td",{children:t.id})]},t.id));return i(r.exports.Fragment,{children:[e(X,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/SheetJS/sheetjs"}),e(T,{className:"export-component",children:e(W,{sm:"12",children:i(A,{children:[e(B,{className:"pb-0",children:i("div",{className:"d-flex flex-wrap justify-content-between",children:[e(p,{color:"primary",onClick:()=>c(),children:"Export Selected"}),i("div",{className:"d-flex align-items-center justify-content-end",children:[e(z,{for:"search-input",className:"me-1",children:"Search"}),e(h,{id:"search-input",bsSize:"sm",type:"text",value:b,onChange:t=>D(t)})]})]})}),i(H,{className:"table-hover-animation mt-2",responsive:!0,children:[e("thead",{children:i("tr",{children:[e("th",{children:e("div",{className:"form-check",children:e(h,{type:"checkbox",id:"select-all",label:"",checked:!!o.length,onChange:()=>_()})})}),e("th",{children:"Email"}),e("th",{children:"Name"}),e("th",{children:"Website"}),e("th",{children:"Rank"})]})}),e("tbody",{children:j})]})]})})}),i($,{isOpen:C,toggle:()=>c(),className:"modal-dialog-centered",onClosed:()=>g(""),children:[e(K,{toggle:()=>c(),children:"Export To Excel"}),i(O,{children:[e("div",{className:"mb-2",children:e(h,{type:"text",value:m,onChange:t=>g(t.target.value),placeholder:"Enter File Name"})}),e("div",{children:i(h,{type:"select",id:"selectFileFormat",name:"customSelect",value:u,onChange:t=>{E(t.target.value)},children:[e("option",{children:"xlsx"}),e("option",{children:"csv"}),e("option",{children:"txt"})]})})]}),i(P,{children:[e(p,{color:"primary",onClick:()=>F(),children:"Export"}),e(p,{color:"flat-danger",onClick:()=>c(),children:"Cancel"})]})]})]})};export{U as default};
