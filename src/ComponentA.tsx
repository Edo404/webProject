//USECONTEXT
//react hook that allows you to share values between multiple levels of
//components without passing props throught each level

import { useState, useEffect, useContext } from "react";
import ComponentB from './ComponentB.tsx';

function MyComponentA(){


    return(<>
        <div className="box">
            <h1>Component A</h1>
            <ComponentB/>
        </div>
    </>);
}

export default MyComponentA