import {useState, useEffect} from 'react'
import DisplayInfo from "./DisplayInfo"

const SwipingPage = ({potentialMatches}) => {

    const [matches, setMatches] = useState([])
    const [notMatched, setNotMatched] = useState([])
    const [option, setOption] = useState(potentialMatches[Math.floor(Math.random() * potentialMatches.length)])

    const selectOption = () => {
        return setOption(potentialMatches[Math.floor(Math.random() * potentialMatches.length)])
    }

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
        <>
        <DisplayInfo option={option} />

        <button value={option.name} onClick={handleMatchYes}>YES</button>
        
        <button value={option.name} onClick={handleMatchNo}>NO</button>
        </>
    )
}
export default SwipingPage