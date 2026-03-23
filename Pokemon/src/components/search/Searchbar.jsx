import React from 'react'
import './Searchbar.css';

const Searchbar = () => {
  return (
    <div className='pokedex-search'>
     <input
       type="text"
       placeholder='Pokemon name'
       className='input-search'
       />
    </div>
  )
}

export default Searchbar
