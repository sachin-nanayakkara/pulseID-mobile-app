import{d as i,u as W,a as H,b as A,r as s,j as t}from"./index-OBIZujuf.js";import{C as G,H as _}from"./heart-CoNpVinh.js";import"./createLucideIcon-CItHT9AT.js";const V=i.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
    height: 56px;
`,w=i.button`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);

    &:active {
        background: rgba(255, 255, 255, 0.85);
    }

    svg {
        width: 20px;
        height: 20px;
        color: #1a1a1a;
    }
`,Y=i(w)`
    position: absolute;
    bottom: 7rem;
    right: 1rem;
    z-index: 20;
    background: rgba(0, 0, 0, 0.6);

    svg {
        color: white;
    }

    &:hover {
        background: rgba(0, 0, 0, 0.8);
    }

    @media (min-width: 768px) {
        bottom: 1rem;
    }
`,q=i.h1`
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    position: absolute;
    top: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
`,J=i.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
    height: 100vh;

    @media (min-width: 768px) {
        max-width: 32rem;
        height: auto;
    }
`,K=i.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
    touch-action: pan-y pinch-zoom;

    @media (min-width: 768px) {
        height: 24rem;
    }
`,Q=i.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform ${o=>o.$sliding?"0ms":"300ms"} ease-in-out;
    transform: translateX(${o=>o.$offset}px);
    display: flex;
    align-items: center;
    justify-content: center;
`,U=i.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (max-width: 767px) {
        max-height: 100vh;
        object-position: center;
    }

    @media (min-width: 768px) {
        object-fit: cover;
    }
`,Z=i.div`
    position: fixed;
    bottom: 6rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    z-index: 10;

    @media (min-width: 768px) {
        position: absolute;
    }
`,ee=i.button`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    transition: background-color 200ms;
    background-color: ${o=>o.$active?"white":"rgb(156 163 175)"};
    border: none;
    padding: 0;
    cursor: pointer;
`,te=i.div`
    position: fixed;
    bottom: 10rem;
    left: 0;
    right: 0;
    padding: 0 1rem;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);

    @media (min-width: 768px) {
        position: absolute;
        background: none;
    }
`,ie=i.div`
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding: 0.5rem 0;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,ne=i.button`
    flex-shrink: 0;
    position: relative;
    border: none;
    padding: 0;
    cursor: pointer;
    ${o=>o.$active&&"outline: 2px solid white; outline-offset: 2px;"}
`,oe=i.img`
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
        width: 4rem;
        height: 4rem;
    }
`,re=i.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`,se=i.span`
    color: white;
    font-size: 0.875rem;
`,ae=i.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 1rem;
    backdrop-filter: blur(4px);

    @media (min-width: 768px) {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: none;
    }
`,ce=i.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 32rem;
    margin: 0 auto;
`,le=i.div`
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    background-color: rgb(229 231 235);
    flex-shrink: 0;
`,de=i.div`
    flex: 1;
`,he=i.p`
    font-weight: 500;
    margin: 0;
`,me=i.p`
    font-size: 0.875rem;
    margin: 0.25rem 0 0;
`,$=i.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    backdrop-filter: blur(4px);

    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }

    ${o=>o.$position==="left"?"left: 1rem;":"right: 1rem;"}

    @media (max-width: 767px) {
        display: none;
    }
`,pe=()=>{const o=W(),{id:D}=H(),r=A(e=>e.images.items),[h,l]=s.useState(0),[m,j]=s.useState(null),[k,y]=s.useState(null),[d,p]=s.useState(!1),[E,g]=s.useState(0),[u,T]=s.useState(!1),b=s.useRef(null),[x,z]=s.useState(!1),B=3e3,C=50;s.useEffect(()=>{const e=r.findIndex(n=>n.id===Number(D));v(e)},[]),s.useEffect(()=>{let e;return(()=>{e=setInterval(()=>{!u&&!d&&l(a=>a<r.length-1?a+1:0)},B)})(),()=>{e&&clearInterval(e)}},[u,d,r.length]),s.useEffect(()=>{d&&T(!0)},[d]);const N=()=>{T(!u)},v=e=>{d||l(e)},P=e=>{j(e.touches[0].clientX),p(!0),g(0)},M=e=>{var S;if(!m)return;const n=e.touches[0].clientX,a=m-n,c=((S=b.current)==null?void 0:S.offsetWidth)||0,f=Math.max(Math.min(a,c),-c);g(-f),y(n)},O=()=>{if(!m||!k){p(!1),g(0);return}const e=m-k,n=e>C,a=e<-C;n&&h<r.length-1?l(c=>c+1):a&&h>0&&l(c=>c-1),j(null),y(null),p(!1),g(0)},R=()=>{l(e=>e>0?e-1:r.length-1)},L=()=>{l(e=>e<r.length-1?e+1:0)},X=()=>{o("/")},F=()=>{z(!x)},I=e=>{var f;const n=(e-h)*100,a=((f=b.current)==null?void 0:f.offsetWidth)||0,c=E/a*100;return`${n+c}%`};return t.jsxs(J,{children:[t.jsxs(V,{children:[t.jsx(w,{onClick:X,"aria-label":"Go back",children:t.jsx(G,{size:24})}),t.jsx(w,{onClick:F,"aria-label":x?"Remove from favorites":"Add to favorites",children:t.jsx(_,{fill:x?"#000":"none"})})]}),t.jsx(q,{children:"Dessert"}),t.jsx(K,{ref:b,onTouchStart:P,onTouchMove:M,onTouchEnd:O,children:r.map((e,n)=>t.jsx(Q,{$sliding:d,$offset:parseFloat(I(n)),style:{transform:`translateX(${I(n)})`},children:t.jsx(U,{src:e.images,alt:e.name,draggable:"false"})},e.id))}),t.jsx(Y,{onClick:N,"aria-label":u?"Resume slideshow":"Pause slideshow"}),t.jsx($,{onClick:R,$position:"left","aria-label":"Previous image",children:"←"}),t.jsx($,{onClick:L,$position:"right","aria-label":"Next image",children:"→"}),t.jsx(Z,{children:r.map((e,n)=>t.jsx(ee,{$active:h===n,onClick:()=>v(n),"aria-label":`Go to slide ${n+1}`},n))}),t.jsx(te,{children:t.jsx(ie,{children:r.map((e,n)=>t.jsxs(ne,{onClick:()=>v(n),$active:h===n,children:[t.jsx(oe,{src:e.images,alt:e.name}),n===r.length-1&&t.jsx(re,{children:t.jsxs(se,{children:["+",r.length]})})]},e.id))})}),t.jsx(ae,{children:t.jsxs(ce,{children:[t.jsx(le,{}),t.jsxs(de,{children:[t.jsx(he,{children:"Parfaiteria Bel"}),t.jsx(me,{children:"Enjoy an instant 10% discount on purchases of ¥8,000 with your card"})]})]})})]})};export{pe as default};
