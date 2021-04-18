import {useState} from 'react'
import './YesButton.css'

const YesButton = ({option, potentialMatches, selectOption}) => {

const [matches, setMatches] = useState([])

const handleMatchYes = (evt) => {
    const addMatch = potentialMatches.filter(match => match.name == evt.target.value)
    if (matches.length) {
        setMatches(matches.concat(addMatch))
    } else {
        setMatches(addMatch)
    }
    potentialMatches.splice(potentialMatches.indexOf(addMatch), 1)
    selectOption()
}

return (
    <div className="button">
        <button className="swipe-btn-yes" value={option.name} onClick={handleMatchYes}>YES</button>
    </div>
)

}

export default YesButton