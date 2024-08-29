// Sidebar.js
import React from 'react';
import '../Styles/Sidebar.css';
import astro from '../assests/astro.png';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BarChartIcon from '@mui/icons-material/BarChart';
import NoteIcon from '@mui/icons-material/Note';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-icon">
        <img src={astro} alt="Astro" className='logo'  />
      </div>
      <div className="icon-wrapper">
        <HomeIcon className="icon" sx={{ fontSize: '2rem', marginBottom:'20px'}}  />
        <MenuIcon className='icon' sx={{ fontSize: '2rem', marginBottom:'20px'}}  />
        <Link to='/BasicMonthlyvedic'>
        <SubscriptionsIcon className='icon' sx={{ fontSize: '2rem', marginBottom:'20px'}}/>
        </Link>
        <Link to='/Charts'>
        <BarChartIcon className="icon"sx={{ fontSize: '2rem', marginBottom:'20px'}}  />
        </Link>
        <Link to='/BasicMonthlyPayment'>
        <NoteIcon className="icon" sx={{ fontSize: '2rem', marginBottom:'20px'}} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
