import{r as c,n as l,j as p,p as s}from"./index.6fe50bb5.js";function h(r,n){if(r==null)return{};var i=v(r,n),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(i[t]=r[t]))}return i}function v(r,n){if(r==null)return{};var i={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(n.indexOf(e)>=0)&&(i[e]=r[e]);return i}var a=c.exports.forwardRef(function(r,n){var i=r.color,t=i===void 0?"currentColor":i,e=r.size,o=e===void 0?24:e,f=h(r,["color","size"]);return l("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...f,children:[p("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),p("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]})});a.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};a.displayName="Briefcase";const g=a;export{g as B};
