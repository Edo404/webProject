import { useState, useEffect, useContext } from "react";
import ComponentD from './ComponentD.tsx';

function MyComponentC(){


    return(<>
        <div className="box">
            <h1>Component C</h1>
            <ComponentD></ComponentD>
        </div>
    </>);
}

export default MyComponentC