import axios from 'axios';
import { useEffect, useState } from 'react';
import './pokeCard.css';
import PokemonColors from './pokecard/PokemonColors';
import CardHeader from './pokecard/CardHeader';
import Sprite from './pokecard/Sprite';
import CardFooter from './pokecard/CardFooter';

const PokeCard = ({pokemonUrl}) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [pokemonType, setPokemonType] = useState([]);
    const [frontDefault, setfrontDefault] = useState('');
    const [frontFemale, setFrontFemale] = useState('');
    const [backDefaul, setBackDefaul] = useState('');
    const [backFemale, setBackFemale] = useState('');
    const [shinyFront, setShinyFront] = useState('');
    const [shinyFemale, setShinyFemale] = useState('');
    const [shinyBack, setShinyBack] = useState('');
    const [shinyFemaleBack, setShinyFemaleBack] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        if(pokemonUrl) {
            axios(pokemonUrl).then(response => {
                setId(response.data.id);
                setName(response.data.name.toUpperCase());
                setType(response.data.types[0].type.name);
                setPokemonType(response.data.types);
                setFrontFemale(response.data.sprites.front_female);
                setBackFemale(response.data.sprites.back_female);
                setShinyFemale(response.data.sprites.front_shiny_female);
                setShinyFemaleBack(response.data.sprites.back_shiny_female);
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


    return (
        <div className='poke-card' style={{background: PokemonColors(type)}} >
            <CardHeader id={id} name={name} pokemonType={pokemonType}/>
            <Sprite 
                frontDefault={frontDefault} 
                frontFemale={frontFemale}
                backDefaul={backDefaul} 
                backFemale={backFemale}
                shinyFront={shinyFront}
                shinyFemale={shinyFemale} 
                shinyBack={shinyBack} 
                shinyFemaleBack={shinyFemaleBack}
                name={name} 
            />
            <CardFooter height={height} weight={weight} abilities={abilities} />
        </div>
    )
}

export default PokeCard;