import React from 'react';

const VedicPlan = () => {
  // Array of plan objects
  const plans = [
    {
      name: 'Basic Vedic Plan',
      amount: '$500',
      duration: '15 days',
      apiRequest: '100/month',
    },
    {
      name: 'Standard Vedic Plan',
      amount: '$1000',
      duration: '30 days',
      apiRequest: '200/month',
    },
    {
      name: 'Premium Vedic Plan',
      amount: '$1500',
      duration: '30 days',
      apiRequest: '300/month',
    },
  ];

  return (
    <div>
      <div>
      <section className="plan-section">
        <h2>Choose Plan</h2>
        <div className="plan-options">
          <div className="plan-option">
            <button>Monthly</button>
          </div>
          <div className="plan-option">
            <button>Yearly</button>
          </div>
        </div> 
    
        <div className="plans">
          <h3>pay for just 10months and get 12months access</h3>
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <h3>{plan.name}</h3>
              <p>Amount: {plan.amount}</p>
              <p>Duration: {plan.duration}</p>
              <p>API Request: {plan.apiRequest}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="next">
        <button className="next-button">Next</button>
      </div>
    </div>
    </div>
  );
};

export default VedicPlan;
