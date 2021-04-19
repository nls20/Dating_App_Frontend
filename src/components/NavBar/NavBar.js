import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./NavBar.css";
import { AiFillHome } from "react-icons/ai";
import { ImHeart } from "react-icons/im";
import { GoPerson } from "react-icons/go";

const NavBar = () => {
  if (window.location.pathname === "/") {
    return (
      <section className="nav-bar-section">
        <ul>
          <li>
            <Link to="/">
              <p className="highlighted-button"><AiFillHome /><br></br>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p className="unhighlighted-button"><ImHeart/><br></br>Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p className="unhighlighted-button"><GoPerson /><br></br>Profile</p>
            </Link>
          </li>
        </ul>
      </section>
    );
  } else if (window.location.pathname === "/matches") {
    return (
      <section className="nav-bar-section">
        <ul>
          <li>
            <Link to="/">
              <p className="unhighlighted-button"><AiFillHome /><br></br>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p className="highlighted-button"><ImHeart/><br></br>Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p className="unhighlighted-button"><GoPerson /><br></br>Profile</p>
            </Link>
          </li>
        </ul>
      </section>
    );
  } else if (window.location.pathname === "/profile") {
    return (
      <section className="nav-bar-section">
        <ul>
          <li>
            <Link to="/">
              <p className="unhighlighted-button"><AiFillHome /><br></br>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p className="unhighlighted-button"><ImHeart/><br></br>Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p className="highlighted-button"><GoPerson /><br></br>Profile</p>
            </Link>
          </li>
        </ul>
      </section>
    );
  } else {
    return (
      <section className="nav-bar-section">
        <ul>
          <li>
            <Link to="/">
              <p className="unhighlighted-button"><AiFillHome /><br></br>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p className="unhighlighted-button"><ImHeart/><br></br>Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p className="unhighlighted-button"><GoPerson /><br></br>Profile</p>
            </Link>
          </li>
        </ul>
      </section>
    );
  }
};

export default NavBar;
