const MongoBaseURL = "http://localhost:3005/api/profileImage/"
const springImageBaseUrl = "http://localhost:8080/profileImage"

export default{

  getProfileImage(id){
    return fetch(MongoBaseURL + id)
    .then(res => res.json())
  },

  postProfileImage(payload){
    return fetch(MongoBaseURL, {
      method: 'POST',
      body: JSON.stringify({image: payload}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  
  addNewProfileImage(imageURL) {
    return fetch(springImageBaseUrl, {
      method: 'POST',
      body: JSON.stringify(imageURL),
      headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
  },
}