import { useState } from 'react';
import { Link } from "react-router-dom";
import './style/InformationSyling.css'
import './Form'
import Form from './Form';
import AddImageToUser from './AddImageToUser';

const DisplayInformation = ({name, age, location, bio, gender, gender_preference, hasBeenSubmitted, user, submitted}) => {

  const [upDate, setUpdate] = useState(false)

  const handleUpdateButton  = (evt) => {
    evt.preventDefault()
    setUpdate(true)
    localStorage.setItem('profile_card', false)
  }

  if (!hasBeenSubmitted){
    return null; 
  }else{
    return (
      <article className="display-profile-content">
      <AddImageToUser user={user}/>
        <p id="name"><span id="name1">Name - </span> {name}</p>
        <p id="age"><span id="name1">Age - </span> {age}</p>
        <p id="location"><span id="name1">Location - </span>{location}</p>
        <p id="bio"><span id="name1">Hobbies - </span>{bio}</p>
        <p id="gender"><span id="name1">Gender - </span>{gender}</p>
        <p id="gender_preference"><span id="name1">Interested in - </span> {gender_preference}</p>
        <Link to="/profile"><button id="button-update" value={true} onClick={handleUpdateButton}><i className="fa fa-user-edit"></i></button></Link>
      </article>
    )}
}

export default DisplayInformation;