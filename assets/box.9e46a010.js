import{r as f,n as c,j as p,p as s}from"./index.6fe50bb5.js";function x(r,i){if(r==null)return{};var n=y(r,i),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(n[t]=r[t]))}return n}function y(r,i){if(r==null)return{};var n={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(i.indexOf(e)>=0)&&(n[e]=r[e]);return n}var a=f.exports.forwardRef(function(r,i){var n=r.color,t=n===void 0?"currentColor":n,e=r.size,o=e===void 0?24:e,l=x(r,["color","size"]);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[p("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),p("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),p("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]})});a.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};a.displayName="Box";const u=a;export{u as B};
