import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function downloadPokemon() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const pokemonResult = response.data.results;
    
    

      const pokemonResultPromise = pokemonResult.map((pokemon) =>
        axios.get(pokemon.url) 
      );

      const pokemonData = await axios.all(pokemonResultPromise);



      const finalData = pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
        console.log(pokemon);
        
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
        };
      });

      setPokemonList(finalData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    downloadPokemon();
  }, []);

  return (
    <div className='pokemon-list-wrapper'>
      <h1>Pokemon List</h1>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        pokemonList.map((pokemon) => (
          <div key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        ))
      )}
    </div>
  );
};

export default PokemonList;