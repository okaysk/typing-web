(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[226],{3782:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TypingPracticePage",function(){return n(5804)}])},5804:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}var i="abcdefghijklmnopqrstuvwxyz ",l="\u3131\u3134\u3137\u3139\u3141\u3142\u3145\u3147\u3148\u314a\u314b\u314c\u314d\u314e ",a=[""],d="undefined"!==typeof Audio&&new Audio("/sound/correct_sound.mov"),u="undefined"!==typeof Audio&&new Audio("/sound/incorrect_sound.mp3");t.default=function(){var e=(0,o.useState)([""]),t=e[0],n=e[1],x=(0,o.useState)([""]),f=x[0],b=x[1],h=(0,o.useState)(1),w=h[0],v=h[1],g=(0,o.useState)([!1,""]),m=g[0],j=g[1],p=(0,o.useState)("eng"),y=p[0],N=p[1],k=(0,o.useState)(!0),C=k[0],L=k[1],E=(0,o.useRef)([]),_=function(e){e.pause(),e.play()},S=function(e){var r=e.target.value,o=r.substr(r.length-1);if(console.dir(e.target),console.log("inputValue: ".concat(r)),console.log("lastChar : ".concat(o)),r==f[w]){if(_(d),5==w)return L(!0);E.current[w].focus(),n(c({},t,s({},w,o))),j(c({},m,s({},w,"correct"))),v(w+1)}else _(u),n(c({},t,s({},w,o))),j(c({},m,s({},w,"incorrect"))),setTimeout((function(){n(c({},t,s({},w,""))),j(c({},m,s({},w,"")))}),400)};return(0,o.useEffect)((function(){if(console.log("mounting.."),C){console.log("\tReset the words...."),a=[""],j([!1,!1]),n([""]),b([""]),v(1);for(var e="kor"==y?l:i,t=0;t<5;++t)a.push(e.charAt(Math.floor(Math.random()*e.length))),b(a);L(!1)}console.log("\tNo Reset"),E.current[0].focus()}),[C]),(0,o.useEffect)((function(){a=[""],j([!1,!1]),n([""]),b([""]),v(1),console.log("language: ".concat(y));var e="kor"==y?l:i;console.log("words: ".concat(e));for(var t=0;t<5;++t)a.push(e.charAt(Math.floor(Math.random()*e.length))),b(a);console.log("text: ".concat(a))}),[y]),(0,o.useEffect)((function(){console.log("THIS IS THE INPUT USE EFFECT --- 0: ".concat(t[0]," 1: ").concat(t[1]," 2: ").concat(t[2]))}),[t]),(0,r.jsxs)("div",{className:"page",onClick:function(){var e;null===(e=E.current[w-1])||void 0===e||e.focus()},children:[(0,r.jsxs)("div",{className:"header pt-10 text-center text-5xl",children:[(0,r.jsx)("span",{className:"font-bold text-blue-500 underline",children:"Typing Master"}),(0,r.jsxs)("div",{children:["index : ",w]})]}),(0,r.jsx)("div",{children:f}),(0,r.jsxs)("div",{className:"bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex mt-10",children:[(0,r.jsx)("button",{"data-tooltip-tagrget":"tooltip-default",className:"".concat("kor"==y&&"text-white bg-blue-300",' " inline-flex items-center transition-colors duration-300 ease-in focus:outline-none  rounded-l-full px-4 py-2 active"'),id:"grid",onClick:function(){return N("kor")},children:(0,r.jsx)("span",{children:"\ud83c\uddf0\ud83c\uddf7 Korean"})}),(0,r.jsx)("button",{className:"".concat("eng"==y&&"text-white bg-blue-300",' " inline-flex items-center transition-colors duration-300 ease-in focus:outline-none  rounded-r-full px-4 py-2 active"'),id:"list",onClick:function(){return N("eng")},children:(0,r.jsx)("span",{children:"\ud83c\uddfa\ud83c\uddf8 English"})})]}),(0,r.jsx)("button",{className:"text-red-300 py-2 px-4",onClick:function(){_(u)},children:"Sound Check"}),(0,r.jsxs)("div",{className:"flex gap-14 mt-10",children:[(0,r.jsxs)("div",{className:"word-box",children:[(0,r.jsx)("div",{className:"".concat(w>1?"visible":"invisible"," word-box-check text-green-400 flex justify-center mb-1 relative "),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,r.jsx)("input",{className:"".concat(m[1]," word-box-input border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute caret-transparent"),value:t[1]||"",onChange:S,ref:function(e){return E.current[0]=e}}),(0,r.jsx)("div",{className:"word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400",children:f[1]}),(0,r.jsx)("div",{className:"".concat(1==w?"visible":"invisible"," ").concat("incorrect"==m[1]?"bg-[#ff7f97]":""," word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg")})]}),(0,r.jsxs)("div",{className:"word-box",children:[(0,r.jsx)("div",{className:"".concat(w>2?"visible":"invisible"," word-box-check text-green-400 flex justify-center mb-1 relative "),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,r.jsx)("input",{className:"".concat(m[2]," word-box-input border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute caret-transparent"),value:t[2]||"",onChange:S,ref:function(e){return E.current[1]=e}}),(0,r.jsx)("div",{className:"word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400",children:f[2]}),(0,r.jsx)("div",{className:"".concat(2==w?"visible":"invisible"," ").concat("incorrect"==m[2]?"bg-[#ff7f97]":""," word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg")})]}),(0,r.jsxs)("div",{className:"word-box",children:[(0,r.jsx)("div",{className:"".concat(w>3?"visible":"invisible"," word-box-check text-green-400 flex justify-center mb-1 relative "),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,r.jsx)("input",{className:"".concat(m[3]," word-box-input border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute caret-transparent"),value:t[3]||"",onChange:S,ref:function(e){return E.current[2]=e}}),(0,r.jsx)("div",{className:"word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400",children:f[3]}),(0,r.jsx)("div",{className:"".concat(3==w?"visible":"invisible"," ").concat("incorrect"==m[3]?"bg-[#ff7f97]":""," word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg")})]}),(0,r.jsxs)("div",{className:"word-box",children:[(0,r.jsx)("div",{className:"".concat(w>4?"visible":"invisible"," word-box-check text-green-400 flex justify-center mb-1 relative "),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,r.jsx)("input",{className:"".concat(m[4]," word-box-input border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute caret-transparent"),value:t[4]||"",onChange:S,ref:function(e){return E.current[3]=e}}),(0,r.jsx)("div",{className:"word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400",children:f[4]}),(0,r.jsx)("div",{className:"".concat(4==w?"visible":"invisible"," ").concat("incorrect"==m[4]?"bg-[#ff7f97]":""," word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg")})]}),(0,r.jsxs)("div",{className:"word-box",children:[(0,r.jsx)("div",{className:"".concat(w>5?"visible":"invisible"," word-box-check text-green-400 flex justify-center mb-1 relative "),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,r.jsx)("input",{className:"".concat(m[5]," word-box-input border-2 w-32 h-32 rounded-md flex justify-center items-center text-center text-7xl opacity-80 absolute caret-transparent"),value:t[5]||"",onChange:S,ref:function(e){return E.current[4]=e}}),(0,r.jsx)("div",{className:"word-box-answer w-32 h-32 flex justify-center items-center text-center text-7xl text-gray-400",children:f[5]}),(0,r.jsx)("div",{className:"".concat(5==w?"visible":"invisible"," ").concat("incorrect"==m[5]?"bg-[#ff7f97]":""," word-box-border bg-blue-400 h-1 w-32 mt-4 rounded-lg")})]})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=3782,e(e.s=t);var t}));var t=e.O();_N_E=t}]);