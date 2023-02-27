import {useState} from 'react';
import '../pokeCard.css';

const Sprite = ({name, frontDefault, backDefaul, shinyFront, shinyBack}) => {
    const [isShiny, setIsShiny] = useState(false);
    const [isFront, setIsFront] = useState(true);

    return(
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
    )
}

export default Sprite