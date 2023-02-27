import "../pokeCard.css";
import PokemonColors from "./PokemonColors";

const CardHeader = ({id, name, pokemonType}) => {
    
    const pokemonTypesArray = pokemonType.map(value => (
        <h5 
            key={value.type.name} 
            style={{background: PokemonColors(value.type.name)}}
            className='type'>
                {value.type.name}
        </h5>
    ))

    return(
        <div>
            <h3 className='name'>#{id} {name}</h3>
            <div className='types'>
                {pokemonTypesArray}
            </div>
        </div>
    )
}

export default CardHeader