import './style/FormStyling.css'
import React, {useState, useEffect} from 'react'
import HandleRadioButtons from './HandleRadioButtons';

const Form = ({submitted, hasBeenSubmitted, user}) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");
  const [gender_preference, setGenderPreference] = useState("");
  const [vaccinated, setVaccinated] = useState(true);

  const handleGender = (evt) => {
    setGender(evt.target.value)
  }

  const handleGenderPreference = (evt) => {
    setGenderPreference(evt.target.value)
  }

  const handleName = (evt) => {
      setName(evt.target.value)
  }

  const handleAge = (evt) => {
      setAge(evt.target.value)
  }

  const handleLocation = (evt) => {
      setLocation(evt.target.value)
  }
  const handleBio = (evt) => {
      setBio(evt.target.value)
  }

  const handleVaccinated = (evt) => {
      setVaccinated(evt.target.value)
  }

  const handleSubmitForm = (evt) => {
      evt.preventDefault()

      localStorage.setItem('profile_card', true)

      if (user.id) {
        submitted({
            id: user.id,
            name: name,
            age: age,
            location: location,
            bio: bio,
            vaccinated: vaccinated,
            gender: gender,
            gender_preference : gender_preference,
        }, user.id)
      } else {
        submitted({
          name: name,
          age: age,
          location: location,
          bio: bio,
          vaccinated: vaccinated,
          gender: gender,
          gender_preference : gender_preference,
        }, user.id)
    }
  }

  useEffect(() => {
    if (user.id) {
    setName(user.name);
    setAge(user.age);
    setLocation(user.location);
    setBio(user.bio);
    setGender(user.gender)
    setGenderPreference(user.gender_preference)
    }
}, [user])
  

  if (hasBeenSubmitted){
    return null
  }else{
    return (
      <form className="form" onSubmit={handleSubmitForm}>
      <input 
      className="setUp-input"
       type="text" 
       placeholder="Name" 
       value={name} 
       onChange={handleName} required/>

      <input 
      className="setUp-input"
      type="number" 
      placeholder="Age" 
      value={age} 
      onChange={handleAge} required/>

      <input 
      className="setUp-input" 
      type="text" 
      placeholder="Location" 
      value={location} 
      onChange={handleLocation} required/>

       <input 
       className="setUp-input" 
       type="text" 
       placeholder="Hobbies & Interests" 
       value={bio} 
       onChange={handleBio} required/>

       <select className="option-bar" value={gender} onChange={handleGender}>
           <option disabled selected>Choose a gender</option>
           <option value="Male" >Male</option>
           <option value="Female" >Female</option>
           <option value="NonBinary" >Non-Binary</option>
       </select>
       <select className="option-bar" value={gender_preference} onChange={handleGenderPreference}>
           <option disabled selected>Choose a Preference</option>
           <option value="Male" >Male</option>
           <option value="Female" >Female</option>
           <option value="NonBinary" >Non-Binary</option>
           <option value="All" >All</option> 
       </select>
       <p id="vaccinated">Vaccinated</p>

       <HandleRadioButtons vaccinated={vaccinated}/>
  </form>
    )
  }
}

export default Form;