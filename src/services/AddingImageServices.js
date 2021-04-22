const baseURL = "http://localhost:3001/api/profileImage/"
const springImageBaseUrl = "http://localhost:8080/profileImage"

export default{

  getProfileImage(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  postProfileImage(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify({image: payload}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  
  addNewProfileImage(imageURL) {
    console.log("image url", imageURL);
    return fetch(springImageBaseUrl, {
      method: 'POST',
      body: JSON.stringify(imageURL),
      headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
  },
}