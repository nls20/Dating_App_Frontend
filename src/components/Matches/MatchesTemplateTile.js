import { useEffect } from "react";
import "./MatchesTemplateTile.css";

const MatchesTemplateTile = ({ match }) => {
  console.log("match", match);

  return (
    <section id="tile-template-section">
      {/* <img src={match.user.profileImages[0]}/> */}
      <p>{match.name}</p>
    </section>
  );
};
export default MatchesTemplateTile;
