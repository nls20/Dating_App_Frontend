import {useState} from 'react'
import YesButton from "./YesButton"
import NoButton from './NoButton'
import './DisplayInfo.css'

const DisplayInfo = ({potentialMatches}) => {

    const [option, setOption] = useState(potentialMatches[Math.floor(Math.random() * potentialMatches.length)])

    const selectOption = () => {
        return setOption(potentialMatches[Math.floor(Math.random() * potentialMatches.length)])
    }

    // const handleMatchNo = (evt) => {
    //     const addNotMatched = potentialMatches.filter(match => match.name == evt.target.value)
    //     if (notMatched.length) {
    //         setNotMatched(notMatched.concat(addNotMatched))
    //     } else {
    //         setNotMatched(addNotMatched)
    //     }
    //     potentialMatches.splice(potentialMatches.indexOf(addNotMatched), 1)
    //     selectOption()
    // }

return (
    <div class="display-container">
        <img src={option.picture}></img>
        <h2>{option.name}</h2>
        <p>{option.age}</p>
        <p>{option.location}</p>
        <p>{option.hobbies}</p>
        <div class="swipe-buttons">
        <YesButton potentialMatches={potentialMatches} option={option} selectOption={selectOption}/>
        <NoButton potentialMatches={potentialMatches} option={option} selectOption={selectOption}/>
        </div>
    </div>
)
}

export default DisplayInfo