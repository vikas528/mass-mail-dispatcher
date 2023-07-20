import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  let normalCount = count;

  const handleButtonClick = () => {
    setCount(count + 1);
    console.log(normalCount);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Normal Count: {normalCount}</p>
      <button onClick={handleButtonClick}>Increment Count</button>
    </div>
  );
}

export default MyComponent;
