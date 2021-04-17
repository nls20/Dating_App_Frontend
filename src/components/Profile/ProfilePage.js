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
    const [vaccinated, setVaccinated] = useState(false);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [image, setImage] = useState("")

    const submitted = (details) => {

        setName(details.name)
        setAge(details.age)
        setLocation(details.location)
        setHobbies(details.hobbies)
        setVaccinated(details.vaccinated)
        setGender(details.gender)
        setPreference(details.preference)
        setImage(details.image)
        setHasBeenSubmitted(true)
        
    }

    return (
        <>
        <Form submitted={submitted} hasBeenSubmitted={hasBeenSubmitted} />
        <DisplayInformation 
        name={name} 
        age={age} 
        location={location} 
        hobbies={hobbies} 
        vaccinated={vaccinated}
        gender={gender} 
        preference={preference}
        image={image}
        hasBeenSubmitted={hasBeenSubmitted}/>
        </>
    )
}
export default ProfilePage