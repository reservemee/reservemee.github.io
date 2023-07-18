import{r as n,n as a,i as b,j as e,U as K,D as Y,v as Z,w as T,a5 as ee,ad as W,ae as F,a7 as g,a6 as L,A as H,z as ae,af as se,a3 as E,B as le,ag as te,f as re,ah as ce,ai as ne}from"./index.09005372.js";import{a as B,P as O,M as ie,A as y,S as oe,i as de,X as R,B as he,U as me,f as ue}from"./App.c0ce4c5e.js";import{M as fe}from"./message-square.5366eeca.js";import{P as V}from"./phone-call.2368873d.js";import{V as Ne,M as pe,C as ge,S as be}from"./video.26494cb8.js";import{S as $}from"./search.b852d141.js";import{M as ve}from"./more-vertical.90afcba1.js";import{I as G}from"./image.206ca69b.js";import{T as q}from"./trash.0ae6231e.js";import{M as Ce}from"./mail.9a827d5d.js";import{C as Se}from"./clock.98cd6c69.js";import{T as ke}from"./tag.904233cd.js";import{S as we}from"./star.2fb59479.js";/* empty css                      */const xe=d=>{const{handleUser:c,handleUserSidebarRight:v,handleSidebar:h,store:k,userSidebarLeft:w}=d,{userProfile:i,selectedUser:l}=k,r=n.exports.useRef(null),M=B(),[o,z]=n.exports.useState(""),m=()=>{const s=ae.findDOMNode(r.current);s.scrollTop=Number.MAX_SAFE_INTEGER};n.exports.useEffect(()=>{Object.keys(l).length&&m()},[l]);const D=()=>{let s=[];l.chat&&(s=l.chat.chat);const f=[];let S=s[0]?s[0].senderId:void 0,x={senderId:S,messages:[]};return s.forEach((N,P)=>{S===N.senderId?x.messages.push({msg:N.message,time:N.time}):(S=N.senderId,f.push(x),x={senderId:N.senderId,messages:[{msg:N.message,time:N.time}]}),P===s.length-1&&f.push(x)}),f},A=()=>D().map((s,f)=>a("div",{className:b("chat",{"chat-left":s.senderId!==11}),children:[e("div",{className:"chat-avatar",children:e(y,{imgWidth:36,imgHeight:36,className:"box-shadow-1 cursor-pointer",img:s.senderId===11?i.avatar:l.contact.avatar})}),e("div",{className:"chat-body",children:s.messages.map(S=>e("div",{className:"chat-content",children:e("p",{children:S.msg})},S.msg))})]},f)),u=s=>{v(),c(s)},C=()=>{!Object.keys(l).length&&!w&&window.innerWidth<992&&h()},U=s=>{s.preventDefault(),o.trim().length&&(M(se({...l,message:o})),z(""))},I=Object.keys(l).length&&l.chat?O:"div";return a("div",{className:"chat-app-window",children:[a("div",{className:b("start-chat-area",{"d-none":Object.keys(l).length}),children:[e("div",{className:"start-chat-icon mb-1",children:e(fe,{})}),e("h4",{className:"sidebar-toggle start-chat-text",onClick:C,children:"Start Conversation"})]}),Object.keys(l).length?a("div",{className:b("active-chat",{"d-none":l===null}),children:[e("div",{className:"chat-navbar",children:a("header",{className:"chat-header",children:[a("div",{className:"d-flex align-items-center",children:[e("div",{className:"sidebar-toggle d-block d-lg-none me-1",onClick:h,children:e(ie,{size:21})}),e(y,{imgHeight:"36",imgWidth:"36",img:l.contact.avatar,status:l.contact.status,className:"avatar-border user-profile-toggle m-0 me-1",onClick:()=>u(l.contact)}),e("h6",{className:"mb-0",children:l.contact.fullName})]}),a("div",{className:"d-flex align-items-center",children:[e(V,{size:18,className:"cursor-pointer d-sm-block d-none me-1"}),e(Ne,{size:18,className:"cursor-pointer d-sm-block d-none me-1"}),e($,{size:18,className:"cursor-pointer d-sm-block d-none"}),a(K,{className:"more-options-dropdown",children:[e(Y,{className:"btn-icon",color:"transparent",size:"sm",children:e(ve,{size:"18"})}),a(Z,{end:!0,children:[e(T,{href:"/",onClick:s=>s.preventDefault(),children:"View Contact"}),e(T,{href:"/",onClick:s=>s.preventDefault(),children:"Mute Notifications"}),e(T,{href:"/",onClick:s=>s.preventDefault(),children:"Block Contact"}),e(T,{href:"/",onClick:s=>s.preventDefault(),children:"Clear Chat"}),e(T,{href:"/",onClick:s=>s.preventDefault(),children:"Report"})]})]})]})]})}),e(I,{ref:r,className:"user-chats",options:{wheelPropagation:!1},children:l.chat?e("div",{className:"chats",children:A()}):null}),a(ee,{className:"chat-app-form",onSubmit:s=>U(s),children:[a(W,{className:"input-group-merge me-1 form-send-message",children:[e(F,{children:e(pe,{className:"cursor-pointer",size:14})}),e(g,{value:o,onChange:s=>z(s.target.value),placeholder:"Type your message or use speech to text"}),e(F,{children:a(L,{className:"attachment-icon mb-0",for:"attach-doc",children:[e(G,{className:"cursor-pointer text-secondary",size:14}),e("input",{type:"file",id:"attach-doc",hidden:!0})]})})]}),a(H,{className:"send",color:"primary",children:[e(oe,{size:14,className:"d-lg-none"}),e("span",{className:"d-none d-lg-block",children:"Send"})]})]})]}):null]})},ye=d=>{const{store:c,sidebar:v,handleSidebar:h,userSidebarLeft:k,handleUserSidebarLeft:w}=d,{chats:i,contacts:l,userProfile:r}=c,M=B(),[o,z]=n.exports.useState(""),[m,D]=n.exports.useState(""),[A,u]=n.exports.useState(0),[C,U]=n.exports.useState("online"),[I,s]=n.exports.useState([]),[f,S]=n.exports.useState([]),x=p=>{M(te(p)),u(p),v===!0&&h()};n.exports.useEffect(()=>{de(c.selectedUser)||(c.selectedUser.chat?u(c.selectedUser.chat.id):u(c.selectedUser.contact.id))},[]);const N=()=>i&&i.length?o.length&&!I.length?e("li",{className:"no-results show",children:e("h6",{className:"mb-0",children:"No Chats Found"})}):(o.length&&I.length?I:i).map(t=>{const j=ue(t.chat.lastMessage?t.chat.lastMessage.time:new Date);return a("li",{onClick:()=>x(t.id),className:b({active:A===t.id}),children:[e(y,{img:t.avatar,imgHeight:"42",imgWidth:"42",status:t.status}),a("div",{className:"chat-info flex-grow-1",children:[e("h5",{className:"mb-0",children:t.fullName}),e(E,{className:"text-truncate",children:t.chat.lastMessage?t.chat.lastMessage.message:i[i.length-1].message})]}),a("div",{className:"chat-meta text-nowrap",children:[e("small",{className:"float-end mb-25 chat-time ms-25",children:j}),t.chat.unseenMsgs>=1?e(le,{className:"float-end",color:"danger",pill:!0,children:t.chat.unseenMsgs}):null]})]},t.id)}):null,P=()=>l&&l.length?o.length&&!f.length?e("li",{className:"no-results show",children:e("h6",{className:"mb-0",children:"No Chats Found"})}):(o.length&&f.length?f:l).map(t=>a("li",{onClick:()=>x(t.id),children:[e(y,{img:t.avatar,imgHeight:"42",imgWidth:"42"}),a("div",{className:"chat-info flex-grow-1",children:[e("h5",{className:"mb-0",children:t.fullName}),e(E,{className:"text-truncate",children:t.about})]})]},t.fullName)):null,X=p=>{z(p.target.value);const t=J=>J.fullName.toLowerCase().includes(p.target.value.toLowerCase()),j=i.filter(t),Q=l.filter(t);s([...j]),S([...Q])},_=()=>r&&r.about&&r.about.length&&m.length===0?r.about.length:m.length;return c?e("div",{className:"sidebar-left",children:a("div",{className:"sidebar",children:[a("div",{className:b("chat-profile-sidebar",{show:k}),children:[a("header",{className:"chat-profile-header",children:[e("div",{className:"close-icon",onClick:w,children:e(R,{size:14})}),a("div",{className:"header-profile-sidebar",children:[e(y,{className:"box-shadow-1 avatar-border",img:r.avatar,status:C,size:"xl"}),e("h4",{className:"chat-user-name",children:r.fullName}),e("span",{className:"user-post",children:r.role})]})]}),a(O,{className:"profile-sidebar-area",options:{wheelPropagation:!1},children:[e("h6",{className:"section-label mb-1",children:"About"}),a("div",{className:"about-user",children:[e(g,{rows:"5",type:"textarea",defaultValue:r.about,onChange:p=>D(p.target.value),className:b("char-textarea",{"text-danger":m&&m.length>120})}),a("small",{className:"counter-value float-end",children:[e("span",{className:"char-count",children:_()})," / 120"]})]}),e("h6",{className:"section-label mb-1 mt-3",children:"Status"}),a("ul",{className:"list-unstyled user-status",children:[e("li",{className:"pb-1",children:a("div",{className:"form-check form-check-success",children:[e(g,{type:"radio",label:"Online",id:"user-online",checked:C==="online",onChange:()=>U("online")}),e(L,{className:"form-check-label",for:"user-online",children:"Online"})]})}),e("li",{className:"pb-1",children:a("div",{className:"form-check form-check-danger",children:[e(g,{type:"radio",id:"user-busy",label:"Do Not Disturb",checked:C==="busy",onChange:()=>U("busy")}),e(L,{className:"form-check-label",for:"user-busy",children:"Busy"})]})}),e("li",{className:"pb-1",children:a("div",{className:"form-check form-check-warning",children:[e(g,{type:"radio",label:"Away",id:"user-away",checked:C==="away",onChange:()=>U("away")}),e(L,{className:"form-check-label",for:"user-away",children:"Away"})]})}),e("li",{className:"pb-1",children:a("div",{className:"form-check form-check-secondary",children:[e(g,{type:"radio",label:"Offline",id:"user-offline",checked:C==="offline",onChange:()=>U("offline")}),e(L,{className:"form-check-label",for:"user-offline",children:"Offline"})]})})]}),e("h6",{className:"section-label mb-1 mt-2",children:"Settings"}),a("ul",{className:"list-unstyled",children:[a("li",{className:"d-flex justify-content-between align-items-center mb-1",children:[a("div",{className:"d-flex align-items-center",children:[e(ge,{className:"me-75",size:"18"}),e("span",{className:"align-middle",children:"Two-step Verification"})]}),e("div",{className:"form-switch",children:e(g,{type:"switch",id:"verification",name:"verification",defaultChecked:!0})})]}),a("li",{className:"d-flex justify-content-between align-items-center mb-1",children:[a("div",{className:"d-flex align-items-center",children:[e(he,{className:"me-75",size:"18"}),e("span",{className:"align-middle",children:"Notification"})]}),e("div",{className:"form-switch",children:e(g,{type:"switch",id:"notifications",name:"notifications"})})]}),a("li",{className:"d-flex align-items-center cursor-pointer mb-1",children:[e(me,{className:"me-75",size:"18"}),e("span",{className:"align-middle",children:"Invite Friends"})]}),a("li",{className:"d-flex align-items-center cursor-pointer",children:[e(q,{className:"me-75",size:"18"}),e("span",{className:"align-middle",children:"Delete Account"})]})]}),e("div",{className:"mt-3",children:e(H,{color:"primary",children:"Logout"})})]})]}),a("div",{className:b("sidebar-content",{show:v===!0}),children:[e("div",{className:"sidebar-close-icon",onClick:h,children:e(R,{size:14})}),e("div",{className:"chat-fixed-search",children:a("div",{className:"d-flex align-items-center w-100",children:[e("div",{className:"sidebar-profile-toggle",onClick:w,children:Object.keys(r).length?e(y,{className:"avatar-border",img:r.avatar,status:C,imgHeight:"42",imgWidth:"42"}):null}),a(W,{className:"input-group-merge ms-1 w-100",children:[e(F,{className:"round",children:e($,{className:"text-muted",size:14})}),e(g,{value:o,className:"round",placeholder:"Search or start a new chat",onChange:X})]})]})}),a(O,{className:"chat-user-list-wrapper list-group",options:{wheelPropagation:!1},children:[e("h4",{className:"chat-list-title",children:"Chats"}),e("ul",{className:"chat-users-list chat-list media-list",children:N()}),e("h4",{className:"chat-list-title",children:"Contacts"}),e("ul",{className:"chat-users-list contact-list media-list",children:P()})]})]})]})}):null},Me=d=>{const{user:c,handleUserSidebarRight:v,userSidebarRight:h}=d;return a("div",{className:b("user-profile-sidebar",{show:h===!0}),children:[a("header",{className:"user-profile-header",children:[e("span",{className:"close-icon",onClick:v,children:e(R,{size:14})}),a("div",{className:"header-profile-sidebar",children:[e(y,{className:"box-shadow-1 avatar-border",size:"xl",status:c.status,img:c.avatar,imgHeight:"70",imgWidth:"70"}),e("h4",{className:"chat-user-name",children:c.fullName}),e("span",{className:"user-post",children:c.role})]})]}),a(O,{className:"user-profile-sidebar-area",options:{wheelPropagation:!1},children:[e("h6",{className:"section-label mb-1",children:"About"}),e("p",{children:c.about}),a("div",{className:"personal-info",children:[e("h6",{className:"section-label mb-1 mt-3",children:"Personal Information"}),a("ul",{className:"list-unstyled",children:[a("li",{className:"mb-1",children:[e(Ce,{className:"me-75",size:17}),e("span",{className:"align-middle",children:"lucifer@email.com"})]}),a("li",{className:"mb-1",children:[e(V,{className:"me-50",size:17}),e("span",{className:"align-middle",children:" +1(123) 456 - 7890"})]}),a("li",{children:[e(Se,{className:"me-50",size:17}),e("span",{className:"align-middle",children:" Mon - Fri 10AM - 8PM"})]})]})]}),a("div",{className:"more-options",children:[e("h6",{className:"section-label mb-1 mt-3",children:"Options"}),a("ul",{className:"list-unstyled",children:[a("li",{className:"cursor-pointer mb-1",children:[e(ke,{className:"me-50",size:17}),e("span",{className:"align-middle",children:" Add Tag"})]}),a("li",{className:"cursor-pointer mb-1",children:[e(we,{className:"me-50",size:17}),e("span",{className:"align-middle",children:" Important Contact"})]}),a("li",{className:"cursor-pointer mb-1",children:[e(G,{className:"me-50",size:17}),e("span",{className:"align-middle",children:" Shared Media"})]}),a("li",{className:"cursor-pointer mb-1",children:[e(q,{className:"me-50",size:17}),e("span",{className:"align-middle",children:" Delete Contact"})]}),a("li",{className:"cursor-pointer",children:[e(be,{className:"me-75",size:17}),e("span",{className:"align-middle",children:"Block Contact"})]})]})]})]})]})};const We=()=>{const d=B(),c=re(u=>u.chat),[v,h]=n.exports.useState({}),[k,w]=n.exports.useState(!1),[i,l]=n.exports.useState(!1),[r,M]=n.exports.useState(!1),o=()=>w(!k),z=()=>M(!r),m=()=>l(!i),D=()=>{w(!1),l(!1),M(!1)},A=u=>h(u);return n.exports.useEffect(()=>{d(ce()),d(ne())},[d]),a(n.exports.Fragment,{children:[e(ye,{store:c,sidebar:k,handleSidebar:o,userSidebarLeft:r,handleUserSidebarLeft:z}),e("div",{className:"content-right",children:e("div",{className:"content-wrapper",children:a("div",{className:"content-body",children:[e("div",{className:b("body-content-overlay",{show:i===!0||k===!0||r===!0}),onClick:D}),e(xe,{store:c,handleUser:A,handleSidebar:o,userSidebarLeft:r,handleUserSidebarRight:m}),e(Me,{user:v,userSidebarRight:i,handleUserSidebarRight:m})]})})})]})};export{We as default};