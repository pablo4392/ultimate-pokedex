import SelectTypes from "./SelectTypes.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import "./control.css"

const Control = ({
        handleSelectTypes,
        handleClickBack, 
        handleClickNext, 
        handleAmount, 
        handleKantoButton, 
        handleJohtoButton, 
        handleHoennButton, 
        handleSinnohButton,
        handleTeseliaButton,
        handleKalosButton,
        handleAlolaButton,
        handleGalarButton,
        handleMegaEvolutions,
        handleAlolaSpecial,
        handleGmax
    }) => {
    return(
        <div className="control-section">
            <div className="control">
                <div className="pagination-control">
                    <button className="btn-pag" onClick={handleClickBack}>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </button>
                    <select className="amount-select" onChange={handleAmount}>
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                    </select>
                    <button className="btn-pag" onClick={handleClickNext}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </div>
                <SelectTypes handleSelectTypes={handleSelectTypes} />
            </div>
            <div className="area">
                <button className="area-btn kanto" onClick={handleKantoButton}> Kanto </button>
                <button className="area-btn johto" onClick={handleJohtoButton}> Johto </button>
                <button className="area-btn hoenn" onClick={handleHoennButton}> Hoenn </button>
                <button className="area-btn sinnoh" onClick={handleSinnohButton}> Sinnoh </button>
                <button className="area-btn teselia" onClick={handleTeseliaButton}> Teselia/Unova </button>
                <button className="area-btn kalos" onClick={handleKalosButton}> Kalos </button>
                <button className="area-btn alola" onClick={handleAlolaButton}> Alola </button>
                <button className="area-btn galar" onClick={handleGalarButton}> Galar </button>
            </div>
            <div className="specials">
                <button className="special-btn" onClick={handleMegaEvolutions}>Mega Evolutions</button>
                <button className="special-btn" onClick={handleAlolaSpecial}>Alola Special</button>
                <button className="special-btn" onClick={handleGmax}>G-Max</button>
            </div>
        </div>
    )
}

export default Control