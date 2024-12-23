import {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

 const CityOfLanding = lazy(() => import('./pages/CityOfferDetailLanding/CityOfferDetailLanding.tsx'));
 const CityOfferLanding = lazy(() => import('./pages/CityOfferLanding/CityOfferLanding.tsx'));
 const Home = lazy(() => import('./pages/Home/Home.tsx'));
 const NotFound = lazy(() => import('./pages/NotFound/NotFound.tsx'));

 return (
    <>
        <Router basename="/pulseID-mobile-app">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<CityOfferLanding />} />
                  <Route path="/landing" element={<Home />} />
                  <Route path="/landing/:id" element={<CityOfLanding />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    </>
  )
}

export default App
