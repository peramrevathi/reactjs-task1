import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
    { day: '1d', apiCalls: 300 },
    { day: '2d', apiCalls: 500 },
    { day: '3d', apiCalls: 200 },
    { day: '4d', apiCalls: 700 },
    { day: '5d', apiCalls: 1000 },
    { day: '6d', apiCalls: 450 },
    { day: '7d', apiCalls: 650 },
    { day: '8d', apiCalls: 800 },
    { day: '9d', apiCalls: 300 },
    { day: '10d', apiCalls: 500 },
    { day: '11d', apiCalls: 600 },
    { day: '12d', apiCalls: 750 },
    { day: '13d', apiCalls: 900 },
    { day: '14d', apiCalls: 1100 },
    { day: '15d', apiCalls: 400 },
    { day: '16d', apiCalls: 550 },
    { day: '17d', apiCalls: 700 },
    { day: '18d', apiCalls: 850 },
    { day: '19d', apiCalls: 950 },
    { day: '20d', apiCalls: 1000 },
    { day: '21d', apiCalls: 850 },
    { day: '22d', apiCalls: 750 },
    { day: '23d', apiCalls: 600 },
    { day: '24d', apiCalls: 550 },
    { day: '25d', apiCalls: 400 },
    { day: '26d', apiCalls: 500 },
    { day: '27d', apiCalls: 600 },
    { day: '28d', apiCalls: 750 },
    { day: '29d', apiCalls: 900 },
    { day: '30d', apiCalls: 1000 },
    { day: '31d', apiCalls: 1200 },
  ];
  

const MonthlyChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={monthlyData} >
      <defs>
        <linearGradient id="colorApiCalls" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ff9800" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ff9800" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="day" />
      <YAxis domain={[0, 1000]} ticks={[0, 250, 500, 750, 1000]} tickFormatter={(tick) => (tick / 250).toFixed(0)} />
      <Tooltip />
      <Area type="monotone" dataKey="apiCalls" stroke="#ff9800" fillOpacity={1} fill="url(#colorApiCalls)" />
    </AreaChart>
  </ResponsiveContainer>
);

export default MonthlyChart;
