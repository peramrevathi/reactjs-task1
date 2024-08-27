import React from 'react'

const plans = [
            {
                name: 'Basic Vedic Plan',
                amount: '25,000',
                duration: '365 days',
                apiRequest: '50k/month',
            },
            {
                name: 'Standard Vedic Plan',
                amount: '50,000',
                duration: '365 days',
                apiRequest: '125k/month',
            },
            {
                name: 'Premium Vedic Plan',
                amount: '1,20,000',
                duration: '365 days',
                apiRequest: '350k/month',
            },
        ];

const YearlyPlan = () => {
  return (
   <div className="plans">
    <h3>Pay for just 10 months and get 12 months access</h3>
    <div className="cards">
    {plans.map((plan, index) => (
      <div key={index} className={`plan-card ${plan.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <h3>{plan.name}</h3>
        <p>Amount: {plan.amount}</p>
        <p>Duration: {plan.duration}</p>
        <p>API Request: {plan.apiRequest}</p>
      </div>
    ))}
    </div>
    </div>
  )
}

export default YearlyPlan