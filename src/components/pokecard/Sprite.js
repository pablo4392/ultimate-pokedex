import {useEffect, useState} from 'react';
import '../pokeCard.css';

const Sprite = ({name, 
        frontDefault,
        frontFemale, 
        backDefaul, 
        backFemale,
        shinyFront,
        shinyFemale, 
        shinyBack, 
        shinyFemaleBack}) => {
    const [isShiny, setIsShiny] = useState(false);
    const [isFront, setIsFront] = useState(true);
    const [buttonFemale, setButtonFemale] = useState(true);
    const [isFemale, setIsFemale] = useState(false)

    useEffect(() => {
        if(frontFemale === null ) {
            setButtonFemale(false)
        }
    }, [frontFemale])

    return(
        <div className="sprite-section">
            {isFemale ? (<>
                {isShiny ? (<>
                    {isFront ? (<>
                        <img className='sprite' src={shinyFemale} alt={name} />
                    </>):(<>
                        <img className='sprite' src={shinyFemaleBack} alt={name} />
                    </>)}                    
                </>):(<>
                    {isFront ? (<>
                        <img className='sprite' src={frontFemale} alt={name} />
                    </>):(<>
                        <img className='sprite' src={backFemale} alt={name} />
                    </>)}
                </>)}                
            </>):(<>
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
            </>)}
            
            <div className="sprite-btn-section">
                <button className="sprite-button" onClick={() => setIsShiny(!isShiny)}>{isShiny ? 'Normal' : 'Shiny'}</button>
                {buttonFemale ? (<>
                    <button className="sprite-button" on onClick={() => setIsFemale(!isFemale)}>{isFemale ? 'Male' : 'Female'}</button>
                    </>):(<></>)}
                <button className="sprite-button" onClick={() => setIsFront(!isFront)}>{isFront ? 'Back' : 'Front'}</button>
            </div>
        </div>
    )
}

export default Sprite