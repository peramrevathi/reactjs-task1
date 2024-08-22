import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Header';
import Section from './Section';
import VedicAstrologyAPI from './VedicAstrologyAPI';
const Home = () => {
  return (
    <div>
       <Header/>
       <Section/>
      <Routes>
      <Route path='/choose package' element ={<VedicAstrologyAPI/>}/>
      <Route path='/vedicAstrologyAPI' element ={<section/>}/>
      </Routes>
     
     
    </div>
  )
}

export default Home