import React from 'react'
import './App.css'
import Header from './Header'
const WesternAPI = () => {
  return (
    <>
    <Header/>
    
    <div className="api-options">
    <h2>Western Astrology API</h2>
    <div className="api-selection">
      <h3>Planet Aspects</h3><br/>
      <button>Planet Aspects</button>
      <h3>Ephemeris</h3>
      <button>Ephemeris</button>
      <h3>Planet Ingress</h3>
      <button>Planet Ingress</button>
    </div>
    <div className="next">
    <button className="next-button">Next</button>
  </div>
  </div>
  </>
  )
}

export default WesternAPI