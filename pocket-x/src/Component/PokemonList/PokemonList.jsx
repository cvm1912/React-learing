import React, { useEffect, useState } from 'react'


const PokemonList = () => {
  

    const [x,setX] =useState(0);
    const[y,setY] = useState(0);

      useEffect(()=>{
        console.log("usestate callled")
    },[x])
    
  return (
    <>
    <div>
      x:{x} 
      <button onClick={()=>setX(x+1)}>inc</button>
    </div>

      <div>
      y:{y} 
      <button onClick={()=>setY(y+1)}>inc</button>
    </div>
    </>
  )
}

export default PokemonList
