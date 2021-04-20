import {useState} from 'react'
import './YesButton.css'
import { ImHeart } from "react-icons/im";

const YesButton = ({option, potentialMatches, selectOption}) => {

const [matches, setMatches] = useState([])

const handleMatchYes = (event) => {
    event.preventDefault()
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
    <div className="button">
        <form action="">
            <button className="swipe-btn-yes" onClick={handleMatchYes}>
                <div className="heart"><ImHeart/></div>
            </button>
        </form>
    </div>
)

}

export default YesButton