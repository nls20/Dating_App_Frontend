import MessageTemplateTile from "./MessageTemplateTile"
import './MessagesPreview.css'

const MessagesPreview = ({matches}) => {

    const preview = matches.map((match, index) => {
         return <a href="/matches/conversation/{match.name}"><MessageTemplateTile match={match} key={index} /></a>
    })

    return( 
        <section id="preview-section">
            {preview}
        </section>
    )
}
export default MessagesPreview