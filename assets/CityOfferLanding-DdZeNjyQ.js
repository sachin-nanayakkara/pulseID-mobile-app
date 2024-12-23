import{d as t,r as a,j as e,u as $,c as D,R as O,e as E,s as A}from"./index-kS6GAqx2.js";import{D as B}from"./DotWidget-CHkBCteM.js";import{c as I}from"./createLucideIcon-kf8OcG8j.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=I("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),M=t.div`
  position: relative;
  border-radius: 0.75rem;
  width: 18rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  overflow: hidden;
  width: 100%;
  height: 100%;
`,L=t.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
`,W=t.div`
  display: flex;
  height: 100%;
  transition: transform 300ms ease-out;
  transform: translateX(${n=>n.$offset}%);
`,N=t.div`
  min-width: 85%;
  padding: 0 0.5rem;
  transition: all 300ms ease;
  opacity: ${n=>n.$active?1:.5};
  transform: scale(${n=>n.$active?1:.9});
`,G=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`,H=t.div`
  position: absolute;
  top: 1rem;
  left: 3.5rem;
  z-index: 10;
  span {
    font-size: 0.875rem;
    color: white;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`,P=t.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  font-size: 1.25rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`,U=t.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  z-index: 10;
`,X=t.h3`
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`,V=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`,q=t.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: rgba(146, 64, 14, 0.8);
  color: white;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: rgba(146, 64, 14, 0.9);
  }
`,F=({images:n=[],title:x="Parfaiteria bel",location:u="Tokyo",rating:b=5,reviews:w=120,onClose:j,onSeeMore:v,onIndexChange:s})=>{const[d,h]=a.useState(0),[i,g]=a.useState(0),[f,p]=a.useState(0),C=()=>-(d*85)+7.5,k=o=>{g(o.touches[0].clientX)},r=o=>{p(o.touches[0].clientX)},y=()=>{if(!i||!f)return;const o=i-f,c=o>50,z=o<-50;c&&d<n.length-1&&h(S=>{const m=S+1;return s==null||s(m),m}),z&&d>0&&h(S=>{const m=S-1;return s==null||s(m),m}),g(0),p(0)};return e.jsx(e.Fragment,{children:e.jsxs(M,{children:[e.jsx(L,{onTouchStart:k,onTouchMove:r,onTouchEnd:y,children:e.jsx(W,{$offset:C(),children:n.map((o,c)=>e.jsx(N,{$active:c===d,children:e.jsx(G,{src:o,alt:`Slide ${c+1}`})},c))})}),e.jsx(H,{children:e.jsx("span",{children:u})}),e.jsx(P,{onClick:j,children:"×"}),e.jsxs(U,{children:[e.jsx(X,{children:x}),e.jsxs(V,{children:[e.jsxs("div",{children:["★ ",b]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[w," reviews"]})]}),e.jsx(q,{onClick:v,children:"See more"})]})]})})},l={sm:"640px",md:"768px",lg:"1024px"},J=t.div`
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  background-color: #f9fafb;

  @media (min-width: ${l.md}) {
    max-width: 32rem;
  }
`,K=t.header`
  background-color: rgba(255, 237, 213, 0.8);
  padding: 0.75rem 1rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  max-width: 28rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 32rem;
  }
`,Q=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Y=t(R)`
  width: 1.25rem;
  height: 1.25rem;
  color: #f97316;
`,Z=t.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,_=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,ee=t.span`
  font-size: 0.875rem;
  color: #6b7280;
`,te=t.span`
  font-size: 0.75rem;
  color: #9ca3af;
`,re=t.div`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: #e5e7eb;
  border: 2px solid white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,oe=t.main`
  padding-top: 4rem;
  padding: 4rem 1rem 1rem 1rem;

  @media (min-width: ${l.md}) {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }
`,ne=t.section`
  margin-bottom: 2rem;

  @media (min-width: ${l.md}) {
    margin-bottom: 2.5rem;
  }
`,ie=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,T=t.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left; /* Aligns text to the left */
    text-align: left;

  @media (min-width: ${l.md}) {
    font-size: 1.25rem;
  }
`,se=t.button`
  color: #f97316;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    color: #ea580c;
  }
`,ae=t.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,de=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`,ce=t.div`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  overflow: hidden;
  border: 2px solid orange;
    
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,le=t.span`
  font-size: 0.875rem;
  color: #4b5563;
`,me=t.div`
  background: #fff7ed;
  border-radius: 0.5rem;
  padding: 1rem;

  @media (min-width: ${l.md}) {
    padding: 1.5rem;
  }
`,he=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,ge=t.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #f97316;
    margin-bottom: 0.25rem;

    @media (min-width: ${l.md}) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 0.875rem;
    color: #4b5563;
  }
`,fe=t.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
`,pe=t.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 5rem;
  height: 5rem;
  background: #fed7aa;
  border-radius: 0.5rem;
  transform: rotate(12deg);
`,xe=t.button`
  background: #f97316;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #ea580c;
  }
`,je=()=>{const n=$(),x=D(),u=O.useCallback(r=>{console.log(r)},[]),b=3,[w,j]=a.useState([]),[v,s]=a.useState([]),[d,h]=a.useState(0),{data:i,error:g,isLoading:f}=E();a.useEffect(()=>{if(i!=null&&i.offers.length){const r=i.offers.map(o=>({id:o.merchant.id,name:o.merchant.name,images:o.merchant.image})),y=i==null?void 0:i.offers.map(o=>o.merchant);j(y),s(r),x(A(r)),console.log("merchantData",r)}},[i]);const p=r=>{h(r)};if(f)return e.jsx("div",{children:"Loading..."});if(g)return e.jsx("div",{children:"Error: "});const C=r=>{n(`/landing/${r}`)},k=()=>{n("/landing/")};return e.jsxs(J,{children:[e.jsx(K,{children:e.jsxs(Q,{children:[e.jsx(Y,{}),e.jsxs(Z,{children:[e.jsxs(_,{children:[e.jsx(ee,{children:"Hi, John Doe"}),e.jsx(te,{children:"Welcome"})]}),e.jsx(re,{})]})]})}),e.jsxs(oe,{children:[e.jsxs(ne,{children:[e.jsxs(ie,{children:[e.jsx(T,{children:"Discover your city!"}),e.jsx(se,{onClick:()=>k(),children:"View All"})]}),e.jsx(ae,{children:w.map(r=>e.jsxs(de,{children:[e.jsx(ce,{onClick:()=>C(r.id),children:e.jsx("img",{src:r.image,alt:r.name,loading:"lazy"})}),e.jsx(le,{children:r.category.name})]},r.category.name))})]}),e.jsx(F,{images:v.slice(0,3).map(r=>r.images),title:"Parfaiteria bel",location:"Tokyo",rating:5,reviews:120,onClose:()=>console.log("close"),onSeeMore:()=>console.log("see more"),onIndexChange:p}),e.jsx(B,{total:b,current:d,onDotClick:u}),e.jsx(T,{children:"Add card to special offer!"}),e.jsx(me,{children:e.jsxs(he,{children:[e.jsxs(ge,{children:[e.jsx("h3",{children:"Get Special Offers"}),e.jsx("p",{children:"Many offers waiting for you, get it now"})]}),e.jsx(fe,{children:e.jsx(pe,{})}),e.jsx(xe,{children:"Add a card"})]})})]})]})};export{je as default};
