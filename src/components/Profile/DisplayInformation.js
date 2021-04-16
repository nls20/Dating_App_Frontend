import { useState } from 'react';

const DisplayInformation = ({name, age, location, hobbies, hasBeenSubmitted}) => {

  if (!hasBeenSubmitted){
    return null
  }else{
  return (
    <article>
      <h4>name - {name}</h4>
      <p> age - {age}</p>
      <p>location - {location}</p>
      <p>hobbies - {hobbies}</p>
    </article>
  )}
}

export default DisplayInformation;