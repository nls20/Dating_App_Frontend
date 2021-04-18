import { useState } from 'react';
import { Link } from "react-router-dom";
import './style/InformationSyling.css'
import './Form'
import Form from './Form';

const DisplayInformation = ({name, age, location, hobbies, typeFile, gender, preference, image, hasBeenSubmitted}) => {

  const [upDate, setUpdate] = useState(false)

  const handleUpdateButton  = (evt) => {
    setUpdate(evt.target.value)
  }

  if (!hasBeenSubmitted){
    return null; 
  }else{
    return (
      <article className="display-profile-content">
        {/* {typeFile.includes("video") ? (
        <video
        id="uploaded-image"
        src={image}
        draggable={false}
        controls
        autoPlay
        alt="uploaded-img"
        />
      ) : ( */}
        <img
          id="uploaded-image"
          src={image}
          alt="uploaded-img"
        />
        {/* )} */}
        <h4 id="name">name - {name}</h4>
        <p id="age"> age - {age}</p>
        <p id="location">location - {location}</p>
        <p id="hobbies">hobbies - {hobbies}</p>
        <p id="Gender">Gender - {gender}</p>
        <p id="preference">preference - {preference}</p>
       <Link to="/profile"><button id="button-update" value={true} onClick={handleUpdateButton}>Update</button></Link>
      </article>
    )}
}

export default DisplayInformation;