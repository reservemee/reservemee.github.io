import{r as c,n as f,j as p,p as s}from"./index.6fe50bb5.js";function y(e,n){if(e==null)return{};var i=x(e,n),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(i[t]=e[t]))}return i}function x(e,n){if(e==null)return{};var i={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(n.indexOf(r)>=0)&&(i[r]=e[r]);return i}var l=c.exports.forwardRef(function(e,n){var i=e.color,t=i===void 0?"currentColor":i,r=e.size,o=r===void 0?24:r,a=y(e,["color","size"]);return f("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[p("circle",{cx:"12",cy:"12",r:"10"}),p("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),p("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})});l.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};l.displayName="HelpCircle";const v=l;export{v as H};
