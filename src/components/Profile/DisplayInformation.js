import { useState } from 'react';

const DisplayInformation = ({name, age, location, hobbies, vaccinated, gender, preference, picture, hasBeenSubmitted}) => {

  if (!hasBeenSubmitted && !vaccinated){
    return null; 
  }else{
    return (
      <article>
        <h4>name - {name}</h4>
        <p> age - {age}</p>
        <p>location - {location}</p>
        <p>hobbies - {hobbies}</p>
        <p>Gender - {gender}</p>
        <p>preference - {preference}</p>
        <img src={picture} alt="image" />
      </article>
    )}
}

export default DisplayInformation;