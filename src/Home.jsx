import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Header';
import Section from './Section';
import VedicPlan from './VedicPlan';
const Home = () => {
  return (
    <div>
       <Header/>
       <Section/>
      <Routes>
      {/* <Route path='/choose package' element ={<VedicAstrologyAPI/>}/> */}
      {/* <Route path='/vedicAstrologyAPI' element ={<Section/>}/> */}
      {/* <Route path="/" element={<VedicAstrologyAPI />} /> */}
        <Route path="/vedicplan" element={<VedicPlan />} />
      </Routes>
     
     
    </div>
  )
}

export default Home