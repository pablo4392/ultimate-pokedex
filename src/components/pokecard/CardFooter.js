const CardFooter = ({height, weight, abilities}) => {
    
    const abilitiesArray = abilities.map(value => (
        <p key={value.ability.name} className='type'>{value.ability.name}</p>
    ))

    return(
        <>
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
        </>
    )
}

export default CardFooter;