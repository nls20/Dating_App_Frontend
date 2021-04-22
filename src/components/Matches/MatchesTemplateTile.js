// import { useEffect } from "react";
import "./MatchesTemplateTile.css";

const MatchesTemplateTile = ({ match }) => {
  return (
    <section id="tile-template-section">
      <img src={match.profileImages[0].mongoId}/>
      <p>{match.name}</p>
    </section>
  );
};
export default MatchesTemplateTile;
