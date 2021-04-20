
const baseUrl = "http://localhost:8080/users/"

export default{
    getUserInformation(id){
        return fetch(baseUrl+id)
        .then(res => res.json())
    },
}