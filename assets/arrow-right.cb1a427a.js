import{r as f,n as c,j as l,p as s}from"./index.09005372.js";function g(r,n){if(r==null)return{};var i=y(r,n),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(i[t]=r[t]))}return i}function y(r,n){if(r==null)return{};var i={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(n.indexOf(e)>=0)&&(i[e]=r[e]);return i}var p=f.exports.forwardRef(function(r,n){var i=r.color,t=i===void 0?"currentColor":i,e=r.size,o=e===void 0?24:e,a=g(r,["color","size"]);return c("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[l("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l("polyline",{points:"12 5 19 12 12 19"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="ArrowRight";const u=p;export{u as A};