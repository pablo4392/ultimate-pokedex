import './bodyStyles.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PokemonFinder from './PokemonFinder';
import PokeCard from './PokeCard';

const Pokedex = () => {
    const [pokemon, setPokemon] = useState('');
    const [id, setId] = useState('')
    const [name, setname] = useState('');
    const [type, setType] = useState('');
    const [sprite, setSprite] = useState('');

    useEffect(() => {
        if(pokemon) {
            const promise = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            promise.then((response) => {
                console.log(response.data)
                setId(response.data.id)
                setname(response.data.name);
                setType(response.data.types[0].type.name);
                setSprite(response.data.sprites.front_default);
            });
        };
    }, [pokemon])

    const handleSearchPokemon = (value) => {
        setPokemon(value);
    }

    return (
        <div>
            <h1>Welcome "pokemon trainer"</h1>
            <p>You can find any pokemon writting your name</p>
            <PokemonFinder handleSearch={handleSearchPokemon} />
            <div className='grid'>
                <PokeCard  id={id} name={name} type={type} sprite={sprite} />
            </div>
        </div>
    )
}

export default Pokedex;