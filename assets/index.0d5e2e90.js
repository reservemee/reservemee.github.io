import{r as h,j as e,am as le,n as l,a5 as te,an as re,a6 as B,a7 as D,a8 as ne,A as S,al as ie,ao as j,ap as F,aq as U,ar as G,t as oe,B as X,b1 as Q,b2 as de,aP as ce,aQ as me,i as he,U as ue,D as pe,v as be,w as K,b3 as ge,b4 as fe,b5 as W,b6 as ke,b7 as ve,b8 as Te,f as Ne,b9 as Ce,ba as Se,bb as ye}from"./index.09005372.js";import{u as P,C as L}from"./index.esm.0c04059c.js";import{F as xe}from"./index.cef2a42e.js";import{u as Ae}from"./file-uploader.25e07f51.js";import{S as E,c as J}from"./react-select.esm.55d315eb.js";import{a as O,X as we,P as Be,s as V,i as De}from"./App.c0ce4c5e.js";/* empty css                  */import{D as Ie}from"./download-cloud.c6e8a916.js";import{R as Fe}from"./index.418fd70d.js";import{A as Oe}from"./index.f6e456b9.js";import{P as Re}from"./paperclip.dfa8f20f.js";import{M as $e}from"./message-square.5366eeca.js";import{M as ze}from"./more-vertical.90afcba1.js";import{P as Y}from"./plus.042dfce8.js";import"./tslib.es6.f27d4901.js";import"./objectWithoutProperties.ea3a3e59.js";import"./emotion-memoize.esm.06f0e458.js";const Pe=[{value:"Pheobe Buffay",label:"Pheobe Buffay",img:ie},{value:"Chandler Bing",label:"Chandler Bing",img:j},{value:"Ross Geller",label:"Ross Geller",img:F},{value:"Monica Geller",label:"Monica Geller",img:U},{value:"Joey Tribbiani",label:"Joey Tribbiani",img:G},{value:"Rachel Green",label:"Rachel Green",img:oe},{value:"Jerry Seinfeld",label:"Jerry Seinfeld",img:F},{value:"Jerry Seinfeld",label:"Jerry Seinfeld",img:F},{value:"Astro Kramer",label:"Astro Kramer",img:j},{value:"George Costanza",label:"George Costanza",img:G},{value:"Charlie Kelly",label:"Charlie Kelly",img:U},{value:"Dennis Reynolds",label:"Dennis Reynolds",img:F}],Le=[{value:"UX",label:"UX"},{value:"App",label:"App"},{value:"Forms",label:"Forms"},{value:"Images",label:"Images"},{value:"Code Review",label:"Code Review"},{value:"Charts & Maps",label:"Charts & Maps"}],Me=v=>{const{sidebarOpen:a,labelColors:T,selectedTask:r,handleTaskSidebarToggle:u}=v,[m,p]=h.exports.useState(""),[o,c]=h.exports.useState([]),[b,i]=h.exports.useState([]),[f,g]=h.exports.useState(new Date),[N,k]=h.exports.useState(null),y=O(),{getRootProps:d,getInputProps:C}=Ae({multiple:!1,onDrop:s=>{c([...s.map(n=>Object.assign(n))])}}),{control:A,setError:R,setValue:w,clearErrors:$,handleSubmit:z,formState:{errors:t}}=P({defaultValues:{title:""}}),x=({data:s,...n})=>e(J.Option,{...n,children:e(X,{color:`light-${T[s.label]}`,children:s.label})}),H=({data:s,...n})=>e(J.Option,{...n,children:l("div",{className:"d-flex align-items-center",children:[e("img",{className:"d-block rounded-circle me-50",src:s.img,height:"26",width:"26",alt:s.label}),e("p",{className:"mb-0",children:s.label})]})}),Z=()=>{if(!De(r)){if(w("title",r.title),g(r.dueDate),p(r.description),r.coverImage&&c([r.coverImage]),r.assignedTo.length){const s=[];r.assignedTo.map(n=>{s.push({value:n.title,label:n.title,img:n.img})}),k(s)}if(r.labels.length){const s=[];r.labels.map(n=>{s.push({value:n,label:n})}),i(s)}}},_=()=>{p(""),c([]),i([]),w("title",""),g(new Date),$(),y(Q({})),k(null)},ee=s=>{if(s.title.length){const n=[],M=[];s.assignedTo&&N.length&&N.map(I=>{M.push({title:I.label,img:I.img})}),b.length&&b.map(I=>{n.push(I.label)}),y(de({...r,...s,dueDate:f,labels:n,description:m,assignedTo:M,...o.length&&typeof o[0]!="string"?{coverImage:URL.createObjectURL(o[0])}:{}})),u()}else R("title")},ae=()=>{if(o.length&&typeof o[0]!="string")return o.map(s=>e("img",{alt:s.name,className:"single-file-image img-fluid",src:URL.createObjectURL(s)},s.name));if(typeof o[0]=="string")return e("img",{alt:"task-img",className:"single-file-image img-fluid",src:o[0]})},se=()=>{if(p(""),w("title",store.selectedTask.title),g(store.selectedTask.dueDate),r.assignedTo.length){const s=[];r.assignedTo.map(n=>{s.push({value:n.title,label:n.title,img:n.img})}),k(s)}if(r.labels.length){const s=[];r.labels.map(n=>{s.push({value:n,label:n})}),i(s)}r.coverImage?c([r.coverImage]):c([])};return e(le,{isOpen:a,className:"sidebar-lg",contentClassName:"p-0",onOpened:Z,onClosed:_,toggle:u,modalClassName:"modal-slide-in sidebar-kanban-modal",children:l(te,{id:"form-modal-kanban",className:"kanban-task-modal",onSubmit:z(ee),children:[l("div",{className:"modal-header d-flex align-items-center justify-content-between mb-1",children:[e("h5",{className:"modal-title",children:"Update Task"}),e(we,{className:"fw-normal mt-25",size:16,onClick:u})]}),e(Be,{options:{wheelPropagation:!1},children:l(re,{className:"flex-grow-1 pb-sm-0 pb-3",children:[l("div",{className:"mb-1",children:[l(B,{className:"form-label",for:"task-title",children:["Title ",e("span",{className:"text-danger",children:"*"})]}),e(L,{name:"title",control:A,render:({field:s})=>e(D,{id:"task-title",placeholder:"Title",className:"new-todo-item-title",invalid:t.title&&!0,...s})}),t.title&&e(ne,{children:"Please enter a valid task title"})]}),l("div",{className:"mb-1",children:[e(B,{className:"form-label",for:"due-date",children:"Due Date"}),e(xe,{id:"due-date",name:"due-date",value:f,className:"form-control",options:{dateFormat:"Y-m-d"},onChange:s=>g(s[0])})]}),l("div",{className:"mb-1",children:[e(B,{className:"form-label",for:"task-labels",children:"Labels"}),e(E,{isMulti:!0,value:b,id:"task-labels",isClearable:!1,options:Le,className:"react-select",classNamePrefix:"select",theme:V,components:{Option:x},onChange:s=>{i(s!==null?[...s]:[])}})]}),l("div",{className:"mb-1",children:[e(B,{className:"form-label",for:"task-assignee",children:"Assignee"}),e(E,{isMulti:!0,id:"task-assignee",value:N,isClearable:!1,className:"react-select",classNamePrefix:"select",options:Pe,theme:V,onChange:s=>k(s),components:{Option:H}})]}),e("div",{className:"mb-1",children:l("div",{...d({className:"dropzone"}),children:[e("input",{...C()}),l("div",{className:"d-flex align-items-center justify-content-center flex-column text-center",children:[e(Ie,{size:64}),e("h5",{children:"Drop Files here or click to upload"})]}),o.length?ae():null]})}),l("div",{className:"mb-1",children:[e(B,{className:"form-label",for:"task-desc",children:"Description"}),e(D,{type:"textarea",value:m,name:"text",id:"task-desc",rows:"3",placeholder:"Description...",onChange:s=>p(s.target.value)})]}),l("div",{children:[e(S,{type:"submit",color:"primary",className:"me-1",children:"Update"}),e(S,{outline:!0,color:"secondary",onClick:se,children:"Reset"})]})]})})]})})},je=v=>{const{task:a,labelColors:T,handleTaskSidebarToggle:r}=v,u=O(),m=()=>{u(Q(a)),r()},p=()=>a.labels.length?e("div",{className:"mb-1",children:a.labels.map((i,f)=>{const g=a.labels[a.labels.length-1]===i;return e(X,{pill:!0,label:i,color:`light-${T[i]}`,className:he({"me-75":!g}),children:i},f)})}):null,o=()=>a.attachments&&a.attachments.length||a.comments&&a.comments.length?l("div",{className:"d-flex align-items-center",children:[a.attachments&&a.attachments.length?l("div",{className:"d-flex align-items-center cursor-pointer me-75",children:[e(Re,{size:16,className:"me-25"}),e("span",{children:a.attachments.length})]}):null,a.comments&&a.comments.length?l("div",{className:"d-flex align-items-center cursor-pointer",children:[e($e,{size:16,className:"me-50"}),e("span",{children:a.comments.length})]}):null]}):null,c=()=>a.comments&&!a.comments.length&&a.attachments&&!a.attachments.length?"justify-content-end":"justify-content-between",b=()=>a.attachments&&a.attachments.length||a.comments&&a.comments.length||a.assignedTo&&a.assignedTo.length?l("div",{className:`task-footer d-flex align-items-center mt-1 ${c()}`,children:[o(),a.assignedTo.length?e("div",{children:a.assignedTo.length?e(Oe,{data:a.assignedTo}):null}):null]}):null;return e(ce,{onClick:m,className:"task","data-board-id":a.boardId,"data-task-id":a.id,children:l(me,{"data-task-id":a.id,children:[p(),a.coverImage?e("img",{className:"img-fluid rounded task-img mb-1",alt:a.title,src:a.coverImage}):null,e("span",{className:"task-title",children:a.title}),b()]})})},Ue={taskTitle:""},Ge=v=>{const{board:a,index:T,store:r,labelColors:u,handleTaskSidebarToggle:m}=v,[p,o]=h.exports.useState(""),[c,b]=h.exports.useState(null),i=O(),{reset:f,control:g,handleSubmit:N,formState:{errors:k}}=P({defaultValues:Ue});h.exports.useEffect(()=>{o(a.title)},[a.title]);const y=()=>{f(),b(null)},d=()=>{f(),b(a.id)},C=()=>{i(ge(a.id))},A=()=>{i(fe(a.id))},R=t=>{i(Te({title:t.taskTitle,boardId:a.id})),y()},w=()=>a.id===c?l("form",{onSubmit:N(R),children:[l("div",{className:"mb-1",children:[e(L,{name:"taskTitle",control:g,rules:{required:!0},render:({field:{value:t,onChange:x}})=>e(D,{autoFocus:!0,rows:"2",value:t,type:"textarea",id:"task-title",onChange:x,placeholder:"Add Content",invalid:k.taskTitle&&!0,"aria-describedby":"validation-add-task"})}),k.taskTitle&&e(W,{color:"danger",id:"validation-add-task",children:"Please enter a valid Task Title"})]}),l("div",{children:[e(S,{color:"primary",size:"sm",type:"submit",className:"me-75",children:"Add"}),e(S,{outline:!0,size:"sm",color:"secondary",onClick:y,children:"Cancel"})]})]}):null,$=t=>{t.from.classList[1]===t.to.classList[1]&&i(ke({taskId:t.item.dataset.taskId,targetTaskId:t.originalEvent.target.dataset.taskId}))},z=t=>{i(ve({taskId:t.item.dataset.taskId,boardId:t.item.dataset.boardId,newBoardId:t.to.classList[1].replace("board-","")}))};return e(h.exports.Fragment,{children:l("div",{className:"board-wrapper",children:[l("div",{className:"d-flex align-items-center justify-content-between",children:[e("div",{className:"d-flex align-items-center board-header",children:e(D,{className:"board-title",value:p,onChange:t=>o(t.target.value)})}),l(ue,{className:"more-options-dropdown",children:[e(pe,{className:"btn-icon",color:"transparent",size:"sm",children:e(ze,{size:20})}),l(be,{end:!0,children:[e(K,{href:"/",onClick:t=>{t.preventDefault(),C()},children:"Clear Tasks"}),e(K,{href:"/",onClick:t=>{t.preventDefault(),A()},children:"Delete Board"})]})]})]}),l("div",{children:[e(Fe,{list:r.tasks,group:"shared-group",setList:()=>null,onChange:$,onAdd:z,className:`tasks-wrapper board-${a.id}`,children:r.tasks.map((t,x)=>t.boardId===a.id?e(je,{task:t,index:x,labelColors:u,handleTaskSidebarToggle:m},`${t.boardId}-${x}`):e(h.exports.Fragment,{},`${t.boardId}-${x}`))}),c===null||c!==null&&c!==a.id?l(S,{size:"sm",color:"flat-secondary",onClick:d,children:[e(Y,{size:14,className:"me-25"}),e("span",{className:"align-middle",children:"Add New Task"})]}):w()]})]})},T)};const Ke={boardTitle:""},q={App:"info",UX:"success",Images:"warning",Forms:"success","Code Review":"danger","Charts & Maps":"primary"},na=()=>{const[v,a]=h.exports.useState(!1),[T,r]=h.exports.useState(!1),u=O(),m=Ne(d=>d.kanban),{reset:p,control:o,handleSubmit:c,formState:{errors:b}}=P({defaultValues:Ke}),i=()=>{p(),r(!1)},f=()=>{p(),r(!0)},g=d=>{u(ye({title:d.boardTitle,id:d.boardTitle.toLowerCase().replace(/ /g,"-")})),i()},N=()=>a(!v),k=()=>m.boards.map((d,C)=>{const A=m.boards[m.boards.length-1].id===d.id;return e(Ge,{store:m,board:d,labelColors:q,isLastBoard:A,index:`${d.id}-${C}`,handleTaskSidebarToggle:N},`${d.id}-${C}`)}),y=()=>T?l("form",{onSubmit:c(g),children:[l("div",{className:"mb-50",children:[e(L,{name:"boardTitle",control:o,rules:{required:!0},render:({field:{value:d,onChange:C}})=>e(D,{autoFocus:!0,value:d,id:"board-title",onChange:C,placeholder:"Board Title",invalid:Boolean(b.boardTitle),"aria-describedby":"validation-add-board"})}),b.boardTitle&&e(W,{color:"danger",id:"validation-add-board",children:"Please enter a valid Board Title"})]}),l("div",{children:[e(S,{color:"primary",size:"sm",type:"submit",className:"me-75",children:"Add"}),e(S,{outline:!0,size:"sm",color:"secondary",onClick:i,children:"Cancel"})]})]}):null;return h.exports.useEffect(()=>{u(Ce()),u(Se())},[u]),m.boards?l("div",{className:"app-kanban-wrapper",children:[k(),e("div",{className:"ms-1",style:{minWidth:150},children:T?y():l(S,{size:"sm",color:"light-secondary",onClick:f,children:[e(Y,{size:14,className:"me-25"}),e("span",{className:"align-middle",children:" Add Board"})]})}),e(Me,{labelColors:q,sidebarOpen:v,selectedTask:m.selectedTask,handleTaskSidebarToggle:N})]}):null};export{na as default};