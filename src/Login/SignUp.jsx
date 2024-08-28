import React from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, MailOutline, PersonOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom'; 
import '../Styles/SignUp.css'
import astroLogo from '../assests/astro.png';
import googleIcon from '../assests/google-icon.png';

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  return (
    <div className="signup-container">
      <div className="signup-logo-container">
        <img src={astroLogo} alt="Logo" className="signup-logo" />
      </div>
      <h2 className="signup-title">Welcome to AstroChalit</h2>
      <p className="signup-subtitle">Sign up to access our astrology API</p>
      <button className="signup-google-btn">
        <img src={googleIcon} alt="Google Icon" className="signup-google-icon" />
        Sign Up With Google
      </button>
      <div className="signup-divider-container">
        <hr className="signup-divider" />
        <span className="signup-or-text">or</span>
        <hr className="signup-divider" />
      </div>

      <p className="signup-textfield-heading">Full Name</p>
      <TextField
        variant="outlined"
        label="Full Name"
        type="text"
        placeholder="Enter your name"
        fullWidth
        InputProps={{
          endAdornment: (
            <PersonOutline />
          ),
        }}
        className="signup-text-field"
      />

      <p className="signup-textfield-heading">Email Address</p>
      <TextField
        variant="outlined"
        label="Email Address"
        type="email"
        placeholder="hello@gmail.com"
        fullWidth
        InputProps={{
          endAdornment: (
            <MailOutline />
          ),
        }}
        className="signup-text-field"
      />

      <p className="signup-textfield-heading">Password</p>
      <TextField
        variant="outlined"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password..."
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
        className="signup-text-field"
      />

      <p className="signup-textfield-heading">Confirm Password</p>
      <TextField
        variant="outlined"
        label="Confirm Password"
        type={showConfirmPassword ? 'text' : 'password'}
        placeholder="Enter your password..."
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={handleClickShowConfirmPassword}
              edge="end"
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
        className="signup-text-field"
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="signup-button"
      >
        Sign Up
      </Button>

      <div className="signup-login-container">
        <p>Already have an Account? <Link to="/login" className="signup-login-link">Log in</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
