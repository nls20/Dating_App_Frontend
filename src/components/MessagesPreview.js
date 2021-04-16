import MessageTemplateTile from "./MessageTemplateTile"

const MessagesPreview = ({matches}) => {

    const preview = matches.map((match, index) => {
         return <MessageTemplateTile match={match} key={index} />
    })

    return( 
        <>
            {preview}
        </>
    )
}
export default MessagesPreview