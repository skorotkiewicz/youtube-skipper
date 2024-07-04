(()=>{"use strict";var e={4228:function(){},8503:function(e,t,r){r(6330),r(8221),r(5863),r(9560),r(9734),r(9929),r(6301),r(5123),r(5646),r(9774);var n=r(5893),i=r(7294),o=r(3913),a=r(9250),s=r(5145);t.Z=()=>{let[e,t]=(0,i.useState)(""),[r,u]=(0,i.useState)([{start:"",end:""}]),[l,c]=(0,i.useState)(""),[d,p]=(0,i.useState)(""),[h,f]=(0,i.useState)(!1),v=(0,i.useRef)(null),b=(0,a.s0)(),j=(0,a.TH)();(0,i.useEffect)(()=>{let e=new URLSearchParams(j.search),r=e.get("v"),n=e.getAll("skip");r&&(t(r),p(`video/?${e.toString()}`)),n.length>0&&u(n.map(e=>{let[t,r]=e.split("-");return{start:t,end:r}}))},[]);let x=(t,n,i)=>{let o=[...r];o[t][n]=i,u(o),m(e,o)},g=t=>{let n=r.filter((e,r)=>r!==t);u(n),m(e,n)},m=(e,t)=>{let r=new URLSearchParams;e&&r.append("v",e),t.forEach(e=>{e.start&&e.end&&r.append("skip",`${e.start}-${e.end}`)}),p(`video/?${r.toString()}`),b(`?${r.toString()}`,{replace:!0})},y=()=>{if(!v.current)return;let e=v.current.getCurrentTime();for(let t of(c(`Current: ${e.toFixed(2)}`),r)){let r=(0,s.Z)(t.start),n=(0,s.Z)(t.end);if(e>=r&&e<n){v.current.seekTo(n),c(e=>`${e} - Skipped from ${t.start} to ${t.end}!`);break}}};return(0,n.jsxs)("div",{className:"youtube-skipper",children:[(0,n.jsx)("h1",{children:"YouTube Video Skipper"}),(0,n.jsx)("div",{className:"input-group",children:(0,n.jsxs)("label",{children:["YouTube URL:",(0,n.jsx)("input",{type:"text",onChange:e=>{let n=e.target.value.split("v=")[1];t(n),m(n,r)},value:`https://www.youtube.com/watch?v=${e}`,placeholder:"https://www.youtube.com/watch?v=..."})]})}),r.map((e,t)=>(0,n.jsxs)("div",{className:"skip-input",children:[(0,n.jsxs)("label",{children:["Skip Start (MM:SS):",(0,n.jsx)("input",{type:"text",value:e.start,onChange:e=>x(t,"start",e.target.value),placeholder:"00:00"})]}),(0,n.jsxs)("label",{children:["Skip End (MM:SS):",(0,n.jsx)("input",{type:"text",value:e.end,onChange:e=>x(t,"end",e.target.value),placeholder:"00:00"})]}),(0,n.jsx)("button",{onClick:()=>g(t),children:"Remove"})]},t)),(0,n.jsx)("button",{onClick:()=>{u([...r,{start:"",end:""}])},children:"Add New Skip"}),e&&(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)(o.Z,{videoId:e,opts:{width:"100%",height:"100%",playerVars:{autoplay:1}},onReady:e=>{v.current=e.target,setInterval(()=>y(),1e3)}})}),(0,n.jsxs)("div",{className:"share-link",children:[(0,n.jsx)("p",{children:"Share this link:"}),(0,n.jsxs)("div",{className:"tooltip-container",children:[(0,n.jsx)("input",{type:"text",readOnly:!0,value:`${window.location.origin}${window.location.pathname}${d}`,onClick:()=>{let e=`${window.location.origin}${window.location.pathname}${d}`;navigator.clipboard.writeText(e).then(()=>{f(!0),setTimeout(()=>{f(!1)},1500)})}}),h&&(0,n.jsx)("div",{className:"tooltip",children:"Copied!"})]})]}),(0,n.jsx)("div",{className:"debug",children:(0,n.jsxs)("p",{children:["Debug info: ",l]})}),(0,n.jsx)("div",{className:"footer",children:(0,n.jsx)("a",{href:"https://github.com/skorotkiewicz/youtube-skipper",target:"_blank",children:"GitHub"})})]})}},5145:function(e,t,r){r.d(t,{Z:function(){return n}}),r(9560),r(9734);let n=e=>{let[t,r]=e.split(":").map(Number);return 60*t+r}},7515:function(e,t,r){var n=r(5893),i=r(7294),o=r(745),a=r(9655),s=r(9250),u=r(8503),l=r(7630),c=r(3972),d=r(903);r(4228),o.createRoot(document.getElementById("root")).render((0,n.jsx)(i.StrictMode,{children:(0,n.jsx)(a.VK,{basename:"/youtube-skipper",children:(0,n.jsxs)(s.Z5,{children:[(0,n.jsx)(s.AW,{index:!0,element:(0,n.jsx)(u.Z,{})}),(0,n.jsx)(s.AW,{path:"video",element:(0,n.jsx)(l.Z,{})}),(0,n.jsx)(s.AW,{path:"about",element:(0,n.jsx)(c.Z,{})}),(0,n.jsx)(s.AW,{path:"*",element:(0,n.jsx)(d.Z,{})})]})})}))},3972:function(e,t,r){var n=r(5893);r(7294);t.Z=()=>(0,n.jsxs)("div",{className:"youtube-skipper",children:[(0,n.jsx)("h2",{children:"About This Project"}),(0,n.jsx)("h3",{children:"YouTube Skipper"}),(0,n.jsx)("p",{children:"The YouTube Skipper is a web application designed to enhance your YouTube video watching experience by automatically skipping specified segments of a video. This is particularly useful for bypassing ads, intros, or any other uninteresting parts of the video."})]})},903:function(e,t,r){var n=r(5893);t.Z=()=>(0,n.jsx)("div",{children:"E404"})},7630:function(e,t,r){r(6330),r(8221),r(5863),r(9560),r(9734);var n=r(5893),i=r(7294),o=r(3913),a=r(5145);t.Z=()=>{let[e,t]=(0,i.useState)(""),[r,s]=(0,i.useState)([{start:"",end:""}]),[u,l]=(0,i.useState)(""),c=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=new URLSearchParams(location.search),r=e.get("v"),n=e.getAll("skip");r&&t(r),n.length>0&&s(n.map(e=>{let[t,r]=e.split("-");return{start:t,end:r}}))},[]);let d=()=>{if(!c.current)return;let e=c.current.getCurrentTime();for(let t of(l(`Current: ${e.toFixed(2)}`),r)){let r=(0,a.Z)(t.start),n=(0,a.Z)(t.end);if(e>=r&&e<n){c.current.seekTo(n),l(e=>`${e} - Skipped from ${t.start} to ${t.end}!`);break}}};return(0,n.jsxs)("div",{className:"youtube-skipper",children:[e&&(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)(o.Z,{videoId:e,opts:{width:"100%",height:"100%",playerVars:{autoplay:1}},onReady:e=>{c.current=e.target,setInterval(()=>d(),1e3)}})}),(0,n.jsx)("div",{className:"debug",children:(0,n.jsxs)("p",{children:["Debug info: ",u]})})]})}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,i){if(1&i&&(n=this(n)),8&i||"object"==typeof n&&n&&(4&i&&n.__esModule||16&i&&"function"==typeof n.then))return n;var o=Object.create(null);r.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(function(e){a[e]=function(){return n[e]}});return a.default=function(){return n},r.d(o,a),o}})(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];r.O=function(t,n,i,o){if(n){o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[n,i,o];return}for(var s=1/0,a=0;a<e.length;a++){for(var n=e[a][0],i=e[a][1],o=e[a][2],u=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every(function(e){return r.O[e](n[l])})?n.splice(l--,1):(u=!1,o<s&&(s=o));if(u){e.splice(a--,1);var c=i();void 0!==c&&(t=c)}}return t}})(),(()=>{var e={980:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i=n[0],o=n[1],a=n[2],s,u,l=0;if(i.some(function(t){return 0!==e[t]})){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(a)var c=a(r)}for(t&&t(n);l<i.length;l++)u=i[l],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(c)},n=self.webpackChunkyoutube=self.webpackChunkyoutube||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,["126","361","118","335"],function(){return r("7515")});n=r.O(n)})();