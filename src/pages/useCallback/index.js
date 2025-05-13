import React, { useState, useCallback } from 'react';
import styles from '../app.module.scss';

/*
🎯 Goal:
Demonstrate how useCallback prevents function props from being recreated on every render — which can help avoid unnecessary re-renders in child components.
 */


// Child Component with React.memo
const Child = React.memo(({ onClick, label }) => {
  console.log(`👶 Child rendered (${label})`);
  return <button onClick={onClick}>{label}</button>;
});

export default function CallbackDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // ❌ Inline function — recreated on every render
  const handleClick1 = () => {
    console.log('Clicked button 1');
  };

  // ✅ useCallback — stable reference
//   const handleClick2 = useCallback(() => {
//     console.log('Clicked button 2');
//   }, []);

//   const handleClick2 = () => {
//     console.log('Clicked button 2');
//   };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>React.useCallback Demo</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Change parent state"
      />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h3 style={{ marginTop: '1.5rem' }}>❌ Without useCallback</h3>
      <Child onClick={handleClick1} label="Button 1" />

      <h3 style={{ marginTop: '1.5rem' }}>✅ With useCallback</h3>
      {/* <Child onClick={handleClick2} label="Button 2" /> */}
    </div>
  );
}
