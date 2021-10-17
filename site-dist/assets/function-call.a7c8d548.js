import{c as N,h as k,x as T,p as G,z as J,a as K,e as Q}from"./use-translate.f00dec62.js";import{d as z,n as $,t as H,b as ee,c as R,u as oe,m as O,w as te}from"./with-install.8c05f7e9.js";import{m as ae,u as se}from"./mount-component.d70fed1c.js";import{c as ne}from"./interceptor.3309ba7f.js";import{u as ie}from"./use-expose.e5d76f3d.js";import{I as ce}from"./index.bd074117.js";import{a as le,u as re,S as me}from"./index.f3fd5100.js";import{P as ue}from"./index.b6a5a3b7.js";import{u as de}from"./use-touch.8bab3413.js";import{I as fe}from"./index.bdab381d.js";import{L as ve}from"./index.91fa2961.js";import{z as A,D as B,B as W,x as X,e as r,C as ge,E as he,q as we,L as pe,H as E}from"./vue-libs.dea03542.js";const L=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),_=N("image-preview")[1];var xe=A({props:{src:String,show:Boolean,active:Number,minZoom:z($),maxZoom:z($),rootWidth:z(Number),rootHeight:z(Number)},emits:["scale","close"],setup(e,{emit:c}){const o=B({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),l=de(),g=W(()=>{const{rootWidth:t,rootHeight:s}=e,n=s/t;return o.imageRatio>n}),i=W(()=>{const{scale:t,moveX:s,moveY:n,moving:u,zooming:P}=o,j={transitionDuration:P||u?"0s":".3s"};if(t!==1){const V=s/t,U=n/t;j.transform=`scale(${t}, ${t}) translate(${V}px, ${U}px)`}return j}),m=W(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:s}=e,n=g.value?s/o.imageRatio:t;return Math.max(0,(o.scale*n-t)/2)}return 0}),h=W(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:s}=e,n=g.value?s:t*o.imageRatio;return Math.max(0,(o.scale*n-s)/2)}return 0}),w=t=>{t=T(t,+e.minZoom,+e.maxZoom),t!==o.scale&&(o.scale=t,c("scale",{scale:t,index:e.active}))},p=()=>{w(1),o.moveX=0,o.moveY=0},S=()=>{const t=o.scale>1?1:2;w(t),o.moveX=0,o.moveY=0};let x,I,y,Y,d,C;const a=t=>{const{touches:s}=t,{offsetX:n}=l;l.start(t),x=o.moveX,I=o.moveY,C=Date.now(),o.moving=s.length===1&&o.scale!==1,o.zooming=s.length===2&&!n.value,o.zooming&&(y=o.scale,Y=L(t.touches))},f=t=>{const{touches:s}=t;if(l.move(t),(o.moving||o.zooming)&&k(t,!0),o.moving){const{deltaX:n,deltaY:u}=l,P=n.value+x,j=u.value+I;o.moveX=T(P,-m.value,m.value),o.moveY=T(j,-h.value,h.value)}if(o.zooming&&s.length===2){const n=L(s),u=y*n/Y;w(u)}},v=()=>{const{offsetX:t,offsetY:s}=l,n=Date.now()-C,u=250,P=10;t.value<P&&s.value<P&&n<u&&(d?(clearTimeout(d),d=null,S()):d=setTimeout(()=>{c("close"),d=null},u))},M=t=>{let s=!1;(o.moving||o.zooming)&&(s=!0,o.moving&&x===o.moveX&&I===o.moveY&&(s=!1),t.touches.length||(o.zooming&&(o.moveX=T(o.moveX,-m.value,m.value),o.moveY=T(o.moveY,-h.value,h.value),o.zooming=!1),o.moving=!1,x=0,I=0,y=1,o.scale<1&&p())),k(t,s),v(),l.reset()},F=t=>{const{naturalWidth:s,naturalHeight:n}=t.target;o.imageRatio=n/s};return X(()=>e.active,p),X(()=>e.show,t=>{t||p()}),()=>{const t={loading:()=>r(ve,{type:"spinner"},null)};return r(le,{class:_("swipe-item"),onTouchstart:a,onTouchmove:f,onTouchend:M,onTouchcancel:M},{default:()=>[r(fe,{src:e.src,fit:"contain",class:_("image",{vertical:g.value}),style:i.value,onLoad:F},t)]})}}});function Ie(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!pe(e)}const[Pe,b]=N("image-preview"),be=["show","transition","overlayStyle","closeOnPopstate"],Se={show:Boolean,loop:H,images:ee(),minZoom:R(1/3),maxZoom:R(3),overlay:H,closeable:Boolean,showIndex:H,className:oe,closeIcon:O("clear"),transition:String,beforeClose:Function,overlayStyle:Object,swipeDuration:R(300),startPosition:R(0),showIndicators:Boolean,closeOnPopstate:H,closeIconPosition:O("top-right")};var q=A({name:Pe,props:Se,emits:["scale","close","closed","change","update:show"],setup(e,{emit:c,slots:o}){const l=ge(),g=re(),i=B({active:0,rootWidth:0,rootHeight:0}),m=()=>{if(l.value){const a=J(l.value.$el);i.rootWidth=a.width,i.rootHeight=a.height,l.value.resize()}},h=a=>c("scale",a),w=a=>c("update:show",a),p=()=>{ne(e.beforeClose,{args:[i.active],done:()=>w(!1)})},S=a=>{a!==i.active&&(i.active=a,c("change",a))},x=()=>{if(e.showIndex)return r("div",{class:b("index")},[o.index?o.index({index:i.active}):`${i.active+1} / ${e.images.length}`])},I=()=>{if(o.cover)return r("div",{class:b("cover")},[o.cover()])},y=()=>{let a;return r(me,{ref:l,lazyRender:!0,loop:e.loop,class:b("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:S},Ie(a=e.images.map(f=>r(xe,{src:f,show:e.show,active:i.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:i.rootWidth,rootHeight:i.rootHeight,onScale:h,onClose:p},null)))?a:{default:()=>[a]})},Y=()=>{if(e.closeable)return r(ce,{role:"button",name:e.closeIcon,class:b("close-icon",e.closeIconPosition),onClick:p},null)},d=()=>c("closed"),C=(a,f)=>{var v;return(v=l.value)==null?void 0:v.swipeTo(a,f)};return ie({swipeTo:C}),he(m),X([g.width,g.height],m),X(()=>e.startPosition,a=>S(+a)),X(()=>e.show,a=>{const{images:f,startPosition:v}=e;a?(S(+v),we(()=>{m(),C(+v,{immediate:!0})})):c("close",{index:i.active,url:f[i.active]})}),()=>r(ue,E({class:[b(),e.className],overlayClass:b("overlay"),onClosed:d,"onUpdate:show":w},G(e,be)),{default:()=>[Y(),y(),x(),I()]})}});let Z;const ye={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function Ce(){({instance:Z}=ae({setup(){const{state:e,toggle:c}=se(),o=()=>{e.images=[]};return()=>r(q,E(e,{onClosed:o,"onUpdate:show":c}),null)}}))}const D=(e,c=0)=>{if(!!K)return Z||Ce(),e=Array.isArray(e)?{images:e,startPosition:c}:e,Z.open(Q({},ye,e)),Z};D.Component=te(q);D.install=e=>{e.use(D.Component)};export{D as I};
