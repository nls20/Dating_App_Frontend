import {useState} from 'react'

const HandleRadioButtons = ({vaccinated}) => {

  const [vaccinatedYes, setVaccinatedYes] = useState(true)
  const [vaccinatedNo, setVaccinatedNo] = useState(false)

  const handVaccinatedYes = (evt) => {
    setVaccinatedYes(evt.target.value)
  }

  const handleVaccinatedNo = (evt) => {
    setVaccinatedNo(evt.target.value)
  }

  if (vaccinatedNo){
    return <p>Stop stop stop, Go and get a vaccine!</p>
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
    {/* {
      if()
    } */}
      <input  id="button" type="submit" value="Save Profile"/>
    </div>
    </>
  )
}

export default HandleRadioButtons;