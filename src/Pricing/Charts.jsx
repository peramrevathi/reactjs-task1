import React, { useState } from 'react';
import {AreaChart,Area,XAxis,YAxis,Tooltip,ResponsiveContainer,} from 'recharts';
import '../Styles/Charts.css'; 
import Sidebar from './Sidebar';
const data = [
  { month: 'Jan', apiCalls: 1 },
  { month: 'Feb', apiCalls: 2 },
  { month: 'Mar', apiCalls: 1.8 },
  { month: 'Apr', apiCalls: 3 },
  { month: 'May', apiCalls: 2.5 },
  { month: 'Jun', apiCalls: 4 },
  { month: 'Jul', apiCalls: 3.3 },
  { month: 'Aug', apiCalls: 3.8 },
  { month: 'Sep', apiCalls: 4.5 },
  { month: 'Oct', apiCalls: 4.8 },
  { month: 'Nov', apiCalls: 4.5 },
  { month: 'Dec'},
];

const ApiAnalyticsDashboard = () => {
  const [plan, setPlan] = useState('Western Basic Plan');
  const [duration, setDuration] = useState('Yearly');

  return (
    <div style={{display:'flex'}}>
      <Sidebar />
    <div className="api-analytics-container">
      <div className="api-analysis" >
      <h1>API Analytics</h1>
      <div className="analysis" style={{display:'flex'}} >
      <p>
      Monitor your API usage easily on our analytics page.Choose between daily or monthly timeframes to get detailed insights.
        View hourly data for daily usage and daily totals for monthly usage,
        helping you analyze and optimize your performance effectively.
      </p>
      <div className="api-analytics-controls">
      <p> Choose Package</p>
        <label>
          <select value={plan} onChange={(e) => setPlan(e.target.value)}>
            <option value="Western Basic Plan">Western Basic Plan</option>
            <option value="Vedic Basic Plan">Vedic Basic Plan</option>
          </select>
        </label>
        <p> Choose Duration </p>
        <label>
          <select value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option value="Yearly">Yearly</option>
          </select>
        </label>
      </div>
      </div>
      </div>
      <div className="api-analytics-summary">
        <h3>Total API Calls on Year 2024: <button style={{background: '#FFB02F',color:'white'
}}> 98,000 </button></h3>
      </div>
      <div className="api-analytics-chart">
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 250,
            bottom: 5,
          }}
        >
            <XAxis dataKey="month" stroke="#666" />
            <YAxis 
              stroke="#666" 
              domain={[0, 4]} 
              tickCount={6} 
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: '5px',
                color: '#333',
                width:'150px',
              }}
            />
            
          <Area type="monotone" dataKey="apiCalls" stroke="#8884d8" fill= "#ff9800"/>
        </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  );
};

export default ApiAnalyticsDashboard;
