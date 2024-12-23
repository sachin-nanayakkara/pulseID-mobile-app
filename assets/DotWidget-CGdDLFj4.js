import{d as s,j as e}from"./index-DqqUKkrC.js";const i=s.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
`,n=s.button`
    width: 8px;
    height: 8px;
    border-radius: 10PX;
    transition: all 0.3s ease;
    background-color: ${t=>t.isActive?"#FB923C":"#D1D5DB"};
    border: none;
    padding: 0;
    cursor: pointer;

    &:hover {
        background-color: ${t=>t.isActive?"#FB923C":"#9CA3AF"};
    }
`,d=({total:t,current:a,onDotClick:o})=>e.jsx(i,{children:Array.from({length:t}).map((p,r)=>e.jsx(n,{isActive:r===a,onClick:()=>o==null?void 0:o(r),"aria-label":`Go to slide ${r+1}`},r))});export{d as D};
