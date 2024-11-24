import{r as i}from"./index.DhYZZe0J.js";var m={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=i,p=Symbol.for("react.element"),h=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,g=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function c(t,r,a){var e,n={},l=null,d=null;a!==void 0&&(l=""+a),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(d=r.ref);for(e in r)f.call(r,e)&&!y.hasOwnProperty(e)&&(n[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:p,type:t,key:l,ref:d,props:n,_owner:g.current}}s.Fragment=h;s.jsx=c;s.jsxs=c;m.exports=s;var o=m.exports;function x(){const[t,r]=i.useState(()=>typeof window<"u"?localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):"light");i.useEffect(()=>{t==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",t);const e=document.querySelector('meta[name="theme-color"]');e&&e.setAttribute("content",t==="dark"?"#111827":"#ffffff")},[t]);const a=()=>{r(e=>e==="light"?"dark":"light")};return o.jsxs("button",{onClick:a,className:`relative inline-flex items-center justify-center w-10 h-10 rounded-xl
        bg-white dark:bg-gray-800 
        text-gray-500 dark:text-gray-400
        hover:bg-gray-50 dark:hover:bg-gray-700/90
        border border-gray-200 dark:border-gray-700/50
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-in-out
        group
        hover:-translate-y-0.5`,"aria-label":"Toggle theme",children:[o.jsxs("span",{className:"relative",children:[o.jsx("svg",{className:`w-5 h-5 transition-all duration-300 transform
            ${t==="dark"?"rotate-0 scale-100 opacity-100":"rotate-90 scale-0 opacity-0"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"})}),o.jsx("svg",{className:`w-5 h-5 transition-all duration-300 transform absolute top-0 left-0
            ${t==="light"?"rotate-0 scale-100 opacity-100":"-rotate-90 scale-0 opacity-0"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})]}),o.jsx("span",{className:"absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-colors duration-300"}),o.jsx("span",{className:`absolute -bottom-px left-1/2 w-8 h-0.5 -translate-x-1/2 rounded-full
        bg-primary/0 group-hover:bg-primary/40 dark:group-hover:bg-primary/60
        transition-all duration-300 scale-0 group-hover:scale-100`})]})}export{x as default};
