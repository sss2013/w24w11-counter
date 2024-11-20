import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev: number) => prev + 1);
          setCount((prev: number) => prev + 1);
          setCount((prev: number) => prev + 1);
          setCount((prev: number) => prev + 1);
          setCount((prev: number) => prev + 1);
        }}
      >
        증가
      </button>
    </>
  );
}

export default App;
