import{e as C,f as g}from"./use-translate.f00dec62.js";import{d as P,t as S,u as k,m as z,n as j}from"./with-install.8c05f7e9.js";import{I as x}from"./index.bd074117.js";import{z as B,C as y,B as r,e as t}from"./vue-libs.dea03542.js";const D={name:k,shape:z("round"),disabled:Boolean,iconSize:j,modelValue:k,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var V=B({props:C({},D,{bem:P(Function),role:String,parent:Object,checked:Boolean,bindGroup:S}),emits:["click","toggle"],setup(e,{emit:s,slots:c}){const u=y(),l=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},a=r(()=>l("disabled")||e.disabled),f=r(()=>l("direction")),h=r(()=>{const n=e.checkedColor||l("checkedColor");if(n&&e.checked&&!a.value)return{borderColor:n,backgroundColor:n}}),v=n=>{const{target:i}=n,o=u.value,d=o===i||(o==null?void 0:o.contains(i));!a.value&&(d||!e.labelDisabled)&&s("toggle"),s("click",n)},b=()=>{const{bem:n,shape:i,checked:o}=e,d=e.iconSize||l("iconSize");return t("div",{ref:u,class:n("icon",[i,{disabled:a.value,checked:o}]),style:{fontSize:g(d)}},[c.icon?c.icon({checked:o,disabled:a.value}):t(x,{name:"success",style:h.value},null)])},m=()=>{if(c.default)return t("span",{class:e.bem("label",[e.labelPosition,{disabled:a.value}])},[c.default()])};return()=>{const n=e.labelPosition==="left"?[m(),b()]:[b(),m()];return t("div",{role:e.role,class:e.bem([{disabled:a.value,"label-disabled":e.labelDisabled},f.value]),tabindex:a.value?-1:0,"aria-checked":e.checked,onClick:v},[n])}}});export{V as C,D as c};
