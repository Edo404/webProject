//UPDATER FUNCTION
//Function passed as an argument to setState() usually 
//ex. setYear(arrow function)
//Allow for safe updates based on the previous state
//Used with multiple state updates and asynchronous functions
//Good practice to use updater functions


import React, {useState} from 'react';

function MyComponent2(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    )
}

export default MyComponent2