import{r as l,j as s}from"./index-lAdd22LX.js";import{B as o}from"./index-BWhUfP4V.js";const x=()=>{const[i,r]=l.useState(1),t=e=>{e!==i&&e>0&&e<=10&&r(e)},a=()=>{i<10&&r(i+1)},c=()=>{const e=[];for(let n=1;n<=4;n++)e.push(s.jsx("li",{className:i===n?"active":"",children:s.jsx("a",{href:"#",onClick:()=>t(n),children:n})},`page-${n}`));return e.push(s.jsx("li",{children:s.jsx("span",{children:"..."})},"dots")),e.push(s.jsx("li",{className:i===10?"active":"",children:s.jsx("a",{href:"#",onClick:()=>t(10),children:"10"})},"page-10")),e};return s.jsx("nav",{children:s.jsxs("ul",{className:"pagination",children:[c(),s.jsx("li",{children:s.jsx(o,{onClick:a,type:"primary",children:"Следующая"})})]})})};export{x as default};
