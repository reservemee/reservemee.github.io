import{r as f,j as l,p as s}from"./index.6fe50bb5.js";function c(e,n){if(e==null)return{};var i=h(e,n),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(i[t]=e[t]))}return i}function h(e,n){if(e==null)return{};var i={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(n.indexOf(r)>=0)&&(i[r]=e[r]);return i}var p=f.exports.forwardRef(function(e,n){var i=e.color,t=i===void 0?"currentColor":i,r=e.size,o=r===void 0?24:r,a=c(e,["color","size"]);return l("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:l("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="Shield";const d=p;export{d as S};