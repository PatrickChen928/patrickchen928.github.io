import{c as s,e as g}from"./use-translate.f00dec62.js";import{t as h,w as i}from"./with-install.8c05f7e9.js";import{u as j}from"./useChildren.3c3a8afb.js";import{z as u,e as c,B as l}from"./vue-libs.dea03542.js";import{u as C}from"./use-expose.e5d76f3d.js";import{r as S,u as y}from"./use-route.8c8b61a6.js";import{B as I}from"./index.04cdfa9b.js";import{u as P}from"./useParent.e8f23fef.js";const[d,_]=s("action-bar"),m=Symbol(d);var w=u({name:d,props:{safeAreaInsetBottom:h},setup(a,{slots:o}){const{linkChildren:n}=j(m);return n(),()=>{var e;return c("div",{class:[_(),{"van-safe-area-bottom":a.safeAreaInsetBottom}]},[(e=o.default)==null?void 0:e.call(o)])}}});const V=i(w),[N,k]=s("action-bar-button");var z=u({name:N,props:g({},S,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),setup(a,{slots:o}){const n=y(),{parent:e,index:r}=P(m),f=l(()=>{if(e){const t=e.children[r.value-1];return!(t&&"isButton"in t)}}),p=l(()=>{if(e){const t=e.children[r.value+1];return!(t&&"isButton"in t)}});return C({isButton:!0}),()=>{const{type:t,icon:B,text:b,color:v,loading:x,disabled:A}=a;return c(I,{class:k([t,{last:p.value,first:f.value}]),size:"large",type:t,icon:B,color:v,loading:x,disabled:A,onClick:n},{default:()=>[o.default?o.default():b]})}}});const Y=i(z);export{m as A,V as a,Y as b};
