import{j as e,aP as d,n as a,aS as h,r as g,cu as p,a0 as n,a1 as s}from"./index.3706b7ab.js";import{A as u,C as o}from"./App.15c12863.js";import{T as v}from"./trending-up.fc8ac5a8.js";import{T as f,W as c}from"./watch.e739df9b.js";import{M as m}from"./monitor.63ff9234.js";import{E as w,R as x,G as y}from"./RevenueReport.98f2aaf1.js";import{C as N,a as b,b as C,c as U}from"./CardBrowserState.24768509.js";import{S as k,O as R,P as T}from"./ProfitLineChart.e43741b6.js";/* empty css                    *//* empty css                            */import"./react-apexcharts.min.14b97724.js";import"./help-circle.ac1f36c6.js";import"./index.5557005a.js";import"./avatar-s-20.3ee3e4a2.js";import"./calendar.04311c29.js";import"./map-pin.5c745919.js";import"./more-vertical.4dbe3945.js";import"./pocket.2723bdfc.js";import"./dollar-sign.8c5894b3.js";import"./credit-card.d4be9c94.js";import"./google-chrome.1f2c3076.js";import"./box.9ed5e450.js";const z=""+new URL("star.772b7100.svg",import.meta.url).href,I=""+new URL("book.217c1e4f.svg",import.meta.url).href,L=""+new URL("brush.30a3a75d.svg",import.meta.url).href,j=""+new URL("rocket.5331e32d.svg",import.meta.url).href,D=""+new URL("toolbox.f04159d1.svg",import.meta.url).href,G=""+new URL("speaker.af172ff8.svg",import.meta.url).href,M=""+new URL("parachute.8d05906c.svg",import.meta.url).href,S=()=>{const i=[{img:D,name:"Dixons",email:"meguc@ruj.io",icon:e(m,{size:18}),category:"Technology",views:"23.4k",time:"24 hours",revenue:"891.2",sales:"68"},{img:M,name:"Motels",email:"vecav@hodzi.co.uk",icon:e(o,{size:18}),category:"Grocery",views:"78k",time:"2 days",revenue:"668.51",sales:"97",salesUp:!0},{img:L,name:"Zipcar",email:"davcilse@is.gov",icon:e(c,{size:18}),category:"Fashion",views:"162",time:"5 days",revenue:"522.29",sales:"62",salesUp:!0},{img:z,name:"Owning",email:"us@cuhil.gov",icon:e(m,{size:18}),category:"Technology",views:"214",time:"24 hour",revenue:"291.01",sales:"88",salesUp:!0},{img:I,name:"Caf\xE9s",email:"pudais@jife.com",icon:e(o,{size:18}),category:"Grocery",views:"208",time:"1 week",revenue:"783.93",sales:"16"},{img:j,name:"Kmart",email:"bipri@cawiw.com",icon:e(c,{size:18}),category:"Fashion",views:"990",time:"1 month",revenue:"780.05",sales:"78",salesUp:!0},{img:G,name:"Payers",email:"luk@izug.io",icon:e(c,{size:18}),category:"Fashion",views:"12.9k",time:"12 hours",revenue:"531.49",sales:"42",salesUp:!0}],t={Technology:"light-primary",Grocery:"light-success",Fashion:"light-warning"};return e(d,{className:"card-company-table",children:a(h,{responsive:!0,children:[e("thead",{children:a("tr",{children:[e("th",{children:"Company"}),e("th",{children:"Category"}),e("th",{children:"Views"}),e("th",{children:"Revenue"}),e("th",{children:"Sales"})]})}),e("tbody",{children:(()=>i.map(r=>{const l=r.salesUp?e(v,{size:15,className:"text-success"}):e(f,{size:15,className:"text-danger"});return a("tr",{children:[e("td",{children:a("div",{className:"d-flex align-items-center",children:[e("div",{className:"avatar rounded",children:e("div",{className:"avatar-content",children:e("img",{src:r.img,alt:r.name})})}),a("div",{children:[e("div",{className:"fw-bolder",children:r.name}),e("div",{className:"font-small-2 text-muted",children:r.email})]})]})}),e("td",{children:a("div",{className:"d-flex align-items-center",children:[e(u,{className:"me-1",color:t[r.category],icon:r.icon}),e("span",{children:r.category})]})}),e("td",{className:"text-nowrap",children:a("div",{className:"d-flex flex-column",children:[e("span",{className:"fw-bolder mb-25",children:r.views}),a("span",{className:"font-small-2 text-muted",children:["in ",r.time]})]})}),a("td",{children:["$",r.revenue]}),e("td",{children:a("div",{className:"d-flex align-items-center",children:[a("span",{className:"fw-bolder me-1",children:[r.sales,"%"]}),l]})})]},r.name)}))()})]})})},ne=()=>{const{colors:i}=g.exports.useContext(p),t="#e9ecef";return a("div",{id:"dashboard-ecommerce",children:[a(n,{className:"match-height",children:[e(s,{xl:"4",md:"6",xs:"12",children:e(N,{})}),e(s,{xl:"8",md:"6",xs:"12",children:e(k,{cols:{xl:"3",sm:"6"}})})]}),a(n,{className:"match-height",children:[e(s,{lg:"4",md:"12",children:a(n,{className:"match-height",children:[e(s,{lg:"6",md:"3",xs:"6",children:e(R,{warning:i.warning.main})}),e(s,{lg:"6",md:"3",xs:"6",children:e(T,{info:i.info.main})}),e(s,{lg:"12",md:"6",xs:"12",children:e(w,{success:i.success.main})})]})}),e(s,{lg:"8",md:"12",children:e(x,{primary:i.primary.main,warning:i.warning.main})})]}),a(n,{className:"match-height",children:[e(s,{lg:"8",xs:"12",children:e(S,{})}),e(s,{lg:"4",md:"6",xs:"12",children:e(b,{})}),e(s,{lg:"4",md:"6",xs:"12",children:e(C,{colors:i,trackBgColor:t})}),e(s,{lg:"4",md:"6",xs:"12",children:e(y,{success:i.success.main})}),e(s,{lg:"4",md:"6",xs:"12",children:e(U,{})})]})]})};export{ne as default};