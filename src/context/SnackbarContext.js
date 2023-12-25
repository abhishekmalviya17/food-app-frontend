// src/context/SnackbarContext.js

import React, { createContext, useContext, useState } from 'react';
import Snackbar from '../components/common/Snackbar';

export const SnackbarContext = createContext();

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ message: '', type: '', open: false });

  const showSnackbar = (message, type = 'info') => {
    setSnackbar({ message, type, open: true });
    setTimeout(() => {
      setSnackbar({ message: '', type: '', open: false });
    }, 3000);
  };

  return (
    <SnackbarContext.Provider value={{ snackbar, showSnackbar }}>
      {children}
      {snackbar.open && <Snackbar message={snackbar.message} type={snackbar.type} />}
    </SnackbarContext.Provider>
  );
};
