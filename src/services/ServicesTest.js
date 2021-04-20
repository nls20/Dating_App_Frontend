import { useState, useEffect } from "react";
import UserServices from "../services/UserServices";


const ServiceTest = () => {


    const [argument, setArgument] = setState()
    const [testObject, setTestObject] = useState()

    useEffect(() => {
        UserServices.getUserInformation(userId)
        .then(data => setTestingObject(data))
     }, [])

}

export default ServiceTest;