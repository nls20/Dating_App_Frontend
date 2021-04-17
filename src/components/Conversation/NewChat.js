import { useState } from "react"


 const NewChat = ({newMessage}) => {

    const [message, setMessage] = useState("")

    const textChange = (evt) => {
        setMessage(evt.target.value)
    }
     
    const formSubmit = (evt)=> {
        evt.preventDefault()
        newMessage(message)
    }

    return (
        <>
            <section>
                <form onSubmit={formSubmit} action="">
                    <input type="text" onChange={textChange}/>

                    <input type="submit" value="Send"/>
                </form>
            </section>
        </>
    )
 }
 export default NewChat