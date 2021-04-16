import './FromStyling.css'
import {useState} from 'react'

const Form = ({submitted, hasBeenSubmitted}) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [gender, setGender] = useState("");
  const [preference, setPreference] = useState("");
  const [vaccinated, setVaccinated] = useState(false);

  const handleGender = (evt) => {
    setGender(evt.target.value)
  }

  const handlePreference = (evt) => {
    setPreference(evt.target.value)
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
  const handleHobbies = (evt) => {
      setHobbies(evt.target.value)
  }

  const handleVaccinated = (evt) => {
      setVaccinated(evt.target.value)
  }

  const handleSubmitForm = (evt) => {
      evt.preventDefault()
      console.log("Start up From");

      submitted({
          name: name,
          age: age,
          location: location,
          hobbies: hobbies,
          vaccinated: vaccinated
      })

  }

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
      placeholder="location" 
      value={location} 
      onChange={handleLocation} required/>

       <input 
       className="setUp-input" 
       type="text" 
       placeholder="Hobbies & Interests" 
       value={hobbies} 
       onChange={handleHobbies} required/>
       
       <select className="option-bar" value={gender} onChange={handleGender}>
           <option className="option" value="gender" disabled selected hidden>Choose a gender</option>
           <option className="option" value="male" >Male</option>
           <option className="option" value="female" >Female</option>
           <option className="option" value="non-binary" >non-binary</option>
       </select>
       <select className="option-bar" value={preference} onChange={handlePreference}>
           <option className="option" value="gender" disabled selected hidden>Choose a Preference</option>
           <option className="option" value="male" >Male</option>
           <option className="option" value="female" >Female</option>
           <option className="option" value="non-binary" >non-binary</option>
           <option className="option" value="all" >All</option> 
       </select>
       <p id="vaccinated">vaccinated</p>
       <input type="radio" id="Choice"
         name="vaccinated" value={true} onChange={handleVaccinated} required/>
       <label htmlFor="Choice1">yes</label>

      <input type="radio" id="Choice"
      name="vaccinated" value={false} onChange={handleVaccinated}/>
     <label htmlFor="Choice2">no</label>

     <input id="button" type="submit" value="Submit"/>
  </form>
    )
  }

}

export default Form;