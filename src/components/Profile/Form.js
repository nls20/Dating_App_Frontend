import './style/FromStyling.css'
import React, {useState} from 'react'
import FolderIcon from "./assets/folder_icon_transparent.png";
import CloseIcon from "./assets/CloseIcon.svg";
import HandleRadioButtons from './HandleRadioButtons';

const Form = ({submitted, hasBeenSubmitted}) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [gender, setGender] = useState("");
  const [preference, setPreference] = useState("");
  const [vaccinated, setVaccinated] = useState(true);
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");

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

  const handleFileSelected = (evt) => {
    if (evt.target.files && evt.target.files[0]) {
      setTypeFile(evt.target.files[0].type);
      let reader = new FileReader();

      reader.onload = (evt) => {
        setImage(evt.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(evt.target.files[0]);
    }
  }

  const handleSubmitForm = (evt) => {
      evt.preventDefault()

      submitted({
          name: name,
          age: age,
          location: location,
          hobbies: hobbies,
          vaccinated: vaccinated,
          gender: gender,
          preference : preference,
          image: image
      })

      
  }

  
  if (hasBeenSubmitted){
    return null
  }else{
    return (
      <form className="form" onSubmit={handleSubmitForm}>

        <div className="image-upload"> 
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <img
                    src={FolderIcon}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: 50, height: 50 }}
                  />
                  <p id="add-image">Add Image</p>
                </label>

                <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleFileSelected}
                />
              </>
            ) : (
              <>
                <img
                  className="close-icon"
                  src={CloseIcon}
                  alt="CloseIcon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage(null);
                  }}
                />
                {typeFile.includes("video") ? (
                  <video
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    controls
                    autoPlay
                    alt="uploaded-img"
                  />
                ) : (
                  <img
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    alt="uploaded-img"
                  />
                )}
                </>
            )}
        </div>
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
       <select className="option-bar" onChange={handleGender}>
           <option value="gender" disabled selected hidden>Choose a gender ---</option>
           <option value="male" >Male</option>
           <option value="female" >Female</option>
           <option value="non-binary" >non-binary</option>
       </select>
       <select className="option-bar" onChange={handlePreference}>
           <option value="gender" disabled selected hidden>Choose a Preference</option>
           <option value="male" >Male</option>
           <option value="female" >Female</option>
           <option value="non-binary" >non-binary</option>
           <option value="all" >All</option> 
       </select>
       <p id="vaccinated">vaccinated</p>

       <HandleRadioButtons vaccinated={vaccinated}/>
  </form>
    )
  }

}

export default Form;