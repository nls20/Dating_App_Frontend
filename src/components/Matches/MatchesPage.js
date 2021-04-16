import {useState} from 'react'
import MatchesPreviewTiles from './MatchesPreviewTiles'
import MessagesPreview from './MessagesPreview'
const MatchesPage = ({matches}) => {

    


    
    return (
        <> 
            <h2>Matches</h2>
            <MatchesPreviewTiles matches={matches}/>

            <h2>Messages</h2>
            <MessagesPreview matches={matches}/>
        </>
    )
}
export default MatchesPage