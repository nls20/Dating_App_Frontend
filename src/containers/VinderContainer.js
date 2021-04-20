import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SwipingPage from "../components/Swiping/SwipingPage";
import NavBar from "../components/NavBar/NavBar";
import MatchesPage from "../components/Matches/MatchesPage";
import ProfilePage from "../components/Profile/ProfilePage";
import Chatroom from "../components/Conversation/Chatroom";
import "./VinderContainer.css";
import UserServices from "../services/UserServices";

const VinderContainer = () => {

  localStorage.setItem("id", 1)

  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(localStorage.getItem("id"));

  const matches = [
    {
      name: "andrew",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory:
        "this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message ",
    },
  ];

  const potentialMatches = [
    {
      name: "Harrison",
      age: 23,
      location: "Alderran",
      hobbies: "Killing bad guys",
      picture:
        "https://i.pinimg.com/originals/4e/10/e5/4e10e564d614436de1fc60cb45198cc4.jpg",
    },
  ];

//GET user information
 useEffect(() => {
    UserServices.getUserInformation(userId)
    .then(data => setUser(data))
 }, [])


  const handleUserCreation = (submittedInfo) => {
      setUser(submittedInfo)
    }

  return (
    <>
      <div id="header">
        <h1>Vinder</h1>
      </div>
      <section id="router">
        <Router forceRefresh={true}>
          <div id="page-body">
            <Switch id="switch">

              <Route exact path="/">
                <SwipingPage potentialMatches={potentialMatches} />
              </Route>

              <Route exact path="/matches">
                <MatchesPage matches={matches} />
              </Route>

              <Route path="/matches/conversation">
                <Chatroom />
              </Route>

              <Route path="/profile">
                <ProfilePage getFormInformation={handleUserCreation} user={user}/>
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
