import{r as c,n as f,j as l,p as s}from"./index.6fe50bb5.js";function h(e,n){if(e==null)return{};var i=u(e,n),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(i[t]=e[t]))}return i}function u(e,n){if(e==null)return{};var i={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(n.indexOf(r)>=0)&&(i[r]=e[r]);return i}var p=c.exports.forwardRef(function(e,n){var i=e.color,t=i===void 0?"currentColor":i,r=e.size,o=r===void 0?24:r,a=h(e,["color","size"]);return f("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[l("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),l("polyline",{points:"22 4 12 14.01 9 11.01"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="CheckCircle";const y=p;export{y as C};
