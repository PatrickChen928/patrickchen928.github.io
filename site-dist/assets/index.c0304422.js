import{z as f,C as b,r as E,o as v,a as F,e as n,w as j,A as e,V as s,c as K,F as k}from"./vue-libs.dea03542.js";import{C as d}from"./index.45245c12.js";import{F as w}from"./index.cdcf7a30.js";import{N as r}from"./index.168670f9.js";import{u as B}from"./use-translate.f00dec62.js";import{T as x}from"./function-call.371c5c4a.js";import"./with-install.8c05f7e9.js";import"./use-route.8c8b61a6.js";import"./index.bd074117.js";import"./constant.bdedcaa1.js";import"./use-expose.e5d76f3d.js";import"./index.d48d155f.js";import"./useParent.e8f23fef.js";import"./use-touch.8bab3413.js";import"./index.91fa2961.js";import"./index.51100e14.js";import"./utils.51167448.js";import"./index.c020d7aa.js";import"./mount-component.d70fed1c.js";import"./index.b6a5a3b7.js";import"./interceptor.3309ba7f.js";import"./index.9fc8b336.js";import"./use-lazy-render.4ae98f04.js";import"./on-popup-reopen.f4e064e0.js";import"./index.3d14facd.js";const Y=f({setup(D){const l=B({"zh-CN":{close:"\u5B8C\u6210",input:"\u8F93\u5165",title:"\u952E\u76D8\u6807\u9898",button1:"\u5F39\u51FA\u9ED8\u8BA4\u952E\u76D8",button2:"\u5F39\u51FA\u5E26\u53F3\u4FA7\u680F\u7684\u952E\u76D8",button3:"\u5F39\u51FA\u8EAB\u4EFD\u8BC1\u53F7\u952E\u76D8",button4:"\u5F39\u51FA\u5E26\u6807\u9898\u7684\u952E\u76D8",button5:"\u5F39\u51FA\u914D\u7F6E\u591A\u4E2A\u6309\u952E\u7684\u952E\u76D8",button6:"\u5F39\u51FA\u914D\u7F6E\u968F\u673A\u6570\u5B57\u7684\u952E\u76D8",bindValue:"\u53CC\u5411\u7ED1\u5B9A",clickToInput:"\u70B9\u6B64\u8F93\u5165",extraKey:"\u5DE6\u4E0B\u89D2\u6309\u952E\u5185\u5BB9",multiExtraKey:"\u914D\u7F6E\u591A\u4E2A\u6309\u952E",randomKeyOrder:"\u968F\u673A\u6570\u5B57\u952E\u76D8"},"en-US":{close:"Close",input:"Input",title:"Keyboard Title",button1:"Show Default Keyboard",button2:"Show Keyboard With Sidebar",button3:"Show IdNumber Keyboard",button4:"Show Keyboard With Title",button5:"Show Keyboard With Multiple ExtraKey",button6:"Show Keyboard With Random Key Order",bindValue:"Bind Value",clickToInput:"Click To Input",extraKey:"IdNumber Keyboard",multiExtraKey:"Multiple ExtraKey",randomKeyOrder:"Random Key Order"}}),m=b(""),u=b("default"),a=p=>x(`${l("input")}: ${p}`),i=()=>x(l("delete"));return(p,t)=>{const y=E("demo-block");return v(),F(k,null,[n(y,{card:""},{default:j(()=>[n(e(d),{"is-link":"",title:e(l)("button1"),onTouchstart:t[0]||(t[0]=s(o=>u.value="default",["stop"]))},null,8,["title"]),n(e(d),{"is-link":"",title:e(l)("button2"),onTouchstart:t[1]||(t[1]=s(o=>u.value="custom",["stop"]))},null,8,["title"]),n(e(d),{"is-link":"",title:e(l)("button3"),onTouchstart:t[2]||(t[2]=s(o=>u.value="extraKey",["stop"]))},null,8,["title"]),n(e(d),{"is-link":"",title:e(l)("button4"),onTouchstart:t[3]||(t[3]=s(o=>u.value="title",["stop"]))},null,8,["title"]),n(e(d),{"is-link":"",title:e(l)("button5"),onTouchstart:t[4]||(t[4]=s(o=>u.value="multiExtraKey",["stop"]))},null,8,["title"]),n(e(d),{"is-link":"",title:e(l)("button6"),onTouchstart:t[5]||(t[5]=s(o=>u.value="randomKeyOrder",["stop"]))},null,8,["title"]),n(e(w),{modelValue:m.value,"onUpdate:modelValue":t[6]||(t[6]=o=>m.value=o),readonly:"",clickable:"",label:e(l)("bindValue"),placeholder:e(l)("clickToInput"),onTouchstart:t[7]||(t[7]=s(o=>u.value="bindValue",["stop"]))},null,8,["modelValue","label","placeholder"])]),_:1}),n(e(r),{show:u.value==="default",onBlur:t[8]||(t[8]=o=>u.value=""),onInput:a,onDelete:i},null,8,["show"]),n(e(r),{show:u.value==="custom","close-button-text":e(l)("close"),theme:"custom","extra-key":".",onBlur:t[9]||(t[9]=o=>u.value=""),onInput:a,onDelete:i},null,8,["show","close-button-text"]),n(e(r),{show:u.value==="extraKey","close-button-text":e(l)("close"),"extra-key":"X",onBlur:t[10]||(t[10]=o=>u.value=""),onInput:a,onDelete:i},null,8,["show","close-button-text"]),n(e(r),{show:u.value==="title","close-button-text":e(l)("close"),title:e(l)("title"),"extra-key":".",onBlur:t[11]||(t[11]=o=>u.value=""),onInput:a,onDelete:i},null,8,["show","close-button-text","title"]),n(e(r),{show:u.value==="multiExtraKey","close-button-text":e(l)("close"),theme:"custom","extra-key":["00","."],onBlur:t[12]||(t[12]=o=>u.value=""),onInput:a,onDelete:i},null,8,["show","close-button-text","extra-key"]),(v(),K(e(r),{key:0,show:u.value==="randomKeyOrder","random-key-order":"",onBlur:t[13]||(t[13]=o=>u.value=""),onInput:a,onDelete:i},null,8,["show"])),n(e(r),{modelValue:m.value,"onUpdate:modelValue":t[14]||(t[14]=o=>m.value=o),show:u.value==="bindValue",maxlength:"6",onBlur:t[15]||(t[15]=o=>u.value="")},null,8,["modelValue","show"])],64)}}});export{Y as default};
