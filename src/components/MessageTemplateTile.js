

const MessageTemplateTile = ({match}) => {

    return (
        <>
            <p>{match.name}: {match.messageHistory}</p>
        </>
    )
}
export default MessageTemplateTile