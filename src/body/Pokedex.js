import './bodyStyles.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PokemonFinder from './PokemonFinder';
import PokemonType from './PokemonType';
import PokeCard from './PokeCard';

const Pokedex = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokes, setPokes] = useState([]);
    const [queryType, setQueryType] = useState('');
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [types, setTypes] = useState([]);
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [hp, sethp] = useState('');
    const [attack, setAttack] = useState('');
    const [defense, setDeffense] = useState('');
    const [speed, setSpeed] = useState('');

    useEffect(() => {
        if(pokemon) {
            const promise = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            promise.then((response) => {
                setId(response.data.id);
                setName(response.data.name);
                setTypes(response.data.types);
                setFront(response.data.sprites.front_default);
                setBack(response.data.sprites.back_default);
                sethp(response.data.stats[0].base_stat);
                setAttack(response.data.stats[1].base_stat);
                setDeffense(response.data.stats[2].base_stat);
                setSpeed(response.data.stats[5].base_stat);
            });
        };
    }, [pokemon]);

    useEffect(() => {
        if(queryType) {
            const promise = axios.get(`https://pokeapi.co/api/v2/type/${queryType}`)
            promise.then((response) => {
                // console.log(response.data.pokemon)
                setPokes(response.data.pokemon.slice(0, 10));
                // setName(response.data.pokemon.name);
            });
        };
    }, [queryType]);
    
    useEffect(() => {
        console.log(pokes)
    }, [pokes])

    const type = types.map((value) => {
        const name = value.type.name
        const typeName = name.concat(" ")
        return (typeName)
    });

    const handleSearchPokemon = (value) => {
        setPokemon(value);
    };

    const handleSearchPokemonType = (value) => {
        setQueryType(value);
    };

    return (
        <div>
            <div className='selector-card'>
                <h1>Welcome "pokemon trainer"</h1>
                <p>You can find any pokemon writting your name or hte number of id</p>
                <PokemonFinder handleSearch={handleSearchPokemon} />
                <p>also if you want can select pokemons by type</p>
                <PokemonType handleType={handleSearchPokemonType} />
                <p><strong>exist 898 pokemons</strong></p>
            </div>
            <div className='grid'>
                { pokemon &&
                    <PokeCard  
                        id={id} 
                        name={name.toUpperCase()} 
                        type={type} 
                        front={front} 
                        back={back} 
                        hp={hp} 
                        attack={attack} 
                        defense={defense} 
                        speed={speed} 
                    />
                }
            </div>
        </div>
    )
}

export default Pokedex;