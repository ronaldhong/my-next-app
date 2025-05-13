import React, { useState, useMemo } from 'react';
import styles from '../app.module.scss';


/*
🎯 Goal:
See how useMemo prevents unnecessary recalculations of expensive logic.
*/

function slowFunction(num) {
    console.log('🧠 Calculating slowly...');
    for (let i = 0; i < 1e9; i++) {} // simulate heavy computation
    return num * 2;
}

const UseMemoExample = (props) => {
    const [count , setCount] = useState(0);
    const [text, setText] = useState('');

    const increment = () => setCount(count + 1);
    const reset = () => setCount(0);

    const result = useMemo(() => slowFunction(count), [count, text]);

    return (
        <div>
            <h1>Click Counter {props.number}</h1>
            <p>You have clicked the button {count} times</p>
            <button className={styles.btn} onClick={increment}>Click Me</button>
            <br />
            <button className={styles.btn} onClick={reset}>reset</button>
            <br />
            <div>this is a complex calculation: {result}</div>
            <br />
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Type something"
                style={{backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px'}}
            />
        </div>
    );
};

export default UseMemoExample;