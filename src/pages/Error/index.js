// NotFound.js
import React from 'react';
import ErrorOutline from '@mui/icons-material/ErrorOutline';

const NotFound = () => {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <ErrorOutline style={{ fontSize: 100, color: '#ff0000' }} />
      <h1 style={{ fontSize: 24, marginBottom: 10, color: '#ff0000' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: 18, color: '#666' }}>Warning: this page does not exist!</p>
      <p style={{ fontSize: 18, color: '#666' }}>Please check the URL and try again.</p>
    </div>
  );
};

export default NotFound;