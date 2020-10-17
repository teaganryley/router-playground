import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const PokemonSingle = () => {
    const { pokemonName } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(result => result.json())
        .then(pokemon => {
            setPokemon(pokemon);
            setLoading(false);
        })
        .catch(er => console.error(er));
    }, []);
    
    if (isLoading) return (<div>Loading...</div>);
        return (
            <div>
                <img src={pokemon?.sprites?.front_default} />
                <h1>{pokemon.id} - {pokemon.name}</h1>
            </div>
        );
}

export default PokemonSingle;
