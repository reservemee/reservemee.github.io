import{aA as W,r as S,n as N,i as y,j as h,p as l}from"./index.6fe50bb5.js";import{C as z}from"./chevron-right.c5170c44.js";var D={exports:{}};/*!
 * bsStepper v1.7.0 (https://github.com/Johann-S/bs-stepper)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-stepper/blob/master/LICENSE)
 */(function(A,w){(function(u,m){A.exports=m()})(W,function(){function u(){return u=Object.assign||function(o){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])}return o},u.apply(this,arguments)}var m=window.Element.prototype.matches,b=function(s,e){return s.closest(e)},g=function(s,e){return new window.Event(s,e)},C=function(s,e){var t=new window.CustomEvent(s,e);return t};function x(){if(window.Element.prototype.matches||(m=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(b=function(e,t){if(!document.documentElement.contains(e))return null;do{if(m.call(e,t))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null}),(!window.Event||typeof window.Event!="function")&&(g=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r}),typeof window.CustomEvent!="function"){var o=window.Event.prototype.preventDefault;C=function(e,t){var r=document.createEvent("CustomEvent");return t=t||{bubbles:!1,cancelable:!1,detail:null},r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r.preventDefault=function(){!this.cancelable||(o.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},r}}}x();var T=1e3,i={ACTIVE:"active",LINEAR:"linear",BLOCK:"dstepper-block",NONE:"dstepper-none",FADE:"fade",VERTICAL:"vertical"},d="transitionend",v="bsStepper",E=function(s,e,t,r){var n=s[v];if(!(n._steps[e].classList.contains(i.ACTIVE)||n._stepsContents[e].classList.contains(i.ACTIVE))){var a=C("show.bs-stepper",{cancelable:!0,detail:{from:n._currentIndex,to:e,indexStep:e}});s.dispatchEvent(a);var p=n._steps.filter(function(_){return _.classList.contains(i.ACTIVE)}),L=n._stepsContents.filter(function(_){return _.classList.contains(i.ACTIVE)});a.defaultPrevented||(p.length&&p[0].classList.remove(i.ACTIVE),L.length&&(L[0].classList.remove(i.ACTIVE),!s.classList.contains(i.VERTICAL)&&!n.options.animation&&L[0].classList.remove(i.BLOCK)),I(s,n._steps[e],n._steps,t),P(s,n._stepsContents[e],n._stepsContents,L,r))}},I=function(s,e,t,r){t.forEach(function(a){var p=a.querySelector(r.selectors.trigger);p.setAttribute("aria-selected","false"),s.classList.contains(i.LINEAR)&&p.setAttribute("disabled","disabled")}),e.classList.add(i.ACTIVE);var n=e.querySelector(r.selectors.trigger);n.setAttribute("aria-selected","true"),s.classList.contains(i.LINEAR)&&n.removeAttribute("disabled")},P=function(s,e,t,r,n){var a=s[v],p=t.indexOf(e),L=C("shown.bs-stepper",{cancelable:!0,detail:{from:a._currentIndex,to:p,indexStep:p}});function _(){e.classList.add(i.BLOCK),e.removeEventListener(d,_),s.dispatchEvent(L),n()}if(e.classList.contains(i.FADE)){e.classList.remove(i.NONE);var F=k(e);e.addEventListener(d,_),r.length&&r[0].classList.add(i.NONE),e.classList.add(i.ACTIVE),c(e,F)}else e.classList.add(i.ACTIVE),e.classList.add(i.BLOCK),s.dispatchEvent(L),n()},k=function(s){if(!s)return 0;var e=window.getComputedStyle(s).transitionDuration,t=parseFloat(e);return t?(e=e.split(",")[0],parseFloat(e)*T):0},c=function(s,e){var t=!1,r=5,n=e+r;function a(){t=!0,s.removeEventListener(d,a)}s.addEventListener(d,a),window.setTimeout(function(){t||s.dispatchEvent(g(d)),s.removeEventListener(d,a)},n)},f=function(s,e){e.animation&&s.forEach(function(t){t.classList.add(i.FADE),t.classList.add(i.NONE)})},V=function(){return function(e){e.preventDefault()}},q=function(s){return function(t){t.preventDefault();var r=b(t.target,s.selectors.steps),n=b(r,s.selectors.stepper),a=n[v],p=a._steps.indexOf(r);E(n,p,s,function(){a._currentIndex=p})}},O={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}},j=function(){function o(e,t){var r=this;t===void 0&&(t={}),this._element=e,this._currentIndex=0,this._stepsContents=[],this.options=u({},O,{},t),this.options.selectors=u({},O.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(i.LINEAR),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter(function(n){return n.hasAttribute("data-target")}).forEach(function(n){r._stepsContents.push(r._element.querySelector(n.getAttribute("data-target")))}),f(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,v,{value:this,writable:!0}),this._steps.length&&E(this._element,this._currentIndex,this.options,function(){})}var s=o.prototype;return s._setLinkListeners=function(){var t=this;this._steps.forEach(function(r){var n=r.querySelector(t.options.selectors.trigger);t.options.linear?(t._clickStepLinearListener=V(t.options),n.addEventListener("click",t._clickStepLinearListener)):(t._clickStepNonLinearListener=q(t.options),n.addEventListener("click",t._clickStepNonLinearListener))})},s.next=function(){var t=this,r=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;E(this._element,r,this.options,function(){t._currentIndex=r})},s.previous=function(){var t=this,r=this._currentIndex-1>=0?this._currentIndex-1:0;E(this._element,r,this.options,function(){t._currentIndex=r})},s.to=function(t){var r=this,n=t-1,a=n>=0&&n<this._steps.length?n:0;E(this._element,a,this.options,function(){r._currentIndex=a})},s.reset=function(){var t=this;E(this._element,0,this.options,function(){t._currentIndex=0})},s.destroy=function(){var t=this;this._steps.forEach(function(r){var n=r.querySelector(t.options.selectors.trigger);t.options.linear?n.removeEventListener("click",t._clickStepLinearListener):n.removeEventListener("click",t._clickStepNonLinearListener)}),this._element[v]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},o}();return j})})(D);const B=D.exports;const R=S.exports.forwardRef((A,w)=>{const{type:u,steps:m,options:b,instance:g,separator:C,className:x,headerClassName:T,contentClassName:i,contentWrapperClassName:d}=A,[v,E]=S.exports.useState(0);let I=null;S.exports.useEffect(()=>{I=new B(w.current,b),w.current.addEventListener("shown.bs-stepper",function(c){E(c.detail.indexStep)}),g&&g(I)},[]);const P=()=>m.map((c,f)=>N(S.exports.Fragment,{children:[f!==0&&f!==m.length?h("div",{className:"line",children:C}):null,h("div",{className:y("step",{crossed:v>f,active:f===v}),"data-target":`#${c.id}`,children:N("button",{type:"button",className:"step-trigger",children:[h("span",{className:"bs-stepper-box",children:c.icon?c.icon:f+1}),N("span",{className:"bs-stepper-label",children:[h("span",{className:"bs-stepper-title",children:c.title}),c.subtitle?h("span",{className:"bs-stepper-subtitle",children:c.subtitle}):null]})]})})]},c.id)),k=()=>m.map((c,f)=>h("div",{className:y("content",{[i]:i,"active dstepper-block":v===f}),id:c.id,children:c.content},c.id));return N("div",{ref:w,className:y("bs-stepper",{[x]:x,vertical:u==="vertical","vertical wizard-modern":u==="modern-vertical","wizard-modern":u==="modern-horizontal"}),children:[h("div",{className:y("bs-stepper-header",{[T]:T}),children:P()}),h("div",{className:y("bs-stepper-content",{[d]:d}),children:k()})]})});R.defaultProps={options:{},type:"horizontal",separator:h(z,{size:17})};R.propTypes={type:l.exports.PropTypes.string,instance:l.exports.PropTypes.func,options:l.exports.PropTypes.object,className:l.exports.PropTypes.string,separator:l.exports.PropTypes.element,headerClassName:l.exports.PropTypes.string,contentClassName:l.exports.PropTypes.string,contentWrapperClassName:l.exports.PropTypes.string,steps:l.exports.PropTypes.arrayOf(l.exports.PropTypes.shape({id:l.exports.PropTypes.string.isRequired,title:l.exports.PropTypes.string.isRequired,subtitle:l.exports.PropTypes.string,icon:l.exports.PropTypes.any,content:l.exports.PropTypes.any.isRequired})).isRequired};export{R as W};
