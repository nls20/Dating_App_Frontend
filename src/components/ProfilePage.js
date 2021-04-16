import {useState} from 'react';

const ProfilePage = ({onSubmitForm}) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState("");
    const [hobbies, setHobbies] = useState("");
    // const [gender, setGender] = useState(null);
    // const [preference, setPreference] = useState(null);
    const [vaccinated, setVaccinated] = useState(0);

    const handelName = (evt) => {
        setName(evt.target.value)
    }

    const handelAge = (evt) => {
        setAge(evt.target.value)
    }

    const handelLocation = (evt) => {
        setLocation(evt.target.value)
    }
    const handelHobbies = (evt) => {
        setHobbies(evt.target.value)
    }

    const handelVaccinated = (evt) => {
        setVaccinated(evt.target.value)
    }

    const handelSubmitForm = (evt) => {
        evt.preventDefault()
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
        <form className="setUp-input" onSubmit={handelSubmitForm}>

            <input type="text" placeholder="Name" value={name} onChange={handelName}/>
            <input type="number" placeholder="Age" value={age} onChange={handelAge}/>
            <input type="text" placeholder="location" value={location} onChange={handelLocation}/>
             <textarea type="text" placeholder="Hobbies & Interests" value={hobbies} onChange={handelHobbies}/>
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
               name="vaccinated" value={1} onChange={handelVaccinated}/>
             <label for="Choice1">yes</label>

            <input type="radio" id="Choice2"
            name="vaccinated" value={2} onChange={handelVaccinated}/>
           <label for="Choice2">no</label>

           <input id="button" type="submit" value="Submit"></input>
        </form>

    )
}
export default ProfilePage