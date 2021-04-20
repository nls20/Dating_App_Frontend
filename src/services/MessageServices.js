
const messageBaseUrl = "http://localhost:8080/messages"

export default{
    //GET Message By ID    e.g. /messages/{id}
    getMessageInformation(id){
        return fetch(messageBaseUrl + "/" + id)
        .then(res => res.json())
    },

    //POST Message       e.g. /messages
    addNewMessage(message) {
        return fetch(messageBaseUrl, {
            method: 'POST',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
    },

    //GET All Messages By Conversation ID    e.g. /messages?conversationId={id}
    getAllMessages(id){
        return fetch(messageBaseUrl + "?conversationId=" + id)
        .then(res => res.json())
    },




    //GET Edit Message     /message/{id}/edit

    

    //POST Update Message  /message/


    
    //DELETE Message   /message/{id}
    
}