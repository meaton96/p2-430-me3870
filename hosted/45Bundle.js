"use strict";(self.webpackChunkp2_430_me3870=self.webpackChunkp2_430_me3870||[]).push([[45],{426:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(540);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,r,c,o=[],i=!0,s=!1;try{if(r=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;i=!1}else for(;!(i=(l=r.call(a)).done)&&(o.push(l.value),o.length!==t);i=!0);}catch(e){s=!0,n=e}finally{try{if(!i&&null!=a.return&&(c=a.return(),Object(c)!==c))return}finally{if(s)throw n}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=Array(t);a<t;a++)l[a]=e[a];return l}a(601);var c=300;const o=function(e){var t=e.isActive,a=e.onClose,r=e.onPost,o=e.avatar,i=n((0,l.useState)(""),2),s=i[0],m=i[1],u=n((0,l.useState)(c),2),d=u[0],v=u[1],f=n((0,l.useState)("public"),2),b=f[0],E=f[1];return l.createElement("div",{className:"modal ".concat(t?"is-active":"")},l.createElement("div",{className:"modal-background"}),l.createElement("div",{className:"modal-card"},l.createElement("header",{className:"modal-card-head"},l.createElement("div",{className:"modal-btn-container"},l.createElement("button",{className:"button is-text modal-cancel-btn",onClick:a},"Cancel"),l.createElement("button",{className:"button modal-post-btn",onClick:function(){s.trim()&&(r({text:s,visibility:b}),m(""),E("public"),a())}},"Post"))),l.createElement("section",{className:"modal-card-body"},l.createElement("div",{className:"columns"},l.createElement("div",{className:"column is-narrow"},l.createElement("figure",{className:"image is-96x96"},l.createElement("img",{src:o,alt:"avatar"}))),l.createElement("div",{className:"column"},l.createElement("div",{className:"field"},l.createElement("div",{className:"control"},l.createElement("textarea",{className:"textarea",placeholder:"What's on your mind?",value:s,onChange:function(e){var t=e.target.value.slice(0,c);v(c-t.length),m(t)},maxLength:c}))))),l.createElement("div",{className:"field modal-visibility-dropdown"},l.createElement("label",{className:"label"},l.createElement("div",null,"Visibility"),l.createElement("div",{className:"control ml-2"},l.createElement("div",{className:"select"},l.createElement("select",{name:"visibility",value:b,onChange:function(e){return E(e.target.value)}},l.createElement("option",{value:"public"},"Public"),l.createElement("option",{value:"private"},"Private"),l.createElement("option",{value:"followers-only"},"Followers Only"))))))),l.createElement("footer",{className:"modal-card-foot"},l.createElement("div",{className:"modal-btn-container"},l.createElement("div",{className:"modal-foot-left"}),l.createElement("div",{className:"modal-foot-right"},d)))))}}}]);