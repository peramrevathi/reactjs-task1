
import React from 'react';
import './App.css';

const WesternAPI = () => {
  const handleButtonClick = (service) => {
    console.log(`${service} clicked`);
    // Additional logic, e.g., navigation or API calls, can be added here
  };
  

  return (
    <div className="api-section">
    <div className="api-options">
      <h2>Western Astrology API</h2>
      <div className="api-selection">
        <div className="api-item">
        <h3 >Planet Aspects</h3>
        </div>
        <div className="item">
        <button   onClick={() => handleButtonClick('Planet Aspects')}>Planet Aspects</button>
        </div>
        <div className="api-item">
        <h3>Ephemeris</h3>
        </div>
        <div className="item"><button  onClick={() => handleButtonClick('Ephemeris')}>Ephemeris</button></div>
        <div className="api-item"> 
        <h3 >Planet Ingress</h3>
        </div>
        <div className="item"><button  onClick={() => handleButtonClick('Planet Ingress')}>Planet Ingress</button></div>
        
      </div>
      </div>
      <div className="next">
        <button className="next-button" onClick={() => handleButtonClick('Next')}>Next</button>
      </div>
    </div>
  );
};

export default WesternAPI;
