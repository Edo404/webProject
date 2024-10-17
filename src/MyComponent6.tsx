//USE EFFECT
//React hook that tells react DO SOME CODE WHEN (pick one):
//This component re renders
//this component mpunts 
//The state of a value

//useEffect(function, [dependencies])

//1.useEffect(()=>{})
//2.useEffect(()=>{}, [])
//3.useEffect(()=>{}, [value])

//1. Event listeners
//2. DOM manipulation
//3. Subscriptions
//4. Fetching data from API
//5. Clean up when component unmounts

import { useState, useEffect } from "react"

function MyComponent6(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);


    function addCount(){
        setCount(c => c + 1);
    }

    function subCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }
    

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Subtract</button><br />
        <button onClick={changeColor}>Change color</button>
    </>);
}

export default MyComponent6