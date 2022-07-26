import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../Services/Actions/CounterActions';


const Counter = () => {
    const count = useSelector((state)=> state.count);
    console.log(count);
   const dispatch = useDispatch();
    const handleIncrement =() => {
        dispatch(incrementCounter());
    }
    const handleDecrement =() => {
        dispatch(decrementCounter());
    }
    const handleReset =() => {
        dispatch(resetCounter());
    }
  return <div>
    <h1> Counter app</h1>
    <h3>Count : {count}</h3>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
   
  </div>;
};

export default Counter;
