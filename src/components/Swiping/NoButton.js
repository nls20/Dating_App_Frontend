import {useState} from 'react'
import './NoButton.css'

const NoButton = ({option, potentialMatches, selectOption}) => {

    const [notMatched, setNotMatched] = useState([])

    const handleMatchNo = (evt) => {
        const addNotMatched = potentialMatches.filter(match => match.name == evt.target.value)
        if (notMatched.length) {
            setNotMatched(notMatched.concat(addNotMatched))
        } else {
            setNotMatched(addNotMatched)
        }
        potentialMatches.splice(potentialMatches.indexOf(addNotMatched), 1)
        selectOption()
    }

return (
    <div className="button">
        <button className="swipe-btn-no" value={option.name} onClick={handleMatchNo}>NO</button>
    </div>
)

}

export default NoButton