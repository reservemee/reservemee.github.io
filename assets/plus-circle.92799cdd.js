import{r as a,n as f,j as l,p as s}from"./index.6fe50bb5.js";function y(r,n){if(r==null)return{};var i=u(r,n),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(i[t]=r[t]))}return i}function u(r,n){if(r==null)return{};var i={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(n.indexOf(e)>=0)&&(i[e]=r[e]);return i}var p=a.exports.forwardRef(function(r,n){var i=r.color,t=i===void 0?"currentColor":i,e=r.size,o=e===void 0?24:e,c=y(r,["color","size"]);return f("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:[l("circle",{cx:"12",cy:"12",r:"10"}),l("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),l("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="PlusCircle";const v=p;export{v as P};
