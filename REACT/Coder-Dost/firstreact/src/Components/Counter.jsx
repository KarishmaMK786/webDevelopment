import React from 'react';
import { useState } from 'react';
import './Counter.css';

function Counter(){
   const [number, setNumber] = useState(0);
    function handleClick(e){
        e.stopPropagation();
        setNumber(number=>number+1);
        setNumber(number=>number+1);
        setNumber(number=>number+1);
        console.log(number);
    }
    return (
        <>
            <h1 style={{color:"white"}}>{number}</h1>
            <button id="counter" onClick={handleClick}>Add</button>
        </>
    )
}
export default Counter;