import{r as l,n as f,j as s,p}from"./index.6fe50bb5.js";function h(r,n){if(r==null)return{};var i=g(r,n),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(i[t]=r[t]))}return i}function g(r,n){if(r==null)return{};var i={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(n.indexOf(e)>=0)&&(i[e]=r[e]);return i}var a=l.exports.forwardRef(function(r,n){var i=r.color,t=i===void 0?"currentColor":i,e=r.size,o=e===void 0?24:e,c=h(r,["color","size"]);return f("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:[s("circle",{cx:"9",cy:"21",r:"1"}),s("circle",{cx:"20",cy:"21",r:"1"}),s("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]})});a.propTypes={color:p.exports.string,size:p.exports.oneOfType([p.exports.string,p.exports.number])};a.displayName="ShoppingCart";const u=a;export{u as S};
