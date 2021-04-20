import { useState } from "react"
import './NewChat.css'

 const NewChat = ({newMessage}) => {

    const [message, setMessage] = useState("")

    const textChange = (evt) => {
        setMessage(evt.target.value)
    }
     
    const formSubmit = (evt)=> {
        evt.preventDefault()
        newMessage(message)

        setMessage("")
    }

    return (
        <>
            <section className="message-submit">
                <form onSubmit={formSubmit} action="">
                    <input id="input-box" type="text" value={message} onChange={textChange}/>

                    <input id="submit-button" type="submit" value="Send"/>
                </form>
            </section>
        </>
    )
 }
 export default NewChat