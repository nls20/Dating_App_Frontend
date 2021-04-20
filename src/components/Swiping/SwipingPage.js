import {useState, useEffect} from 'react'
import DisplayInfo from "./DisplayInfo"
import YesButton from './YesButton'
import NoButton from './NoButton'

const SwipingPage = ({potentialMatches}) => {


    return (
        <>
        <DisplayInfo  potentialMatches={potentialMatches}/>
        </>
    )
}
export default SwipingPage