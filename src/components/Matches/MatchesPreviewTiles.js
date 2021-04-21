import MatchesTemplateTile from "./MatchesTemplateTile";
import "./MatchesPreviewTiles.css";
import { useEffect } from "react";
import { useState } from "react";

const MatchesPreviewTiles = ({ matches }) => {
  const [previews, setPreviews] = useState(null)

  useEffect(() => {
    if (matches) {
      const userId = sessionStorage.getItem("id")
      console.log('id', userId);
      let newPreviews = matches.map((match, index) => {
        const hrefName = "/matches/conversation/" + userId+"/"+ match.user.id;
        return (
          <a href={hrefName}>
            <MatchesTemplateTile match={match} key={index} />
          </a>
        );
      })
      setPreviews(newPreviews)
    }
  }, [matches]);

  return <section id="template-section">{previews}</section>;
};
export default MatchesPreviewTiles;
