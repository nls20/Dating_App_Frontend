import PersonOneMessage from "./PersonOneMessage"
import PersonTwoMessage from "./PersonTwoMessage"

const Chatroom = () => {

    const messageHistory = [
        {person: 1, message: "first message"},
        {person: 2, message: "person 2 first message"},
        {person: 1, message: "second message"},
        {person: 2, message: "person 2 second message"},
        {person: 1, message: "third message"},
        {person: 2, message: "person 2 third message"},
    ]

    const messageList = messageHistory.map((message, index) => {
        let newPerson
        if (message.person ==1){
            newPerson = <PersonOneMessage key={index} message={message.message}/>
        } else if (message.person == 2) {
            newPerson = <PersonTwoMessage key={index} message={message.message}/>
        }
        return newPerson
    })

    return (
        <> 
            {messageList}
        </>
    )
}
export default Chatroom