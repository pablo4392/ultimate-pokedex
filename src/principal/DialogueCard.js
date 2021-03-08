import "./principalStyles.css";
import StartBox from "./StartBox";

const DialogueCard = () => {
    return(
        <div className='d-card'>
            <h4 className='title'> Welcome to the world of POKéMON </h4>
            <p className='text'> My name is OAK, people affectionately refer to me as the pokemon POKéMON PROFESSOR. </p>
            <p className='text'> If you want to know about this world, <strong> first write your name and click the button </strong></p>
            <StartBox />
        </div>
    )
}

export default DialogueCard;