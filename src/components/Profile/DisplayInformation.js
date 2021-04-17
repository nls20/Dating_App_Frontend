import { useState } from 'react';
import './style/InformationSyling.css'
import './Form'
import Form from './Form';

const DisplayInformation = ({name, age, location, hobbies, typeFile, gender, preference, image, hasBeenSubmitted}) => {

  if (!hasBeenSubmitted){
    return null; 
  }else{
    return (
      <article className="display-profile-content">
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
          alt="uploaded-img"
        />
        )}
        <h4>name - {name}</h4>
        <p> age - {age}</p>
        <p>location - {location}</p>
        <p>hobbies - {hobbies}</p>
        <p>Gender - {gender}</p>
        <p>preference - {preference}</p>
       <input 
       type="submit" 
       value="update profile"  
      onClick={<Form />}/>
      </article>
    )}
}

export default DisplayInformation;