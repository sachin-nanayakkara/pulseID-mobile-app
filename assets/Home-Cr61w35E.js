import{d as r,j as e,R as l,u as C,r as g,e as w}from"./index-7qhWvqlc.js";import{C as S,H as F}from"./heart-EZzZFnR2.js";import{D}from"./DotWidget-CPVY4tYJ.js";import"./createLucideIcon-KRBO82wS.js";const z=r.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    background-color: rgb(255 247 237);
    color: rgb(234 88 12);
    border-radius: 9999px;
    font-weight: 500;
    font-size: 0.875rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgb(254 215 170);
    }
`,B=r.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    background-color: rgb(255 237 213);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: rgb(234 88 12);
`,I=({category:i,icon:o="",onClick:a,className:s})=>e.jsxs(z,{onClick:a,className:s,children:[e.jsx(B,{style:{backgroundImage:`url(${o})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),i]}),O=r.button`
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 0.8);
    margin-right: 100%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }
`,E=({onClick:i})=>e.jsx(O,{onClick:i,children:e.jsx(S,{size:24})}),L=r.div`
    position: relative;
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,H=r.div`
    position: relative;
    width: 100%;
    height: 8rem;
`,W=r.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,M=r.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.75rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`,X=r.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
`,K=r.img`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
`,T=r.h3`
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
`,U=r.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.8);
  transition: background-color 0.2s;

  &:hover {
    background-color: white;
  }
`,A=({storeImageSrc:i,storeName:o,storeLogoSrc:a,onFavoriteClick:s})=>e.jsx(L,{children:e.jsxs(H,{children:[e.jsx(W,{src:i,alt:o}),e.jsx(M,{children:e.jsxs(X,{children:[e.jsx(K,{src:a,alt:o}),e.jsx(T,{children:o})]})}),e.jsx(U,{onClick:s,children:e.jsx(F,{size:16,color:"#374151"})})]})}),G=l.memo(A),N=r.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9fafb;
    max-width: 100%;
`,P=r.header`
    position: relative;
    width: 100%;
    height: 12rem;
`,Q=r.div`
    position: absolute;
    inset: 0;
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }
`,R=r.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,q=r.div`
    position: relative;
    padding: 1rem;
`,V=r.h1`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: -1.5rem;
`,Y=r.div`
    padding: 0 1rem 1.5rem;
    margin-top: -20px;
    z-index: 1;
    border-radius: 20px;
    background: white;
`,Z=r.h1`
    border: none;
    border-top: 5px solid #d1d5db; 
    margin: 1rem auto; 
    width: 20%;
    border-radius: 5px;
    text-align: center; 
`,h=r.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left; 
    text-align: left;
`,$=r.div`
    background: linear-gradient(135deg,
    #FFF5E9 0%,
    #FFE8D9 25%,
    #FFDCC6 50%,
    #FFE8D9 75%,
    #FFF5E9 100%
    );
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    max-width: 42rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg,
        rgba(255,255,255,0.1) 0%,
        rgba(255,255,255,0.3) 50%,
        rgba(255,255,255,0.1) 100%
        );
        pointer-events: none;
    }
`,_=r.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`,J=r.div`
    flex: 1;
`,ee=r.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    align-items: center;
`,re=r.img`
    width: 5rem;
    height: 2rem;
`,te=r.span`
    font-size: 0.875rem;
`,oe=r.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
`,ne=r.h3`
    font-weight: 600;
    margin-bottom: 0.25rem;
`,ie=r.p`
    color: #f97316;
    font-weight: 500;
`,ae=r.button`
    margin-top: 0.75rem;
    padding: 0.5rem 1rem;
    background-color: #fb923c;
    color: white;
    border-radius: 9999px;
    font-size: 0.875rem;
`,se=r.div`
    margin-top: 2rem;
`,ce=r.div`
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;

    &::-webkit-scrollbar {
        display: none;
    }
`,de=r.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`,le=r.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,p=r.span`
  padding: 0.25rem 0.5rem;
  background-color: #ffedd5;
  color: #ea580c;
  border-radius: 9999px;
  font-size: 0.75rem;
`,ue=()=>{const o=C(),[a,s]=g.useState(0),[d,m]=g.useState([]),u=l.useCallback(t=>{s(t)},[]),x=t=>{o(`/landing/${t}`)},b=()=>{o("/")},f=l.useCallback(t=>{const c=d.filter(y=>y.category.name.includes(t));m(c)},[d]),j=l.useCallback(t=>{console.log(`${t} added to favorites!`)},[]),{data:n,error:v,isLoading:k}=w();return g.useEffect(()=>{if(n!=null&&n.offers.length){const t=n==null?void 0:n.offers.map(c=>c==null?void 0:c.merchant);m(t)}},[n]),k?e.jsx("div",{children:"Loading..."}):v?e.jsx("div",{children:"Error: "}):e.jsxs(N,{children:[e.jsxs(P,{children:[e.jsx(Q,{children:e.jsx(R,{src:"https://s3-alpha-sig.figma.com/img/c862/cfa0/8b479bf669f459c69f7c87c13c641f94?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kmIeL5gKdbiM5L3gMgngdznYtLU-~uEGEQ9yaLc1ghNoBjlz3DbOteu-mleBD5sOUL6y5P7fktwuXM7UFMJ6PHOal-6M60zWvyb9m1~v9YAsFIxEPzEXpHU~vOMZexXxL9pWUqimc1pOYDaaNnjeY~gCbdXX1LldylAauoQSHlOpWZHNPy7tOxEExahenb2D1dqcR5gaumbKB~XSORMuFxDPFdRCyka2CAOXx9Qy-SyL6idDGpQkDXuUZjbUq9lu77W9D--kHiyQqiWAFyyI78aZrtS8UA43GX9tzX0cK4jK~7sArDg-30XOUfFNnaeWugzM2wWrFsfCzVXgLKakKA__",alt:"Tokyo cityscape"})}),e.jsxs(q,{children:[e.jsx(E,{onClick:()=>b()}),e.jsx(V,{children:"Tokyo"})]})]}),e.jsxs(Y,{children:[e.jsx(Z,{}),e.jsx(h,{children:"Special Offers!"}),e.jsx($,{children:e.jsxs(_,{children:[e.jsxs(J,{children:[e.jsxs(ee,{children:[e.jsx(re,{src:"/api/placeholder/30/30",alt:"SK-II"}),e.jsx(te,{children:"SK-II"})]}),e.jsx(ne,{children:"Get Special Offer"}),e.jsx(ie,{children:"Up to 9% discount"}),e.jsx(ae,{children:"View More"})]}),e.jsx(oe,{src:"/api/placeholder/30/30",alt:"Beauty product",style:{width:"6rem",height:"100%"}})]})}),e.jsx(D,{total:3,current:a,onDotClick:u}),e.jsxs(se,{children:[e.jsx(h,{children:"Explore Tokyo's Best Category"}),e.jsx(ce,{children:d.map(t=>e.jsx(I,{category:t.category.name,icon:t.image,onClick:()=>f(t.category.name)},t.category.name))})]}),e.jsx(de,{children:d.map(t=>e.jsxs("div",{onClick:()=>x(t.id),children:[e.jsx(G,{storeImageSrc:t.image,storeName:t.category.name,storeLogoSrc:t.image,discountText:t.discount,onFavoriteClick:()=>j(t.image)},t.category.name),e.jsxs(le,{children:[e.jsx(p,{children:"Desert"}),e.jsx(p,{children:"Exclusive"})]})]}))})]})]})};export{ue as default};
