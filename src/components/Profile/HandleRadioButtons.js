import {useState} from 'react'

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
    return <p><a href="https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/" target="_blank">Go and get a vaccine!</a></p>
    
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