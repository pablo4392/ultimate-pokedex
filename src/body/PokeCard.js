import './pokeCard.css';

const PokeCard = ({id, name, type, front, back, hp, attack, defense, speed}) => {
    return (
        <div className='poke-card'>
            <h3 className='name'>#{id} {name}</h3>
            <h5 className='type'>{type}</h5>
            <img className='front' src={front} alt={name}/>
            <img className='back' src={back} alt={name} />
            <div className='info'>
                <p className='not-margin'>HP: {hp}</p>
                <p className='not-margin'>Attack: {attack}</p>
                <p className='not-margin'>Defense: {defense}</p>
                <p className='not-margin'>Speed: {speed}</p>
            </div>
        </div>
    )
}

export default PokeCard;