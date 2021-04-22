import './MessageTemplateTile.css'

const MessageTemplateTile = ({match}) => {

    console.log('match', match);

    let messagePreview = ""
    const maxLength = 60

    if (match.user.toMessages.length > 0){
        messagePreview=match.user.toMessages[0].message
    } else if (match.user.fromMessages> 0){
        messagePreview=match.user.fromMessages[0].message
    } else {
        // don't show the message tab
    }

    console.log('message preveiw', messagePreview);

    if (match.messages.length > maxLength){
        messagePreview = match.message.substring(0, maxLength) + "..."
    } 

    return (
        <section id="total-tile-section">

            <section id="tile-picture-section">
                <img src={match.picture} />
            </section>

            <section id="tile-section">
                <h5>{match.user.name}</h5>
                <p>{messagePreview}</p>
            </section>

        </section>
        
    )
}
export default MessageTemplateTile