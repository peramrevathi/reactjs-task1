import React from 'react'
import './App.css'
import Header from './Header';
import Section from './Section';
import VedicAstrologyAPI from './VedicAstrologyAPI';
const App = () => {
  return (
    <div>
      <Header/>
      <Section/>
      <VedicAstrologyAPI/>
    </div>
  )
}

export default App