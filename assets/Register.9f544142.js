import{r as C,J as L,y as S,j as e,n as r,a0 as j,L as g,$ as T,a1 as u,a2 as F,a3 as I,a5 as D,a6 as o,a7 as h,a8 as f,A as n,a9 as R,aa as z}from"./index.6fe50bb5.js";import{u as A,a as M}from"./App.cb24265c.js";import{u as $,C as c}from"./index.esm.54e465e8.js";import{I as P}from"./index.e0d3bda6.js";/* empty css                            */import{I as U}from"./instagram.5b4d6506.js";import{T as E}from"./twitter.a09fa4f7.js";import{Y}from"./youtube.eabd843a.js";import{M as B}from"./mail.7ba576df.js";import"./eye.49f78dde.js";import"./eye-off.f9bf3fae.js";const J=""+new URL("register-v2.9a7a0c35.gif",import.meta.url).href,O=""+new URL("register-v2-dark.ac89f3d6.gif",import.meta.url).href,V={email:"",terms:!1,username:"",password:""},te=()=>{const b=C.exports.useContext(L),{skin:v}=A(),N=S(),y=M(),{control:m,setError:d,handleSubmit:x,formState:{errors:t}}=$({defaultValues:V});return e("div",{className:"auth-wrapper auth-cover",children:r(j,{className:"auth-inner m-0",children:[r(g,{className:"brand-logo",to:"/",onClick:a=>a.preventDefault(),children:[e("img",{src:T,width:"30",height:"30"}),e("h2",{className:"text-primary  ms-1",children:"Reserve Me"})]}),e(u,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:e("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:e("img",{className:"img-fluid",src:v==="dark"?O:J,alt:"Login Cover"})})}),e(u,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:r(u,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[e(F,{tag:"h2",className:"fw-bold mb-1",children:"Adventure starts here \u{1F680}"}),e(I,{className:"mb-2",children:"Make your app management easy and fun!"}),r(D,{action:"/",className:"auth-register-form mt-2",onSubmit:x(a=>{const p={...a};if(delete p.terms,Object.values(p).every(l=>l.length>0)&&a.terms===!0){const{username:l,email:k,password:w}=a;R.register({username:l,email:k,password:w}).then(s=>{if(s.data.error)for(const i in s.data.error)s.data.error[i]!==null&&d(i,{type:"manual",message:s.data.error[i]});else{const i={...s.data.user,accessToken:s.data.accessToken};b.update(s.data.user.ability),y(z(i)),N("/")}}).catch(s=>console.log(s))}else for(const l in a)a[l].length===0&&d(l,{type:"manual",message:`Please enter a valid ${l}`}),l==="terms"&&a.terms===!1&&d("terms",{type:"manual"})}),children:[r("div",{className:"mb-1",children:[e(o,{className:"form-label",for:"register-username",children:"Username"}),e(c,{id:"username",name:"username",control:m,render:({field:a})=>e(h,{autoFocus:!0,placeholder:"bader",invalid:t.username&&!0,...a})}),t.username?e(f,{children:t.username.message}):null]}),r("div",{className:"mb-1",children:[e(o,{className:"form-label",for:"register-email",children:"Email"}),e(c,{id:"email",name:"email",control:m,render:({field:a})=>e(h,{type:"email",placeholder:"bader@example.com",invalid:t.email&&!0,...a})}),t.email?e(f,{children:t.email.message}):null]}),r("div",{className:"mb-1",children:[e(o,{className:"form-label",for:"register-password",children:"Password"}),e(c,{id:"password",name:"password",control:m,render:({field:a})=>e(P,{className:"input-group-merge",invalid:t.password&&!0,...a})})]}),r("div",{className:"form-check mb-1",children:[e(c,{name:"terms",control:m,render:({field:a})=>e(h,{...a,id:"terms",type:"checkbox",checked:a.value,invalid:t.terms&&!0})}),r(o,{className:"form-check-label",for:"terms",children:["I agree to",e("a",{className:"ms-25",href:"/",onClick:a=>a.preventDefault(),children:"privacy policy & terms"})]})]}),e(n,{type:"submit",block:!0,color:"primary",children:"Sign up"})]}),r("p",{className:"text-center mt-2",children:[e("span",{className:"me-25",children:"Already have an account?"}),e(g,{to:"/login",children:e("span",{children:"Sign in instead"})})]}),e("div",{className:"divider my-2",children:e("div",{className:"divider-text",children:"or"})}),r("div",{className:"auth-footer-btn d-flex justify-content-center",children:[e(n,{color:"instagram",children:e(U,{size:14})}),e(n,{color:"twitter",children:e(E,{size:14})}),e(n,{color:"google",children:e(Y,{size:14})}),e(n,{className:"me-0",color:"tumblr",children:e(B,{size:14})})]})]})})]})})};export{te as default};
