import { useState, useEffect } from 'react';
import DisplayInformation from './DisplayInformation';
import Form from './Form';
import AddImageToUser from './AddImageToUser';

const ProfilePage = ({submitted, hasBeenSubmitted, user}) => {

    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); // tried boolean and null

    // const submitted = (details) => {
    //     getFormInformation(details)
    //     setHasBeenSubmitted(true)
    // }

    if (hasBeenSubmitted) {
        <DisplayInformation />;
        console.log("this is the user", user); // show the user object
        console.log("what is the status", hasBeenSubmitted); //true
    } 
    return (
        <>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous"></link>
        
        <Form submitted={submitted} hasBeenSubmitted={hasBeenSubmitted} user={user}/>
        <DisplayInformation 
            name={user.name} 
            age={user.age} 
            location={user.location} 
            bio={user.bio} 
            gender={user.gender} 
            gender_preference={user.gender_preference}
            hasBeenSubmitted={hasBeenSubmitted}
            user={user}
            />
        </>

    )
}
export default ProfilePage