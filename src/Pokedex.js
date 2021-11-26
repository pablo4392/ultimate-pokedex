import { useEffect, useState } from "react";
import Control from "./control/Control.js";
import Services from "./service/Services.js";
import PokeCard from "./components/PokeCard.js";
import "./pokedex.css"
import Spinner from "./spinner/Spinner.js";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(4);
    const [pokemonTypes, setPokemonTypes] = useState(null);
    const [typeTitle, setTypeTitle] = useState('');
    const [pokemonByType, setPokemonByType] = useState([]);
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        Services.allPokemon(amount, count).then(response => {
            setHasData(true);
            setPokemons(response.data.results);
        })
    }, [amount, count]);

    useEffect(() => {
        if(pokemonTypes){
            Services.typesPokemon(pokemonTypes).then(response => {
                setTypeTitle(response.data.name.toUpperCase());
                setPokemonByType(response.data.pokemon)
            })
        }
    }, [pokemonTypes])

    const backPokes = () => {
        if(count === 0) {
            setCount(0)
        } else {
            setCount(count - amount)
        }
    }
    const nextPokes = () => {
        if(count >= 1117) {
            setCount(1117)
        } else {
            setCount(count + amount)
        }
    }

    console.log(pokemonByType.length)

    const pokemonArray = pokemons.map(value => (
        <PokeCard key={value.name} pokemonUrl={value.url} />
    ))

    const pokemonByTypeArray = pokemonByType.map(value => (
        <PokeCard key={value.pokemon.name} pokemonUrl={value.pokemon.url} />
    ))

    return (
        <div>
            <Control 
                handleSelectTypes={(e) => setPokemonTypes(e.target.value)}
                handleClickBack={backPokes} 
                handleClickNext={nextPokes} 
                handleAmount={(e) => setAmount(Number(e.target.value))}
                handleKantoButton={() => {setPokemonTypes(null); setCount(0)}}
                handleJohtoButton={() => {setPokemonTypes(null); setCount(151)}}
                handleHoennButton={() => {setPokemonTypes(null); setCount(251)}}
                handleSinnohButton={() => {setPokemonTypes(null); setCount(386)}}
                handleTeseliaButton={() => {setPokemonTypes(null); setCount(494)}}
                handleKalosButton={() => {setPokemonTypes(null); setCount(649)}}
                handleAlolaButton={() => {setPokemonTypes(null); setCount(721)}}
                handleGalarButton={() => {setPokemonTypes(null); setCount(809)}}
                handleMegaEvolutions={() => {setPokemonTypes(null); setCount(930)}}
                handleAlolaSpecial={() => {setPokemonTypes(null); setCount(988)}}
                handleGmax={() => {setPokemonTypes(null); setCount(1083)}}
            />
            <div>
                {hasData ? (
                    <>
                        {pokemonTypes ? (
                            <>
                                <h2 className="type-title">{typeTitle}</h2>
                                <div className="pokemon-grid">
                                    {pokemonByTypeArray}
                                </div>
                            </>
                        ):(
                            <div className="pokemon-grid">
                                {pokemonArray}
                            </div>
                        )}
                    </>
                ):(
                    <>
                        <Spinner />
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Pokedex;