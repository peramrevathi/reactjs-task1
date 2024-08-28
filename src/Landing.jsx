import React from 'react'
import './Styles/Landing Page.css'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
    <div> 
      <header className="header">
      <h1>AstroChalit</h1>
      <nav className='Navbar'>
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
          <Link to='/Login'>
          <li><button className="Login-button">Login</button></li>
          </Link>
        </ul >
      </nav> 
    </header>
    </div>
  )
}

export default Landing