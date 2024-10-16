//CHANGE STATUS
//setCar(c => ({...c, year: event.target.value }));
//Function that takes the previous car (c) and update only one of the states, Year

import React, {useState} from 'react';

function MyComponent3(){

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    function handleYearChanghe(event){
        setCar(c => ({...c, year: event.target.value }));
    }
    
    function handleMakeChanghe(event){
        setCar(c => ({...c, make: event.target.value }));
    }
    
    function handleModelChanghe(event){
        setCar(c => ({...c, model: event.target.value }));
    }

    return(<>
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChanghe}/><br />
            <input type="text" value={car.make} onChange={handleMakeChanghe}/><br />
            <input type="text" value={car.model} onChange={handleModelChanghe}/><br />
        </div>
    </>);
}

export default MyComponent3