import React from 'react';
import './App.css'
function VedicAstrologyAPI() {
  
  return (
    <section className="vedic-astrology-api">
      <h3 className='title'>Vedic Astrology API</h3>
      <div className="charts">
        <div className="chart-group">
          <h4>Shodashvarga Charts</h4>
          <div className="chart-buttons">
            <button>Lagna Chart (D1)</button>
            <button>Hora Chart (D2)</button>
            <button>Drekkana Chart (D3)</button>
            <button>Chathurthamsha Chart (D4)</button>
            <button>Panchamamsha Chart (D5)</button>
            <button>Shashthamsha Chart (D6)</button>
            <button>Saptamamsha Chart (D7)</button>
            <button>Ashtamamsha Chart (D8)</button>
            <button>Navamsha Chart (D9)</button>
            <button>Dashamamsha Chart (D10)</button>
            <button>Dwadashamsha Chart (D12)</button>
            <button>Shodashvamsha Chart (D16)</button>
            <button>imshamsha Chart (D20)</button>
            <button>Chaturvimshamsha Chart (D24)</button>
            <button>Bhamsha Chart (D27)</button>
            <button>Trimshamsha Chart (D30)</button>
            <button>Khavedamsha Chart (D40)</button>
            <button>Akshavedamsha Chart (D45)</button>
            <button>Shastiamsha Chart (D60)</button>

          </div>
        </div>
        <div className="additional-services">
          <h5>Bio Rhythm</h5> 
          <button>Bio Rhythm</button>
          <h5>Ephemeris</h5>
          <button>Ephemeris</button>
          <h5>Planet Ingress</h5>
          <button>Planet Ingress</button>
          <h5>Moon Calendar</h5>
          <button>Moon Calendar</button>
        </div>
        </div>
        <div className="next">
        <button className="next-button">Next</button>
      </div>
     
    </section>
    
  );
}

export default VedicAstrologyAPI;