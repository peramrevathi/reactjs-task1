
import React  from 'react';
import { AreaChart, Area, XAxis, YAxis,  Tooltip, ResponsiveContainer } from 'recharts';

const yearlyData = [
  { month: 'Jan', apiCalls: 1000 },
  { month: 'Feb', apiCalls: 1200 },
  { month: 'Mar', apiCalls: 800 },
  { month: 'Apr', apiCalls: 1500 },
  { month: 'May', apiCalls: 2000 },
  { month: 'Jun', apiCalls: 2200 },
  { month: 'Jul', apiCalls: 1800 },
  { month: 'Aug', apiCalls: 2500 },
  { month: 'Sep', apiCalls: 2000 },
  { month: 'Oct', apiCalls: 2700 },
  { month: 'Nov', apiCalls: 3000 },
  { month: 'Dec', apiCalls: 2800 },
];

const YearlyChart = () => (
   
    
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={yearlyData} >
      <defs>
        <linearGradient id="colorApiCalls" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ff9800" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ff9800" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="month" />
      <YAxis domain={[0, 4000]} ticks={[0, 1000, 2000, 3000, 4000]} tickFormatter={(tick) => (tick / 1000).toFixed(0)} />
      <Tooltip />
      <Area type="monotone" dataKey="apiCalls" stroke="#ff9800" fillOpacity={1} fill="url(#colorApiCalls)" />
    </AreaChart>
  </ResponsiveContainer>
  
);

export default YearlyChart;
