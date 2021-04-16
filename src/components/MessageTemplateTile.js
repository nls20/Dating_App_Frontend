import './MessageTemplateTile.css'

const MessageTemplateTile = ({match}) => {

    return (
        <section id="tile-section">
            <h5>{match.name}</h5>
            <p>{match.messageHistory}</p>
        </section>
    )
}
export default MessageTemplateTile