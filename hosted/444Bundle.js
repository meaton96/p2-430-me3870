"use strict";(self.webpackChunkkitchen_sync=self.webpackChunkkitchen_sync||[]).push([[444],{444:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(540);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var a=r.Suspense,c=r.lazy,i=c((function(){return n.e(474).then(n.bind(n,474))})),s=c((function(){return n.e(532).then(n.bind(n,532))})),o="discover",u="following",m="myPosts";const f=function(){var e,t,n=(e=r.useState("discover"),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,c,i=[],s=!0,o=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);s=!0);}catch(e){o=!0,l=e}finally{try{if(!s&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(o)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=n[0],f=n[1],d=function(e){switch(e){case 0:default:f(o);break;case 1:f(u);break;case 2:f(m)}};return r.createElement("div",null,r.createElement("header",{className:"feed-header"},r.createElement("div",{className:"is-flex is-justify-content-center py-5"},r.createElement("figure",{className:"image is-48x48"},r.createElement("img",{src:"/assets/img/logo-120p.png",alt:"logo"}))),r.createElement("div",{class:"tabs"},r.createElement("ul",null,r.createElement("li",{class:c===o?"is-active":"",onClick:function(){return d(0)}},r.createElement("a",null,"Discover")),r.createElement("li",{class:c===u?"is-active":"",onClick:function(){return d(1)}},r.createElement("a",null,"Following")),r.createElement("li",{class:c===m?"is-active":"",onClick:function(){return d(2)}},r.createElement("a",null,"My Posts"))))),r.createElement(a,{fallback:r.createElement("div",null,"Loading...")},r.createElement("div",{className:""},function(){switch(c){case o:return r.createElement(s,{key:"discover",endpoint:"/simplePublicPosts"});case u:return r.createElement(i,null);case m:return r.createElement(s,{key:"myPosts",endpoint:"/getPostsForCurrentUser"});default:return r.createElement(s,{key:"discover",endpoint:"/simplePublicPosts"})}}())))}}}]);