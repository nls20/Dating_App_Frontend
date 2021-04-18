import { useState } from 'react';
import './style/InformationSyling.css'

const DisplayInformation = ({name, age, location, hobbies, vaccinated, gender, preference, image, hasBeenSubmitted}) => {

  if (!hasBeenSubmitted){
    return null; 
  }else{
    return (
      <article className="display-profile-content">
       <img src={image} alt="image" />
        <h4>name - {name}</h4>
        <p> age - {age}</p>
        <p>location - {location}</p>
        <p>hobbies - {hobbies}</p>
        <p>Gender - {gender}</p>
        <p>preference - {preference}</p>
      </article>
    )}
}

export default DisplayInformation;