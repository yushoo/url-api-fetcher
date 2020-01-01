import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //state hook, count initialized to 0
  const [count, setCount] = useState(0);

  //after button has pressed, after rendering, update the count
  useEffect(() => {
    document.title = `${count}`;
  });

  return (
   <div> 
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>click here</button>
   </div>
  );

}

export default App;
