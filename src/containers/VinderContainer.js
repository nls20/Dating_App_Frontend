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

const VinderContainer = () => {

  localStorage.setItem("id", 1)

  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(localStorage.getItem("id"));

  const matches = [
    {
      name: "Andrew",
      picture: "https://i.pinimg.com/originals/4e/10/e5/4e10e564d614436de1fc60cb45198cc4.jpg",
      messageHistory:
        "this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message ",
    },
    {
      name: "David",
      picture: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      messageHistory: "this is a david message less than 60 characters",
    },
    {
      name: "Mark",
      picture: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      messageHistory:
        "this is a mark message more than 60 characters so some of it will not appear",
    },
    {
      name: "Nicola",
      picture: "https://image.freepik.com/free-photo/girl-cafe-with-smartphone_1321-389.jpg",
      messageHistory: "this is a nicola message",
    },
    {
      name: "Brian",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory: "this is a brian message",
    },
    {
      name: "Andrew",
      picture: "https://i.pinimg.com/originals/4e/10/e5/4e10e564d614436de1fc60cb45198cc4.jpg",
      messageHistory: "this is a message",
    },
    {
      name: "David",
      picture: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      messageHistory: "this is a message",
    },
    {
      name: "Mark",
      picture: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      messageHistory: "this is a message",
    },
    {
      name: "Nicola",
      picture: "https://image.freepik.com/free-photo/girl-cafe-with-smartphone_1321-389.jpg",
      messageHistory: "this is a message",
    }
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

  const iconSelect = () => {
    if (window.location.pathname === "/") {
      return <i onClick="" className="help-button"><RiQuestionLine/></i>
    } else if (window.location.pathname.split("/")[2] === "conversation") {
      return <i onClick="" className="delete-button"><RiDeleteBin7Line/></i>
    } else {
      return null
    }
  }

  return (
    <>
      <section id="router">
        <Router forceRefresh={true}>
          <div id="header">
            <h1>Vinder</h1>
            <div>{iconSelect()}</div>
          </div>
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
