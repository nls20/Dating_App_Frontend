import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SwipingPage from "../components/Swiping/SwipingPage";
import NavBar from "../components/NavBar/NavBar";
import MatchesPage from "../components/Matches/MatchesPage";
import ProfilePage from "../components/Profile/ProfilePage";
import Chatroom from "../components/Conversation/Chatroom";
import "./VinderContainer.css";

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
      name: "andrew",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory:
        "this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message this is andrew message ",
    },
    {
      name: "david",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory: "this is a david message less than 60 characters",
    },
    {
      name: "mark",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory:
        "this is a mark message more than 60 characters so some of it will not appear",
    },
    {
      name: "nicola",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory: "this is a nicola message",
    },
    {
      name: "brian",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory: "this is a brian message",
    },
    {
      name: "andrew",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory: "this is a message",
    },
    {
      name: "david",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory: "this is a message",
    },
    {
      name: "mark",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory: "this is a message",
    },
    {
      name: "nicola",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
      messageHistory: "this is a message",
    },
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
      name: "John",
      age: 30,
      location: "Inverness",
      hobbies: "Running",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
    },
    {
      name: "Bill",
      age: 50,
      location: "Glasgow",
      hobbies: "Swimming",
      picture:
        "https://www.google.com/search?q=images+free+profile&tbm=isch&ved=2ahUKEwjDroG3jIXwAhUM-BoKHTeEAugQ2-cCegQIABAA&oq=images+free+profile&gs_lcp=CgNpbWcQAzIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeOgQIIxAnOgUIABCxAzoCCAA6BwgAELEDEEM6BAgAEEM6BAgAEB46BggAEAUQHlCBqQNY3coDYJ_OA2gCcAB4AIABS4gB5wmSAQIxOZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=-7t6YIPFFozwa7eIisAO&bih=944&biw=829#imgrc=jRy1X87aruZZfM",
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
      name: "Barry",
      age: 20,
      location: "Inverness",
      hobbies: "Running",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
    },
    {
      name: "James",
      age: 18,
      location: "Inverness",
      hobbies: "Running",
      picture: "https://i.redd.it/v0caqchbtn741.jpg",
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

  return (
    <>
      <section id="router">
        <Router forceRefresh={true}>
          <div>
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
