import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Home />
  </React.StrictMode>
  </BrowserRouter>
);

