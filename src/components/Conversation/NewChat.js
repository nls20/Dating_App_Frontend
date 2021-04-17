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
            <section>
                <form onSubmit={formSubmit} action="">
                    <input type="text" value={message} onChange={textChange}/>

                    <input type="submit" value="Send"/>
                </form>
            </section>
        </>
    )
 }
 export default NewChat