import{r as c,n as f,j as a,p as s}from"./index.6fe50bb5.js";function y(r,i){if(r==null)return{};var n=u(r,i),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(n[t]=r[t]))}return n}function u(r,i){if(r==null)return{};var n={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(i.indexOf(e)>=0)&&(n[e]=r[e]);return n}var p=c.exports.forwardRef(function(r,i){var n=r.color,t=n===void 0?"currentColor":n,e=r.size,o=e===void 0?24:e,l=y(r,["color","size"]);return f("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[a("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),a("circle",{cx:"12",cy:"12",r:"3"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="Eye";const g=p;export{g as E};
