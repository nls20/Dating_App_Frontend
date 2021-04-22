import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SwipingPage from "../components/Swiping/SwipingPage";
import NavBar from "../components/NavBar/NavBar";
import MatchesPage from "../components/Matches/MatchesPage";
import ProfilePage from "../components/Profile/ProfilePage";
import Chatroom from "../components/Conversation/Chatroom";
import "./VinderContainer.css";
import UserServices from "../services/UserServices";
import { RiQuestionLine, RiDeleteBin7Line } from "react-icons/ri";
import HelpPage from "../components/Swiping/HelpPage";
import AddingImageServices from "../services/AddingImageServices";

const VinderContainer = () => {

  const [user, setUser] = useState({});

  const [userId, setUserId] = useState(localStorage.getItem('id'));

  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(localStorage.getItem('profile_card'))
  

  const [potentialMatches, setPotentialMatches] = useState([])
  const [matches, setMatches] = useState([])
  



const submitted = (details) => {
    handleUserCreation(details)
    setHasBeenSubmitted(true)
}
//GET user information
  useEffect(() => {
    UserServices.getUserInformation(7)
    .then(data => setUser(data))

    UserServices.getAllUserMatches(7)
    .then(data => setMatches(data))

    // AddingImageServices.getProfileImage()
    // .then(data => setUser.profileImages[0].mongoId(data))

    UserServices.getAllPotentialMatches(1)
  .then(data => setPotentialMatches(data))
 }, [])

  const handleUserCreation = (submittedInfo) => {
      UserServices.addNewUser(submittedInfo)
      .then(data => setUser(data))
    }  


  useEffect(() => {
    if (user) {
      localStorage.setItem("id", user.id)
    }
    return null
  }, [user])


  const iconSelect = () => {
    if (window.location.pathname === "/") {
      return <a href="/helppage"><i className="help-button"><RiQuestionLine/></i></a>
    } else if (window.location.pathname.split("/")[2] === "conversation") {
      return  <form>
                <i className="delete-button"><RiDeleteBin7Line/></i>
              </form>
    } else {
      return <div id="spacer-div"/>
    }
  }

  return (
    <>
      <section id="router">
        <Router forceRefresh={true}>
          <div id="header">
            <div id="spacer-div"/>
            <h1>Vinder </h1>
          <div>
          {iconSelect()}
          </div>
          </div>
          <div id="page-body">
            <Switch id="switch">

              <Route exact path="/">
                <SwipingPage potentialMatches={potentialMatches} />
              </Route>

            <Route path ="/helppage">
              <HelpPage />
            </Route>

              <Route exact path="/matches">
                <MatchesPage matches={matches} />
              </Route>

              <Route path="/matches/conversation">
                <Chatroom matches={matches} />
              </Route>

              <Route path="/profile">
                <ProfilePage  submitted={submitted} hasBeenSubmitted={hasBeenSubmitted} user={user}/>
              </Route>

            </Switch>
          </div>

          <div id="nav-bar">
            <NavBar />
          </div>
        </Router>
      </section>
    </>
  );
};
export default VinderContainer;
