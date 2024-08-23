import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const charts = [
  'Lagna Chart (D1)', 'Hora Chart (D2)', 'Drekkana Chart (D3)', 'Chathurthamsha Chart (D4)', 
  'Panchamamsha Chart (D5)', 'Shashthamsha Chart (D6)', 'Saptamamsha Chart (D7)', 'Ashtamamsha Chart (D8)',
  'Navamsha Chart (D9)', 'Dashamamsha Chart (D10)', 'Dwadashamsha Chart (D12)', 'Shodashvamsha Chart (D16)', 
  'Imshamsha Chart (D20)', 'Chaturvimshamsha Chart (D24)', 'Bhamsha Chart (D27)', 'Trimshamsha Chart (D30)', 
  'Khavedamsha Chart (D40)', 'Akshavedamsha Chart (D45)', 'Shastiamsha Chart (D60)'
];

const services = ['Bio Rhythm', 'Ephemeris', 'Planet Ingress', 'Moon Calendar'];

function VedicAstrologyAPI() {
  const navigate = useNavigate();

  const handleChartClick = (chartName) => {
    navigate(`/chart/${chartName.toLowerCase().replace(/\s+/g, '')}`);
  };

  const handleAdditionalServiceClick = (serviceName) => {
    console.log(`Selected Service: ${serviceName}`);
  };

  return (
    <div className="vedic-api">
      <section className="vedic-astrology-api">
        <h3 className="title">Vedic Astrology API</h3>
        <div className="charts">
          <div className="chart-group">
            <h4>Shodashvarga Charts</h4>
            <div className="chart-buttons">
              {charts.map(chart => (
                <button
                  key={chart}
                  onClick={() => handleChartClick(chart)}
                  aria-label={chart}
                >
                  {chart}
                </button>
              ))}
            </div>
          </div>
          <div className="additional-services">
            {services.map(service => (
              <div key={service}>
                <h5>{service}</h5>
                <button
                  onClick={() => handleAdditionalServiceClick(service)}
                  aria-label={service}>
                  {service}
                </button>
              </div>
            ))}
          </div>
        </div>
       
      </section>
    </div>
  );
}

export default VedicAstrologyAPI;
