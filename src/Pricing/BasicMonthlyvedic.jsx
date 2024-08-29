import React from 'react';
import './Basicvedic.css'; // Import the CSS file
import Image from '../assests/image 2.png'; // Adjust the path to your image file
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {  IconButton } from '@mui/material';
import VedicAstrologyAPI from './VedicAstrologyAPI';
import Sidebar from './Sidebar';


const BasicMonthlyvedic = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div style={{display:'flex'}} >
      <Sidebar />
    <div className="Monthly-container">
      <IconButton sx={{width: '33px',height: '33px',top: '19px',left: '500px',color:'black'}}>
     <AccountCircleOutlinedIcon  sx={{fontSize:'3rem'}}/>
     </IconButton>
      <div className="subscription-status">
        <h1>Your Subscription</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>Active</h2>
          <div>
          <img src={Image} alt=" Image" />
          </div>
        </div>
      </div>

      {/* Subscription Description */}
      <p className="description">
        Unlock exclusive features with subscription plans. Access premium astrology APIs, including detailed charts and daily predictions. Subscribe today to enhance your app's capabilities and deliver unparalleled insights to your users.
      </p>

      {/* Current Plan Details */}
      <div className="plan-details">
        <div style={{ display: 'flex', gap: '150px' }}>
          {/* Left Column: Plan Details */}
          <div className="left-column">
            <h3>Your Current Plan Details:</h3>
            <div>
              <p><strong>Package:</strong> Vedic Astrology API</p>
              <p><strong>Activation Date:</strong> 12 Jan 2024</p>
              <p><strong>Amount:</strong> ₹ 2,500</p>
              <p><strong>Expiry Date:</strong> 28 Feb 2024</p>
              <p><strong>Days Left:</strong> 20</p>
            </div>
          </div>

          {/* Right Column: API Authorization Details */}
          <div className="right-column">
            <h3>API Authorization Details:</h3>
            <div >
              <div className='User'>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p><strong>User ID:</strong> 7366458</p>
                <IconButton fontSize="large" aria-label='ContentCopyIcon'onClick={() => handleCopy('7366458')}>
               <ContentCopyIcon/>
               </IconButton>
               </div>
               </div>
              </div>
              <div className="API">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p><strong>API Key:</strong> hu5043dso980dj37j4m6j73ldsj47</p>
                <IconButton fontSize="large" aria-label='ContentCopyIcon'onClick={() => handleCopy('7366458')}> 
                <ContentCopyIcon/>
                </IconButton>
              </div>
              </div>
            </div>
          
        </div>
      </div>

      <h2 style={{ marginBottom: '10px' , marginRight:'65%' }}>The APIs which you have access for:</h2>
      <div className="api-access">
        <VedicAstrologyAPI/>
      </div>
    </div>
    </div>
  );
};

export default BasicMonthlyvedic;
