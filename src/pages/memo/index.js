import React, { useState, useCallback } from 'react';
import styles from '../app.module.scss';

/*
🎯 Goal:
See how React.memo helps prevent unnecessary re-renders.
*/
// Memoized child component
const Child = React.memo(({handleClick, label}) => {
    console.log("👶Child rendered ", label);
    return <p>I am the memoized child component.</p>;
});    
    
// const BadChild = () => {
//     console.log("👶 Bad Child rendered");
//     return <p>I am the bad child component</p>;
// }
      
export default function Memo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState('');

  const handleClick1 = () => {
    console.log("This is a random function that does nothing.");
  }

  const handleClick2 = useCallback(() => {
    console.log('Clicked button 2');
  }, [count]);

  return (
    <div>
      <h1>React.memo Demo</h1>
      <button className={styles.btn} onClick={() => setCount(count + 1)}>Increase Count</button>
      <button className={styles.btn} onClick={() => setCount2(count2 + 1)}>Increase Count 2</button>

      <p>Parent Count: {count}</p>
      <Child label={1} handleClick={handleClick1}  />
      <br />
      <Child label={2} handleClick={handleClick2} />

      {/* <BadChild /> */}
    </div>
  );
}
