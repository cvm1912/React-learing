import React from 'react'
import Searchbar from '../search/Searchbar'
import PokemonList from '../PokemonList/PokemonList'

const Pokedex = () => {
  return (
    <div>
      <h1 className='header'>P O C K E D E X</h1>
      <Searchbar/>
      <PokemonList/>
    </div>
  )
}

export default Pokedex
