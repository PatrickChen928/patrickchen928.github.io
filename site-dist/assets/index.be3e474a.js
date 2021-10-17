import{c as B,u as M}from"./use-translate.f00dec62.js";import{m as A,c as f,a as N,w as U}from"./with-install.8c05f7e9.js";import{d as h}from"./constant.bdedcaa1.js";import{z as b,B as C,x as j,e as u,C as P,r as D,o as F,a as I,w as d,A as l,h as y,t as R,F as $}from"./vue-libs.dea03542.js";import{I as E}from"./index.bd074117.js";const[O,m,S]=B("pagination"),T=(n,o,s)=>({number:n,text:o,active:s});var q=b({name:O,props:{mode:A("multi"),prevText:String,nextText:String,pageCount:f(0),modelValue:N(0),totalItems:f(0),showPageSize:f(5),itemsPerPage:f(10),forceEllipses:Boolean},emits:["change","update:modelValue"],setup(n,{emit:o,slots:s}){const c=C(()=>{const{pageCount:e,totalItems:a,itemsPerPage:t}=n,i=+e||Math.ceil(+a/+t);return Math.max(1,i)}),g=C(()=>{const e=[],a=c.value,t=+n.showPageSize,{modelValue:i,forceEllipses:k}=n;if(n.mode!=="multi")return e;let p=1,x=a;const _=t<a;_&&(p=Math.max(i-Math.floor(t/2),1),x=p+t-1,x>a&&(x=a,p=x-t+1));for(let r=p;r<=x;r++){const z=T(r,r,r===i);e.push(z)}if(_&&t>0&&k){if(p>1){const r=T(p-1,"...");e.unshift(r)}if(x<a){const r=T(x+1,"...");e.push(r)}}return e}),v=(e,a)=>{e=Math.min(c.value,Math.max(1,e)),n.modelValue!==e&&(o("update:modelValue",e),a&&o("change",e))};j(()=>n.modelValue,e=>{v(e)},{immediate:!0});const w=()=>{if(n.mode!=="multi")return u("li",{class:m("page-desc")},[s.pageDesc?s.pageDesc():`${n.modelValue}/${c.value}`])};return()=>{const e=n.modelValue,a=n.mode!=="multi",t=i=>()=>v(i,!0);return u("ul",{class:m({simple:a})},[u("li",{class:[m("item",{disabled:e===1}),m("prev"),h],onClick:t(e-1)},[s["prev-text"]?s["prev-text"]():n.prevText||S("prev")]),g.value.map(i=>u("li",{class:[m("item",{active:i.active}),m("page"),h],onClick:t(i.number)},[s.page?s.page(i):i.text])),w(),u("li",{class:[m("item",{disabled:e===c.value}),m("next"),h],onClick:t(e+1)},[s["next-text"]?s["next-text"]():n.nextText||S("next")])])}}});const V=U(q);const Q=b({setup(n){const o=M({"zh-CN":{title2:"\u7B80\u5355\u6A21\u5F0F",title3:"\u663E\u793A\u7701\u7565\u53F7",title4:"\u81EA\u5B9A\u4E49\u6309\u94AE",prevText:"\u4E0A\u4E00\u9875",nextText:"\u4E0B\u4E00\u9875"},"en-US":{title2:"Simple Mode",title3:"Show ellipses",title4:"Custom Button",prevText:"Prev",nextText:"Next"}}),s=P(1),c=P(1),g=P(1),v=P(1);return(w,e)=>{const a=D("demo-block");return F(),I($,null,[u(a,{title:l(o)("basicUsage")},{default:d(()=>[u(l(V),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),"total-items":24,"items-per-page":5,"prev-text":l(o)("prevText"),"next-text":l(o)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),u(a,{title:l(o)("title2")},{default:d(()=>[u(l(V),{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=t=>c.value=t),"page-count":12,"prev-text":l(o)("prevText"),"next-text":l(o)("nextText"),mode:"simple",size:"small"},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),u(a,{title:l(o)("title3")},{default:d(()=>[u(l(V),{modelValue:g.value,"onUpdate:modelValue":e[2]||(e[2]=t=>g.value=t),"force-ellipses":"","total-items":125,"show-page-size":3,"prev-text":l(o)("prevText"),"next-text":l(o)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),u(a,{title:l(o)("title4")},{default:d(()=>[u(l(V),{modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=t=>v.value=t),"total-items":125,"show-page-size":5},{"prev-text":d(()=>[u(l(E),{name:"arrow-left"})]),"next-text":d(()=>[u(l(E),{name:"arrow"})]),page:d(({text:t})=>[y(R(t),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{Q as default};
