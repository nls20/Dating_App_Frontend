import {useState} from 'react'
import MatchesPreviewTiles from './MatchesPreviewTiles'
import MessagesPreview from './MessagesPreview'
const MatchesPage = () => {

    const matches = [
        {name: "andrew", picture: "pic", messageHistory: "this is a message"},
        {name: "david", picture: "pic", messageHistory: "this is a message"},
        {name: "mark", picture: "pic", messageHistory: "this is a message"},
        {name: "nicola", picture: "pic", messageHistory: "this is a message"},
        {name: "brian", picture: "pic", messageHistory: "this is a message"}
    ]


    
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