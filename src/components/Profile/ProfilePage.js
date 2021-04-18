import {useState} from 'react';
import DisplayInformation from './DisplayInformation';
import Form from './Form';

const ProfilePage = ({getFormInformation}) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [gender, setGender] = useState("");
    const [preference, setPreference] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [image, setImage] = useState("")
    const [typeFile, setTypeFile] = useState("");

    const submitted = (details) => {

        setName(details.name)
        setAge(details.age)
        setLocation(details.location)
        setHobbies(details.hobbies)
        setGender(details.gender)
        setPreference(details.preference)
        setImage(details.image)
        setHasBeenSubmitted(true)
        setTypeFile(details.typeFile)
        
    }

    return (
        <>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
        <h1 id="header">Vinder</h1>
        <Form 
        submitted={submitted} hasBeenSubmitted={hasBeenSubmitted} />
        <DisplayInformation 
        name={name} 
        age={age} 
        location={location} 
        hobbies={hobbies} 
        gender={gender} 
        preference={preference}
        image={image}
        typeFile={typeFile}
        hasBeenSubmitted={hasBeenSubmitted}/>
        </>
    )
}
export default ProfilePage