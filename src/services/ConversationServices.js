
const conversationsBaseUrl = "http://localhost:8080/conversations"

export default{
    //GET Conversation By ID    /conversations/{id}
    getConversation(id){
        return fetch(conversationsBaseUrl + "/" + id)
        .then(res => res.json())
    },

    //POST Conversation e.g.    /conversations
//When a user starts a conversation
    addNewConversation(user) {
        return fetch(conversationsBaseUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
    },

    //GET All Conversations e.g.    /conversations
//This shouldn't be needed
    getAllConversations(id){
        return fetch(conversationsBaseUrl)
        .then(res => res.json())
    },

    //GET All Conversations by User ID /conversations?userId={id}
    getAllConversationsForUser(id){
        return fetch(conversationsBaseUrl + 'conversations?userId=' + id)
        .then(res => res.json())
    },




    //GET Edit Conversation     /conversations/{id}/edit    GET

    

    //POST Update Conversation  /conversations/


    
    //DELETE Conversation   /conversations/{id}
    
}