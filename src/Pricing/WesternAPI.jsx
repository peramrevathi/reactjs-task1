
import React from 'react';
import '../App.css';
const plans = ['Bio Rhythm', 'Ephemeris', 'Planet Ingress'];

const WesternAPI = () => {
  const handleButtonClick = (plans) => {
    console.log(`${plans} clicked`);
  };
  

  return (
    <div>
    <h2 className="heading">Western Astrology API</h2>
    <div className="api-section">
    <div className="api-options">
      <div className="api-selection">
            {plans.map(plans => (
              <div key={plans}>
                <div className="api-items">
                <h5>{plans}</h5>
                </div>
                <div className="item-button">
                <button
                  onClick={() => handleButtonClick(plans)}
                  aria-label={plans}
                  >
                  {plans} 
                </button>
                </div>
              </div>
            ))}
          </div>
        
      </div>
     
    </div>
    </div>
  );
};

export default WesternAPI;
