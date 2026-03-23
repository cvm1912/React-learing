import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './PokemonList.css'
import Pokemon from '../pokemon/Pokemon';

const PokemonList = () => {

    const [pokemonsList, setpokemonsList] = useState([]);
    const [isDownload, setIsDownload] = useState(true);
    const POKEDEX = "https://pokeapi.co/api/v2/pokemon"
    async function downloadPokemons(){
        const response = await axios.get(POKEDEX);
        const pokemonResults = response.data.results
        console.log(response.data);
        

        // pokemonResults.map((pokemon)=> console.log(pokemon.url));
        const pokemonUrls =  pokemonResults.map((pokemon)=> axios.get(pokemon.url));

        const pokemonData = await axios.all(pokemonUrls)
        
        const pokemons = pokemonData.map((pokemons)=>{
            const pokeData = pokemons.data;
            
            return {
                id: pokeData.id,
                name: pokeData.name,
                sprite: pokeData.sprites.front_default
            }
        })
        
        setpokemonsList(pokemons);
        console.log(pokemons)
        setIsDownload(false)



    }

    useEffect(()=>{
        downloadPokemons();
        
    },[])

  return (
   <div className='pokemon-list'>
      <h1>POKEMON'S</h1>
      <div className='pokemon-grid'>
        {(isDownload)?'Loading':
            pokemonsList.map((p)=> <Pokemon name={p.name} image={p.sprite} key={p.id}/>)
        }
      </div>
    </div>
  )
}

export default PokemonList
