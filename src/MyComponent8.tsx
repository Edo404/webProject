//USEREF
//useRef() = use reference, does not cause re-renders when its value changes
//when you want a component to "remember" some information,
//but you don't want that information to trigger new renders

//1-accessing/interaction with DOM elements
//2-handling focus, animations, and transitions
//3-managing timers and intervals

import { useState, useRef, useEffect } from "react"



function MyComponent8(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component rendered")
        console.log(inputRef1)
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }

    return(<>
        <div>
            <button onClick={handleClick1}>
                    ClickMe 1!
                </button>
                <input ref={inputRef1} />
        </div>
        <div>
            <button onClick={handleClick2}>
                    ClickMe 2!
                </button>
                <input ref={inputRef2} />
        </div>
        <div>
            <button onClick={handleClick3}>
                    ClickMe 3!
                </button>
                <input ref={inputRef3} />
        </div>
            
    </>);
}

export default MyComponent8