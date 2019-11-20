import React, { useState } from 'react';

interface Props {
  initialData: number;
};

const Counter: React.FC<Props> = (props) => {
  const [count, setCount] = useState(props.initialData);

  return (
    <div>
      <p>you have clicked { count } times</p>
      <div>
        <button onClick={() => setCount(props.initialData)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(prevData => prevData - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;