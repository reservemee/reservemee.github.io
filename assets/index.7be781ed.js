import{r,n,j as e,a6 as c,aP as o,aR as m,a2 as d,aQ as p,a0 as u,a1 as i}from"./index.6fe50bb5.js";import{F as l}from"./index.64231542.js";import{B as h}from"./index.95590a07.js";/* empty css                  */const k=()=>{const[a,t]=r.exports.useState(new Date);return n(r.exports.Fragment,{children:[e(c,{className:"form-label",id:"timepicker",children:"Basic 24hrs"}),e(l,{className:"form-control",value:a,id:"timepicker",options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",time_24hr:!0},onChange:s=>t(s)})]})},f=()=>{const[a,t]=r.exports.useState(new Date);return n(r.exports.Fragment,{children:[e(c,{className:"form-label",for:"range-picker",children:"Range"}),e(l,{value:a,id:"range-picker",className:"form-control",onChange:s=>t(s),options:{mode:"range",defaultDate:["2020-02-01","2020-02-15"]}})]})},b=()=>{const[a,t]=r.exports.useState(new Date);return n(r.exports.Fragment,{children:[e(c,{className:"form-label",for:"inline-picker",children:"Inline"}),e(l,{className:"form-control",value:a,options:{inline:!0},onChange:s=>t(s)})]})},g=()=>{const[a,t]=r.exports.useState(new Date);return n(r.exports.Fragment,{children:[e(c,{className:"form-label",for:"default-picker",children:"Default"}),e(l,{className:"form-control",value:a,onChange:s=>t(s),id:"default-picker"})]})},N=()=>{const[a,t]=r.exports.useState(new Date);return n(r.exports.Fragment,{children:[e(c,{className:"form-label",for:"date-time-picker",children:"Date & Time"}),e(l,{value:a,"data-enable-time":!0,id:"date-time-picker",className:"form-control",onChange:s=>t(s)})]})},D=()=>{const[a,t]=r.exports.useState(new Date);return n(r.exports.Fragment,{children:[e(c,{className:"form-label",for:"multi-dates-picker",children:"Multiple Dates"}),e(l,{value:a,id:"multi-dates-picker",className:"form-control",options:{mode:"multiple"},onChange:s=>t(s)})]})},x=()=>{const[a,t]=r.exports.useState(new Date);return n(r.exports.Fragment,{children:[e(c,{className:"form-label",for:"hf-picker",children:"Human Friendly"}),e(l,{value:a,id:"hf-picker",className:"form-control",onChange:s=>t(s),options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}})]})},F=()=>{const[a,t]=r.exports.useState(new Date);return n(r.exports.Fragment,{children:[e(c,{className:"form-label",for:"disabled-picker",children:"Disabled Range"}),e(l,{value:a,id:"disabled-picker",className:"form-control",onChange:s=>t(s),options:{dateFormat:"Y-m-d",disable:[{from:new Date,to:new Date(new Date().getTime()+120*60*60*1e3)}]}})]})},S=()=>n(r.exports.Fragment,{children:[e(h,{title:"Date & Time Picker",data:[{title:"Form Elements"},{title:"Date & Time Picker"}]}),n(o,{children:[e(m,{children:e(d,{tag:"h4",children:"Flatpickr"})}),e(p,{children:n(u,{children:[e(i,{md:"6",sm:"12",className:"mb-1",children:e(g,{})}),e(i,{md:"6",sm:"12",className:"mb-1",children:e(k,{})}),e(i,{md:"6",sm:"12",className:"mb-1",children:e(N,{})}),e(i,{md:"6",sm:"12",className:"mb-1",children:e(D,{})}),e(i,{md:"6",sm:"12",className:"mb-1",children:e(f,{})}),e(i,{md:"6",sm:"12",className:"mb-1",children:e(x,{})}),e(i,{md:"6",sm:"12",className:"mb-1",children:e(F,{})}),e(i,{md:"6",sm:"12",className:"mb-1",children:e(b,{})})]})})]})]});export{S as default};
