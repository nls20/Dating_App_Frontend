import {useState, useEffect} from 'react'

const SwipingPage = ({potentialMatches}) => {

    const [matches, setMatches] = useState([])
    const [notMatched, setNotMatched] = useState([])
    const [option, setOption] = useState(potentialMatches[Math.floor(Math.random() * potentialMatches.length)])

    const selectOption = () => {
        return setOption(potentialMatches[Math.floor(Math.random() * potentialMatches.length)])
    }

    const handleMatchYes = (evt) => {
        const addMatch = potentialMatches.filter(match => match.name == evt.target.value)
        // console.log(addMatch);
        if (matches.length) {
            setMatches(matches.concat(addMatch))
        } else {
            setMatches(addMatch)
        }
        selectOption()
    }

    // const removePotentialMatches = (idToRemove) => {
    //     setPotentialMatches(potentialMatches.filter(({ id }) => id !== idToRemove))
    //   }

    const handleMatchNo = (evt) => {
        const addNotMatched = potentialMatches.filter(match => match.name == evt.target.value)
        if (notMatched.length) {
            setNotMatched(notMatched.concat(addNotMatched))
        } else {
            setNotMatched(addNotMatched)
        }
        selectOption()
    }

    return (
        <>
        <div>
            <img src={option.picture}></img>
            <h2>{option.name}</h2>
            <p>{option.age}</p>
            <p>{option.location}</p>
            <p>{option.hobbies}</p>
        </div>

        <button value={option.name} onClick={handleMatchYes}>YES</button>
        
        <button value={option.name} onClick={handleMatchNo}>NO</button>
        </>
    )
}
export default SwipingPage