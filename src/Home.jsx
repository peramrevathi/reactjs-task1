import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Section from './Section';
import CostomPlan from './CostomPlan';// Adjust the import based on your component name

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/CustomPlan" element={<CostomPlan />} /> {/* Check the path spelling */}
      </Routes>
    </Router>
  );
}


export default Home;