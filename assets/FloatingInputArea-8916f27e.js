import{a as s,j as r}from"./index-698cf37b.js";function i(){const t=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];let e=[];for(let a=0;a<36;a++)a===8||a===13||a===18||a===23?e[a]="-":e[a]=t[Math.ceil(Math.random()*t.length-1)];return e.join("")}var c=i;const h=({label:t,value:e,onValueChanged:a,className:l,rows:o})=>s("div",{className:"form-floating mb-3",children:[r("textarea",{style:{height:"auto"},className:`form-control ${l??""}`,placeholder:" ",value:e,rows:o??5,onChange:n=>a(n.target.value)}),r("label",{children:t})]});export{h as F,c as u};