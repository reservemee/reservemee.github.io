import{r as c,j as a,p as s}from"./index.3706b7ab.js";function f(r,n){if(r==null)return{};var i=u(r,n),e,t;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(t=0;t<o.length;t++)e=o[t],!(n.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,e)||(i[e]=r[e]))}return i}function u(r,n){if(r==null)return{};var i={},e=Object.keys(r),t,o;for(o=0;o<e.length;o++)t=e[o],!(n.indexOf(t)>=0)&&(i[t]=r[t]);return i}var p=c.exports.forwardRef(function(r,n){var i=r.color,e=i===void 0?"currentColor":i,t=r.size,o=t===void 0?24:t,l=f(r,["color","size"]);return a("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:a("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="GitHub";const b=p;export{b as G};