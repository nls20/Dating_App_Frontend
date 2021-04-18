import {useState} from 'react'
import './NoButton.css'
import { ImCross } from "react-icons/im";

const NoButton = ({option, potentialMatches, selectOption}) => {

    const [notMatched, setNotMatched] = useState([])

    const handleMatchNo = (evt) => {
        const addNotMatched = potentialMatches.filter(match => match.name == evt.target.value)
        if (notMatched.length) {
            setNotMatched(notMatched.concat(addNotMatched))
        } else {
            setNotMatched(addNotMatched)
        }
        potentialMatches.splice(potentialMatches.indexOf(addNotMatched[0]), 1)
        selectOption()
    }

return (
    <div className="button">
        <button className="swipe-btn-no" value={option.name} onClick={handleMatchNo}>
            <div class="cross"> <ImCross /></div>
        </button>
    </div>
)

}

export default NoButton