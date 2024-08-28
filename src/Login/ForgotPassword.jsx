import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MailOutline } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Forgot.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']); // State for OTP input
  const [showOtpInput, setShowOtpInput] = useState(false); // State to toggle OTP input
  const [timer, setTimer] = useState(60); // Timer for OTP countdown

  useEffect(() => {
    if (showOtpInput && timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer, showOtpInput]);

  const handleSendOtp = () => {
 
    setShowOtpInput(true); // Show OTP input after sending OTP
    setTimer(60); // Reset timer for OTP input
  
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (isNaN(value)) return; // Ensure input is numeric
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next OTP input
    if (value !== '' && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleResendOtp = () => {
    setTimer(60); 
    alert('OTP has been resent to your email.');
  };

  const handleVerifyOtp = () => {
   
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="password">
      <div className="go-back">
        <ArrowBackIcon
          fontSize="large"
          aria-label='ArrowBackIcon'
          onClick={handleClose}
          sx={{ fontSize: "20px", top: 2, color: "black" }}
        /> Go Back
      </div>
      <h2 className="title">Forgot Password</h2>
      <p className="paragraph">
        No worries! Just enter your registered email, and we'll send you an OTP. Enter the OTP here to verify your email and reset your password.
      </p>
      {!showOtpInput && (
        <>
          <p className="signup-textfield-heading">Email Address</p>
          <TextField
            variant="outlined"
            label="Email Address"
            type="email"
            placeholder="hello@gmail.com"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              endAdornment: (
                <MailOutline />
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="otp-button"
            onClick={handleSendOtp}
          >
            Send OTP
          </Button>
        </>
      )}

      {showOtpInput && (
        <div className="enter-otp">
          <h2 className="heading">Enter the OTP below which was sent to your email</h2>
          <div className="otp-inputs" style={{ display: 'flex', gap: '10px' }}>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                id={`otp-input-${index}`}
                variant="outlined"
                type="text"
                inputProps={{ maxLength: 1 }}
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                className="otp-input"
                sx={{ width: '50px', textAlign: 'center' }}
              />
            ))}
          </div>

          <div className="timer" style={{ marginTop: '10px' }}>
            {`00:${timer < 10 ? `0${timer}` : timer}`}
          </div>
          <Link
            to="#"
            onClick={handleResendOtp}
            className="resend-link"
            style={{ display: 'block', marginTop: '10px', textDecoration: 'none', color: '#232323', cursor: 'pointer' }}
          >
            Resend OTP
          </Link>

          <Link
              to="/ResetPassword" 
              className="verify-link"
              style={{ 
                display: 'block', 
                marginTop: '10px', 
                background: 'linear-gradient(355.17deg, #EB9200 3.88%, #FFB02F 96.11%)',
                color: '#fff',
                textAlign: 'center',
                padding: '10px',
                textDecoration: 'none',
                borderRadius: '4px'
              }}
            >
              Verify Email
            </Link>

        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
