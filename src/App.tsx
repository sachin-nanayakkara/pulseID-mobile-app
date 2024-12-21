import {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import './App.css'

function App() {

 const Home = lazy(() => import('./pages/home/Home.tsx'));

  return (
    <>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    </>
  )
}

export default App
