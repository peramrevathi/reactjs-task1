import React from 'react';
import './App.css'

function Header() {
  return (
    <header className="app-header">
      <h1>AstroChalit</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Docs</li>
          <li><button className="dashboard-button">Dashboard</button></li>
        </ul >
      </nav> 
      
    <section className="section">
    <h2>Start Your Journey With Us!</h2>
    <p>Pick from our Vedic or Western Astrology options to begin your free trial and explore the features that interest you the most.</p>
    </section>
    </header>
    
  );
}

export default Header;