import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(result => result.json())
        .then(({ results }) => {
            setPokemons(results);
            setLoading(false);
        })
        .catch(er => console.error(er));
    }, []);
    

    if (isLoading) return (<div>Loading...</div>);
    return (
        <div>
            {pokemons.map((pokemon, index) => {
                const id = (index + 1);
                return (
                    <div key={pokemon.name}>
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PokemonList;

