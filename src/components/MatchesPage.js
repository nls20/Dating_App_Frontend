import {useState} from 'react'
import MatchesPreviewTiles from './MatchesPreviewTiles'
import MessagesPreview from './MessagesPreview'
const MatchesPage = () => {

    const matches = [
        {name: "andrew", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message "},
        {name: "david", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a david message less than 60 characters"},
        {name: "mark", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a mark message more than 60 characters so some of it will not appear"},
        {name: "nicola", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a nicola message"},
        {name: "brian", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a brian message"},
        {name: "andrew", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a message"},
        {name: "david", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a message"},
        {name: "mark", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a message"},
        {name: "nicola", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a message"}
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