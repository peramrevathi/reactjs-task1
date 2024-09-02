import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  IconButton } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../../Styles/Charts.css';
import Sidebar from '../Sidebar';
import YearlyChart from './YearlyChart';
import MonthlyChart from './MonthlyChart';
import DailyChart from './DailyChart';

const ApiAnalyticsDashboard = () => {
  const [plan, setPlan] = useState('Western Basic Plan');
  const [duration, setDuration] = useState('Yearly');
  const [year, setYear] = useState('2024');

  const renderChart = () => {
    switch (duration) {
      case 'Yearly':
        return <YearlyChart />;
      case 'Monthly':
        return <MonthlyChart />;
      case 'Daily':
        return <DailyChart />;
      default:
        return <YearlyChart />;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="api-analytics-container">
      <IconButton sx={{width: '33px',height: '33px',top: '19px',left: '1100px',color:'black'}}>
     <AccountCircleOutlinedIcon sx={{fontSize:'5rem'}} />
     </IconButton>
      <div className="go-back">
        <ArrowBackIcon className="back-icon" />
        <a href="/BasicMonthlyvedic" className="back-link">Go Back</a>
        </div>
        <div className="api-analysis">
          <h1>API Analytics</h1>
          <div className="analysis">
            <p>
              Monitor your API usage easily on our analytics page. Choose between daily or monthly timeframes to get detailed insights.
              View hourly data for daily usage and daily totals for monthly usage,
              helping you analyze and optimize your performance effectively.
            </p>
          </div>
          <div className="controls-container">
            <div className="controls">
              <div className="control-group">
                <label>Choose Plan</label>
                <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                  <option value="Western Basic Plan">Western Basic Plan</option>
                  <option value="Vedic Basic Plan">Vedic Basic Plan</option>
                </select>
              </div>
              <div className="control-group">
                <label>Choose Duration</label>
                <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                  <option value="Yearly">Yearly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Daily">Daily</option>
                </select>
              </div>
              <div className="control-group">
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
          </div>
          <div className="chart-container">
            {renderChart()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiAnalyticsDashboard;
