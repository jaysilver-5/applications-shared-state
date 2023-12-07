// components/IncrementButton.js
import React from 'react';
import axios from 'axios';

const IncrementButton = () => {
  const handleIncrement = async () => {
    try {
      await axios.post('http://localhost:3000/api/increment');
    } catch (error) {
      console.error('Error incrementing counter:', error);
    }
  };

  return (
    <div>
      <h1>Next.js App</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default IncrementButton;
