import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let[count,SetCount] =useState(0);

    function Inc(){
        SetCount(count+1);
    }

    function Dec(){
        SetCount(count-1);
    }
  return (
    <div>
       <h1>Counter Component</h1>
         cout : {count}
         <br/>
        <button onClick={()=>{Inc()}}>Inc</button>
        <button onClick={()=>{Dec()}}>Dec</button>
    </div>
  )
}

export default Counter
 