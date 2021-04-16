import {useState} from 'react';
import DisplayInformation from './DisplayInformation';
import Form from './Form';

const ProfilePage = ({getFormInformation}) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [vaccinated, setVaccinated] = useState(false);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const submitted = (details) => {

        setName(details.name)
        setAge(details.age)
        setLocation(details.location)
        setHobbies(details.hobbies)
        setVaccinated(details.vaccinated)

        setHasBeenSubmitted(true)
        
    }


    // const selectGenderOptions = gender.map(({gender, id}) => (
    //     <option key={id} value={id}>{gender}</option>
    // ))

    //  const handleSelectedGender = (evt) => {
    //      onGenderSelect(evt.target.value)
    //  }

    // const selectGenderPreference = preference.map(({preference, id}) => (
    //     <option key={id} value={id}>{preference}</option>
    // ))

    return (
        <>
        <Form submitted={submitted} hasBeenSubmitted={hasBeenSubmitted} />
        <DisplayInformation name={name} age={age} location={location} hobbies={hobbies} hasBeenSubmitted={hasBeenSubmitted}/>
        </>
    )
}
export default ProfilePage