import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <h1>AstroChalit</h1>
      <div className="intro">
          <h1>Start Your Journey With Us!</h1>
          <p>Pick from our Vedic or Western Astrology options to begin your free trial and explore the features that interest you the most.</p>
        </div>
      <nav className='Nav'>
        <ul>
          <Link to='/Home'>
          <li>Home</li>
          </Link>
          <Link to='/Pricing'>
          <li>Pricing</li>
          </Link>
          <Link to='/Docs'>
          <li>Docs</li>
          </Link>
          <Link to='/Dashbord'>
          <li><button className="dashboard-button">Dashboard</button></li>
          </Link>
        </ul >
      </nav> 
    </header>
    
  );
}

export default Header;