import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import MonthlyPlan from './MonthlyPlan';
import YearlyPlan from './YearlyPlan';
 
const VedicPlan = () => {

    const [isVisible, setIsVisible] = useState(true);
  
    const showMonthly = () => {
      setIsVisible(true);
    };
  
    const showYearly = () => {
      setIsVisible(false);
    };
  return (
      <div>
      <section className="plan-section">
        <div className="api-plans">
        <h2>Choose Plan</h2>
        <div className="plan-options">
          <div className="plan-option">
          <button  style={{
            backgroundColor: isVisible ? '#EB9200':'white'  ,
            color: isVisible ? 'white':'#EB9200',
          }} className="plan-button" onClick={showMonthly} >Monthly</button>
          </div>
          <button  style={{
            backgroundColor: isVisible ? 'white' : '#EB9200',
            color: isVisible ? '#EB9200' : 'white',
          }} className="plan-button" onClick={showYearly} >Yearly</button>
          </div>
        </div>
        <div className="custom">
       <h3>Looking for a Custom Plan? <Link to='/CustomPlanform'> Click Here</Link></h3>
      </div>
      </section>
      {isVisible ? <MonthlyPlan /> : <YearlyPlan />}
    </div>
  );
};

export default VedicPlan;
