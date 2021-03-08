import './pokeCard.css';

const PokeCard = ({id, name, type, sprite}) => {
    return (
        <div className='poke-card'>
            <h3>{name}</h3>
            <h4>{id}</h4>
            <h5>{type}</h5>
            <img className='sprite' src={sprite} alt={name}/>
            <div className='info'>

            </div>
        </div>
    )
}

export default PokeCard;