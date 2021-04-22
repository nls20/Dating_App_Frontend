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

  const [userId, setUserId] = useState(localStorage.getItem("id"));

  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const matches = [
    {
      name: "Andrew",
      picture: "https://i.pinimg.com/originals/4e/10/e5/4e10e564d614436de1fc60cb45198cc4.jpg",
      messageHistory: "this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message ",
    }
  ];

  const potentialMatches = [
    {
      name: "Harrison",
      age: 23,
      location: "Alderran",
      hobbies: "Killing bad guys",
      picture:[
        "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-3.png",
        "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        "https://i.pinimg.com/originals/4e/10/e5/4e10e564d614436de1fc60cb45198cc4.jpg"
      ]
    }
  ];
  

  // const [potentialMatches, setPotentialMatches] = useState([])
  const [matches, setMatches] = useState([])
  



const submitted = (details) => {
    handleUserCreation(details)
    setHasBeenSubmitted(true)
}

  //GET user information
  useEffect(() => {
    UserServices.getUserInformation(8)
    .then(data => setUser(data))

    UserServices.getAllUserMatches(8)
    .then(data => setMatches(data))

  //   UserServices.getAllPotentialMatches(1)
  // .then(data => setPotentialMatches(data))
 }, [])


  const handleUserCreation = (submittedInfo) => {
      UserServices.addNewUser(submittedInfo)
      .then(data => setUser(data))
      .then(AddingImageServices.getProfileImage(user.id))
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
                <Chatroom />
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
