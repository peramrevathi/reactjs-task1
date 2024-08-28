import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './Pricing/Pricing';
import CostomPlan from './Pricing/CostomPlan';
import CustomPlanform from './Pricing/CustomPlanform';
import Landing from './Landing';
import YearlyVedicPlan from './Pricing/YearlyVedicPlan';
import MonthlyPlan from './Pricing/MonthlyPlan';
import Plans from './Pricing/Plans';
import Loginpage from './Login/Loginpage';
import SignUp from './Login/SignUp';
import ForgotPassword from './Login/ForgotPassword';
import ResetPassword from './Login/ResetPassword';


const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/ForgotPassword" element={<Loginpage/>} />
        <Route path="/" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />}/>
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/CustomPlan" element={<CostomPlan />} />
        <Route path="/CustomPlanform" element={<CustomPlanform />} />
        <Route path="/YearlyVedicPlan" element={<YearlyVedicPlan/>} />
        <Route path="/" element={<MonthlyPlan />} />
        <Route path="/plans/basic-vedic-plan" element={<Plans />} /> 
      </Routes>
    </Router>
  );
}


export default Home;