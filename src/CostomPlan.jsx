import React from 'react'
import VedicAstrologyAPI from './VedicAstrologyAPI';
import WesternAPI from './WesternAPI';
import { FaHome } from "react-icons/fa";
const CostomPlan = () => {
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
  return (
    <div>
     <header className="Header">
        <h1>AstroChalit</h1>
        <FaHome/>
     </header>
     \
    <div className="tittle">
     <h2>Your custom plan details</h2>
    </div>
    <div className="costom">
        {plans.map((plan, index) => (
          <div key={index} className="card">
            <h4>{plan.name}</h4>
            <p>Amount: {plan.amount}</p>
            <p>Duration: {plan.duration}</p>
            <p>API Request: {plan.apiRequest}</p>
          </div>
        ))}
      </div>
       <VedicAstrologyAPI/>
       <WesternAPI/>
      <button className="subscribe-button">Click Here to Subscribe</button>
    </div>

  )
}
export default CostomPlan