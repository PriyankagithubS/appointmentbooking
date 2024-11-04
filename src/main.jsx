import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import App from './App';
import AppContextProvider from './context/AppContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
      <ToastContainer />
    </AppContextProvider>
  </BrowserRouter>
);
