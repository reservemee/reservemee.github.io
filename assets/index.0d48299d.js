import{n as r,aP as h,aR as f,j as e,a2 as g,a3 as v,aQ as u,r as l,bp as w,U as C,D as z,v as S,w as k,i as b,cu as A,a0 as d,a1 as i}from"./index.09005372.js";import{B as j}from"./index.56e6378b.js";import{S as R,A as F,a as M}from"./SupportTracker.89e3dc8e.js";import{_ as y}from"./react-apexcharts.min.55faee9c.js";import{l as D,q as x,o as _}from"./App.c0ce4c5e.js";import{R as B,G as I,E as L}from"./RevenueReport.e23eeeaa.js";import{I as T}from"./index.9b0273f1.js";import{A as P}from"./arrow-down.76e652b0.js";/* empty css                    */import"./more-vertical.90afcba1.js";import"./help-circle.20ef447d.js";import"./truck.9a14b476.js";import"./square.ee3e3477.js";import"./rss.f3e9951c.js";import"./archive.ba4a0a91.js";import"./save.53274b88.js";import"./arrow-left.d148da32.js";import"./arrow-right.cb1a427a.js";import"./award.54d34f1a.js";import"./gift.009c99ce.js";import"./wifi.af578161.js";import"./book.d4f51a20.js";import"./bookmark.bda825b8.js";import"./box.2f1dc423.js";import"./briefcase.2b7ea105.js";import"./calendar.2d1fb3a2.js";import"./inbox.2c61f1b2.js";import"./check-circle.c8d94afb.js";import"./video.26494cb8.js";import"./chevron-down.592b0a48.js";import"./chevron-left.5746d388.js";import"./chevron-right.2170b606.js";import"./globe.82c22fee.js";import"./clipboard.8bb095f8.js";import"./clock.98cd6c69.js";import"./sun.11ce3874.js";import"./code.9f589fa8.js";import"./copy.6415d419.js";import"./maximize-2.52ecde65.js";import"./credit-card.e6e6e113.js";import"./database.302ce7bf.js";import"./dollar-sign.afc58aa5.js";import"./download-cloud.c6e8a916.js";import"./download.b83b1606.js";import"./edit-2.106578b0.js";import"./edit.8e433e0a.js";import"./external-link.042c70fc.js";import"./eye-off.25b05f53.js";import"./eye.7e673c8d.js";import"./facebook.a9e99f95.js";import"./file.86134539.js";import"./github.f6334811.js";import"./grid.d87628e0.js";import"./hash.27cbf9b3.js";import"./image.206ca69b.js";import"./info.da30c367.js";import"./instagram.bd4d4e60.js";import"./link.48673132.js";import"./linkedin.8c56163d.js";import"./list.d35f1577.js";import"./lock.abb1fb82.js";import"./mail.9a827d5d.js";import"./map-pin.9aadddb8.js";import"./message-square.5366eeca.js";import"./minus.760cb496.js";import"./monitor.2e61048b.js";import"./package.a57f99bc.js";import"./paperclip.dfa8f20f.js";import"./pen-tool.10c7b0a3.js";import"./phone-call.2368873d.js";import"./play.0ba78350.js";import"./plus-circle.a23d8492.js";import"./plus.042dfce8.js";import"./pocket.3d1807a7.js";import"./printer.3d523260.js";import"./rotate-cw.0f777c94.js";import"./search.b852d141.js";import"./shopping-bag.e381bd39.js";import"./share-2.bdaa0a6c.js";import"./share.9f9e5f02.js";import"./shield.5a8929da.js";import"./shopping-cart.184e4667.js";import"./slack.063ed512.js";import"./smartphone.2eb058a4.js";import"./star.2fb59479.js";import"./tablet.9e1e5bdf.js";import"./tag.904233cd.js";import"./thumbs-up.f9acbf3d.js";import"./trash-2.aec9f5ca.js";import"./trash.0ae6231e.js";import"./watch.0e8b944d.js";import"./trending-up.c4880486.js";import"./twitter.386e19ef.js";import"./user-check.6b1a5b42.js";import"./user-plus.a619509e.js";import"./user-x.f09a3306.js";import"./x-circle.bf712efe.js";import"./youtube.a30e613c.js";const $=a=>{const t={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",dropShadow:{enabled:!0,top:18,left:2,blur:5,opacity:.2},offsetX:-10},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebe9f1",padding:{top:-20,bottom:5,left:20}},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[a.primary],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{offsetY:5,style:{colors:"#b9b9c3",fontSize:"0.857rem",fontFamily:"Montserrat"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"0.857rem",fontFamily:"Montserrat"},formatter(n){return n>999?`${(n/1e3).toFixed(1)}k`:n}}},tooltip:{x:{show:!1}}};return r(h,{children:[r(f,{className:"align-items-start",children:[r("div",{children:[e(g,{className:"mb-25",tag:"h4",children:"Sales"}),e(v,{className:"mb-0",children:"2020 Total Sales: 12.84k"})]}),e(D,{size:18,className:"text-muted cursor-pointer"})]}),e(u,{className:"pb-0",children:e(y,{options:t,series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],type:"line",height:240})})]})},E=a=>{const[t,c]=l.exports.useState(null);l.exports.useEffect(()=>{w.get("/card/card-analytics/revenue").then(o=>c(o.data))},[]);const n={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",offsetX:-10},stroke:{curve:"smooth",dashArray:[0,12],width:[4,3]},legend:{show:!1},colors:["#d0ccff","#ebe9f1"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[a.primary,"#ebe9f1"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"1rem"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"1rem"},formatter(o){return o>999?`${(o/1e3).toFixed(0)}k`:o}}},grid:{borderColor:"#e7eef7",padding:{top:-20,bottom:-10,left:20}},tooltip:{x:{show:!1}}};return t!==null?r(h,{children:[r(f,{children:[e(g,{tag:"h4",children:"Revenue"}),e(D,{size:18,className:"text-muted cursor-pointer"})]}),r(u,{children:[r("div",{className:"d-flex justify-content-start mb-3",children:[r("div",{className:"me-2",children:[e(v,{className:"mb-50",children:"This Month"}),r("h3",{className:"fw-bolder",children:[e("sup",{className:"font-medium-1 fw-bold me-25",children:"$"}),e("span",{className:"text-primary",children:"86,589"})]})]}),r("div",{children:[e(v,{className:"mb-50",children:"Last Month"}),r("h3",{className:"fw-bolder",children:[e("sup",{className:"font-medium-1 fw-bold me-25",children:"$"}),e("span",{children:"73,683"})]})]})]}),e(y,{options:n,series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],type:"line",height:240})]})]}):null},O=a=>{const[t,c]=l.exports.useState(null);l.exports.useEffect(()=>{w.get("/card/card-analytics/customers").then(s=>c(s.data))},[]);const n={chart:{toolbar:{show:!1}},labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:4},colors:[a.primary,a.warning,a.danger]},m=[690,258,149],o=()=>t.listData.map((s,p)=>{const N=T[s.icon];return r("div",{className:b("d-flex justify-content-between",{"mb-1":p!==t.listData.length-1}),children:[r("div",{className:"d-flex align-items-center",children:[e(N,{size:15,className:b({[s.iconColor]:s.iconColor})}),e("span",{className:"fw-bold ms-75",children:s.text})]}),e("span",{children:s.result})]},p)});return t!==null?r(h,{children:[r(f,{className:"align-items-end",children:[e(g,{tag:"h4",children:"Customers"}),r(C,{className:"chart-dropdown",children:[e(z,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),e(S,{end:!0,children:t.last_days.map(s=>e(k,{className:"w-100",children:s},s))})]})]}),r(u,{children:[e(y,{options:n,series:m,type:"pie",height:325}),e("div",{className:"pt-25",children:o()})]})]}):null},J=a=>{const[t,c]=l.exports.useState(null);l.exports.useEffect(()=>{w.get("/card/card-analytics/product-orders").then(o=>c(o.data))},[]);const n={labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{strokeWidth:"100%",margin:15},dataLabels:{value:{fontSize:"1rem",colors:"#5e5873",fontWeight:"500",offsetY:5},total:{show:!0,label:"Total",fontSize:"1.286rem",colors:"#5e5873",fontWeight:"500",formatter(){return 42459}}}}},colors:[a.primary,a.warning,a.danger],stroke:{lineCap:"round"},chart:{height:355,dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}},m=[70,52,26];return t!==null?r(h,{children:[r(f,{children:[e(g,{tag:"h4",children:"Product Orders"}),r(C,{className:"chart-dropdown",children:[e(z,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),e(S,{end:!0,children:t.last_days.map(o=>e(k,{className:"w-100",children:o},o))})]})]}),r(u,{children:[e(y,{options:n,series:m,type:"radialBar",height:325}),r("div",{className:"d-flex justify-content-between mb-1",children:[r("div",{className:"d-flex align-items-center",children:[e(x,{size:15,className:"text-primary"}),e("span",{className:"fw-bold ms-75",children:"Finished"})]}),e("span",{children:t.chart_info.finished})]}),r("div",{className:"d-flex justify-content-between mb-1",children:[r("div",{className:"d-flex align-items-center",children:[e(x,{size:15,className:"text-warning"}),e("span",{className:"fw-bold ms-75",children:"Pending"})]}),e("span",{children:t.chart_info.pending})]}),r("div",{className:"d-flex justify-content-between",children:[r("div",{className:"d-flex align-items-center",children:[e(x,{size:15,className:"text-danger"}),e("span",{className:"fw-bold ms-75",children:"Rejected"})]}),e("span",{children:t.chart_info.rejected})]})]})]}):null},U=a=>{const[t,c]=l.exports.useState(null);l.exports.useEffect(()=>{w.get("/card/card-analytics/sessions-device").then(s=>c(s.data))},[]);const n={chart:{toolbar:{show:!1}},labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],stroke:{width:0},colors:[a.primary,a.warning,a.danger]},m=[58.6,34.9,6.5],o=()=>t.chart_info.map((s,p)=>{const N=T[s.icon];return r("div",{className:b("d-flex justify-content-between",{"mb-1":p!==t.chart_info.length-1}),children:[r("div",{className:"d-flex align-items-center",children:[e(N,{size:17,className:b({[s.iconColor]:s.iconColor})}),e("span",{className:"fw-bold ms-75 me-25",children:s.name}),r("span",{children:["- ",s.usage,"%"]})]}),r("div",{children:[r("span",{children:[s.upDown,"%"]}),s.upDown>0?e(_,{size:14,className:"ms-25 text-success"}):e(P,{size:14,className:"ms-25 text-danger"})]})]},p)});return t!==null?r(h,{children:[r(f,{className:"align-items-end",children:[e(g,{tag:"h4",children:"Session By Device"}),r(C,{className:"chart-dropdown",children:[e(z,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),e(S,{end:!0,children:t.last_days.map(s=>e(k,{className:"w-100",children:s},s))})]})]}),r(u,{children:[e(y,{className:"my-1",options:n,series:m,type:"donut",height:300}),o()]})]}):null},_r=()=>{const a=l.exports.useContext(A);return r(l.exports.Fragment,{children:[e(j,{title:"Analytics Cards",data:[{title:"Cards"},{title:"Analytics Actions"}]}),r(d,{className:"match-height",children:[e(i,{lg:"6",sm:"12",children:e(R,{primary:a.colors.primary.main,danger:a.colors.danger.main})}),e(i,{lg:"6",sm:"12",children:e(F,{primary:a.colors.primary.main})})]}),r(d,{className:"match-height",children:[e(i,{lg:"8",sm:"12",children:e(B,{primary:a.colors.primary.main,warning:a.colors.warning.main})}),e(i,{lg:"4",sm:"12",children:e(I,{success:a.colors.success.main})})]}),r(d,{className:"match-height",children:[e(i,{lg:"8",sm:"12",children:e(E,{primary:a.colors.primary.main})}),e(i,{lg:"4",sm:"12",children:e(M,{primary:a.colors.primary.main,info:a.colors.info.main})})]}),r(d,{className:"match-height",children:[e(i,{lg:"8",sm:"12",children:r(d,{className:"match-height",children:[e(i,{sm:"12",children:e($,{primary:a.colors.primary.main})}),e(i,{md:"6",sm:"12",children:e(U,{primary:a.colors.primary.main,warning:a.colors.warning.main,danger:a.colors.danger.main})}),e(i,{md:"6",sm:"12",children:e(O,{primary:a.colors.primary.main,warning:a.colors.warning.main,danger:a.colors.danger.main})})]})}),e(i,{lg:"4",sm:"12",children:r(d,{className:"match-height",children:[e(i,{sm:"12",children:e(J,{primary:a.colors.primary.main,warning:a.colors.warning.main,danger:a.colors.danger.main})}),e(i,{sm:"12",children:e(L,{success:a.colors.success.main})})]})})]})]})};export{_r as default};