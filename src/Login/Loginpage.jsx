import React , {useState} from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, MailOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../Styles/Login.css';  // Import the CSS file
import astroLogo from '../assests/astro.png';
import googleIcon from '../assests/google-icon.png';

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="container">
      <div className="logo-container">
        <img src={astroLogo} alt="Logo" className="logo" />
      </div>
      <h2 className="title">Welcome Back</h2>
      <p className="subtitle">Login to unlock our astrological API</p>
      <button className="google-login-btn">
        <img src={googleIcon} alt="Google Icon" className="google-icon" />
        Login with Google
      </button>
      <div className="divider-container">
        <hr className="divider" />
        <span className="or-text">or</span>
        <hr className="divider" />
      </div>
      <p className="signup-textfield-heading">Full Name</p>
      <TextField
        variant="outlined"
        label="Email Address"
        type="email"
        placeholder="example@gmail.com"
        fullWidth
        InputProps={{
          endAdornment: (
            <MailOutline />
          ),
        }}
        className="text-field"
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
        className="text-field"
      />
      <div className="forgot-password-container">
        <Link to="/ForgotPassword" className="forgot-password">
          Forgot Password?
        </Link>
      </div>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="login-button" 
      >
        Login
      </Button>

      <div className="signup">
        <p>
          Don't have an Account?{' '}
          <Link to="/signup" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
