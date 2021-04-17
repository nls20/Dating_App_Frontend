import {useState} from 'react'
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import SwipingPage from '../components/SwipingPage'
import NavBar from '../components/NavBar/NavBar'
import MatchesPage from '../components/Matches/MatchesPage'
import ProfilePage from '../components/Profile/ProfilePage'
import Chatroom from '../components/Conversation/Chatroom'

const VinderContainer = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [vaccinated, setVaccinated] = useState(false);

    const matches = [
      {name: "andrew", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message "},
      {name: "david", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a david message less than 60 characters"},
      {name: "mark", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a mark message more than 60 characters so some of it will not appear"},
      {name: "nicola", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a nicola message"},
      {name: "brian", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a brian message"},
      {name: "andrew", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a message"},
      {name: "david", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a message"},
      {name: "mark", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a message"},
      {name: "nicola", picture: "https://i.redd.it/v0caqchbtn741.jpg", messageHistory: "this is a message"}
    ]


    const potentialMatches = [
      {name: "john", age: 30, location: "Inverness", hobbies: "running", picture:"https://i.redd.it/v0caqchbtn741.jpg"},
      {name: "bill", age: 50, location: "Glasgow", hobbies: "swimming", picture:"https://i.redd.it/v0caqchbtn741.jpg"},
      {name: "mike", age: 45, location: "Edinburgh", hobbies: "cycling", picture:"https://i.redd.it/v0caqchbtn741.jpg"}
    ]


    const getFormInformation = (details) => {
        setName(details.name)
        setAge(details.age)
        setLocation(details.location)
        setHobbies(details.hobbies)
        setVaccinated(details.vaccinated)
    }

    return (
        <Router>
        
          <Switch id="">
            <Route exact path="/">
              <SwipingPage potentialMatches={potentialMatches} />
            </Route>

            <Route exact path="/matches">
              <MatchesPage matches={matches}/>
            </Route>

            <Route path="/profile">
              <ProfilePage getFormInformation={getFormInformation} />
            </Route>

            <Route path="/matches/conversation">
              <Chatroom/>
            </Route>
          
          </Switch>
          <NavBar/>
      </Router>
    )
}
export default VinderContainer