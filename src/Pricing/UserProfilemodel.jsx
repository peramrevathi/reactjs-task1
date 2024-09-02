import React from 'react';
import account from '../assests/account.png'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/UserProfile.css'
import { Button ,IconButton} from '@mui/material';

const UserProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
      <IconButton
          className="close"
          onClick={onClose}
          sx={{ position: 'absolute', marginLeft:'90px'}}>
          <CloseIcon sx={{fontSize:'2rem' }}/>
        </IconButton>
        <div className="profile-info">
        <img src={account} alt='Account' />
          <h2>{user.name}</h2>
          <Button variant='contained' sx={{marginLeft:'20px',borderRadius: '2px 0px 0px 0px',background: 'linear-gradient(180deg, #FEAF2D 0%, #EC9303 100%)'}}>Edit Profile</Button>
          <p style={{marginRight:'120px'}}>
            <span><strong>Gender</strong>:</span> {user.gender}
          </p>
          <p style={{marginRight:'20px'}}>
            <span><strong>Email</strong>:</span> {user.email}
          </p>
          <p style={{marginRight:'60px'}}>
            <span><strong>Mobile</strong>:</span> {user.mobile}
          </p>
          <p>
            <span><strong>Plans</strong>:</span> {user.plans.join(', ')}
          </p>
          <p style={{marginRight:'110px'}}>
            <span><strong>Days Left</strong>:</span> {user.daysLeft} days
          </p>
          <button className="logout">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
