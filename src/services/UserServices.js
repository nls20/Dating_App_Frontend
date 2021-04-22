
const usersBaseUrl = "http://localhost:8080/users"

export default{
    //GET User By ID    /users/{id}
    getUserInformation(id){
        return fetch(usersBaseUrl + "/" + id)
        .then(res => res.json())
    },

    getAllPotentialMatches(){
        return fetch(usersBaseUrl + "/" )
        .then(res => res.json())
    },

    getAllUserMatches(id){
        return fetch(usersBaseUrl+ "/" + id + "/matches" )
        .then(res => res.json())
    }, 


    //GET All Users e.g.    /users
    getAllUsers(id){
        return fetch(usersBaseUrl )
        .then(res => res.json())
    },

    //GET All MALE Users    /users?gender=MALE
    getAllMALEUsers(id){
        return fetch(usersBaseUrl + '?gender=MALE')
        .then(res => res.json())
    },

    //GET All FEMALE Users  /users?gender=FEMALE
    getAllFEMALEUsers(id){
        return fetch(usersBaseUrl + '?gender=FEMALE')
        .then(res => res.json())
    },

    //POST User e.g.    /users
    addNewUser(user) {
        return fetch(usersBaseUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    },

    //PUT Update User  /users/
    updateUser(user, id) {
        return fetch(usersBaseUrl + "/" + id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    },

    //DELETE User   /users/{id}
    deleteUser(id) {
        return fetch(usersBaseUrl + "/" + id, {
            method: 'DELETE'
        })
    }  
}