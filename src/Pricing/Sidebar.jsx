import React from 'react';
import '../App.css'
import logo from '../assests/astro.png';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NoteIcon from '@mui/icons-material/Note';

const Sidebar = () => {
  return (
    <div>
      <Box sx={{ bgcolor: 'black', width: '85px', height: '1500px' }}>
        <div className='astro'>
          <img src={logo} alt="Logo" />
        </div>
        <List sx={{ height: '100px', top: '50px', left: '15px',gap:'70px' }}>
          <ListItem  sx={{ marginBottom: '20px' }}>
            <ListItemIcon sx={{ color: 'white', mr: 10,width: '23px',height: '23px'}}>
              <HomeIcon sx={{ fontSize: '2rem' }} />
            </ListItemIcon>
            <ListItemText />
          </ListItem>
          <ListItem  sx={{ marginBottom: '20px' }}>
            <ListItemIcon sx={{ color: 'white', mr: 10, width: '23px',height: '23px'}}>
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </ListItemIcon>
            <ListItemText />
          </ListItem>
          <ListItem  sx={{ marginBottom: '20px' }}>
            <ListItemIcon sx={{ color: 'white', mr: 10,width: '23px',height: '23px' }}>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '2rem' }} />
          </ListItem>
          <ListItem  sx={{ marginBottom: '20px' }}>
            <ListItemIcon sx={{ color: 'white', mr: 10,width: '23px',height: '23px' }}>
              <InsertChartIcon  sx={{ fontSize: '2rem' }} />
            </ListItemIcon>
            <ListItemText />
          </ListItem>
          <ListItem  sx={{ marginBottom: '20px' }}>
            <ListItemIcon sx={{ color: 'white', mr: 10,width: '23px',height: '23px' }}>
              <NoteIcon sx={{ fontSize: '2rem' }}/>
            </ListItemIcon>
            <ListItemText />
          </ListItem>
        </List>
      </Box>
    </div>
  );
}

export default Sidebar;
