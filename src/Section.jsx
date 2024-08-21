import React from 'react'
import './App.css'

const Section = () => {
  return (
    
    <div className="packages">
      <div className="package">
        <h3>Vedic Astrology</h3>
        <p>Enhance your app with our Vedic Astrology API, offering Shodashvarga charts, ephemeris, Planet Ingress, and Bio Rhythm. Choose the best package to provide accurate and insightful astrological services to your users seamlessly.</p>
        <button className="choose-package-button">Choose Package</button>
      </div>
      <div className="package">
        <h3>Western Astrology</h3>
        <p>Enhance your app with our Western Astrology API, offering precise ephemeris and Planet Ingress data. Choose the best package to provide accurate and insightful astrological services to your users seamlessly.</p>
        <button className="choose-button">Choose Package</button>
      </div>
    </div>
  
  )
}

export default Section