import "./principalStyles.css";
import DialogueCard from "./DialogueCard.js";

const StartPage = () => {
    return(
        <div className="principal-page">
            <img className='img' src="https://static.wikia.nocookie.net/espokemon/images/0/0a/Profesor_Oak_%28XY%29.png/revision/latest?cb=20141130014622" alt="profesor oak" />
            <DialogueCard />
        </div>
    )
}

export default StartPage;