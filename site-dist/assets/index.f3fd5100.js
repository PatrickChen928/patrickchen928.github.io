import{c as q,D as ue,h as re,x as B}from"./use-translate.f00dec62.js";import{t as A,n as K,c as E,w as U}from"./with-install.8c05f7e9.js";import{u as ve}from"./use-touch.8bab3413.js";import{u as F}from"./use-expose.e5d76f3d.js";import{o as fe}from"./on-popup-reopen.f4e064e0.js";import{i as R,d as I}from"./utils.51167448.js";import{u as W}from"./index.c020d7aa.js";import{C as $,z as G,D as J,B as h,x as T,E as Q,P as he,N as de,O as me,e as z,q as we}from"./vue-libs.dea03542.js";import{u as ge}from"./useChildren.3c3a8afb.js";import{u as pe}from"./useParent.e8f23fef.js";function be(){var t=$(R?window.innerWidth:0),v=$(R?window.innerHeight:0),r=()=>{t.value=window.innerWidth,v.value=window.innerHeight};return W("resize",r),W("orientationchange",r),{width:t,height:v}}function ye(){var t=$("visible"),v=()=>{R&&(t.value=document.hidden?"hidden":"visible")};return v(),W("visibilitychange",v),t}const[Z,D]=q("swipe"),xe={loop:A,width:K,height:K,vertical:Boolean,autoplay:E(0),duration:E(500),touchable:A,lazyRender:Boolean,initialSwipe:E(0),indicatorColor:String,showIndicators:A,stopPropagation:A},ee=Symbol(Z);var Se=G({name:Z,props:xe,emits:["change"],setup(t,{emit:v,slots:r}){const f=$(),e=J({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),c=ve(),C=be(),{children:d,linkChildren:M}=ge(ee),a=h(()=>d.length),l=h(()=>e[t.vertical?"height":"width"]),u=h(()=>t.vertical?c.deltaY.value:c.deltaX.value),m=h(()=>e.rect?(t.vertical?e.rect.height:e.rect.width)-l.value*a.value:0),O=h(()=>Math.ceil(Math.abs(m.value)/l.value)),b=h(()=>a.value*l.value),P=h(()=>(e.active+a.value)%a.value),Y=h(()=>{const i=t.vertical?"vertical":"horizontal";return c.direction.value===i}),te=h(()=>{const i={transitionDuration:`${e.swiping?0:t.duration}ms`,transform:`translate${t.vertical?"Y":"X"}(${e.offset}px)`};if(l.value){const o=t.vertical?"height":"width",n=t.vertical?"width":"height";i[o]=`${b.value}px`,i[n]=t[n]?`${t[n]}px`:""}return i}),ie=i=>{const{active:o}=e;return i?t.loop?B(o+i,-1,a.value):B(o+i,0,O.value):o},H=(i,o=0)=>{let n=i*l.value;t.loop||(n=Math.min(n,-m.value));let s=o-n;return t.loop||(s=B(s,m.value,0)),s},w=({pace:i=0,offset:o=0,emitChange:n})=>{if(a.value<=1)return;const{active:s}=e,g=ie(i),S=H(g,o);if(t.loop){if(d[0]&&S!==m.value){const k=S<m.value;d[0].setOffset(k?b.value:0)}if(d[a.value-1]&&S!==0){const k=S>0;d[a.value-1].setOffset(k?-b.value:0)}}e.active=g,e.offset=S,n&&g!==s&&v("change",P.value)},j=()=>{e.swiping=!0,e.active<=-1?w({pace:a.value}):e.active>=a.value&&w({pace:-a.value})},ae=()=>{j(),c.reset(),I(()=>{e.swiping=!1,w({pace:-1,emitChange:!0})})},N=()=>{j(),c.reset(),I(()=>{e.swiping=!1,w({pace:1,emitChange:!0})})};let X;const y=()=>clearTimeout(X),x=()=>{y(),t.autoplay>0&&a.value>1&&(X=setTimeout(()=>{N(),x()},+t.autoplay))},p=(i=+t.initialSwipe)=>{var o,n;if(!!f.value){if(!ue(f)){const s={width:f.value.offsetWidth,height:f.value.offsetHeight};e.rect=s,e.width=+((o=t.width)!=null?o:s.width),e.height=+((n=t.height)!=null?n:s.height)}a.value&&(i=Math.min(a.value-1,i)),e.active=i,e.swiping=!0,e.offset=H(i),d.forEach(s=>{s.setOffset(0)}),x()}},_=()=>p(e.active);let V;const ne=i=>{!t.touchable||(c.start(i),V=Date.now(),y(),j())},oe=i=>{t.touchable&&e.swiping&&(c.move(i),Y.value&&(re(i,t.stopPropagation),w({offset:u.value})))},L=()=>{if(!t.touchable||!e.swiping)return;const i=Date.now()-V,o=u.value/i;if((Math.abs(o)>.25||Math.abs(u.value)>l.value/2)&&Y.value){const s=t.vertical?c.offsetY.value:c.offsetX.value;let g=0;t.loop?g=s>0?u.value>0?-1:1:0:g=-Math[u.value>0?"ceil":"floor"](u.value/l.value),w({pace:g,emitChange:!0})}else u.value&&w({pace:0});e.swiping=!1,x()},se=(i,o={})=>{j(),c.reset(),I(()=>{let n;t.loop&&i===a.value?n=e.active===0?0:i:n=i%a.value,o.immediate?I(()=>{e.swiping=!1}):e.swiping=!1,w({pace:n-e.active,emitChange:!0})})},ce=(i,o)=>{const n=o===P.value,s=n?{backgroundColor:t.indicatorColor}:void 0;return z("i",{style:s,class:D("indicator",{active:n})},null)},le=()=>{if(r.indicator)return r.indicator({active:P.value});if(t.showIndicators&&a.value>1)return z("div",{class:D("indicators",{vertical:t.vertical})},[Array(a.value).fill("").map(ce)])};return F({prev:ae,next:N,state:e,resize:_,swipeTo:se}),M({size:l,props:t,count:a,activeIndicator:P}),T(()=>t.initialSwipe,i=>p(+i)),T(a,()=>p(e.active)),T(()=>t.autoplay,x),T([C.width,C.height],_),T(ye(),i=>{i==="visible"?x():y()}),Q(p),he(()=>p(e.active)),fe(()=>p(e.active)),de(y),me(y),()=>{var i;return z("div",{ref:f,class:D()},[z("div",{style:te.value,class:D("track",{vertical:t.vertical}),onTouchstart:ne,onTouchmove:oe,onTouchend:L,onTouchcancel:L},[(i=r.default)==null?void 0:i.call(r)]),le()])}}});const Ee=U(Se),[Te,ze]=q("swipe-item");var Ce=G({name:Te,setup(t,{slots:v}){let r;const f=J({offset:0,inited:!1,mounted:!1}),{parent:e,index:c}=pe(ee);if(!e)return;const C=h(()=>{const a={},{vertical:l}=e.props;return e.size.value&&(a[l?"height":"width"]=`${e.size.value}px`),f.offset&&(a.transform=`translate${l?"Y":"X"}(${f.offset}px)`),a}),d=h(()=>{const{loop:a,lazyRender:l}=e.props;if(!l||r)return!0;if(!f.mounted)return!1;const u=e.activeIndicator.value,m=e.count.value-1,O=u===0&&a?m:u-1,b=u===m&&a?0:u+1;return r=c.value===u||c.value===O||c.value===b,r}),M=a=>{f.offset=a};return Q(()=>{we(()=>{f.mounted=!0})}),F({setOffset:M}),()=>{var a;return z("div",{class:ze(),style:C.value},[d.value?(a=v.default)==null?void 0:a.call(v):null])}}});const Re=U(Ce);export{Ee as S,Re as a,be as u};
