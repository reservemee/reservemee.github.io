import{n as a,j as e,aP as b,aQ as k,ad as B,a7 as i,ae as E,A as f,L as D,i as P,a3 as o,B as M,a5 as w,aR as g,a2 as x,a0 as A,a1 as t,a6 as s,r as C,f as H,bB as I,bC as L,bD as W,bE as X}from"./index.09005372.js";import{W as $}from"./index.705eda13.js";import{B as z}from"./index.56e6378b.js";import{I as G}from"./input-number.fcce8efc.js";import{S as O}from"./star.2fb59479.js";import{P as R}from"./plus.042dfce8.js";import{M as j}from"./minus.760cb496.js";import{X as U,H as V,a as q,k as Y}from"./App.c0ce4c5e.js";import{u as Q,C as u}from"./index.esm.0c04059c.js";import{P as J}from"./plus-circle.a23d8492.js";/* empty css                      */import{S as K}from"./shopping-cart.184e4667.js";import{C as Z}from"./credit-card.e6e6e113.js";import"./chevron-right.2170b606.js";import"./objectWithoutProperties.ea3a3e59.js";const _=h=>{const{products:n,stepper:r,deleteCartItem:p,dispatch:m,addToWishlist:d,deleteWishlistItem:N,getCartItems:c}=h,y=(l,v={month:"short",day:"numeric",year:"numeric"})=>l&&new Intl.DateTimeFormat("en-US",v).format(new Date(l)),T=(l,v)=>{m(v?N(l):d(l)),m(c())},F=()=>n.map(l=>a(b,{className:"ecommerce-card",children:[e("div",{className:"item-img",children:e(D,{to:`/apps/ecommerce/product-detail/${l.slug}`,children:e("img",{className:"img-fluid",src:l.image,alt:l.name})})}),a(k,{children:[a("div",{className:"item-name",children:[e("h6",{className:"mb-0",children:e(D,{to:`/apps/ecommerce/product-detail/${l.slug}`,children:l.name})}),a("span",{className:"item-company",children:["By",e("a",{className:"ms-25",href:"/",onClick:v=>v.preventDefault(),children:l.brand})]}),e("div",{className:"item-rating",children:e("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((v,S)=>e("li",{className:"ratings-list-item me-25",children:e(O,{className:P({"filled-star":S+1<=l.rating,"unfilled-star":S+1>l.rating})})},S))})})]}),e("span",{className:"text-success mb-1",children:"In Stock"}),a("div",{className:"item-quantity",children:[e("span",{className:"quantity-title me-50",children:"Qty"}),e(G,{min:1,max:10,upHandler:e(R,{}),className:"cart-input",defaultValue:l.qty,downHandler:e(j,{})})]}),a("div",{className:"delivery-date text-muted",children:["Delivery by, ",y(l.shippingDate)]}),a("span",{className:"text-success",children:[l.discountPercentage,"% off ",l.offers," offers Available"]})]}),a("div",{className:"item-options text-center",children:[e("div",{className:"item-wrapper",children:a("div",{className:"item-cost",children:[a("h4",{className:"item-price",children:["$",l.price]}),l.hasFreeShipping?e(o,{className:"shipping",children:e(M,{color:"light-success",pill:!0,children:"Free Shipping"})}):null]})}),a(f,{className:"mt-1 remove-wishlist",color:"light",onClick:()=>m(p(l.id)),children:[e(U,{size:14,className:"me-25"}),e("span",{children:"Remove"})]}),a(f,{className:"btn-cart",color:"primary",onClick:()=>T(l.id,l.isInWishlist),children:[e(V,{size:14,className:P("me-25",{"fill-current":l.isInWishlist})}),e("span",{className:"text-truncate",children:"Wishlist"})]})]})]},l.name));return a("div",{className:"list-view product-checkout",children:[e("div",{className:"checkout-items",children:n.length?F():e("h4",{children:"Your cart is empty"})}),e("div",{className:"checkout-options",children:e(b,{children:a(k,{children:[e("label",{className:"section-label mb-1",children:"Options"}),a(B,{className:"input-group-merge coupons",children:[e(i,{placeholder:"Coupons"}),e(E,{className:"text-primary ms-0",children:"Apply"})]}),e("hr",{}),a("div",{className:"price-details",children:[e("h6",{className:"price-title",children:"Price Details"}),a("ul",{className:"list-unstyled",children:[a("li",{className:"price-detail",children:[e("div",{className:"detail-title",children:"Total MRP"}),e("div",{className:"detail-amt",children:"$598"})]}),a("li",{className:"price-detail",children:[e("div",{className:"detail-title",children:"Bag Discount"}),e("div",{className:"detail-amt discount-amt text-success",children:"-25$"})]}),a("li",{className:"price-detail",children:[e("div",{className:"detail-title",children:"Estimated Tax"}),e("div",{className:"detail-amt",children:"$1.3"})]}),a("li",{className:"price-detail",children:[e("div",{className:"detail-title",children:"EMI Eligibility"}),e("a",{href:"/",className:"detail-amt text-primary",onClick:l=>l.preventDefault(),children:"Details"})]}),a("li",{className:"price-detail",children:[e("div",{className:"detail-title",children:"Delivery Charges"}),e("div",{className:"detail-amt discount-amt text-success",children:"Free"})]})]}),e("hr",{}),e("ul",{className:"list-unstyled",children:a("li",{className:"price-detail",children:[e("div",{className:"detail-title detail-total",children:"Total"}),e("div",{className:"detail-amt fw-bolder",children:"$574"})]})}),e(f,{block:!0,color:"primary",disabled:!n.length,onClick:()=>r.next(),classnames:"btn-next place-order",children:"Place Order"})]})]})})})]})},ee={checkoutName:"",checkoutCity:"",checkoutState:"",checkoutNumber:"",checkoutFlatNo:"",checkoutPincode:"",checkoutLandmark:""},ae=h=>{const{stepper:n}=h,{control:r,setError:p,handleSubmit:m,formState:{errors:d}}=Q({defaultValues:ee});return a(w,{className:"list-view product-checkout",onSubmit:m(c=>{if(Object.values(c).every(y=>y.length>0))n.next();else for(const y in c)c[y].length===0&&p(y,{type:"manual"})}),children:[a(b,{children:[a(g,{className:"flex-column align-items-start",children:[e(x,{tag:"h4",children:"Add New Address"}),e(o,{className:"text-muted mt-25",children:'Be sure to check "Deliver to this address" when you have finished'})]}),e(k,{children:a(A,{children:[e(t,{md:"6",sm:"12",children:a("div",{className:"mb-2",children:[e(s,{className:"form-label",for:"checkoutName",children:"Full Name:"}),e(u,{control:r,name:"checkoutName",render:({field:c})=>e(i,{id:"checkoutName",placeholder:"Bader",invalid:d.checkoutName&&!0,...c})})]})}),e(t,{md:"6",sm:"12",children:a("div",{className:"mb-2",children:[e(s,{className:"form-label",for:"checkoutNumber",children:"Mobile Number:"}),e(u,{control:r,name:"checkoutNumber",render:({field:c})=>e(i,{type:"number",id:"checkoutNumber",placeholder:"0123456789",invalid:d.checkoutNumber&&!0,...c})})]})}),e(t,{md:"6",sm:"12",children:a("div",{className:"mb-2",children:[e(s,{className:"form-label",for:"checkoutFlatNo",children:"Flat, House No:"}),e(u,{control:r,name:"checkoutFlatNo",render:({field:c})=>e(i,{type:"number",id:"checkoutFlatNo",placeholder:"9447 Glen Eagles Drive",invalid:d.checkoutFlatNo&&!0,...c})})]})}),e(t,{md:"6",sm:"12",children:a("div",{className:"mb-2",children:[e(s,{className:"form-label",for:"checkoutLandmark",children:"Landmark e.g. near apollo hospital:"}),e(u,{control:r,name:"checkoutLandmark",render:({field:c})=>e(i,{id:"checkoutLandmark",placeholder:"Near Apollo Hospital",invalid:d.checkoutLandmark&&!0,...c})})]})}),e(t,{md:"6",sm:"12",children:a("div",{className:"mb-2",children:[e(s,{className:"form-label",for:"checkoutCity",children:"Town/City:"}),e(u,{control:r,name:"checkoutCity",render:({field:c})=>e(i,{id:"checkoutCity",placeholder:"Los Angeles",invalid:d.checkoutCity&&!0,...c})})]})}),e(t,{md:"6",sm:"12",children:a("div",{className:"mb-2",children:[e(s,{className:"form-label",for:"checkoutPincode",children:"Pincode:"}),e(u,{control:r,name:"checkoutPincode",render:({field:c})=>e(i,{type:"number",id:"checkoutPincode",placeholder:"201301",invalid:d.checkoutPincode&&!0,...c})})]})}),e(t,{md:"6",sm:"12",children:a("div",{className:"mb-2",children:[e(s,{className:"form-label",for:"checkoutState",children:"State:"}),e(u,{control:r,name:"checkoutState",render:({field:c})=>e(i,{id:"checkoutState",placeholder:"California",invalid:d.checkoutState&&!0,...c})})]})}),e(t,{md:"6",sm:"12",children:a("div",{className:"mb-2",children:[e(s,{className:"form-label",for:"add-type",children:"Address Type:"}),a(i,{type:"select",name:"add-type",id:"add-type",children:[e("option",{value:"home",children:"Home"}),e("option",{value:"work",children:"Work"})]})]})}),e(t,{sm:"12",children:e(f,{type:"submit",className:"btn-next delivery-address",color:"primary",children:"Save And Deliver Here"})})]})})]}),e("div",{className:"customer-card",children:a(b,{children:[e(g,{children:e(x,{tag:"h4",children:"Bader"})}),a(k,{children:[e(o,{className:"mb-0",children:"9447 Glen Eagles Drive"}),e(o,{children:"Lewis Center, OH 43035"}),e(o,{children:"UTC-5: Eastern Standard Time (EST)"}),e(o,{children:"202-555-0140"}),e(f,{block:!0,type:"button",color:"primary",onClick:()=>n.next(),className:"btn-next delivery-address mt-2",children:"Deliver To This Address"})]})]})})]})},le=()=>a(w,{className:"list-view product-checkout",onSubmit:h=>{h.preventDefault()},children:[e("div",{className:"payment-type",children:a(b,{children:[a(g,{className:"flex-column align-items-start",children:[e(x,{tag:"h4",children:"Payment options"}),e(o,{className:"text-muted mt-25",children:"Be sure to click on correct payment option"})]}),a(k,{children:[e("h6",{className:"card-holder-name my-75",children:"Bader"}),a("div",{className:"form-check mb-2",children:[e(i,{defaultChecked:!0,id:"us-card",type:"radio",name:"paymentMethod"}),e(s,{className:"form-check-label",htmlFor:"us-card",children:"US Unlocked Debit Card 12XX XXXX XXXX 0000"})]}),a(A,{className:"customer-cvv mt-1 row-cols-lg-auto",children:[e(t,{xs:3,className:"d-flex align-items-center",children:e(s,{className:"mb-50",for:"card-holder-cvv",children:"Enter CVV:"})}),e(t,{xs:4,className:"p-0",children:e(i,{className:"input-cvv mb-50",id:"card-holder-cvv"})}),e(t,{xs:3,children:e(f,{className:"btn-cvv mb-50",color:"primary",children:"Continue"})})]}),e("hr",{className:"my-2"}),a("ul",{className:"other-payment-options list-unstyled",children:[e("li",{className:"py-50",children:a("div",{className:"form-check",children:[e(i,{type:"radio",name:"paymentMethod",id:"credit-card"}),e(s,{className:"form-label",for:"credit-card",children:"Credit / Debit / ATM Card"})]})}),e("li",{className:"py-50",children:a("div",{className:"form-check",children:[e(i,{type:"radio",name:"paymentMethod",id:"payment-net-banking"}),e(s,{className:"form-label",for:"payment-net-banking",children:"Net Banking"})]})}),e("li",{className:"py-50",children:a("div",{className:"form-check",children:[e(i,{type:"radio",name:"paymentMethod",id:"payment-emi"}),e(s,{className:"form-label",for:"payment-emi",children:"EMI (Easy Installment)"})]})}),e("li",{className:"py-50",children:a("div",{className:"form-check",children:[e(i,{type:"radio",name:"paymentMethod",id:"payment-cod"}),e(s,{className:"form-label",for:"payment-cod",children:"Cash On Delivery"})]})})]}),e("hr",{className:"my-2"}),e("div",{className:"gift-card mb-25",children:a(o,{children:[e(J,{className:"me-50",size:21}),e("span",{className:"align-middle",children:"Add Gift Card"})]})})]})]})}),e("div",{className:"amount-payable checkout-options",children:a(b,{children:[e(g,{children:e(x,{tag:"h4",children:"Price Details"})}),a(k,{children:[a("ul",{className:"list-unstyled price-details",children:[a("li",{className:"price-detail",children:[e("div",{className:"details-title",children:"Price of 3 items"}),e("div",{className:"detail-amt",children:e("strong",{children:"$699.30"})})]}),a("li",{className:"price-detail",children:[e("div",{className:"details-title",children:"Delivery Charges"}),e("div",{className:"detail-amt discount-amt text-success",children:"Free"})]})]}),e("hr",{}),e("ul",{className:"list-unstyled price-details",children:a("li",{className:"price-detail",children:[e("div",{className:"details-title",children:"Amount Payable"}),e("div",{className:"detail-amt fw-bolder",children:"$699.30"})]})})]})]})})]}),fe=()=>{const h=C.exports.useRef(null),[n,r]=C.exports.useState(null),p=q(),m=H(N=>N.ecommerce);C.exports.useEffect(()=>{p(I())},[]);const d=[{id:"cart",title:"Cart",subtitle:"Your Cart Items",icon:e(K,{size:18}),content:e(_,{stepper:n,dispatch:p,products:m.cart,getCartItems:I,addToWishlist:L,deleteCartItem:W,deleteWishlistItem:X})},{id:"Address",title:"Address",subtitle:"Enter Your Address",icon:e(Y,{size:18}),content:e(ae,{stepper:n})},{id:"payment",title:"Payment",subtitle:"Select Payment Method",icon:e(Z,{size:18}),content:e(le,{stepper:n})}];return a(C.exports.Fragment,{children:[e(z,{title:"Checkout",data:[{title:"eCommerce"},{title:"Checkout"}]}),e($,{ref:h,steps:d,className:"checkout-tab-steps",instance:N=>r(N),options:{linear:!1}})]})};export{fe as default};