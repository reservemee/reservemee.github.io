import{r as c,j as p,p as s}from"./index.3706b7ab.js";function f(e,i){if(e==null)return{};var n=h(e,i),o,r;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],!(i.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(n[o]=e[o]))}return n}function h(e,i){if(e==null)return{};var n={},o=Object.keys(e),r,t;for(t=0;t<o.length;t++)r=o[t],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var a=c.exports.forwardRef(function(e,i){var n=e.color,o=n===void 0?"currentColor":n,r=e.size,t=r===void 0?24:r,l=f(e,["color","size"]);return p("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:p("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})});a.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};a.displayName="Facebook";const u=a;export{u as F};