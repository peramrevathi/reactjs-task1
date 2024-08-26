import React from 'react'
import VedicAstrologyAPI from './VedicAstrologyAPI';
import {Box, AppBar,Toolbar,Typography} from '@mui/material';
import { IconButton } from '@mui/material';
import CottageIcon from '@mui/icons-material/Cottage';
import WesternAPI from './WesternAPI';
import { useNavigate } from 'react-router-dom';

const CostomPlan = () => {
  const navigate = useNavigate();
    const plans = [
        {
          name: 'Yearly vedic Plan',
          amount: '1,20,000',
          duration: '365 days',
          apiRequest: '350k/month',
        },
        {
          name: 'Western Plan',
          amount: '5000',
          duration: '30 days',
          apiRequest: '125k/month',
        },
      ];
      const handleVedicPlanClick = () => {
        navigate('/YearlyVedicPlan');
      };
  return (
       <div >
        <Box  sx={{ flexGrow: 1  }}>
      <AppBar position="static" sx= {{ backgroundColor:' #ff9800', color:"white", padding: "20px 0", maxheight:"900px"}}>
        <Toolbar variant="dense">
          <Typography variant="h3"  component="div">
          AstroChalit
          </Typography>
          <IconButton edge="end" fontSize="large"  aria-label="home" color="primary" sx={{ ml: 140,  fontSize: 90 ,color:"white"}}>
            <CottageIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </Box>
     
    <div className="tittle">
     <h2>Your custom plan details</h2>
    </div>
    <div className="costom">
        {plans.map((plan, index) => (
          <div key={index} className="card" 
          onClick={plan.name === 'Yearly vedic Plan' ? handleVedicPlanClick : undefined}
>
            <h4>{plan.name}</h4>
            <p>Amount: {plan.amount}</p>
            <p>Duration: {plan.duration}</p>
            <p>API Request: {plan.apiRequest}</p>
          </div>
        ))}
      </div>
      <div className="Vedic-api">
       <VedicAstrologyAPI />
       </div>
       <div className="Western-api">
       <WesternAPI />
       </div>
      <button className="subscribe-button">Click Here to Subscribe</button>
    </div>
    
  )
}
export default CostomPlan