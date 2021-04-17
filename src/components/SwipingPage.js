import {useState, useEffect} from 'react'

const SwipingPage = ({potentialMatches}) => {

    const [matches, setMatches] = useState([])
    const [notMatched, setNotMatched] = useState([])
    const [option, setOption] = useState(potentialMatches[Math.floor(Math.random() * potentialMatches.length)])

    const selectOption = () => {
        return setOption(potentialMatches[Math.floor(Math.random() * potentialMatches.length)])
    }

    const handleMatchYes = (evt) => {
        console.log(evt.target.value);
        const addMatch = potentialMatches.filter(match => match.name == evt.target.value)
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
        // removePotentialMatches(option.id)
        setNotMatched([...notMatched] + evt.target.value)
        selectOption()
    }

    return (
        <>
        <div>
            
        </div>

        <button value={option.name} onClick={handleMatchYes}>YES</button>
        
        <button value={option} onClick={handleMatchNo}>NO</button>
        </>
    )
}
export default SwipingPage