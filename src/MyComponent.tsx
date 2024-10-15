//REACT HOOK
//Special function that allows functional components
//to use react features without writing class components
//(useState, useEffect, useContext, useReducer, useCallback, and more..)

//USE STATE

//A react hook that allows the creation of a stateful vriable
//AND a setter function to update its value in the Virtual DOM
//[name, setName]
import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false);
    
    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setisEmployed(!isEmployed);
    }


    return(<div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>

                <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Toggle status</button>
            </div>);
}

export default MyComponent