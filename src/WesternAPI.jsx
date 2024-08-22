
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
        <h3>Planet Aspects</h3><br/>
        <button onClick={() => handleButtonClick('Planet Aspects')}>Planet Aspects</button>
        <h3>Ephemeris</h3>
        <button onClick={() => handleButtonClick('Ephemeris')}>Ephemeris</button>
        <h3>Planet Ingress</h3>
        <button onClick={() => handleButtonClick('Planet Ingress')}>Planet Ingress</button>
      </div>
      </div>
      <div className="next">
        <button className="next-button" onClick={() => handleButtonClick('Next')}>Next</button>
      </div>
    </div>
  );
};

export default WesternAPI;
