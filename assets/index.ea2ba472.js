import{n as r,aP as h,aR as f,j as e,a2 as g,a3 as v,aQ as u,r as l,bp as w,U as C,D as z,v as S,w as k,i as b,cu as A,a0 as d,a1 as i}from"./index.6fe50bb5.js";import{B as j}from"./index.95590a07.js";import{S as R,A as F,a as M}from"./SupportTracker.afb1a4cb.js";import{_ as y}from"./react-apexcharts.min.7a154b47.js";import{l as D,q as x,o as _}from"./App.cb24265c.js";import{R as B,G as I,E as L}from"./RevenueReport.8cee3e8a.js";import{I as T}from"./index.3cb86da8.js";import{A as P}from"./arrow-down.976be679.js";/* empty css                    */import"./more-vertical.32103cda.js";import"./help-circle.4bfacc23.js";import"./truck.c0636886.js";import"./square.30a367b3.js";import"./rss.5bbc3927.js";import"./archive.0274e76e.js";import"./save.c3608473.js";import"./arrow-left.5c22faea.js";import"./arrow-right.9ed1d42e.js";import"./award.a47f7ee2.js";import"./gift.99a9131b.js";import"./wifi.cb90202d.js";import"./book.6cab846a.js";import"./bookmark.5469538e.js";import"./box.9e46a010.js";import"./briefcase.bbe9eddf.js";import"./calendar.5243851c.js";import"./inbox.5e03950f.js";import"./check-circle.3e5e100f.js";import"./video.bd398d5b.js";import"./chevron-down.37024f47.js";import"./chevron-left.f5ba6e0f.js";import"./chevron-right.c5170c44.js";import"./globe.5c95ae82.js";import"./clipboard.7c5375b6.js";import"./clock.08cd3582.js";import"./sun.2e137f18.js";import"./code.3c126f3c.js";import"./copy.11172a28.js";import"./maximize-2.4405a54d.js";import"./credit-card.e6f142a2.js";import"./database.bf359c7d.js";import"./dollar-sign.ae230f05.js";import"./download-cloud.845aa5ca.js";import"./download.154bbd45.js";import"./edit-2.7011fc7e.js";import"./edit.fe14798b.js";import"./external-link.22639879.js";import"./eye-off.f9bf3fae.js";import"./eye.49f78dde.js";import"./facebook.96e14983.js";import"./file.f6ccadc0.js";import"./github.facf1e81.js";import"./grid.2e38ff79.js";import"./hash.6b82d28a.js";import"./image.18305c9b.js";import"./info.519efce9.js";import"./instagram.5b4d6506.js";import"./link.9bf14d9d.js";import"./linkedin.fb47b4f2.js";import"./list.5f684113.js";import"./lock.80c7f84c.js";import"./mail.7ba576df.js";import"./map-pin.8f2480f3.js";import"./message-square.8972f5ee.js";import"./minus.6b747311.js";import"./monitor.9b7ae26e.js";import"./package.60475d97.js";import"./paperclip.e9c797b4.js";import"./pen-tool.856eaa54.js";import"./phone-call.10d4f72c.js";import"./play.94937c9d.js";import"./plus-circle.92799cdd.js";import"./plus.fb3ecba7.js";import"./pocket.88639a90.js";import"./printer.76806e48.js";import"./rotate-cw.ad341bc1.js";import"./search.2a5f6fd3.js";import"./shopping-bag.9f9faa40.js";import"./share-2.4c2cf992.js";import"./share.badf138f.js";import"./shield.359fe44c.js";import"./shopping-cart.a65e7766.js";import"./slack.16a0d944.js";import"./smartphone.12bed868.js";import"./star.773b3286.js";import"./tablet.16b38db6.js";import"./tag.c0952bac.js";import"./thumbs-up.ccd801bd.js";import"./trash-2.f0c68bed.js";import"./trash.913a82c1.js";import"./watch.ad266b9c.js";import"./trending-up.815e0c1e.js";import"./twitter.a09fa4f7.js";import"./user-check.aa2a781c.js";import"./user-plus.5c58e50e.js";import"./user-x.bbf99488.js";import"./x-circle.20df9e8f.js";import"./youtube.eabd843a.js";const $=a=>{const t={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",dropShadow:{enabled:!0,top:18,left:2,blur:5,opacity:.2},offsetX:-10},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebe9f1",padding:{top:-20,bottom:5,left:20}},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[a.primary],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{offsetY:5,style:{colors:"#b9b9c3",fontSize:"0.857rem",fontFamily:"Montserrat"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"0.857rem",fontFamily:"Montserrat"},formatter(n){return n>999?`${(n/1e3).toFixed(1)}k`:n}}},tooltip:{x:{show:!1}}};return r(h,{children:[r(f,{className:"align-items-start",children:[r("div",{children:[e(g,{className:"mb-25",tag:"h4",children:"Sales"}),e(v,{className:"mb-0",children:"2020 Total Sales: 12.84k"})]}),e(D,{size:18,className:"text-muted cursor-pointer"})]}),e(u,{className:"pb-0",children:e(y,{options:t,series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],type:"line",height:240})})]})},E=a=>{const[t,c]=l.exports.useState(null);l.exports.useEffect(()=>{w.get("/card/card-analytics/revenue").then(o=>c(o.data))},[]);const n={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",offsetX:-10},stroke:{curve:"smooth",dashArray:[0,12],width:[4,3]},legend:{show:!1},colors:["#d0ccff","#ebe9f1"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[a.primary,"#ebe9f1"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"1rem"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"1rem"},formatter(o){return o>999?`${(o/1e3).toFixed(0)}k`:o}}},grid:{borderColor:"#e7eef7",padding:{top:-20,bottom:-10,left:20}},tooltip:{x:{show:!1}}};return t!==null?r(h,{children:[r(f,{children:[e(g,{tag:"h4",children:"Revenue"}),e(D,{size:18,className:"text-muted cursor-pointer"})]}),r(u,{children:[r("div",{className:"d-flex justify-content-start mb-3",children:[r("div",{className:"me-2",children:[e(v,{className:"mb-50",children:"This Month"}),r("h3",{className:"fw-bolder",children:[e("sup",{className:"font-medium-1 fw-bold me-25",children:"$"}),e("span",{className:"text-primary",children:"86,589"})]})]}),r("div",{children:[e(v,{className:"mb-50",children:"Last Month"}),r("h3",{className:"fw-bolder",children:[e("sup",{className:"font-medium-1 fw-bold me-25",children:"$"}),e("span",{children:"73,683"})]})]})]}),e(y,{options:n,series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],type:"line",height:240})]})]}):null},O=a=>{const[t,c]=l.exports.useState(null);l.exports.useEffect(()=>{w.get("/card/card-analytics/customers").then(s=>c(s.data))},[]);const n={chart:{toolbar:{show:!1}},labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:4},colors:[a.primary,a.warning,a.danger]},m=[690,258,149],o=()=>t.listData.map((s,p)=>{const N=T[s.icon];return r("div",{className:b("d-flex justify-content-between",{"mb-1":p!==t.listData.length-1}),children:[r("div",{className:"d-flex align-items-center",children:[e(N,{size:15,className:b({[s.iconColor]:s.iconColor})}),e("span",{className:"fw-bold ms-75",children:s.text})]}),e("span",{children:s.result})]},p)});return t!==null?r(h,{children:[r(f,{className:"align-items-end",children:[e(g,{tag:"h4",children:"Customers"}),r(C,{className:"chart-dropdown",children:[e(z,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),e(S,{end:!0,children:t.last_days.map(s=>e(k,{className:"w-100",children:s},s))})]})]}),r(u,{children:[e(y,{options:n,series:m,type:"pie",height:325}),e("div",{className:"pt-25",children:o()})]})]}):null},J=a=>{const[t,c]=l.exports.useState(null);l.exports.useEffect(()=>{w.get("/card/card-analytics/product-orders").then(o=>c(o.data))},[]);const n={labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{strokeWidth:"100%",margin:15},dataLabels:{value:{fontSize:"1rem",colors:"#5e5873",fontWeight:"500",offsetY:5},total:{show:!0,label:"Total",fontSize:"1.286rem",colors:"#5e5873",fontWeight:"500",formatter(){return 42459}}}}},colors:[a.primary,a.warning,a.danger],stroke:{lineCap:"round"},chart:{height:355,dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}},m=[70,52,26];return t!==null?r(h,{children:[r(f,{children:[e(g,{tag:"h4",children:"Product Orders"}),r(C,{className:"chart-dropdown",children:[e(z,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),e(S,{end:!0,children:t.last_days.map(o=>e(k,{className:"w-100",children:o},o))})]})]}),r(u,{children:[e(y,{options:n,series:m,type:"radialBar",height:325}),r("div",{className:"d-flex justify-content-between mb-1",children:[r("div",{className:"d-flex align-items-center",children:[e(x,{size:15,className:"text-primary"}),e("span",{className:"fw-bold ms-75",children:"Finished"})]}),e("span",{children:t.chart_info.finished})]}),r("div",{className:"d-flex justify-content-between mb-1",children:[r("div",{className:"d-flex align-items-center",children:[e(x,{size:15,className:"text-warning"}),e("span",{className:"fw-bold ms-75",children:"Pending"})]}),e("span",{children:t.chart_info.pending})]}),r("div",{className:"d-flex justify-content-between",children:[r("div",{className:"d-flex align-items-center",children:[e(x,{size:15,className:"text-danger"}),e("span",{className:"fw-bold ms-75",children:"Rejected"})]}),e("span",{children:t.chart_info.rejected})]})]})]}):null},U=a=>{const[t,c]=l.exports.useState(null);l.exports.useEffect(()=>{w.get("/card/card-analytics/sessions-device").then(s=>c(s.data))},[]);const n={chart:{toolbar:{show:!1}},labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],stroke:{width:0},colors:[a.primary,a.warning,a.danger]},m=[58.6,34.9,6.5],o=()=>t.chart_info.map((s,p)=>{const N=T[s.icon];return r("div",{className:b("d-flex justify-content-between",{"mb-1":p!==t.chart_info.length-1}),children:[r("div",{className:"d-flex align-items-center",children:[e(N,{size:17,className:b({[s.iconColor]:s.iconColor})}),e("span",{className:"fw-bold ms-75 me-25",children:s.name}),r("span",{children:["- ",s.usage,"%"]})]}),r("div",{children:[r("span",{children:[s.upDown,"%"]}),s.upDown>0?e(_,{size:14,className:"ms-25 text-success"}):e(P,{size:14,className:"ms-25 text-danger"})]})]},p)});return t!==null?r(h,{children:[r(f,{className:"align-items-end",children:[e(g,{tag:"h4",children:"Session By Device"}),r(C,{className:"chart-dropdown",children:[e(z,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),e(S,{end:!0,children:t.last_days.map(s=>e(k,{className:"w-100",children:s},s))})]})]}),r(u,{children:[e(y,{className:"my-1",options:n,series:m,type:"donut",height:300}),o()]})]}):null},_r=()=>{const a=l.exports.useContext(A);return r(l.exports.Fragment,{children:[e(j,{title:"Analytics Cards",data:[{title:"Cards"},{title:"Analytics Actions"}]}),r(d,{className:"match-height",children:[e(i,{lg:"6",sm:"12",children:e(R,{primary:a.colors.primary.main,danger:a.colors.danger.main})}),e(i,{lg:"6",sm:"12",children:e(F,{primary:a.colors.primary.main})})]}),r(d,{className:"match-height",children:[e(i,{lg:"8",sm:"12",children:e(B,{primary:a.colors.primary.main,warning:a.colors.warning.main})}),e(i,{lg:"4",sm:"12",children:e(I,{success:a.colors.success.main})})]}),r(d,{className:"match-height",children:[e(i,{lg:"8",sm:"12",children:e(E,{primary:a.colors.primary.main})}),e(i,{lg:"4",sm:"12",children:e(M,{primary:a.colors.primary.main,info:a.colors.info.main})})]}),r(d,{className:"match-height",children:[e(i,{lg:"8",sm:"12",children:r(d,{className:"match-height",children:[e(i,{sm:"12",children:e($,{primary:a.colors.primary.main})}),e(i,{md:"6",sm:"12",children:e(U,{primary:a.colors.primary.main,warning:a.colors.warning.main,danger:a.colors.danger.main})}),e(i,{md:"6",sm:"12",children:e(O,{primary:a.colors.primary.main,warning:a.colors.warning.main,danger:a.colors.danger.main})})]})}),e(i,{lg:"4",sm:"12",children:r(d,{className:"match-height",children:[e(i,{sm:"12",children:e(J,{primary:a.colors.primary.main,warning:a.colors.warning.main,danger:a.colors.danger.main})}),e(i,{sm:"12",children:e(L,{success:a.colors.success.main})})]})})]})]})};export{_r as default};
