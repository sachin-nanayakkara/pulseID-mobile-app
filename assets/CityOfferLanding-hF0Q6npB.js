import{d as t,r as d,j as e,u as D,c as T,R as O,e as E,s as A}from"./index-OBIZujuf.js";import{D as B}from"./DotWidget-7NsH2WyK.js";import{c as I}from"./createLucideIcon-CItHT9AT.js";/**
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
  transform: translateX(${i=>i.$offset}%);
`,N=t.div`
  min-width: 85%;
  padding: 0 0.5rem;
  transition: all 300ms ease;
  opacity: ${i=>i.$active?1:.5};
  transform: scale(${i=>i.$active?1:.9});
`,P=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`,G=t.div`
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
`,H=t.button`
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
`,F=t.div`
  position: absolute;
  bottom: 6rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.375rem;
  z-index: 10;
`,J=t.div`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background-color: ${i=>i.$active?"#f97316":"rgba(255, 255, 255, 0.6)"};
  transition: background-color 300ms;
`,K=({images:i=["/api/placeholder/400/300","/api/placeholder/400/300","/api/placeholder/400/300"],title:x="Parfaiteria bel",location:u="Tokyo",rating:b=5,reviews:w=120,onClose:j,onSeeMore:v,onIndexChange:a})=>{const[c,h]=d.useState(0),[n,g]=d.useState(0),[p,f]=d.useState(0),k=()=>-(c*85)+7.5,C=r=>{g(r.touches[0].clientX)},o=r=>{f(r.touches[0].clientX)},y=()=>{if(!n||!p)return;const r=n-p,s=r>50,z=r<-50;s&&c<i.length-1&&h(S=>{const m=S+1;return a==null||a(m),m}),z&&c>0&&h(S=>{const m=S-1;return a==null||a(m),m}),g(0),f(0)};return e.jsx(e.Fragment,{children:e.jsxs(M,{children:[e.jsx(L,{onTouchStart:C,onTouchMove:o,onTouchEnd:y,children:e.jsx(W,{$offset:k(),children:i.map((r,s)=>e.jsx(N,{$active:s===c,children:e.jsx(P,{src:r,alt:`Slide ${s+1}`})},s))})}),e.jsx(G,{children:e.jsx("span",{children:u})}),e.jsx(H,{onClick:j,children:"×"}),e.jsxs(U,{children:[e.jsx(X,{children:x}),e.jsxs(V,{children:[e.jsxs("div",{children:["★ ",b]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[w," reviews"]})]}),e.jsx(q,{onClick:v,children:"See more"})]}),e.jsx(F,{children:i.map((r,s)=>e.jsx(J,{$active:s===c},s))})]})})},l={sm:"640px",md:"768px",lg:"1024px"},Q=t.div`
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  background-color: #f9fafb;

  @media (min-width: ${l.md}) {
    max-width: 32rem;
  }
`,_=t.header`
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
`,Y=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Z=t(R)`
  width: 1.25rem;
  height: 1.25rem;
  color: #f97316;
`,ee=t.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,te=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,oe=t.span`
  font-size: 0.875rem;
  color: #6b7280;
`,re=t.span`
  font-size: 0.75rem;
  color: #9ca3af;
`,ie=t.div`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: #e5e7eb;
  border: 2px solid white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,ne=t.main`
  padding-top: 4rem;
  padding: 4rem 1rem 1rem 1rem;

  @media (min-width: ${l.md}) {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }
`,se=t.section`
  margin-bottom: 2rem;

  @media (min-width: ${l.md}) {
    margin-bottom: 2.5rem;
  }
`,ae=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,$=t.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left; /* Aligns text to the left */
    text-align: left;

  @media (min-width: ${l.md}) {
    font-size: 1.25rem;
  }
`,ce=t.button`
  color: #f97316;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    color: #ea580c;
  }
`,de=t.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,le=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`,me=t.div`
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
`,he=t.span`
  font-size: 0.875rem;
  color: #4b5563;
`,ge=t.div`
  background: #fff7ed;
  border-radius: 0.5rem;
  padding: 1rem;

  @media (min-width: ${l.md}) {
    padding: 1.5rem;
  }
`,pe=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,fe=t.div`
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
`,xe=t.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
`,ue=t.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 5rem;
  height: 5rem;
  background: #fed7aa;
  border-radius: 0.5rem;
  transform: rotate(12deg);
`,be=t.button`
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
`,ke=()=>{const i=D(),x=T(),u=O.useCallback(o=>{console.log(o)},[]),b=3,[w,j]=d.useState([]),[v,a]=d.useState([]),[c,h]=d.useState(0),{data:n,error:g,isLoading:p}=E();d.useEffect(()=>{if(n!=null&&n.offers.length){const o=n.offers.map(r=>({id:r.merchant.id,name:r.merchant.name,images:r.merchant.image})),y=n==null?void 0:n.offers.map(r=>r.merchant);j(y),a(o),x(A(o)),console.log("merchantData",o)}},[n]);const f=o=>{h(o)};if(p)return e.jsx("div",{children:"Loading..."});if(g)return e.jsx("div",{children:"Error: "});const k=o=>{i(`/landing/${o}`)},C=()=>{i("/landing/")};return e.jsxs(Q,{children:[e.jsx(_,{children:e.jsxs(Y,{children:[e.jsx(Z,{}),e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx(oe,{children:"Hi, John Doe"}),e.jsx(re,{children:"Welcome"})]}),e.jsx(ie,{})]})]})}),e.jsxs(ne,{children:[e.jsxs(se,{children:[e.jsxs(ae,{children:[e.jsx($,{children:"Discover your city!"}),e.jsx(ce,{onClick:()=>C(),children:"View All"})]}),e.jsx(de,{children:w.map(o=>e.jsxs(le,{children:[e.jsx(me,{onClick:()=>k(o.id),children:e.jsx("img",{src:o.image,alt:o.name,loading:"lazy"})}),e.jsx(he,{children:o.category.name})]},o.category.name))})]}),e.jsx(K,{images:v.slice(0,3).map(o=>o.images),title:"Parfaiteria bel",location:"Tokyo",rating:5,reviews:120,onClose:()=>console.log("close"),onSeeMore:()=>console.log("see more"),onIndexChange:f}),e.jsx(B,{total:b,current:c,onDotClick:u}),e.jsx($,{children:"Add card to special offer!"}),e.jsx(ge,{children:e.jsxs(pe,{children:[e.jsxs(fe,{children:[e.jsx("h3",{children:"Get Special Offers"}),e.jsx("p",{children:"Many offers waiting for you, get it now"})]}),e.jsx(xe,{children:e.jsx(ue,{})}),e.jsx(be,{children:"Add a card"})]})})]})]})};export{ke as default};
