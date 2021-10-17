import{c as A,f as v,j as C,u as S}from"./use-translate.f00dec62.js";import{c as g,t as _,n as w,m as p,w as y}from"./with-install.8c05f7e9.js";import{z as f,e,C as B,r as V,o as b,a as k,w as c,A as u,d as i,t as E,F as W}from"./vue-libs.dea03542.js";import{S as x}from"./index.b51356d1.js";import"./index.91fa2961.js";import"./index.d48d155f.js";const[D,s]=A("skeleton"),F="100%",j="60%";var z=f({name:D,props:{row:g(0),title:Boolean,round:Boolean,avatar:Boolean,loading:_,animate:_,avatarSize:w,titleWidth:w,avatarShape:p("round"),rowWidth:{type:[Number,String,Array],default:F}},setup(t,{slots:a}){const l=()=>{if(t.avatar)return e("div",{class:s("avatar",t.avatarShape),style:C(t.avatarSize)},null)},h=()=>{if(t.title)return e("h3",{class:s("title"),style:{width:v(t.titleWidth)}},null)},d=n=>{const{rowWidth:r}=t;return r===F&&n===+t.row-1?j:Array.isArray(r)?r[n]:r},o=()=>Array(t.row).fill("").map((n,r)=>e("div",{class:s("row"),style:{width:v(d(r))}},null));return()=>{var n;return t.loading?e("div",{class:s({animate:t.animate,round:t.round})},[l(),e("div",{class:s("content")},[h(),o()])]):(n=a.default)==null?void 0:n.call(a)}}});const m=y(z);const T={class:"demo-preview"},U=i("img",{src:"https://img.yzcdn.cn/vant/logo.png"},null,-1),N={class:"demo-content"},M=f({setup(t){const a=S({"zh-CN":{showAvatar:"\u663E\u793A\u5934\u50CF",showChildren:"\u663E\u793A\u5B50\u7EC4\u4EF6",title:"\u5173\u4E8E Vant",desc:"Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\u3002"},"en-US":{showAvatar:"Show Avatar",showChildren:"Show Children",title:"About Vant",desc:"Vant is a set of Mobile UI Components built on Vue."}}),l=B(!1);return(h,d)=>{const o=V("demo-block");return b(),k(W,null,[e(o,{title:u(a)("basicUsage")},{default:c(()=>[e(u(m),{title:"",row:3})]),_:1},8,["title"]),e(o,{title:u(a)("showAvatar")},{default:c(()=>[e(u(m),{title:"",avatar:"",row:3})]),_:1},8,["title"]),e(o,{title:u(a)("showChildren")},{default:c(()=>[e(u(x),{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=n=>l.value=n),size:"24px"},null,8,["modelValue"]),e(u(m),{title:"",avatar:"",row:3,loading:!l.value},{default:c(()=>[i("div",T,[U,i("div",N,[i("h3",null,E(u(a)("title")),1),i("p",null,E(u(a)("desc")),1)])])]),_:1},8,["loading"])]),_:1},8,["title"])],64)}}});export{M as default};
