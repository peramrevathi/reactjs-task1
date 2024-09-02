import React from 'react';
import { AreaChart, Area, XAxis, YAxis,  Tooltip, ResponsiveContainer } from 'recharts';

const dailyData = [
    { hour: '1', apiCalls: 20 },
    { hour: '2', apiCalls: 35 },
    { hour: '3', apiCalls: 45 },
    { hour: '4', apiCalls: 50 },
    { hour: '5', apiCalls: 60 },
    { hour: '6', apiCalls: 55 },
    { hour: '7', apiCalls: 40 },
    { hour: '8', apiCalls: 70 },
    { hour: '9', apiCalls: 75 },
    { hour: '10', apiCalls: 80 },
    { hour: '11', apiCalls: 65 },
    { hour: '12', apiCalls: 85 },
    { hour: '13', apiCalls: 90 },
    { hour: '14', apiCalls: 95 },
    { hour: '15', apiCalls: 100 },
    { hour: '16', apiCalls: 85 },
    { hour: '17', apiCalls: 70 },
    { hour: '18', apiCalls: 60 },
    { hour: '19', apiCalls: 55 },
    { hour: '20', apiCalls: 50 },
    { hour: '21', apiCalls: 45 },
    { hour: '22', apiCalls: 40 },
    { hour: '23', apiCalls: 35 },
    { hour: '24', apiCalls: 30 }
  ];
  
  

const DailyChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={dailyData} >
      <defs>
        <linearGradient id="colorApiCalls" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ff9800" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ff9800" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="hour" />
      <YAxis domain={[0, 60]} ticks={[0, 15, 30, 45, 60]} tickFormatter={(tick) => (tick / 15).toFixed(0)} />
      <Tooltip />
      <Area type="monotone" dataKey="apiCalls" stroke="#ff9800" fillOpacity={1} fill="url(#colorApiCalls)" />
    </AreaChart>
  </ResponsiveContainer>
);

export default DailyChart;
