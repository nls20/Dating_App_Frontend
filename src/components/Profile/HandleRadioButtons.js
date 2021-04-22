import {useState} from 'react'
import { GiLoveInjection } from "react-icons/gi";

const HandleRadioButtons = ({vaccinated}) => {

  const [vaccinatedYes, setVaccinatedYes] = useState(false)
  const [vaccinatedNo, setVaccinatedNo] = useState(false)

  const handVaccinatedYes = (evt) => {
    setVaccinatedYes(evt.target.value)
  }

  const handleVaccinatedNo = (evt) => {
    setVaccinatedNo(evt.target.value)
  }

  // const handleButton = (evt) => {
  //   if(vaccinatedYes) {
  //     <input id="button" type="submit" value="Save Profile"/>
  //   }
  // }

  if (vaccinatedNo){
    return <p className="stop-text">Stop stop stop! <br></br>
              <a href="https://www.nhsinform.scot/covid-19-vaccine/invitations-and-appointments/registering-for-a-coronavirus-vaccine">Click here to get the Vaccine</a>
              <div className="injection">
                 < GiLoveInjection />
             </div>
            </p>
  }
  return (
    <>
    <div className="Choice">
      <div className="radio-button">
        <input type="radio" 
        id="Choice1"
        name="vaccinated" 
        value={true} 
        onChange={handVaccinatedYes} 
        required>
        </input>
        <label htmlFor="Choice1">YES</label>
      </div>

      <div className="radio-button">
        <input 
        type="radio" 
        id="Choice2"
        name="vaccinated" 
        value={false} 
        onChange={handleVaccinatedNo}>
        </input>
        <label htmlFor="Choice2">NO</label>
      </div>
    </div>

    <div>
       <input id="button" type="submit" value="Save Profile"/>
    </div>
    </>
  )
}

export default HandleRadioButtons;