//USECONTEXT
//react hook that allows you to share values between multiple levels of
//components without passing props through each level

//Provider Component
//1 import createContext
//2 export const MyContext = createContext();
//3 <MyContext.Provider value = {value}>
//       <Child />
//  </MyContext.Provider>

//COnsumer Components
//1 import React, {useContext} from 'react'
//  import {myContext} from './ComponentA';
//2 const value = useContext(MyContext);

import { useState, createContext } from "react";
import ComponentB from './ComponentB.tsx';

export const UserContext = createContext();

function MyComponentA(){

    const[user,setUser] = useState("Edoardo");

    return(<>
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    </>);
}

export default MyComponentA