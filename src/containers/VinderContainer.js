import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SwipingPage from "../components/Swiping/SwipingPage";
import NavBar from "../components/NavBar/NavBar";
import MatchesPage from "../components/Matches/MatchesPage";
import ProfilePage from "../components/Profile/ProfilePage";
import Chatroom from "../components/Conversation/Chatroom";
import "./VinderContainer.css";
import { RiQuestionLine, RiDeleteBin7Line } from "react-icons/ri";

const VinderContainer = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [vaccinated, setVaccinated] = useState(false);
  const [gender, setGender] = useState("");
  const [preference, setPreference] = useState("");

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

  // const potentialMatches = [
  //   {
  //     name: "john",
  //     age: 30,
  //     location: "Inverness",
  //     hobbies: "running",
  //     picture: "https://i.redd.it/v0caqchbtn741.jpg",
  //   },
  //   {
  //     name: "bill",
  //     age: 50,
  //     location: "Glasgow",
  //     hobbies: "swimming",
  //     picture: "https://i.redd.it/v0caqchbtn741.jpg",
  //   },
  //   {
  //     name: "mike",
  //     age: 45,
  //     location: "Edinburgh",
  //     hobbies: "cycling",
  //     picture: "https://i.redd.it/v0caqchbtn741.jpg",
  //   },
  // ];

  // const getFormInformation = (details) => {
  //   setName(details.name);
  //   setAge(details.age);
  //   setLocation(details.location);
  //   setHobbies(details.hobbies);
  //   setVaccinated(details.vaccinated);
  // };

  const potentialMatches = [
    {
      name: "Harrison",
      age: 23,
      location: "Alderran",
      hobbies: "Killing bad guys",
      picture:
        "https://i.pinimg.com/originals/4e/10/e5/4e10e564d614436de1fc60cb45198cc4.jpg",
    },
    {
      name: "Bill",
      age: 50,
      location: "Glasgow",
      hobbies: "Swimming",
      picture:
        "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-3.png",
    },
    {
      name: "Mike",
      age: 45,
      location: "Edinburgh",
      hobbies: "Cycling",
      picture:
        "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      name: "Doug",
      age: 25,
      location: "Inverness",
      hobbies: "Running",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
    },
    {
      name: "Joanna",
      age: 20,
      location: "Inverness",
      hobbies: "Running",
      picture: "https://image.freepik.com/free-photo/girl-cafe-with-smartphone_1321-389.jpg",
    },
    {
      name: "Alison",
      age: 18,
      location: "Inverness",
      hobbies: "Running",
      picture: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
  ];

  const getFormInformation = (details) => {
    setName(details.name);
    setAge(details.age);
    setLocation(details.location);
    setHobbies(details.hobbies);
    setVaccinated(details.vaccinated);
    setGender(details.gender);
    setPreference(details.preference);
  };

  const iconSelect = () => {
    if (window.location.pathname === "/") {
      return <i onClick="" className="help-button"><RiQuestionLine/></i>
    } else if (window.location.pathname.split("/")[2] === "conversation") {
      return  <form>
                <i onClick="" className="delete-button"><RiDeleteBin7Line/></i>
              </form>
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
                <ProfilePage getFormInformation={getFormInformation} />
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
