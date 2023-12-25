import React, { useEffect, useState } from 'react';
import { useSnackbar } from '../../context/SnackbarContext';

const Snackbar = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { snackbar } = useSnackbar();

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Snackbar will disappear after 3 seconds
    }
  }, [message]);

  if (!isVisible) return null;

  const snackbarStyle = {
    backgroundColor: type === 'error' ? 'red' : type === 'success' ? 'green' : 'blue',
    color: 'white',
    padding: '10px',
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    borderRadius: '5px',
    zIndex: 1000,
    transition: 'all 0.5s ease',
    transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
  };

  return (
    <div style={snackbarStyle}>
      {snackbar.message}
    </div>
  );
};

export default Snackbar;
