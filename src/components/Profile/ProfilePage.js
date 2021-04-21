import { useState, useEffect } from 'react';
import DisplayInformation from './DisplayInformation';
import Form from './Form';
import AddImageToUser from './AddImageToUser';

const ProfilePage = ({getFormInformation, user}) => {

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const submitted = (details) => {
        getFormInformation(details)
        setHasBeenSubmitted(true)
    }

    return (
        <>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous"></link>
        
        <AddImageToUser />
        <Form submitted={submitted} hasBeenSubmitted={hasBeenSubmitted} user={user}/>
        <DisplayInformation 
            name={user.name} 
            age={user.age} 
            location={user.location} 
            hobbies={user.hobbies} 
            gender={user.gender} 
            preference={user.preference}
            hasBeenSubmitted={hasBeenSubmitted}/>
        </>

    )
}
export default ProfilePage