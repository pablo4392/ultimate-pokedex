import { useEffect, useState } from "react";
import Control from "./control/Control.js";
import Services from "./service/Services.js";
import PokeCard from "./components/PokeCard.js";
import "./pokedex.css"

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(9);
    const [pokemonTypes, setPokemonTypes] = useState(null)
    const [typeTitle, setTypeTitle] = useState('')
    const [pokemonByType, setPokemonByType] = useState([])

    useEffect(() => {
        Services.allPokemon(9, count).then(response => {
            setPokemons(response.data.results)
        })
    }, [count]);

    useEffect(() => {
        if(pokemonTypes){
            Services.typesPokemon(pokemonTypes).then(response => {
                setTypeTitle(response.data.name);
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
            setCount(count + 0)
        } else {
            setCount(count + amount)
        }
    }

    const pokemonArray = pokemons.map(value => (
        <PokeCard key={value.name} pokemonUrl={value.url} />
    ))

    const pokemonByTypeArray = pokemonByType.map(value => (
        <PokeCard key={value.name} pokemonUrl={value.url} />
    ))

    return (
        <div>
            <Control 
                handleSelectTypes={(e) => setPokemonTypes(e.target.value)}
                handleClickBack={backPokes} 
                handleClickNext={nextPokes} 
                handleAmount={(e) => setAmount(e.target.value)}
                handleKantoButton={() => setCount(0)}
                handleJohtoButton={() => setCount(151)}
                handleHoennButton={() => setCount(251)}
                handleSinnohButton={() => setCount(386)}
                handleTeseliaButton={() => setCount(493)}
                handleKalosButton={() => setCount(649)}
                handleAlolaButton={() => setCount(721)}
                handleGalarButton={() => setCount(809)}
                handleMegaEvolutions={() => setCount(930)}
                handleAlolaSpecial={() => setCount(988)}
                handleGmax={() => setCount(1083)}
            />
            <div className="pokemon-grid">
                {pokemonTypes ? (
                    <>
                    
                    </>
                ):(
                    <>
                        {pokemonArray}
                    </>
                )}
            </div>
        </div>
    )
}

export default Pokedex;