import React from 'react'
import './Pokemon.css'

const Pokemon = ({name,image}) => {
  return (
    <div className='pokemon-card'>
       <div className='pokemon-name'>{name}</div>
       <div>
        <img src={image} alt={name}  className='pokemon-img'/>

       </div>
    </div>
  )
}

export default Pokemon
