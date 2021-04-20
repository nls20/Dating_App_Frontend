import { useState, useEffect } from 'react';
import DisplayInformation from './DisplayInformation';
import Form from './Form';
import AdddImageToUser from './AddImageToUser';

const ProfilePage = ({getFormInformation, user}) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [gender, setGender] = useState("");
    const [preference, setPreference] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // useEffect(() => {
    //     if (user.id != null) {
    //     setHasBeenSubmitted(true)
    //     }
    // }, [])

    useEffect(() => {
        setName(user.name);
        setAge(user.age);
        setLocation(user.location);
        setHobbies(user.bio);    //Watch for naming, hobbies vs bio
        setGender(user.gender)
        setPreference(user.preference)
    })


    const submitted = (details) => {
        getFormInformation(details)
        setHasBeenSubmitted(true)
    }

    return (
        <>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous"></link>
        
        <AdddImageToUser />
        <Form submitted={submitted} hasBeenSubmitted={hasBeenSubmitted} />
        <DisplayInformation 
            name={name} 
            age={age} 
            location={location} 
            hobbies={hobbies} 
            gender={gender} 
            preference={preference}
            hasBeenSubmitted={hasBeenSubmitted}/>
        </>

    )
}
export default ProfilePage