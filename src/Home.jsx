import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './Pricing/Pricing';
import CostomPlan from './Pricing/CostomPlan';
import CustomPlanform from './Pricing/CustomPlanform';
import Landing from './Landing';
import YearlyVedicPlan from './Pricing/YearlyVedicPlan';

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/CustomPlan" element={<CostomPlan />} />
        <Route path="/CustomPlanform" element={<CustomPlanform />} />
        <Route path="/YearlyVedicPlan" element={<YearlyVedicPlan/>} />
      </Routes>
    </Router>
  );
}


export default Home;