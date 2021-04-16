import {useState, useEffect} from 'react'

const SwipingPage = ({potentialMatches}) => {

    const [matches, setMatches] = useState([])
    const [notMatched, setNotMatched] = useState([])

    const selectOption = () => {
        const option = potentialMatches[Math.floor(Math.random() * potentialMatches.length)]
    }

    const handleMatchYes = (evt) => {
        setMatches([...matches] + evt.target.value)
        removePotentialMatches(option.id)
        selectOption()
    }

    const removePotentialMatches = (idToRemove) => {
        setPotentialMatches(potentialMatches.filter(({ id }) => id !== idToRemove))
      }

    const handleMatchNo = (evt) => {
        removePotentialMatches(option.id)
        setNotMatched([...notMatched] + evt.target.value)
        selectOption()
    }

    useEffect(() => {
        selectOption()
    }, [potentialMatches])

    return (
        <>
        <div>
            <p>{option.img}</p>
            <p>{option.name}</p>
            <p>{option.hobbies}</p>
        </div>

        <button onClick={handleMatchYes}>YES</button>
        
        <button onClick={handleMatchNo}>NO</button>
        </>
    )
}
export default SwipingPage