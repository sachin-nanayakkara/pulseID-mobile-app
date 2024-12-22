import {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

 const CityOfLanding = lazy(() => import('./pages/cityOfferDetailLanding/CityOfferDetailLanding.tsx'));
 const CityOfferLanding = lazy(() => import('./pages/cityOfferLanding/CityOfferLanding.tsx'));
 const Home = lazy(() => import('./pages/home/Home.tsx'));
 const NotFound = lazy(() => import('./pages/NotFound/NotFound.tsx'));

 return (
    <>
        <Router basename="/test-actions">
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
