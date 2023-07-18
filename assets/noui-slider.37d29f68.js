import{r as xe,j as mr,ac as ht}from"./index.6fe50bb5.js";var mt={exports:{}};(function(p,d){(function(o){p.exports=o()})(function(){var o=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function P(h){return h.split("").reverse().join("")}function A(h,v){return h.substring(0,v.length)===v}function K(h,v){return h.slice(-1*v.length)===v}function L(h,v,S){if((h[v]||h[S])&&h[v]===h[S])throw new Error(v)}function ee(h){return typeof h=="number"&&isFinite(h)}function se(h,v){return h=h.toString().split("e"),h=Math.round(+(h[0]+"e"+(h[1]?+h[1]+v:v))),h=h.toString().split("e"),(+(h[0]+"e"+(h[1]?+h[1]-v:-v))).toFixed(v)}function ve(h,v,S,k,O,fe,le,Q,Y,te,ue,m){var W=m,R,ce,G,he="",$="";return fe&&(m=fe(m)),ee(m)?(h!==!1&&parseFloat(m.toFixed(h))===0&&(m=0),m<0&&(R=!0,m=Math.abs(m)),h!==!1&&(m=se(m,h)),m=m.toString(),m.indexOf(".")!==-1?(ce=m.split("."),G=ce[0],S&&(he=S+ce[1])):G=m,v&&(G=P(G).match(/.{1,3}/g),G=P(G.join(P(v)))),R&&Q&&($+=Q),k&&($+=k),R&&Y&&($+=Y),$+=G,$+=he,O&&($+=O),te&&($=te($,W)),$):!1}function T(h,v,S,k,O,fe,le,Q,Y,te,ue,m){var W,R="";return ue&&(m=ue(m)),!m||typeof m!="string"||(Q&&A(m,Q)&&(m=m.replace(Q,""),W=!0),k&&A(m,k)&&(m=m.replace(k,"")),Y&&A(m,Y)&&(m=m.replace(Y,""),W=!0),O&&K(m,O)&&(m=m.slice(0,-1*O.length)),v&&(m=m.split(v).join("")),S&&(m=m.replace(S,".")),W&&(R+="-"),R+=m,R=R.replace(/[^0-9\.\-.]/g,""),R==="")||(R=Number(R),le&&(R=le(R)),!ee(R))?!1:R}function oe(h){var v,S,k,O={};for(h.suffix===void 0&&(h.suffix=h.postfix),v=0;v<o.length;v+=1)if(S=o[v],k=h[S],k===void 0)S==="negative"&&!O.negativeBefore?O[S]="-":S==="mark"&&O.thousand!=="."?O[S]=".":O[S]=!1;else if(S==="decimals")if(k>=0&&k<8)O[S]=k;else throw new Error(S);else if(S==="encoder"||S==="decoder"||S==="edit"||S==="undo")if(typeof k=="function")O[S]=k;else throw new Error(S);else if(typeof k=="string")O[S]=k;else throw new Error(S);return L(O,"mark","thousand"),L(O,"prefix","negative"),L(O,"prefix","negativeBefore"),O}function ie(h,v,S){var k,O=[];for(k=0;k<o.length;k+=1)O.push(h[o[k]]);return O.push(S),v.apply("",O)}function Z(h){if(!(this instanceof Z))return new Z(h);typeof h=="object"&&(h=oe(h),this.to=function(v){return ie(h,ve,v)},this.from=function(v){return ie(h,T,v)})}return Z})})(mt);const _r=mt.exports;var gt={exports:{}};/*! nouislider - 14.7.0 - 4/6/2021 */(function(p,d){(function(o){p.exports=o()})(function(){var o="14.7.0";function P(t){return typeof t=="object"&&typeof t.to=="function"&&typeof t.from=="function"}function A(t){t.parentElement.removeChild(t)}function K(t){return t!=null}function L(t){t.preventDefault()}function ee(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function se(t,e){return Math.round(t/e)*e}function ve(t,e){var f=t.getBoundingClientRect(),a=t.ownerDocument,g=a.documentElement,x=O(a);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(x.x=0),e?f.top+x.y-g.clientTop:f.left+x.x-g.clientLeft}function T(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function oe(t,e,f){f>0&&(v(t,e),setTimeout(function(){S(t,e)},f))}function ie(t){return Math.max(Math.min(t,100),0)}function Z(t){return Array.isArray(t)?t:[t]}function h(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function v(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function S(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function k(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function O(t){var e=window.pageXOffset!==void 0,f=(t.compatMode||"")==="CSS1Compat",a=e?window.pageXOffset:f?t.documentElement.scrollLeft:t.body.scrollLeft,g=e?window.pageYOffset:f?t.documentElement.scrollTop:t.body.scrollTop;return{x:a,y:g}}function fe(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function le(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function Q(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function Y(t,e){return 100/(e-t)}function te(t,e,f){return e*100/(t[f+1]-t[f])}function ue(t,e){return te(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function m(t,e){return e*(t[1]-t[0])/100+t[0]}function W(t,e){for(var f=1;t>=e[f];)f+=1;return f}function R(t,e,f){if(f>=t.slice(-1)[0])return 100;var a=W(f,t),g=t[a-1],x=t[a],b=e[a-1],j=e[a];return b+ue([g,x],f)/Y(b,j)}function ce(t,e,f){if(f>=100)return t.slice(-1)[0];var a=W(f,e),g=t[a-1],x=t[a],b=e[a-1],j=e[a];return m([g,x],(f-b)*Y(b,j))}function G(t,e,f,a){if(a===100)return a;var g=W(a,t),x=t[g-1],b=t[g];return f?a-x>(b-x)/2?b:x:e[g-1]?t[g-1]+se(a-t[g-1],e[g-1]):a}function he(t,e,f){var a;if(typeof e=="number"&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+o+"): 'range' contains invalid value.");if(t==="min"?a=0:t==="max"?a=100:a=parseFloat(t),!T(a)||!T(e[0]))throw new Error("noUiSlider ("+o+"): 'range' value isn't numeric.");f.xPct.push(a),f.xVal.push(e[0]),a?f.xSteps.push(isNaN(e[1])?!1:e[1]):isNaN(e[1])||(f.xSteps[0]=e[1]),f.xHighestCompleteStep.push(0)}function $(t,e,f){if(!!e){if(f.xVal[t]===f.xVal[t+1]){f.xSteps[t]=f.xHighestCompleteStep[t]=f.xVal[t];return}f.xSteps[t]=te([f.xVal[t],f.xVal[t+1]],e,0)/Y(f.xPct[t],f.xPct[t+1]);var a=(f.xVal[t+1]-f.xVal[t])/f.xNumSteps[t],g=Math.ceil(Number(a.toFixed(3))-1),x=f.xVal[t]+f.xNumSteps[t]*g;f.xHighestCompleteStep[t]=x}}function B(t,e,f){this.xPct=[],this.xVal=[],this.xSteps=[f||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var a,g=[];for(a in t)t.hasOwnProperty(a)&&g.push([t[a],a]);for(g.length&&typeof g[0][0]=="object"?g.sort(function(x,b){return x[0][0]-b[0][0]}):g.sort(function(x,b){return x[0]-b[0]}),a=0;a<g.length;a++)he(g[a][1],g[a][0],this);for(this.xNumSteps=this.xSteps.slice(0),a=0;a<this.xNumSteps.length;a++)$(a,this.xNumSteps[a],this)}B.prototype.getDistance=function(t){var e,f=[];for(e=0;e<this.xNumSteps.length-1;e++){var a=this.xNumSteps[e];if(a&&t/a%1!==0)throw new Error("noUiSlider ("+o+"): 'limit', 'margin' and 'padding' of "+this.xPct[e]+"% range must be divisible by step.");f[e]=te(this.xVal,t,e)}return f},B.prototype.getAbsoluteDistance=function(t,e,f){var a=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[a+1];)a++;else t===this.xPct[this.xPct.length-1]&&(a=this.xPct.length-2);!f&&t===this.xPct[a+1]&&a++;var g,x=1,b=e[a],j=0,w=0,J=0,q=0;for(f?g=(t-this.xPct[a])/(this.xPct[a+1]-this.xPct[a]):g=(this.xPct[a+1]-t)/(this.xPct[a+1]-this.xPct[a]);b>0;)j=this.xPct[a+1+q]-this.xPct[a+q],e[a+q]*x+100-g*100>100?(w=j*g,x=(b-100*g)/e[a+q],g=1):(w=e[a+q]*j/100*x,x=0),f?(J=J-w,this.xPct.length+q>=1&&q--):(J=J+w,this.xPct.length-q>=1&&q++),b=e[a+q]*x;return t+J},B.prototype.toStepping=function(t){return t=R(this.xVal,this.xPct,t),t},B.prototype.fromStepping=function(t){return ce(this.xVal,this.xPct,t)},B.prototype.getStep=function(t){return t=G(this.xPct,this.xSteps,this.snap,t),t},B.prototype.getDefaultStep=function(t,e,f){var a=W(t,this.xPct);return(t===100||e&&t===this.xPct[a-1])&&(a=Math.max(a-1,1)),(this.xVal[a]-this.xVal[a-1])/f},B.prototype.getNearbySteps=function(t){var e=W(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},B.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(h);return Math.max.apply(null,t)},B.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var F={to:function(t){return t!==void 0&&t.toFixed(2)},from:Number},y={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},M={tooltips:".__tooltips",aria:".__aria"};function Xe(t){if(P(t))return!0;throw new Error("noUiSlider ("+o+"): 'format' requires 'to' and 'from' methods.")}function yt(t,e){if(!T(e))throw new Error("noUiSlider ("+o+"): 'step' is not numeric.");t.singleStep=e}function xt(t,e){if(!T(e))throw new Error("noUiSlider ("+o+"): 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function Et(t,e){if(!T(e))throw new Error("noUiSlider ("+o+"): 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function Ct(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider ("+o+"): 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider ("+o+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+o+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new B(e,t.snap,t.singleStep)}function Pt(t,e){if(e=Z(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+o+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function At(t,e){if(t.snap=e,typeof e!="boolean")throw new Error("noUiSlider ("+o+"): 'snap' option must be a boolean.")}function Ot(t,e){if(t.animate=e,typeof e!="boolean")throw new Error("noUiSlider ("+o+"): 'animate' option must be a boolean.")}function _t(t,e){if(t.animationDuration=e,typeof e!="number")throw new Error("noUiSlider ("+o+"): 'animationDuration' option must be a number.")}function Dt(t,e){var f=[!1],a;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(a=1;a<t.handles;a++)f.push(e);f.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+o+"): 'connect' option doesn't match handle count.");f=e}t.connect=f}function kt(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+o+"): 'orientation' option is invalid.")}}function Ye(t,e){if(!T(e))throw new Error("noUiSlider ("+o+"): 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function Ut(t,e){if(!T(e))throw new Error("noUiSlider ("+o+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+o+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function Vt(t,e){var f;if(!T(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+o+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||T(e[0])||T(e[1])))throw new Error("noUiSlider ("+o+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],f=0;f<t.spectrum.xNumSteps.length-1;f++)if(t.padding[0][f]<0||t.padding[1][f]<0)throw new Error("noUiSlider ("+o+"): 'padding' option must be a positive number(s).");var a=e[0]+e[1],g=t.spectrum.xVal[0],x=t.spectrum.xVal[t.spectrum.xVal.length-1];if(a/(x-g)>1)throw new Error("noUiSlider ("+o+"): 'padding' option must not exceed 100% of the range.")}}function Lt(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+o+"): 'direction' option was not recognized.")}}function Mt(t,e){if(typeof e!="string")throw new Error("noUiSlider ("+o+"): 'behaviour' must be a string containing options.");var f=e.indexOf("tap")>=0,a=e.indexOf("drag")>=0,g=e.indexOf("fixed")>=0,x=e.indexOf("snap")>=0,b=e.indexOf("hover")>=0,j=e.indexOf("unconstrained")>=0;if(g){if(t.handles!==2)throw new Error("noUiSlider ("+o+"): 'fixed' behaviour must be used with 2 handles");Ye(t,t.start[1]-t.start[0])}if(j&&(t.margin||t.limit))throw new Error("noUiSlider ("+o+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:f||x,drag:a,fixed:g,snap:x,hover:b,unconstrained:j}}function jt(t,e){if(e!==!1)if(e===!0){t.tooltips=[];for(var f=0;f<t.handles;f++)t.tooltips.push(!0)}else{if(t.tooltips=Z(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+o+"): must pass a formatter for all handles.");t.tooltips.forEach(function(a){if(typeof a!="boolean"&&(typeof a!="object"||typeof a.to!="function"))throw new Error("noUiSlider ("+o+"): 'tooltips' must be passed a formatter or 'false'.")})}}function Ht(t,e){t.ariaFormat=e,Xe(e)}function Rt(t,e){t.format=e,Xe(e)}function Nt(t,e){if(t.keyboardSupport=e,typeof e!="boolean")throw new Error("noUiSlider ("+o+"): 'keyboardSupport' option must be a boolean.")}function zt(t,e){t.documentElement=e}function Ft(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider ("+o+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function It(t,e){if(typeof e!="object")throw new Error("noUiSlider ("+o+"): 'cssClasses' must be an object.");if(typeof t.cssPrefix=="string"){t.cssClasses={};for(var f in e)!e.hasOwnProperty(f)||(t.cssClasses[f]=t.cssPrefix+e[f])}else t.cssClasses=e}function $e(t){var e={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:F,format:F},f={step:{r:!1,t:yt},keyboardPageMultiplier:{r:!1,t:xt},keyboardDefaultStep:{r:!1,t:Et},start:{r:!0,t:Pt},connect:{r:!0,t:Dt},direction:{r:!0,t:Lt},snap:{r:!1,t:At},animate:{r:!1,t:Ot},animationDuration:{r:!1,t:_t},range:{r:!0,t:Ct},orientation:{r:!1,t:kt},margin:{r:!1,t:Ye},limit:{r:!1,t:Ut},padding:{r:!1,t:Vt},behaviour:{r:!0,t:Mt},ariaFormat:{r:!1,t:Ht},format:{r:!1,t:Rt},tooltips:{r:!1,t:jt},keyboardSupport:{r:!0,t:Nt},documentElement:{r:!1,t:zt},cssPrefix:{r:!0,t:Ft},cssClasses:{r:!0,t:It}},a={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:y,keyboardPageMultiplier:5,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(f).forEach(function(w){if(!K(t[w])&&a[w]===void 0){if(f[w].r)throw new Error("noUiSlider ("+o+"): '"+w+"' is required.");return!0}f[w].t(e,K(t[w])?t[w]:a[w])}),e.pips=t.pips;var g=document.createElement("div"),x=g.style.msTransform!==void 0,b=g.style.transform!==void 0;e.transformRule=b?"transform":x?"msTransform":"webkitTransform";var j=[["left","top"],["right","bottom"]];return e.style=j[e.dir][e.ort],e}function Tt(t,e,f){var a=fe(),g=Q(),x=g&&le(),b=t,j,w,J,q,me,C=e.spectrum,Se=[],I=[],re=[],Ue=0,ne={},Ee,be=t.ownerDocument,Ae=e.documentElement||be.documentElement,Oe=be.body,Bt=-1,_e=0,Ve=1,Le=2,Kt=be.dir==="rtl"||e.ort===1?0:100;function ae(r,i){var n=be.createElement("div");return i&&v(n,i),r.appendChild(n),n}function Wt(r,i){var n=ae(r,e.cssClasses.origin),s=ae(n,e.cssClasses.handle);return ae(s,e.cssClasses.touchArea),s.setAttribute("data-handle",i),e.keyboardSupport&&(s.setAttribute("tabindex","0"),s.addEventListener("keydown",function(u){return sr(u,i)})),s.setAttribute("role","slider"),s.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?v(s,e.cssClasses.handleLower):i===e.handles-1&&v(s,e.cssClasses.handleUpper),n}function Ge(r,i){return i?ae(r,e.cssClasses.connect):!1}function Jt(r,i){var n=ae(i,e.cssClasses.connects);w=[],J=[],J.push(Ge(n,r[0]));for(var s=0;s<e.handles;s++)w.push(Wt(i,s)),re[s]=s,J.push(Ge(n,r[s+1]))}function Xt(r){v(r,e.cssClasses.target),e.dir===0?v(r,e.cssClasses.ltr):v(r,e.cssClasses.rtl),e.ort===0?v(r,e.cssClasses.horizontal):v(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?v(r,e.cssClasses.textDirectionRtl):v(r,e.cssClasses.textDirectionLtr),ae(r,e.cssClasses.base)}function Yt(r,i){return e.tooltips[i]?ae(r.firstChild,e.cssClasses.tooltip):!1}function Ze(){return b.hasAttribute("disabled")}function Me(r){var i=w[r];return i.hasAttribute("disabled")}function je(){me&&(Ce("update"+M.tooltips),me.forEach(function(r){r&&A(r)}),me=null)}function Qe(){je(),me=w.map(Yt),Fe("update"+M.tooltips,function(r,i,n){if(!!me[i]){var s=r[i];e.tooltips[i]!==!0&&(s=e.tooltips[i].to(n[i])),me[i].innerHTML=s}})}function $t(){Ce("update"+M.aria),Fe("update"+M.aria,function(r,i,n,s,u){re.forEach(function(c){var l=w[c],U=De(I,c,0,!0,!0,!0),E=De(I,c,100,!0,!0,!0),_=u[c],D=e.ariaFormat.to(n[c]);U=C.fromStepping(U).toFixed(1),E=C.fromStepping(E).toFixed(1),_=C.fromStepping(_).toFixed(1),l.children[0].setAttribute("aria-valuemin",U),l.children[0].setAttribute("aria-valuemax",E),l.children[0].setAttribute("aria-valuenow",_),l.children[0].setAttribute("aria-valuetext",D)})})}function Gt(r,i,n){if(r==="range"||r==="steps")return C.xVal;if(r==="count"){if(i<2)throw new Error("noUiSlider ("+o+"): 'values' (>= 2) required for mode 'count'.");var s=i-1,u=100/s;for(i=[];s--;)i[s]=s*u;i.push(100),r="positions"}if(r==="positions")return i.map(function(c){return C.fromStepping(n?C.getStep(c):c)});if(r==="values")return n?i.map(function(c){return C.fromStepping(C.getStep(C.toStepping(c)))}):i}function Zt(r,i,n){function s(D,H){return(D+H).toFixed(7)/1}var u={},c=C.xVal[0],l=C.xVal[C.xVal.length-1],U=!1,E=!1,_=0;return n=ee(n.slice().sort(function(D,H){return D-H})),n[0]!==c&&(n.unshift(c),U=!0),n[n.length-1]!==l&&(n.push(l),E=!0),n.forEach(function(D,H){var N,V,de,ye=D,pe=n[H+1],X,qe,Be,Ke,ft,We,lt,ut=i==="steps";if(ut&&(N=C.xNumSteps[H]),N||(N=pe-ye),ye!==!1)for(pe===void 0&&(pe=ye),N=Math.max(N,1e-7),V=ye;V<=pe;V=s(V,N)){for(X=C.toStepping(V),qe=X-_,ft=qe/r,We=Math.round(ft),lt=qe/We,de=1;de<=We;de+=1)Be=_+de*lt,u[Be.toFixed(5)]=[C.fromStepping(Be),0];Ke=n.indexOf(V)>-1?Ve:ut?Le:_e,!H&&U&&V!==pe&&(Ke=0),V===pe&&E||(u[X.toFixed(5)]=[V,Ke]),_=X}}),u}function Qt(r,i,n){var s=be.createElement("div"),u=[];u[_e]=e.cssClasses.valueNormal,u[Ve]=e.cssClasses.valueLarge,u[Le]=e.cssClasses.valueSub;var c=[];c[_e]=e.cssClasses.markerNormal,c[Ve]=e.cssClasses.markerLarge,c[Le]=e.cssClasses.markerSub;var l=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],U=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];v(s,e.cssClasses.pips),v(s,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function E(D,H){var N=H===e.cssClasses.value,V=N?l:U,de=N?u:c;return H+" "+V[e.ort]+" "+de[D]}function _(D,H,N){if(N=i?i(H,N):N,N!==Bt){var V=ae(s,!1);V.className=E(N,e.cssClasses.marker),V.style[e.style]=D+"%",N>_e&&(V=ae(s,!1),V.className=E(N,e.cssClasses.value),V.setAttribute("data-value",H),V.style[e.style]=D+"%",V.innerHTML=n.to(H))}}return Object.keys(r).forEach(function(D){_(D,r[D][0],r[D][1])}),s}function He(){q&&(A(q),q=null)}function Re(r){He();var i=r.mode,n=r.density||1,s=r.filter||!1,u=r.values||!1,c=r.stepped||!1,l=Gt(i,u,c),U=Zt(n,i,l),E=r.format||{to:Math.round};return q=b.appendChild(Qt(U,s,E)),q}function et(){var r=j.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||j[i]:r.height||j[i]}function ge(r,i,n,s){var u=function(l){if(l=er(l,s.pageOffset,s.target||i),!l||Ze()&&!s.doNotReject||k(b,e.cssClasses.tap)&&!s.doNotReject||r===a.start&&l.buttons!==void 0&&l.buttons>1||s.hover&&l.buttons)return!1;x||l.preventDefault(),l.calcPoint=l.points[e.ort],n(l,s)},c=[];return r.split(" ").forEach(function(l){i.addEventListener(l,u,x?{passive:!0}:!1),c.push([l,u])}),c}function er(r,i,n){var s=r.type.indexOf("touch")===0,u=r.type.indexOf("mouse")===0,c=r.type.indexOf("pointer")===0,l,U;if(r.type.indexOf("MSPointer")===0&&(c=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(s){var E=function(H){return H.target===n||n.contains(H.target)||H.target.shadowRoot&&H.target.shadowRoot.contains(n)};if(r.type==="touchstart"){var _=Array.prototype.filter.call(r.touches,E);if(_.length>1)return!1;l=_[0].pageX,U=_[0].pageY}else{var D=Array.prototype.find.call(r.changedTouches,E);if(!D)return!1;l=D.pageX,U=D.pageY}}return i=i||O(be),(u||c)&&(l=r.clientX+i.x,U=r.clientY+i.y),r.pageOffset=i,r.points=[l,U],r.cursor=u||c,r}function tt(r){var i=r-ve(j,e.ort),n=i*100/et();return n=ie(n),e.dir?100-n:n}function tr(r){var i=100,n=!1;return w.forEach(function(s,u){if(!Me(u)){var c=I[u],l=Math.abs(c-r),U=l===100&&i===100,E=l<i,_=l<=i&&r>c;(E||_||U)&&(n=u,i=l)}}),n}function rr(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&Ne(r,i)}function ir(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return Ne(r,i);var n=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),s=n*100/i.baseSize;rt(n>0,s,i.locations,i.handleNumbers)}function Ne(r,i){i.handle&&(S(i.handle,e.cssClasses.active),Ue-=1),i.listeners.forEach(function(n){Ae.removeEventListener(n[0],n[1])}),Ue===0&&(S(b,e.cssClasses.drag),Te(),r.cursor&&(Oe.style.cursor="",Oe.removeEventListener("selectstart",L))),i.handleNumbers.forEach(function(n){z("change",n),z("set",n),z("end",n)})}function ze(r,i){if(i.handleNumbers.some(Me))return!1;var n;if(i.handleNumbers.length===1){var s=w[i.handleNumbers[0]];n=s.children[0],Ue+=1,v(n,e.cssClasses.active)}r.stopPropagation();var u=[],c=ge(a.move,Ae,ir,{target:r.target,handle:n,listeners:u,startCalcPoint:r.calcPoint,baseSize:et(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:I.slice()}),l=ge(a.end,Ae,Ne,{target:r.target,handle:n,listeners:u,doNotReject:!0,handleNumbers:i.handleNumbers}),U=ge("mouseout",Ae,rr,{target:r.target,handle:n,listeners:u,doNotReject:!0,handleNumbers:i.handleNumbers});u.push.apply(u,c.concat(l,U)),r.cursor&&(Oe.style.cursor=getComputedStyle(r.target).cursor,w.length>1&&v(b,e.cssClasses.drag),Oe.addEventListener("selectstart",L,!1)),i.handleNumbers.forEach(function(E){z("start",E)})}function nr(r){r.stopPropagation();var i=tt(r.calcPoint),n=tr(i);if(n===!1)return!1;e.events.snap||oe(b,e.cssClasses.tap,e.animationDuration),we(n,i,!0,!0),Te(),z("slide",n,!0),z("update",n,!0),z("change",n,!0),z("set",n,!0),e.events.snap&&ze(r,{handleNumbers:[n]})}function ar(r){var i=tt(r.calcPoint),n=C.getStep(i),s=C.fromStepping(n);Object.keys(ne).forEach(function(u){u.split(".")[0]==="hover"&&ne[u].forEach(function(c){c.call(Ee,s)})})}function sr(r,i){if(Ze()||Me(i))return!1;var n=["Left","Right"],s=["Down","Up"],u=["PageDown","PageUp"],c=["Home","End"];e.dir&&!e.ort?n.reverse():e.ort&&!e.dir&&(s.reverse(),u.reverse());var l=r.key.replace("Arrow",""),U=l===u[0],E=l===u[1],_=l===s[0]||l===n[0]||U,D=l===s[1]||l===n[1]||E,H=l===c[0],N=l===c[1];if(!_&&!D&&!H&&!N)return!0;r.preventDefault();var V;if(D||_){var de=e.keyboardPageMultiplier,ye=_?0:1,pe=ot(i),X=pe[ye];if(X===null)return!1;X===!1&&(X=C.getDefaultStep(I[i],_,e.keyboardDefaultStep)),(E||U)&&(X*=de),X=Math.max(X,1e-7),X=(_?-1:1)*X,V=Se[i]+X}else N?V=e.spectrum.xVal[e.spectrum.xVal.length-1]:V=e.spectrum.xVal[0];return we(i,C.toStepping(V),!0,!0),z("slide",i),z("update",i),z("change",i),z("set",i),!1}function or(r){r.fixed||w.forEach(function(i,n){ge(a.start,i.children[0],ze,{handleNumbers:[n]})}),r.tap&&ge(a.start,j,nr,{}),r.hover&&ge(a.move,j,ar,{hover:!0}),r.drag&&J.forEach(function(i,n){if(!(i===!1||n===0||n===J.length-1)){var s=w[n-1],u=w[n],c=[i];v(i,e.cssClasses.draggable),r.fixed&&(c.push(s.children[0]),c.push(u.children[0])),c.forEach(function(l){ge(a.start,l,ze,{handles:[s,u],handleNumbers:[n-1,n]})})}})}function Fe(r,i){ne[r]=ne[r]||[],ne[r].push(i),r.split(".")[0]==="update"&&w.forEach(function(n,s){z("update",s)})}function fr(r){return r===M.aria||r===M.tooltips}function Ce(r){var i=r&&r.split(".")[0],n=i?r.substring(i.length):r;Object.keys(ne).forEach(function(s){var u=s.split(".")[0],c=s.substring(u.length);(!i||i===u)&&(!n||n===c)&&(!fr(c)||n===c)&&delete ne[s]})}function z(r,i,n){Object.keys(ne).forEach(function(s){var u=s.split(".")[0];r===u&&ne[s].forEach(function(c){c.call(Ee,Se.map(e.format.to),i,Se.slice(),n||!1,I.slice(),Ee)})})}function De(r,i,n,s,u,c){var l;return w.length>1&&!e.events.unconstrained&&(s&&i>0&&(l=C.getAbsoluteDistance(r[i-1],e.margin,0),n=Math.max(n,l)),u&&i<w.length-1&&(l=C.getAbsoluteDistance(r[i+1],e.margin,1),n=Math.min(n,l))),w.length>1&&e.limit&&(s&&i>0&&(l=C.getAbsoluteDistance(r[i-1],e.limit,0),n=Math.min(n,l)),u&&i<w.length-1&&(l=C.getAbsoluteDistance(r[i+1],e.limit,1),n=Math.max(n,l))),e.padding&&(i===0&&(l=C.getAbsoluteDistance(0,e.padding[0],0),n=Math.max(n,l)),i===w.length-1&&(l=C.getAbsoluteDistance(100,e.padding[1],1),n=Math.min(n,l))),n=C.getStep(n),n=ie(n),n===r[i]&&!c?!1:n}function Ie(r,i){var n=e.ort;return(n?i:r)+", "+(n?r:i)}function rt(r,i,n,s){var u=n.slice(),c=[!r,r],l=[r,!r];s=s.slice(),r&&s.reverse(),s.length>1?s.forEach(function(E,_){var D=De(u,E,u[E]+i,c[_],l[_],!1);D===!1?i=0:(i=D-u[E],u[E]=D)}):c=l=[!0];var U=!1;s.forEach(function(E,_){U=we(E,n[E]+i,c[_],l[_])||U}),U&&s.forEach(function(E){z("update",E),z("slide",E)})}function it(r,i){return e.dir?100-r-i:r}function lr(r,i){I[r]=i,Se[r]=C.fromStepping(i);var n=10*(it(i,0)-Kt),s="translate("+Ie(n+"%","0")+")";w[r].style[e.transformRule]=s,nt(r),nt(r+1)}function Te(){re.forEach(function(r){var i=I[r]>50?-1:1,n=3+(w.length+i*r);w[r].style.zIndex=n})}function we(r,i,n,s,u){return u||(i=De(I,r,i,n,s,!1)),i===!1?!1:(lr(r,i),!0)}function nt(r){if(!!J[r]){var i=0,n=100;r!==0&&(i=I[r-1]),r!==J.length-1&&(n=I[r]);var s=n-i,u="translate("+Ie(it(i,s)+"%","0")+")",c="scale("+Ie(s/100,"1")+")";J[r].style[e.transformRule]=u+" "+c}}function at(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r=C.toStepping(r),r===!1||isNaN(r))?I[i]:r}function ke(r,i,n){var s=Z(r),u=I[0]===void 0;i=i===void 0?!0:!!i,e.animate&&!u&&oe(b,e.cssClasses.tap,e.animationDuration),re.forEach(function(l){we(l,at(s[l],l),!0,!1,n)});for(var c=re.length===1?0:1;c<re.length;++c)re.forEach(function(l){we(l,I[l],!0,!0,n)});Te(),re.forEach(function(l){z("update",l),s[l]!==null&&i&&z("set",l)})}function ur(r){ke(e.start,r)}function cr(r,i,n,s){if(r=Number(r),!(r>=0&&r<re.length))throw new Error("noUiSlider ("+o+"): invalid handle number, got: "+r);we(r,at(i,r),!0,!0,s),z("update",r),n&&z("set",r)}function st(){var r=Se.map(e.format.to);return r.length===1?r[0]:r}function dr(){Ce(M.aria),Ce(M.tooltips);for(var r in e.cssClasses)!e.cssClasses.hasOwnProperty(r)||S(b,e.cssClasses[r]);for(;b.firstChild;)b.removeChild(b.firstChild);delete b.noUiSlider}function ot(r){var i=I[r],n=C.getNearbySteps(i),s=Se[r],u=n.thisStep.step,c=null;if(e.snap)return[s-n.stepBefore.startValue||null,n.stepAfter.startValue-s||null];u!==!1&&s+u>n.stepAfter.startValue&&(u=n.stepAfter.startValue-s),s>n.thisStep.startValue?c=n.thisStep.step:n.stepBefore.step===!1?c=!1:c=s-n.stepBefore.highestStep,i===100?u=null:i===0&&(c=null);var l=C.countStepDecimals();return u!==null&&u!==!1&&(u=Number(u.toFixed(l))),c!==null&&c!==!1&&(c=Number(c.toFixed(l))),[c,u]}function pr(){return re.map(ot)}function vr(r,i){var n=st(),s=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];s.forEach(function(c){r[c]!==void 0&&(f[c]=r[c])});var u=$e(f);s.forEach(function(c){r[c]!==void 0&&(e[c]=u[c])}),C=u.spectrum,e.margin=u.margin,e.limit=u.limit,e.padding=u.padding,e.pips?Re(e.pips):He(),e.tooltips?Qe():je(),I=[],ke(K(r.start)?r.start:n,i)}function hr(){j=Xt(b),Jt(e.connect,j),or(e.events),ke(e.start),e.pips&&Re(e.pips),e.tooltips&&Qe(),$t()}return hr(),Ee={destroy:dr,steps:pr,on:Fe,off:Ce,get:st,set:ke,setHandle:cr,reset:ur,__moveHandles:function(r,i,n){rt(r,i,I,n)},options:f,updateOptions:vr,target:b,removePips:He,removeTooltips:je,getTooltips:function(){return me},getOrigins:function(){return w},pips:Re},Ee}function qt(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+o+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+o+"): Slider was already initialized.");var f=$e(e),a=Tt(t,f,e);return t.noUiSlider=a,a}return{__spectrum:B,version:o,cssClasses:y,create:qt}})})(gt);const gr=gt.exports;function ct(p,d){var o=Object.keys(p);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(p);d&&(P=P.filter(function(A){return Object.getOwnPropertyDescriptor(p,A).enumerable})),o.push.apply(o,P)}return o}function Sr(p){for(var d=1;d<arguments.length;d++){var o=arguments[d]!=null?arguments[d]:{};d%2?ct(Object(o),!0).forEach(function(P){br(p,P,o[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(o)):ct(Object(o)).forEach(function(P){Object.defineProperty(p,P,Object.getOwnPropertyDescriptor(o,P))})}return p}function Pe(p){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pe=function(d){return typeof d}:Pe=function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Pe(p)}function br(p,d,o){return d in p?Object.defineProperty(p,d,{value:o,enumerable:!0,configurable:!0,writable:!0}):p[d]=o,p}function St(p,d){return yr(p)||Er(p,d)||bt(p,d)||Pr()}function dt(p){return wr(p)||xr(p)||bt(p)||Cr()}function wr(p){if(Array.isArray(p))return Je(p)}function yr(p){if(Array.isArray(p))return p}function xr(p){if(typeof Symbol<"u"&&p[Symbol.iterator]!=null||p["@@iterator"]!=null)return Array.from(p)}function Er(p,d){var o=p==null?null:typeof Symbol<"u"&&p[Symbol.iterator]||p["@@iterator"];if(o!=null){var P=[],A=!0,K=!1,L,ee;try{for(o=o.call(p);!(A=(L=o.next()).done)&&(P.push(L.value),!(d&&P.length===d));A=!0);}catch(se){K=!0,ee=se}finally{try{!A&&o.return!=null&&o.return()}finally{if(K)throw ee}}return P}}function bt(p,d){if(!!p){if(typeof p=="string")return Je(p,d);var o=Object.prototype.toString.call(p).slice(8,-1);if(o==="Object"&&p.constructor&&(o=p.constructor.name),o==="Map"||o==="Set")return Array.from(p);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Je(p,d)}}function Je(p,d){(d==null||d>p.length)&&(d=p.length);for(var o=0,P=new Array(d);o<d;o++)P[o]=p[o];return P}function Cr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pt=function(d){return Object.entries(d).sort().reduce(function(o,P){var A=St(P,2),K=A[0],L=A[1];return o[K]=L,o},{})},vt=function(d,o){return typeof d=="number"&&typeof o=="number"||typeof d=="string"&&typeof o=="string"?d===o:Array.isArray(d)&&Array.isArray(o)?JSON.stringify(d)===JSON.stringify(o):Pe(d)==="object"&&Pe(o)==="object"?JSON.stringify(pt(d))===JSON.stringify(pt(o)):!1},Ar=function(d,o){var P=d.start,A=d.step,K=d.disabled,L=d.range;return o.step===A&&vt(o.start,P)&&o.disabled===K&&vt(o.range,L)},wt=function(d){var o=xe.exports.useState(null),P=St(o,2),A=P[0],K=P[1],L=ht.createRef();xe.exports.useEffect(function(){var F=d.instanceRef,y=F&&Object.prototype.hasOwnProperty.call(F,"current");return F&&F instanceof Function&&F(L.current),y&&(F.current=L.current),function(){y&&(F.current=null)}},[L]);var ee=function(y){var M=Number(y.target.getAttribute("data-value"));A&&A.set(M)},se=function(y){var M=L.current;M&&(y?M.setAttribute("disabled",!0):M.removeAttribute("disabled"))},ve=d.onUpdate,T=d.onChange,oe=d.onSlide,ie=d.onStart,Z=d.onEnd,h=d.onSet,v=function(y){ie&&(y.off("start"),y.on("start",ie)),oe&&(y.off("slide"),y.on("slide",oe)),ve&&(y.off("update"),y.on("update",ve)),T&&(y.off("change"),y.on("change",T)),h&&(y.off("set"),y.on("set",h)),Z&&(y.off("end"),y.on("end",Z))},S=function(y){var M=L.current;M.noUiSlider.updateOptions(y)},k=function(){if(d.clickablePips){var y=L.current;dt(y.querySelectorAll(".noUi-value")).forEach(function(M){M.style.cursor="pointer",M.addEventListener("click",ee)})}},O=function(){var y=gr.create(L.current,Sr({},d));v(y),K(y)};xe.exports.useEffect(function(){var F=d.disabled,y=L.current;return y&&(se(F),O()),function(){A&&A.destroy(),y&&dt(y.querySelectorAll(".noUi-value")).forEach(function(M){M.removeEventListener("click",ee)})}},[]),xe.exports.useEffect(function(){A&&k()},[A]);var fe=d.start,le=d.disabled,Q=d.range,Y=d.step,te=d.margin,ue=d.padding,m=d.limit,W=d.pips,R=d.snap,ce=d.animate;xe.exports.useEffect(function(){A&&(S({range:Q,step:Y,padding:ue,margin:te,limit:m,pips:W,snap:R,animate:ce}),A.set(fe),k()),se(le)},[fe,le,Q,Y,te,ue,m,W,R,ce]),xe.exports.useEffect(function(){A&&v(A)},[ve,T,oe,ie,Z,h]);var G=d.id,he=d.className,$=d.style,B={};return G&&(B.id=G),he&&(B.className=he),mr("div",{...B,ref:L,style:$})};wt.defaultProps={animate:!0,behaviour:"tap",className:null,clickablePips:!1,connect:!1,direction:"ltr",disabled:!1,format:null,margin:null,limit:null,keyboardSupport:!0,id:null,instanceRef:null,padding:0,pips:null,snap:!1,step:null,style:null,orientation:"horizontal",tooltips:!1,onChange:function(){},onEnd:function(){},onSet:function(){},onSlide:function(){},onStart:function(){},onUpdate:function(){}};var Dr=ht.memo(wt,Ar);export{Dr as i,_r as w};
