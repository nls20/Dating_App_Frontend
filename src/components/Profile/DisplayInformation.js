import { useState } from 'react';
import { Link } from "react-router-dom";
import './style/InformationSyling.css'
import './Form'
import Form from './Form';

const DisplayInformation = ({name, age, location, hobbies, gender, preference, hasBeenSubmitted}) => {

  const [upDate, setUpdate] = useState(false)

  const handleUpdateButton  = (evt) => {
    setUpdate(evt.target.value)
  }

  if (!hasBeenSubmitted){
    return null; 
  }else{
    return (
      <article className="display-profile-content">
        <p id="name"><span id="name1">Name - </span> {name}</p>
        <p id="age"><span id="name1">Age - </span> {age}</p>
        <p id="location"><span id="name1">Location - </span>{location}</p>
        <p id="hobbies"><span id="name1">Hobbies - </span>{hobbies}</p>
        <p id="Gender"><span id="name1">Gender - </span>{gender}</p>
        <p id="preference"><span id="name1">Interested in - </span> {preference}</p>
        <Link to="/profile"><button id="button-update" value={true} onClick={handleUpdateButton}><i class="fa fa-user-edit"></i></button></Link>
      </article>
    )}
}

export default DisplayInformation;