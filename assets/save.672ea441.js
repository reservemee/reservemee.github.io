import{r as f,n as v,j as p,p as s}from"./index.3706b7ab.js";function y(r,i){if(r==null)return{};var n=u(r,i),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(n[t]=r[t]))}return n}function u(r,i){if(r==null)return{};var n={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(i.indexOf(e)>=0)&&(n[e]=r[e]);return n}var a=f.exports.forwardRef(function(r,i){var n=r.color,t=n===void 0?"currentColor":n,e=r.size,o=e===void 0?24:e,l=y(r,["color","size"]);return v("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[p("circle",{cx:"12",cy:"12",r:"10"}),p("polyline",{points:"8 12 12 16 16 12"}),p("line",{x1:"12",y1:"8",x2:"12",y2:"16"})]})});a.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};a.displayName="ArrowDownCircle";const x=a;function g(r,i){if(r==null)return{};var n=w(r,i),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(n[t]=r[t]))}return n}function w(r,i){if(r==null)return{};var n={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(i.indexOf(e)>=0)&&(n[e]=r[e]);return n}var c=f.exports.forwardRef(function(r,i){var n=r.color,t=n===void 0?"currentColor":n,e=r.size,o=e===void 0?24:e,l=g(r,["color","size"]);return v("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[p("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),p("polyline",{points:"17 21 17 13 7 13 7 21"}),p("polyline",{points:"7 3 7 8 15 8"})]})});c.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};c.displayName="Save";const d=c;export{x as A,d as S};