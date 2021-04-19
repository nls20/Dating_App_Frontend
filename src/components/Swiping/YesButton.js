import {useState} from 'react'
import './YesButton.css'
import { ImHeart } from "react-icons/im";

const YesButton = ({option, potentialMatches, selectOption}) => {

const [matches, setMatches] = useState([])

const handleMatchYes = () => {
    const addMatch = potentialMatches.filter(match => match.name == option.name)
    if (matches.length) {
        setMatches(matches.concat(addMatch[0]))
    } else {
        setMatches(addMatch)
    }
    potentialMatches.splice(potentialMatches.indexOf(addMatch[0]), 1)
    selectOption()
}

return (
    <div class="button">
        <button class="swipe-btn-yes" onClick={handleMatchYes}>
            <div class="heart"><ImHeart/></div>
        </button>
    </div>

)

}

export default YesButton