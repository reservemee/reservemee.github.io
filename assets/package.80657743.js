import{r as c,n as f,j as s,p as a}from"./index.3706b7ab.js";function y(e,i){if(e==null)return{};var n=g(e,i),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function g(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var p=c.exports.forwardRef(function(e,i){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,l=y(e,["color","size"]);return f("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[s("line",{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}),s("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),s("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),s("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]})});p.propTypes={color:a.exports.string,size:a.exports.oneOfType([a.exports.string,a.exports.number])};p.displayName="Package";const v=p;export{v as P};