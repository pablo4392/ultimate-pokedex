import axios from 'axios';
import { useEffect, useState } from 'react';
import './pokeCard.css';

const PokeCard = ({pokemonUrl}) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [pokeColor, setPokeColor] = useState('');
    const [colorType, setColorType] = useState('');
    const [pokemonType, setPokemonType] = useState([]);
    const [frontDefault, setfrontDefault] = useState('');
    const [backDefaul, setBackDefaul] = useState('');
    const [shinyFront, setShinyFront] = useState('');
    const [shinyBack, setShinyBack] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [abilities, setAbilities] = useState([]);
    const [isShiny, setIsShiny] = useState(false);
    const [isFront, setIsFront] = useState(true);

    useEffect(() => {
        switch(colorType) {
          case 'normal': setPokeColor('#d99879')
          break;
          case 'fighting': setPokeColor('#e40017')
          break;
          case 'flying': setPokeColor('#51c4d3')
          break;
          case 'poison': setPokeColor('#52057b')
          break;
          case 'ground': setPokeColor('#966c3b')
          break;
          case 'rock': setPokeColor('#999b84')
          break;
          case 'bug': setPokeColor('#1e6f5c')
          break;
          case 'ghost': setPokeColor('#301b3f')
          break;
          case 'steel': setPokeColor('#5b5b5b')
          break; 
          case 'fire': setPokeColor('#f48b29')
          break;
          case 'water': setPokeColor('#23689b')
          break;
          case 'grass': setPokeColor('#54e346')
          break;
          case 'electric': setPokeColor('#fdca40')
          break;
          case 'psychic': setPokeColor('#ce1f6a')
          break;
          case 'ice': setPokeColor('#8ab6d6')
          break;
          case 'dragon': setPokeColor('#5c6e91')
          break;
          case 'dark': setPokeColor('#222831')
          break;
          case 'fairy': setPokeColor('#f14668')
          break;
          default: setPokeColor('')
        }
    }, [colorType]);

    useEffect(() => {
        if(pokemonUrl) {
            axios(pokemonUrl).then(response => {
                setId(response.data.id);
                setName(response.data.name.toUpperCase());
                setColorType(response.data.types[0].type.name);
                setPokemonType(response.data.types);
                setfrontDefault(response.data.sprites.front_default);
                setBackDefaul(response.data.sprites.back_default);
                setShinyFront(response.data.sprites.front_shiny);
                setShinyBack(response.data.sprites.back_shiny);
                setHeight(response.data.height);
                setWeight(response.data.weight);
                setAbilities(response.data.abilities)
            })
        }
    }, [pokemonUrl]);

    const pokemonTypesArray = pokemonType.map(value => (
        <h5 key={value.type.name} className='type'>{value.type.name}</h5>
    ))

    const abilitiesArray = abilities.map(value => (
        <p key={value.ability.name} className='type'>{value.ability.name}</p>
    ))

    return (
        <div className='poke-card' style={{background: pokeColor}} >
            <h3 className='name'>#{id} {name}</h3>
            <div className='types'>            
                {pokemonTypesArray}
            </div>
            <div className="sprite-section">
                {isShiny ? (<>
                        {isFront ? (<>
                        <img className='sprite' src={shinyFront} alt={name} />
                    </>):(<>
                        <img className='sprite' src={shinyBack} alt={name} />
                    </>)}
                </>):(<>
                    {isFront ? (<>
                        <img className='sprite' src={frontDefault} alt={name} />
                    </>):(<>
                        <img className='sprite' src={backDefaul} alt={name} />
                    </>)}
                </>)}
                <div className="sprite-btn-section">
                    <button className="sprite-button" onClick={() => setIsShiny(!isShiny)}>{isShiny ? 'Normal' : 'Shiny'}</button>
                    <button className="sprite-button" onClick={() => setIsFront(!isFront)}>{isFront ? 'Back' : 'Front'}</button>
                </div>
            </div>
            <div className='pokemon-sizes'>
                <p className="size-label">Height: {height/10} Mts.</p>
                <p className="size-label">Weight: {weight/100} Kg.</p>
            </div>
            <div className="pokemon-abilities">
                <h4 className="abilities-title">Abilities: </h4>
                <div className="abilities-item">
                    {abilitiesArray}
                </div>
            </div>
        </div>
    )
}

export default PokeCard;