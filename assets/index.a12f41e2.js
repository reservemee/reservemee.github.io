import{n,aP as c,j as t,aR as u,a2 as m,aQ as d,a3 as S,A as e,cy as T,a0 as k,a1 as a,r as A}from"./index.6fe50bb5.js";import{E as x}from"./index.2695b145.js";import{w as h,S as o}from"./ext-component-sweet-alerts.2973fbbb.js";import{a as I,T as v}from"./thumbs-up.ccd801bd.js";import"./App.cb24265c.js";const p=h(o),_=()=>n(c,{children:[t(u,{children:t(m,{tag:"h4",children:"Types"})}),n(d,{children:[t(S,{className:"mb-0",children:'SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info".'}),n("div",{className:"demo-inline-spacing",children:[t(e,{color:"success",onClick:()=>p.fire({title:"Good job!",text:"You clicked the button!",icon:"success",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Success"}),t(e,{color:"danger",onClick:()=>p.fire({title:"Error!",text:" You clicked the button!",icon:"error",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Error"}),t(e,{color:"warning",onClick:()=>p.fire({title:"Warning!",text:" You clicked the button!",icon:"warning",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Warning"}),t(e,{color:"info",onClick:()=>p.fire({title:"Info!",text:"You clicked the button!",icon:"info",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Info"}),t(e,{onClick:()=>p.fire({title:"Question?",text:" You clicked the button!",icon:"question",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Question"})]})]})]}),w=h(o),Y=()=>n(c,{children:[t(u,{children:t(m,{tag:"h4",children:"Basic"})}),n(d,{children:[t(S,{className:"mb-0",children:"SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below!"}),n("div",{className:"demo-inline-spacing",children:[t(e,{color:"primary",onClick:()=>w.fire({title:"Any fool can use a computer",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Basic"}),t(e,{color:"primary",onClick:()=>w.fire({title:"The Internet?,",text:"That thing is still around?",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"With Title"}),t(e,{color:"primary",onClick:()=>w.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="#">Why do I have this issue?</a>',customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"With Footer"}),t(e,{color:"primary",onClick:()=>w.fire({title:"<strong>HTML <u>example</u></strong>",icon:"info",html:'You can use <b>bold text</b>, <a href="#" target="_blank">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:n("span",{className:"align-middle",children:[t(I,{className:"me-50",size:15}),t("span",{className:"align-middle",children:"Great!"})]}),cancelButtonText:t(v,{size:15}),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}),outline:!0,children:"HTML"})]})]})]}),C=h(o),N=()=>n(c,{children:[t(u,{children:t(m,{tag:"h4",children:"Options"})}),t(d,{children:n("div",{className:"demo-inline-spacing",children:[t(e,{color:"primary",onClick:()=>C.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:T,imageWidth:300,imageHeight:200,imageAlt:"Custom image",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Image"}),t(e,{color:"primary",onClick:()=>{let i;o.fire({title:"Auto close alert!",html:"I will close in <b></b> seconds.",timerProgressBar:!0,timer:2e3,didOpen(){o.showLoading();const l=o.getHtmlContainer().querySelector("b");i=setInterval(()=>{l.textContent=o.getTimerLeft()},100)},willClose(){clearInterval(i)}}).then(function(l){l.dismiss===o.DismissReason.timer&&console.log("I was closed by the timer")})},outline:!0,children:"Timeout"}),t(e,{color:"primary",onClick:()=>C.fire({backdrop:!0,title:"Click outside to close!",text:"This is a cool message!",allowOutsideClick:!0,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Click Outside"}),t(e,{color:"primary",onClick:()=>{C.fire({title:"Search for a user",input:"text",customClass:{input:"mx-3",confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1,inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm(i){return fetch(`//api.github.com/users/${i}`).then(function(l){if(!l.ok)throw new Error(l.statusText);return l.json()}).catch(function(l){C.showValidationMessage(`Request failed:  ${l}`)})}}).then(function(i){i.value&&C.fire({title:`${i.value.login}'s avatar`,imageUrl:i.value.avatar_url,customClass:{confirmButton:"btn btn-primary"}})})},outline:!0,children:"Ajax"})]})})]}),s=h(o),E=()=>n(c,{children:[t(u,{children:t(m,{tag:"h4",children:"Callback"})}),t(d,{children:n(k,{children:[n(a,{className:"mb-2 mb-md-0",md:"6",sm:"12",children:[t("h5",{className:"mb-1",children:"Confirm Button Text"}),t(e,{color:"primary",onClick:()=>s.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(r){r.value&&s.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}})}),outline:!0,children:"Confirm Text"})]}),n(a,{md:"6",sm:"12",children:[t("h5",{className:"mb-1",children:"Confirm Button Color"}),t(e,{color:"primary",onClick:()=>s.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}).then(function(r){r.value?s.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}}):r.dismiss===s.DismissReason.cancel&&s.fire({title:"Cancelled",text:"Your imaginary file is safe :)",icon:"error",customClass:{confirmButton:"btn btn-success"}})}),outline:!0,children:"Confirm & cancel"})]})]})})]}),B=h(o),M=()=>n(c,{children:[t(u,{children:t(m,{tag:"h4",children:"Position"})}),n(d,{children:[n(S,{className:"mb-0",children:["You can specify position of your alert with"," ",t("code",{children:"position : top-start | top-end | bottom-start | bottom-end "})," "]}),n("div",{className:"demo-inline-spacing",children:[t(e,{color:"primary",onClick:()=>B.fire({position:"top-start",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),outline:!0,children:"Top Start"}),t(e,{color:"primary",onClick:()=>B.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),outline:!0,children:"Top End"}),t(e,{color:"primary",onClick:()=>B.fire({position:"bottom-start",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),outline:!0,children:"Bottom Start"}),t(e,{color:"primary",onClick:()=>B.fire({position:"bottom-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),outline:!0,children:"Bottom End"})]})]})]}),y=h(o),F=()=>n(c,{children:[t(u,{children:t(m,{tag:"h4",children:"Animations"})}),n(d,{children:[n(S,{className:"mb-0",children:["Use ",t("code",{children:"popup"})," inside ",t("code",{children:"showClass"})," parameter to add animation to your alert."]}),n("div",{className:"demo-inline-spacing",children:[t(e,{color:"primary",onClick:()=>y.fire({title:"Bounce In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__bounceIn"},buttonsStyling:!1}),outline:!0,children:"Bounce In"}),t(e,{color:"primary",onClick:()=>y.fire({title:"Fade In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__fadeIn"},buttonsStyling:!1}),outline:!0,children:"Fade In"}),t(e,{color:"primary",onClick:()=>y.fire({title:"Flip In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__flipInX"},buttonsStyling:!1}),outline:!0,children:"Flip In"}),t(e,{color:"primary",onClick:()=>y.fire({title:"Tada Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__tada"},buttonsStyling:!1}),outline:!0,children:"Tada"}),t(e,{color:"primary",onClick:()=>y.fire({title:"Shake Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__shakeX"},buttonsStyling:!1}),outline:!0,children:"Shake"})]})]})]}),$=()=>n(A.exports.Fragment,{children:[t(x,{title:"Sweet Alerts2",subTitle:"A React implementation of SweetAlert2",link:"https://github.com/sweetalert2/sweetalert2-react-content"}),n(k,{children:[t(a,{sm:"12",children:t(Y,{})}),t(a,{sm:"12",children:t(M,{})}),t(a,{sm:"12",children:t(F,{})}),t(a,{sm:"12",children:t(_,{})}),t(a,{sm:"12",children:t(N,{})}),t(a,{sm:"12",children:t(E,{})})]})]});export{$ as default};
