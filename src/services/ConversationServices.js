
const conversationsBaseUrl = "http://localhost:8080/conversations"

export default{
    //GET Conversation By ID    e.g. /conversations/{id}
    getConversation(id){
        return fetch(conversationsBaseUrl + "/" + id)
        .then(res => res.json())
    },



    //GET All Conversations     e.g. /conversations



    //GET All Conversations by User ID /conversations?userId={id}
    getAllConversationsForUser(id){
        return fetch(conversationsBaseUrl + '?userId=' + id)
        .then(res => res.json())
    },



    //POST Conversation         e.g. /conversations          //When a user starts a conversation
    addNewConversation(conversation) {
        return fetch(conversationsBaseUrl, {
            method: 'POST',
            body: JSON.stringify(conversation),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
    },
    


    //POST Update Conversation  e.g. /conversations/


    
    //DELETE Conversation       e.g. /conversations/{id}
    deleteConversation(id) {
        return fetch(conversationsBaseUrl + "/" + id)
    }
    
}