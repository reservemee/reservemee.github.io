import{p as s,j as t,i as n,n as g,r as u,bc as x}from"./index.6fe50bb5.js";import{A as m}from"./App.cb24265c.js";const v=o=>{const{data:p,tag:r,className:e}=o,c=r||"div",d=()=>p.map((a,i)=>{const l=a.tag?a.tag:"div";return g(u.exports.Fragment,{children:[a.title?t(x,{placement:a.placement,target:a.title.split(" ").join("-"),children:a.title}):null,a.meta?null:t(m,{tag:l,className:n("pull-up",{[a.className]:a.className}),...a.title?{id:a.title.split(" ").join("-")}:{},...a,title:void 0,meta:void 0}),a.meta?t(l,{className:"d-flex align-items-center ps-1",children:a.meta}):null]},i)});return t(c,{className:n("avatar-group",{[e]:e}),children:d()})};v.propTypes={data:s.exports.array.isRequired,tag:s.exports.oneOfType([s.exports.func,s.exports.string])};export{v as A};
