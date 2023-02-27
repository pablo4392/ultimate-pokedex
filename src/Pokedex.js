import { useEffect, useState } from "react";
import Control from "./control/Control.js";
import Services from "./service/Services.js";
import PokeCard from "./components/PokeCard.js";
import PokemonColors from "./components/pokecard/PokemonColors.js";
import "./pokedex.css"

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(4);
    const [pokemonTypes, setPokemonTypes] = useState(null);
    const [typeTitle, setTypeTitle] = useState('');
    const [pokemonByType, setPokemonByType] = useState([]);
    const [colorTitle, setColorTitle] = useState('');
    
    useEffect(() => {
        Services.allPokemon(amount, count).then(response => {
            setPokemons(response.data.results);
        })
    }, [amount, count]);

    useEffect(() => {
        if(pokemonTypes){
            Services.typesPokemon(pokemonTypes).then(response => {
                setColorTitle(response.data.name);
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
        if(count >= 1278) {
            setCount(1278)
        } else {
            setCount(count + amount)
        }
    }

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
                handlePaldeaButton={() => {setPokemonTypes(null); setCount(905)}}
                handleMegaEvolutions={() => {setPokemonTypes(null); setCount(1040)}}
                handleAlolaSpecial={() => {setPokemonTypes(null); setCount(1098)}}
                handleGalarSpecial={() => {setPokemonTypes(null); setCount(1168)}}
                handleHisuiSpecial={() => {setPokemonTypes(null); setCount(1236)}}
                handleGmax={() => {setPokemonTypes(null); setCount(1202)}}
            />
            <div>
                {pokemonTypes ? (
                    <>
                        <h2 className="type-title" style={{background: PokemonColors(colorTitle)}}>{typeTitle}</h2>
                        <div className="pokemon-grid">
                            {pokemonByTypeArray}
                        </div>
                    </>
                ):(
                    <>
                        {/* <h2>{nameArea}</h2> */}
                        <div className="pokemon-grid">
                            {pokemonArray}
                        </div>
                    </>
                )}                
            </div>
        </div>
    )
}

export default Pokedex;