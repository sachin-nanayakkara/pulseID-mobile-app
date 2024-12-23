import{d as t,r as l,j as e,u as $,c as T,e as D,s as j}from"./index-ZScR0gFy.js";import{c as I}from"./createLucideIcon-C7tMy7hS.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=I("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),A=t.div`
  position: relative;
  border-radius: 0.75rem;
  width: 18rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  overflow: hidden;
  width: 100%;
  height: 100%;
`,E=t.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
`,B=t.div`
  display: flex;
  height: 100%;
  transition: transform 300ms ease-out;
  transform: translateX(${o=>o.$offset}%);
`,P=t.div`
  min-width: 85%;
  padding: 0 0.5rem;
  transition: all 300ms ease;
  opacity: ${o=>o.$active?1:.5};
  transform: scale(${o=>o.$active?1:.9});
`,M=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`,W=t.div`
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
`,L=t.button`
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
`,R=t.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  z-index: 10;
`,N=t.h3`
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`,X=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`,H=t.button`
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
`,G=t.div`
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
  background-color: ${o=>o.$active?"#f97316":"rgba(255, 255, 255, 0.6)"};
  transition: background-color 300ms;
`,U=({images:o=["/api/placeholder/400/300","/api/placeholder/400/300","/api/placeholder/400/300"],title:m="Parfaiteria bel",location:f="Tokyo",rating:x=5,reviews:u=120,onClose:n,onSeeMore:b})=>{const[d,h]=l.useState(0),[g,r]=l.useState(0),[p,a]=l.useState(0),C=()=>-(d*85)+7.5,k=i=>{r(i.touches[0].clientX)},y=i=>{a(i.touches[0].clientX)},S=()=>{if(!g||!p)return;const i=g-p,s=i>50,z=i<-50;s&&d<o.length-1&&h(w=>w+1),z&&d>0&&h(w=>w-1),r(0),a(0)};return e.jsxs(A,{children:[e.jsx(E,{onTouchStart:k,onTouchMove:y,onTouchEnd:S,children:e.jsx(B,{$offset:C(),children:o.map((i,s)=>e.jsx(P,{$active:s===d,children:e.jsx(M,{src:i,alt:`Slide ${s+1}`})},s))})}),e.jsx(W,{children:e.jsx("span",{children:f})}),e.jsx(L,{onClick:n,children:"×"}),e.jsxs(R,{children:[e.jsx(N,{children:m}),e.jsxs(X,{children:[e.jsxs("div",{children:["★ ",x]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[u," reviews"]})]}),e.jsx(H,{onClick:b,children:"See more"})]}),e.jsx(G,{children:o.map((i,s)=>e.jsx(J,{$active:s===d},s))})]})},c={sm:"640px",md:"768px",lg:"1024px"},V=t.div`
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  background-color: #f9fafb;

  @media (min-width: ${c.md}) {
    max-width: 32rem;
  }
`,q=t.header`
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
`,K=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Q=t(O)`
  width: 1.25rem;
  height: 1.25rem;
  color: #f97316;
`,_=t.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,F=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Y=t.span`
  font-size: 0.875rem;
  color: #6b7280;
`,Z=t.span`
  font-size: 0.75rem;
  color: #9ca3af;
`,ee=t.div`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: #e5e7eb;
  border: 2px solid white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,te=t.main`
  padding-top: 4rem;
  padding: 4rem 1rem 1rem 1rem;

  @media (min-width: ${c.md}) {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }
`,oe=t.section`
  margin-bottom: 2rem;

  @media (min-width: ${c.md}) {
    margin-bottom: 2.5rem;
  }
`,re=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,v=t.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left; /* Aligns text to the left */
    text-align: left;

  @media (min-width: ${c.md}) {
    font-size: 1.25rem;
  }
`,ne=t.button`
  color: #f97316;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    color: #ea580c;
  }
`,ie=t.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,se=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`,ae=t.div`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,de=t.span`
  font-size: 0.875rem;
  color: #4b5563;
`,ce=t.div`
  background: #fff7ed;
  border-radius: 0.5rem;
  padding: 1rem;

  @media (min-width: ${c.md}) {
    padding: 1.5rem;
  }
`,le=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,me=t.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #f97316;
    margin-bottom: 0.25rem;

    @media (min-width: ${c.md}) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 0.875rem;
    color: #4b5563;
  }
`,he=t.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
`,ge=t.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 5rem;
  height: 5rem;
  background: #fed7aa;
  border-radius: 0.5rem;
  transform: rotate(12deg);
`,pe=t.button`
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
`,ue=()=>{const o=$(),m=T(),f=[{id:626,name:"Product 1",images:"https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png"}],[x,u]=l.useState([]),{data:n,error:b,isLoading:d}=D();if(l.useEffect(()=>{if(n!=null&&n.offers.length){const r=n.offers.map(a=>({id:a.merchant.id,name:a.merchant.name,images:a.merchant.image})),p=n==null?void 0:n.offers.map(a=>a.merchant);u(p),m(j(r)),console.log("merchantData",r)}},[n]),d)return e.jsx("div",{children:"Loading..."});if(b)return e.jsx("div",{children:"Error: "});const h=r=>{m(j(f)),o(`/landing/${r}`)},g=()=>{o("/landing/")};return e.jsxs(V,{children:[e.jsx(q,{children:e.jsxs(K,{children:[e.jsx(Q,{}),e.jsxs(_,{children:[e.jsxs(F,{children:[e.jsx(Y,{children:"Hi, John Doe"}),e.jsx(Z,{children:"Welcome"})]}),e.jsx(ee,{})]})]})}),e.jsxs(te,{children:[e.jsxs(oe,{children:[e.jsxs(re,{children:[e.jsx(v,{children:"Discover your city!"}),e.jsx(ne,{onClick:()=>g(),children:"View All"})]}),e.jsx(ie,{children:x.map(r=>e.jsxs(se,{children:[e.jsx(ae,{onClick:()=>h(r.id),children:e.jsx("img",{src:r.image,alt:r.name,loading:"lazy"})}),e.jsx(de,{children:r.category.name})]},r.category.name))})]}),e.jsx(U,{images:["https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png","https://ctlstg-cdn.pulseid.com/4zw77DJjPO/929c6859-a985-4749-8ac6-f4db15d9878c.png","https://ctlstg-cdn.pulseid.com/4zw77DJjPO/929c6859-a985-4749-8ac6-f4db15d9878c.png"],title:"Parfaiteria bel",location:"Tokyo",rating:5,reviews:120,onClose:()=>console.log("close"),onSeeMore:()=>console.log("see more")}),e.jsx(v,{children:"Add card to special offer!"}),e.jsx(ce,{children:e.jsxs(le,{children:[e.jsxs(me,{children:[e.jsx("h3",{children:"Get Special Offers"}),e.jsx("p",{children:"Many offers waiting for you, get it now"})]}),e.jsx(he,{children:e.jsx(ge,{})}),e.jsx(pe,{children:"Add a card"})]})})]})]})};export{ue as default};
