
import React from 'react';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  IconButton } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../Styles/Payment.css'
import Sidebar from './Sidebar';

const BasicMonthlyPayment = () => {
  const data = [
    {
       invoice: 'INV_01',
        package: 'Vedic Astrology API', 
        plan: 'Basic',
         paymentDate: '12 Jan 2024 | 11:30 AM', 
         amount: '₹ 2,500.00' 
    },
    {
      invoice: 'INV_01',
       package: 'Vedic Astrology API', 
       plan: 'Basic',
        paymentDate: '12 Jan 2024 | 11:30 AM', 
        amount: '₹ 2,500.00' 
   },
   {
    invoice: 'INV_01',
     package: 'Vedic Astrology API', 
     plan: 'Basic',
      paymentDate: '12 Jan 2024 | 11:30 AM', 
      amount: '₹ 2,500.00' 
 },
 {
  invoice: 'INV_01',
   package: 'Vedic Astrology API', 
   plan: 'Basic',
    paymentDate: '12 Jan 2024 | 11:30 AM', 
    amount: '₹ 2,500.00' 
},
{
  invoice: 'INV_01',
   package: 'Vedic Astrology API', 
   plan: 'Basic',
    paymentDate: '12 Jan 2024 | 11:30 AM', 
    amount: '₹ 2,500.00' 
},
{
  invoice: 'INV_01',
   package: 'Vedic Astrology API', 
   plan: 'Basic',
    paymentDate: '12 Jan 2024 | 11:30 AM', 
    amount: '₹ 2,500.00' 
},
  ];
  const handleDownloadAll = () => {
  
  };

  return (

    <div  className="payment-sidebar" style={{display:'flex'}}>
    <Sidebar />
    <div className="payment-history-container">
        <IconButton sx={{width: '33px',height: '33px',top: '19px',left: '1000px',color:'black'}}>
     <AccountCircleOutlinedIcon sx={{fontSize:'5rem'}} />
     </IconButton>
      <div className="go-back">
        <ArrowBackIcon className="back-icon" />
        <a href="/BasicMonthlyvedic" className="back-link">Go Back</a>
      </div>
      <div className="sub-heading">
      <h2 className="sub">Payment History</h2>
      <p className="subtitle">
        Easily access your plan details, including plan name, payment amount, and payment date, and conveniently download your invoice.
      </p>
      </div>
      <table className="payment-history-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Invoice</th>
            <th>Package</th>
            <th>Plan</th>
            <th>Payment Date</th>
            <th>Amount</th>
            <th>
                <button
                  className="download-button"
                  onClick={handleDownloadAll}
                >
                  Download All
                </button>
              </th>

          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{row.invoice}</td>
              <td>{row.package}</td>
              <td>{row.plan}</td>
              <td>{row.paymentDate}</td>
              <td>{row.amount}</td>
              <td><FileDownloadOutlinedIcon className="download-icon" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default BasicMonthlyPayment;
