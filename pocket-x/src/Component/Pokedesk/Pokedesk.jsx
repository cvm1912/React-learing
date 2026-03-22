import React from 'react'
import Search from '../Search/Search'
import './Pokedesk.css'
import PokemonList from '../PokemonList/PokemonList'

const Pokedesk = () => {
  return (
    <div className='pokedesk-wrapper'>
        <h1>Pokemon</h1>
      <Search/>
      <PokemonList/>
    </div>
  )
}

export default Pokedesk
