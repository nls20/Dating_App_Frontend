import './MessageTemplateTile.css'

const MessageTemplateTile = ({match}) => {

    console.log('match', match);

    //let messages = []

    //for (int i=0;i<match.length;i++){
        // if (match[i].fromUser.id === 8){
            // messages.push({person: "current", message: match[i].message})
        // } else if(match[i].fromUser.id !== 8) {
            // messages.push({person: "target", message: match[i].message})
        // }
    // }
    let matchName = ""
    match.find(m => {
        if (m.fromUser)
    })
    let messagePreview = match[match.length]
    // const maxLength = 60

    // if (match.user.toMessages.length > 0){
    //     messagePreview=match.user.toMessages[0].message
    // } else if (match.user.fromMessages> 0){
    //     messagePreview=match.user.fromMessages[0].message
    // } else {
    //     // don't show the message tab
    // }

    // console.log('message preveiw', messagePreview);

    // if (match.messages.length > maxLength){
    //     messagePreview = match.message.substring(0, maxLength) + "..."
    // } 

    return (
        <section id="total-tile-section">

            <section id="tile-picture-section">
                {/* <img src={match.picture} /> */}
            </section>

            <section id="tile-section">
                <h5>{matchName}</h5>
                <p>{messagePreview}</p>
            </section>

        </section>
        
    )
}
export default MessageTemplateTile