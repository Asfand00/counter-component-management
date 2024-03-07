import React, { useState } from 'react';

const Counter = () => {
  // State for the count
  const [count, setCount] = useState(0);

  // Function to increment the count by 1
  const increment = () => {
    setCount(count + 1);
  };

  // Function to increment the count by 1 after a 2-second delay
  const incrementAfterDelay = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };

  // Function to increment the count by 2 immediately
  const incrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  // Function to correctly increment the count by 2 using a state updater function
  const correctIncrementTwice = () => {
    setCount(prevCount => prevCount + 2);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAfterDelay}>Increment After Delay</button>
      <button onClick={incrementTwice}>Increment Twice</button>
      <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
    </div>
  );
};

export default Counter;
