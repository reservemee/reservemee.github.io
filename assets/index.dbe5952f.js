import{n as t,j as e,L as P,bq as H,bL as O,B as J,r as o,a7 as p,f as Q,bN as V,bO as N,aP as F,a0 as w,a1 as h,aQ as M,A as k,am as _,bd as G,an as X,a6 as y,a8 as Y,aS as Z,bc as ee,bW as R,bX as $,bY as A,bZ as j,b_ as ae,b$ as te,c0 as se,c1 as le,c2 as T,c3 as D,c4 as U,c5 as K}from"./index.6fe50bb5.js";import{A as E,U as re,l as ie,a as ne}from"./App.cb24265c.js";import{E as oe}from"./eye.49f78dde.js";import{E as L}from"./edit-2.7011fc7e.js";import{D as ce}from"./database.bf359c7d.js";import{S as me}from"./slack.16a0d944.js";import{R as de}from"./react-paginate.3b6bdd60.js";import{Q as he}from"./react-dataTable-component.c02dcc8a.js";import{C as pe}from"./chevron-down.37024f47.js";import{u as ue,C as ge}from"./index.esm.54e465e8.js";import{A as fe}from"./index.ddac088b.js";import{i as Ne}from"./faq-illustrations.b1c6d2b4.js";import{C as be}from"./copy.11172a28.js";import{I as xe}from"./info.519efce9.js";import"./emotion-memoize.esm.06f0e458.js";const ve=a=>a.avatar.length?e(E,{className:"me-1",img:a.avatar,width:"32",height:"32"}):e(E,{initials:!0,className:"me-1",content:a.fullName||"Bader",color:a.avatarColor||"light-primary"}),ye=a=>{const s={subscriber:{class:"text-primary",icon:re},maintainer:{class:"text-success",icon:ce},editor:{class:"text-info",icon:L},author:{class:"text-warning",icon:ie},admin:{class:"text-danger",icon:me}},i=s[a.role]?s[a.role].icon:L;return t("span",{className:"text-truncate text-capitalize align-middle",children:[e(i,{size:18,className:`${s[a.role]?s[a.role].class:""} me-50`}),a.role]})},Ce={pending:"light-warning",active:"light-success",inactive:"light-secondary"},we=[{name:"Name",sortable:!0,minWidth:"297px",sortField:"fullName",selector:a=>a.fullName,cell:a=>t("div",{className:"d-flex justify-content-left align-items-center",children:[ve(a),t("div",{className:"d-flex flex-column",children:[e(P,{to:`/apps/user/view/${a.id}`,className:"user_name text-truncate text-body",onClick:()=>H.dispatch(O(a.id)),children:e("span",{className:"fw-bold",children:a.fullName})}),e("small",{className:"text-truncate text-muted mb-0",children:a.email})]})]})},{name:"Role",sortable:!0,minWidth:"172px",sortField:"role",selector:a=>a.role,cell:a=>ye(a)},{name:"Plan",sortable:!0,minWidth:"138px",sortField:"currentPlan",selector:a=>a.currentPlan,cell:a=>e("span",{className:"text-capitalize",children:a.currentPlan})},{name:"Billing",sortable:!0,minWidth:"230px",sortField:"billing",selector:a=>a.billing,cell:a=>e("span",{className:"text-capitalize",children:a.billing})},{name:"Status",sortable:!0,minWidth:"138px",sortField:"status",selector:a=>a.status,cell:a=>e(J,{className:"text-capitalize",color:Ce[a.status],pill:!0,children:a.status})},{name:"Actions",minWidth:"100px",cell:a=>e(P,{to:`/apps/user/view/${a.id}`,children:e(oe,{className:"font-medium-3 text-body"})})}],Pe=o.exports.forwardRef((a,s)=>e("div",{className:"form-check",children:e(p,{type:"checkbox",ref:s,...a})})),Se=({plan:a,handlePlanChange:s,handlePerPage:i,rowsPerPage:f,handleFilter:c,searchTerm:b})=>e("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:t(w,{children:[e(h,{xl:"6",className:"d-flex align-items-center p-0",children:t("div",{className:"d-flex align-items-center w-100",children:[e("label",{htmlFor:"rows-per-page",children:"Show"}),t(p,{className:"mx-50",type:"select",id:"rows-per-page",value:f,onChange:i,style:{width:"5rem"},children:[e("option",{value:"10",children:"10"}),e("option",{value:"25",children:"25"}),e("option",{value:"50",children:"50"})]}),e("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),t(h,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pe-lg-1 p-0 mt-lg-0 mt-1",children:[t("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[e("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),e(p,{type:"text",value:b,id:"search-invoice",className:"ms-50 w-100",onChange:n=>c(n.target.value)})]}),t(p,{value:a,type:"select",style:{width:"10rem"},onChange:n=>s(n.target.value),children:[e("option",{value:"",children:"Select Role"}),e("option",{value:"basic",children:"Basic"}),e("option",{value:"company",children:"Company"}),e("option",{value:"enterprise",children:"Enterprise"}),e("option",{value:"team",children:"Team"})]})]})]})}),ze=()=>{const a=ne(),s=Q(l=>l.users),[i,f]=o.exports.useState(""),[c,b]=o.exports.useState("desc"),[n,S]=o.exports.useState(""),[d,C]=o.exports.useState(1),[m,z]=o.exports.useState(10),[u,r]=o.exports.useState("id");o.exports.useEffect(()=>{a(V()),a(N({sort:c,role:"",sortColumn:u,status:"",q:n,currentPlan:i,page:d,perPage:m}))},[a,s.data.length]);const x=l=>{a(N({sort:c,role:"",status:"",sortColumn:u,q:n,currentPlan:i,perPage:m,page:l.selected+1})),C(l.selected+1)},v=l=>{const g=parseInt(l.currentTarget.value);a(N({sort:c,role:"",sortColumn:u,status:"",q:n,perPage:g,currentPlan:i,page:d})),z(g)},B=l=>{S(l),a(N({q:l,sort:c,role:"",sortColumn:u,status:"",currentPlan:i,page:d,perPage:m}))},q=l=>{f(l),a(N({sort:c,role:l,sortColumn:u,status:"",q:n,currentPlan:i,page:d,perPage:m}))},I=()=>{const l=Number(Math.ceil(s.total/m));return e(de,{previousLabel:"",nextLabel:"",pageCount:l||1,activeClassName:"active",forcePage:d!==0?d-1:0,onPageChange:g=>x(g),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return e(F,{children:e("div",{className:"react-dataTable react-dataTable-selectable-rows",children:e(he,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:we,onSort:(l,g)=>{b(g),r(l.sortField),a(N({sort:c,role:"",sortColumn:u,status:"",q:n,currentPlan:i,page:d,perPage:m}))},data:(()=>{const l={q:n},g=Object.keys(l).some(function(W){return l[W].length>0});return s.data.length>0?s.data:s.data.length===0&&g?[]:s.allData.slice(0,m)})(),sortIcon:e(pe,{}),paginationComponent:I,selectableRowsComponent:Pe,className:"react-dataTable",subHeaderComponent:e(Se,{plan:i,searchTerm:n,rowsPerPage:m,handleFilter:B,handlePerPage:v,handlePlanChange:q})})})})},ke=[{totalUsers:4,title:"Administrator",users:[{size:"sm",title:"Vinnie Mostowy",img:R},{size:"sm",title:"Allen Rieske",img:$},{size:"sm",title:"Julee Rossignol",img:A},{size:"sm",title:"Kaith Dsouza",img:j}]},{totalUsers:7,title:"Manager",users:[{size:"sm",title:"Jimmy Ressula",img:ae},{size:"sm",title:"Bader",img:te},{size:"sm",title:"Kristi Lawker",img:R},{size:"sm",title:"Kaith D",img:se},{size:"sm",title:"Danny Paul",img:le}]},{totalUsers:5,title:"Users",users:[{size:"sm",title:"Andrew Tye",img:A},{size:"sm",title:"Rishi Swaat",img:T},{size:"sm",title:"Rossie Kim",img:R},{size:"sm",title:"Kim Merchent",img:D},{size:"sm",title:"Sam Dsouza",img:U}]},{totalUsers:3,title:"Support",users:[{size:"sm",title:"Kim Karlos",img:K},{size:"sm",title:"Katy Turner",img:T},{size:"sm",title:"Peter Adward",img:$},{size:"sm",title:"Kaith Dsouza",img:D},{size:"sm",title:"John Parker",img:j}]},{totalUsers:2,title:"Restricted User",users:[{size:"sm",title:"Kim Merchent",img:D},{size:"sm",title:"Sam Dsouza",img:A},{size:"sm",title:"Nurvi Karlos",img:K},{size:"sm",title:"Andrew Tye",img:U},{size:"sm",title:"Rossie Kim",img:T}]}],Re=["User Management","Content Management","Disputes Management","Database Management","Financial Management","Reporting","API Control","Repository Management","Payroll"],Ae=()=>{const[a,s]=o.exports.useState(!1),[i,f]=o.exports.useState("Add New"),{reset:c,control:b,setError:n,setValue:S,handleSubmit:d,formState:{errors:C}}=ue({defaultValues:{roleName:""}}),m=r=>{r.roleName.length?s(!1):n("roleName",{type:"manual"})},z=()=>{s(!1),c({roleName:""})},u=()=>{f("Add New"),S("roleName")};return t(o.exports.Fragment,{children:[t(w,{children:[ke.map((r,x)=>e(h,{xl:4,md:6,children:e(F,{children:t(M,{children:[t("div",{className:"d-flex justify-content-between",children:[e("span",{children:`Total ${r.totalUsers} users`}),e(fe,{data:r.users})]}),t("div",{className:"d-flex justify-content-between align-items-end mt-1 pt-25",children:[t("div",{className:"role-heading",children:[e("h4",{className:"fw-bolder",children:r.title}),e(P,{to:"/",className:"role-edit-modal",onClick:v=>{v.preventDefault(),f("Edit"),s(!0)},children:e("small",{className:"fw-bolder",children:"Edit Role"})})]}),e(P,{to:"",className:"text-body",onClick:v=>v.preventDefault(),children:e(be,{className:"font-medium-5"})})]})]})})},x)),e(h,{xl:4,md:6,children:e(F,{children:t(w,{children:[e(h,{sm:5,children:e("div",{className:"d-flex align-items-end justify-content-center h-100",children:e("img",{className:"img-fluid mt-2",src:Ne,alt:"Image",width:85})})}),e(h,{sm:7,children:t(M,{className:"text-sm-end text-center ps-sm-0",children:[e(k,{color:"primary",className:"text-nowrap mb-1",onClick:()=>{f("Add New"),s(!0)},children:"Add New Role"}),e("p",{className:"mb-0",children:"Add a new role, if it does not exist"})]})})]})})})]}),t(_,{isOpen:a,onClosed:u,toggle:()=>s(!a),className:"modal-dialog-centered modal-lg",children:[e(G,{className:"bg-transparent",toggle:()=>s(!a)}),t(X,{className:"px-5 pb-5",children:[t("div",{className:"text-center mb-4",children:[t("h1",{children:[i," Role"]}),e("p",{children:"Set role permissions"})]}),t(w,{tag:"form",onSubmit:d(m),children:[t(h,{xs:12,children:[e(y,{className:"form-label",for:"roleName",children:"Role Name"}),e(ge,{name:"roleName",control:b,render:({field:r})=>e(p,{...r,id:"roleName",placeholder:"Enter role name",invalid:C.roleName&&!0})}),C.roleName&&e(Y,{children:"Please enter a valid role name"})]}),t(h,{xs:12,children:[e("h4",{className:"mt-2 pt-50",children:"Role Permissions"}),e(Z,{className:"table-flush-spacing",responsive:!0,children:t("tbody",{children:[t("tr",{children:[t("td",{className:"text-nowrap fw-bolder",children:[e("span",{className:"me-50",children:" Administrator Access"}),e(xe,{size:14,id:"info-tooltip"}),e(ee,{placement:"top",target:"info-tooltip",children:"Allows a full access to the system"})]}),e("td",{children:t("div",{className:"form-check",children:[e(p,{type:"checkbox",id:"select-all"}),e(y,{className:"form-check-label",for:"select-all",children:"Select All"})]})})]}),Re.map((r,x)=>t("tr",{children:[e("td",{className:"text-nowrap fw-bolder",children:r}),e("td",{children:t("div",{className:"d-flex",children:[t("div",{className:"form-check me-3 me-lg-5",children:[e(p,{type:"checkbox",id:`read-${r}`}),e(y,{className:"form-check-label",for:`read-${r}`,children:"Read"})]}),t("div",{className:"form-check me-3 me-lg-5",children:[e(p,{type:"checkbox",id:`write-${r}`}),e(y,{className:"form-check-label",for:`write-${r}`,children:"Write"})]}),t("div",{className:"form-check",children:[e(p,{type:"checkbox",id:`create-${r}`}),e(y,{className:"form-check-label",for:`create-${r}`,children:"Create"})]})]})})]},x))]})})]}),t(h,{className:"text-center mt-2",xs:12,children:[e(k,{type:"submit",color:"primary",className:"me-1",children:"Submit"}),e(k,{type:"reset",outline:!0,onClick:z,children:"Discard"})]})]})]})]})]})},Qe=()=>t(o.exports.Fragment,{children:[e("h3",{children:"Roles List"}),e("p",{className:"mb-2",children:"A role provides access to predefined menus and features depending on the assigned role to an administrator that can have access to what he needs."}),e(Ae,{}),e("h3",{className:"mt-50",children:"Total users with their roles"}),e("p",{className:"mb-2",children:"Find all of your company\u2019s administrator accounts and their associate roles."}),e("div",{className:"app-user-list",children:e(ze,{})})]});export{Qe as default};
