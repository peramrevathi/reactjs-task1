import React ,{useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

import VedicAstrologyAPI from './VedicAstrologyAPI';
import WesternAPI from './WesternAPI';
import VedicPlan from './VedicPlan';
import Header from '../Header';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(true);

  const showVedic = () => {
    setIsVisible(true);
  };

  const showWestern = () => {
    setIsVisible(false);
  };
  

  return (
    <div className="section">
        <Header />
    <div className="packages">
      <div className="package">
        <h3>Vedic Astrology</h3>
        <p>Enhance your app with our Vedic Astrology API, offering Shodashvarga charts, ephemeris, Planet Ingress, and Bio Rhythm. Choose the best package to provide accurate and insightful astrological services to your users seamlessly.</p>
        <button style={{
            backgroundColor: isVisible ? '#EB9200' : 'white',
            color: isVisible ? 'white' : '#EB9200',
          }} className="choose-package-button" onClick={showVedic} >Choose Package</button>
      </div>
      <div className="package">
        <h3>Western Astrology</h3>
        <p>Enhance your app with our Western Astrology API, offering precise ephemeris and Planet Ingress data. Choose the best package to provide accurate and insightful astrological services to your users seamlessly.</p>
        <button  style={{
            backgroundColor: isVisible ? 'white' : '#EB9200',
            color: isVisible ? '#EB9200' : 'white',
          }} className="choose-package-button" onClick={showWestern} >Choose Package</button>
      </div>
      </div>
      <div className="api">
      {isVisible ? <VedicAstrologyAPI /> : <WesternAPI />}
      </div>
      <VedicPlan />
      <div className="next button">
          <Link to="/CustomPlan">
            <button className="next-button" >Next</button>
          </Link>
        </div>
      </div>
  
  )
}

export default Pricing