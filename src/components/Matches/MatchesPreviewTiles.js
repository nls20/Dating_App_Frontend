import MatchesTemplateTile from "./MatchesTemplateTile";
import "./MatchesPreviewTiles.css";
import { useEffect } from "react";
import { useState } from "react";

const MatchesPreviewTiles = ({ matches }) => {
  const [previews, setPreviews] = useState(null)

  useEffect(() => {
    if (matches) {
      let newPreviews = matches.map((match, index) => {
        const hrefName = "/matches/conversation/" + match.user.name;
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
