import './bodyStyles.css';
import {useState} from 'react';

const PokemonFinder = ({handleSearch}) => {
    const [searchPokemon, setSearchPokemon] = useState('');

    return (
        <div>
            <input onChange={(e)=> setSearchPokemon(e.target.value.toLowerCase())} type='text' className='finder' />
            <button onClick={() => handleSearch(searchPokemon)} className='search-button'>Search</button>
        </div>
    )
}

export default PokemonFinder;