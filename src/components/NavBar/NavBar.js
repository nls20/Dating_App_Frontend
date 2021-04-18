import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  if (window.location.pathname === "/") {
    return (
      <section className="nav-bar-section">
        <ul>
          <li>
            <Link to="/">
              <p className="highlighted-button">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p className="unhighlighted-button">Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p className="unhighlighted-button">Profile</p>
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
              <p className="unhighlighted-button">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p className="highlighted-button">Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p className="unhighlighted-button">Profile</p>
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
              <p className="unhighlighted-button">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p className="unhighlighted-button">Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p className="highlighted-button">Profile</p>
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
              <p className="unhighlighted-button">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p className="unhighlighted-button">Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p className="unhighlighted-button">Profile</p>
            </Link>
          </li>
        </ul>
      </section>
    );
  }
};

export default NavBar;
