import {useState} from 'react';

const ProfilePage = ({getFormInformation}) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [vaccinated, setVaccinated] = useState(false);

    const handleName = (evt) => {
        setName(evt.target.value)
    }

    const handleAge = (evt) => {
        setAge(evt.target.value)
    }

    const handleLocation = (evt) => {
        setLocation(evt.target.value)
    }
    const handleHobbies = (evt) => {
        setHobbies(evt.target.value)
    }

    const handleVaccinated = (evt) => {
        setVaccinated(evt.target.value)
    }

    const handleSubmitForm = (evt) => {
        evt.preventDefault()
        console.log("Start up From");

        getFormInformation({
            name: name,
            age: age,
            location: location,
            hobbies: hobbies,
            vaccinated: vaccinated
        })
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
        <form className="setUp-input" onSubmit={handleSubmitForm}>

            <input type="text" placeholder="Name" value={name} onChange={handleName}/>
            <input type="number" placeholder="Age" value={age} onChange={handleAge}/>
            <input type="text" placeholder="location" value={location} onChange={handleLocation}/>
             <textarea type="text" placeholder="Hobbies & Interests" value={hobbies} onChange={handleHobbies}/>
             {/* <select>
                 <option value="gender" disabled selected hidden>Choose a gender</option>
                 {selectGenderOptions}
             </select>
             <select>
                 <option value="gender" disabled selected hidden>Choose a Preference</option>
                 {selectGenderPreference}
             </select> */}
             <p>vaccinated</p>
             <input type="radio" id="Choice1"
               name="vaccinated" value={true} onChange={handleVaccinated}/>
             <label htmlFor="Choice1">yes</label>

            <input type="radio" id="Choice2"
            name="vaccinated" value={false} onChange={handleVaccinated}/>
           <label htmlFor="Choice2">no</label>

           <input id="button" type="submit" value="Submit"/>
        </form>
         
        <h4>{name}</h4>
        <p>{age}</p>
        <p>{location}</p>
        <p>{hobbies}</p>

        </>
    )
}
export default ProfilePage