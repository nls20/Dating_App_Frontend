import './MessageTemplateTile.css'

const MessageTemplateTile = ({match}) => {


    let messagePreview = ""
    const maxLength = 60

    if (match.messageHistory.length > maxLength){
        messagePreview = match.messageHistory.substring(0, maxLength) + "..."
    } else {
        messagePreview = match.messageHistory
    }

    return (
        <section id="total-tile-section">

            <section id="tile-picture-section">
                <img src={match.picture} />
            </section>

            <section id="tile-section">
                <h5>{match.name}</h5>
                <p>{messagePreview}</p>
            </section>

        </section>
        
    )
}
export default MessageTemplateTile