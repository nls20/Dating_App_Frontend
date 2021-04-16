import {useState} from 'react'
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import SwipingPage from '../components/SwipingPage'
import NavBar from '../components/NavBar'
import MatchesPage from '../components/MatchesPage'
import ProfilePage from '../components/ProfilePage'

const VinderContainer = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [vaccinated, setVaccinated] = useState(false);


    const getFormInformation = (details) => {
        setName(details.name)
        setAge(details.age)
        setLocation(details.location)
        setHobbies(details.hobbies)
        setVaccinated(details.vaccinated)
    }

    return (
        <Router>
        <NavBar/>
          <Switch>
            <Route exact path="/">
              <SwipingPage />
            </Route>

            <Route path="/matches">
              <MatchesPage/>
            </Route>

            <Route path="/profile">
              <ProfilePage getFormInformation={getFormInformation} />
            </Route>
          
          </Switch>

      </Router>
    )
}
export default VinderContainer