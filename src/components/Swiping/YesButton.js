import {useState} from 'react'
import './YesButton.css'
import { ImHeart } from "react-icons/im";

const YesButton = ({option, potentialMatches, selectOption}) => {

const [matches, setMatches] = useState([])

const handleMatchYes = (evt) => {
    const addMatch = potentialMatches.filter(match => match.name == evt.target.value)
    if (matches.length) {
        setMatches(matches.concat(addMatch[0]))
    } else {
        setMatches(addMatch[0])
    }
    potentialMatches.splice(potentialMatches.indexOf(addMatch[0]), 1)
    selectOption()
}

return (
    <div className="button">
        <button className="swipe-btn-yes" value={option.name} onClick={handleMatchYes}>
            <div class="heart"><ImHeart/></div>
        </button>
    </div>

)

}

export default YesButton