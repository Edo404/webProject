import { useState, useEffect, useContext } from "react";
import ComponentD from './ComponentD.tsx';
import { UserContext } from "./ComponentA";

function MyComponentC(){

    const user = useContext(UserContext);

    return(<>
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello 2 ${user}`}</h2>
            <ComponentD></ComponentD>
        </div>
    </>);
}

export default MyComponentC