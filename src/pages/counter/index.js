import React, { useState } from 'react';
import styles from '../app.module.scss';

const Counter = (props) => {
    const [count , setCount] = useState(0);
    let badCounter = 0

    const increment = () => setCount(count + 1);
    const reset = () => setCount(0);

    const incrementBad = () => {
        // This is a bad practice, as it directly modifies the variable without using state
        console.log("clicked")
        badCounter = badCounter + 1;
    }

    const resetBad = () => {
        // This is a bad practice, as it directly modifies the variable without using state
        badCounter = 0;
    }

    return (
        <div>
            <h1>Click Counter {props.number}</h1>
            <p>You have clicked the button {count} times</p>
            <button className={styles.btn} onClick={increment}>Click Me</button>
            <br />
            <button className={styles.btn} onClick={reset}>reset</button>
            <br />
            <br />
            <div>directly update the variable (X)</div> 
            <p>You have clicked the button {badCounter} times</p>
            <button className={styles.badBtn} onClick={incrementBad}>Click Me</button>
            <br />
            <button className={styles.badBtn} onClick={resetBad}>reset</button>
        </div>
    );
};

export default Counter;