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
          id="image"
          src={image}
          alt="uploaded-img"
        />
        {/* )} */}
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