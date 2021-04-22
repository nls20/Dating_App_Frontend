import {useState, useEffect} from 'react'
import DisplayInfo from "./DisplayInfo"
import YesButton from './YesButton'
import NoButton from './NoButton'

const SwipingPage = ({potentialMatches, addNewMatch}) => {


    return (
        <>
        <DisplayInfo  potentialMatches={potentialMatches} addNewMatch={addNewMatch}/>
        </>
    )
}
export default SwipingPage