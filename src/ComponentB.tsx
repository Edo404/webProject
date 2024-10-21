import { useState, useEffect, useContext } from "react";
import ComponentC from './ComponentC.tsx';

function MyComponentB(){


    return(<>
        <div className="box">
            <h1>Component B</h1>
            <ComponentC></ComponentC>
        </div>
    </>);
}

export default MyComponentB