import { useState, useEffect, useContext } from "react";
import ComponentC from './ComponentC.tsx';
import { UserContext } from "./ComponentA";

function MyComponentB(){

    const user = useContext(UserContext);
    return(<>
        <div className="box">
            <h1>Component B</h1>
            <h2>{`Hello 1 ${user}`}</h2>
            <ComponentC></ComponentC>
        </div>
    </>);
}

export default MyComponentB