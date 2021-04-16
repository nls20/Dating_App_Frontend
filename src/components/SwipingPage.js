import {useState, useEffect} from 'react'

const SwipingPage = ({potentialMatches}) => {

    // const [potentialMatches, setPotentialMatches] = useState(potentialMatches)
    const [matches, setMatches] = useState([])
    const [notMatched, setNotMatched] = useState([])

    const handleMatchYes = (evt) => {

    }

    const handleMatchNo = (evt) => {
        
    }

    return (
        <>
        <button onClick={handleMatchYes}>YES</button>
        <button onClick={handleMatchNo}>NO</button>
        </>
    )
}
export default SwipingPage