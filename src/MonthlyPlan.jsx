import React from 'react'
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

const MonthlyPlan = () => {
  return (
    <div className="plans">
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

export default MonthlyPlan