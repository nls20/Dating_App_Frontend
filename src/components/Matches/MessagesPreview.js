import MessageTemplateTile from "./MessageTemplateTile"
import './MessagesPreview.css'

const MessagesPreview = ({matches}) => {

    const preview = matches.map((match, index) => {
        const hrefName = "/matches/conversation/" + match.name
         return <a href={hrefName}><MessageTemplateTile match={match} key={index} /></a>
    })

    return( 
        <section id="preview-section">
            {preview}
        </section>
    )
}
export default MessagesPreview