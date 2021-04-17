import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  if (window.location.pathname === "/") {
    return (
      <section class="nav-bar-section">
        <ul>
          <li>
            <Link to="/">
              <p class="highlighted-button">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p class="unhighlighted-button">Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p class="unhighlighted-button">Profile</p>
            </Link>
          </li>
        </ul>
      </section>
    );
  } else if (window.location.pathname === "/matches") {
    return (
      <section class="nav-bar-section">
        <ul>
          <li>
            <Link to="/">
              <p class="unhighlighted-button">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p class="highlighted-button">Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p class="unhighlighted-button">Profile</p>
            </Link>
          </li>
        </ul>
      </section>
    );
  } else if (window.location.pathname === "/profile") {
    return (
      <section class="nav-bar-section">
        <ul>
          <li>
            <Link to="/">
              <p class="unhighlighted-button">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p class="unhighlighted-button">Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p class="highlighted-button">Profile</p>
            </Link>
          </li>
        </ul>
      </section>
    );
  } else {
    return (
      <section class="nav-bar-section">
        <ul>
          <li>
            <Link to="/">
              <p class="unhighlighted-button">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/matches">
              <p class="unhighlighted-button">Matches</p>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <p class="unhighlighted-button">Profile</p>
            </Link>
          </li>
        </ul>
      </section>
    );
  }
};

export default NavBar;
