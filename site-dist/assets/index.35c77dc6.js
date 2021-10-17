import{C as w}from"./index.45245c12.js";import{c as g,e as x,p as B,u as D}from"./use-translate.f00dec62.js";import{t as F,b as y,w as I}from"./with-install.8c05f7e9.js";import{p as P,a as Q,P as L}from"./index.b6a5a3b7.js";import{z as E,e as s,H as U,C as f,B as v,r as z,o as O,a as T,w as b,A as o,F as M}from"./vue-libs.dea03542.js";import{T as N}from"./function-call.371c5c4a.js";import"./use-route.8c8b61a6.js";import"./index.bd074117.js";import"./interceptor.3309ba7f.js";import"./use-expose.e5d76f3d.js";import"./use-touch.8bab3413.js";import"./index.c020d7aa.js";import"./utils.51167448.js";import"./index.9fc8b336.js";import"./use-lazy-render.4ae98f04.js";import"./on-popup-reopen.f4e064e0.js";import"./index.3d14facd.js";import"./mount-component.d70fed1c.js";import"./index.91fa2961.js";const W=["qq","link","weibo","wechat","poster","qrcode","weapp-qrcode","wechat-moments"],$=[...P,"round","closeOnPopstate","safeAreaInsetBottom"];function R(c){return W.includes(c)?`https://img.yzcdn.cn/vant/share-sheet-${c}.png`:c}const[H,r,K]=g("share-sheet");var V=E({name:H,props:x({},Q,{title:String,round:F,options:y(),cancelText:String,description:String,closeOnPopstate:F,safeAreaInsetBottom:F}),emits:["cancel","select","update:show"],setup(c,{emit:e,slots:a}){const u=n=>e("update:show",n),p=()=>{u(!1),e("cancel")},m=(n,t)=>e("select",n,t),k=()=>{const n=a.title?a.title():c.title,t=a.description?a.description():c.description;if(n||t)return s("div",{class:r("header")},[n&&s("h2",{class:r("title")},[n]),t&&s("span",{class:r("description")},[t])])},S=(n,t)=>{const{name:l,icon:i,className:j,description:q}=n;return s("div",{role:"button",tabindex:0,class:[r("option"),j],onClick:()=>m(n,t)},[s("img",{src:R(i),class:r("icon")},null),l&&s("span",{class:r("name")},[l]),q&&s("span",{class:r("option-description")},[q])])},h=(n,t)=>s("div",{class:r("options",{border:t})},[n.map(S)]),A=()=>{const{options:n}=c;return Array.isArray(n[0])?n.map((t,l)=>h(t,l!==0)):h(n)},d=()=>{var t;const n=(t=c.cancelText)!=null?t:K("cancel");if(a.cancel||n)return s("button",{type:"button",class:r("cancel"),onClick:p},[a.cancel?a.cancel():n])};return()=>s(L,U({class:r(),position:"bottom","onUpdate:show":u},B(c,$)),{default:()=>[k(),A(),d()]})}});const C=I(V),de=E({setup(c){const e=D({"zh-CN":{qq:"QQ",name:"\u540D\u79F0",link:"\u590D\u5236\u94FE\u63A5",title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",weibo:"\u5FAE\u535A",wechat:"\u5FAE\u4FE1",poster:"\u5206\u4EAB\u6D77\u62A5",qrcode:"\u4E8C\u7EF4\u7801",multiLine:"\u5C55\u793A\u591A\u884C\u9009\u9879",showSheet:"\u663E\u793A\u5206\u4EAB\u9762\u677F",withDesc:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",description:"\u63CF\u8FF0\u4FE1\u606F",weappQrcode:"\u5C0F\u7A0B\u5E8F\u7801",wechatMoments:"\u670B\u53CB\u5708"},"en-US":{qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"Wechat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"Wechat Moments"}}),a=f(!1),u=f(!1),p=f(!1),m=f(!1),k=v(()=>[{name:e("wechat"),icon:"wechat"},{name:e("weibo"),icon:"weibo"},{name:e("link"),icon:"link"},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"}]),S=v(()=>[[{name:e("wechat"),icon:"wechat"},{name:e("wechatMoments"),icon:"wechat-moments"},{name:e("weibo"),icon:"weibo"},{name:e("qq"),icon:"qq"}],[{name:e("link"),icon:"link"},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"},{name:e("weappQrcode"),icon:"weapp-qrcode"}]]),h=v(()=>[{name:e("name"),icon:"https://img.yzcdn.cn/vant/custom-icon-fire.png"},{name:e("name"),icon:"https://img.yzcdn.cn/vant/custom-icon-light.png"},{name:e("name"),icon:"https://img.yzcdn.cn/vant/custom-icon-water.png"}]),A=v(()=>[{name:e("wechat"),icon:"wechat"},{name:e("weibo"),icon:"weibo"},{name:e("link"),icon:"link",description:e("description")},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"}]),d=n=>{N(n.name),a.value=!1,u.value=!1,p.value=!1,m.value=!1};return(n,t)=>{const l=z("demo-block");return O(),T(M,null,[s(l,{card:"",title:o(e)("basicUsage")},{default:b(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[0]||(t[0]=i=>a.value=!0)},null,8,["title"]),s(o(C),{show:a.value,"onUpdate:show":t[1]||(t[1]=i=>a.value=i),title:o(e)("title"),options:o(k),onSelect:d},null,8,["show","title","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("multiLine")},{default:b(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[2]||(t[2]=i=>p.value=!0)},null,8,["title"]),s(o(C),{show:p.value,"onUpdate:show":t[3]||(t[3]=i=>p.value=i),title:o(e)("title"),options:o(S),onSelect:d},null,8,["show","title","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("customIcon")},{default:b(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[4]||(t[4]=i=>m.value=!0)},null,8,["title"]),s(o(C),{show:m.value,"onUpdate:show":t[5]||(t[5]=i=>m.value=i),options:o(h),onSelect:d},null,8,["show","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("withDesc")},{default:b(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[6]||(t[6]=i=>u.value=!0)},null,8,["title"]),s(o(C),{show:u.value,"onUpdate:show":t[7]||(t[7]=i=>u.value=i),title:o(e)("title"),options:o(A),description:o(e)("description"),onSelect:d},null,8,["show","title","options","description"])]),_:1},8,["title"])],64)}}});export{de as default};
