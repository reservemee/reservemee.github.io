import{r as f,n as c,j as l,p as s}from"./index.6fe50bb5.js";function g(r,i){if(r==null)return{};var n=y(r,i),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(n[t]=r[t]))}return n}function y(r,i){if(r==null)return{};var n={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(i.indexOf(e)>=0)&&(n[e]=r[e]);return n}var p=f.exports.forwardRef(function(r,i){var n=r.color,t=n===void 0?"currentColor":n,e=r.size,o=e===void 0?24:e,a=g(r,["color","size"]);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[l("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),l("polyline",{points:"17 6 23 6 23 12"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="TrendingUp";const v=p;export{v as T};
