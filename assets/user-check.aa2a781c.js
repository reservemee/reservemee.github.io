import{r as l,n as f,j as p,p as s}from"./index.6fe50bb5.js";function v(e,i){if(e==null)return{};var n=h(e,i),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function h(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var a=l.exports.forwardRef(function(e,i){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,c=v(e,["color","size"]);return f("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:[p("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),p("circle",{cx:"8.5",cy:"7",r:"4"}),p("polyline",{points:"17 11 19 13 23 9"})]})});a.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};a.displayName="UserCheck";const u=a;export{u as U};
