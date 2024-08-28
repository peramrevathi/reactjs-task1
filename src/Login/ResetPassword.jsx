import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Visibility, VisibilityOff, MailOutline} from '@mui/icons-material';
import { TextField, Button ,IconButton} from '@mui/material';
import '../Styles/ResetPassword.css'
const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] =useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleResetPassword = () => {
    // Add your password reset logic here
    console.log('Reset password:', { email, password, confirmPassword });
  };

  return (
    <div className="Reset-container">
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto'}}>
      <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <ArrowBackIcon style={{ marginRight: '8px' }} />
        Go Back
      </a>
      <h2>Forgot Password</h2>
      <p>No worries! Just enter your registered email, and we'll send you an OTP. Enter the OTP here to verify your email and reset your password.</p>
      <h6 className="signup-textfield-heading">Email Address</h6>
      <TextField
        label="Email Address"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
            endAdornment: (
              <MailOutline />
            ),
          }}
      />
       <h6 className="signup-textfield-heading">Password</h6>
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
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
            
      />
       <h6 className="signup-textfield-heading">Confirm Password</h6>
      <TextField
        label="Confirm Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
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
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleResetPassword}
        fullWidth
        style={{ marginTop: '20px',background: 'linear-gradient(355.17deg, #EB9200 3.88%, #FFB02F 96.11%)' }}
      >
        Reset Password
      </Button>
    </div>
    </div>
  );
};

export default ResetPassword;
