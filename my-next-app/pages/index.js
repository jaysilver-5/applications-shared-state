// pages/index.js
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [count, setCount] = useState(0);

  const incrementCount = async () => {
    try {
      // Call the API to update the shared state
      await axios.post('http://localhost:3001/increment', { count: count + 1 });

      // Update the local state
      setCount(count + 1);
    } catch (error) {
      console.error('Error incrementing count:', error);
    }
  };

  return (
    <div>
      <h1>Next.js App</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Home;
