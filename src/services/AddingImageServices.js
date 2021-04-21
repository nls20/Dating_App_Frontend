const baseURL = "http://localhost:3000/api/profileImage/"

export default{

  getProfileImage(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  postProfileImage(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}