import { useEffect, useState } from "react";
import Control from "./control/Control.js";
import Services from "./service/Services.js";
import PokeCard from "./components/PokeCard.js";
import PokemonColors from "./components/pokecard/PokemonColors.js";
import "./pokedex.css"

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(4);
    const [offset, setOffset] = useState(0);
    const [pokemonTypes, setPokemonTypes] = useState(null);
    const [typeTitle, setTypeTitle] = useState('');
    const [pokemonByType, setPokemonByType] = useState([]);
    const [colorTitle, setColorTitle] = useState('');
    
    useEffect(() => {
        Services.allPokemon(limit, offset).then(response => {
            setPokemons(response.data.results);
        })
    }, [limit, offset]);

    useEffect(() => {
        if(pokemonTypes){
            Services.typesPokemon(pokemonTypes).then(response => {
                setColorTitle(response.data.name);
                setTypeTitle(response.data.name.toUpperCase());
                setPokemonByType(response.data.pokemon)
            })
        }
    }, [pokemonTypes])

    const previousPokes = () => {
        if (offset <= 0) {
          setOffset(0);
        } else {
          setOffset(offset - limit);
        }
    };

    const nextPokes = () => {
        if (offset >= 1278) {
            setOffset(1278);
        } else {
            setOffset(offset + limit);
        }
    };

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
                handleClickBack={previousPokes} 
                handleClickNext={nextPokes} 
                handleLimit={(e) => setLimit(Number(e.target.value))}
                handleKantoButton={() => {setPokemonTypes(null); setOffset(0)}}
                handleJohtoButton={() => {setPokemonTypes(null); setOffset(151)}}
                handleHoennButton={() => {setPokemonTypes(null); setOffset(251)}}
                handleSinnohButton={() => {setPokemonTypes(null); setOffset(386)}}
                handleTeseliaButton={() => {setPokemonTypes(null); setOffset(494)}}
                handleKalosButton={() => {setPokemonTypes(null); setOffset(649)}}
                handleAlolaButton={() => {setPokemonTypes(null); setOffset(721)}}
                handleGalarButton={() => {setPokemonTypes(null); setOffset(809)}}
                handlePaldeaButton={() => {setPokemonTypes(null); setOffset(905)}}
                handleMegaEvolutions={() => {setPokemonTypes(null); setOffset(1042)}}
                handleAlolaSpecial={() => {setPokemonTypes(null); setOffset(1100)}}
                handleGalarSpecial={() => {setPokemonTypes(null); setOffset(1170)}}
                handleHisuiSpecial={() => {setPokemonTypes(null); setOffset(1238)}}
                handleGmax={() => {setPokemonTypes(null); setOffset(1204)}}
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
                        <h2>Name Area</h2>
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