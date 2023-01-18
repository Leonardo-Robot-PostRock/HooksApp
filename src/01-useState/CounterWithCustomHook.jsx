import React from 'react';
import useCounter from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>

      <button onClick={()=>increment(1)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={()=>decrement(1)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
