import React from 'react';

const CustomButton = () => {
  return (
    <button
      style={{
        backgroundColor: '#f0ad4e',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Custom Button from Provider
    </button>
  );
};

export default CustomButton;
