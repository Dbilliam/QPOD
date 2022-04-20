import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import App from './App';
import Blogs from './components/Blogs';
import Feature from './components/Feature';
import Overview from './components/Overview';
import Pricing from './components/Pricing';

function Apps() {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/overview" element={<Overview />} />
            <Route exact path="/features" element={<Feature />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/pricing" element={<Pricing />} />
          </Routes>
    </>
  )
}

export default Apps