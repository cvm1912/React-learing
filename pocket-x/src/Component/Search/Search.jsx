import React from 'react'
import './search.css'
const Search = () => {
  return (
    <div className='search-wrapper'>
      <input
       id='pokiemon-search'
       type='text'
       placeholder='pokemon name.'
      />
    </div>
  )
}

export default Search
